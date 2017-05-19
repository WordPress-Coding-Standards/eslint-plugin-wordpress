/**
 * @fileoverview Enforce whitespace exceptions for array keys and function arguments
 * @author WordPress Contributors
 * @copyright 2017 WordPress Contributors. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require( '../../lib/rules/array-function-spacing' ),
	RuleTester = require( 'eslint' ).RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

( new RuleTester( { env: { es6: true } } ) ).run( 'array-function-spacing', rule, {
	valid: [
		{
			code: '( function( wp ) {\n	wp.foo = foo( \'bar\', {});\n} )( window.wp = window.wp || {} );'
		},
		{
			code: 'foo(function() {});'
		},
		{
			code: 'foo(function() {}, 1 );'
		},
		{
			code: 'foo( 1, function() {});'
		},
		{
			code: 'foo(() => {});'
		},
		{
			code: 'foo(() => {}, 1 );'
		},
		{
			code: 'foo( 1, () => {});'
		},
		{
			code: 'foo({});'
		},
		{
			code: 'foo({}, 1 );'
		},
		{
			code: 'foo( 1, {});'
		},
		{
			code: 'foo([]);'
		},
		{
			code: 'foo([], 1 );'
		},
		{
			code: 'foo( 1, []);'
		},
		{
			code: 'foo( 1 );'
		},
		{
			code: 'foo[1];'
		},
		{
			code: 'foo[\'bar\'];'
		},
		{
			code: 'foo[`bar`];'
		},
		{
			code: 'foo[ key ];'
		}
	],

	invalid: [
		{
			code: 'foo( function() {} );',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type function' },
				{ message: 'There should be no whitespace after last function argument of type function' }
			]
		},
		{
			code: 'foo( function() {});',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type function' }
			]
		},
		{
			code: 'foo(function() {} );',
			errors: [
				{ message: 'There should be no whitespace after last function argument of type function' }
			]
		},
		{
			code: 'foo( () => {} );',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type function' },
				{ message: 'There should be no whitespace after last function argument of type function' }
			]
		},
		{
			code: 'foo( () => {});',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type function' }
			]
		},
		{
			code: 'foo(() => {} );',
			errors: [
				{ message: 'There should be no whitespace after last function argument of type function' }
			]
		},
		{
			code: 'foo( {} );',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type object' },
				{ message: 'There should be no whitespace after last function argument of type object' }
			]
		},
		{
			code: 'foo( {});',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type object' }
			]
		},
		{
			code: 'foo({} );',
			errors: [
				{ message: 'There should be no whitespace after last function argument of type object' }
			]
		},
		{
			code: 'foo( [] );',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type array' },
				{ message: 'There should be no whitespace after last function argument of type array' }
			]
		},
		{
			code: 'foo( []);',
			errors: [
				{ message: 'There should be no whitespace before first function argument of type array' }
			]
		},
		{
			code: 'foo([] );',
			errors: [
				{ message: 'There should be no whitespace after last function argument of type array' }
			]
		},
		{
			code: 'foo(1);',
			errors: [
				{ message: 'There should be whitespace before first function argument' },
				{ message: 'There should be whitespace after last function argument' }
			]
		},
		{
			code: 'foo( 1);',
			errors: [
				{ message: 'There should be whitespace after last function argument' }
			]
		},
		{
			code: 'foo(1 );',
			errors: [
				{ message: 'There should be whitespace before first function argument' }
			]
		},
		{
			code: 'foo[ 1 ];',
			errors: [
				{ message: 'There should be no whitespace before array number property' },
				{ message: 'There should be no whitespace after array number property' }
			]
		},
		{
			code: 'foo[ 1];',
			errors: [
				{ message: 'There should be no whitespace before array number property' }
			]
		},
		{
			code: 'foo[1 ];',
			errors: [
				{ message: 'There should be no whitespace after array number property' }
			]
		},
		{
			code: 'foo[ \'bar\' ];',
			errors: [
				{ message: 'There should be no whitespace before array string property' },
				{ message: 'There should be no whitespace after array string property' }
			]
		},
		{
			code: 'foo[ \'bar\'];',
			errors: [
				{ message: 'There should be no whitespace before array string property' }
			]
		},
		{
			code: 'foo[\'bar\' ];',
			errors: [
				{ message: 'There should be no whitespace after array string property' }
			]
		},
		{
			code: 'foo[ `bar` ];',
			errors: [
				{ message: 'There should be no whitespace before array string property' },
				{ message: 'There should be no whitespace after array string property' }
			]
		},
		{
			code: 'foo[ `bar`];',
			errors: [
				{ message: 'There should be no whitespace before array string property' }
			]
		},
		{
			code: 'foo[`bar` ];',
			errors: [
				{ message: 'There should be no whitespace after array string property' }
			]
		},
		{
			code: 'foo[key];',
			errors: [
				{ message: 'There should be whitespace before array property' },
				{ message: 'There should be whitespace after array property' }
			]
		},
		{
			code: 'foo[ key];',
			errors: [
				{ message: 'There should be whitespace after array property' }
			]
		},
		{
			code: 'foo[key ];',
			errors: [
				{ message: 'There should be whitespace before array property' }
			]
		}
	]
} );
