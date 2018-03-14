# HEAD

* chore: add `.eslintignore` to ignore custom test fixtures.
* chore: add `.npmrc` file to prevent npm creating a `package-lock.json` file.
* chore: add `eslint-find-rules` plugin..
* chore: add `eslint-plugin-jest` plugin.
* chore: add `npmpub` package.
* chore: add `package-lock.json` to `.gitignore`.
* chore: add Jest configuration and scripts to `package.json`.
* chore: add Jest to `env` in `.eslintrc.json`.
* chore: Bump minimum Node.js required version to `8.9.3`.
* chore: install the latest release of npm for all Travis CI jobs.
* chore: move ESLint config from `package.json` to standalone `.eslintrc.json` file.
* chore: remove `.gitkeep` placeholder file.
* chore: remove `.nyc_output` from `.gitignore`.
* chore: remove `package-lock.json`.
* chore: remove Ava.
* chore: remove nyc coveralls script.
* chore: remove nyc.
* chore: report deprecated rules in `find-rules` script.
* chore: switch ESLint config from AVA to Jest in `.eslintrc.json`.
* chore: Switch from AVA to Jest for tests.
* chore: switch scripts in `package.json` to run jest for tests.
* chore: update `.editorconfig` per upstream WordPress' `.editorconfig`.
* chore: update `__tests__/rules/array-function-spacing.js` per latest ESLint config.
* chore: update `coveralls` to `3.0.0`.
* chore: update `eslint-find-rules` to `3.2.1`.
* chore: update `eslint-plugin-i18n` to `1.2.0`.
* chore: update `eslint-plugin-jest` to `21.14.0`.
* chore: update `eslint-plugin-jsdoc` to `3.5.0`.
* chore: update `eslint-plugin-node` to `6.0.1`.
* chore: update `eslint-plugin-wordpress` to commit 50afb7ed364195c8cee0603f6bc3c7eec0fa6969.
* chore: update `eslint-plugin-wpcalypso` to `4.0.1`.
* chore: update `eslint` to `4.18.2`.
* chore: update `jest` to `22.4.2`.
* chore: update `lib/rules/array-function-spacing.js` per latest ESLint config.
* chore: update `package-lock.json`.
* chore: update Jest test configuration paths.
* chore: update Jest tests path in `testMatch` in `package.json`.
* chore: use tabs for indentation in `package.json` per WordPress Coding Standards.
* chore: Use tilde `~` instead of caret `^` for package versions.

* docs: fix typo in `README.md`.
* docs: update changelog with switch to Jest from AVA.
* docs: update Coveralls badge URL.
* docs: update ESLint Node.js rule docs per ESLint's docs.
* docs: update repo URLs in README.md.

* feat: add `array-function-spacing` rule.
* feat: Add ESLint 4.x rules.
* feat: add ESLint `strict` rule and `strict-mode` configuration.
* feat: add new `eslint-plugin-i18n` rules.
* feat: add new `eslint-plugin-rules` rules.
* feat: add new `function-paren-newline` rule introduced in ESLint `4.6.0`.
* feat: add new `implicit-arrow-linebreak` rule introduced in ESLint `4.12.0`.
* feat: add new `lines-between-class-members` rule introduced in ESLint `4.9.0`.
* feat: add new `multiline-comment-style` rule introduced in ESLint `4.10.0`.
* feat: add new ESLint 4.x rules.
* feat: tune off `one-var` rule.
* feat: turn `no-lonely-if` rule.
* feat: turn off `computed-property-spacing` rule.
* feat: turn off `space-in-parens` rule.
* feat: update `space-unary-ops` rule to add spacing after `!` operator.
* feat: wire up the `array-function-spacing` rule.

* fix: add `@return` tag name preference option for `eslint-plugin-jsdoc`.
* fix: add missing `wpcalypso` namespace to `eslint-plugin-wpcalypso` rules.
* fix: Add Node.js `node` ESLint environment to `recommended` config.
* fix: assign preferred JSDoc tags and types for `eslint-plugin-jsdoc`'s' `jsdoc/require-param` rule.
* fix: assign preferred JSDoc tags and types for ESLint `valid-jsdoc` rule.
* fix: change `no-extra-semi`, `semi-spacing`, and `semi` from `warn` to `error`.
* fix: change `quotes` from `warn` to `error`.
* fix: change `yoda` rule from `warn` to `error`, and option `never` to `always`.
* fix: Changed `comma-dangle` rule option to `error` with option `always-multiline`.
* fix: Moved `comma-dangle` rule from `possible-errors` rule set to `stylistic-issues` rule set.
* fix: prefer `@return` over `@returns`.
* fix: remove `no-restricted-imports` ES6 rule from `node` configuration.
* fix: remove deprecated `eslint-plugin-wpcalypso` rules.
* fix: remove deprecated ESLint rules following.
* fix: remove erroneous `:` from `no-plusplus` rule configuration.
* fix: remove the `ava`, `backbone`, and `qunit` ESLint plugins and configs.
* fix: remove unnecessarily quoted properties.
* fix: require JSDoc for methods.
* fix: update ESLint `node` rules.
* fix: update yoda condition in `hasWhiteSpaceBetween` in `array-function-spacing` rule.

* refactor: Move `test` folder to `__tests__`.
* refactor: Refactor tests to use Jest instead of Ava.

* tests: add initial JSDocs tests
* tests: add JSCS fixtures tests.
* tests: add JSHint fixtures tests.
* tests: add new WPCS tests for semicolons and strings
* tests: add WPCS yoda conditions test fixture
* tests: move `array-function-spacing` test from `test` folder to `__tests__`
* tests: update JSDocs Jest snapshot
* tests: update JSDocs test fixture
* tests: use `codeframe` ESLint formatter
* tests: use `toHaveLength()` following 7b8453c
* tests: use correct config reference in test describe

# 0.1.0

* Publish to npmjs.com
* Use ESLint 2.x
* Update test for ESLint 2.x ruleTester fixes

# 0.0.1

* Initial commit
