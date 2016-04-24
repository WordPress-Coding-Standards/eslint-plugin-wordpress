import test from "ava";
import isPlainObj from 'is-plain-obj';

test('a11y', t => {
	const conf = require('../../lib/configs/a11y');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
