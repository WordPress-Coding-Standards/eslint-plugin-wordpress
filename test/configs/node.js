import test from 'ava';
import isPlainObj from 'is-plain-obj';

test( 'node', t => {
	const conf = require( '../../lib/configs/node' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.env ) );
	t.true( isPlainObj( conf.rules ) );
});
