self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/lead-form.js":
/*!******************************************!*\
  !*** ./components/sections/lead-form.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/button */ "./components/elements/button.js");
/* harmony import */ var utils_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/button */ "./utils/button.js");
/* harmony import */ var _elements_button_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/button-link */ "./components/elements/button-link.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\ThinkDesign\\server-niramaaya-strapi\\frontend\\components\\sections\\lead-form.js",
    _this = undefined,
    _s = $RefreshSig$();









var LeadForm = function LeadForm(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var LeadSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().email().required()
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "py-10 text-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "text-3xl mb-10 font-bold mb-2",
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "flex flex-col items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
        initialValues: {
          email: ""
        },
        validationSchema: LeadSchema,
        onSubmit: /*#__PURE__*/function () {
          var _ref3 = (0,D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, _ref2) {
            var setSubmitting, setErrors;
            return D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    setSubmitting = _ref2.setSubmitting, setErrors = _ref2.setErrors;
                    setLoading(true);
                    _context.prev = 2;
                    setErrors({
                      api: null
                    });
                    _context.next = 6;
                    return (0,utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)("/lead-form-submissions", {}, {
                      method: "POST",
                      body: JSON.stringify({
                        email: values.email,
                        location: data.location
                      })
                    });

                  case 6:
                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](2);
                    setErrors({
                      api: _context.t0.message
                    });

                  case 11:
                    setLoading(false);
                    setSubmitting(false);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 8]]);
          }));

          return function (_x, _x2) {
            return _ref3.apply(this, arguments);
          };
        }(),
        children: function children(_ref4) {
          var errors = _ref4.errors,
              touched = _ref4.touched,
              isSubmitting = _ref4.isSubmitting;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
              className: "flex flex-col md:flex-row gap-4 leadform",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "text",
                name: "name",
                placeholder: data.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "text",
                name: "subject",
                placeholder: data.subject
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "email",
                name: "email",
                placeholder: data.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "textarea",
                name: "message",
                rows: "5",
                placeholder: data.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 18
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "flex flex-row flex-wrap gap-4",
                children: data.buttons.map(function (button) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements_button_link__WEBPACK_IMPORTED_MODULE_9__.default, {
                    button: button,
                    appearance: (0,utils_button__WEBPACK_IMPORTED_MODULE_8__.getButtonAppearance)(button.type, "light")
                  }, button.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 13
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 1
              }, _this), "              "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "text-red-500 h-12 text-sm mt-1 ml-2 text-left",
              children: errors.email && touched.email && errors.email || errors.api
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(LeadForm, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");

_c = LeadForm;
/* harmony default export */ __webpack_exports__["default"] = (LeadForm);

var _c;

$RefreshReg$(_c, "LeadForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9sZWFkLWZvcm0uanMiXSwibmFtZXMiOlsiTGVhZEZvcm0iLCJkYXRhIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkxlYWRTY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJ0aXRsZSIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJzZXRFcnJvcnMiLCJhcGkiLCJmZXRjaEFQSSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJtZXNzYWdlIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIm5hbWUiLCJzdWJqZWN0IiwiYnV0dG9ucyIsIm1hcCIsImJ1dHRvbiIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJ0eXBlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUc3QixNQUFNQyxVQUFVLEdBQUdDLHVDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDcENDLFNBQUssRUFBRUYsdUNBQUEsR0FBYUUsS0FBYixHQUFxQkMsUUFBckI7QUFENkIsR0FBbkIsQ0FBbkI7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLCtCQUFkO0FBQUEsZ0JBQStDUixJQUFJLENBQUNTO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0Us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TSxDQUFDZCxLQUFQLElBQWdCZSxPQUFPLENBQUNmLEtBQXhCLElBQWlDYyxNQUFNLENBQUNkLEtBQXpDLElBQW1EYyxNQUFNLENBQUNSO0FBRDdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUFBO0FBM0JIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2RUQsQ0FwRkQ7O0dBQU1kLFE7O0tBQUFBLFE7QUFzRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uYTMwMjkyZmJlZmRiZGIwZGUwMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcInV0aWxzL2FwaVwiXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCB0ZXh0YXJlYSB9IGZyb20gXCJmb3JtaWtcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vZWxlbWVudHMvYnV0dG9uXCJcbmltcG9ydCB7IGdldEJ1dHRvbkFwcGVhcmFuY2UgfSBmcm9tIFwidXRpbHMvYnV0dG9uXCJcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gXCIuLi9lbGVtZW50cy9idXR0b24tbGlua1wiXG5cblxuY29uc3QgTGVhZEZvcm0gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgTGVhZFNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHRleHQtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMTAgZm9udC1ib2xkIG1iLTJcIj57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogXCJcIiB9fVxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e0xlYWRTY2hlbWF9XG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgc2V0RXJyb3JzIH0pID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2V0RXJyb3JzKHsgYXBpOiBudWxsIH0pXG4gICAgICAgICAgICAgIGF3YWl0IGZldGNoQVBJKFxuICAgICAgICAgICAgICAgIFwiL2xlYWQtZm9ybS1zdWJtaXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgc2V0RXJyb3JzKHsgYXBpOiBlcnIubWVzc2FnZSB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTQgbGVhZGZvcm1cIj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgcHktNCBtZDpweS0wIHB4LTQgYm9yZGVyLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHB5LTQgbWQ6cHktMCBweC00IGJvcmRlci0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RhdGEuc3ViamVjdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSBweS00IG1kOnB5LTAgcHgtNCBib3JkZXItMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHB5LTQgbWQ6cHktMCBweC00IGJvcmRlci0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9JzUnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGF0YS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIC8+XG48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGdhcC00XCI+XG4gICAgICAgICAge2RhdGEuYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvbkxpbmtcbiAgICAgICAgICAgICAgYnV0dG9uPXtidXR0b259XG4gICAgICAgICAgICAgIGFwcGVhcmFuY2U9e2dldEJ1dHRvbkFwcGVhcmFuY2UoYnV0dG9uLnR5cGUsIFwibGlnaHRcIil9XG4gICAgICAgICAgICAgIGtleT17YnV0dG9uLmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBoLTEyIHRleHQtc20gbXQtMSBtbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsKSB8fCBlcnJvcnMuYXBpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9