import isPlainObj from 'is-plain-obj';

test( 'i18n', () => {
	const conf = require( '../../lib/configs/i18n' );

	expect(isPlainObj( conf )).toBe(true);
	expect(isPlainObj( conf.env )).toBe(true);
	expect(isPlainObj( conf.rules )).toBe(true);
});
