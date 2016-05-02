# eslint-plugin-wordpress

A collection of custom ESLint rules that help enforce JavaScript coding standard in the WordPress project.

[![Build Status](https://api.travis-ci.org/ntwb/eslint-plugin-wordpress.svg?branch=master)](https://travis-ci.org/ntwb/eslint-plugin-wordpress) [![Coverage Status](https://coveralls.io/repos/github/ntwb/eslint-plugin-wordpress/badge.svg?branch=master)](https://coveralls.io/github/ntwb/eslint-plugin-wordpress?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/ntwb/eslint-plugin-wordpress/badges/score.svg)](https://www.bithound.io/github/ntwb/eslint-plugin-wordpress) [![NPM version](http://img.shields.io/npm/v/eslint-plugin-wordpress.svg)](https://www.npmjs.org/package/eslint-plugin-wordpress)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-wordpress`:

```
$ npm install eslint-plugin-wordpress --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wordpress` globally.

## Usage

Add `wordpress` to the plugins section of your `.eslintrc.json` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wordpress"
    ]
}
```

Or add `wordpress` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```js
{
    "plugins": [
        "wordpress"
    ]
}
```

Or add `wordpress` to the plugins section of your `.eslintrc.yaml`/`.eslintrc.yml` configuration file. You can omit the `eslint-plugin-` prefix:

```yaml
{
    "plugins": [
        "wordpress"
    ]
}
```
http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wordpress/space-negation-operator": 2
    }
}
```

## Recommended config

This plugin exports a [`recommended` config](index.js) that enforces good practices.

Enable it in your `package.json` with the `extends` option:

```json
{
	"name": "my-wordpress-project",
	"eslintConfig": {
		"plugins": [
			"wordpress"
		],
		"extends": "plugin:wordpress/recommended"
	}
}
```

See the [ESLint docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending config files.

**Note**: This config will also add the Backbone, jQuery, JSON, Underscore, and the global `wp` as allowed [globals](http://eslint.org/docs/user-guide/configuring#specifying-globals).

## Ressources

- [WordPress JavaScript coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/)

## Code Sources, References, 

- Inspried by Shopify's shared configs in [eslint-plugin-shopify](https://github.com/Shopify/javascript/tree/master/packages/eslint-plugin-shopify)
