module.exports = {
	extends: 'plugin:wordpress/recommended',

	env: {
		browser: true
	},

	plugins: [
		'qunit'
	],

	rules: require('./rules/qunit')
};
