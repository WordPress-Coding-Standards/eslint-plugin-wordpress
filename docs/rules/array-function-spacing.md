# Enforce whitespace exceptions for array keys and function arguments

For consistency with PHP standards, do not include a space around string literals or integers used as key values in array notation.

Functions with a callback, object, or array as first or last argument should omit space respectively before or after the argument.

## Rule Details

The following patterns are considered warnings:

```js
foo( function() {} );
foo( function() {});
foo(function() {} );
foo( () => {} );
foo( () => {});
foo(() => {} );
foo( {} );
foo( {});
foo({} );
foo( [] );
foo( []);
foo([] );
foo(1);
foo( 1);
foo(1 );
foo[ 1 ];
foo[ 1];
foo[1 ];
foo[ 'bar' ];
foo[ 'bar'];
foo['bar' ];
foo[ `bar` ];
foo[ `bar`];
foo[`bar` ];
foo[key];
foo[ key];
foo[key ];
```

The following patterns are not warnings:

```js
( function( wp ) {
	wp.foo = foo( 'bar', {});
} )( window.wp = window.wp || {} );
foo(function() {});
foo(function() {}, 1 );
foo( 1, function() {});
foo(() => {});
foo(() => {}, 1 );
foo( 1, () => {});
foo({});
foo({}, 1 );
foo( 1, {});
foo([]);
foo([], 1 );
foo( 1, []);
foo( 1 );
foo[1];
foo['bar'];
foo[`bar`];
foo[ key ];
```

## Related Resources

https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#arrays-and-function-calls
