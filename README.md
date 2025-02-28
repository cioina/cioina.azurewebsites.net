# Using markdown for static web pages

## Introduction

[![OpenShift Laravel Example](/assets/openshift-laravel-example.png?raw=true)](https://github.com/cioina/cioina.azurewebsites.net/blob/main/assets/openshift-laravel-example.png)

It looks like OpenShift Online became a public cloud platform for legacy applications. For example, there is no support for PHP 8 and Laravel 9 for the S2I method which worked well for PHP 7.3 and Laravel 8. So, I decided to switch from OpenShift to Azure and from Laravel 8/PHP 7.3/MySql 8 to ASP.Net Core 9.0/Azure SQL Server. The most important thing I liked about OpenShift Online is that you NEVER get a surprise bill. You just pay a flat rate of $50 per month. It looks like Azure provides same kind of services for $57 for .NET Core 9 app + $5 Azure SQL Server per month. It took me a couple of hours to figure out how to set up a deployment process to Azure via GitHub and a SQL Server instance. By default, your SQL Server instance will block any IP address, so you need to find the IP address of your .Net Core application and set it up in your SQL Server instance. 
When it comes to OpenShift Online, the deployment process is quite simple: 
1.	Push your updated PHP sources to a GitHub private repository.
2.	Start a new deployment from OpenShift Online web application.
The full source code of OpenShift Online app is on [out GitHub repository](https://github.com/cioina/openshift-laravel-example)
When it comes to Azure, a new deployment process will start automatically after you push your updated C# sources to a GitHub private repository. First, GitHub will try to compile your sources. This process is terribly slow if you use free GitHub services with limited resources.

## What Is This?

[![Cheapest .NET Core 9 app on Azure](/assets/azure-website-cost.png?raw=true)](https://github.com/cioina/cioina.azurewebsites.net/blob/main/assets/azure-website-cost.png)

Here are all my markdown files that I use to build all my "static" web pages for my website: https://cioina.azurewebsites.net

## Why?

When you find something wrong and really want me to correct it, just make a pull request!

## Run Binary on Local Windows Machine

### Website Setup

In order use compiled binary from bin folder

1. Clone this repository
2. Delete database **BlogAngularDb** if already exists. Make sure you do not need previous data.
3. Change **ConnectionStrings** to your MS SQL Server in ```bin/Release/net9.0/appsettings.json```
4. In IIS 10, setup a website to http://localhost:1503

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

