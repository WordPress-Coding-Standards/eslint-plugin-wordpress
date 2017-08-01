'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'node', () => {
	const conf = require( '../../lib/configs/node' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
