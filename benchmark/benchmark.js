/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isFunction = require( '@stdlib/assert-is-function' );
var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var randu = require( '@stdlib/random-iter-randu' );
var iterHead = require( '@stdlib/iter-head' );
var iterSomeBy = require( '@stdlib/iter-some-by' );
var pkg = require( './../package.json' ).name;
var iterFlow = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var fcn;
	var obj;
	var i;

	obj = {
		'head': iterHead,
		'someBy': iterSomeBy
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		fcn = iterFlow( obj );
		if ( typeof fcn !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( fcn ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::constructor,new', function benchmark( b ) {
	var FluentIterator;
	var src;
	var it;
	var i;

	FluentIterator = iterFlow({
		'head': iterHead,
		'someBy': iterSomeBy
	});
	src = randu();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		it = new FluentIterator( src );
		if ( typeof it !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( it ) ) {
		b.fail( 'should return an iterator' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::constructor,no_new', function benchmark( b ) {
	var fluentIterator;
	var src;
	var it;
	var i;

	fluentIterator = iterFlow({
		'head': iterHead,
		'someBy': iterSomeBy
	});
	src = randu();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		it = fluentIterator( src );
		if ( typeof it !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( it ) ) {
		b.fail( 'should return an iterator' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var FluentIterator;
	var src;
	var it;
	var z;
	var i;

	FluentIterator = iterFlow({
		'head': iterHead,
		'someBy': iterSomeBy
	});

	src = randu();
	it = new FluentIterator( src );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = it.next().value;
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::pipeline_throughput', function benchmark( b ) {
	var FluentIterator;
	var bool;
	var src;
	var it;
	var i;

	FluentIterator = iterFlow({
		'head': iterHead,
		'someBy': iterSomeBy
	});

	src = randu(); // infinite iterator which can be reused for each run
	it = new FluentIterator( src );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = it.head( 10 ).someBy( 5, threshold );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function threshold( r ) {
		return ( r > 0.95 );
	}
});
