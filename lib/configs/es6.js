module.exports = {
	env: {
		es6: true,
		node: true,
	},

	plugins: [
		'node',
	],

	rules: require( './rules/es6' ),
};
