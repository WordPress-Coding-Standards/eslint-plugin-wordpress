// Imported and merged WordPress and jQuery JSCS presets using https://github.com/brenolf/polyjuice

module.exports = {
	// Enforce spacing inside array brackets
	'array-bracket-spacing': [2, "always"],
	// Enforce one true brace style
	'brace-style': 2,
	// Require camel case names
	'camelcase': [2, {properties: "always"}],
	// Disallow or enforce trailing commas
	'comma-dangle': [2, "never"],
	// Enforce spacing before and after comma
	'comma-spacing': 2,
	// Enforce one true comma style
	'comma-style': [2, "last"],
	// Specify curly brace conventions for all control statements
	'curly': [2, "all"],
	// Encourages use of dot notation whenever possible
	'dot-notation': [2, {allowKeywords: true, allowPattern: "^[a-z]+(_[a-z]+)+$"}],
	// Enforce newline at the end of file, with no multiple empty lines
	'eol-last': 2,
	// Enforces spacing between keys and values in object literal properties
	'key-spacing': [2, {beforeColon: false, afterColon: true}],
	// Enforce spacing before and after keywords
	'keyword-spacing': 2,
	// Disallow mixed "LF" and "CRLF" as linebreaks
	'linebreak-style': [2, "unix"],
	// Enforces empty lines around comments
	'lines-around-comment': [2, {beforeLineComment: true}],
	// Disallow mixed spaces and tabs for indentation
	'no-mixed-spaces-and-tabs': 2,
	// Disallow use of multiline strings
	'no-multi-str': 2,
	// Disallow multiple empty lines
	'no-multiple-empty-lines': 2,
	// Disallow space between function identifier and application
	'no-spaced-func': 2,
	// Disallow trailing whitespace at the end of lines
	'no-trailing-spaces': 2,
	// Disallow use of the with statement
	'no-with': 2,
	// Require or disallow an newline around variable declarations
	'one-var-declaration-per-line': [2, "initializations"],
	// Enforce operators to be placed before or after line breaks
	'operator-linebreak': [2, "after"],
	// Specify whether backticks, double or single quotes should be used
	'quotes': [2, "single"],
	// Require or disallow use of semicolons instead of ASI
	'semi': [2, "always"],
	// Require or disallow space before blocks
	'space-before-blocks': [2, "always"],
	// Require or disallow space before function opening parenthesis
	'space-before-function-paren': [2, "never"],
	// Require or disallow space before blocks
	'space-in-parens': [2, "always", {exceptions: ["{}", "[]"]}],
	// Require spaces around operators
	'space-infix-ops': 2,
	// Require or disallow spaces before/after unary operators (words on by default, nonwords)
	'space-unary-ops': [2, {overrides: {"!": true}}],
	// Requires to declare all vars on top of their containing scope
	'vars-on-top': 2,
	// Require immediate function invocation to be wrapped in parentheses
	'wrap-iife': 2,
	// Require or disallow Yoda conditions
	'yoda': [2, "always"]
};
