'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'qunit', () => {
	const conf = require( '../../lib/configs/qunit' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.env ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
