---
order: 0
title: ASP.NET Core 7 Testing
---

<blockquote style="border-color: #faad14;">
<p><strong>All C# code from this article was tested using <a href="https://versionsof.net/" target="_blank" rel="noopener">.NET Core 7.0.12</a>, modyfied source code of  <a href="https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc" target="_blank" rel="noopener">MyTested.AspNetCore.Mvc - Fluent Testing
  Library for ASP.NET Core MVC</a> provided under <a href="https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE" target="_blank" rel="noopener">Apache License, Version 2.0 or Microsoft Public License (Ms-PL)</a> and modyfied source code of  <a href="https://github.com/kalintsenkov/BookStore" target="_blank" rel="noopener">Book Store</a> provided under <a href="https://github.com/kalintsenkov/BookStore/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a> .</strong></p>
</blockquote>

[MyTested](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) is well known for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 7 and API controlers with Bearer Header Authorization based on JWT token implementation provided by .NET Core 7. Our ASP.NET Core project is based on [Book Store](https://github.com/kalintsenkov/BookStore) and modefied in a such way that actualy is posible to be tested with MyTested library.

## .NET Core Identity Controller Implementatin

Our controler impleemntatin comes from [here](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs)

```csharp
namespace BlogAngular.Web.Features;

using System.Threading.Tasks;
using Application.Identity.Commands.Common;
using Application.Identity.Commands.Login;
using Application.Identity.Commands.Register;
using Application.Identity.Commands.Update;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static Domain.Common.Models.ModelConstants.Identity;

public class IdentityController : ApiController
{
    [HttpPost]
    [Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]
    public async Task<ActionResult<UserResponseJsonProperty>> LoginPassword(
        LoginPasswordCommand command)
    {
        command.ControllerContext = this.ControllerContext;

        return await this.Send(command);
    }

    [HttpPost]
    [Route(nameof(Login))]
    public async Task<ActionResult<UserResponseJsonProperty>> Login(
        UserLoginCommand command)
        => await this.Send(command);

    [HttpPost]
    [Route(nameof(Register))]
    public async Task<ActionResult<UserResponseJsonProperty>> Register(
        UserRegisterCommand command)
        => await this.Send(command);

    [HttpPut]
    [Route(nameof(Update))]
    [Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]
    public async Task<ActionResult<UserResponseJsonProperty>> Update(
        UserUpdateCommand command)
    {
        command.ControllerContext = this.ControllerContext;

        return await this.Send(command);
    }

}
```

## .NET Core Identity Services Implementatin

Our service impementatin comes from [here](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs)

```csharp
namespace BlogAngular.Infrastructure.Identity.Services;

using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.Common.Models;
using Application.Identity;
using Application.Identity.Commands.Common;
using Application.Identity.Commands.Register;
using Application.Identity.Commands.Update;
using Application.Identity.Queries.Profile;
using Common.Extensions;
using Common.Events;
using Domain.Common.Events.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;

internal class IdentityService : IIdentity
{
    private const string InvalidErrorMessage = "Invalid credentials.";
    private const string NoDataErrorMessage = "There is no data to proccess.";
    private const string IdentityErrorMessage = "Something went wrong. The server may be down.";
    private const string UserNameTakenErrorMessage = "The user name has been taken.";
    private const string EmailTakenErrorMessage = "The email has been taken.";
    private const string UserNullErrorMessage = "Cannot find user by Id.";
    private const string ProfileErrorMessage = "Cannot find user profile.";
    private const string UsernameFormatErrorMessage = "Username must contain letters and numbers.";
    private const string PasswordFormatErrorMessage = "Password requared upper and lower case letters, digits, and at least one special simbol.";

    private readonly IWebHostEnvironment env;
    private readonly UserManager<User> userManager;
    private readonly IJwtGenerator jwtGenerator;
    private readonly IEventDispatcher eventDispatcher;

    public IdentityService(
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher
        )
    {
        this.env = env;
        this.userManager = userManager;
        this.jwtGenerator = jwtGenerator;
        this.eventDispatcher = eventDispatcher;
    }

    public async Task<Result<UserResponseJsonProperty>> LoginPassword(LoginPasswordCommand userRequest)
    {
        if (userRequest.UserJson.Password == null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "no_data_error", new[] { NoDataErrorMessage } }
                    }
            );
        }

        bool isNewToken = false;
        ClaimsPrincipal? claimsPrincipal = userRequest.ControllerContext.HttpContext?.User!;
        if (claimsPrincipal != null)
        {
            var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
            if (isAuthenticated == null || !(bool)isAuthenticated)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            var iat = claimsPrincipal.FindFirst("iat");
            var exp = claimsPrincipal.FindFirst("exp");
            if (iat == null || exp == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
                );
            }

            //In PHP: if(!Utils::timestamp($oldPayload['exp'])->subMinutes((int)config('jwt.ttl')/2)->isPast())
            var half = (long.Parse(exp.Value) - long.Parse(iat.Value)) / 2;
            var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

            isNewToken = current < half;
        }
        else
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
            );
        }

        User? user;
        if (this.env.EnvironmentName == "Test")
        {
            var name = claimsPrincipal.Identity?.Name;
            if (name == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "debug_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            user = await this.userManager.FindByEmailAsync(name);
        }
        else
        {
            var claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
            if (claim == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "name_identifier_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            user = await this.userManager.FindByIdAsync(claim.Value);
        }

        if (user == null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "user_error", new[] { UserNullErrorMessage } }
                    }
            );
        }

        var passwordValid = await this.userManager.CheckPasswordAsync(
            user,
            userRequest.UserJson.Password);

        if (!passwordValid)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "invalid_error", new[] { InvalidErrorMessage } }
                    }
            );
        }

        string? token;
        if (this.env.EnvironmentName == "Test")
        {
            token = $"Token: {user.Email}";
        }
        else
        {
            token = isNewToken ? await this.jwtGenerator.GenerateToken(user) :
            userRequest.ControllerContext.HttpContext!.Request.Headers.Authorization.ToString().Substring("Bearer ".Length).Trim();
        }

        return new UserResponseJsonProperty
        {
            UserJson = new UserResponseModel(user.Email, user.UserName, token)
        };
    }

    public async Task<Result<UserResponseJsonProperty>> Update(UserUpdateCommand userRequest)
    {
        if (userRequest.UserJson.FullName == null && userRequest.UserJson.Password == null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                         { "no_data_error", new[] { NoDataErrorMessage } }
                    }
            );
        }

        bool isNewToken = false;
        ClaimsPrincipal? claimsPrincipal = userRequest.ControllerContext.HttpContext?.User!;
        if (claimsPrincipal != null)
        {
            var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
            if (isAuthenticated == null || !(bool)isAuthenticated)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            var iat = claimsPrincipal.FindFirst("iat");
            var exp = claimsPrincipal.FindFirst("exp");
            if (iat == null || exp == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
                );
            }

            //In PHP: if(!Utils::timestamp($oldPayload['exp'])->subMinutes((int)config('jwt.ttl')/2)->isPast())
            var half = (long.Parse(exp.Value) - long.Parse(iat.Value)) / 2;
            var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

            isNewToken = current < half;
        }
        else
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "identity_error", new[] { IdentityErrorMessage } }
                    }
            );
        }

        if (userRequest.UserJson.FullName != null)
        {
            var userByName = await this.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            if (userByName != null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "name_error", new[] { UserNameTakenErrorMessage } }
                    }
                );
            }
        }

        User? user;
        if (this.env.EnvironmentName == "Test")
        {

            var name = claimsPrincipal.Identity?.Name;
            if (name == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "debug_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            user = await this.userManager.FindByEmailAsync(name);
        }
        else
        {
            var claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
            if (claim == null)
            {
                return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "name_identifier_error", new[] { IdentityErrorMessage } }
                    }
                );
            }
            user = await this.userManager.FindByIdAsync(claim.Value);
        }

        if (user == null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "user_error", new[] { UserNullErrorMessage } }
                    }
            );
        }

        if (userRequest.UserJson.FullName != null)
        {
            var identityResult1 = await this.userManager.SetUserNameAsync(
                 user,
                 userRequest.UserJson.FullName);

            if (!identityResult1.Succeeded)
            {
                var errors = new Dictionary<string, string[]>();
                identityResult1.Errors.ForEach(e =>
                {
                    switch (e.Code)
                    {
                        case "InvalidUserName":
                            e.Description = UsernameFormatErrorMessage;
                            break;
                    }
                    errors.Add(e.Code, new[] { e.Description });
                });

                return Result<UserResponseJsonProperty>.Failure(errors);
            }
        }

        if (userRequest.UserJson.Password != null)
        {
            var identityResult2 = await this.userManager.RemovePasswordAsync(user);

            if (!identityResult2.Succeeded)
            {
                var errors = new Dictionary<string, string[]>();
                identityResult2.Errors.ForEach(e =>
                {
                    errors.Add(e.Code, new[] { e.Description });
                });

                return Result<UserResponseJsonProperty>.Failure(errors);
            }

            identityResult2 = await this.userManager.AddPasswordAsync(
                 user,
                 userRequest.UserJson.Password);

            if (!identityResult2.Succeeded)
            {
                var errors = new Dictionary<string, string[]>();
                identityResult2.Errors.ForEach(e =>
                {
                    switch (e.Code)
                    {
                        case "PasswordRequiresDigit":
                            e.Description = PasswordFormatErrorMessage;
                            break;
                    }
                    errors.Add(e.Code, new[] { e.Description });
                });
                return Result<UserResponseJsonProperty>.Failure(errors);
            }
        }

        string? token;
        if (this.env.EnvironmentName == "Test")
        {
            token = $"Token: {user.Email}";
        }
        else
        {
            token = isNewToken ? await this.jwtGenerator.GenerateToken(user) :
            userRequest.ControllerContext.HttpContext!.Request.Headers.Authorization.ToString().Substring("Bearer ".Length).Trim();
        }

        return new UserResponseJsonProperty
        {
            UserJson = new UserResponseModel(user.Email, user.UserName, token)
        };
    }

    public async Task<Result<ProfileResponseJsonProperty>> Profile(string userName)
    {
        var userByName = await this.userManager.FindByNameAsync(userName);

        if (userByName == null)
        {
            return Result<ProfileResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                       { "profile_error", new[] { ProfileErrorMessage } }
                    }
            );
        }

        return new ProfileResponseJsonProperty
        {
            ProfileJson = new ProfileResponseModel(userByName.UserName, userByName.UserName, userByName.UserName)
        };

    }

    public async Task<Result<UserResponseJsonProperty>> Register(UserRegisterRequestJsonProperty userRequest)
    {
        var userByEmail = await this.userManager.FindByEmailAsync(userRequest.UserJson.Email);

        if (userByEmail != null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "email_error", new[] { EmailTakenErrorMessage } }
                    }
            );
        }

        var userByName = await this.userManager.FindByNameAsync(userRequest.UserJson.FullName);

        if (userByName != null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                       { "name_error", new[] { UserNameTakenErrorMessage } }
                    }
            );
        }

        if (this.env.EnvironmentName == "Test")
        {

            var user = new User(userRequest.UserJson.Email, userRequest.UserJson.FullName);

            var identityResult = await this.userManager.CreateAsync(
                user,
                userRequest.UserJson.Password);

            if (!identityResult.Succeeded)
            {
                var errors = new Dictionary<string, string[]>();
                identityResult.Errors.ForEach(e =>
                {
                    switch (e.Code)
                    {
                        case "InvalidUserName":
                            e.Description = UsernameFormatErrorMessage;
                            break;
                        case "PasswordRequiresDigit":
                            e.Description = PasswordFormatErrorMessage;
                            break;
                    }
                    errors.Add(e.Code, new[] { e.Description });
                });

                return Result<UserResponseJsonProperty>.Failure(errors);
            }

            var token = $"Token: {user.Email}";

            await this.eventDispatcher.Dispatch(new UserRegisteredEvent(
                user.Id,
                userRequest.UserJson.FullName));

            return new UserResponseJsonProperty
            {
                UserJson = new UserResponseModel(user.Email, user.UserName, token)
            };
        }
        else
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
            {
                 { "not_implemended_error", new[] { "Register is not implemented yet." } }
            });
        }
    }

    public async Task<Result<UserResponseJsonProperty>> Login(UserLoginRequestJsonProperty userRequest)
    {
        var user = await this.userManager.FindByEmailAsync(userRequest.UserJson.Email);

        if (user == null)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "invalid_error", new[] { InvalidErrorMessage } }
                    }
            );
        }

        var passwordValid = await this.userManager.CheckPasswordAsync(
            user,
            userRequest.UserJson.Password);

        if (!passwordValid)
        {
            return Result<UserResponseJsonProperty>.Failure(new Dictionary<string, string[]>
                    {
                        { "invalid_error", new[] { InvalidErrorMessage } }
                    }
            );
        }

        string? token;
        if (this.env.EnvironmentName == "Test")
        {
            token = $"Token: {user.Email}";
        }
        else
        {
            token = await this.jwtGenerator.GenerateToken(user);
        }
        return new UserResponseJsonProperty
        {
            UserJson = new UserResponseModel(user.Email, user.UserName, token)
        };
    }
}
```

## Comprehensive Identity Controller Testing

Our implementation comes from [here](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/samples/Blog/Blog.Test/Pipeline/Admin/ArticlesPipelineTest.cs)

```csharp
namespace BlogAngular.Test.Routing;

using System;
using System.Collections.Generic;
using System.Linq;
using Application.Identity.Commands.Common;
using Application.Identity.Commands.Login;
using Application.Identity.Commands.Register;
using Application.Identity.Commands.Update;
using Application.Identity.Queries.Profile;
using Web.Features;
using MyTested.AspNetCore.Mvc;
using MyTested.AspNetCore.Mvc.Test.Setups;
using Xunit;
using Test.Data;
using static Domain.Common.Models.ModelConstants.Identity;
using static ControllerExceptionMessages;

public class ControllerExceptionMessages
{
    //In real life returns 401
    public const string HeaderAuthorizationException =
@"Expected route '{0}' to match {1} action in {2} but action could not be invoked because
of the declared filters - ApiControllerAttribute (Controller), AuthorizeFilter (Action),
UnsupportedContentTypeFilter (Global). Either a filter is setting the response result before the
action itself, or you must set the request properties so that they will pass through the pipeline.";
    //In real life returns 500
    public const string FromBaseDomainException =
@"When calling {0} action in {1} expected no exception but AggregateException (containing
{2} with 'Exception of type 'BlogAngular.Domain.Blog.Exceptions.{2}'
was thrown.' message) was thrown without being caught.";
    //In real life returns 422
    public const string DifferenceException =
@"Expected route '{0}' to contain route value with '{1}' key and the provided value but
the value was different. Difference occurs at '{2}'.";
    //In real life returns 404
    public const string RouteCouldNotBeMachedException =
@"Expected route '{0}' to match {1} action in {2} but action could not be matched.";
}

public class IdentityControllerRouteTest
{
    private static readonly string ValidMinUserNameLength = new('t', MinUserNameLength);
    private static readonly string ValidMaxUserNameLength = new('t', MaxUserNameLength - 1);

    private static readonly string ValidMinEmailLength = new('t', MinEmailLength);
    private static readonly string ValidMaxEmailLength = new('t', MaxEmailLength - 8);

    private static readonly string ValidMinPasswordLength = new('t', MinPasswordLength - 3);
    private static readonly string ValidMaxPasswordLength = new('t', MaxPasswordLength - 3);

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_without_authorization_header_should_fail(
     string fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            // without WithHeaderAuthorization
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
        )
        .To<IdentityController>(c => c.Update(new UserUpdateCommand
        {
            UserJson = new UserUpdateRequestModel(
                string.Format("{0}{1}", fullName, 1),
                string.Format("{0}{1}", password, 1)
            )
        }));

     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_altered_authorization_header_should_fail(
     string fullName,
     string email,
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(string.Format("{0}{1}", StaticTestData.GetJwtBearer(email, 1), "a"))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }));

     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_malformated_authorization_header_should_fail(
     string fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(string.Format("{0}.{1}", Guid.NewGuid().ToString(), Guid.NewGuid().ToString()))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }));

     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_fake_authorization_header_should_fail(
     string fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(string.Format("{0}.{1}.{2}", Guid.NewGuid().ToString(), Guid.NewGuid().ToString(), Guid.NewGuid().ToString()))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }));

     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_incorrect_authorization_header_key_should_fail(
     string fullName,
     string email,
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearerWithIncorrectKey(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }));

     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_expired_authorization_header_should_fail(
     string fullName,
     string email,
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
             .WithMethod(HttpMethod.Put)
             .WithHeaderAuthorization(StaticTestData.GetJwtBearerWithExpiredToken(email, 1))
             .WithLocation("api/v1.0/identity/update")
             .WithJsonBody(
                  string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                      string.Format("{0}{1}", password, 1),
                      string.Format("{0}{1}", fullName, 1)
                  )
             )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }));
     }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));

    [Theory]
    [InlineData("n", "ValidEmail@a.bcde", "p")]
    public void update_user_with_bad_input_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}", password),
                     string.Format("{0}", fullName)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                      string.Format("{0}", fullName),
                      string.Format("{0}", password)
                  )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
         .ShouldReturn();

     }, new Dictionary<string, string[]>
        {
            { "UserJson.Password", new[] { "The length of 'User Json Password' must be at least 16 characters. You entered 1 characters." } },
            { "UserJson.FullName", new[] { "The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters." } },
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_name_taken_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 1),
                     string.Format("{0}{1}", fullName, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 1),
                 string.Format("{0}{1}", password, 1)
             )
         }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
                   { "name_error", new[] { "The user name has been taken." } }
        });


    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                     string.Format("{0}{1}", password, 4),
                     string.Format("{0}{1}", fullName, 4)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 4),
                 string.Format("{0}{1}", password, 4)
             )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
         .ShouldHave()
         .ActionAttributes(attrs => attrs
             .RestrictingForHttpMethod(HttpMethod.Put)
             .RestrictingForAuthorizedRequests())
         .AndAlso()
         .ShouldReturn()
         .ActionResult(result => result.Result(new UserResponseJsonProperty
         {
             UserJson = new UserResponseModel(
                  string.Format("{0}{1}", email, 1),
                  string.Format("{0}{1}", fullName, 4),
                  $"Token: {string.Format("{0}{1}", email, 1)}"
              )
         }))
         .AndAlso()
         .ShouldPassForThe<ActionAttributes>(attributes =>
         {
             Assert.Equal(5, attributes.Count());
         });


    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_name_only_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""username"":""{0}""}}}}",
                     string.Format("{0}{1}", fullName, 4)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0}{1}", fullName, 4),
                 null
             )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
         .ShouldHave()
         .ActionAttributes(attrs => attrs
             .RestrictingForHttpMethod(HttpMethod.Put)
             .RestrictingForAuthorizedRequests())
         .AndAlso()
         .ShouldReturn()
         .ActionResult(result => result.Result(new UserResponseJsonProperty
         {
             UserJson = new UserResponseModel(
                  string.Format("{0}{1}", email, 1),
                  string.Format("{0}{1}", fullName, 4),
                  $"Token: {string.Format("{0}{1}", email, 1)}"
              )
         }))
         .AndAlso()
         .ShouldPassForThe<ActionAttributes>(attributes =>
         {
             Assert.Equal(5, attributes.Count());
         });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_password_only_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}""}}}}",
                     string.Format("{0}{1}", password, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 null,
                 string.Format("{0}{1}", password, 1)
             )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
         .ShouldHave()
         .ActionAttributes(attrs => attrs
             .RestrictingForHttpMethod(HttpMethod.Put)
             .RestrictingForAuthorizedRequests())
         .AndAlso()
         .ShouldReturn()
         .ActionResult(result => result.Result(new UserResponseJsonProperty
         {
             UserJson = new UserResponseModel(
                  string.Format("{0}{1}", email, 1),
                  string.Format("{0}{1}", fullName, 1),
                  $"Token: {string.Format("{0}{1}", email, 1)}"
              )
         }))
         .AndAlso()
         .ShouldPassForThe<ActionAttributes>(attributes =>
         {
             Assert.Equal(5, attributes.Count());
         });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_without_data_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
             .WithMethod(HttpMethod.Put)
             .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
             .WithLocation("api/v1.0/identity/update")
             .WithJsonBody(
                  string.Format(@"{{""user"":{{}}}}")
             )
          )
          .To<IdentityController>(c => c.Update(new UserUpdateCommand
          {
              UserJson = new UserUpdateRequestModel(
                  null,
                  null
              )
          }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
               { "no_data_error", new[] { "There is no data to proccess." } }
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_incorrect_password_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}""}}}}",
                     string.Format("{0} ", password)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 null,
                 string.Format("{0} ", password)
             )
         }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
           { "PasswordRequiresDigit", new[] { "Password requared upper and lower case letters, digits, and at least one special simbol." } },
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void update_user_with_incorrect_user_name_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Put)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity/update")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""username"":""{0}""}}}}",
                     string.Format("{0} ", fullName)
                 )
            )
         )
         .To<IdentityController>(c => c.Update(new UserUpdateCommand
         {
             UserJson = new UserUpdateRequestModel(
                 string.Format("{0} ", fullName),
                 null
             )
         }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
           { "InvalidUserName", new[] { "Username must contain letters and numbers." } },
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    //TODO: Not tested in real life
    public void update_user_with_malformated_data_should_fail(
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string fullName,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string email,
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
          MyMvc
             .Pipeline()
             .ShouldMap(request => request
                .WithMethod(HttpMethod.Put)
                .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
                .WithLocation("api/v1.0/identity/update")
                .WithJsonBody(
                 string.Format(@"{{""password"":""{0}""}}",
                     string.Format("{0}{1}", password, 1)
                 ))
             )
             .To<IdentityController>(c => c.Update(new UserUpdateCommand
             {
                 UserJson = new UserUpdateRequestModel(
                     null,
                     null
                 )
             }));
     }, string.Format(DifferenceException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "command", "UserUpdateCommand.UserJson"));


    [Theory]
    [MemberData(nameof(RegisterValidData))]
    //In real life returns 404
    public void update_user_with_incorrect_route_should_fail(
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string fullName,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string email,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string password
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
        )

     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
     () =>
     {
         MyMvc
          .Pipeline()
          .ShouldMap(request => request
              .WithMethod(HttpMethod.Put)
              .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
              .WithLocation("api/v1.0/identity/noroute")
              .WithJsonBody(
                   string.Format(@"{{""user"":{{}}}}")
              )
          )
          .To<IdentityController>(c => c.Update(new UserUpdateCommand
          {
              UserJson = new UserUpdateRequestModel(
                  null,
                  null
              )
          }));
     }, string.Format(RouteCouldNotBeMachedException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/noroute", "Update", "IdentityController"));

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void login_with_password_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity")
            .WithJsonBody(
                 string.Format(@"{{""user"":{{""password"":""{0}""}}}}",
                     string.Format("{0}{1}", password, 1)
                 )
            )
         )
         .To<IdentityController>(c => c.LoginPassword(new LoginPasswordCommand
         {
             UserJson = new UserUpdateRequestModel(
                 null,
                 string.Format("{0}{1}", password, 1)
             )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
         .ShouldHave()
         .ActionAttributes(attrs => attrs
             .RestrictingForHttpMethod(HttpMethod.Post)
             .RestrictingForAuthorizedRequests())
         .AndAlso()
         .ShouldReturn()
         .ActionResult(result => result.Result(new UserResponseJsonProperty
         {
             UserJson = new UserResponseModel(
                  string.Format("{0}{1}", email, 1),
                  string.Format("{0}{1}", fullName, 1),
                  $"Token: {string.Format("{0}{1}", email, 1)}"
              )
         }))
         .AndAlso()
         .ShouldPassForThe<ActionAttributes>(attributes =>
         {
             Assert.Equal(4, attributes.Count());
         });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void login_with_password_no_data_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity")
            .WithJsonBody(
                string.Format(@"{{""user"":{{ }}}}")
            ))
          .To<IdentityController>(c => c.LoginPassword(new LoginPasswordCommand
          {
              UserJson = new UserUpdateRequestModel(
                 null,
                 null
              )
          }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
                { "no_data_error", new[] { "There is no data to proccess." } }
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void login_with_password_with_incorrect_password_should_fail(
     string fullName,
     string email,
     string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
            .WithLocation("api/v1.0/identity")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""password"":""{0}""}}}}",
                     string.Format("{0}{1}", password, 2)
                )
            ))
          .To<IdentityController>(c => c.LoginPassword(new LoginPasswordCommand
          {
              UserJson = new UserUpdateRequestModel(
                 null,
                 string.Format("{0}{1}", password, 2)
              )
          }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
            { "invalid_error", new[] { "Invalid credentials." } }
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void register_user_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
     .Pipeline()
     .ShouldMap(request => request
        .WithMethod(HttpMethod.Post)
        .WithLocation("api/v1.0/identity/register")
        .WithJsonBody(
            string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                string.Format("{0}{1}", email, 2),
                string.Format("{0}{1}", password, 2),
                string.Format("{0}{1}", fullName, 2)
            ))
     )
     .To<IdentityController>(c => c.Register(new UserRegisterCommand
     {
         UserJson = new UserRegisterRequestModel(
             string.Format("{0}{1}", fullName, 2),
             string.Format("{0}{1}", email, 2),
             string.Format("{0}{1}", password, 2)
         )
     }))
     .Which(controller => controller
        .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
     .ShouldReturn()
     .ActionResult(result => result.Result(new UserResponseJsonProperty
     {
         UserJson = new UserResponseModel(
             string.Format("{0}{1}", email, 2),
             string.Format("{0}{1}", fullName, 2),
             $"Token: {string.Format("{0}{1}", email, 2)}"
         )
     }))
     .AndAlso()
     .ShouldPassForThe<ActionAttributes>(attributes =>
     {
         Assert.Equal(4, attributes.Count());
     });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void register_user_with_name_taken_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/register")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                    string.Format("{0}{1}", email, 4),
                    string.Format("{0}{1}", password, 4),
                    string.Format("{0}{1}", fullName, 2)
                ))
         )
         .To<IdentityController>(c => c.Register(new UserRegisterCommand
         {
             UserJson = new UserRegisterRequestModel(
                 string.Format("{0}{1}", fullName, 2),
                 string.Format("{0}{1}", email, 4),
                 string.Format("{0}{1}", password, 4)
             )
         }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
             .ShouldReturn();
         }, new Dictionary<string, string[]>
            {
                { "name_error", new[] { "The user name has been taken." } },
            });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void register_user_with_email_taken_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/register")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                    string.Format("{0}{1}", email, 2),
                    string.Format("{0}{1}", password, 4),
                    string.Format("{0}{1}", fullName, 4)
                ))
         )
         .To<IdentityController>(c => c.Register(new UserRegisterCommand
         {
             UserJson = new UserRegisterRequestModel(
                 string.Format("{0}{1}", fullName, 4),
                 string.Format("{0}{1}", email, 2),
                 string.Format("{0}{1}", password, 4)
             )
         }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
             .ShouldReturn();
     }, new Dictionary<string, string[]>
        {
            { "email_error", new[] { "The email has been taken." } },
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void register_user_with_icorrect_user_name_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/register")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                    string.Format("{0}{1}", email, 2),
                    string.Format("{0}{1}", password, 2),
                    string.Format("{0} ", fullName)
                ))
         )
         .To<IdentityController>(c => c.Register(new UserRegisterCommand
         {
             UserJson = new UserRegisterRequestModel(
                 string.Format("{0} ", fullName),
                 string.Format("{0}{1}", email, 2),
                 string.Format("{0}{1}", password, 2)
             )
         }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
             .ShouldReturn();
     }, new Dictionary<string, string[]>
        {
            { "InvalidUserName", new[] { "Username must contain letters and numbers." } },
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void register_user_with_icorrect_passord_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/register")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                    string.Format("{0}{1}", email, 2),
                    string.Format("{0} ", password),
                    string.Format("{0}{1}", fullName, 2)
                ))
         )
         .To<IdentityController>(c => c.Register(new UserRegisterCommand
         {
             UserJson = new UserRegisterRequestModel(
                 string.Format("{0}{1}", fullName, 2),
                 string.Format("{0}{1}", email, 2),
                 string.Format("{0} ", password)
             )
         }))
             .Which(controller => controller
                .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
             .ShouldReturn();
     }, new Dictionary<string, string[]>
        {
            { "PasswordRequiresDigit", new[] { "Password requared upper and lower case letters, digits, and at least one special simbol." } },
        });

    [Theory]
    [InlineData("n", "e@", "p")]
    public void register_user_with_bad_input_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
             .WithMethod(HttpMethod.Post)
             .WithLocation("api/v1.0/identity/register")
             .WithJsonBody(
                 string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}"",""username"":""{2}""}}}}",
                     string.Format("{0}", email),
                     string.Format("{0}", password),
                     string.Format("{0}", fullName)
                 ))
          )
         .To<IdentityController>(c => c.Register(new UserRegisterCommand
         {
             UserJson = new UserRegisterRequestModel(
                      string.Format("{0}", fullName),
                      string.Format("{0}", email),
                      string.Format("{0}", password)
                  )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
         .ShouldReturn();
     }, new Dictionary<string, string[]>
        {
            { "UserJson.Password", new[] { "The length of 'User Json Password' must be at least 16 characters. You entered 1 characters." } },
            { "UserJson.FullName", new[] { "The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters." } },
            { "UserJson.Email", new[] {
                "The length of 'User Json Email' must be at least 3 characters. You entered 2 characters.",
                "'User Json Email' is not a valid email address." }
            },
        });


    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void login_user_should_return_success_with_token(
     string fullName,
     string email,
     string password)
     => MyMvc
      .Pipeline()
      .ShouldMap(request => request
        .WithMethod(HttpMethod.Post)
        .WithLocation("api/v1.0/identity/login")
        .WithJsonBody(
            string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}""}}}}",
                string.Format("{0}{1}", email, 1),
                string.Format("{0}{1}", password, 1)
            ))
      )
      .To<IdentityController>(c => c.Login(new UserLoginCommand
      {
          UserJson = new UserRequestModel(
              string.Format("{0}{1}", email, 1),
              string.Format("{0}{1}", password, 1)
          )
      }))
      .Which(controller => controller
        .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
      .ShouldReturn()
      .ActionResult(result => result.Result(new UserResponseJsonProperty
      {
          UserJson = new UserResponseModel(
              string.Format("{0}{1}", email, 1),
              string.Format("{0}{1}", fullName, 1),
              $"Token: {string.Format("{0}{1}", email, 1)}"
          )
      }))
      .AndAlso()
      .ShouldPassForThe<ActionAttributes>(attributes =>
      {
          Assert.Equal(4, attributes.Count());
      });


    [Theory]
    [MemberData(nameof(RegisterValidData))]
    //In real life returns 422 with a validation error: userJson.Email 'User Json Email' must not be empty.
    public void login_user_with_malformated_data_should_fail(
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
     string fullName,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
     string email,
     string password)
     => Test.AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
        () =>
        {
            MyMvc
              .Pipeline()
              .ShouldMap(request => request
                .WithMethod(HttpMethod.Post)
                .WithLocation("api/v1.0/identity/login")
                .WithJsonBody(
                    string.Format(@"{{""user"":{{""em"":""{0}"",""pass"":""{1}""}}}}",
                        string.Format("{0}{1}", email, 1),
                        string.Format("{0}{1}", password, 1)
                    ))
              )
              .To<IdentityController>(c => c.Login(new UserLoginCommand
              {
                  UserJson = new UserRequestModel(
                      string.Format("{0}{1}", email, 1),
                      string.Format("{0}{1}", password, 1)
                  )
              }));
        }, string.Format(DifferenceException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/login", "command", "UserLoginCommand.UserJson.Email"));

    [Theory]
    [InlineData("ValidUserName", "e@", "p")]
    public void login_user_with_bad_input_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
         MyMvc
         .Pipeline()
         .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/login")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}""}}}}",
                    string.Format("{0}", email),
                    string.Format("{0}", password)
                ))
         )
         .To<IdentityController>(c => c.Login(new UserLoginCommand
         {
             UserJson = new UserRequestModel(
                 string.Format("{0}", email),
                 string.Format("{0}", password)
             )
         }))
         .Which(controller => controller
            .WithData(StaticTestData.GetUsers(1, "ValidEmail@a.bcde", fullName, "validPassword1234")))
         .ShouldReturn();
     }, new Dictionary<string, string[]>
        {
            { "UserJson.Password", new[] { "The length of 'User Json Password' must be at least 16 characters. You entered 1 characters." } },
            { "UserJson.Email", new[] {
                "The length of 'User Json Email' must be at least 3 characters. You entered 2 characters.",
                "'User Json Email' is not a valid email address." }
            },
        });


    [Theory]
    [InlineData("ValidEmail@a.bcd", "!ValidPassWord111!")]
    public void login_user_with_invalid_credintial_should_return_validation_errors(
      string email,
      string password)
      => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
      () =>
      {
          MyMvc
          .Pipeline()
          .ShouldMap(request => request
            .WithMethod(HttpMethod.Post)
            .WithLocation("api/v1.0/identity/login")
            .WithJsonBody(
                string.Format(@"{{""user"":{{""email"":""{0}"",""password"":""{1}""}}}}",
                    string.Format("{0}{1}", email, 1),
                    string.Format("{0}{1}", password, 1)
                )
            ))
          .To<IdentityController>(c => c.Login(new UserLoginCommand
          {
              UserJson = new UserRequestModel(
                  string.Format("{0}{1}", email, 1),
                  string.Format("{0}{1}", password, 1)
              )
          }))
          .Which(controller => controller
            .WithData(StaticTestData.GetUsers(1, "email@email.email", "SomeFullName", "somepassword1234")))
          .ShouldReturn();
      }, new Dictionary<string, string[]>
        {
            { "invalid_error", new[] { "Invalid credentials." } }
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void get_profile_with_icorrect_username_should_return_validation_errors(
     string fullName,
     string email,
     string password)
     => Test.AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
     () =>
     {
       MyMvc
       .Pipeline()
       .ShouldMap(request => request
          .WithMethod(HttpMethod.Get)
          .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
          .WithLocation($"api/v1.0/profile/incorrect_user_name")
       )
       .To<ProfileController>(c => c.Index("incorrect_user_name"))
        .Which(controller => controller
          .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
        .ShouldReturn();
       }, new Dictionary<string, string[]>
        {
                { "profile_error", new[] { "Cannot find user profile." } }
        });

    [Theory]
    [MemberData(nameof(RegisterValidData))]
    public void get_profile_should_return_success(
     string fullName,
     string email,
     string password)
     => MyMvc
      .Pipeline()
      .ShouldMap(request => request
        .WithMethod(HttpMethod.Get)
        .WithHeaderAuthorization(StaticTestData.GetJwtBearer(email, 1))
        .WithLocation($"api/v1.0/profile/{fullName}1")
      )
      .To<ProfileController>(c => c.Index(string.Format("{0}{1}", fullName, 1)))
      .Which(controller => controller
        .WithData(StaticTestData.GetUsers(1, email, fullName, password)))
      .ShouldReturn()
      .ActionResult(result => result.Result(new ProfileResponseJsonProperty
      {
          ProfileJson = new ProfileResponseModel(
              string.Format("{0}{1}", fullName, 1),
              string.Format("{0}{1}", fullName, 1),
              string.Format("{0}{1}", fullName, 1)
          )
      }))
      .AndAlso()
      .ShouldPassForThe<ActionAttributes>(attributes =>
      {
          Assert.Equal(6, attributes.Count());
      });

    public static IEnumerable<object[]> RegisterValidData()
    {
        yield return new object[]
        {
            ValidMinUserNameLength,
            //Must be valid email address
            $"{ValidMinEmailLength}@a.bcde",
            //Password must contain Upper case, lower case, number, special symbols
            string.Format("U!{0}",  ValidMinPasswordLength)
        };

        yield return new object[]
        {
             ValidMaxUserNameLength,
             //Must be valid email address
             $"{ValidMaxEmailLength}@a.bcde",
             //Password must contain Upper case, lower case, number, special symbols
             string.Format("U!{0}", ValidMaxPasswordLength)
        };
    }
}
```

## Validation Exception Middleware

Our impemetation comes from [here](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Middleware/ValidationExceptionHandlerMiddleware.cs)

```csharp
namespace BlogAngular.Web.Middleware;

using System;
using System.Net;
using System.Threading.Tasks;
using Application.Common.Exceptions;
using Application.Common.Models;
using Domain.Common;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

public class ValidationExceptionHandlerMiddleware
{
    private readonly RequestDelegate next;

    public ValidationExceptionHandlerMiddleware(RequestDelegate next)
        => this.next = next;

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await this.next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        var code = HttpStatusCode.InternalServerError;

        var result = string.Empty;

        switch (exception)
        {
            case ModelValidationException modelValidationException:
                code = HttpStatusCode.UnprocessableEntity;
                result = SerializeObject(
                    new
                    {
                        modelValidationException.Errors
                    }
                );
                break;
        }

        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)code;

        if (string.IsNullOrEmpty(result))
        {
            var error = exception.Message;

            if (exception is BaseDomainException baseDomainException)
            {
                error = baseDomainException.Error;
            }

            result = SerializeObject(
                new ErrorListResult(exception.GetType().Name, new[] { error })
                );
        }

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
}

public static class ValidationExceptionHandlerMiddlewareExtensions
{
    public static IApplicationBuilder UseValidationExceptionHandler(
        this IApplicationBuilder builder)
        => builder.UseMiddleware<ValidationExceptionHandlerMiddleware>();
}
```
