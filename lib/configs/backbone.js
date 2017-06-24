module.exports = {
	extends: 'plugin:wordpress/recommended',

	env: {
		browser: true,
	},

	plugins: [
		'backbone',
	],

	rules: require( './rules/backbone' ),
};
