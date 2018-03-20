'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'jscs', () => {
	const conf = require( '../../lib/configs/jscs' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
