'use strict';

module.exports = {
	configs: {
		ava: require('./lib/configs/ava'),
		backbone: require('./lib/configs/backbone'),
		i18n: require('./lib/configs/i18n'),
		jscs: require('./lib/configs/jscs'),
		jsdoc: require('./lib/configs/jsdoc'),
		jshint: require('./lib/configs/jshint'),
		node: require('./lib/configs/node'),
		qunit: require('./lib/configs/qunit'),
		recommended: require('./lib/configs/recommended')
	}
};
