---
title: What Version of This Blog Do You See?
short_title: What Version?
---

As you can see, this website does not have a formal version tag. It uses the latest version of `ng-zorro-antd` and Angular as some kind of version tag. So, just imagine how surprised I was when I deployed this website compiled with Angular `12.2.9` and checking my very old Samsung that runs on Android 4.4.2. For some reason, the old Chrome web browser does not want to load this website correctly, so, I use an old version of FireFox browser for Android (As you may know, Google does not allow to update apps for old Android versions.) FireFox worked ok at first. But, when I closed and opened the browser again, this site loaded automatically and showed Angular `12.2.4` at the bottom of the footer. Somehow, FireFox cached an old version of my website. Deleting the FireFox cache did not help, but, reloading the URL would show the correct Angular `12.2.9`.

> It looks like starting with Angular 16, this website will not work at all anymore on outdated devices!

## The Problem

It may be problematic to have latest version for some websites that use Angular with a lot of lazy-loading modules. Imagine a user browsing your website just seconds before you start to deploy a new version of your website. The user will still have the old version (old Angular compiled JavaScript files) even after the deployment ends. We will consider three case scenarios here and will try to implement solution #2 from **gkalpak**'s [StackOverflow](https://stackoverflow.com/questions/55494181/what-is-the-purpose-of-swupdate-activateupdate-in-angular/59175788#59175788) answer. We will let website users know that a new version is available and ask them to refresh the webpage.

## Case Scenario #1

From my experience, the problem may appear for old/outdated web browsers like one described above or when you open multiple tabs of the same page. You will get a message to reload/refresh the page with an error similar to **ERROR: b607b9112d** (where b607b9112d is the new hash.)

It was very simple for me to implement this solution because I use a server-side API and deploy my backend and frontend on the same server and generate my deployment with a Node.js script. So, I generate  [a small PHP file](https://github.com/cioina/openshift-laravel-example/blob/main/src/acioina/site/src/Acioina/UserManagement/Http/Controllers/Api/VersionController.php) and small TypeScript file with some unique hash.

**`VersionController.php`**

```php
<?php
namespace Acioina\UserManagement\Http\Controllers\Api;
use Acioina\UserManagement\Transformers\VersionTransformer;

class VersionController extends ApiController
{
    private const ANGULAR_APP_HASH = 'b607b9112d';

    public function __construct(VersionTransformer $transformer)
    {
        parent::__construct($transformer);
    }

    public function index()
    {
        return $this->respondWithTransformer(['hash' => self::ANGULAR_APP_HASH]);
    }
}
```

**`version.ts`**

```typescript
export const APP_VERSION = {
  version: '0.0.0',
  hash: 'b607b9112d',
};
```

Currently we are moving our server-side to ASP.NET Core and we are generating this small file:

**`VersionResponseModel.cs`**

```csharp
namespace BlogAngular.Application.Common.Version;
using Newtonsoft.Json;
public class VersionResponseModel
{
    public VersionResponseModel()
    {
        Hash = "b607b9112d";
    }

    [JsonProperty("hash")]
    public string? Hash { get; } = default!;
}
```

In my `app.component.ts`, I have something like this:

```typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="page-wrapper">
      <app-header [windowWidth]="windowWidth" [isLoggedIn]="isLoggedIn" [username]="username"> </app-header>
      <ng-container *ngIf="notification">
        <nz-card>
          <div nz-row nzJustify="center">
            <div nz-col>
              <h5 nz-typography nzType="danger" [nzContent]="notification"></h5>
            </div>
          </div>
        </nz-card>
      </ng-container>
...
`
  ngOnInit(): void {
    this.versionFacade.getVersion();

    this.versionFacade.versionHash$.pipe(takeUntil(this.destroy$)).subscribe((hash: string) => {
      if (hash && hash !== APP_VERSION.hash) {
        this.notification =
          'You are using an old version of this website and some pages may not work correctly. Please reload/refresh the page in order to load the latest version.';
        this.cdr.markForCheck();
      }
    });
  }
```

I compile my frontend app with a command like this: `yarn build:site`. This simple solution helped me to solve my FireFox problem, however, the most logical solution is not to allow outdated web browsers to access this website.

## Case Scenario #2

This is the most common case scenario for modern (up to date) web browsers based on Google Chrome. It happens when you open this website from the browser bookmarks or when you browse this website while a new version was deployed to the server. You will get a message to reload/refresh the page with **ERROR: SwUpdatesService: activated**. This website uses a Service Worker loaded from `ngsw-worker.js`. In addition, we use Angular [SwUpdates](https://github.com/ngrx/platform/blob/main/projects/ngrx.io/src/app/sw-updates/sw-updates.service.ts) which will load updated resources of the website behind the scene on the user's machine. Theoretically, this website should work fine without reloading most of the time.

## Case Scenario #3

This case scenario happens when you open multiple tabs of this website while a new version was deployed to the server. You will get a message to reload/refresh the page with **ERROR: GlobalErrorHandler**. It means that the browser tries to load old resources that were deleted by a new deployment.
