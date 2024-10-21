---
title: Testing Middleware with MyTested 
short_title: Testing Middleware
---

## Introduction

The compiled code of our .NET Core 8 application is on [our GitHub repository](https://github.com/cioina/cioina.azurewebsites.net). For this test project, which is part our application, we will use [MyTested](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 8 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 8 project is based on [BookStore](https://github.com/kalintsenkov/BookStore) repository and adapted to work with MyTested library.

## Rate Limiting Testing

[appsettings.json](https://github.com/cioina/cioina.azurewebsites.net/blob/main/bin/Release/net8.0/appsettings.json)
.NET Core [RateLimiting](https://github.com/dotnet/runtime/tree/main/src/libraries/System.Threading.RateLimiting/src/System/Threading/RateLimiting) In-memory rate limiting 
Redis [RedisTokenBucketManager](https://github.com/cristipufu/aspnetcore-redis-rate-limiting/blob/master/src/RedisRateLimiting/TokenBucket/RedisTokenBucketManager.cs).
 AspNetCoreRateLimit uses [AsyncKeyedLock](https://github.com/MarkCiliaVincenti/AsyncKeyedLock) alternative [Edi.CacheAside.InMemory](https://github.com/EdiWang/Edi.CacheAside.InMemory/blob/master/src/Edi.CacheAside.InMemory/MemoryCacheAside.cs) Original RateLimitMiddleware [AspNetCoreRateLimit](https://github.com/stefanprodan/AspNetCoreRateLimit/blob/master/src/AspNetCoreRateLimit/Middleware/RateLimitMiddleware.cs)

## Exception Testing

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
                        var h = (long.Parse(exp.Value) - long.Parse(iat.Value)) * _options.SecurityTokenRefreshRate;
                        var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                        if (this._env.EnvironmentName == "Test")
                        {
                            if (clientId == "SecurityTokenRefreshException@email.com1")
                            {
                                await Task.FromException(new SecurityTokenRefreshException($"Security token refresh rate is  {h}"));
                            }
                        }
                        else if (current < h)
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
                            await Task.FromException(new MatchingRulesException($"This is for test only: {identity.ClientIp}"));
                        }
                    }

                    IEnumerable<RateLimitRule> rules = null;
                    rules = await _processor.GetMatchingRulesAsync(identity, context.RequestAborted);
                    if (rules == null)
                    {
                        if (this._env.EnvironmentName == "Test")
                        {
                            await Task.FromException(new MatchingRulesException($"Matching rules is null. You IP address is: {identity.ClientIp}"));
                        }
                        else
                        {
                            await ReturnSecurityTokenRefreshRate(context, "MatchingRulesException", $"Matching rules is null. You IP address is: {identity.ClientIp}");
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
                                    await Task.FromException(new RateLimitMiddlewareException($"Too many requests {rule.Limit}"));
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
                                await Task.FromException(new RateLimitMiddlewareException($"Too many requests {rule.Limit}"));
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
                    if (rulesDict.Any() && !_options.DisableRateLimitHeaders)
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

            var result = SerializeObject(new ErrorListResult(key, new[]
                        {
                            message
                        }));

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
                httpContext.Response.Headers["Retry-After"] = retryAfter;
            }

            httpContext.Response.ContentType = _options.QuotaExceededResponse?.ContentType ?? "text/plain";
            httpContext.Response.StatusCode = _options.QuotaExceededResponse?.StatusCode ?? _options.HttpStatusCode;


            var result = SerializeObject(new ErrorListResult("QuotaExceeded", new[]
                        {
                            message
                        }));

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

### Setup

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

## MyTested Library Limitations

We applied modified version of MyTested library to three popular GitHub repositories: [BookStore](https://github.com/kalintsenkov/BookStore/tree/main/src/Server), [RealWorld](https://github.com/gothinkster/aspnetcore-realworld-example-app/tree/master/src/Conduit), and [CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture/tree/main/src). Our quick investigation shows that BookStore can be configurated to work 100% with MyTested while RealWorld works only with [anonymous controllers](https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/Features/Tags/TagsController.cs) and CleanArchitecture does not work at all.
The full test project source code can be found on [our GitHub repository](https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Test/Test).

## Credits

- [Ivaylo Kenov](https://github.com/ivaylokenov)
- [Kalin Tsenkov](https://github.com/kalintsenkov)
- [Steve Smith](https://github.com/ardalis)
- [Jason Taylor](https://github.com/jasontaylordev)
- [Stefan Prodan](https://github.com/stefanprodan)
- [Mark Cilia Vincenti](https://github.com/MarkCiliaVincenti)
- [Jimmy Bogard](https://github.com/jbogard)
- [Ben Morris](https://github.com/BenMorris)
