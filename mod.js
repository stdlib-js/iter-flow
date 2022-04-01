// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s,l=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},p=n,v=l,g=(s=t()?p:v,s);var h=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=h,m=s;var b=function(r,e,t){m(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})},y=b;var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return w&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,P=j;var _=function(r){return P.call(r)},O=Object.prototype.hasOwnProperty;var S=function(r,e){return null!=r&&O.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",x=S,V=T,k=j;var I=_,A=function(r){var e,t,n;if(null==r)return k.call(r);t=r[V],e=x(r,V);try{r[V]=void 0}catch(e){return k.call(r)}return n=k.call(r),e?r[V]=t:delete r[V],n},F=E()?A:I,M=F;var R=Array.isArray?Array.isArray:function(r){return"[object Array]"===M(r)},$=R;var C=function(r){return"object"==typeof r&&null!==r&&!$(r)},N=/./;var B=function(r){return"boolean"==typeof r},G=Boolean.prototype.toString;var L=F,W=function(r){try{return G.call(r),!0}catch(r){return!1}},X=E();var Z=function(r){return"object"==typeof r&&(r instanceof Boolean||(X?W(r):"[object Boolean]"===L(r)))},Y=B,z=Z;var D=d,H=function(r){return Y(r)||z(r)},U=Z;D(H,"isPrimitive",B),D(H,"isObject",U);var K="object"==typeof self?self:null,q="object"==typeof window?window:null,J=H.isPrimitive,Q=function(){return new Function("return this;")()},rr=K,er=q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!J(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},ir=nr(),or=ir.document&&ir.document.childNodes,ar=Int8Array,ur=N,cr=or,fr=ar;var sr=function(){return"function"==typeof ur||"object"==typeof fr||"function"==typeof cr};var lr=function(){return/^\s*function\s*([^(]*)/i},pr=lr;d(pr,"REGEXP",lr());var vr=pr,gr=R;var hr=function(r){return null!==r&&"object"==typeof r};d(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var dr=hr,mr=dr;var br=F,yr=vr.REGEXP,wr=function(r){return mr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Er=function(r){var e,t,n;if(("Object"===(t=br(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return wr(r)?"Buffer":t},jr=Er;var Pr=Er;var _r=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},Or=function(r){return Pr(r).toLowerCase()},Sr=sr()?Or:_r,Tr=Sr;var xr=function(r){return"function"===Tr(r)},Vr=xr;var kr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Vr(r.next)};var Ir=function(r){return Object.keys(Object(r))},Ar=Ir;var Fr=function(){return function(){return 2!==(Ar(arguments)||"").length}(1,2)},Mr=void 0!==Object.keys,Rr=F;var $r=function(r){return"[object Arguments]"===Rr(r)},Cr=$r;var Nr=function(){return Cr(arguments)}();var Br=function(r){return"string"==typeof r},Gr=String.prototype.valueOf;var Lr=F,Wr=function(r){try{return Gr.call(r),!0}catch(r){return!1}},Xr=E();var Zr=function(r){return"object"==typeof r&&(r instanceof String||(Xr?Wr(r):"[object String]"===Lr(r)))},Yr=Br,zr=Zr;var Dr=d,Hr=function(r){return Yr(r)||zr(r)},Ur=Zr;Dr(Hr,"isPrimitive",Br),Dr(Hr,"isObject",Ur);var Kr=Hr;var qr=function(r){return"number"==typeof r},Jr=Number,Qr=Jr.prototype.toString;var re=F,ee=Jr,te=function(r){try{return Qr.call(r),!0}catch(r){return!1}},ne=E();var ie=function(r){return"object"==typeof r&&(r instanceof ee||(ne?te(r):"[object Number]"===re(r)))},oe=qr,ae=ie;var ue=d,ce=function(r){return oe(r)||ae(r)},fe=ie;ue(ce,"isPrimitive",qr),ue(ce,"isObject",fe);var se=ce;var le=function(r){return r!=r},pe=se.isPrimitive,ve=le;var ge=function(r){return pe(r)&&ve(r)},he=se.isObject,de=le;var me=function(r){return he(r)&&de(r.valueOf())},be=ge,ye=me;var we=d,Ee=function(r){return be(r)||ye(r)},je=me;we(Ee,"isPrimitive",ge),we(Ee,"isObject",je);var Pe=Ee,_e=Number.POSITIVE_INFINITY,Oe=Jr.NEGATIVE_INFINITY,Se=Math.floor;var Te=function(r){return Se(r)===r},xe=_e,Ve=Oe,ke=Te;var Ie=function(r){return r<xe&&r>Ve&&ke(r)},Ae=se.isPrimitive,Fe=Ie;var Me=function(r){return Ae(r)&&Fe(r)},Re=se.isObject,$e=Ie;var Ce=function(r){return Re(r)&&$e(r.valueOf())},Ne=Me,Be=Ce;var Ge=d,Le=function(r){return Ne(r)||Be(r)},We=Ce;Ge(Le,"isPrimitive",Me),Ge(Le,"isObject",We);var Xe,Ze=Le,Ye=Object.prototype.propertyIsEnumerable;Xe=!Ye.call("beep","0");var ze=Kr,De=Pe.isPrimitive,He=Ze.isPrimitive,Ue=Ye,Ke=Xe;var qe=function(r,e){var t;return null!=r&&(!(t=Ue.call(r,e))&&Ke&&ze(r)?!De(e=+e)&&He(e)&&e>=0&&e<r.length:t)},Je=qe,Qe=S,rt=Je,et=R,tt=Te;var nt=Nr?$r:function(r){return null!==r&&"object"==typeof r&&!et(r)&&"number"==typeof r.length&&tt(r.length)&&r.length>=0&&r.length<=4294967295&&Qe(r,"callee")&&!rt(r,"callee")},it=nt,ot=Ir,at=Array.prototype.slice;var ut=function(r){return it(r)?ot(at.call(r)):ot(r)};var ct=Je((function(){}),"prototype"),ft=!Je({toString:null},"toString"),st=Te;var lt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&st(r.length)&&r.length>=0&&r.length<=9007199254740991},pt=Pe,vt=lt,gt=Kr.isPrimitive,ht=Ze.isPrimitive;var dt,mt=function(r){return r.constructor&&r.constructor.prototype===r},bt="undefined"==typeof window?void 0:window,yt=S,wt=function(r,e,t){var n,i;if(!vt(r)&&!gt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ht(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pt(e)){for(;i<n;i++)if(pt(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},Et=Sr,jt=mt,Pt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t=bt;dt=function(){var r;if("undefined"===Et(_t))return!1;for(r in _t)try{-1===wt(Pt,r)&&yt(_t,r)&&null!==_t[r]&&"object"===Et(_t[r])&&jt(_t[r])}catch(r){return!0}return!1}();var Ot="undefined"!=typeof window,St=dt,Tt=mt,xt=Ot;var Vt=dr,kt=S,It=nt,At=ct,Ft=ft,Mt=function(r){if(!1===xt&&!St)return Tt(r);try{return Tt(r)}catch(r){return!1}},Rt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var $t=Ir,Ct=ut,Nt=function(r){var e,t,n,i,o,a,u;if(i=[],It(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!kt(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof r)&&!Vt(r))return i;t=At&&n}for(o in r)t&&"prototype"===o||!kt(r,o)||i.push(String(o));if(Ft)for(e=Mt(r),u=0;u<Rt.length;u++)a=Rt[u],e&&"constructor"===a||!kt(r,a)||i.push(String(a));return i},Bt=Mr?Fr()?Ct:$t:Nt,Gt=S;var Lt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Gt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Wt=lt,Xt=Ze.isPrimitive,Zt=Kr.isPrimitive,Yt=Pe.isPrimitive;var zt=function(r,e,t){var n,i,o;if(!Wt(r)&&!Zt(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Xt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Zt(r)){if(!Zt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Yt(e)){for(o=i;o<n;o++)if(Yt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Dt=Kr.isPrimitive;var Ht=function(r){if(!Dt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ut=Kr.isPrimitive;var Kt=function(r){if(!Ut(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},qt=Ht,Jt=Kt,Qt=Kr.isPrimitive;var rn=function(r){return Qt(r)&&r===Jt(r)&&r!==qt(r)},en=_e,tn=Oe;var nn=function(r){return r==r&&r>tn&&r<en},on=Ze.isPrimitive;var an=function(r){return on(r)&&r>=0},un=Ze.isObject;var cn=function(r){return un(r)&&r.valueOf()>=0},fn=an,sn=cn;var ln=d,pn=function(r){return fn(r)||sn(r)},vn=cn;ln(pn,"isPrimitive",an),ln(pn,"isObject",vn);var gn=pn.isPrimitive,hn=Kr.isPrimitive;var dn=function(r,e){var t,n;if(!hn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!gn(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},mn=Ze.isPrimitive,bn=Kr.isPrimitive;var yn=dn,wn=function(r,e,t){var n,i;if(!bn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!bn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!mn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var En=function(r,e,t){var n=!1,i=e-r.length;return i<0||(wn(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+yn("0",i):yn("0",i)+r,n&&(r="-"+r)),r},jn=rn,Pn=Kt,_n=Ht,On=nn,Sn=se.isPrimitive,Tn=En;var xn=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!On(n)){if(!Sn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Tn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Tn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=jn(r.specifier)?Pn(t):_n(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Vn=Kr.isPrimitive,kn=/[-\/\\^$*+?.()|[\]{}]/g;var In=function(r){var e,t;if(!Vn(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(kn,"\\$&"):(e=(e=r.substring(1,t)).replace(kn,"\\$&"),r=r[0]+e+r.substring(t))},An=RegExp.prototype.exec;var Fn=F,Mn=function(r){try{return An.call(r),!0}catch(r){return!1}},Rn=E();var $n=In,Cn=xr,Nn=Kr.isPrimitive,Bn=function(r){return"object"==typeof r&&(r instanceof RegExp||(Rn?Mn(r):"[object RegExp]"===Fn(r)))};var Gn=rn,Ln=Kt,Wn=Ht,Xn=function(r,e,t){if(!Nn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Nn(e))e=$n(e),e=new RegExp(e,"g");else if(!Bn(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Nn(t)&&!Cn(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Zn=nn,Yn=se.isPrimitive,zn=function(r){return Math.abs(r)},Dn=/e\+(\d)$/,Hn=/e-(\d)$/,Un=/^(\d+)$/,Kn=/^(\d+)e/,qn=/\.0$/,Jn=/\.0*e/,Qn=/(\..*[^0])0*e/;var ri=function(r){var e,t,n=parseFloat(r.arg);if(!Zn(n)){if(!Yn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":zn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Xn(t,Qn,"$1e"),t=Xn(t,Jn,"e"),t=Xn(t,qn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Xn(t,Dn,"e+0$1"),t=Xn(t,Hn,"e-0$1"),r.alternate&&(t=Xn(t,Un,"$1."),t=Xn(t,Kn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Gn(r.specifier)?Ln(t):Wn(t)},ei=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var ti=dn;var ni=Kr.isPrimitive,ii=zt,oi=le,ai=xn,ui=ri,ci=function(r){var e,t,n,i,o;for(e=0,n=[],o=ei.exec(r);o;)(t=r.slice(e,ei.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=ei.lastIndex,o=ei.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},fi=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ti(" ",n):ti(" ",n)+r},si=En,li=String.fromCharCode;var pi=d,vi=y,gi=C,hi=xr,di=kr,mi=Bt,bi=Lt,yi=function(r){var e,t,n,i,o,a,u,c,f;if(!ni(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=ci(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],ni(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!ii(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,oi(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,oi(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=ai(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!oi(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=oi(o)?String(n.arg):li(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ui(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=si(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=fi(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var wi=function(r){var e,t,n,i;if(!gi(r))throw new TypeError(yi("invalid argument. Must provide an object. Value: `%s`.",r));function o(r){if(!(this instanceof o))return new o(r);if(!di(r))throw new TypeError(yi("invalid argument. Must provide an iterator. Value: `%s`.",r));return pi(this,"_source",r),vi(this,"_done",!1),this}function a(r){return function(){var e,t,n;if(!(this instanceof o))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");for(e=[this._source],n=0;n<arguments.length;n++)e.push(arguments[n]);if(t=r.apply(null,e),di(t))return new o(t);return t}}for(pi(o.prototype,"next",(function(){if(!(this instanceof o))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done?{done:!0}:this._source.next()})),pi(o.prototype,"return",(function(r){if(!(this instanceof o))throw new TypeError("invalid invocation. `this` is not a fluent interface iterator.");return this._done=!0,arguments.length?{value:r,done:!0}:{done:!0}})),bi&&pi(o.prototype,bi,(function(){return this})),e=mi(r),i=0;i<e.length;i++){if(n=r[t=e[i]],!hi(n))throw new TypeError(yi("invalid argument. Object property values must be functions. Key: `%s`. Value: `%s`.",t,n));pi(o.prototype,t,a(n))}return o},Ei=wi;export{Ei as default};
//# sourceMappingURL=mod.js.map
