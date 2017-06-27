import test from 'ava';
import isPlainObj from 'is-plain-obj';

test( 'ava', t => {
	const conf = require( '../../lib/configs/ava' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.env ) );
	t.true( isPlainObj( conf.rules ) );
});
