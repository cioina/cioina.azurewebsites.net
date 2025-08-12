---
order: 1
title: About This Blog
---

Here we've built a blog that is able to:

- Generate posts from markdown files
- Generate static syntax highlighting
- Deploy to a cloud platform
- Simulate static content

## Generate Posts from Markdown Files

We use a `ng-zorro-antd` Node.js script to generate compiled Angular modules from [a set of markdown files](https://github.com/cioina/alexei-cioina.b9ad.pro-us-east-1.openshiftapps.com/tree/main/posts).
Each post represents a compiled JavaScrip file that loads via lazy-loading. The content of a markdown file is included into compiled Angular module witch is smaller than a generated static HTML.

## Generate Static Syntax Highlighting

To generate static syntax highlighting (which is static HTML,) we use `prismjs` on Node.js. This way, we do not need to include `prismjs` JavaScript in our web application.

```javascript
const fs = require('fs');
const path = require('path');

function uniq(arr) {
    const set = arr.reduce((set, item) => {
        set[item] = true;
        return set;
        }, {});
    return Object.keys(set);
}

const prismCore = '../../node-prismjs/components/prism-core.js';
const Prism = require(prismCore);

const prelude = [
        'prism-markup',
        'prism-css',
        'prism-clike',
        'prism-javascript',
        'prism-css-extras',
        'prism-json',
        'prism-markup-templating',
        'prism-php',
        'prism-php-extras',
        'prism-typescript',
        'prism-csharp'
];

const prismComponents = path.dirname(require.resolve(prismCore));
const components = prelude.concat(fs.readdirSync(prismComponents))
        .map((component) => component.replace(/(\.min)?\.js$/, ''));

let i=0;
const componentsSet = uniq(components);
componentsSet
  .forEach((component) => {
      require(path.join(prismComponents, component));
      console.log(`${i++} ${component}`);
  });

module.exports = Prism;
```

```javascript
const prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['bash', 'diff', 'markup-templating', 'json', 'less', 'typescript']);

const insideString = {
  variable: [
    // Arithmetic Environment
    {
      pattern: /\$?\(\([\w\W]+?\)\)/,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        variable: [
          {
            pattern: /(^\$\(\([\w\W]+)\)\)/,
            lookbehind: true
          },
          {
            pattern: /^\$\(\(/,
            function: prism.languages.bash['function'],
            keyword: prism.languages.bash.keyword,
            boolean: prism.languages.bash.boolean,
            operator: prism.languages.bash.operator,
            punctuation: prism.languages.bash.punctuation
          }
        ],
        number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        punctuation: /\(\(?|\)\)?|,|;/
      }
    },
    // Command Substitution
    {
      pattern: /\$\([^)]+\)|`[^`]+`/,
      inside: {
        variable: /^\$\(|^`|\)$|`$/
      }
    },
    /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i
  ]
};

prism.languages.bash = {
  shebang: {
    pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
    alias: 'important'
  },
  comment: {
    pattern: /(^|[^"{\\])#.*/,
    lookbehind: true
  },
  string: [
    //Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
      lookbehind: true,
      greedy: true,
      inside: insideString
    },
    {
      pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
      greedy: true,
      inside: insideString
    }
  ],
  variable: insideString.variable,
  // Originally based on http://ss64.com/bash/
  function: {
    pattern:
      /(^|\s|;|\||&)(?:alias|ng-zorro-antd|@angular\/cli|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|ng|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
    lookbehind: true
  },
  keyword: {
    pattern:
      /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
    lookbehind: true
  },
  boolean: {
    pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
    lookbehind: true
  },
  operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
  punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
};

/**
 * Extend Angular
 */
prism.languages.angular = prism.languages.extend('typescript', {});

prism.languages.insertBefore('angular', 'string', {
  'template-string': {
    pattern: /template[\s]*:[\s]*`(?:\\[\s\S]|[^\\`])*`/,
    greedy : true,
    inside : {
      'html': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside : prism.languages.html
      }
    }
  },
  'styles-string'   : {
    pattern: /styles[\s]*:[\s]*\[[\s]*`(?:\\[\s\S]|[^\\`])*`[\s]*\]/,
    greedy : true,
    inside : {
      'css': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside : prism.languages.css
      }
    }
  }
});

module.exports = prism;
```

## Deploy to a Cloud Platform

We use Red Hat [OpenShift Online](https://www.openshift.com/products/online/) public cloud
with [Source-to-Image](https://docs.openshift.com/container-platform/3.11/architecture/core_concepts/builds_and_image_streams.html#source-build) (S2I) build
and [Recreate Strategy](https://docs.openshift.com/container-platform/3.11/dev_guide/deployments/deployment_strategies.html#recreate-strategy) with less than 60 seconds downtime.

## Simulate Static Content

We've found [a GitHub repository](https://github.com/dwightwatson/dwightwatson.com) that satisfies all 4 conditions. Well, in fact, it generates a static website, so condition 4 is not
just simulated. In contrast, [this GitHub repository](https://github.com/dwightwatson/neontsunami-laravel) uses Laravel's Blade template and a MySQL database to
[generate posts](https://github.com/dwightwatson/neontsunami-laravel/blob/master/resources/views/posts/show.blade.php) on the server-side. It means that every time you access a post,
your web browser makes a request to the server and the server will get the content from the database and render HTML (BTW, [here](https://github.com/cioina/neontsunami) is a version adapted for OpenShift.) Even if Blade caches the result, every request creates a connection to the database (We do not consider [Laravel Octane](https://laravel.com/docs/8.x/octane) here.) Static websites do not need a database and the content is cached on the user's side. So, the user makes less requests to the server.

How do we simulate static content? All posts from this blog are Angular compiled JavaScript files that are cached on the user's side.

## Markdown Extension

While transforming a markdown file into an Angular component and module, we implemented a markdown extension that will create a navigation menue from all heading lines of a markdown file. In addition, we implemented the posibility to include a code block with a special name `angular-template-block` to be iterpreded as a part of the Angular template. The code block below, will be included in the generated Angular component as a parth of the template.

```html
<div class="pic-plus">
  <nz-icon nzType="custom:zorro" nzWidth="180px" nzHeight="180px" />
  <span>+</span>
  <nz-icon nzType="custom:angular" nzWidth="180px" nzHeight="180px" />
  <span>=</span>
  <nz-icon nzType="custom:ng-zorro" nzWidth="180px" nzHeight="180px" />
</div>
```

For more complex markdown format extensions, please visit [MDX 2!](https://mdxjs.com/)

## Blog Listing

Client-side listing api is based on [this GitHub repository](https://github.com/AndyT2503/angular-conduit-signals) and server-side is similar to [this GitHub repository](https://github.com/alexeymezenin/laravel-realworld-example-app)

As you can see, we use a lot of `ng-zorro-antd` Angular components:

- `nz-list`, `nz-pagination`, `nz-image`, `nz-transfer`, `nz-select`, `nz-table`, and more
- `NzDrawerService`, `NzDrawerRef`
