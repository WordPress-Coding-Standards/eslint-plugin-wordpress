module.exports = {
	env: {
		browser: true
	},

	globals: {
		_: false,
		Backbone: false,
		jQuery: false,
		JSON: false,
		wp: false
	},

	plugins: [
		'wordpress'
	],

	rules: require('./rules/jscs')
};
