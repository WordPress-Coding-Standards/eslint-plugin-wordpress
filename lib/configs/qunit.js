module.exports = {
	extends: 'plugin:wordpress/recommended',

	env: {
		browser: true,
		qunit: true
	},

	globals: {
		_: false,
		asyncTest: false,
		deepEqual: false,
		equal: false,
		expect: false,
		jQuery: false,
		module: false,
		notDeepEqual: false,
		notEqual: false,
		notStrictEqual: false,
		ok: false,
		QUnit: false,
		raises: false,
		start: false,
		stop: false,
		strictEqual: false,
		test: false
	},

	plugins: [
		'qunit'
	],

	rules: require('./rules/qunit')
};
