---
title: Implementing JWT Token Refresh Concept for .NET Core 9
short_title: JWT Token Refresh
---

<blockquote style="border-color: #faad14;">
<p><strong>The concept of Bearer Header Authorization based on JWT token implementation provided by .NET Core 9 is the same as in .NET Core 8. </strong></p></blockquote>

## Introduction

The compiled code of our .NET Core 9 application is on [our GitHub repository](https://github.com/cioina/cioina.azurewebsites.net). For testing purpose, we will use [MyTested](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our project is based on [BookStore](https://github.com/kalintsenkov/BookStore) repository and adapted to work with MyTested library. MyTested was engineered to work without middleware which is an advantage for many cases. However, the scope of this article was to find a way to tests middleware with MyTested. The full test project source code can be found on [our another GitHub repository](https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test).

## Use Case Scenario

The user signs in and gets a JWT token valid for 30 minutes. The user opens a webpage to create/edit an article. It takes 35 minutes to finish the work. The user clicks on submit button. A modal form pops up and asks the user to refresh JWT token by entering a password. The user gets a new JWT token valid for next 30 minutes. Finally, the user clicks submit button and saves the work.

## JWT Token Refresh Concept

First, we need to know how basic native JWT token implemented in .NET Core 9 works. Usually, there are [two types of API endpoints: public and private](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs). A private API endpoint look like this:

```csharp
[HttpPut]
[Route(nameof(Update))]
[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)]
public async Task<ActionResult<UserResponseEnvelope>> Update(
    UserUpdateCommand command)
    => await this.Send(command);
```

The user signs in and gets a JWT token which is saved in localStorage. Then, any request to the server includes obtained JWT token in the Authorization header. The server won’t use the token on public endpoints. It means that the server won’t try to decrypt the token. On the private endpoints, the server will try to decrypt the token, apply `BearerPolicy`, and match the role from the token to `AdministratorRoleName` list. At this point, the basic native .NET Core 9 implementation does not care if the user form the JWT token exists in the database, and it does not care if the role exists in the database ether. However, the server checks if the token expired and returns a 401 error if it’s the case. With all this in mind, we implemented the concept of JWT token refresh period called PRefresh. Let’s call the token’s valid period PValid. Then, `SecurityTokenDescriptorExpiresInMinutes` from [appsettings.json](https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net9.0/appsettings.json) = PValid + PRefresh and `SecurityTokenRefreshRate ` = PRefresh/(PValid + PRefresh). So, if `SecurityTokenDescriptorExpiresInMinutes`= 60 minutes and `SecurityTokenRefreshRate ` = 1/2, it means that PValid = 30 minutes and PRefresh = 30 minutes. If `SecurityTokenRefreshRate ` = 1/4, it means that PValid = 45 minutes and PRefresh = 15 minutes. If `SecurityTokenRefreshRate ` = 3/4, it means that PValid = 15 minutes and PRefresh = 45 minutes and so on. 

## JWT Token Refresh Implementation

One interesting idea of JWT token implementation together with refresh token is on [EdiWang](https://github.com/EdiWang/Edi.AspNetCore.Jwt/blob/master/src/Edi.AspNetCore.Jwt/DefaultJwtAuthManager.cs) GitHub repository. Our main difference from above implementation is not using web browser cookies and uses native .NET Core implementation which is “controlled” by the .NET Core framework itself. One problem we solved in this article, is the implementation of `JWT Token` refresh mechanism. There is no standard way to refresh JWT token in .NET Core 9. The main idea was to check a valid `JWT token` right after standard .NET Core authorization and before entering of an API controller. In fact, we needed to use following formula with this small piece of code:

```csharp
var claimsPrincipal = context.User!;
 if (claimsPrincipal != null)
 {
     var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
     if (isAuthenticated != null && (bool)isAuthenticated)
     {
         var claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
         if (claim != null)
         {
             clientId = claim.Value;
         }
     }
 }
 if (clientId != null)
 {
     var iat = claimsPrincipal.FindFirst("iat");
     var exp = claimsPrincipal.FindFirst("exp");
     if (iat != null && exp != null)
     {
         var pValid = (long.Parse(exp.Value) - long.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
         var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();
         if (current < pValid)
         {
             await ReturnSecurityTokenRefreshRate(context, "SecurityTokenRefreshRate", "Please refresh your JWT token");
             return;
         }
     }
 }
```

So, we needed a middleware to place the above piece of code. A good candidate we found was AspNetCoreRateLimit library, so we decided to modify its source code keeping in mind also the possibility of testing it with MyTested. The original AspNetCoreRateLimit middleware is called [RateLimitMiddleware.cs](https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs) Following is the modified source code that is used in our actual application.

### Modified RateLimitMiddleware

```csharp
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AspNetCoreRateLimit
{
    public abstract class RateLimitMiddleware<TProcessor> : IMiddleware
        where TProcessor : IRateLimitProcessor
    {
        private readonly IWebHostEnvironment _env;
        private readonly TProcessor _processor;
        private readonly RateLimitOptions _options;
        private readonly IRateLimitConfiguration _config;
        private readonly bool _securityTokenRefreshOnly;
        protected RateLimitMiddleware(
            IWebHostEnvironment env,
            RateLimitOptions options,
            TProcessor processor,
            IRateLimitConfiguration config,
            bool securityTokenRefreshOnly)
        {
            _env = env;
            _options = options;
            _processor = processor;
            _config = config;
            _securityTokenRefreshOnly = securityTokenRefreshOnly;

            if (_env.EnvironmentName == "Test")
            {
                _config.RegisterResolvers();
            }
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate _next)
        {
            // check if rate limiting is enabled (EnableEndpointRateLimiting)
            if (_options == null)
            {
                await _next.Invoke(context);
                return;
            }

            string clientIp = null;
            string clientId = null;

            var claimsPrincipal = context.User!;

            if (claimsPrincipal != null)
            {
                var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                if (isAuthenticated != null && (bool)isAuthenticated)
                {
                    var claim = claimsPrincipal.FindFirst(ClaimTypes.Name);
                    if (claim != null)
                    {
                        clientId = claim.Value;
                    }
                }
            }

            if (!_config.IpResolvers.IsEmpty)
            {
                var resolver = _config.IpResolvers.GetEnumerator();
                while (resolver.MoveNext())
                {
                    clientIp = resolver.Current.Value.ResolveIp(context);
                    if (!string.IsNullOrEmpty(clientIp))
                    {
                        break;
                    }
                }
            }

            var path = context.Request.Path.ToString().ToLowerInvariant();
            var identity = new ClientRequestIdentity
            {
                ClientIp = clientIp ?? context.Connection.RemoteIpAddress?.MapToIPv4().ToString(),
                Path = path == "/"
                    ? path
                    : path.TrimEnd('/'),
                HttpVerb = context.Request.Method.ToLowerInvariant(),
                ClientId = clientId ?? "anon"
            };


            // check white list
            if (!_processor.IsWhitelisted(identity))
            {
                if (clientId != null)
                {
                    var iat = claimsPrincipal.FindFirst("iat");
                    var exp = claimsPrincipal.FindFirst("exp");
                    if (iat != null && exp != null)
                    {
                        var pValid = (long.Parse(exp.Value) - long.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        if (this._env.EnvironmentName == "Test")
                        {
                            if (clientId == "SecurityTokenRefreshException@email.com1")
                            {
                                await Task.FromException(new SecurityTokenRefreshException($"This is a test. PValid:  {pValid} Current: {current} ClientId: {clientId}"));
                            }
                        }
                        else if (current < pValid)
                        {
                            await ReturnSecurityTokenRefreshRate(context, "SecurityTokenRefreshRate", "Please refresh your JWT token");
                            return;
                        }
                    }
                }

                #region NOT securityTokenRefreshOnly
                if (!_securityTokenRefreshOnly)
                {
                    if (this._env.EnvironmentName == "Test")
                    {
                        if (clientIp == "0.0.0.0")
                        {
                            await Task.FromException(new MatchingRulesException($"This is a test. ClientIp: {identity.ClientIp}"));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = null;
                    rules = await _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    if (rules == null)
                    {
                        if (this._env.EnvironmentName == "Test")
                        {
                            await Task.FromException(new MatchingRulesException($"This is a test. ClientIp: {identity.ClientIp}"));
                        }
                        else
                        {
                            await ReturnSecurityTokenRefreshRate(context, "MatchingRulesException", $"Matching rules is null. Your IP address is: {identity.ClientIp}");
                            return;
                        }
                    }

                    var rulesDict = new Dictionary<RateLimitRule, RateLimitCounter>();

                    foreach (var rule in rules)
                    {
                        // increment counter
                        var rateLimitCounter = await _processor.ProcessRequestAsync(identity, rule, context.RequestAborted);

                        if (rule.Limit > 0)
                        {
                            // check if key expired
                            if (rateLimitCounter.Timestamp + rule.PeriodTimespan.Value < DateTime.UtcNow)
                            {
                                continue;
                            }

                            // check if limit is reached
                            if (rateLimitCounter.Count > rule.Limit)
                            {
                                //compute retry after value
                                var retryAfter = rateLimitCounter.Timestamp.RetryAfterFrom(rule);

                                // log blocked request
                                LogBlockedRequest(context, identity, rateLimitCounter, rule);

                                if (_options.RequestBlockedBehaviorAsync != null)
                                {
                                    await _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                                }

                                if (this._env.EnvironmentName == "Test")
                                {
                                    await Task.FromException(new RateLimitMiddlewareException($"This is a test. rateLimitCounter.Count {rateLimitCounter.Count} rule.Limit: {rule.Limit} ClientIp: {identity.ClientIp}"));
                                }

                                if (!rule.MonitorMode)
                                {
                                    // break execution
                                    await ReturnQuotaExceededResponse(context, rule, retryAfter, identity.ClientIp);

                                    return;
                                }
                            }
                        }
                        // if limit is zero or less, block the request.
                        else
                        {
                            // log blocked request
                            LogBlockedRequest(context, identity, rateLimitCounter, rule);

                            if (_options.RequestBlockedBehaviorAsync != null)
                            {
                                await _options.RequestBlockedBehaviorAsync(context, identity, rateLimitCounter, rule);
                            }

                            if (this._env.EnvironmentName == "Test")
                            {
                                await Task.FromException(new RateLimitMiddlewareException($"This is a test. rateLimitCounter.Count {rateLimitCounter.Count} rule.Limit: {rule.Limit} ClientIp: {identity.ClientIp}"));
                            }

                            if (!rule.MonitorMode)
                            {
                                // break execution (Int32 max used to represent infinity)
                                await ReturnQuotaExceededResponse(context, rule, int.MaxValue.ToString(System.Globalization.CultureInfo.InvariantCulture), identity.ClientIp);

                                return;
                            }
                        }

                        rulesDict.Add(rule, rateLimitCounter);
                    }

                    // set X-Rate-Limit headers for the longest period
                    if (rulesDict.Count != 0 && !_options.DisableRateLimitHeaders)
                    {
                        var rule = rulesDict.OrderByDescending(x => x.Key.PeriodTimespan).FirstOrDefault();
                        var headers = _processor.GetRateLimitHeaders(rule.Value, rule.Key, context.RequestAborted);

                        headers.Context = context;

                        context.Response.OnStarting(SetRateLimitHeaders, state: headers);
                    }
                }
                #endregion
            }

            if (this._env.EnvironmentName == "Test")
            {
                await Task.FromResult(true);
            }
            else
            {
                await _next.Invoke(context);
            }
        }

        private static Task ReturnSecurityTokenRefreshRate(HttpContext context, string key, string message)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.UnprocessableEntity;

            var result = SerializeObject(new ErrorListResult(key,
                        [
                            message
                        ]));

            return context.Response.WriteAsync(result);
        }

        private static string SerializeObject(object obj)
            => JsonConvert.SerializeObject(obj, new JsonSerializerSettings
            {
                ContractResolver = new DefaultContractResolver
                {
                    NamingStrategy = new CamelCaseNamingStrategy(true, true)
                }
            });

        public virtual Task ReturnQuotaExceededResponse(HttpContext httpContext, RateLimitRule rule, string retryAfter, string clientIp)
        {
            //Use Endpoint QuotaExceededResponse
            if (rule.QuotaExceededResponse != null)
            {
                _options.QuotaExceededResponse = rule.QuotaExceededResponse;
            }
            var message = string.Format(
                    _options.QuotaExceededResponse?.Content ??
                    _options.QuotaExceededMessage ??
                    "Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP adress is {3}",
                    rule.Limit,
                    rule.PeriodTimespan.HasValue ? FormatPeriodTimespan(rule.PeriodTimespan.Value) : rule.Period, retryAfter, clientIp
             );

            if (!_options.DisableRateLimitHeaders)
            {
                httpContext.Response.Headers.RetryAfter = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? "text/plain";
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            var result = SerializeObject(new ErrorListResult("QuotaExceeded",
                        [
                            message
                        ]));

            return httpContext.Response.WriteAsync(result);
        }

        private static string FormatPeriodTimespan(TimeSpan period)
        {
            var sb = new StringBuilder();

            if (period.Days > 0)
            {
                sb.Append($"{period.Days}d");
            }

            if (period.Hours > 0)
            {
                sb.Append($"{period.Hours}h");
            }

            if (period.Minutes > 0)
            {
                sb.Append($"{period.Minutes}m");
            }

            if (period.Seconds > 0)
            {
                sb.Append($"{period.Seconds}s");
            }

            if (period.Milliseconds > 0)
            {
                sb.Append($"{period.Milliseconds}ms");
            }

            return sb.ToString();
        }

        protected abstract void LogBlockedRequest(HttpContext httpContext, ClientRequestIdentity identity, RateLimitCounter counter, RateLimitRule rule);

        private Task SetRateLimitHeaders(object rateLimitHeaders)
        {
            var headers = (RateLimitHeaders)rateLimitHeaders;

            headers.Context.Response.Headers["X-Rate-Limit-Limit"] = headers.Limit;
            headers.Context.Response.Headers["X-Rate-Limit-Remaining"] = headers.Remaining;
            headers.Context.Response.Headers["X-Rate-Limit-Reset"] = headers.Reset;

            return Task.CompletedTask;
        }
    }
}
```

## Testing of RateLimitMiddleware With MyTested Library

From the start, we need to keep in mind that MyTested does not provide support for middleware testing. So, we found a work around which is not 100% accurate. The main idea is that you have to setup the middleware manually in the right place to be logically correct. In our case, we’ve got `GetTagsWithRateLimitMiddleware` and `GetAllWithRateLimitMiddleware` from [StaticTestData.cs](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Data/StaticTestData.cs)). Also, RateLimitMiddleware needs shared `MemoryCache`. On the other hand, MyTested just simulates shared `MeroryCache`. So, we modified source code of MyTested to work with the actual `MeroryCache` Also, we introduced an option `”ReplaceMemoryCache": false` (See [testsettings.json](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/testsettings.json)). From our modified source code of RateLimitMiddleware, you can see that we try to keep the original functional and add JWT token refresh concept also. As a result, we’ve got following limitations:

- the `clientId` is taken from JWT token only
- the `clientIp` is taken from `context.Connection.RemoteIpAddress` only
- `ClientWhitelist` configuration option does not work with public endpoints, and it should be empty.
Also, the “correct way” to configure it is following:

```csharp
...
.UseRouting()
.InitializeRateLimit()
.UseMiddleware<IpRateLimitMiddleware>()
.UseAuthentication()
.UseAuthorization()
.UseMiddleware<ClientRateLimitMiddleware>()
...
```

All our middleware tests are in [RateLimit](https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test/RateLimit) folder. For token refresh concept, we’ve got just two tests: `Edit_tag_with_refresh_token_should_fail` and `Login_with_password_with_refresh_token_and_whitelisted_private_route_should_return_success_with_token`. One interesting idea of a test( See [AsyncKeyedLockTest.cs](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/RateLimit/AsyncKeyedLockTest.cs)) comes from [AsyncKeyedLock](https://github.com/MarkCiliaVincenti/AsyncKeyedLock).
Also, we made some additional small changes in AspNetCoreRateLimit library by borrowing some ideas from [Edi.CacheAside.InMemory](https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs). Finaly, we’ve used following settings for our tests project:

### Test Settings

```json
 {
  "General": {
    "ReplaceMemoryCache": false
  },

  "ApplicationSettings": {
    "SecurityTokenDescriptorKey": "test1223dfgdfkffpie",
    "SecurityTokenDescriptorExpiresInMinutes": 10,
    "SecurityTokenRefreshRate": 0.5,
    "MaxFailedAccessAttempts": 5,
    "DefaultLockoutTimeSpanInMinutes": 0,
    "ExperimentalIpAddress": "::1"
  },

  "IpRateLimiting": {
    "EnableEndpointRateLimiting": true,
    "SecurityTokenRefreshRate": 0.5,
    "StackBlockedRequests": false,
    "RealIpHeader": "X-Real-IP",
    "HttpStatusCode": 429,
    "IpWhitelist": [ "::1/10", "192.168.0.0/24" ],
    "EndpointWhitelist": [
      "post:/api/v1.0/identity",
      "post:/api/v1.0/identity/login",
      "get:/*.json",
      "get:/*.js",
      "get:/*.css",
      "get:/*.ico"
    ],
    "ClientWhitelist": [ "ClientWhitelist@email.com1" ],
    "QuotaExceededResponse": {
      "Content": "Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}",
      "ContentType": "application/json"
    },
    "GeneralRules": [
    ]
  },

  "IpRateLimitPolicies": {
    "IpRules": [
    ]
  }
}
```

## Proof of Concept

1. Clone [our GitHub repository](https://github.com/cioina/cioina.azurewebsites.net)
2. Follow the instruction form the Readme.md
3. Change following in [appsettings.json](https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net9.0/appsettings.json):
    "SecurityTokenDescriptorExpiresInMinutes": 10,
    "SecurityTokenRefreshRate": 0.9 (both places)
4. Sign-in as admin using menu: Home -> Sign-in
5. Go to menu Admin->Articles editor
6. Click on New Article button.
7. Fill in the form and wait for 2 minutes.
8. Click Submit button and Yes button
9. A drawer must show up asking to confirm password. It means that your JWT token expired, but you can refresh it.

## Conclusion

In this article, we introduced JWT token Refresh period concept and used a middleware to implement it. In fact, we used modified source code of RateLimitMiddleware from AspNetCoreRateLimit library. It means that it still can be used to limit public endpoints (See [GeneralRules](https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net9.0/appsettings.json) example). We implemented a way for testing the middleware with MyTested library. Finally, we provided a compiled .NET application for proof of concept.

## Credits

- [Ivaylo Kenov](https://github.com/ivaylokenov)
- [Kalin Tsenkov](https://github.com/kalintsenkov)
- [Steve Smith](https://github.com/ardalis)
- [Jason Taylor](https://github.com/jasontaylordev)
- [Stefan Prodan](https://github.com/stefanprodan)
- [Mark Cilia Vincenti](https://github.com/MarkCiliaVincenti)
- [Jimmy Bogard](https://github.com/jbogard)
- [Ben Morris](https://github.com/BenMorris)
