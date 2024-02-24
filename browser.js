// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,E=isNaN,S=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,o,a,c,f,l,s,p,g,h,y;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,y=void 0,(y=g-p.length)<0?p:p=h?p+m(y):m(y)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var B=P;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return R&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&X.call(e,r)}var M="function"==typeof Symbol?Symbol:void 0,U="function"==typeof M?M.toStringTag:"",Y=G()?function(e){var r,t,n;if(null==e)return W.call(e);t=e[U],r=Z(e,U);try{e[U]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[U]=t:delete e[U],n}:function(e){return W.call(e)},K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)},H=/./;function z(e){return"boolean"==typeof e}var D=Boolean,q=Boolean.prototype.toString,J=G();function Q(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function ee(e){return z(e)||Q(e)}L(ee,"isPrimitive",z),L(ee,"isObject",Q);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,ie=function(e){if(arguments.length){if(!z(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;function fe(e){return null!==e&&"object"==typeof e}function le(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(ue,"REGEXP",ce),L(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!K(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe));var se="function"==typeof H||"object"==typeof ae||"function"==typeof oe?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function pe(e){return"function"===se(e)}function ge(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&pe(e.next)}function he(e){return Object.keys(Object(e))}var ye,de=void 0!==Object.keys;function be(e){return"[object Arguments]"===Y(e)}ye=function(){return be(arguments)}();var we=ye;function ve(e){return"string"==typeof e}var me=String.prototype.valueOf,je=G();function Ee(e){return"object"==typeof e&&(e instanceof String||(je?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object String]"===Y(e)))}function Se(e){return ve(e)||Ee(e)}function _e(e){return"number"==typeof e}L(Se,"isPrimitive",ve),L(Se,"isObject",Ee);var Oe=Number,Te=Oe.prototype.toString,xe=G();function ke(e){return"object"==typeof e&&(e instanceof Oe||(xe?function(e){try{return Te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function Ie(e){return _e(e)||ke(e)}function Pe(e){return e!=e}function Ae(e){return _e(e)&&Pe(e)}function Ve(e){return ke(e)&&Pe(e.valueOf())}function Fe(e){return Ae(e)||Ve(e)}L(Ie,"isPrimitive",_e),L(Ie,"isObject",ke),L(Fe,"isPrimitive",Ae),L(Fe,"isObject",Ve);var Ne=Number.POSITIVE_INFINITY,Ce=Oe.NEGATIVE_INFINITY,$e=Math.floor;function Be(e){return $e(e)===e}function Le(e){return e<Ne&&e>Ce&&Be(e)}function Re(e){return _e(e)&&Le(e)}function Ge(e){return ke(e)&&Le(e.valueOf())}function We(e){return Re(e)||Ge(e)}L(We,"isPrimitive",Re),L(We,"isObject",Ge);var Xe=Object.prototype.propertyIsEnumerable,Ze=!Xe.call("beep","0");function Me(e,r){var t;return null!=e&&(!(t=Xe.call(e,r))&&Ze&&Se(e)?!Ae(r=+r)&&Re(r)&&r>=0&&r<e.length:t)}var Ue=we?be:function(e){return null!==e&&"object"==typeof e&&!K(e)&&"number"==typeof e.length&&Be(e.length)&&e.length>=0&&e.length<=4294967295&&Z(e,"callee")&&!Me(e,"callee")},Ye=Array.prototype.slice,Ke=Me((function(){}),"prototype"),He=!Me({toString:null},"toString");function ze(e){return _e(e)&&Pe(e)}function De(e){return ke(e)&&Pe(e.valueOf())}function qe(e){return ze(e)||De(e)}L(qe,"isPrimitive",ze),L(qe,"isObject",De);var Je=9007199254740991;function Qe(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&Be(o.length)&&o.length>=0&&o.length<=Je||ve(e)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Re(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(qe(r)){for(;i<n;i++)if(qe(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function er(e){return e.constructor&&e.constructor.prototype===e}var rr,tr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nr="undefined"==typeof window?void 0:window,ir=function(){var e;if("undefined"===se(nr))return!1;for(e in nr)try{-1===Qe(tr,e)&&Z(nr,e)&&null!==nr[e]&&"object"===se(nr[e])&&er(nr[e])}catch(e){return!0}return!1}(),or="undefined"!=typeof window,ar=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];rr=de?function(){return 2!==(he(arguments)||"").length}(1,2)?function(e){return Ue(e)?he(Ye.call(e)):he(e)}:he:function(e){var r,t,n,i,o,a,u;if(i=[],Ue(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!Z(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!fe(e))return i;t=Ke&&n}for(o in e)t&&"prototype"===o||!Z(e,o)||i.push(String(o));if(He)for(r=function(e){if(!1===or&&!ir)return er(e);try{return er(e)}catch(e){return!1}}(e),u=0;u<ar.length;u++)a=ar[u],r&&"constructor"===a||!Z(e,a)||i.push(String(a));return i};var ur=rr,cr="function"==typeof M&&"symbol"==typeof M("foo")&&Z(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null;function fr(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e){var r,t,n,i,o;if("object"!=typeof(o=e)||null===o||K(o))throw new TypeError(fr("0P147",e));function a(e){if(!(this instanceof a))return new a(e);if(!ge(e))throw new TypeError(fr("0P13w",e));return L(this,"_source",e),function(e,r,t){B(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}(this,"_done",!1),this}function u(e){return function(){var r,t,n;if(!(this instanceof a))throw new TypeError(fr("0P10K"));for(r=[this._source],n=0;n<arguments.length;n++)r.push(arguments[n]);return ge(t=e.apply(null,r))?new a(t):t}}for(L(a.prototype,"next",(function(){if(!(this instanceof a))throw new TypeError(fr("0P10K"));return this._done?{done:!0}:this._source.next()})),L(a.prototype,"return",(function(e){if(!(this instanceof a))throw new TypeError(fr("0P10K"));return this._done=!0,arguments.length?{value:e,done:!0}:{done:!0}})),cr&&L(a.prototype,cr,(function(){return this})),r=ur(e),i=0;i<r.length;i++){if(!pe(n=e[t=r[i]]))throw new TypeError(fr("0P148",t,n));L(a.prototype,t,u(n))}return a}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFlow=r();
//# sourceMappingURL=browser.js.map
