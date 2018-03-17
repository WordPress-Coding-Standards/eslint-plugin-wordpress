'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'recommended', () => {
	const conf = require( '../../lib/configs/recommended' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
