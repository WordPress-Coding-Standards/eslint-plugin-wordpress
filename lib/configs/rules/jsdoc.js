// see https://github.com/gajus/eslint-plugin-jsdoc

module.exports = {
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
	// Requires a hyphen before the @param description.
	'jsdoc/require-hyphen-before-param-description': 'warn',
	// Requires that all function parameters are documented.
	'jsdoc/require-param': 'warn',
	// Requires that @param tag has description value.
	'jsdoc/require-param-description': 'warn',
	// Requires that @param tag has type value.
	'jsdoc/require-param-type': 'warn',
	// Requires that @returns tag has description value.
	'jsdoc/require-returns-description': 'warn',
	// Requires that @returns tag has type value.
	'jsdoc/require-returns-type': 'warn'
};
