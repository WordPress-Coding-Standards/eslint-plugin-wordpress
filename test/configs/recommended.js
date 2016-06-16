import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('recommended', t => {
	const conf = require('../../lib/configs/recommended');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
