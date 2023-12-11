## This is the PrimalNinja SlickGrid repo

I have been a long time developer using Slick Grid for many personal and commercial projects from when I discovered it in the early 2010s.  I can't remember the 
exact date.  However it has proven time and time again to provide a fairly easy to use and flexible but SUPER FAST grid control for both local and remote data.

The last update I was using actually was version 2.1 from 2012 as I had thought the project was no longer maintained.  I was wrong - it was eventually picked up
by two other developers who have since addressed quite a few issues and enhanced it also - but it is going in a direction that doesn't necessarily suit the goals 
I have.

Please consider this version of SlickGrid currently experimental - until I give it a new versioning system and progress through goals.

This code is based on SlickGrid v5.5.6 (looking at the source), but I will try make it easy to migrate from SlickGrid 2.x.

1. Remove any need for Type Script, and reduce dependencies as much as possible, ideally make it compatible again with ES5.
2. Remove any need for the CSS compiler.
3. Remove any need for NPM.
4. Enhance the product.
5. Maintain it to some degree.
6. Ensure optional support for closure compiler & minifiers / obfuscators.
7. None of the following will be dependencies of SlickGrid: AngularJS, ReactJS or any other frameworks

Below

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Other Links

Please check out the other developers Repos here as the amount of work they have put into Slick Grid is to be commended.

- Michael Leibman, the original Author's Repo http://github.com/mleibman/slickgrid
- Ben McIntyre's (6pac) Repo https://github.com/6pac/SlickGrid
- Ger Hobbelt's (GerHobbelt) Repo https://github.com/GerHobbelt/SlickGrid
- Ghislain B's (ghiscoding) Repo https://github.com/ghiscoding/slickgrid-universal




## This is NOT the 6pac SlickGrid repo, but the readme as it was below for those who are looking for that version.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![NPM downloads](https://img.shields.io/npm/dm/slickgrid.svg)](https://npmjs.org/package/slickgrid)
[![npm](https://img.shields.io/npm/v/slickgrid.svg?logo=npm&logoColor=fff&label=npm)](https://npmjs.org/package/slickgrid)
[![Actions Status](https://github.com/6pac/SlickGrid/workflows/CI%20Build/badge.svg)](https://github.com/6pac/SlickGrid/actions)

## This is the 6pac SlickGrid repo

Check out the NEW SlickGrid Website! http://slickgrid.net/

This is the acknowledged and most active fork of SlickGrid.

It aims to be a viable alternative master repo, building on the legacy of the [mleibman/SlickGrid](https://github.com/mleibman/SlickGrid) master branch, keeping libraries up to date and applying, safe core patches and enhancements to keep the project up to date.

We extended the project from the original SlickGrid foundation while also including the following changes:
- added a few more Plugins: RowDetail, CellMenu, ContextMenu, GridMenu, CustomTooltip, GridState
- merged [X-SlickGrid](https://github.com/ddomingues/X-SlickGrid) code into the project to bring Frozen Columns/Rows (aka Pinning)
- removed jQueryUI requirement in [v3](https://github.com/6pac/SlickGrid/wiki/Major-version-3.0----Removal-of-jQueryUI-requirement-(replaced-by-SortableJS)) (replaced it with [SortableJS](https://sortablejs.github.io/Sortable/))
- removed jQuery requirement in [v4](https://github.com/6pac/SlickGrid/wiki/Major-version-4.0---Removal-of-jQuery-requirement)
- modernized the project in [v5](https://github.com/6pac/SlickGrid/wiki/Major-version-5.0-%E2%80%90-ES6-ESM-and-TypeScript-Support) by migrating to TypeScript (we kept IIFE and added ES6/ESM build targets) and we also gave SlickGrid a fresh and more modern look via a new Alpine Theme (CSS/SASS)

### Examples
Check out the **[Examples](https://github.com/6pac/SlickGrid/wiki/Examples)** Wiki for a full list of examples demonstrating new features and use cases, such as dynamic grid creation and editors with third party controls.

Also check out the [Wiki](https://github.com/6pac/SlickGrid/wiki) for news and documentation.

_For a basic TypeScript example, take a look at the v5.0 Annoucement & Migration guide shown below._

### Contributions
See [Contributing Guide](https://github.com/6pac/SlickGrid/blob/master/CONTRIBUTING.md)

### E2E Tests with Cypress
We have started to add E2E (end to end) tests in the browser by using [Cypress](https://www.cypress.io/). You can see [here](https://github.com/6pac/SlickGrid/tree/master/cypress/e2e) the list of Examples that now have E2E tests. We also run these tests in the [GitHub Actions](https://github.com/features/actions) Workflow (CI) on every Pull Request to avoid committing changes that might break the library. We currently have tests for over 30+ examples with over 300+ tests.

We welcome any new contributions (tests or fixes) and if you wish to add Cypress E2E tests, all you need to do is to clone the repo and run the following commands
```bash
npm install         # install all npm packages
npm run dev         # run a local development server on port 8080 in watch mode (or `npm run serve` without watch)
npm run cypress     # open Cypress UI tool
```
Once the Cypress UI is open, you can then click on "Run all Specs" to execute all E2E browser tests.

## Migrations

| SlickGrid | Migration Guide | Description |
| --------- | --------------- | ----------- |
| 3.x       | [Announcing v3.0](https://github.com/6pac/SlickGrid/wiki/Major-version-3.0----Removal-of-jQueryUI-requirement-(replaced-by-SortableJS)) | dropping [jQueryUI](https://jqueryui.com/) requirement and replaced it with [SortableJS](https://sortablejs.github.io/Sortable/) which is a lot more modern and touch friendly |
| 4.x       | [Announcing v4.0](https://github.com/6pac/SlickGrid/wiki/Major-version-4.0---Removal-of-jQuery-requirement) | dropping [jQuery](https://jquery.com/) requirement, SlickGrid is now using browser native code |
| 5.x       | [Announcing v5.0](https://github.com/6pac/SlickGrid/wiki/Major-version-5.0-%E2%80%90-ES6-ESM-and-TypeScript-Support) | project modernization, added TypeScript with ES6, ESM builds and added a new Alpine Theme |

## CSP Compliance
The library is now, at least for the most part, CSP (Content Security Policy) compliant since `v5.5.0`, however there are some exceptions to be aware of. When using any html string as template (for example with Custom Formatter returning an html string), you will not be fully compliant unless you return `TrustedHTML`. You can achieve this by using the `sanitizer` method in combo with [DOMPurify](https://github.com/cure53/DOMPurify) to return `TrustedHTML`, for more info please take a look at the [CSP Compliance](https://github.com/6pac/SlickGrid/wiki/CSP-Compliance) Wiki.

### Quick Little Fun Survey ✨
We are conducting a small little poll for fun, it is a single question survey about our latest releases. Thanks for taking the time to participate.

**[What do you think was the most exciting change(s) for you?](https://github.com/6pac/SlickGrid/discussions/853)**
