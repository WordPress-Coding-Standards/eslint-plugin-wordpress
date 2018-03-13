// see https://github.com/chejen/eslint-plugin-i18n and https://github.com/Automattic/eslint-plugin-wpcalypso

module.exports = {
	// Disallow Chinese Characters
	'i18n/no-chinese-character': 'off',
	// Disallow Greek Characters
	'i18n/no-greek-character': 'off',
	// Disallow Japanese Characters
	'i18n/no-japanese-character': 'off',
	// Disallow Korean Characters
	'i18n/no-korean-character': 'off',
	// Disallow Thai Characters
	'i18n/no-thai-character': 'off',
	// Disallow using three dots in translate strings
	'wpcalypso/i18n-ellipsis': 'warn',
	// Ensure placeholder counts match between singular and plural strings
	'wpcalypso/i18n-mismatched-placeholders': 'warn',
	// Disallow multiple unnamed placeholders
	'wpcalypso/i18n-named-placeholders': 'warn',
	// Disallow collapsible whitespace in translatable strings
	'wpcalypso/i18n-no-collapsible-whitespace': 'warn',
	// Disallow strings which include only placeholders
	'wpcalypso/i18n-no-placeholders-only': 'warn',
	// Disallow this.translate()
	'wpcalypso/i18n-no-this-translate': 'warn',
	// Disallow variables as translate strings
	'wpcalypso/i18n-no-variables': 'warn',
	// Enforce external, internal dependencies docblocks
	'wpcalypso/import-docblock': 'warn',
	// Disallow combineReducers import from redux
	'wpcalypso/import-no-redux-combine-reducers': 'warn',
	// Ensure JSX className adheres to CSS namespace guidelines
	'wpcalypso/jsx-classname-namespace': 'warn',
	// Enforce recommended Gridicon size attributes
	'wpcalypso/jsx-gridicon-size': 'warn',
	// Disallow using the wildcard '*' in postMessage
	'wpcalypso/post-message-no-wildcard-targets': 'warn',
	// Disallow creation of selectors bound to Redux state
	'wpcalypso/redux-no-bound-selectors': 'warn',
};
