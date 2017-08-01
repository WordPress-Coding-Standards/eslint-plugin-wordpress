'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'backbone', () => {
	const conf = require( '../../lib/configs/backbone' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
