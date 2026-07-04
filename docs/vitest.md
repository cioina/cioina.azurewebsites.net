https://github.com/huajian123/ng-antd-admin/blob/master/ui/.agents/skills/angular-developer/references/component-styling.md

## View Encapsulation

Every component has a view encapsulation setting that determines how styles are scoped.

| Mode                            | Behavior                                                                                      |
| :------------------------------ | :-------------------------------------------------------------------------------------------- |
| `Emulated` (Default)            | Scopes styles to the component using unique HTML attributes. Global styles can still leak in. |
| `ShadowDom`                     | Uses the browser's native Shadow DOM API to isolate styles completely.                        |
| `None`                          | Disables encapsulation. Component styles become global.                                       |
| `ExperimentalIsolatedShadowDom` | Strictly guarantees that only the component's styles apply.                                   |

## Special Selectors

### `:host`

Targets the component's host element (the element matching the component's selector).

```css
:host {
  display: block;
  border: 1px solid black;
}
```

### `:host-context()`

Targets the host element based on some condition in its ancestry.

```css
/* Apply styles if any ancestor has the 'theme-dark' class */
:host-context(.theme-dark) {
  background-color: #333;
}
```

### `::ng-deep`

Disables view encapsulation for a specific rule, allowing it to "leak" into child components.
**Note: The Angular team strongly discourages the use of `::ng-deep`.** It is supported only for backwards compatibility.

https://github.com/huajian123/ng-antd-admin/blob/master/ui/angular.json

```json
 "stylePreprocessorOptions": {
   "includePaths": [
    "src/styles/themes"
    ]
 }
```

https://github.com/huajian123/ng-antd-admin/blob/master/ui/src/app/layout/default/default.component.less

```css
@import 'mixin';
@import 'base';
@import 'admin-variable';

.trigger {
  cursor: pointer;
  z-index: 10;
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.mix-sider-height {
  height: calc(100vh - @layout-header-height - @layout-trigger-height);
}

.themeMixin({
  :host {
    .menu-sidebar {
      min-height: 100vh;
      box-shadow: 2px 0 6px #00152959;
      z-index: 10;
    }

    .dark-top-nav-bg {
      background: @menu-dark-bg;
      color: @white;

      ::ng-deep .ant-badge {
        color: @white;
      }
    }
  }
});

.trigger-top-border {
  border-top: 1px solid;
}

.mixin-left-nav-fixed {
  position: fixed;
  top: 48px;
  left: 0;
}

.left-nav-fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  flex: auto;
  width: calc(100% - @left-nav-width);
}

.top-fixed {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  flex: auto;
}

.fixed-collapsed {
  width: calc(100% - @collapsed-nav-width);
}

.fixed-over-mode {
  width: 100%;
}
```

https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/ng-zorro-antd.less

### ng-zorro-antd.less

```css
@import './style/default.less';
@import './style/patch.less';
@import './components.less';
```

### entry.less

```css
@import './index.less';
@import './patch.less';
```

https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/build/compile-styles.ts

```ts
import { copy, pathExists, readdirSync, readFile, writeFile } from 'fs-extra';
import less from 'less';
//import LessPluginCleanCSS from 'less-plugin-clean-css';
//import NpmImportPlugin from 'less-plugin-npm-import';

import path from 'path';

import { buildConfig } from '../build-config';

function needTransformStyle(content: string): boolean {
  return (
    content.includes('../../style/index.less') || content.includes('./index.less') || content.includes('/entry.less')
  );
}

async function compileLess(
  content: string,
  savePath: string,
  min: boolean,
  sub?: boolean,
  rootPath?: string
): Promise<void> {
  const plugins: Less.Plugin[] = [];
  const lessOptions: Less.Options = { plugins };

  //if (min) {
  //  plugins.push(new LessPluginCleanCSS({ advanced: true }));
  //}

  //if (sub) {
  //  lessOptions.paths = [path.dirname(rootPath as string)];
  //  lessOptions.filename = rootPath;
  //  plugins.push(new NpmImportPlugin({ prefix: '~' }));
  //}

  return less
    .render(content, lessOptions)
    .then(({ css }) => writeFile(savePath, css))
    .catch(err => Promise.reject(err));
}

// Compile concentrated less file to CSS file.
  const lessContent = `@import "${path.posix.join(targetPath, 'default.less')}";\n${inlineLess}`;
  promiseList.push(compileLess(lessContent, path.join(targetPath, 'ng-zorro-antd.css'), false));

// Compile css file that doesn't have component-specific styles.
  const cssIndexPath = path.join(sourcePath, 'style', 'entry.less');
  const cssIndex = await readFile(cssIndexPath, { encoding: 'utf8' });
  // Rewrite `entry.less` file with `root-entry-name`
  const entryLessInStyle = needTransformStyle(cssIndex) ? `@root-entry-name: default;\n${cssIndex}` : cssIndex;

  promiseList.push(
    compileLess(entryLessInStyle, path.join(targetPath, 'style', 'index.css'), false, true, cssIndexPath)
  );  
```

## vitest.config

```ts
import angular from '@analogjs/vite-plugin-angular';
import { playwright } from '@vitest/browser-playwright';
import less from 'less';
import { preprocessCSS, type ResolvedConfig } from 'vite';
import { type Plugin, defaultExclude, defineConfig } from 'vitest/config';

import { existsSync, readFileSync, createWriteStream } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { format } from 'node:util';

const logFile = resolve(__dirname, './apps/logs/vite.txt');
const log_file = createWriteStream(logFile, { flags: 'w' });

console.log = function (d) {
  log_file.write(`${format(d)}\n`);
};

async function compileLess(content: string): Promise<string> {
  const plugins: Less.Plugin[] = [];
  const lessOptions: Less.Options = { plugins };

  return less
    .render(content, lessOptions)
    .then(({ css }) => css)
    .catch(err => Promise.reject(err));
}

function inlineStyleUrls(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'inline-style-urls',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async transform(code, id) {
      if (!id.endsWith('.ts') || id.includes('node_modules')) return null;
      if (!code.includes('@Component') || !(code.includes('styleUrls') || code.includes('styleUrl'))) return null;

      const inlinedStyles: string[] = [];
      const targetPath = resolve(__dirname, './apps/admin/src/styles/default.less');
      const lessContent = `@import "${targetPath}";`;
      console.log(lessContent);
      const css = await compileLess(lessContent);
      inlinedStyles.push(css);
      const styleUrlsMatch = code.match(/styleUrls\s*:\s*\[([^\]]+)\]/);
      if (styleUrlsMatch) {
        const urlMatches = styleUrlsMatch[1].match(/['"]([^'"]+)['"]/g);
        if (urlMatches) {
          const componentDir = dirname(id);

          for (const urlMatch of urlMatches) {
            const stylePath = urlMatch.replace(/['"]/g, '');
            const fullPath = resolve(componentDir, stylePath);

            if (!existsSync(fullPath)) continue;

            const scssContent = readFileSync(fullPath, 'utf-8');
            const result = await preprocessCSS(scssContent, fullPath, config);
            const escapedCss = result.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
            inlinedStyles.push(escapedCss);
          }
        }
      }

      if (inlinedStyles.length === 0) return null;

      const stylesArray = inlinedStyles.map(css => `\`${css}\``).join(', ');
      const newCode = code.replace(/styleUrls\s*:\s*\[[^\]]+\]/, `styles: [${stylesArray}]`);
      console.log(newCode);
      return { code: newCode, map: null };
    }
  };
}

const fileReplacements = [
  {
    replace: 'apps/admin/src/environments/environment.ts',
    with: 'apps/admin/src/environments/environment.test.ts'
  }
];

//const discoveredLibs = discoverLibraryRoutes(resolve(__dirname, '../..'));

export default defineConfig({
  plugins: [
    inlineStyleUrls(),
    angular({
      jit: false,
      tsconfig: './tsconfig.vite.json',
      inlineStylesExtension: 'less',
      //include: [...['apps/admin/src/styles/**/*.less']],
      fileReplacements,
      experimental: {
        useAngularCompilationAPI: true
      }
    }) as unknown as Plugin
  ],
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: { label: 'zoneless', color: 'red' },
          setupFiles: ['./test/vitest-zoneless-setup.ts'],
          include: ['./test/*.test.ts'],
          exclude: [...defaultExclude, './apps/**/*', './components/**/*']
        }
      }
    ],
    globals: true,
    watch: true,
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    }
  }
});

```
