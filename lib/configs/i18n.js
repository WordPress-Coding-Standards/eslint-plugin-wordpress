module.exports = {
	env: {
		browser: true
	},

	plugins: [
		'i18n',
		'wpcalypso'
	],

	rules: require('./rules/i18n')
};
