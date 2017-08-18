// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
	// enforce return after a callback
	'callback-return': ['warn', ['callback', 'cb', 'next']],
	// disallow require() outside of the top-level module scope
	'global-require': 'off',
	// Enforces error handling in callbacks
	'handle-callback-err': ['warn', '^.*(e|E)rr(or)?$'],
	// Disallow use of the Buffer() constructor
	'no-buffer-constructor': 'off',
	// Disallow mixing regular variable and require declarations
	'no-mixed-requires': 'off',
	// Disallow use of new operator with the require function
	'no-new-require': 'warn',
	// Disallow string concatenation with __dirname and __filename
	'no-path-concat': 'warn',
	// Disallow the use of process.env()
	'no-process-env': 'off',
	// Disallow process.exit()
	'no-process-exit': 'warn',
	// Restrict usage of specified node imports
	'no-restricted-imports': 'off',
	// Restrict usage of specified node modules
	'no-restricted-modules': 'off',
	// Disallow use of synchronous methods
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
