// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,c=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var l,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((f="value"in n)&&(c.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=l):t[r]=n.value),y="get"in n,p="set"in n,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var l=r;function f(t,r,n){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,n,e;if(null==t)return v.call(t);n=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[j]=n:delete t[j],e}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function h(t){return p(t)||O(t)}function S(){return new Function("return this;")()}f(h,"isPrimitive",p),f(h,"isObject",O);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof A?A:null;var x=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,N=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;f(V,"REGEXP",F);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=g(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=F.exec(e.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}f(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!k(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(C));var L="function"==typeof y||"object"==typeof N||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function M(t){return"function"===L(t)}function I(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&M(t.next)}function R(t){return"number"==typeof t}var U=Number,X=U.prototype.toString;var q=s();function z(t){return"object"==typeof t&&(t instanceof U||(q?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function D(t){return R(t)||z(t)}f(D,"isPrimitive",R),f(D,"isObject",z);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var J,K=Object.getPrototypeOf;J=M(Object.getPrototypeOf)?K:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=J;var W=Object.prototype;function Y(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!k(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&M(r.constructor)&&"[object Function]"===g(r.constructor)&&m(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===W||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Y(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!I(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!M(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return f(o={},"next",c),f(o,"return",a),H&&M(t[H])&&f(o,H,l),o;function c(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:R(n.value)?r(n.value):e.invalid,done:!1}}function a(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return $(t[H](),r,e)}}function tt(t){return function(t){return t!=t}(t)?NaN:t>0?t:0}function rt(t){return $(t,tt)}export{rt as default};
//# sourceMappingURL=mod.js.map
