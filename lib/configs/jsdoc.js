module.exports = {
	env: {
		browser: true
	},

	plugins: [
		'jsdoc'
	],

	rules: require('./rules/jsdoc')
};
