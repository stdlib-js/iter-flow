"use strict";var g=function(n,t){return function(){return t||n((t={exports:{}}).exports,t),t.exports}};var w=g(function(j,y){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/utils-define-nonenumerable-property/dist'),q=require('@stdlib/assert-is-object/dist'),b=require('@stdlib/assert-is-function/dist'),h=require('@stdlib/assert-is-iterator-like/dist'),E=require('@stdlib/utils-keys/dist'),p=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function T(n){var t,o,a,u;if(!q(n))throw new TypeError(l('0P147',n));function r(e){if(!(this instanceof r))return new r(e);if(!h(e))throw new TypeError(l('0P13w',e));return i(this,"_source",e),m(this,"_done",!1),this}i(r.prototype,"next",function(){if(!(this instanceof r))throw new TypeError(format('0P10K'));return this._done?{done:!0}:this._source.next()}),i(r.prototype,"return",function(c){if(!(this instanceof r))throw new TypeError(format('0P10K'));return this._done=!0,arguments.length?{value:c,done:!0}:{done:!0}}),p&&i(r.prototype,p,function(){return this});function d(e){return c;function c(){var v,s,f;if(!(this instanceof r))throw new TypeError(format('0P10K'));for(v=[this._source],f=0;f<arguments.length;f++)v.push(arguments[f]);return s=e.apply(null,v),h(s)?new r(s):s}}for(t=E(n),u=0;u<t.length;u++){if(o=t[u],a=n[o],!b(a))throw new TypeError(l('0P148',o,a));i(r.prototype,o,d(a))}return r}y.exports=T
});var _=w();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
