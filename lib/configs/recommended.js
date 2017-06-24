var merge = require('merge');

module.exports = {
	env: {
		browser: true,
		node: true
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

	rules: merge(
		require('./rules/best-practices'),
		require('./rules/legacy'),
		require('./rules/possible-errors'),
		require('./rules/stylistic-issues'),
		require('./rules/variables')
	)
};
