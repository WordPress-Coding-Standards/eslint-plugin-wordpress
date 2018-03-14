'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'es6', () => {
	const conf = require( '../../lib/configs/es6' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
