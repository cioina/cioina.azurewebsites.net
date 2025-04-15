# Using markdown for static web pages

[![Cheapest .NET Core 9 app on Azure](/assets/azure-website-cost.png?raw=true)](https://github.com/cioina/cioina.azurewebsites.net/blob/main/assets/azure-website-cost.png)

## Introduction

The main idea of this repository is to design and implement the cheapest website based on the latest .NET Core and Angular frameworks deployed to Microsoft Azure. The total cost for the website is $69 per month, and it includes:
1. Azure App Service Basic Plan - B1
2. SQL Database Single Basic - B
3. Virtual Network Private Link

The Azure App is composed of compiled [.NET Core 9 and compiled Angular 19 app](https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net9.0) and designed to work like a dynamic (server side) and a static (client side) website. The static part of Angular app is generated with a script based on [NG-ZORRO documentation scripts](https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/scripts) The main architecture of Angular app is described [here](https://github.com/cioina/angular-test-example). The architecture of .NET Core app is described [here]( https://github.com/cioina/MyTested-test-project-example) The [compiled JavaScript files](https://github.com/cioina/cioina.azurewebsites.net/tree/main/bin/Release/net9.0/wwwroot) are served by the same .NET Core app which serves API controllers. In this way, we get the simplest and cheapest website deployed to Microsoft Azure. Compared to [Moonglade](https://github.com/EdiWang/Moonglade/releases), our website has a much simple [API controller architecture](https://github.com/cioina/MyTested-test-project-example/tree/main/src/BlogAngular.Web/Web/Features) and deployment process is done from Visual Studio with a click on a single Publish button.

## What Is This?

[![.NET Core 9 app](/assets/vs.png?raw=true)](https://github.com/cioina/cioina.azurewebsites.net/blob/main/assets/vs.png)

Here are all my markdown files that I use to build all my "static" web pages for my website: https://cioina.azurewebsites.net

## Why?

When you find something wrong and really want me to correct it, just make a pull request!

## Run Binary on Local Windows Machine

### Website Setup

In order use compiled binary from bin folder

1. Clone this repository
2. Delete database **BlogAngularDb** if already exists. Make sure you do not need previous data.
3. Change **ConnectionStrings** to your MS SQL Server in ```bin/Release/net9.0/appsettings.json```
4. In IIS 10, setup a website to http://localhost:5000

### appsettings.json

```json
{
  "ApplicationSettings": {
    "SecurityTokenDescriptorKey": "TheSecurityTokenDescriptorKeyGoesHere",
    "SecurityTokenDescriptorExpiresInMinutes": 60,
    "SecurityTokenRefreshRate": 0.5,
    "MaxFailedAccessAttempts": 7,
    "DefaultLockoutTimeSpanInMinutes": 30,
    "ExperimentalIpAddress": "0"
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=YourMSSQLServer;Initial Catalog=BlogAngularDb;Integrated Security=False;User Id=sa;Password=YourPassword;MultipleActiveResultSets=True"
  },
  "AllowedHosts": "*",

  "IpRateLimiting": {
    "EnableEndpointRateLimiting": true,
    "SecurityTokenRefreshRate": 0.5,
    "StackBlockedRequests": false,
    "RealIpHeader": "X-Real-IP",
    "HttpStatusCode": 429,
    "IpWhitelist": [

    ],
    "EndpointWhitelist": [
      "post:/api/v1.0/identity",
      "post:/api/v1.0/articles",
      "get:/api/v1.0/tags",
      "get:/*.json",
      "get:/*.js",
      "get:/*.css",
      "get:/*.ico"
    ],
    "ClientWhitelist": [
    ],
    "QuotaExceededResponse": {
      "Content": "Quota exceeded. Maximum allowed: {0} per {1}. Please try again in {2} second(s). Your IP address is {3}",
      "ContentType": "application/json"
    },
    "GeneralRules": [
      {
        "Endpoint": "post:/api/v1.0/identity/login",
        "Period": "30m",
        "Limit": 10
      },
      {
        "Endpoint": "post:/api/v1.0/identity/register",
        "Period": "30m",
        "Limit": 3
      }
    ]
  },
  "IpRateLimitPolicies": {
    "IpRules": [
    ]
  }
}
```

### Administrator Credential

**Email:** admin@myblog.com
**Password:** Admin123456Admin!

