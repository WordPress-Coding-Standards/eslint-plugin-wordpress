import isPlainObj from 'is-plain-obj';

test( 'ava', () => {
	const conf = require( '../../lib/configs/ava' );

	expect(isPlainObj( conf )).toBe(true);
	expect(isPlainObj( conf.env )).toBe(true);
	expect(isPlainObj( conf.rules )).toBe(true);
});
