'use strict';

module.exports = {
	rules: {
		'array-function-spacing': require( './lib/rules/array-function-spacing' ),
	},
	configs: {
		esnext: require( './lib/configs/esnext' ),
		i18n: require( './lib/configs/i18n' ),
		jscs: require( './lib/configs/jscs' ),
		jsdoc: require( './lib/configs/jsdoc' ),
		jshint: require( './lib/configs/jshint' ),
		node: require( './lib/configs/node' ),
		recommended: require( './lib/configs/recommended' ),
		strict: require( './lib/configs/strict' ),
	},
};
