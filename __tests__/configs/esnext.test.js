'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'esnext', () => {
	const conf = require( '../../lib/configs/esnext' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
