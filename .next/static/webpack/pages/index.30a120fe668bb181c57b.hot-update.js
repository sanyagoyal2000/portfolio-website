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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sanyagoyal/portfolio-website/components/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      handleShow = _useState[0],\n      setHandleShow = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var listener = function listener() {\n      if (window.scrollY > 80) {\n        setHandleShow(true);\n      } else setHandleShow(false);\n    };\n\n    window.addEventListener(\"scroll\", listener);\n    return function () {\n      window.removeEventListener(\"scroll\", listener);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"header\", {\n    className: \"fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 \".concat(handleShow ? \"bg-gray-800 shadow-md\" : \"\", \" md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 \"),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"relative flex items-center h-10 cursor-pointer my-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        src: \"https://raw.githubusercontent.com/sanyagoyal2000/Pictures/59a379a9cc89f2108bfaa6d5871a881b1dcc6a04/final%20(150%20x%2060%20px)%20(50%20x%2040%20px).svg\",\n        layout: \"fill\",\n        objectFit: \"contain\",\n        objectPosition: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 16\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex items-center justify-end space-x-4 text-gray-800 \",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n        className: \"flex text-white font-bold font-rubik uppercase space-x-6 \",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"mr-2 hover:text-yellow-200 cursor-pointer\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 75\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"mr-2 hover:text-yellow-200\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 60\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"mr-2 hover:text-yellow-200\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: \"Projects\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 60\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"mr-2 hover:text-yellow-200\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: \"Resume\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 60\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          className: \"mr-2 hover:text-yellow-200\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 60\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Header, \"fYjpTwxVR4CVGe+WBWgJyJAyXDQ=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNLLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsa0JBQW9DRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPRyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBSCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3BCLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFyQixFQUF5QjtBQUN2QkgsUUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNDLE9BRkgsTUFHRUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBTEo7O0FBTUdFLElBQUFBLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFFBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLE1BQUFBLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBWkssRUFZSCxFQVpHLENBQVQ7QUFhRSxzQkFFRTtBQUFRLGFBQVMsNkZBQXNGRixVQUFVLEdBQUcsdUJBQUgsR0FBNkIsRUFBN0gsc0ZBQWpCO0FBQUEsNEJBQ0s7QUFBSyxlQUFTLEVBQUMsd0RBQWY7QUFBQSw2QkFDSSw4REFBQyxtREFBRDtBQUFRLFdBQUcsRUFBQyx5SkFBWjtBQUFzSyxjQUFNLEVBQUMsTUFBN0s7QUFBb0wsaUJBQVMsRUFBQyxTQUE5TDtBQUF3TSxzQkFBYyxFQUFDO0FBQXZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREwsZUFLSztBQUFLLGVBQVMsRUFBQyx3REFBZjtBQUFBLDZCQUVHO0FBQUksaUJBQVMsRUFBQywyREFBZDtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQywyQ0FBZDtBQUFBLGlDQUEwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLDRCQUFkO0FBQUEsaUNBQTJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFJLG1CQUFTLEVBQUMsNEJBQWQ7QUFBQSxpQ0FBMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQUksbUJBQVMsRUFBQyw0QkFBZDtBQUFBLGlDQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0U7QUFBSSxtQkFBUyxFQUFDLDRCQUFkO0FBQUEsaUNBQTJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBdUJIOztHQXZDUUQ7O0tBQUFBO0FBeUNULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzZmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7U2VhcmNoSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbaGFuZGxlU2hvdywgc2V0SGFuZGxlU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA4MCkge1xuICAgICAgICAgc2V0SGFuZGxlU2hvdyh0cnVlKTsgXG4gICAgICAgICB9IGVsc2UgXG4gICAgICAgICBzZXRIYW5kbGVTaG93KGZhbHNlKTsgXG4gICAgICAgfTsgXG4gICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xuICAgICAgIFxuICAgICAgIHJldHVybiAoKSA9PiB7IFxuICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpOyBcbiAgICAgICB9OyBcbiAgICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCB6LTQwIGdyaWQgdy1zY3JlZW4gZ3JpZC1jb2xzLTEgIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0IHAtNSAke2hhbmRsZVNob3cgPyBcImJnLWdyYXktODAwIHNoYWRvdy1tZFwiIDogXCJcIn0gbWQ6Z3JpZC1jb2xzLTMgIHotNTAgZ3JpZCBncmlkLWZsb3ctcm93IGdyaWQtY29scy0yIHAtNSBtZDpweC0xMCBzbTpncmlkLWNvbHMtMyBgfT4gXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xMCBjdXJzb3ItcG9pbnRlciBteS1hdXRvXCI+XG4gICAgICAgICAgICAgICA8SW1hZ2UgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYW55YWdveWFsMjAwMC9QaWN0dXJlcy81OWEzNzlhOWNjODlmMjEwOGJmYWE2ZDU4NzFhODgxYjFkY2M2YTA0L2ZpbmFsJTIwKDE1MCUyMHglMjA2MCUyMHB4KSUyMCg1MCUyMHglMjA0MCUyMHB4KS5zdmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIG9iamVjdFBvc2l0aW9uPVwibGVmdFwiLz5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHNwYWNlLXgtNCB0ZXh0LWdyYXktODAwIFwiPlxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggdGV4dC13aGl0ZSBmb250LWJvbGQgZm9udC1ydWJpayB1cHBlcmNhc2Ugc3BhY2UteC02IFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yIGhvdmVyOnRleHQteWVsbG93LTIwMCBjdXJzb3ItcG9pbnRlclwiPjxhPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMiBob3Zlcjp0ZXh0LXllbGxvdy0yMDBcIj48YT5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yIGhvdmVyOnRleHQteWVsbG93LTIwMFwiPjxhPlByb2plY3RzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTIgaG92ZXI6dGV4dC15ZWxsb3ctMjAwXCI+PGE+UmVzdW1lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTIgaG92ZXI6dGV4dC15ZWxsb3ctMjAwXCI+PGE+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICBcbiAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTZWFyY2hJY29uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsImhhbmRsZVNob3ciLCJzZXRIYW5kbGVTaG93IiwibGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});