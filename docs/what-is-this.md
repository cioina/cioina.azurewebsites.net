---
order: 0
title: What Is This?
---

This is an unofficial `ng-zorro-antd` demo website. The main goal is to explore and learn `ng-zorro-antd` components and Angular `^16.0.0`.

> Currently, we use some old `ng-zorro-antd` documentation pages for demonstration purpose.

```angular-template-block
<div class="pic-plus">
  <span nz-icon nzType="custom:zorro" nzWidth="180px" nzHeight="180px"></span>
  <span>+</span>
  <span nz-icon nzType="custom:angular" nzWidth="180px" nzHeight="180px"></span>
  <span>=</span>
  <span nz-icon nzType="custom:ng-zorro" nzWidth="180px" nzHeight="180px"></span>
</div>
```

## Static vs Dynamic

The main difference between this website and the [official](https://ng.ant.design/docs/introduce/en) `ng-zorro-antd` is that we don't use Server-side Rendering (SSR). If you are interested in SSR, you may choose:

- [Angular Universal](https://github.com/angular/universal) - outdated static site generator for Angular
- [Scully](https://github.com/scullyio/scully) - outdated static site generator for Angular
- [VuePress](https://github.com/vuepress/core) - Vue-Powered Static Site Generator
- [Next.js](https://github.com/vercel/next.js) - The React Framework
- [Analog](https://github.com/analogjs/analog) - The fullstack meta-framework for Angular. Powered by Vite and Nitro

## Compare Different Tools for Static Content Generation

[Here](https://docs.astro.build/comparing-astro-vs-other-tools/) is a compact comparison between [Astro](https://github.com/snowpackjs/astro) and different tools for static content generation.

## Client-side

The client-side code is written in TypeScript and is compiled with `@angular/cli`.

- Written in TypeScript with complete defined types
- 60+ high-quality`ng-zorro-antd` components out of the box
- Default and dark themes out of the box
- Few dependencens
- Lazy-loading Angular modules
- [Reactive libraries](https://github.com/ngrx/platform) for Angular
- "Headless" website architecture (decoupled architecture)

## Package Dependences

We compile `ng-zorro-antd`and `@ant-design/icons-angular` direct from sources, so folowing are all the additional dependences that our client-site needs:

```json
   "dependencies": {
    "@angular/cdk": "^16.2.0",
    "@ctrl/tinycolor": "^3.6.0",
    "date-fns": "^2.30.0"
  }
```

## Server-side

The server-side code is written in PHP and uses Laravel 8 framework.

- Written in PHP on top of [Laravel framework](https://github.com/laravel/framework)
- JSON Web Token Authentication (JWT) for Laravel
- Cross-Origin Resource Sharing (CORS) for Laravel
- The content for the site is accessible via a RESTful web-service API
- Hosted by [Red Hat OpenShift Online](https://www.openshift.com/products/online/)
- [Source-to-Image](https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build) (S2I) build
- MySQL 8.0 SQL database server

We use following PHP packages via Composer install:

```bash
Lock file operations: 55 installs, 0 updates, 0 removals
  - Locking brick/math (0.9.3)
  - Locking doctrine/inflector (2.0.8)
  - Locking doctrine/lexer (1.2.3)
  - Locking dragonmantank/cron-expression (v3.3.3)
  - Locking egulias/email-validator (2.1.25)
  - Locking graham-campbell/result-type (v1.1.1)
  - Locking laravel/framework (v8.83.27)
  - Locking laravel/serializable-closure (v1.3.1)
  - Locking laravelcollective/html (v6.3.0)
  - Locking league/commonmark (1.6.7)
  - Locking league/flysystem (1.1.10)
  - Locking league/mime-type-detection (1.13.0)
  - Locking monolog/monolog (2.9.1)
  - Locking nesbot/carbon (2.71.0)
  - Locking opis/closure (3.6.3)
  - Locking phpoption/phpoption (1.9.1)
  - Locking psr/clock (1.0.0)
  - Locking psr/container (1.1.1)
  - Locking psr/event-dispatcher (1.0.0)
  - Locking psr/log (1.1.4)
  - Locking psr/simple-cache (1.0.1)
  - Locking ramsey/collection (1.2.2)
  - Locking ramsey/uuid (4.2.3)
  - Locking swiftmailer/swiftmailer (v6.3.0)
  - Locking symfony/console (v5.4.28)
  - Locking symfony/css-selector (v5.4.26)
  - Locking symfony/deprecation-contracts (v2.5.2)
  - Locking symfony/error-handler (v5.4.29)
  - Locking symfony/event-dispatcher (v5.4.26)
  - Locking symfony/event-dispatcher-contracts (v2.5.2)
  - Locking symfony/finder (v5.4.27)
  - Locking symfony/http-foundation (v5.4.28)
  - Locking symfony/http-kernel (v5.4.29)
  - Locking symfony/mime (v5.4.26)
  - Locking symfony/polyfill-ctype (v1.28.0)
  - Locking symfony/polyfill-iconv (v1.28.0)
  - Locking symfony/polyfill-intl-grapheme (v1.28.0)
  - Locking symfony/polyfill-intl-idn (v1.28.0)
  - Locking symfony/polyfill-intl-normalizer (v1.28.0)
  - Locking symfony/polyfill-mbstring (v1.28.0)
  - Locking symfony/polyfill-php72 (v1.28.0)
  - Locking symfony/polyfill-php73 (v1.28.0)
  - Locking symfony/polyfill-php80 (v1.28.0)
  - Locking symfony/polyfill-php81 (v1.28.0)
  - Locking symfony/process (v5.4.28)
  - Locking symfony/routing (v5.4.26)
  - Locking symfony/service-contracts (v2.5.2)
  - Locking symfony/string (v5.4.29)
  - Locking symfony/translation (v5.4.24)
  - Locking symfony/translation-contracts (v2.5.2)
  - Locking symfony/var-dumper (v5.4.29)
  - Locking tijsverkoyen/css-to-inline-styles (2.2.6)
  - Locking vlucas/phpdotenv (v5.5.0)
  - Locking voku/portable-ascii (1.6.1)
  - Locking webmozart/assert (1.11.0)
```

In addition, we use a few PHP packages adapted for Laravel 8 framework and PHP 7.3 direct from sources.

```json
{
  "name": "cioina/blog",
  "description": "Fresh install of Laravel and friends.",
  "keywords": ["framework", "laravel"],
  "license": "MIT",
  "type": "project",
  "require": {
    "php": "^7.3.0",
    "psr/container": "1.1.1",
    "ramsey/collection": "~1.2.2",
    "league/commonmark": "~1.6.7",
    "laravel/framework": "^8.83.27",
    "laravelcollective/html": "~6.3.0"
  },
  "autoload": {
    "classmap": ["database"],
    "psr-4": {
      "Maatwebsite\\Excel\\": "src/vendor/maatwebsite/excel/src/Maatwebsite/Excel",
      "Kris\\LaravelFormBuilder\\": "src/vendor/kris/laravel-form-builder/src/Kris/LaravelFormBuilder",
      "Wpb\\StringBladeCompiler\\": "src/vendor/wpb/string-blade-compiler/src/Wpb/StringBladeCompiler",
      "Distilleries\\DatatableBuilder\\": "src/vendor/distilleries/datatable-builder/src/Distilleries/DatatableBuilder",
      "Distilleries\\FormBuilder\\": "src/vendor/distilleries/form-builder/src/Distilleries/FormBuilder",
      "Distilleries\\MailerSaver\\": "src/vendor/distilleries/mailersaver/src/Distilleries/MailerSaver",
      "Distilleries\\PermissionUtil\\": "src/vendor/distilleries/permission-util/src/Distilleries/PermissionUtil",
      "Distilleries\\Expendable\\": "src/vendor/distilleries/expendable/src/Distilleries/Expendable",
      "Chumper\\Datatable\\": "src/vendor/distilleries/datatable/src/Chumper/Datatable",
      "Spatie\\Cors\\": "src/vendor/spatie/laravel-cors/src/",
      "Tymon\\JWTAuth\\": "src/vendor/tymon/jwt-auth/src/",
      "Firebase\\JWT\\": "src/vendor/firebase/php-jwt/src/",
      "Acioina\\UserManagement\\": "src/acioina/site/src/Acioina/UserManagement"
    },
    "files": [
      "src/vendor/phpoffice/phpexcel/Classes/PHPExcel.php",
      "src/vendor/kris/laravel-form-builder/src/helpers.php",
      "src/vendor/distilleries/form-builder/src/helpers.php"
    ]
  },
  "minimum-stability": "dev",
  "prefer-stable": true,
  "extra": {
    "laravel": {
      "dont-discover": []
    }
  },
  "config": {
    "preferred-install": "dist",
    "sort-packages": true,
    "optimize-autoloader": true
  }
}
```

## Version

The latest version of `ng-zorro-antd` is [![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd). Check the bottom of the footer for `NG-ZORRO version` to see what version this website was compiled with.
