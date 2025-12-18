// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return Math.abs(n)}var r=Number.NEGATIVE_INFINITY;function t(n){return n!=n}function u(n,u){return t(n)||t(u)?NaN:n===r||u===r?r:n===u&&0===n?function(n){return 0===n&&1/n===r}(n)?n:u:n<u?n:u}var e=Number.POSITIVE_INFINITY;function a(n,r){return t(n)||t(r)?NaN:n===e||r===e?e:n===r&&0===n?function(n){return 0===n&&1/n===e}(n)?n:r:n>r?n:r}var N=Math.sqrt;function f(r,t){var e,f,o,I;return o=a(e=n(r),f=n(t)),0===(I=u(e,f))?o:o*N(1+function(n){return n*n}(I/o))}export{f as default};
//# sourceMappingURL=mod.js.map
