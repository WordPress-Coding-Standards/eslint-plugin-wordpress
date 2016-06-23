// see https://github.com/platinumazure/eslint-plugin-qunit

module.exports = {
	// Ensure the correct number of assert arguments is used
	'assert-args': 'warn',
	// Ensure comparison assertions have arguments in the right order
	'literal-compare-order': 'warn',
	// Forbid arrow functions as QUnit test/module callbacks
	'no-arrow-tests': 'warn',
	// Forbid the use of assert.equal
	'no-assert-equal': 'warn',
	// Forbid async calls in loops
	'no-async-in-loops': 'warn',
	// Forbid the use of asyncTest or QUnit.asyncTest
	'no-async-test': 'warn',
	// Forbid commented tests
	'no-commented-tests': 'warn',
	// Forbid the use of global QUnit assertions
	'no-global-assertions': 'warn',
	// Forbid the use of global expect
	'no-global-expect': 'warn',
	// Forbid the use of global module/test/asyncTest
	'no-global-module-test': 'warn',
	// Forbid use of global stop()/start()
	'no-global-stop-start': 'warn',
	// Forbids use of QUnit.init
	'no-init': 'warn',
	// Forbid use of QUnit.jsDump()
	'no-jsdump': 'warn',
	// Forbid the use of negations in assert.ok/notOk
	'no-negated-ok': 'warn',
	// Forbid equality comparisons in assert.ok/assert.notOk
	'no-ok-equality': 'warn',
	// Forbid the use of QUnit.only
	'no-only': 'warn',
	// Forbid the use of QUnit.push
	'no-qunit-push': 'warn',
	// Forbid the use of QUnit.stop
	'no-qunit-stop': 'warn',
	// Forbid overwriting of QUnit logging callbacks
	'no-reassign-log-callbacks': 'warn',
	// Forbids use of QUnit.reset
	'no-reset': 'warn',
	// Forbid setup/teardown module hooks
	'no-setup-teardown': 'warn',
	// Forbids expect argument in QUnit.test
	'no-test-expect-argument': 'warn',
	// Ensure that expect is called
	'require-expect': 'warn',
	// Require that all async calls should be resolved in tests
	'resolve-async': 'warn'
};
