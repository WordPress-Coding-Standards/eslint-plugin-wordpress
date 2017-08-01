import isPlainObj from 'is-plain-obj';

test( 'jscs', () => {
	const conf = require( '../../lib/configs/jscs' );

	expect(isPlainObj( conf )).toBe(true);
	expect(isPlainObj( conf.env )).toBe(true);
	expect(isPlainObj( conf.rules )).toBe(true);
});
