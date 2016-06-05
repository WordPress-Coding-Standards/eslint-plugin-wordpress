module.exports = {
	extends: 'plugin:wordpress/recommended',

	env: {
		browser: true,
		qunit: true
	},

	plugins: [
		'qunit'
	],

	rules: require('./rules/qunit')
};
