var merge = require( 'merge' );

module.exports = {

	plugins: [
		'wordpress',
	],

	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/node' ),
		require( './rules/possible-errors' ),
		require( './rules/strict-mode' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
		require( './rules/wordpress' )
	),
};
