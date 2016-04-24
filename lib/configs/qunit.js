module.exports = {
	env: {
		browser: true
	},

	plugins: [
		'qunit'
	],

	rules: require('./rules/qunit')
};
