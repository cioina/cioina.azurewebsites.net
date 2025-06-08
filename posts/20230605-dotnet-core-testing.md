---
title: ASP.NET Core 9 Testing
short_title: ASP.NET Testing
dynamic_angular_template: true
---

<blockquote style="border-color: #faad14;">
<p><strong>All C# code from this article was tested using <a href="https://versionsof.net/" target="_blank" rel="noopener">.NET Core 9.0.1</a>, modified source code of <a href="https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc" target="_blank" rel="noopener">MyTested.AspNetCore.Mvc - Fluent Testing Library for ASP.NET Core MVC</a> provided under <a href="https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/blob/development/LICENSE" target="_blank" rel="noopener">Apache License, Version 2.0 or Microsoft Public License (Ms-PL)</a>, and modified source code of <a href="https://github.com/kalintsenkov/BookStore" target="_blank" rel="noopener">BookStore</a> provided under <a href="https://github.com/kalintsenkov/BookStore/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a></strong></p></blockquote>

## Introduction

In this article, we will give an example of testing of .NET Core code. We will use [MyTested](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) - a well-known library for testing ASP.NET Core MVC. Here, we adapted the library to work with .NET Core 9 and API controllers with Bearer Header Authorization based on JWT token implementation provided by .NET Core. Our .NET Core 9 project is based on [BookStore](https://github.com/kalintsenkov/BookStore) repository and adapted to work with MyTested library. A full test project example is on [our GitHub repository](https://github.com/cioina/MyTested-test-project-example).

The main focus of our example is testing of the standard `User Identity` provided by `Microsoft.AspNetCore.Identity`. The access to the user is provided by `UserManager<User>` micro service. The source code of all our examples is copied and pasted from our actual application. The compiled code of our .NET Core 9 application can be found on [our GitHub repository](https://github.com/cioina/cioina.azurewebsites.net).

One of the advantages of having of a detailed test module for standard `Microsoft.AspNetCore.Identity` implementation is the fact that it is used very frequently in .NET Core applications. Following, we will give examples of API controller, the implementation of `User Identity` with Bearer Header Authorization based on JWT token and an example of a comprehensive `User Identity` controller testing.

## MyTested Library Out of The Box

I found out about MyTested for the first time from [BlazorShop](https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Tests/Controllers/AddressesControllerTests.cs) repository. At the same time, I found out about `JwtAuthentication` implementation from same [BlazorShop](https://github.com/kalintsenkov/BlazorShop/blob/master/src/BlazorShop.Web/Server/Infrastructure/Extensions/ServiceCollectionExtensions.cs) repository and from [aspnetcore-realworld-example](https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/src/Conduit/ServicesExtensions.cs) repository. Both `JwtAuthentication` implementations did not work with original [MyTested](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) library, so I decided to find out why. I do not know who engineered MyTested, but I was not able to fully understand how it works. I was able only to add some small pieces of code to make MyTested and my own `JwtAuthentication` implementation work and not to break any original MyTested tests. But, what MyTested can do out of the box? The best answer is in [MusicStore](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc/tree/development/samples/MusicStore/MusicStore.Test) testing project. For the API controller, [here](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/FrontEndRouteTest.cs) is an example:

```csharp
using BlogAngular.Application.Common.Version;
using BlogAngular.Web.Features;
using MyTested.AspNetCore.Mvc;
using Xunit;

namespace BlogAngular.Test.Routing
{
    public class FrontEndRouteTest
    {
        [Fact]
        public void VersionShouldBeRouted()
        => MyMvc
        .Pipeline()
        .ShouldMap(request => request
            .WithMethod(HttpMethod.Get)
            .WithLocation("api/v1.0/version"))
        .To<VersionController>(c => c.Index())
        .Which()
        .ShouldReturn()
        .ActionResult(result => result.Result(new VersionResponseEnvelope
        {
            VersionJson = new VersionResponseModel()
        }));
    }
}
```

## .NET Core Identity Controller Implementation

Our controller implementation is based on [this GitHub repository](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Web/Features/IdentityController.cs). We added two more methods: `LoginPassword` and `Update` with `[Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy)]` attribute that uses Bearer Header Authorization based on JWT token implementation provided by .NET Core 9. Our Angular 18 application that runs in a web browser will make a request to the endpoint `http://localhost:1503/api/v1.0/identity/update`. The request has an Authorization header with a JWT token. The request body has some data in JSON format. Our .NET Core 9 application must authenticate the user based on the JWT token and authorize the user based on a specific policy. Once the user passes the authorization process, the application must execute a command and return some data in JSON format. Below, we give an example of an [API controller](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Web/Web/Features/IdentityController.cs)

### IdentityController

```csharp
using BlogAngular.Application.Identity.Commands.Common;
using BlogAngular.Application.Identity.Commands.Login;
using BlogAngular.Application.Identity.Commands.Register;
using BlogAngular.Application.Identity.Commands.Update;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using static BlogAngular.Domain.Common.Models.ModelConstants.Identity;

namespace BlogAngular.Web.Features
{
    public class IdentityController : ApiController
    {
        [HttpPost]
        [Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)]
        public async Task<ActionResult<UserResponseEnvelope>> LoginPassword(
            LoginPasswordCommand command)
            => await this.Send(command);

        [HttpPost]
        [Route(nameof(Login))]
        public async Task<ActionResult<UserResponseEnvelope>> Login(
            UserLoginCommand command)
            => await this.Send(command);

        [HttpPost]
        [Route(nameof(Register))]
        public async Task<ActionResult<UserResponseEnvelope>> Register(
            UserRegisterCommand command)
            => await this.Send(command);

        [HttpPut]
        [Route(nameof(Update))]
        [Authorize(AuthenticationSchemes = Bearer, Policy = BearerPolicy, Roles = AdministratorRoleName)]
        public async Task<ActionResult<UserResponseEnvelope>> Update(
            UserUpdateCommand command)
            => await this.Send(command);
    }
}
```

## .NET Core Identity Service Implementation

Our service implementation is based on [this GitHub repository](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Infrastructure/Identity/Services/IdentityService.cs). As we said earlier, this kind of `Identity Service` will look the same for all .NET Core 9 applications that use a standard `Microsoft.AspNetCore.Identity` implementation. Below, there is an example that we copied and pasted direct from our actual application.

### IdentityService

```csharp
using BlogAngular.Application.Common;
using BlogAngular.Application.Common.Models;
using BlogAngular.Application.Identity;
using BlogAngular.Application.Identity.Commands.Common;
using BlogAngular.Application.Identity.Commands.Register;
using BlogAngular.Application.Identity.Commands.Update;
using BlogAngular.Application.Identity.Queries.Profile;
using BlogAngular.Domain.Common.Events.Identity;
using BlogAngular.Infrastructure.Common.Events;
using BlogAngular.Infrastructure.Common.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BlogAngular.Infrastructure.Identity.Services
{
    internal class IdentityService(
        IWebHostEnvironment env,
        UserManager<User> userManager,
        IJwtGenerator jwtGenerator,
        IEventDispatcher eventDispatcher,
        IOptions<ApplicationSettings> applicationSettings,
        IHttpContextAccessor httpContextAccessor
            ) : IIdentity
    {
        private const string InvalidErrorMessage = "Invalid credentials.";
        private const string NoDataErrorMessage = "There is no data to process.";
        private const string IdentityErrorMessage = "Something went wrong. The server may be down.";
        private const string IdentityRoleErrorMessage = @"Cannot find role {0}";
        private const string UserNameTakenErrorMessage = "The user name has been taken.";
        private const string EmailTakenErrorMessage = "The email has been taken.";
        private const string UserNullErrorMessage = "Cannot find user by Id.";
        private const string ProfileErrorMessage = "Cannot find user profile.";
        private const string UsernameFormatErrorMessage = "Username must contain letters and numbers.";
        private const string PasswordFormatErrorMessage = "Password required upper and lower case letters, digits, and at least one special symbol.";
        private const string PasswordDeletedErrorMessage = "The old password was deleted. You must provide a new password.";
        private const string LockoutErrorMessage = @"You have been lockout for {0} minutes.{1}";
        private const string LockoutEnabledErrorMessage = "Lockout setting is not enabled.";

        private readonly IWebHostEnvironment env = env;
        private readonly UserManager<User> userManager = userManager;
        private readonly IJwtGenerator jwtGenerator = jwtGenerator;
        private readonly IEventDispatcher eventDispatcher = eventDispatcher;
        private readonly ApplicationSettings applicationSettings = applicationSettings.Value;
        private readonly IHttpContextAccessor httpContextAccessor = httpContextAccessor;
        internal static readonly string[] registerNotImplemented = ["Register is not implemented yet."];

        #region IsInRoleAsync
        public async Task<Result<bool>> IsInRoleAsync()
        {
            ClaimsPrincipal? claimsPrincipal = this.httpContextAccessor.HttpContext!.User!;
            if (claimsPrincipal != null)
            {
                var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                if (isAuthenticated == null || !(bool)isAuthenticated)
                {
                    return Result<bool>.Failure(new Dictionary<string, string[]>
                {
                    { "identity_error", new[] { IdentityErrorMessage } }
                });
                }
            }
            else
            {
                return Result<bool>.Failure(new Dictionary<string, string[]>
            {
                { "identity_error", new[] { IdentityErrorMessage } }
            });
            }

            User? user;
            if (this.env.EnvironmentName == "Test")
            {
                var name = claimsPrincipal.Identity?.Name;
                if (name == null)
                {
                    return Result<bool>.Failure(new Dictionary<string, string[]>
                {
                    { "debug_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByEmailAsync(name);
            }
            else
            {
                var claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                if (claim == null)
                {
                    return Result<bool>.Failure(new Dictionary<string, string[]>
                {
                    { "name_identifier_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByIdAsync(claim.Value);
            }

            if (user == null)
            {
                return Result<bool>.Failure(new Dictionary<string, string[]>
            {
                { "user_error", new[] { UserNullErrorMessage } }
            });
            }

            var claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            if (claimRole == null)
            {
                return Result<bool>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, "") } }
                });
            }
            var isInRole = await this.userManager.IsInRoleAsync(user, claimRole.Value);
            if (!isInRole)
            {
                return Result<bool>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            return true;
        }
        #endregion

        #region LoginPassword  
        public async Task<Result<UserResponseEnvelope>> LoginPassword(LoginPasswordCommand userRequest)
        {
            if (userRequest.UserJson.Password == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "no_data_error", new[] { NoDataErrorMessage } }
            });
            }

            bool isNewToken = false;
            ClaimsPrincipal? claimsPrincipal = this.httpContextAccessor.HttpContext!.User!;
            if (claimsPrincipal != null)
            {
                var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                if (isAuthenticated == null || !(bool)isAuthenticated)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "identity_error", new[] { IdentityErrorMessage } }
                });
                }
                var iat = claimsPrincipal.FindFirst("iat");
                var exp = claimsPrincipal.FindFirst("exp");
                if (iat == null || exp == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "identity_error", new[] { IdentityErrorMessage } }
                });
                }

                var rate = (long.Parse(exp.Value) - long.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            else
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "identity_error", new[] { IdentityErrorMessage } }
            });
            }

            User? user;
            if (this.env.EnvironmentName == "Test")
            {
                var name = claimsPrincipal.Identity?.Name;
                if (name == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "debug_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByEmailAsync(name);
            }
            else
            {
                var claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                if (claim == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "name_identifier_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByIdAsync(claim.Value);
            }

            if (user == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "user_error", new[] { UserNullErrorMessage } }
            });
            }

            var claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            if (claimRole == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, "") } }
                });
            }
            var isInRole = await this.userManager.IsInRoleAsync(user, claimRole.Value);
            if (!isInRole)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            var isLockoutEnabled = await userManager.GetLockoutEnabledAsync(user);

            if (isLockoutEnabled)
            {
                var count = await userManager.GetAccessFailedCountAsync(user);
                if (count == applicationSettings.MaxFailedAccessAttempts - 1)
                {
                    var endDate = await userManager.GetLockoutEndDateAsync(user);
                    var currentDate = DateTimeOffset.UtcNow;
                    if (endDate > currentDate)
                    {
                        return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                    {
                        { "lockout_error", new[] {  string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"") } }
                    });
                    }
                }

                var passwordValid = await this.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                if (!passwordValid)
                {
                    var accessFailed = await this.userManager.AccessFailedAsync(user);
                    if (!accessFailed.Succeeded)
                    {
                        var errors = new Dictionary<string, string[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            switch (e.Code)
                            {
                                case "TODO: need to debug e.Code":
                                    e.Description = string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "");
                                    break;
                            }

                            e.Description = string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        return Result<UserResponseEnvelope>.Failure(errors);
                    }

                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "invalid_error", new[] { InvalidErrorMessage } }
                });
                }
            }
            else
            {
                if (this.env.EnvironmentName == "Test")
                {
                    var passwordValid = await this.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    if (!passwordValid)
                    {
                        return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                    {
                        { "invalid_error", new[] { InvalidErrorMessage } }
                    });
                    }
                }
                else
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "lockout_enabled_error", new[] { LockoutEnabledErrorMessage } }
                });
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
                this.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["Bearer ".Length..].Trim();
            }

            return new UserResponseEnvelope
            {
                UserJson = new()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        #endregion

        #region Update
        public async Task<Result<UserResponseEnvelope>> Update(UserUpdateCommand userRequest)
        {
            if (userRequest.UserJson.FullName == null && userRequest.UserJson.Password == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                 { "no_data_error", new[] { NoDataErrorMessage } }
            });
            }

            bool isNewToken = false;
            ClaimsPrincipal? claimsPrincipal = this.httpContextAccessor.HttpContext!.User!;
            if (claimsPrincipal != null)
            {
                var isAuthenticated = claimsPrincipal.Identity?.IsAuthenticated;
                if (isAuthenticated == null || !(bool)isAuthenticated)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "identity_error", new[] { IdentityErrorMessage } }
                });
                }
                var iat = claimsPrincipal.FindFirst("iat");
                var exp = claimsPrincipal.FindFirst("exp");
                if (iat == null || exp == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "identity_error", new[] { IdentityErrorMessage } }
                });
                }

                var rate = (long.Parse(exp.Value) - long.Parse(iat.Value)) * applicationSettings.SecurityTokenRefreshRate;
                var current = long.Parse(exp.Value) - DateTimeOffset.Now.ToUnixTimeSeconds();

                isNewToken = current < rate;
            }
            else
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "identity_error", new[] { IdentityErrorMessage } }
            });
            }

            if (userRequest.UserJson.FullName != null)
            {
                var userByName = await this.userManager.FindByNameAsync(userRequest.UserJson.FullName);

                if (userByName != null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "name_error", new[] { UserNameTakenErrorMessage } }
                });
                }
            }

            User? user;
            if (this.env.EnvironmentName == "Test")
            {
                var name = claimsPrincipal.Identity?.Name;
                if (name == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "debug_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByEmailAsync(name);
            }
            else
            {
                var claim = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier);
                if (claim == null)
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "name_identifier_error", new[] { IdentityErrorMessage } }
                });
                }
                user = await this.userManager.FindByIdAsync(claim.Value);
            }

            if (user == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "user_error", new[] { UserNullErrorMessage } }
            });
            }

            var claimRole = claimsPrincipal.FindFirst(ClaimTypes.Role);
            if (claimRole == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, "") } }
                });
            }
            var isInRole = await this.userManager.IsInRoleAsync(user, claimRole.Value);
            if (!isInRole)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "is_in_role_error", new[] { string.Format(IdentityRoleErrorMessage, claimRole.Value) } }
                });
            }

            if (userRequest.UserJson.Password != null)
            {
                var identityResult2 = await this.userManager.RemovePasswordAsync(user);

                if (!identityResult2.Succeeded)
                {
                    var errors = new Dictionary<string, string[]>();
                    identityResult2.Errors.ForEach(e =>
                    {
                        errors.Add(e.Code, [e.Description]);
                    });

                    return Result<UserResponseEnvelope>.Failure(errors);
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
                        errors.Add(e.Code, [e.Description]);
                    });
                    errors.Add("PasswordDeleted", [PasswordDeletedErrorMessage]);
                    return Result<UserResponseEnvelope>.Failure(errors);
                }
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
                        errors.Add(e.Code, [e.Description]);
                    });

                    return Result<UserResponseEnvelope>.Failure(errors);
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
                this.httpContextAccessor.HttpContext!.Request.Headers.Authorization.ToString()["Bearer ".Length..].Trim();
            }

            return new UserResponseEnvelope
            {
                UserJson = new()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
        #endregion

        public async Task<Result<ProfileResponseEnvelope>> Profile(string userName)
        {
            var user = await this.userManager.FindByNameAsync(userName);

            if (user == null)
            {
                return Result<ProfileResponseEnvelope>.Failure(new Dictionary<string, string[]>
                    {
                       { "profile_error", new[] { ProfileErrorMessage } }
                    }
                );
            }

            return new ProfileResponseEnvelope
            {
                ProfileJson = new ProfileResponseModel(user.UserName, user.UserName, user.UserName)
            };

        }

        public async Task<Result<UserResponseEnvelope>> Register(UserRegisterRequestEnvelope userRequest)
        {
            var userByEmail = await this.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            if (userByEmail != null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "email_error", new[] { EmailTakenErrorMessage } }
            });
            }

            var userByName = await this.userManager.FindByNameAsync(userRequest.UserJson.FullName);

            if (userByName != null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
               { "name_error", new[] { UserNameTakenErrorMessage } }
            });
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
                        errors.Add(e.Code, [e.Description]);
                    });

                    return Result<UserResponseEnvelope>.Failure(errors);
                }

                var token = $"Token: {user.Email}";

                await this.eventDispatcher.Dispatch(new UserRegisteredEvent(
                    user.Id,
                    userRequest.UserJson.FullName));

                return new UserResponseEnvelope
                {
                    UserJson = new()
                    {
                        Email = user.Email!,
                        UserName = user.UserName!,
                        Token = token,
                    }
                };
            }
            else
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                 { "not_implemented_error", registerNotImplemented }
            });
            }
        }

        public async Task<Result<UserResponseEnvelope>> Login(UserLoginRequestEnvelope userRequest)
        {
            var user = await this.userManager.FindByEmailAsync(userRequest.UserJson.Email);

            if (user == null)
            {
                return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
            {
                { "invalid_error", new[] { InvalidErrorMessage } }
            });
            }

            var isLockoutEnabled = await userManager.GetLockoutEnabledAsync(user);

            if (isLockoutEnabled)
            {
                var count = await userManager.GetAccessFailedCountAsync(user);
                if (count == applicationSettings.MaxFailedAccessAttempts - 1)
                {
                    var endDate = await userManager.GetLockoutEndDateAsync(user);
                    var currentDate = DateTimeOffset.UtcNow;
                    if (endDate > currentDate)
                    {
                        return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                    {
                        { "lockout_error", new[] {  string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes,"") } }
                    });
                    }
                }

                var passwordValid = await this.userManager.CheckPasswordAsync(
                user,
                userRequest.UserJson.Password);

                if (!passwordValid)
                {
                    var accessFailed = await this.userManager.AccessFailedAsync(user);
                    if (!accessFailed.Succeeded)
                    {
                        var errors = new Dictionary<string, string[]>();
                        accessFailed.Errors.ForEach(e =>
                        {
                            switch (e.Code)
                            {
                                case "TODO: need to debug e.Code":
                                    e.Description = string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, "");
                                    break;
                            }

                            e.Description = string.Format(LockoutErrorMessage, applicationSettings.DefaultLockoutTimeSpanInMinutes, e.Code);
                            errors.Add(e.Code, [e.Description]);
                        });

                        return Result<UserResponseEnvelope>.Failure(errors);
                    }

                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "invalid_error", new[] { InvalidErrorMessage } }
                });
                }
            }
            else
            {
                if (this.env.EnvironmentName == "Test")
                {
                    var passwordValid = await this.userManager.CheckPasswordAsync(
                     user,
                     userRequest.UserJson.Password);

                    if (!passwordValid)
                    {
                        return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                    {
                        { "invalid_error", new[] { InvalidErrorMessage } }
                    });
                    }
                }
                else
                {
                    return Result<UserResponseEnvelope>.Failure(new Dictionary<string, string[]>
                {
                    { "lockout_enabled_error", new[] { LockoutEnabledErrorMessage } }
                });
                }
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
            return new UserResponseEnvelope
            {
                UserJson = new()
                {
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Token = token,
                }
            };
        }
    }
}
```

To really appreciate the beauty of MyTested, It must be compared to [an alternative](https://github.com/gothinkster/aspnetcore-realworld-example-app/blob/master/tests/Conduit.IntegrationTests/Features/Users/LoginTests.cs) method of testing. With MyTested library, it is very easy to test against endpoint locations, input data in JSON format and output data.
When it comes to JWT authorization, a big amount of testing consists in testing for invalid JWT tokens:

- `Update_user_without_authorization_header_should_fail`- tests when JWT token is absent
- `Update_user_with_altered_authorization_header_should_fail`- tests when to a valid JWT token is added one character
- `Update_user_with_malformated_authorization_header_should_fail`- tests when JWT token has format `a.b`
- `Update_user_with_fake_authorization_header_should_fail`- tests when JWT token has correct format `a.b.c` but random characters
- `Update_user_with_incorrect_authorization_header_key_should_fail`- tests when JWT token is valid but was encrypted with a different key
- `Update_user_with_expired_authorization_header_should_fail`- tests when a valid JWT token was expired

These are the most common case scenarios to test against an invalid JWT token and must be done just for one controller!
MyTested cannot catch 401 error code directly. We found a workaround by using [HeaderAuthorizationException](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs)
In real life, .NET Core 9 will return a 401-error code. We created a series of tests for testing invalid JWT tokens such as:

```csharp
        [Theory]
        [MemberData(nameof(RegisterValidData))]
        public void Update_user_without_authorization_header_should_fail(
         string fullName,
#pragma warning disable xUnit1026 // Theory methods should use all of their parameters
         string email,
#pragma warning restore xUnit1026 // Theory methods should use all of their parameters
         string password)
        => AssertException<MyTested.AspNetCore.Mvc.Exceptions.RouteAssertionException>(
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
                          $"{password}1",
                          $"{fullName}1"
                      )
                 )
             )
             .To<IdentityController>(c => c.Update(new UserUpdateCommand
             {
                 UserJson = new()
                 {
                     FullName = $"{fullName}1",
                     Password = $"{password}1"
                 }
             }));
        }, string.Format(HeaderAuthorizationException.Replace(Environment.NewLine, ""), "/api/v1.0/identity/update", "Update", "IdentityController"));
```

The full set of tests of `IdentityController` is on [our GitHub repository](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs).

## Data Validation with FluentValidation Library

Another change we made to MyTested is adding the possibility of testing data validation. For now, we will give an example of testing using [FluentValidation](https://github.com/kalintsenkov/BookStore/blob/main/src/Server/BookStore.Application/Catalog/Authors/Commands/Create/AuthorCreateCommandValidator.Specs.cs). Following is an example of testing data validation using modified version of MyTested library:

```csharp
[Theory]
[InlineData("n", "ValidEmail@a.bcde", "p")]
public void Update_user_with_bad_input_should_return_validation_errors(
 string fullName,
 string email,
 string password)
=> AssertValidationErrorsException<MyTested.AspNetCore.Mvc.Exceptions.ValidationErrorsAssertionException>(
() =>
{
    MyMvc
     .Pipeline()
     .ShouldMap(request => request
        .WithMethod(HttpMethod.Put)
        .WithHeaderAuthorization(StaticTestData.GetJwtBearerAdministratorRole(email, 1))
        .WithLocation("api/v1.0/identity/update")
        .WithJsonBody(
             string.Format(@"{{""user"":{{""password"":""{0}"",""username"":""{1}""}}}}",
                 $"{password}",
                 $"{fullName}"
             )
        )
     )
     .To<IdentityController>(c => c.Update(new UserUpdateCommand
     {
         UserJson = new()
         {
             FullName = fullName,
             Password = password,
         }
     }))
     .Which(controller => controller
        .WithData(StaticTestData.GetUsers(3, email, fullName, password)))
     .ShouldReturn();
}, new Dictionary<string, string[]>
{
   { "UserJson.Password", ["The length of 'User Json Password' must be at least 16 characters. You entered 1 characters."] },
   { "UserJson.FullName", ["The length of 'User Json Full Name' must be at least 2 characters. You entered 1 characters."] },
});
```

As you can see, now we can test data validation against the validation errors coming from FluentValidation library. Following are [three tests](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/TagsControllerRouteTest.cs) witch test against the constraint that the tag name is unique:

- `Create_tag_with_same_name_should_fail_with_validation_error`- Creates tag with name when the name has already taken.
- `Edit_tag_with_same_name_should_fail_with_validation_error`- Updates tag name when the name has already taken.
- `Edit_same_tag_with_same_name_should_return_success_with_data`- Updates tag name when the name did not change.

Sometimes, we need to validate against standard .Net services. For example, in the `IdentityService` from above we have:

```csharp
…
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

        return Result<UserResponseEnvelope>.Failure(errors);
    }
}
…
```

[Here](https://github.com/cioina/MyTested-test-project-example/blob/main/src/BlogAngular.Test/Test/Routing/IdentityControllerRouteTest.cs#L626) is the test:

- `Update_user_with_incorrect_user_name_should_fail`- Tests against the username implemented in `UserManager<User>`.

## Conclusion

In this article, we gave a common example of a .NET Core `Identity` controller, implemented a common `User Identity` service based on `UserManager<User>`, and showed a comprehensive `Identity` controller testing using MyTested library. From multiple examples, we can see how easy is to test against endpoint locations, input data as JSON strings, and output data. In addition, we showed a lot of examples for data validation against the validation errors coming from `FluentValidation` library.
It is important to note, that having a detailed testing of API controllers based on MyTested library, gives us the possibility to debug .NET Core applications in Visual Studio 2022. For example, we can set a breakpoint in our application, go to test panel, find a MyTested test, and click Debug instead on Run.
The Markdown version of this article and the compiled code of our .NET Core 9 application can be found on [our GitHub repository](https://github.com/cioina/cioina.azurewebsites.net).

## Credits

- [Ivaylo Kenov](https://github.com/ivaylokenov)
- [Kalin Tsenkov](https://github.com/kalintsenkov)
- [Steve Smith](https://github.com/ardalis)
- [Jason Taylor](https://github.com/jasontaylordev)
- [Stefan Prodan](https://github.com/stefanprodan)
- [Mark Cilia Vincenti](https://github.com/MarkCiliaVincenti)
- [Jimmy Bogard](https://github.com/jbogard)
- [Ben Morris](https://github.com/BenMorris)
