// Imported from WordPress .jshintrc using https://github.com/brenolf/polyjuice

module.exports = {
	// Specify curly brace conventions for all control statements
	curly: 'error',
	// Require the use of === and !==
	eqeqeq: 'error',
	// Disallow use of arguments.caller or arguments.callee
	'no-caller': 'error',
	// Disallow assignment in conditional expressions
	'no-cond-assign': ['error', 'except-parens'],
	// Disallow comparisons to null without a type-checking operator
	'no-eq-null': 'error',
	// Disallow irregular whitespace outside of strings and comments
	'no-irregular-whitespace': 'error',
	// Disallow trailing whitespace at the end of lines
	'no-trailing-spaces': 'error',
	// Disallow usage of expressions in statement position
	'no-unused-expressions': 'error',
	// Disallow use of undeclared variables unless mentioned in a /*global */ block
	'no-undef': 'error',
	// Disallow declaration of variables that are not used in the code
	'no-unused-vars': 'error',
	// Enforce variables to be declared either together or separately in functions
	'one-var': ['error', 'always'],
	// Specify whether backticks, double or single quotes should be used
	quotes: ['error', 'single'],
	// Require immediate function invocation to be wrapped in parentheses
	'wrap-iife': ['error', 'any'],
};
