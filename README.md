<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterFlow

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a fluent interface for chaining together [iterator][mdn-iterator-protocol] methods.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-flow
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var iterFlow = require( '@stdlib/iter-flow' );
```

#### iterFlow( methods )

Returns a fluent interface [iterator][mdn-iterator-protocol] constructor with a customized `prototype` based on provided `methods`.

```javascript
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});
```

The `methods` argument should be an `object` which maps constructor method names to [iterator][mdn-iterator-protocol] functions. Each [iterator][mdn-iterator-protocol] function should have the following function signature:

```text
function iterFcn( iterator[, ...args] ) {...}
```

where

-   **iterator**: an [iterator][mdn-iterator-protocol]
-   **...args**: additional [iterator][mdn-iterator-protocol] function arguments

When a fluent interface [iterator][mdn-iterator-protocol] method is invoked, the method invokes the corresponding [iterator][mdn-iterator-protocol] function with an [iterator][mdn-iterator-protocol] and provided method arguments.

If an [iterator][mdn-iterator-protocol] function returns an [iterator][mdn-iterator-protocol], the corresponding fluent interface method returns a **new** fluent interface instance; otherwise, the corresponding fluent interface method returns the [iterator][mdn-iterator-protocol] function result.

* * *

##### FluentIterator( iterator )

Returns a new fluent interface [iterator][mdn-iterator-protocol] from a source [`iterator`][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Convert the source iterator to a fluent interface iterator:
var it = new FluentIterator( src );

// Test if at least 3 of the first 5 iterated values are truthy:
var bool = it.head( 5 ).some( 3 );
// returns true
```

##### FluentIterator.prototype.next()

Returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a fluent interface iterator:
var it1 = new FluentIterator( src );

// Invoke the `head` method to return an iterator limited to the first 5 source values:
var it2 = it1.head( 5 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it2.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

##### FluentIterator.prototype.return( \[value] )

Closes a fluent interface [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a fluent interface iterator:
var it1 = new FluentIterator( src );

// Invoke the `head` method to return an iterator limited to the first 5 source values:
var it2 = it1.head( 5 );

// Get the first value:
var v = it2.next().value;
// returns 0

// Get the second value:
v = it2.next().value;
// returns 0

// Get the third value:
v = it2.next().value;
// returns 1

// Close the iterator:
var bool = it2.return().done;
// returns true

// Attempt to get the fourth value:
v = it2.next().value;
// returns undefined
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   The [iterator][mdn-iterator-protocol] function evaluation context is **always** `null`.
-   [Iterator][mdn-iterator-protocol] functions which return [iterators][mdn-iterator-protocol] are **expected** to return [iterator][mdn-iterator-protocol] protocol-compliant objects (i.e., an `object` having a `next` method which returns the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished).
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterHead = require( '@stdlib/iter-head' );
var iterSome = require( '@stdlib/iter-some' );
var iterFlow = require( '@stdlib/iter-flow' );

// Create a "fluent" interface:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
var it = new FluentIterator( arr );

var bool = it.head( 5 ).some( 3 );
// returns true

// Create another source iterator:
arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
it = new FluentIterator( arr );

bool = it.head( 5 ).some( 3 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-pipeline`][@stdlib/iter/pipeline]</span><span class="delimiter">: </span><span class="description">create an iterator pipeline.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-flow.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-flow

[test-image]: https://github.com/stdlib-js/iter-flow/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/iter-flow/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-flow/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-flow?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-flow.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-flow/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-flow/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-flow/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-flow/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-flow/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-flow/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-flow/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-flow/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-flow/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/pipeline]: https://github.com/stdlib-js/iter-pipeline

<!-- </related-links> -->

</section>

<!-- /.links -->
