"use strict";var g=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}}};var w=g(function(j,y){"use strict";var o=require("@stdlib/utils-define-nonenumerable-read-only-property"),m=require("@stdlib/utils-define-nonenumerable-property"),q=require("@stdlib/assert-is-object"),b=require("@stdlib/assert-is-function"),h=require("@stdlib/assert-is-iterator-like"),E=require("@stdlib/utils-keys"),p=require("@stdlib/symbol-iterator"),l=require("@stdlib/string-format");function T(n){var e,i,a,u;if(!q(n))throw new TypeError(l("invalid argument. Must provide an object. Value: `%s`.",n));function r(t){if(!(this instanceof r))return new r(t);if(!h(t))throw new TypeError(l("invalid argument. Must provide an iterator. Value: `%s`.",t));return o(this,"_source",t),m(this,"_done",!1),this}o(r.prototype,"next",function(){if(!(this instanceof r))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done?{done:!0}:this._source.next()}),o(r.prototype,"return",function(c){if(!(this instanceof r))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done=!0,arguments.length?{value:c,done:!0}:{done:!0}}),p&&o(r.prototype,p,function(){return this});function d(t){return c;function c(){var v,s,f;if(!(this instanceof r))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");for(v=[this._source],f=0;f<arguments.length;f++)v.push(arguments[f]);return s=t.apply(null,v),h(s)?new r(s):s}}for(e=E(n),u=0;u<e.length;u++){if(i=e[u],a=n[i],!b(a))throw new TypeError(l("invalid argument. Object property values must be functions. Key: `%s`. Value: `%s`.",i,a));o(r.prototype,i,d(a))}return r}y.exports=T});var _=w();module.exports=_;
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
//# sourceMappingURL=index.js.map
