// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
	// require `return` statements after callbacks
	'callback-return': ['warn', ['callback', 'cb', 'next']],
	// require `require()` calls to be placed at top-level module scope
	'global-require': 'off',
	// require error handling in callbacks
	'handle-callback-err': ['warn', '^.*(e|E)rr(or)?$'],
	// disallow use of the `Buffer()` constructor
	'no-buffer-constructor': 'off',
	// disallow `require` calls to be mixed with regular variable declarations
	'no-mixed-requires': 'off',
	// disallow `new` operators with calls to `require`
	'no-new-require': 'warn',
	// disallow string concatenation with `__dirname` and `__filename`
	'no-path-concat': 'warn',
	// disallow the use of `process.env`
	'no-process-env': 'off',
	// disallow the use of `process.exit()`
	'no-process-exit': 'warn',
	// disallow specified modules when loaded by `require`
	'no-restricted-modules': 'off',
	// disallow synchronous methods
	'no-sync': 'warn',

	// Enforce either `module.exports` or `exports`.
	'node/exports-style': 'off',
	// Disallow deprecated API
	'node/no-deprecated-api': 'error',
	// Disallow `import` declarations of extraneous packages.
	'node/no-extraneous-import': 'off',
	// Disallow `require()` expressions of extraneous packages.
	'node/no-extraneous-require': 'off',
	// Disallow `import` and export declarations for files that don't exist.
	'node/no-missing-import': 'off',
	// Disallow `require()`s for files that don't exist.
	'node/no-missing-require': 'error',
	// Disallow `bin` files that npm ignores.
	'node/no-unpublished-bin': 'off',
	// Disallow `import` and export declarations for files that are not published.
	'node/no-unpublished-import': 'off',
	// Disallow `require()`s for files that are not published.
	'node/no-unpublished-require': 'error',
	// Disallow unsupported ECMAScript features on the specified version.
	'node/no-unsupported-features': 'error',
	// Make the same code path as throw at `process.exit()`.
	'node/process-exit-as-throw': 'off',
	// Suggest correct usage of shebang.
	'node/shebang': 'error',
};
