module.exports = {
	plugins: [
		'jsdoc',
	],

	rules: require( './rules/jsdoc' ),

	settings: {
		jsdoc: {
			tagNamePreference: {
				returns: 'return',
			},
		},
	},
};
