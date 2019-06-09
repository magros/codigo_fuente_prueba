(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Example */ "./assets/js/components/Example.vue");
/* harmony import */ var _components_SaveUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SaveUpload */ "./assets/js/components/SaveUpload.vue");
/* harmony import */ var _components_Files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Files */ "./assets/js/components/Files.vue");
/* harmony import */ var vue_swal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-swal */ "./node_modules/vue-swal/dist/vue-swal.js");
/* harmony import */ var vue_swal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_swal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});






vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('paginate', vuejs_paginate__WEBPACK_IMPORTED_MODULE_5___default.a);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_swal__WEBPACK_IMPORTED_MODULE_4___default.a);
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/**
 * Create a fresh Vue Application instance
 */

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  components: {
    Example: _components_Example__WEBPACK_IMPORTED_MODULE_1__["default"],
    SaveUpload: _components_SaveUpload__WEBPACK_IMPORTED_MODULE_2__["default"],
    Files: _components_Files__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./assets/js/components/Example.vue":
/*!******************************************!*\
  !*** ./assets/js/components/Example.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Example.vue?vue&type=template&id=7de28559&scoped=true& */ "./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true&");
/* harmony import */ var _Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example.vue?vue&type=script&lang=js& */ "./assets/js/components/Example.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7de28559",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Example.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Example.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./assets/js/components/Example.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Example.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Example.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Example.vue?vue&type=template&id=7de28559&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_7de28559_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Files.vue":
/*!****************************************!*\
  !*** ./assets/js/components/Files.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Files.vue?vue&type=template&id=fa5aecb4&scoped=true& */ "./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true&");
/* harmony import */ var _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files.vue?vue&type=script&lang=js& */ "./assets/js/components/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss& */ "./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa5aecb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Files.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Files.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/js/components/Files.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_fa5aecb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=template&id=fa5aecb4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_fa5aecb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/SaveUpload.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/SaveUpload.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveUpload.vue?vue&type=template&id=1f507882&scoped=true& */ "./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true&");
/* harmony import */ var _SaveUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaveUpload.vue?vue&type=script&lang=js& */ "./assets/js/components/SaveUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss& */ "./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SaveUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f507882",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/SaveUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/SaveUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/SaveUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SaveUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-oneOf-1-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_style_index_0_id_1f507882_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SaveUpload.vue?vue&type=template&id=1f507882&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveUpload_vue_vue_type_template_id_1f507882_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Example.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Example.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Example"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Files.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Files",
  data: function data() {
    return {
      files: [],
      saving: false,
      pages: 1,
      page: 1
    };
  },
  methods: {
    search: function search(page) {
      var _this = this;

      this.page = page;
      window.axios.get('/api/files?page=' + this.page).then(function (res) {
        _this.files = res.data.items;
        _this.pages = res.data.pages;
      });
    },
    deleteFile: function deleteFile(file) {
      var _this2 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          window.axios["delete"]('/api/files/' + file.id).then(function (res) {
            _this2.$swal("File deleted!", "Your file has been deleted!", "success");

            _this2.search(_this2.page);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.search(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SaveUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SaveUpload",
  props: ['file'],
  data: function data() {
    return {
      // file: {manufacturer: null, title: null, itemId: null},
      saving: false,
      fileBlob: null
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      if (!this.isFormValid()) {
        this.$swal("Incomplete data!", "All fields are mandatory", "error");
        return;
      }

      if (this.saving) {
        return;
      }

      this.saving = true;
      var formData = new FormData();
      formData.append('file', this.file.file);
      formData.append('title', this.file.title);
      formData.append('manufacturer', this.file.manufacturer);
      formData.append('itemId', this.file.itemId);
      var url = this.file.id ? "/api/files/".concat(this.file.id) : '/api/files';
      window.axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        _this.saving = false;

        _this.$swal("File saved!", "Your file has ben saved!", "success");
      })["catch"](function (error) {
        _this.$swal("An error has ocurred!", error.response.data, "error");

        _this.saving = false;
      });
    },
    attachFile: function attachFile(event) {
      var blob = event.target.files[0];

      if (blob.type !== 'application/pdf') {
        this.$swal("Invalid file!", "Your file must be a pdf!", "error");
        return;
      }

      console.log(blob);
      this.file.file = blob;
      this.fileBlob = blob;
    },
    isFormValid: function isFormValid() {
      var requiredFill = this.file.title && this.file.manufacturer && this.file.itemId;
      return this.file.id ? requiredFill : requiredFill && this.file.file;
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Files.vue?vue&type=style&index=0&id=fa5aecb4&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SaveUpload.vue?vue&type=style&index=0&id=1f507882&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Example.vue?vue&type=template&id=7de28559&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", [_vm._v("\n    This is an example component\n\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Files.vue?vue&type=template&id=fa5aecb4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      !_vm.files.length
        ? _c("div", { staticClass: "text-center pb-4 pt-4" }, [
            _vm._v(
              "\n            You dont have existing records upload one\n        "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.files.length
        ? _c("table", { staticClass: "table table-striped" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.files, function(file) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(file.title))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(file.itemId))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(file.manufacturer))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", {
                      staticClass: "fa fa-download",
                      attrs: {
                        href: "/files/" + file.id + "/pdf",
                        target: "_blank"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "fa fa-close",
                      on: {
                        click: function($event) {
                          return _vm.deleteFile(file)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "fa fa-edit",
                      attrs: { href: "/files/" + file.id + "/edit" }
                    })
                  ])
                ])
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      this.pages > 1
        ? _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("paginate", {
                attrs: {
                  "page-count": _vm.pages,
                  "click-handler": _vm.search,
                  "prev-text": "Prev",
                  "next-text": "Next",
                  "prev-class": "page-item",
                  "prev-link-class": "page-link",
                  "next-class": "page-item",
                  "next-link-class": "page-link",
                  "page-link-class": "page-link",
                  "page-class": "page-item",
                  "container-class": "pagination justify-content-center"
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _vm._v("\n        SDS Binder\n        "),
      _c(
        "a",
        {
          staticClass: "btn btn-info float-right",
          attrs: { href: "/file/create" }
        },
        [
          _c("span", { staticClass: "fa fa-upload text-white" }),
          _vm._v(" Upload SDS")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-active" }, [
        _c("td", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Item # / SDS #")]),
        _vm._v(" "),
        _c("td", [_vm._v("Manufacturer")]),
        _vm._v(" "),
        _c("td", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/SaveUpload.vue?vue&type=template&id=1f507882&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _vm._v(
        "\n        " +
          _vm._s(
            _vm.file.id ? "Editing SDS with ID " + _vm.file.id : "Upload SDS"
          ) +
          "\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          staticClass: "form-inline",
          on: {
            submit: function($event) {
              $event.preventDefault()
            }
          }
        },
        [
          _c("div", { staticClass: "form-group col-sm-12 col-md-6" }, [
            _c("label", { staticClass: "mr-2", attrs: { for: "title" } }, [
              _vm._v("Title")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.file.title,
                  expression: "file.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "title", id: "title", required: "" },
              domProps: { value: _vm.file.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.file, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-sm-12 col-md-6" }, [
            _c(
              "label",
              { staticClass: "mr-2", attrs: { for: "manufacturer" } },
              [_vm._v("Manufacturer")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.file.manufacturer,
                  expression: "file.manufacturer"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "manufacturer",
                id: "manufacturer",
                required: ""
              },
              domProps: { value: _vm.file.manufacturer },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.file, "manufacturer", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-6 file-input" }, [
            _c("label", { attrs: { for: "file" } }, [_vm._v("File")]),
            _vm._v(" "),
            _c("label", { staticClass: "fileContainer" }, [
              _vm.fileBlob
                ? _c("span", { staticClass: "fileName" }, [
                    _vm._v(_vm._s(_vm.fileBlob.name))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "fa fa-upload" }),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control-file",
                attrs: { type: "file", id: "file", required: !_vm.file.id },
                on: {
                  change: function($event) {
                    return _vm.attachFile($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm.file.id
              ? _c("small", [
                  _vm._v("You can upload another file to replace "),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "/files/" + _vm.file.id + "/pdf",
                        target: "_blank"
                      }
                    },
                    [_vm._v("existing one")]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-sm-12 col-md-6" }, [
            _c("label", { staticClass: "mr-2", attrs: { for: "itemId" } }, [
              _vm._v("Item # / MSDS #")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.file.itemId,
                  expression: "file.itemId"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                name: "itemId",
                id: "itemId",
                required: ""
              },
              domProps: { value: _vm.file.itemId },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.file, "itemId", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-12 text-center mt-5",
              on: { click: _vm.save }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-outline-info",
                  attrs: { type: "submit", disabled: _vm.saving }
                },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.saving,
                      expression: "saving"
                    }
                  ],
                  staticClass: "spinner-border text-info",
                  attrs: { role: "status" }
                },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("a", { attrs: { href: "/file" } }, [_vm._v("< Back")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWU/ZTE0OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZT84N2VjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9GaWxlcy52dWU/NzcwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9GaWxlcy52dWU/OTFkMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9GaWxlcy52dWU/MDRmYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TYXZlVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TYXZlVXBsb2FkLnZ1ZT8zZjJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NhdmVVcGxvYWQudnVlP2ZiM2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2F2ZVVwbG9hZC52dWU/ZmYzNCIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvRXhhbXBsZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2F2ZVVwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRmlsZXMudnVlP2NiMjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2F2ZVVwbG9hZC52dWU/OTVhNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZT84NTY1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZpbGVzLnZ1ZT9jN2U5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NhdmVVcGxvYWQudnVlPzk3MWQiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicG9wb3ZlciIsIlZ1ZSIsImNvbXBvbmVudCIsIlBhZ2luYXRlIiwidXNlIiwiVnVlU3dhbCIsIndpbmRvdyIsImF4aW9zIiwiZWwiLCJjb21wb25lbnRzIiwiRXhhbXBsZSIsIlNhdmVVcGxvYWQiLCJGaWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDhDQUFELENBQVAsQyxDQUVBO0FBQ0E7OztBQUdBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQixDLENBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDLENBRUE7QUFDQTtBQUNBOzs7QUFFQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCRixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkcsT0FBN0I7QUFDSCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLDJDQUFHLENBQUNDLFNBQUosQ0FBYyxVQUFkLEVBQTBCQyxxREFBMUI7QUFFQUYsMkNBQUcsQ0FBQ0csR0FBSixDQUFRQywrQ0FBUjtBQUNBQyxNQUFNLENBQUNDLEtBQVAsR0FBZVgsbUJBQU8sQ0FBQyw0Q0FBRCxDQUF0QjtBQUVBOzs7O0FBR0EsSUFBSUssMkNBQUosQ0FBUTtBQUNKTyxJQUFFLEVBQUUsTUFEQTtBQUVKQyxZQUFVLEVBQUU7QUFBQ0MsV0FBTyxFQUFQQSwyREFBRDtBQUFVQyxjQUFVLEVBQVZBLDhEQUFWO0FBQXNCQyxTQUFLLEVBQUxBLHlEQUFLQTtBQUEzQjtBQUZSLENBQVIsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQ3ZDO0FBQ0w7OztBQUd0RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF1TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUE4ZCxDQUFnQixpZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcvRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFtZSxDQUFnQixzZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2ZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FBO0FBQ0E7QUFEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZDQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQTtBQUlBO0FBSkE7QUFNQSxHQVRBO0FBVUE7QUFDQSxVQURBLGtCQUNBLElBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0EsNERBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQU1BLEtBVEE7QUFVQSxjQVZBLHNCQVVBLElBVkEsRUFVQTtBQUFBOztBQUNBO0FBQ0EsOEJBREE7QUFFQSx3RUFGQTtBQUdBLHVCQUhBO0FBSUEscUJBSkE7QUFLQTtBQUxBLFNBT0EsSUFQQSxDQU9BO0FBQ0E7QUFDQSwrREFDQTtBQUNBOztBQUNBO0FBQ0EsV0FKQTtBQU1BO0FBQ0EsT0FoQkE7QUFtQkE7QUE5QkEsR0FWQTtBQTBDQSxTQTFDQSxxQkEwQ0E7QUFDQTtBQUNBO0FBNUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTtBQUNBLG9CQURBO0FBRUEsaUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVRBO0FBVUE7QUFDQSxRQURBLGtCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQSxTQUlBLElBSkEsQ0FLQTtBQUNBOztBQUNBO0FBQ0EsT0FSQSxXQVNBO0FBQ0E7O0FBQ0E7QUFDQSxPQVpBO0FBYUEsS0FqQ0E7QUFrQ0EsY0FsQ0Esc0JBa0NBLEtBbENBLEVBa0NBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzQ0E7QUE0Q0E7QUFFQTtBQUVBO0FBQ0E7QUFqREE7QUFWQSxHOzs7Ozs7Ozs7OztBQzFEQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0EscUJBQXFCLHVDQUF1QztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQ0FBcUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQyxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFLHlCQUF5Qiw4QkFBOEIsZUFBZSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUF5RDtBQUMvRSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQTtBQUNBLGVBQWUsOEJBQThCLHNCQUFzQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZix5QkFBeUIsK0JBQStCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckUseUJBQXlCLFNBQVMsY0FBYyxFQUFFO0FBQ2xEO0FBQ0EseUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBbUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUErQztBQUNwRSx5QkFBeUIsOEJBQThCLGdCQUFnQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZix5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRCxlQUFlLFNBQVMsZ0JBQWdCLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5cbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIHRoaXMgXCJtb2RpZmllc1wiIHRoZSBqcXVlcnkgbW9kdWxlOiBhZGRpbmcgYmVoYXZpb3IgdG8gaXRcbi8vIHRoZSBib290c3RyYXAgbW9kdWxlIGRvZXNuJ3QgZXhwb3J0L3JldHVybiBhbnl0aGluZ1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIG9yIHlvdSBjYW4gaW5jbHVkZSBzcGVjaWZpYyBwaWVjZXNcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbn0pO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgRXhhbXBsZSBmcm9tICcuL2NvbXBvbmVudHMvRXhhbXBsZSdcbmltcG9ydCBTYXZlVXBsb2FkIGZyb20gJy4vY29tcG9uZW50cy9TYXZlVXBsb2FkJ1xuaW1wb3J0IEZpbGVzIGZyb20gJy4vY29tcG9uZW50cy9GaWxlcydcbmltcG9ydCBWdWVTd2FsIGZyb20gJ3Z1ZS1zd2FsJ1xuaW1wb3J0IFBhZ2luYXRlIGZyb20gJ3Z1ZWpzLXBhZ2luYXRlJ1xuXG5WdWUuY29tcG9uZW50KCdwYWdpbmF0ZScsIFBhZ2luYXRlKVxuXG5WdWUudXNlKFZ1ZVN3YWwpO1xud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmcmVzaCBWdWUgQXBwbGljYXRpb24gaW5zdGFuY2VcbiAqL1xubmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBjb21wb25lbnRzOiB7RXhhbXBsZSwgU2F2ZVVwbG9hZCwgRmlsZXN9XG59KTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkZTI4NTU5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FeGFtcGxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2RlMjg1NTlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXJjby9Qcm9qZWN0cy9jb2RpZ29fZnVlbnRlX3BydWViYS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2RlMjg1NTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2RlMjg1NTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkZTI4NTU5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdkZTI4NTU5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9FeGFtcGxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhhbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhhbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhhbXBsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2RlMjg1NTkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTVhZWNiNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GaWxlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mYTVhZWNiNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZhNWFlY2I0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvbWFyY28vUHJvamVjdHMvY29kaWdvX2Z1ZW50ZV9wcnVlYmEvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhNWFlY2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhNWFlY2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE1YWVjYjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmE1YWVjYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0ZpbGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmE1YWVjYjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhNWFlY2I0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE1YWVjYjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmNTA3ODgyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TYXZlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TYXZlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmNTA3ODgyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWY1MDc4ODJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXJjby9Qcm9qZWN0cy9jb2RpZ29fZnVlbnRlX3BydWViYS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWY1MDc4ODInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWY1MDc4ODInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmNTA3ODgyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmNTA3ODgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9TYXZlVXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2F2ZVVwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2F2ZVVwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWY1MDc4ODImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWY1MDc4ODImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NhdmVVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmNTA3ODgyJnNjb3BlZD10cnVlJlwiIiwiPHRlbXBsYXRlPlxuICAgIDxwPlxuICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgY29tcG9uZW50XG5cbiAgICA8L3A+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJFeGFtcGxlXCJcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICBTRFMgQmluZGVyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2ZpbGUvY3JlYXRlXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gZmxvYXQtcmlnaHRcIj48c3BhbiBjbGFzcz1cImZhIGZhLXVwbG9hZCB0ZXh0LXdoaXRlXCI+PC9zcGFuPiBVcGxvYWQgU0RTPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWZpbGVzLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1jZW50ZXIgcGItNCBwdC00XCI+XG4gICAgICAgICAgICAgICAgWW91IGRvbnQgaGF2ZSBleGlzdGluZyByZWNvcmRzIHVwbG9hZCBvbmVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiIHYtaWY9XCJmaWxlcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm9kdWN0IE5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+SXRlbSAjIC8gU0RTICM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFudWZhY3R1cmVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPkFjdGlvbnM8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmaWxlLnRpdGxlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmaWxlLml0ZW1JZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZmlsZS5tYW51ZmFjdHVyZXJ9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiYC9maWxlcy8ke2ZpbGUuaWR9L3BkZmBcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1vbjpjbGljaz1cImRlbGV0ZUZpbGUoZmlsZSlcIiBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL2ZpbGVzLycrZmlsZS5pZCsnL2VkaXQnXCIgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwidGhpcy5wYWdlcyA+IDFcIj5cbiAgICAgICAgICAgICAgICA8cGFnaW5hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLWNvdW50PVwicGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsaWNrLWhhbmRsZXI9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnByZXYtdGV4dD1cIidQcmV2J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmV4dC10ZXh0PVwiJ05leHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcmV2LWNsYXNzPVwiJ3BhZ2UtaXRlbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnByZXYtbGluay1jbGFzcz1cIidwYWdlLWxpbmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuZXh0LWNsYXNzPVwiJ3BhZ2UtaXRlbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5leHQtbGluay1jbGFzcz1cIidwYWdlLWxpbmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLWxpbmstY2xhc3M9XCIncGFnZS1saW5rJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS1jbGFzcz1cIidwYWdlLWl0ZW0nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb250YWluZXItY2xhc3M9XCIncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJ1wiPlxuICAgICAgICAgICAgICAgIDwvcGFnaW5hdGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkZpbGVzXCIsXG4gICAgICAgIGRhdGE6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgICAgIHNhdmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFnZXM6IDEsXG4gICAgICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZWFyY2gocGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2FwaS9maWxlcz9wYWdlPScgKyB0aGlzLnBhZ2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZXMgPSByZXMuZGF0YS5wYWdlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlRmlsZShmaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJPbmNlIGRlbGV0ZWQsIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBmaWxlIVwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbGxEZWxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvYXBpL2ZpbGVzLycgKyBmaWxlLmlkKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzd2FsKFwiRmlsZSBkZWxldGVkIVwiLCBcIllvdXIgZmlsZSBoYXMgYmVlbiBkZWxldGVkIVwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goMSk7XG4gICAgICAgIH1cblxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgQGltcG9ydCBcIi4uLy4uL2Nzcy9jb2xvcnNcIjtcblxuICAgIC5jYXJkLWJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5mYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmZhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbigkYmx1ZSwgNTApO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAge3sgZmlsZS5pZCA/IGBFZGl0aW5nIFNEUyB3aXRoIElEICR7ZmlsZS5pZH1gOiBcIlVwbG9hZCBTRFNcIn19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCIgdi1vbjpzdWJtaXQucHJldmVudD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIiBjbGFzcz1cIm1yLTJcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZmlsZS50aXRsZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLXNtLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYW51ZmFjdHVyZXJcIiBjbGFzcz1cIm1yLTJcIj5NYW51ZmFjdHVyZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibWFudWZhY3R1cmVyXCIgaWQ9XCJtYW51ZmFjdHVyZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGUubWFudWZhY3R1cmVyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1tZC02IGZpbGUtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiXCIgZm9yPVwiZmlsZVwiPkZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmaWxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGVOYW1lXCIgdi1pZj1cImZpbGVCbG9iXCIgPnt7ZmlsZUJsb2IubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbC1maWxlXCIgaWQ9XCJmaWxlXCIgOnJlcXVpcmVkPVwiIWZpbGUuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJhdHRhY2hGaWxlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgdi1pZj1cImZpbGUuaWRcIj5Zb3UgY2FuIHVwbG9hZCBhbm90aGVyIGZpbGUgdG8gcmVwbGFjZSA8YSA6aHJlZj1cImAvZmlsZXMvJHtmaWxlLmlkfS9wZGZgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPmV4aXN0aW5nIG9uZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbUlkXCIgY2xhc3M9XCJtci0yXCI+SXRlbSAjIC8gTVNEUyAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiaXRlbUlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaXRlbUlkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCB2LW1vZGVsPVwiZmlsZS5pdGVtSWRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgbXQtNVwiIEBjbGljaz1cInNhdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1vdXRsaW5lLWluZm9cIiA6ZGlzYWJsZWQ9XCJzYXZpbmdcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCIgdi1zaG93PVwic2F2aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2ZpbGVcIj48IEJhY2s8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiU2F2ZVVwbG9hZFwiLFxuICAgICAgICBwcm9wczogWydmaWxlJ10sXG4gICAgICAgIGRhdGE6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gZmlsZToge21hbnVmYWN0dXJlcjogbnVsbCwgdGl0bGU6IG51bGwsIGl0ZW1JZDogbnVsbH0sXG4gICAgICAgICAgICAgICAgc2F2aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWxlQmxvYjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0Zvcm1WYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN3YWwoXCJJbmNvbXBsZXRlIGRhdGEhXCIsIFwiQWxsIGZpZWxkcyBhcmUgbWFuZGF0b3J5XCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2F2aW5nKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuZmlsZS5maWxlKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGhpcy5maWxlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21hbnVmYWN0dXJlcicsIHRoaXMuZmlsZS5tYW51ZmFjdHVyZXIpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaXRlbUlkJywgdGhpcy5maWxlLml0ZW1JZCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5maWxlLmlkID8gYC9hcGkvZmlsZXMvJHt0aGlzLmZpbGUuaWR9YCA6ICcvYXBpL2ZpbGVzJztcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN3YWwoXCJGaWxlIHNhdmVkIVwiLCBcIllvdXIgZmlsZSBoYXMgYmVuIHNhdmVkIVwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzd2FsKFwiQW4gZXJyb3IgaGFzIG9jdXJyZWQhXCIsIGVycm9yLnJlc3BvbnNlLmRhdGEsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0YWNoRmlsZShldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBibG9iID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChibG9iLnR5cGUgIT09ICdhcHBsaWNhdGlvbi9wZGYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN3YWwoXCJJbnZhbGlkIGZpbGUhXCIsIFwiWW91ciBmaWxlIG11c3QgYmUgYSBwZGYhXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvYik7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLmZpbGUgPSBibG9iO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUJsb2IgPSBibG9iO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRm9ybVZhbGlkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWRGaWxsID0gdGhpcy5maWxlLnRpdGxlICYmIHRoaXMuZmlsZS5tYW51ZmFjdHVyZXIgJiYgdGhpcy5maWxlLml0ZW1JZDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUuaWQgPyByZXF1aXJlZEZpbGwgOiByZXF1aXJlZEZpbGwgJiYgdGhpcy5maWxlLmZpbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuXG4gICAgQGltcG9ydCBcIi4uLy4uL2Nzcy9jb2xvcnNcIjtcblxuICAgIC5mb3JtLWdyb3VwLCAuY3VzdG9tLWZpbGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICAuZmlsZS1pbnB1dCB7XG5cbiAgICAgICAgLmZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XG4gICAgICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTk5cHg7XG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBFeGFtcGxlIHN0eWxpc3RpYyBmbG91cmlzaGVzICovXG5cbiAgICAgICAgLmZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwsIGlucHV0e1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbDpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZU5hbWV7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA4NyU7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInBcIiwgW192bS5fdihcIlxcbiAgICBUaGlzIGlzIGFuIGV4YW1wbGUgY29tcG9uZW50XFxuXFxuXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICFfdm0uZmlsZXMubGVuZ3RoXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBwYi00IHB0LTRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgWW91IGRvbnQgaGF2ZSBleGlzdGluZyByZWNvcmRzIHVwbG9hZCBvbmVcXG4gICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZmlsZXMubGVuZ3RoXG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZmlsZS50aXRsZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLml0ZW1JZCkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLm1hbnVmYWN0dXJlcikpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvZmlsZXMvXCIgKyBmaWxlLmlkICsgXCIvcGRmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVGaWxlKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvZmlsZXMvXCIgKyBmaWxlLmlkICsgXCIvZWRpdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIHRoaXMucGFnZXMgPiAxXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicGFnaW5hdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcInBhZ2UtY291bnRcIjogX3ZtLnBhZ2VzLFxuICAgICAgICAgICAgICAgICAgXCJjbGljay1oYW5kbGVyXCI6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBcInByZXYtdGV4dFwiOiBcIlByZXZcIixcbiAgICAgICAgICAgICAgICAgIFwibmV4dC10ZXh0XCI6IFwiTmV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJwcmV2LWNsYXNzXCI6IFwicGFnZS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBcInByZXYtbGluay1jbGFzc1wiOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgXCJuZXh0LWNsYXNzXCI6IFwicGFnZS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBcIm5leHQtbGluay1jbGFzc1wiOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgXCJwYWdlLWxpbmstY2xhc3NcIjogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIFwicGFnZS1jbGFzc1wiOiBcInBhZ2UtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgXCJjb250YWluZXItY2xhc3NcIjogXCJwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFNEUyBCaW5kZXJcXG4gICAgICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mbyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2ZpbGUvY3JlYXRlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXBsb2FkIHRleHQtd2hpdGVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgVXBsb2FkIFNEU1wiKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtYWN0aXZlXCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJQcm9kdWN0IE5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiSXRlbSAjIC8gU0RTICNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiTWFudWZhY3R1cmVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkFjdGlvbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLmZpbGUuaWQgPyBcIkVkaXRpbmcgU0RTIHdpdGggSUQgXCIgKyBfdm0uZmlsZS5pZCA6IFwiVXBsb2FkIFNEU1wiXG4gICAgICAgICAgKSArXG4gICAgICAgICAgXCJcXG4gICAgXCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1pbmxpbmVcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLXNtLTEyIGNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiwgYXR0cnM6IHsgZm9yOiBcInRpdGxlXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlRpdGxlXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJ0aXRsZVwiLCBpZDogXCJ0aXRsZVwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbGUudGl0bGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmlsZSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtc20tMTIgY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiwgYXR0cnM6IHsgZm9yOiBcIm1hbnVmYWN0dXJlclwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk1hbnVmYWN0dXJlclwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS5tYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUubWFudWZhY3R1cmVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwibWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwibWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWxlLm1hbnVmYWN0dXJlciB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWxlLCBcIm1hbnVmYWN0dXJlclwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtbWQtNiBmaWxlLWlucHV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmaWxlXCIgfSB9LCBbX3ZtLl92KFwiRmlsZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlQ29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uZmlsZUJsb2JcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVOYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maWxlQmxvYi5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXBsb2FkXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbC1maWxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIGlkOiBcImZpbGVcIiwgcmVxdWlyZWQ6ICFfdm0uZmlsZS5pZCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmF0dGFjaEZpbGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5maWxlLmlkXG4gICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJZb3UgY2FuIHVwbG9hZCBhbm90aGVyIGZpbGUgdG8gcmVwbGFjZSBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvZmlsZXMvXCIgKyBfdm0uZmlsZS5pZCArIFwiL3BkZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZXhpc3Rpbmcgb25lXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtc20tMTIgY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiLCBhdHRyczogeyBmb3I6IFwiaXRlbUlkXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkl0ZW0gIyAvIE1TRFMgI1wiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUuaXRlbUlkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJpdGVtSWRcIixcbiAgICAgICAgICAgICAgICBpZDogXCJpdGVtSWRcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbGUuaXRlbUlkIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpbGUsIFwiaXRlbUlkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgbXQtNVwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWxnIGJ0bi1vdXRsaW5lLWluZm9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBfdm0uc2F2aW5nIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zYXZpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzYXZpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lci1ib3JkZXIgdGV4dC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInN0YXR1c1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvZmlsZVwiIH0gfSwgW192bS5fdihcIjwgQmFja1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9