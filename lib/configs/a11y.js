module.exports = {
	env: {
		browser: true
	},

	plugins: [
		'jsx-a11y'
	],

	rules: require('./rules/jsx-a11y')
};
