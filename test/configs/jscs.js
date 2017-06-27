import test from 'ava';
import isPlainObj from 'is-plain-obj';

test( 'jscs', t => {
	const conf = require( '../../lib/configs/jscs' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.env ) );
	t.true( isPlainObj( conf.rules ) );
});
