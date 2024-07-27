# Using markdown for static web pages

## What Is This?

Here are all my markdown files that I use to build all my "static" web pages for my website: https://cioina.azurewebsites.net

## Why?

When you find something wrong and really want me to correct it, just make a pull request!

## Run Binary On Local Windows Machine

### Website Setup

In order use compiled binary from bin folder

1. Clone this repository
2. In IIS 10, setup a website to http://localhost:1503
3. Change **ConnectionStrings** to your MS SQL Server in appsettings.json

### appsettings.json

```json
{
  "ApplicationSettings": {
    "SecurityTokenDescriptorKey": "http://localhost:1503/api/v1.0",
    "SecurityTokenDescriptorExpiresInMinutes": 1440,
    "MaxFailedAccessAttempts": 7,
    "DefaultLockoutTimeSpanInMinutes": 30
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=YourMSSQLServer;Initial Catalog=BlogAngularDb;Integrated Security=False;User Id=sa;Password=YourPassword;MultipleActiveResultSets=True"
  },
  "AllowedHosts": "*"
}
```

### Administrator Credential

**Email:** admin@myblog.com
**Password:** Admin123456Admin!
