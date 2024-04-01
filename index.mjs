// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function p(p){var h,m,f,l;if(!r(p))throw new TypeError(d("0P147",p));function u(r){if(!(this instanceof u))return new u(r);if(!s(r))throw new TypeError(d("0P13w",r));return t(this,"_source",r),e(this,"_done",!1),this}function j(t){return function(){var e,r,n;if(!(this instanceof u))throw new TypeError(d("0P10K"));for(e=[this._source],n=0;n<arguments.length;n++)e.push(arguments[n]);if(r=t.apply(null,e),s(r))return new u(r);return r}}for(t(u.prototype,"next",(function(){if(!(this instanceof u))throw new TypeError(d("0P10K"));return this._done?{done:!0}:this._source.next()})),t(u.prototype,"return",(function(t){if(!(this instanceof u))throw new TypeError(d("0P10K"));return this._done=!0,arguments.length?{value:t,done:!0}:{done:!0}})),o&&t(u.prototype,o,(function(){return this})),h=i(p),l=0;l<h.length;l++){if(f=p[m=h[l]],!n(f))throw new TypeError(d("0P148",m,f));t(u.prototype,m,j(f))}return u}export{p as default};
//# sourceMappingURL=index.mjs.map
