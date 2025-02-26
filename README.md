# Using markdown for static web pages

## What Is This?

Here are all my markdown files that I use to build all my "static" web pages for my website: https://cioina.azurewebsites.net

## Why?

When you find something wrong and really want me to correct it, just make a pull request!

## Run Binary On Local Windows Machine

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