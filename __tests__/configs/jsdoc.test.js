'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'jsdoc', () => {
	const conf = require( '../../lib/configs/jsdoc' );

	expect( isPlainObj( conf ) ).toBe( true );
	expect( isPlainObj( conf.rules ) ).toBe( true );
});
