require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[6],{

/***/ 2:
/***/ (function(module, exports) {

module.exports = remax;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = react;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var remax_ali__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remax_ali__WEBPACK_IMPORTED_MODULE_3__);




var Plugin = requirePlugin('plugin://myPlugin');
Plugin.api();
var PluginComponent = Object(remax_runtime__WEBPACK_IMPORTED_MODULE_1__["createNativeComponent"])("xx");
var PluginComponent2 = Object(remax_runtime__WEBPACK_IMPORTED_MODULE_1__["createNativeComponent"])("dddd");

var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_ali__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PluginComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PluginComponent2, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/subPackage")));

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = remax/runtime;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = remax/ali;

/***/ })

},[[31,0]]]);