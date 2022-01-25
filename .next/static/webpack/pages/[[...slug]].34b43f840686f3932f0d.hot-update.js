self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function getStrapiURL(path) {
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

function _fetchAPI() {
  _fetchAPI = (0,D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function getPageData(_x2) {
  return _getPageData.apply(this, arguments);
} // Get site data from Strapi (metadata, navbar, footer...)

function _getPageData() {
  _getPageData = (0,D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref) {
    var _pagesData$data;

    var slug, locale, preview, gqlEndpoint, pagesRes, pagesData;
    return D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            slug = _ref.slug, locale = _ref.locale, preview = _ref.preview;
            // Find the pages that match this slug
            gqlEndpoint = getStrapiURL("/graphql");
            _context2.next = 4;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetPages(\n          $slug: String!\n          $publicationState: PublicationState!\n          $locale: I18NLocaleCode!\n        ) {        \n          pages(\n            filters: { slug: { eq: $slug } }\n            publicationState: $publicationState\n            locale: $locale\n          ) {\n            data {\n              id\n              attributes {\n                locale\n                localizations {\n                  data {\n                    id\n                    attributes {\n                      locale\n                    }\n                  }\n                }\n                slug\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                contentSections {\n                  __typename\n                  ... on ComponentSectionsBottomActions {\n                    id\n                    title\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                  }\n                  ... on ComponentSectionsHero {\n                    id\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                    title\n                    description\n                    label\n                    picture {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsFeatureColumnsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      icon {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsFeatureRowsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      link {\n                        id\n                        newTab\n                        text\n                        url\n                      }\n                      media {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsTestimonialsGroup {\n                    id\n                    description\n                    link {\n                      id\n                      newTab\n                      text\n                      url\n                    }\n                    logos {\n                      id\n                      title\n                      logo {\n                        ...FileParts\n                      }\n                    }\n                    testimonials {\n                      id\n                      logo {\n                        ...FileParts\n                      }\n                      picture {\n                        ...FileParts\n                      }\n                      text\n                      authorName\n                      authorTitle\n                      link\n                    }\n                    title\n                  }\n                  ... on ComponentSectionsLargeVideo {\n                    id\n                    description\n                    title\n                    poster {\n                      ...FileParts\n                    }\n                    video {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsRichText {\n                    id\n                    content\n                  }\n                  ... on ComponentSectionsPricing {\n                    id\n                    title\n                    plans {\n                      description\n                      features {\n                        id\n                        name\n                      }\n                      id\n                      isRecommended\n                      name\n                      price\n                      pricePeriod\n                    }\n                  }\n                  ... on ComponentSectionsLeadForm {\n                    id\n                    name\n                    subject\n                    email\n                    message\n                    location\n                    submitButton {\n                      id\n                      text\n                      type\n                    }\n                    title\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  slug: slug,
                  publicationState: preview ? "PREVIEW" : "LIVE",
                  locale: locale
                }
              })
            });

          case 4:
            pagesRes = _context2.sent;
            _context2.next = 7;
            return pagesRes.json();

          case 7:
            pagesData = _context2.sent;

            if (!(((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", null);

          case 10:
            return _context2.abrupt("return", pagesData.data.pages.data[0]);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}

function getGlobalData(_x3) {
  return _getGlobalData.apply(this, arguments);
}

function _getGlobalData() {
  _getGlobalData = (0,D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(locale) {
    var gqlEndpoint, globalRes, global;
    return D_ThinkDesign_server_niramaaya_strapi_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            gqlEndpoint = getStrapiURL("/graphql");
            _context3.next = 3;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetGlobal($locale: I18NLocaleCode!) {\n          global(locale: $locale) {\n            data {\n              id\n              attributes {\n                favicon {\n                  ...FileParts\n                }\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                metaTitleSuffix\n                notificationBanner {\n                  type\n                  text\n                }\n                navbar {\n                  logo {\n                    ...FileParts\n                  }\n                  links {\n                    id\n                    url\n                    newTab\n                    text\n                  }\n                  button {\n                    id\n                    url\n                    newTab\n                    text\n                    type\n                  }\n                }\n                footer {\n                  logo {\n                    ...FileParts\n                  }\n                  smallText\n                  columns {\n                    id\n                    title\n                    links {\n                      id\n                      url\n                      newTab\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  locale: locale
                }
              })
            });

          case 3:
            globalRes = _context3.sent;
            _context3.next = 6;
            return globalRes.json();

          case 6:
            global = _context3.sent;
            return _context3.abrupt("return", global.data.global);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getGlobalData.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwianNvbiIsImRhdGEiLCJnZXRQYWdlRGF0YSIsInNsdWciLCJsb2NhbGUiLCJwcmV2aWV3IiwiZ3FsRW5kcG9pbnQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHVibGljYXRpb25TdGF0ZSIsInBhZ2VzUmVzIiwicGFnZXNEYXRhIiwicGFnZXMiLCJsZW5ndGgiLCJnZXRHbG9iYWxEYXRhIiwiZ2xvYmFsUmVzIiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDakMsbUJBQ0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyx1QkFENUMsU0FFR0gsSUFGSDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBZUksUUFBdEI7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7a1ZBakNPLGlCQUF3QkosSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEJLLDJCQUE5QiwyREFBZ0QsRUFBaEQ7QUFBb0RDLG1CQUFwRCwyREFBOEQsRUFB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O0FBeUZDb0Isa0JBekZEO0FBQUEsOENBMEZFQSxNQUFNLENBQUNuQixJQUFQLENBQVltQixNQTFGZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjM0YjQzZjg0MDY4NmYzOTMyZjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSBcInFzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCkge1xyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcclxuICB9JHtwYXRofWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcclxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxyXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcclxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH1cclxuXHJcbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcclxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxyXG4gICl9YFxyXG5cclxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxyXG5cclxuICAvLyBIYW5kbGUgcmVzcG9uc2VcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2x1ZyBUaGUgcGFnZSdzIHNsdWdcclxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIFRoZSBjdXJyZW50IGxvY2FsZSBzcGVjaWZpZWQgaW4gcm91dGVyLmxvY2FsZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmlldyByb3V0ZXIgaXNQcmV2aWV3IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEoeyBzbHVnLCBsb2NhbGUsIHByZXZpZXcgfSkge1xyXG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXHJcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxyXG4gIGNvbnN0IHBhZ2VzUmVzID0gYXdhaXQgZmV0Y2goZ3FsRW5kcG9pbnQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcclxuICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgIG1pbWVcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICBmb3JtYXRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcXVlcnkgR2V0UGFnZXMoXHJcbiAgICAgICAgICAkc2x1ZzogU3RyaW5nIVxyXG4gICAgICAgICAgJHB1YmxpY2F0aW9uU3RhdGU6IFB1YmxpY2F0aW9uU3RhdGUhXHJcbiAgICAgICAgICAkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSFcclxuICAgICAgICApIHsgICAgICAgIFxyXG4gICAgICAgICAgcGFnZXMoXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHsgc2x1ZzogeyBlcTogJHNsdWcgfSB9XHJcbiAgICAgICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6ICRwdWJsaWNhdGlvblN0YXRlXHJcbiAgICAgICAgICAgIGxvY2FsZTogJGxvY2FsZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVcclxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxyXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXHJcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGVudFNlY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNCb3R0b21BY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zSGVybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNGZWF0dXJlQ29sdW1uc0dyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvclRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc1ByaWNpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBwbGFucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNSZWNvbW1lbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlUGVyaW9kXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xlYWRGb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgYCxcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBwdWJsaWNhdGlvblN0YXRlOiBwcmV2aWV3ID8gXCJQUkVWSUVXXCIgOiBcIkxJVkVcIixcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB9KVxyXG5cclxuICBjb25zdCBwYWdlc0RhdGEgPSBhd2FpdCBwYWdlc1Jlcy5qc29uKClcclxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcclxuICBpZiAocGFnZXNEYXRhLmRhdGE/LnBhZ2VzID09IG51bGwgfHwgcGFnZXNEYXRhLmRhdGEucGFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCBpdGVtIHNpbmNlIHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSByZXN1bHQgcGVyIHNsdWdcclxuICByZXR1cm4gcGFnZXNEYXRhLmRhdGEucGFnZXMuZGF0YVswXVxyXG59XHJcblxyXG4vLyBHZXQgc2l0ZSBkYXRhIGZyb20gU3RyYXBpIChtZXRhZGF0YSwgbmF2YmFyLCBmb290ZXIuLi4pXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHbG9iYWxEYXRhKGxvY2FsZSkge1xyXG4gIGNvbnN0IGdxbEVuZHBvaW50ID0gZ2V0U3RyYXBpVVJMKFwiL2dyYXBocWxcIilcclxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIGZyYWdtZW50IEZpbGVQYXJ0cyBvbiBVcGxvYWRGaWxlRW50aXR5UmVzcG9uc2Uge1xyXG4gICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgbWltZVxyXG4gICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIGZvcm1hdHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBxdWVyeSBHZXRHbG9iYWwoJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhKSB7XHJcbiAgICAgICAgICBnbG9iYWwobG9jYWxlOiAkbG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgICAgICBmYXZpY29uIHtcclxuICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxyXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXHJcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWV0YVRpdGxlU3VmZml4XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25CYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICAgIGxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc21hbGxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIGAsXHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGdsb2JhbFJlcy5qc29uKClcclxuICByZXR1cm4gZ2xvYmFsLmRhdGEuZ2xvYmFsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==