/**
 * @fileoverview Enforce whitespace exceptions for array keys and function arguments
 * @author WordPress Contributors
 * @copyright 2017 WordPress Contributors. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

function getFunctionSpacingExceptionType( node ) {
	switch ( node.type ) {
		case 'ArrowFunctionExpression':
		case 'FunctionExpression':
			return 'function';

		case 'ObjectExpression':
			return 'object';

		case 'ArrayExpression':
			return 'array';
	}
}

function isFunctionSpacingExceptionType( node ) {
	return Boolean( getFunctionSpacingExceptionType( node ) );
}

function getArraySpacingExceptionType( node ) {
	switch ( node.property.type ) {
		case 'TemplateLiteral':
			return 'string';

		case 'Literal':
			return typeof node.property.value;
	}
}

function isArraySpacingExceptionType( node ) {
	return Boolean( getArraySpacingExceptionType( node ) );
}

function hasWhiteSpaceBetween( start, end ) {
	return Math.abs( end - start ) > 1;
}

module.exports = {
	meta: {
		docs: {
			description: 'Enforce whitespace exceptions for array keys and function arguments',
			category: 'Stylistic Issues',
		},
	},
	create( context ) {
		return {
			CallExpression( node ) {
				if ( ! node.arguments.length ) {
					return;
				}

				const first = node.arguments[0];
				const last = node.arguments[ node.arguments.length - 1 ];

				if ( isFunctionSpacingExceptionType( first ) ) {
					if ( hasWhiteSpaceBetween( first.start, node.callee.end ) ) {
						context.report({
							node: first,
							message: 'There should be no whitespace before first function argument of type {{type}}',
							data: {
								type: getFunctionSpacingExceptionType( first ),
							},
						});
					}
				} else {
					if ( ! hasWhiteSpaceBetween( first.start, node.callee.end ) ) {
						context.report({
							node: first,
							message: 'There should be whitespace before first function argument',
						});
					}
				}

				if ( isFunctionSpacingExceptionType( last ) ) {
					if ( hasWhiteSpaceBetween( last.end, node.end ) ) {
						context.report({
							node: last,
							message: 'There should be no whitespace after last function argument of type {{type}}',
							data: {
								type: getFunctionSpacingExceptionType( last ),
							},
						});
					}
				} else {
					if ( ! hasWhiteSpaceBetween( last.end, node.end ) ) {
						context.report({
							node: last,
							message: 'There should be whitespace after last function argument',
						});
					}
				}
			},
			MemberExpression( node ) {
				if ( ! node.computed ) {
					return;
				}

				if ( isArraySpacingExceptionType( node ) ) {
					if ( hasWhiteSpaceBetween( node.object.end, node.property.start ) ) {
						context.report({
							node: node,
							message: 'There should be no whitespace before array {{type}} property',
							data: {
								type: getArraySpacingExceptionType( node ),
							},
						});
					}

					if ( hasWhiteSpaceBetween( node.property.end, node.end ) ) {
						context.report({
							node: node,
							message: 'There should be no whitespace after array {{type}} property',
							data: {
								type: getArraySpacingExceptionType( node ),
							},
						});
					}
				} else {
					if ( ! hasWhiteSpaceBetween( node.object.end, node.property.start ) ) {
						context.report({
							node: node,
							message: 'There should be whitespace before array property',
						});
					}

					if ( ! hasWhiteSpaceBetween( node.property.end, node.end ) ) {
						context.report({
							node: node,
							message: 'There should be whitespace after array property',
						});
					}
				}
			},
		};
	},
};
