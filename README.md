# eslint-plugin-wordpress

A collection of custom ESLint rules that help enforce JavaScript coding standard in the WordPress project.

[![Build Status](https://api.travis-ci.org/ntwb/eslint-plugin-wordpress.svg?branch=master)](https://travis-ci.org/ntwb/eslint-plugin-wordpress) [![Coverage Status](https://coveralls.io/repos/github/ntwb/eslint-plugin-wordpress/badge.svg?branch=master)](https://coveralls.io/github/ntwb/eslint-plugin-wordpress?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/ntwb/eslint-plugin-wordpress/badges/score.svg)](https://www.bithound.io/github/ntwb/eslint-plugin-wordpress) [![NPM version](http://img.shields.io/npm/v/eslint-plugin-wordpress.svg)](https://www.npmjs.org/package/eslint-plugin-wordpress)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install [`eslint-plugin-wordpress`](https://github.com/ntwb/eslint-plugin-wordpress):

```
$ npm install eslint-plugin-wordpress --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wordpress` globally.

## Usage

This plugin exports a [`recommended` config](index.js) that enforces [WordPress JavaScript coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/).

**Note**: This config will also add the Backbone, jQuery, JSON, Underscore, and the global `wp` as allowed [globals](http://eslint.org/docs/user-guide/configuring#specifying-globals).

Enable it in your `package.json` with the `extends` option:

```json
{
	"name": "my-wordpress-project",
	"eslintConfig": {
		"extends": "plugin:wordpress/recommended",
		"plugins": [
			"wordpress"
		]
	}
}
```

Or create your own `.eslintrc.json` configuration file:

```json
{
	"extends": "plugin:wordpress/recommended",
	"plugins": [
		"wordpress"
	]
}
```

Or create your own `.eslintrc.js` configuration file:

```js
{
	"extends": "plugin:wordpress/recommended",
	"plugins": [
		"wordpress"
	]
}
```

Or create your own `.eslintrc.yaml` or `.eslintrc.yml` configuration file:

```yaml
extends:
	- "plugin:wordpress/recommended"

plugins:
	- "wordpress"
```

See the [ESLint docs](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats) for more information about configuration file formats.


You can also stack any of the extra shared configs on top of the "recommended" config by extending an array of linting configs. For example, this package provides a backbone linting config, which can be added to the recommended config with the following configuration file:

```json
{
	"extends": [
		"plugin:wordpress/recommended",
		"plugin:wordpress/backbone"
	]
}
```

Another example for if your creating a NodeJS project to use the "node" and "ava" shared configs:

```json
{
	"extends": [
		"plugin:wordpress/node",
		"plugin:wordpress/ava"
	]
}
```
## Resources

- [WordPress JavaScript coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/)

## Code Sources, References, 

- Inspried by Shopify's shared configs in [eslint-plugin-shopify](https://github.com/Shopify/javascript/tree/master/packages/eslint-plugin-shopify)
