// see https://github.com/gajus/eslint-plugin-jsdoc

module.exports = {
	// Require JSDoc comments
	'require-jsdoc': [ 'error', {
		require: {
			MethodDefinition: true,
		},
	} ],
	// Ensure JSDoc comments are valid
	'valid-jsdoc': [ 'error', {
		prefer: {
			arg: 'param',
			argument: 'param',
			extends: 'augments',
			returns: 'return',
		},
		preferType: {
			array: 'Array',
			bool: 'boolean',
			Boolean: 'boolean',
			float: 'number',
			Float: 'number',
			int: 'number',
			integer: 'number',
			Integer: 'number',
			Number: 'number',
			object: 'Object',
			String: 'string',
			Void: 'void',
		},
		requireParamDescription: false,
		requireReturn: false,
	} ],
	// Ensures that parameter names in JSDoc match those in the function declaration.
	'jsdoc/check-param-names': 'warn',
	// Reports invalid block tag names.
	'jsdoc/check-tag-names': 'warn',
	// Reports invalid types.
	'jsdoc/check-types': 'warn',
	// Enforces a consistent padding of the block description.
	'jsdoc/newline-after-description': 'warn',
	// Requires that block description and tag description are written in complete sentences.
	'jsdoc/require-description-complete-sentence': 'warn',
	// Requires that all functions have examples.
	'jsdoc/require-example': 'off',
	// Requires a hyphen before the @param description.
	'jsdoc/require-hyphen-before-param-description': 'off',
	// Requires that all function parameters are documented.
	'jsdoc/require-param': 'off',
	// Requires that @param tag has description value.
	'jsdoc/require-param-description': 'warn',
	// Requires that all function parameters have name.
	'jsdoc/require-param-name': 'warn',
	// Requires that @param tag has type value.
	'jsdoc/require-param-type': 'warn',
	// Requires that @returns tag has description value.
	'jsdoc/require-returns-description': 'warn',
	// Requires that @returns tag has type value.
	'jsdoc/require-returns-type': 'warn',
};
