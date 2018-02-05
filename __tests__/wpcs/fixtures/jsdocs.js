/* eslint-disable no-unused-vars */

/**
 * JSDoc test @return the sum of foo and bar.
 *
 * @param {number} foo Param desc capital to start, period to end.
 * @param {number} bar Param desc capital to start, period to end.
 *
 * @return {number} Sum of foo and bar, uses invalid @return.
 */
function usesReturn(foo, bar) {
	return foo + bar;
}

/**
 * JSDoc test @returns the sum of foo and bar.
 *
 * @param {number} foo Param desc capital to start, period to end.
 * @param {number} bar Param desc capital to start, period to end.
 *
 * @returns {number} Sum of foo and bar, uses invalid @returns.
 */
function usesReturns( foo, bar ) {
	return foo + bar;
}

/**
 * JSDoc test missing @return the sum of foo and bar.
 *
 * @param {number} foo Param desc capital to start, period to end.
 * @param {number} bar Param desc capital to start, period to end.
 */
function missingReturn(foo, bar) {
	return foo + bar;
}

/**
 * JSDoc test @arg.
 *
 * @arg {number} foo Param desc capital to start, period to end.
 *
 * @return {number} Sum of foo and bar, uses invalid @return.
 */
function usesArg(foo) {
	return foo;
}

/**
 * JSDoc test @argument the sum of foo and bar.
 *
 * @argument {number} bar Param desc capital to start, period to end.
 *
 * @return {number} Sum of foo and bar, uses invalid @return.
 */
function usesArgument(bar) {
	return bar;
}

/**
 * JSDoc test @extends the sum of foo and bar.
 *
 * @param {number} foo Param desc capital to start, period to end.
 * @param {number} bar Param desc capital to start, period to end.
 *
 * @return {number} Sum of foo and bar, uses invalid @return.
 */
function usesExtends(foo, bar) {
	return foo + bar;
}

/* eslint-enable no-unused-vars */
