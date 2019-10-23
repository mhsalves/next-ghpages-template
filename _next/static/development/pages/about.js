(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/about.js"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2FMatheusAlves%2FDocuments%2FWebProjects%2Fmhsalves.github.io%2Fsrc%2Fpages%2Fabout.jsx!./":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2FMatheusAlves%2FDocuments%2FWebProjects%2Fmhsalves.github.io%2Fsrc%2Fpages%2Fabout.jsx ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.jsx */ "./pages/about.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/about.jsx */ "./pages/about.jsx", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.jsx */ "./pages/about.jsx")
          next.router.update("/about", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_ad4f4b19154564cd9ab5 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ad4f4b19154564cd9ab5 */ "dll-reference dll_ad4f4b19154564cd9ab5"))("../node_modules/react/index.js");

/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"next-ghpages-template\",\"version\":\"0.1.0\",\"description\":\"A template for clients should use the Github Pages, React and SSR using NextJS.\",\"main\":\"index.js\",\"scripts\":{\"dev\":\"next src\",\"build\":\"next build src\",\"start\":\"next start src\",\"export\":\"next export -o out/ src\",\"deploy:export\":\"npm run build && npm run export\",\"deploy:setup\":\"touch out/.nojekyll\",\"deploy:commit\":\"git add out/ && git commit -m \\\"deploy: new features\\\"\",\"deploy:stage\":\"git subtree split --prefix out -b deploy/stage\",\"deploy:push\":\"git push origin deploy/stage:gh-pages --force-with-lease\",\"deploy:clean\":\"git branch -D deploy/stage && git reset HEAD~1 --hard\",\"deploy\":\"npm run deploy:export && npm run deploy:setup && npm run deploy:commit && npm run deploy:stage && npm run deploy:push && npm run deploy:clean\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mhsalves/mhsalves.github.io.git\"},\"keywords\":[\"my\",\"website\",\"portifolio\"],\"author\":\"Matheus Alves\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mhsalves/mhsalves.github.io/issues\"},\"homepage\":\"https://github.com/mhsalves/mhsalves.github.io#readme\",\"dependencies\":{\"next\":\"9.1.1\",\"react\":\"16.10.2\",\"react-dom\":\"16.10.2\"}}");

/***/ }),

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "../package.json", 1);
var _jsxFileName = "/Users/MatheusAlves/Documents/WebProjects/mhsalves.github.io/src/pages/about.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/**
 * If you are in dev enviroment, you can remove 
 * ${pJson.name} from anchor below.
 */

function About() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Hello World ! (About)"), __jsx("a", {
    href: "".concat(_package_json__WEBPACK_IMPORTED_MODULE_1__.name, "/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Ir para Home"));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 2:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2FMatheusAlves%2FDocuments%2FWebProjects%2Fmhsalves.github.io%2Fsrc%2Fpages%2Fabout.jsx ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2FMatheusAlves%2FDocuments%2FWebProjects%2Fmhsalves.github.io%2Fsrc%2Fpages%2Fabout.jsx! */"../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2FMatheusAlves%2FDocuments%2FWebProjects%2Fmhsalves.github.io%2Fsrc%2Fpages%2Fabout.jsx!./");


/***/ }),

/***/ "dll-reference dll_ad4f4b19154564cd9ab5":
/*!*******************************************!*\
  !*** external "dll_ad4f4b19154564cd9ab5" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ad4f4b19154564cd9ab5;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map