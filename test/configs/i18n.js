import test from "ava";
import isPlainObj from 'is-plain-obj';

test('i18n', t => {
	const conf = require('../../lib/configs/i18n');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
