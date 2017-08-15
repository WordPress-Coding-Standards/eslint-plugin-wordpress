'use strict';

const eslint = require( 'eslint' );
const path = require( 'path' );

const configFile = path.resolve( __dirname, '../../lib/configs/recommended.js' );
const linter = new eslint.CLIEngine({
	configFile,
	ignorePath: './.gitignore',
	useEslintrc: false,
});

describe( 'Recommended config tests', () => {
	let report;

	beforeEach(() => {
		report = linter.executeOnFiles(['__tests__/wpcs/fixtures/*-fixture.js']);
	});

	test( 'should have correct error and warning counts', () => {
		expect( report.results.length ).toBe( 2 );
		expect( report.errored ).toBeFalsy();
		expect( report.errorCount ).toBe( 8 );
		expect( report.warningCount ).toBe( 0 );
		expect( report.fixableErrorCount ).toBe( 6 );
		expect( report.fixableWarningCount ).toBe( 0 );
	});

	test( 'lint results should match snapshot', () => {
		let { results } = report;
		for (let result of results) {
			let relativeFilePath = path.relative( __dirname, result.filePath );
			expect( result ).toMatchSnapshot( relativeFilePath );
		}
	});
});
