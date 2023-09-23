// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function o(t,e,r){var o=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=r?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var e,n,a;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,a=parseInt(n,10),!isFinite(a)){if(!r(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===t.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=a.toString(e),a||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===u.call(t.specifier)?u.call(n):i.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(t){var e,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((e=t.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(t.precision),t.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,b,"e-0$1"),t.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===s.call(t.specifier)?s.call(n):f.call(n)}function _(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function j(t,e,r){var n=e-t.length;return n<0?t:t=r?t+_(n):_(n)+t}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function T(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function x(t){var e,r,n,i,u,l,f,s,p;if(!O(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,s=0;s<t.length;s++)if(c(n=t[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(i=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(u)?String(n.arg):S(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function V(t){var e,r,n,o;for(r=[],o=0,n=P.exec(t);n;)(e=t.slice(o,P.lastIndex-n[0].length)).length&&r.push(e),r.push(k(n)),o=P.lastIndex,n=P.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function A(t){return"string"==typeof t}function B(t){var e,r,n;if(!A(t))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=V(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return x.apply(null,r)}var F,C=Object.prototype,L=C.toString,G=C.__defineGetter__,I=C.__defineSetter__,N=C.__lookupGetter__,R=C.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(N.call(t,e)||R.call(t,e)?(n=t.__proto__,t.__proto__=C,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(t,e,r.get),u&&I&&I.call(t,e,r.set),t};var $=F;function M(t,e,r){$(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var U=/./;function X(t){return"boolean"==typeof t}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function z(){return W&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(t,e){return null!=t&&D.call(t,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(t){var e,r,n;if(null==t)return q.call(t);r=t[K],e=H(t,K);try{t[K]=void 0}catch(e){return q.call(t)}return n=q.call(t),e?t[K]=r:delete t[K],n}:function(t){return q.call(t)},Y=Boolean,tt=Boolean.prototype.toString,et=z();function rt(t){return"object"==typeof t&&(t instanceof Y||(et?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Q(t)))}function nt(t){return X(t)||rt(t)}function ot(){return new Function("return this;")()}M(nt,"isPrimitive",X),M(nt,"isObject",rt);var it="object"==typeof self?self:null,ut="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null,ct=function(t){if(arguments.length){if(!X(t))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return ot()}if(at)return at;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ct.document&&ct.document.childNodes,ft=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var pt=/^\s*function\s*([^(]*)/i;M(st,"REGEXP",pt);var yt,bt=Z(),dt=Object.prototype.toString,gt="function"==typeof J?J.toStringTag:"",vt=bt&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return dt.call(t);r=t[gt],e=H(t,gt);try{t[gt]=void 0}catch(e){return dt.call(t)}return n=dt.call(t),e?t[gt]=r:delete t[gt],n}:function(t){return dt.call(t)};yt=Array.isArray?Array.isArray:function(t){return"[object Array]"===vt(t)};var ht=yt;function wt(t){return null!==t&&"object"==typeof t}var mt=function(t){if("function"!=typeof t)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ht(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(wt);function _t(t){var e,r,n,o;if(("Object"===(r=Q(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=pt.exec(n.toString()))return e[1]}return wt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}M(wt,"isObjectLikeArray",mt);var jt="function"==typeof U||"object"==typeof ft||"function"==typeof lt?function(t){return _t(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?_t(t).toLowerCase():e};function St(t){return"function"===jt(t)}var Et,Ot=/./,Tt="function"==typeof Object.defineProperty?Object.defineProperty:null,xt=Object.defineProperty,Pt=Object.prototype,kt=Pt.toString,Vt=Pt.__defineGetter__,At=Pt.__defineSetter__,Bt=Pt.__lookupGetter__,Ft=Pt.__lookupSetter__;Et=function(){try{return Tt({},"x",{}),!0}catch(t){return!1}}()?xt:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===kt.call(t))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===kt.call(r))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Bt.call(t,e)||Ft.call(t,e)?(n=t.__proto__,t.__proto__=Pt,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Vt&&Vt.call(t,e,r.get),u&&At&&At.call(t,e,r.set),t};var Ct=Et;function Lt(t,e,r){Ct(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Gt(t){return"boolean"==typeof t}var It=Z();function Nt(){return It&&"symbol"==typeof Symbol.toStringTag}var Rt=Object.prototype.toString,$t="function"==typeof J?J.toStringTag:"",Mt=Nt()?function(t){var e,r,n;if(null==t)return Rt.call(t);r=t[$t],e=H(t,$t);try{t[$t]=void 0}catch(e){return Rt.call(t)}return n=Rt.call(t),e?t[$t]=r:delete t[$t],n}:function(t){return Rt.call(t)},Ut=Boolean.prototype.toString,Xt=Nt();function Zt(t){return"object"==typeof t&&(t instanceof Y||(Xt?function(t){try{return Ut.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Mt(t)))}function Wt(t){return Gt(t)||Zt(t)}function zt(){return new Function("return this;")()}Lt(Wt,"isPrimitive",Gt),Lt(Wt,"isObject",Zt);var qt="object"==typeof self?self:null,Dt="object"==typeof window?window:null,Ht="object"==typeof globalThis?globalThis:null,Jt=function(t){if(arguments.length){if(!Gt(t))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return zt()}if(Ht)return Ht;if(qt)return qt;if(Dt)return Dt;throw new Error("unexpected error. Unable to resolve global object.")}(),Kt=Jt.document&&Jt.document.childNodes,Qt=Int8Array;function Yt(){return/^\s*function\s*([^(]*)/i}var te=/^\s*function\s*([^(]*)/i;function ee(t){return null!==t&&"object"==typeof t}Lt(Yt,"REGEXP",te);var re=function(t){if("function"!=typeof t)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ht(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ee);function ne(t){var e,r,n,o;if(("Object"===(r=Mt(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=te.exec(n.toString()))return e[1]}return ee(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}Lt(ee,"isObjectLikeArray",re);var oe="function"==typeof Ot||"object"==typeof Qt||"function"==typeof Kt?function(t){return ne(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?ne(t).toLowerCase():e};function ie(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&function(t){return"function"===oe(t)}(t.next)}function ue(t){return"number"==typeof t}var ae=Number,ce=ae.prototype.toString,le=z();function fe(t){return"object"==typeof t&&(t instanceof ae||(le?function(t){try{return ce.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Q(t)))}function se(t){return ue(t)||fe(t)}M(se,"isPrimitive",ue),M(se,"isObject",fe);var pe,ye="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null,be=/./,de="function"==typeof Object.defineProperty?Object.defineProperty:null,ge=Object.defineProperty,ve=Object.prototype,he=ve.toString,we=ve.__defineGetter__,me=ve.__defineSetter__,_e=ve.__lookupGetter__,je=ve.__lookupSetter__;pe=function(){try{return de({},"x",{}),!0}catch(t){return!1}}()?ge:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===he.call(t))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===he.call(r))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(_e.call(t,e)||je.call(t,e)?(n=t.__proto__,t.__proto__=ve,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&we&&we.call(t,e,r.get),u&&me&&me.call(t,e,r.set),t};var Se=pe;function Ee(t,e,r){Se(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Oe(t){return"boolean"==typeof t}var Te=Z();function xe(){return Te&&"symbol"==typeof Symbol.toStringTag}var Pe=Object.prototype.toString,ke="function"==typeof J?J.toStringTag:"",Ve=xe()?function(t){var e,r,n;if(null==t)return Pe.call(t);r=t[ke],e=H(t,ke);try{t[ke]=void 0}catch(e){return Pe.call(t)}return n=Pe.call(t),e?t[ke]=r:delete t[ke],n}:function(t){return Pe.call(t)},Ae=Boolean.prototype.toString,Be=xe();function Fe(t){return"object"==typeof t&&(t instanceof Y||(Be?function(t){try{return Ae.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ve(t)))}function Ce(t){return Oe(t)||Fe(t)}function Le(){return new Function("return this;")()}Ee(Ce,"isPrimitive",Oe),Ee(Ce,"isObject",Fe);var Ge="object"==typeof self?self:null,Ie="object"==typeof window?window:null,Ne="object"==typeof globalThis?globalThis:null,Re=function(t){if(arguments.length){if(!Oe(t))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Le()}if(Ne)return Ne;if(Ge)return Ge;if(Ie)return Ie;throw new Error("unexpected error. Unable to resolve global object.")}(),$e=Re.document&&Re.document.childNodes,Me=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;function Ze(t){return null!==t&&"object"==typeof t}Ee(Ue,"REGEXP",Xe);var We=function(t){if("function"!=typeof t)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ht(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Ze);function ze(t){var e,r,n,o;if(("Object"===(r=Ve(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Xe.exec(n.toString()))return e[1]}return Ze(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}Ee(Ze,"isObjectLikeArray",We);var qe="function"==typeof be||"object"==typeof Me||"function"==typeof $e?function(t){return ze(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?ze(t).toLowerCase():e};function De(t){return"function"===qe(t)}var He,Je=Object,Ke=/./,Qe="function"==typeof Object.defineProperty?Object.defineProperty:null,Ye=Object.defineProperty,tr=Object.prototype,er=tr.toString,rr=tr.__defineGetter__,nr=tr.__defineSetter__,or=tr.__lookupGetter__,ir=tr.__lookupSetter__;He=function(){try{return Qe({},"x",{}),!0}catch(t){return!1}}()?Ye:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(or.call(t,e)||ir.call(t,e)?(n=t.__proto__,t.__proto__=tr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&rr&&rr.call(t,e,r.get),u&&nr&&nr.call(t,e,r.set),t};var ur=He;function ar(t,e,r){ur(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function cr(t){return"boolean"==typeof t}var lr=Z();function fr(){return lr&&"symbol"==typeof Symbol.toStringTag}var sr=Object.prototype.toString,pr="function"==typeof J?J.toStringTag:"",yr=fr()?function(t){var e,r,n;if(null==t)return sr.call(t);r=t[pr],e=H(t,pr);try{t[pr]=void 0}catch(e){return sr.call(t)}return n=sr.call(t),e?t[pr]=r:delete t[pr],n}:function(t){return sr.call(t)},br=Boolean.prototype.toString,dr=fr();function gr(t){return"object"==typeof t&&(t instanceof Y||(dr?function(t){try{return br.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===yr(t)))}function vr(t){return cr(t)||gr(t)}function hr(){return new Function("return this;")()}ar(vr,"isPrimitive",cr),ar(vr,"isObject",gr);var wr="object"==typeof self?self:null,mr="object"==typeof window?window:null,_r="object"==typeof globalThis?globalThis:null,jr=function(t){if(arguments.length){if(!cr(t))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return hr()}if(_r)return _r;if(wr)return wr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=jr.document&&jr.document.childNodes,Er=Int8Array;function Or(){return/^\s*function\s*([^(]*)/i}var Tr=/^\s*function\s*([^(]*)/i;function xr(t){return null!==t&&"object"==typeof t}ar(Or,"REGEXP",Tr);var Pr=function(t){if("function"!=typeof t)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!ht(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(xr);function kr(t){var e,r,n,o;if(("Object"===(r=yr(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Tr.exec(n.toString()))return e[1]}return xr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}ar(xr,"isObjectLikeArray",Pr);var Vr,Ar,Br="function"==typeof Ke||"object"==typeof Er||"function"==typeof Sr?function(t){return kr(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?kr(t).toLowerCase():e},Fr=Object.getPrototypeOf;Ar=Object.getPrototypeOf,Vr="function"===Br(Ar)?Fr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===yr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Cr=Vr,Lr=Object.prototype;function Gr(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!ht(t)}(t)&&(e=function(t){return null==t?null:(t=Je(t),Cr(t))}(t),!e||!H(t,"constructor")&&H(e,"constructor")&&De(e.constructor)&&"[object Function]"===Ve(e.constructor)&&H(e,"isPrototypeOf")&&De(e.isPrototypeOf)&&(e===Lr||function(t){var e;for(e in t)if(!H(t,e))return!1;return!0}(t)))}function Ir(t,e){return Gr(e)?(H(e,"invalid")&&(t.invalid=e.invalid),null):new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Nr(t,e,r){var n,o,i,u;if(!ie(t))throw new TypeError(B("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",t));if(!St(e))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,r)))throw i;return M(o={},"next",a),M(o,"return",c),ye&&St(t[ye])&&M(o,ye,l),o;function a(){var r;return u?{done:!0}:(r=t.next()).done?(u=!0,r):{value:ue(r.value)?e(r.value):n.invalid,done:!1}}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return Nr(t[ye](),e,n)}}function Rr(t){return function(t){return t!=t}(t)?NaN:t>0?t:0}return function(t){return Nr(t,Rr)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterRamp=e();
//# sourceMappingURL=browser.js.map
