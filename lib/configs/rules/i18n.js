// see https://github.com/chejen/eslint-plugin-i18n and https://github.com/Automattic/eslint-plugin-wpcalypso

module.exports = {
	// Disallow using three dots in translate strings
	'wpcalypso/i18n-ellipsis': 'warn',
	// Disallow variables as translate strings
	'wpcalypso/i18n-no-variables': 'warn',
	// Disallow strings which include only placeholders
	'wpcalypso/i18n-no-placeholders-only': 'warn',
	// Ensure placeholder counts match between singular and plural strings
	'wpcalypso/i18n-mismatched-placeholders': 'warn',
	// Disallow multiple unnamed placeholders
	'wpcalypso/i18n-named-placeholders': 'warn'
};
