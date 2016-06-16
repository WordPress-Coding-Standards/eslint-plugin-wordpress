import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('jshint', t => {
	const conf = require('../../lib/configs/jshint');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
