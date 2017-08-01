import isPlainObj from 'is-plain-obj';

test( 'qunit', () => {
	const conf = require( '../../lib/configs/backbone' );

	expect(isPlainObj( conf )).toBe(true);
	expect(isPlainObj( conf.env )).toBe(true);
	expect(isPlainObj( conf.rules )).toBe(true);
});
