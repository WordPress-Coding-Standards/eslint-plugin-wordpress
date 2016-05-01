import test from 'ava';
import isPlainObj from 'is-plain-obj';

test('jsdoc', t => {
	const conf = require('../../lib/configs/jsdoc');
	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.env));
	t.true(isPlainObj(conf.rules));
});
