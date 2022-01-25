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
      lineNumber: 16,
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
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "text",
                name: "subject",
                placeholder: data.subject
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "email",
                name: "email",
                placeholder: data.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
                className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
                type: "textarea",
                name: "message",
                rows: "5",
                placeholder: data.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 18
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "flex flex-row flex-wrap gap-4",
                children: data.buttons.map(function (button) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ButtonLink, {
                    button: button,
                    appearance: getButtonAppearance(button.type, "light")
                  }, button.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 13
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "text-red-500 h-12 text-sm mt-1 ml-2 text-left",
              children: errors.email && touched.email && errors.email || errors.api
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9sZWFkLWZvcm0uanMiXSwibmFtZXMiOlsiTGVhZEZvcm0iLCJkYXRhIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkxlYWRTY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJ0aXRsZSIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJzZXRFcnJvcnMiLCJhcGkiLCJmZXRjaEFQSSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJtZXNzYWdlIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIm5hbWUiLCJzdWJqZWN0IiwiYnV0dG9ucyIsIm1hcCIsImJ1dHRvbiIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJ0eXBlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUc3QixNQUFNQyxVQUFVLEdBQUdDLHVDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDcENDLFNBQUssRUFBRUYsdUNBQUEsR0FBYUUsS0FBYixHQUFxQkMsUUFBckI7QUFENkIsR0FBbkIsQ0FBbkI7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLCtCQUFkO0FBQUEsZ0JBQStDUixJQUFJLENBQUNTO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0UsOERBQUMsMENBQUQ7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SUFBZ0JlLE9BQU8sQ0FBQ2YsS0FBeEIsSUFBaUNjLE1BQU0sQ0FBQ2QsS0FBekMsSUFBbURjLE1BQU0sQ0FBQ1I7QUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBQUE7QUEzQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQXJGRDs7R0FBTWQsUTs7S0FBQUEsUTtBQXVGTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5mMzMzMjdlYzYwNzNjMTQyNGYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwidXRpbHMvYXBpXCJcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQsIHRleHRhcmVhIH0gZnJvbSBcImZvcm1pa1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9lbGVtZW50cy9idXR0b25cIlxuXG5jb25zdCBMZWFkRm9ybSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBMZWFkU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0xMCBmb250LWJvbGQgbWItMlwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxGb3JtaWtcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBcIlwiIH19XG4gICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17TGVhZFNjaGVtYX1cbiAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZXRFcnJvcnMoeyBhcGk6IG51bGwgfSlcbiAgICAgICAgICAgICAgYXdhaXQgZmV0Y2hBUEkoXG4gICAgICAgICAgICAgICAgXCIvbGVhZC1mb3JtLXN1Ym1pc3Npb25zXCIsXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBzZXRFcnJvcnMoeyBhcGk6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNCBsZWFkZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSBweS00IG1kOnB5LTAgcHgtNCBib3JkZXItMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgcHktNCBtZDpweS0wIHB4LTQgYm9yZGVyLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGF0YS5zdWJqZWN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHB5LTQgbWQ6cHktMCBweC00IGJvcmRlci0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgcHktNCBtZDpweS0wIHB4LTQgYm9yZGVyLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgcm93cz0nNSdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkYXRhLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICB7ZGF0YS5idXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uTGlua1xuICAgICAgICAgICAgICBidXR0b249e2J1dHRvbn1cbiAgICAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShidXR0b24udHlwZSwgXCJsaWdodFwiKX1cbiAgICAgICAgICAgICAga2V5PXtidXR0b24uaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgaC0xMiB0ZXh0LXNtIG10LTEgbWwtMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCkgfHwgZXJyb3JzLmFwaX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFkRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==