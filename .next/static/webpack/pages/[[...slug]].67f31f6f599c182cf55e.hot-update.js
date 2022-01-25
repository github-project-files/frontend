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
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements_button__WEBPACK_IMPORTED_MODULE_7__.default, {
                type: "submit",
                button: data.submitButton,
                disabled: isSubmitting,
                loading: loading,
                color: "blue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
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
              lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9sZWFkLWZvcm0uanMiXSwibmFtZXMiOlsiTGVhZEZvcm0iLCJkYXRhIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkxlYWRTY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJ0aXRsZSIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJzZXRFcnJvcnMiLCJhcGkiLCJmZXRjaEFQSSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJtZXNzYWdlIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsIm5hbWUiLCJzdWJqZWN0Iiwic3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0NDLCtDQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsVUFEYTs7QUFHN0IsTUFBTUMsVUFBVSxHQUFHQyx1Q0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3BDQyxTQUFLLEVBQUVGLHVDQUFBLEdBQWFFLEtBQWIsR0FBcUJDLFFBQXJCO0FBRDZCLEdBQW5CLENBQW5CO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQywrQkFBZDtBQUFBLGdCQUErQ1IsSUFBSSxDQUFDUztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUFFRixlQUFLLEVBQUU7QUFBVCxTQURqQjtB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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEVELENBbkZEOztHQUFNZCxROztLQUFBQSxRO0FBcUZOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjY3ZjMxZjZmNTk5YzE4MmNmNTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCJ1dGlscy9hcGlcIlxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgdGV4dGFyZWEgfSBmcm9tIFwiZm9ybWlrXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2VsZW1lbnRzL2J1dHRvblwiXG5cbmNvbnN0IExlYWRGb3JtID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IExlYWRTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTEwIGZvbnQtYm9sZCBtYi0yXCI+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IFwiXCIgfX1cbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtMZWFkU2NoZW1hfVxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNldEVycm9ycyh7IGFwaTogbnVsbCB9KVxuICAgICAgICAgICAgICBhd2FpdCBmZXRjaEFQSShcbiAgICAgICAgICAgICAgICBcIi9sZWFkLWZvcm0tc3VibWlzc2lvbnNcIixcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogZGF0YS5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIHNldEVycm9ycyh7IGFwaTogZXJyLm1lc3NhZ2UgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00IGxlYWRmb3JtXCI+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHB5LTQgbWQ6cHktMCBweC00IGJvcmRlci0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSBweS00IG1kOnB5LTAgcHgtNCBib3JkZXItMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkYXRhLnN1YmplY3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgcHktNCBtZDpweS0wIHB4LTQgYm9yZGVyLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSBweS00IG1kOnB5LTAgcHgtNCBib3JkZXItMiByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RhdGEubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgYnV0dG9uPXtkYXRhLnN1Ym1pdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBoLTEyIHRleHQtc20gbXQtMSBtbC0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsKSB8fCBlcnJvcnMuYXBpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9