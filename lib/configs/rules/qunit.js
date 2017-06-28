// see https://github.com/platinumazure/eslint-plugin-qunit

module.exports = {
	// Ensure the correct number of assert arguments is used
	'qunit/assert-args': 'warn',
	// Ensure comparison assertions have arguments in the right order
	'qunit/literal-compare-order': 'warn',
	// Forbid arrow functions as QUnit test/module callbacks
	'qunit/no-arrow-tests': 'warn',
	// Forbid the use of assert.equal
	'qunit/no-assert-equal': 'warn',
	// Forbid binary logical expressions in assert arguments
	'qunit/no-assert-logical-expression': 'warn',
	// Forbid async calls in loops
	'qunit/no-async-in-loops': 'warn',
	// Forbid the use of asyncTest or QUnit.asyncTest
	'qunit/no-async-test': 'warn',
	// Forbid commented tests
	'qunit/no-commented-tests': 'warn',
	// Forbid comparing relational expression to boolean in assertions
	'qunit/no-compare-relation-boolean': 'warn',
	// Forbid assertions within if statements or conditional expressions
	'qunit/no-conditional-assertions': 'warn',
	// Prevent early return in a QUnit test
	'qunit/no-early-return': 'warn',
	// Forbid the use of global QUnit assertions
	'qunit/no-global-assertions': 'warn',
	// Forbid the use of global expect
	'qunit/no-global-expect': 'warn',
	// Forbid the use of global module/test/asyncTest
	'qunit/no-global-module-test': 'warn',
	// Forbid use of global stop()/start()
	'qunit/no-global-stop-start': 'warn',
	// Forbid identical test and module names
	'qunit/no-identical-names': 'warn',
	// Forbids use of QUnit.init
	'qunit/no-init': 'warn',
	// Forbid use of QUnit.jsDump()
	'qunit/no-jsdump': 'warn',
	// Forbid the use of negations in assert.ok/notOk
	'qunit/no-negated-ok': 'warn',
	// Forbid equality comparisons in assert.ok/assert.notOk
	'qunit/no-ok-equality': 'warn',
	// Forbid the use of QUnit.only
	'qunit/no-only': 'warn',
	// Forbid the use of QUnit.push
	'qunit/no-qunit-push': 'warn',
	// Forbid QUnit.start() within tests or test hooks
	'qunit/no-qunit-start-in-tests': 'warn',
	// Forbid the use of QUnit.stop
	'qunit/no-qunit-stop': 'warn',
	// Forbid overwriting of QUnit logging callbacks
	'qunit/no-reassign-log-callbacks': 'warn',
	// Forbids use of QUnit.reset
	'qunit/no-reset': 'warn',
	// Forbid setup/teardown module hooks
	'qunit/no-setup-teardown': 'warn',
	// Forbids expect argument in QUnit.test
	'qunit/no-test-expect-argument': 'warn',
	// Forbid assert.throws() with block, string, and message
	'qunit/no-throws-string': 'warn',
	// Ensure that expect is called
	'qunit/require-expect': 'warn',
	// Require that all async calls should be resolved in tests
	'qunit/resolve-async': 'warn',
};
