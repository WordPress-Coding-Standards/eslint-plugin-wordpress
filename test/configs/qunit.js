import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('qunit', t => {
	const conf = require('../../lib/configs/qunit');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
