var merge = require( 'merge' );

module.exports = {
	env: {
		browser: true,
	},

	globals: {
		_: false,
		Backbone: false,
		jQuery: false,
		JSON: false,
		wp: false,
	},

	parserOptions: {
		ecmaVersion: 5,
	},

	plugins: [
		'wordpress',
	],

	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/possible-errors' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
		require( './rules/wordpress' )
	),
};
