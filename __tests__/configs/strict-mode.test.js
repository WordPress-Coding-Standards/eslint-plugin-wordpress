'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'strict', () => {
	const conf = require( '../../lib/configs/strict-mode' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
