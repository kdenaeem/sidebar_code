"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Sidebar.tsx":
/*!***************************************!*\
  !*** ./components/layout/Sidebar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _defaultNavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultNavItems */ \"./components/layout/defaultNavItems.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidebar = (param)=>{\n    let { open , navItems =_defaultNavItems__WEBPACK_IMPORTED_MODULE_4__.defaultNavItems , setOpen  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // useOnClickOutside(ref, (e) => {\n    //   setOpen(false);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n            \"flex flex-col justify-between\": true,\n            \"bg-black text-zinc-50\": true,\n            \"md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed\": true,\n            \"md:h-[calc(100vh_-_64px)] h-full w-[300px]\": true,\n            \"transition-transform .3s ease-in-out md:-translate-x-0\": true,\n            \"-translate-x-full \": !open\n        }),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"md:sticky top-0 md:top-16\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"py-2 flex flex-col gap-2\",\n                children: navItems.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: item.href,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n                                \"text-indigo-100 hover:bg-indigo-900\": true,\n                                \"flex gap-4 items-center \": true,\n                                \"transition-colors duration-300\": true,\n                                \"rounded-md p-2 mx-2\": true\n                            }),\n                            children: [\n                                item.icon,\n                                \" \",\n                                item.label\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/naeemujeeb/Downloads/next-responsive-sidebar-tailwind-main/components/layout/Sidebar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/naeemujeeb/Downloads/next-responsive-sidebar-tailwind-main/components/layout/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naeemujeeb/Downloads/next-responsive-sidebar-tailwind-main/components/layout/Sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/naeemujeeb/Downloads/next-responsive-sidebar-tailwind-main/components/layout/Sidebar.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/naeemujeeb/Downloads/next-responsive-sidebar-tailwind-main/components/layout/Sidebar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0Y7QUFDUDtBQUN1QjtBQWNwRCxNQUFNSyxVQUFVLFNBQTBEO1FBQXpELEVBQUVDLEtBQUksRUFBRUMsVUFBV0gsNkRBQWVBLENBQUEsRUFBRUksUUFBTyxFQUFTOztJQUNuRSxNQUFNQyxNQUFNUiw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUN2QyxrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixxQkFDRSw4REFBQ1M7UUFDQ0MsV0FBV1QsaURBQVVBLENBQUM7WUFDcEIsaUNBQWlDLElBQUk7WUFDckMseUJBQXlCLElBQUk7WUFDN0IseURBQXlELElBQUk7WUFDN0QsOENBQThDLElBQUk7WUFDbEQsMERBQTBELElBQUk7WUFDOUQsc0JBQXNCLENBQUNJO1FBQ3pCO1FBQ0FHLEtBQUtBO2tCQUVMLDRFQUFDRztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDRTtnQkFBR0YsV0FBVTswQkFDWEosU0FBU08sR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7b0JBQzdCLHFCQUNFLDhEQUFDYixrREFBSUE7d0JBQWFjLE1BQU1GLEtBQUtFLElBQUk7a0NBQy9CLDRFQUFDQzs0QkFDQ1AsV0FBV1QsaURBQVVBLENBQUM7Z0NBQ3BCLHVDQUF1QyxJQUFJO2dDQUMzQyw0QkFBNEIsSUFBSTtnQ0FDaEMsa0NBQWtDLElBQUk7Z0NBQ3RDLHVCQUF1QixJQUFJOzRCQUM3Qjs7Z0NBRUNhLEtBQUtJLElBQUk7Z0NBQUM7Z0NBQUVKLEtBQUtLLEtBQUs7Ozs7Ozs7dUJBVGhCSjs7Ozs7Z0JBYWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQXZDTVg7S0FBQUE7QUF3Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhci50c3g/MmQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZGVmYXVsdE5hdkl0ZW1zIH0gZnJvbSBcIi4vZGVmYXVsdE5hdkl0ZW1zXCI7XG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuLy8gZGVmaW5lIGEgTmF2SXRlbSBwcm9wXG5leHBvcnQgdHlwZSBOYXZJdGVtID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb246IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG4vLyBhZGQgTmF2SXRlbSBwcm9wIHRvIGNvbXBvbmVudCBwcm9wXG50eXBlIFByb3BzID0ge1xuICBvcGVuOiBib29sZWFuO1xuICBuYXZJdGVtcz86IE5hdkl0ZW1bXTtcbiAgc2V0T3BlbihvcGVuOiBib29sZWFuKTogdm9pZDtcbn07XG5jb25zdCBTaWRlYmFyID0gKHsgb3BlbiwgbmF2SXRlbXMgPSBkZWZhdWx0TmF2SXRlbXMsIHNldE9wZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgLy8gdXNlT25DbGlja091dHNpZGUocmVmLCAoZSkgPT4ge1xuICAvLyAgIHNldE9wZW4oZmFsc2UpO1xuICAvLyB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI6IHRydWUsIC8vIGxheW91dFxuICAgICAgICBcImJnLWJsYWNrIHRleHQtemluYy01MFwiOiB0cnVlLCAvLyBjb2xvcnNcbiAgICAgICAgXCJtZDp3LWZ1bGwgbWQ6c3RpY2t5IG1kOnRvcC0xNiBtZDp6LTAgdG9wLTAgei0yMCBmaXhlZFwiOiB0cnVlLCAvLyBwb3NpdGlvbmluZ1xuICAgICAgICBcIm1kOmgtW2NhbGMoMTAwdmhfLV82NHB4KV0gaC1mdWxsIHctWzMwMHB4XVwiOiB0cnVlLCAvLyBmb3IgaGVpZ2h0IGFuZCB3aWR0aFxuICAgICAgICBcInRyYW5zaXRpb24tdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCBtZDotdHJhbnNsYXRlLXgtMFwiOiB0cnVlLCAvL2FuaW1hdGlvbnNcbiAgICAgICAgXCItdHJhbnNsYXRlLXgtZnVsbCBcIjogIW9wZW4sIC8vaGlkZSBzaWRlYmFyIHRvIHRoZSBsZWZ0IHdoZW4gY2xvc2VkXG4gICAgICB9KX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWQ6c3RpY2t5IHRvcC0wIG1kOnRvcC0xNlwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHktMiBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBcInRleHQtaW5kaWdvLTEwMCBob3ZlcjpiZy1pbmRpZ28tOTAwXCI6IHRydWUsIC8vY29sb3JzXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIgXCI6IHRydWUsIC8vbGF5b3V0XG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI6IHRydWUsIC8vYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIFwicm91bmRlZC1tZCBwLTIgbXgtMlwiOiB0cnVlLCAvL3NlbGYgc3R5bGVcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259IHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lcyIsIkxpbmsiLCJkZWZhdWx0TmF2SXRlbXMiLCJTaWRlYmFyIiwib3BlbiIsIm5hdkl0ZW1zIiwic2V0T3BlbiIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsImxpIiwiaWNvbiIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.tsx\n"));

/***/ })

});