"use strict";var n=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var q=n(function(y,v){
var t=require('@stdlib/math-base-special-abs/dist'),b=require('@stdlib/math-base-special-min/dist'),x=require('@stdlib/math-base-special-max/dist'),c=require('@stdlib/math-base-special-sqrt/dist'),m=require('@stdlib/math-base-special-abs2/dist');function o(a,r){var i,s,e,u;return i=t(a),s=t(r),e=x(i,s),u=b(i,s),u===0?e:e*c(1+m(u/e))}v.exports=o
});var p=q();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
