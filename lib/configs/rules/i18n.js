// see https://github.com/chejen/eslint-plugin-i18n and https://github.com/Automattic/eslint-plugin-wpcalypso

module.exports = {
	// Disallow using three dots in translate strings
	'wpcalypso/i18n-ellipsis': 'warn',
	// Ensure placeholder counts match between singular and plural strings
	'wpcalypso/i18n-mismatched-placeholders': 'warn',
	// Disallow multiple unnamed placeholders
	'wpcalypso/i18n-named-placeholders': 'warn',
	// Disallow collapsible whitespace in translatable strings
	'wpcalypso/i18n-no-collapsible-whitespace': 'warn',
	// Disallow newlines in translatable strings
	'wpcalypso/i18n-no-newlines': 'warn',
	// Disallow strings which include only placeholders
	'wpcalypso/i18n-no-placeholders-only': 'warn',
	// Disallow variables as translate strings
	'wpcalypso/i18n-no-variables': 'warn',
	// Ensure JSX className adheres to CSS namespace guidelines
	'wpcalypso/jsx-classname-namespace': 'warn',
	// Enforce recommended Gridicon size attributes
	'wpcalypso/jsx-gridicon-size': 'warn',
	//  Disallow importing from the root Lodash module
	'wpcalypso/no-lodash-import': 'warn'
};
