"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=n(function(y,v){
var t=require('@stdlib/math-base-special-abs/dist'),b=require('@stdlib/math-base-special-min/dist'),x=require('@stdlib/math-base-special-max/dist'),c=require('@stdlib/math-base-special-sqrt/dist'),m=require('@stdlib/math-base-special-abs2/dist');function o(i,r){var e,s,a,u;return e=t(i),s=t(r),a=x(e,s),u=b(e,s),u===0?a:a*c(1+m(u/a))}v.exports=o
});var p=q();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
