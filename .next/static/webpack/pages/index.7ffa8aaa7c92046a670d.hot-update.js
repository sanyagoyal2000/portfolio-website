"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useDarkMode.js":
/*!******************************!*\
  !*** ./hooks/useDarkMode.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nfunction useDarkMode() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('false'),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var colorTheme = theme === 'light' ? 'dark' : 'light';\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var root = window.document.documentElement;\n    root.classList.remove(colorTheme);\n    root.classList.add(theme);\n  }, [theme], colorTheme);\n  return [colorTheme, setTheme];\n}\n\n_s(useDarkMode, \"JHGUDYwuiXblR8OKa9/TB0NxfI8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDarkMode);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEYXJrTW9kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxTQUFTRSxXQUFULEdBQXVCO0FBQUE7O0FBQ25CLGtCQUF1QkYsK0NBQVEsQ0FBQyxPQUFELENBQS9CO0FBQUEsTUFBT0csS0FBUDtBQUFBLE1BQWFDLFFBQWI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFFRixLQUFLLEtBQUksT0FBVCxHQUFpQixNQUFqQixHQUF3QixPQUExQztBQUNBRixFQUFBQSxnREFBUyxDQUFDLFlBQUk7QUFDVixRQUFNSyxJQUFJLEdBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsZUFBM0I7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxTQUFMLENBQWVDLE1BQWYsQ0FBc0JOLFVBQXRCO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0ksU0FBTCxDQUFlRSxHQUFmLENBQW1CVCxLQUFuQjtBQUNILEdBSlEsRUFJUCxDQUFDQSxLQUFELENBSk8sRUFJQ0UsVUFKRCxDQUFUO0FBS0EsU0FBTyxDQUFDQSxVQUFELEVBQVlELFFBQVosQ0FBUDtBQUNIOztHQVRRRjs7QUFXVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEYXJrTW9kZS5qcz8xYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiB1c2VEYXJrTW9kZSgpIHtcbiAgICBjb25zdCBbdGhlbWUsc2V0VGhlbWVdPXVzZVN0YXRlKCdmYWxzZScpO1xuICAgIGNvbnN0IGNvbG9yVGhlbWUgPXRoZW1lID09PSdsaWdodCc/J2RhcmsnOidsaWdodCc7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHJvb3Q9d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoY29sb3JUaGVtZSlcbiAgICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH0sW3RoZW1lXSxjb2xvclRoZW1lKTtcbiAgICByZXR1cm4gW2NvbG9yVGhlbWUsc2V0VGhlbWVdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEYXJrTW9kZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGFya01vZGUiLCJ0aGVtZSIsInNldFRoZW1lIiwiY29sb3JUaGVtZSIsInJvb3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useDarkMode.js\n");

/***/ })

});