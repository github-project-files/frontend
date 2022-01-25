(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? // eslint-disable-next-line no-undef
            "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.addMessageListener)(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

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


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

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


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
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


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwidW5kZWZpbmVkIiwic2lnbmFsIiwiYWJvcnQiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwiYml0c05lZWRlZCIsImNvZGVQb2ludCIsInByb3RvdHlwZSIsImRlY29kZSIsIm9jdGV0cyIsInZhbGlkIiwic2hpZnQiLCJvY3RldHNDb3VudCIsIkVycm9yIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwiZW5jb2RlIiwic3RyZWFtIiwiayIsIlhIUldyYXBwZXIiLCJ4aHIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsIm9ucHJvZ3Jlc3MiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfY29udGVudFR5cGUiLCJfeGhyIiwiX3NlbmRUaW1lb3V0IiwiX2Fib3J0Iiwib3BlbiIsIm1ldGhvZCIsInVybCIsInRoYXQiLCJzdGF0ZSIsInNpbGVudCIsImNsZWFyVGltZW91dCIsIm9ubG9hZCIsIm9uYWJvcnQiLCJvblN0YXJ0IiwiY29udGVudFR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWx1ZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsImNoYXJDb2RlQXQiLCJIZWFkZXJzUG9seWZpbGwiLCJhbGwiLCJtYXAiLCJjcmVhdGUiLCJhcnJheSIsInNwbGl0IiwibGluZSIsInBhcnRzIiwiam9pbiIsIl9tYXAiLCJnZXQiLCJYSFJUcmFuc3BvcnQiLCJvblN0YXJ0Q2FsbGJhY2siLCJvblByb2dyZXNzQ2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiaGVhZGVycyIsIm9mZnNldCIsImNodW5rIiwic2xpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJIZWFkZXJzV3JhcHBlciIsIl9oZWFkZXJzIiwiRmV0Y2hUcmFuc3BvcnQiLCJjb250cm9sbGVyIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsImNhY2hlIiwidGhlbiIsInJlc3BvbnNlIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsImNhbmNlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZE5leHRDaHVuayIsInJlYWQiLCJyZXN1bHQiLCJkb25lIiwiRXZlbnRUYXJnZXQiLCJfbGlzdGVuZXJzIiwidGhyb3dFcnJvciIsImUiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsInR5cGUiLCJsaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJsYXN0RXZlbnRJZCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsImRlZiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiZmlyZSIsImYiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIl9kZWZhdWx0IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsb3NlUGluZyIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUYsSUFBSUMsb0JBQW9CLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUFELENBQVIsQ0FBL0M7O0FBQW9GLElBQUlFLFlBQVksR0FBQ0YsbUJBQU8sQ0FBQyxxR0FBRCxDQUF4Qjs7QUFBd0QsSUFBSUcscUJBQXFCLEdBQUNILG1CQUFPLENBQUMsaUdBQUQsQ0FBakM7O0FBQStELElBQUlJLEtBQUssR0FBQ0osbUJBQU8sQ0FBQywyREFBRCxDQUFqQjtBQUE0Qjs7O0FBQThCLElBQUcsQ0FBQ0ssTUFBTSxDQUFDQyxXQUFYLEVBQXVCO0FBQUNELFFBQU0sQ0FBQ0MsV0FBUCxHQUFtQkwsb0JBQW9CLFdBQXZDO0FBQWlEOztBQUFBLElBQU1NLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsV0FBcEQsQ0FBWDtJQUFnRkMsVyxH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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvZmFsbGJhY2svYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfZXZlbnRTb3VyY2VQb2x5ZmlsbD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7dmFyIF9ldmVudHNvdXJjZT1yZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO3ZhciBfb25EZW1hbmRFbnRyaWVzVXRpbHM9cmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7dmFyIF9mb3VjPXJlcXVpcmUoXCIuL2ZvdWNcIik7LyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovaWYoIXdpbmRvdy5FdmVudFNvdXJjZSl7d2luZG93LkV2ZW50U291cmNlPV9ldmVudFNvdXJjZVBvbHlmaWxsLmRlZmF1bHQ7fWNvbnN0IGRhdGE9SlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KTtsZXR7YXNzZXRQcmVmaXgscGFnZX09ZGF0YTthc3NldFByZWZpeD1hc3NldFByZWZpeHx8Jyc7bGV0IG1vc3RSZWNlbnRIYXNoPW51bGw7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovbGV0IGN1ckhhc2g9X193ZWJwYWNrX2hhc2hfXztjb25zdCBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XHJcbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCl7Ly8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cclxuLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cclxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCl7cmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCk9PT0naWRsZSc7fS8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcclxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxyXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXtjb25zdCByZXM9YXdhaXQgZmV0Y2godHlwZW9mIF9fd2VicGFja19ydW50aW1lX2lkX18hPT0ndW5kZWZpbmVkJz8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LiR7X193ZWJwYWNrX3J1bnRpbWVfaWRfX30uaG90LXVwZGF0ZS5qc29uYDpgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7Y29uc3QganNvbkRhdGE9YXdhaXQgcmVzLmpzb24oKTtjb25zdCBjdXJQYWdlPXBhZ2U9PT0nLyc/J2luZGV4JzpwYWdlOy8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcclxuY29uc3QgcGFnZVVwZGF0ZWQ9KEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYyk/anNvbkRhdGEuYzpPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZShtb2Q9PntyZXR1cm4gbW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLDEpPT09Jy8nP2N1clBhZ2U6YC8ke2N1clBhZ2V9YH1gKSE9PS0xfHxtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpgLyR7Y3VyUGFnZX1gfWAucmVwbGFjZSgvXFwvL2csJ1xcXFwnKSkhPT0tMTt9KTtpZihwYWdlVXBkYXRlZCl7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO31lbHNle2N1ckhhc2g9bW9zdFJlY2VudEhhc2g7fX1jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLGVycik7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO319KDAsX2V2ZW50c291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcikoZXZlbnQ9PntpZihldmVudC5kYXRhPT09J1xcdUQ4M0RcXHVEQzkzJyl7cmV0dXJuO310cnl7Y29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKG1lc3NhZ2UuYWN0aW9uPT09J3N5bmMnfHxtZXNzYWdlLmFjdGlvbj09PSdidWlsdCcpe2lmKCFtZXNzYWdlLmhhc2gpe3JldHVybjt9bW9zdFJlY2VudEhhc2g9bWVzc2FnZS5oYXNoO3RyeUFwcGx5VXBkYXRlcygpO31lbHNlIGlmKG1lc3NhZ2UuYWN0aW9uPT09J3JlbG9hZFBhZ2UnKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX1jYXRjaChleCl7Y29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnK2V2ZW50LmRhdGErJ1xcbicrZXgpO319KTsoMCxfb25EZW1hbmRFbnRyaWVzVXRpbHMuc2V0dXBQaW5nKShhc3NldFByZWZpeCwoKT0+cGFnZSk7KDAsX2ZvdWMuZGlzcGxheUNvbnRlbnQpKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1kZXYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXI9YWRkTWVzc2FnZUxpc3RlbmVyO2V4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyPWdldEV2ZW50U291cmNlV3JhcHBlcjtjb25zdCBldmVudENhbGxiYWNrcz1bXTtmdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyl7dmFyIHNvdXJjZTt2YXIgbGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7dmFyIGxpc3RlbmVycz1bXTtpZighb3B0aW9ucy50aW1lb3V0KXtvcHRpb25zLnRpbWVvdXQ9MjAqMTAwMDt9aW5pdCgpO3ZhciB0aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKG5ldyBEYXRlKCktbGFzdEFjdGl2aXR5Pm9wdGlvbnMudGltZW91dCl7aGFuZGxlRGlzY29ubmVjdCgpO319LG9wdGlvbnMudGltZW91dC8yKTtmdW5jdGlvbiBpbml0KCl7c291cmNlPW5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtzb3VyY2Uub25vcGVuPWhhbmRsZU9ubGluZTtzb3VyY2Uub25lcnJvcj1oYW5kbGVEaXNjb25uZWN0O3NvdXJjZS5vbm1lc3NhZ2U9aGFuZGxlTWVzc2FnZTt9ZnVuY3Rpb24gaGFuZGxlT25saW5lKCl7aWYob3B0aW9ucy5sb2cpY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpO2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO31mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KXtsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTtmb3IodmFyIGk9MDtpPGxpc3RlbmVycy5sZW5ndGg7aSsrKXtsaXN0ZW5lcnNbaV0oZXZlbnQpO31ldmVudENhbGxiYWNrcy5mb3JFYWNoKGNiPT57aWYoIWNiLnVuZmlsdGVyZWQmJmV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJyk9PT0tMSlyZXR1cm47Y2IoZXZlbnQpO30pO31mdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCl7Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7c2V0VGltZW91dChpbml0LG9wdGlvbnMudGltZW91dCk7fXJldHVybntjbG9zZTooKT0+e2NsZWFySW50ZXJ2YWwodGltZXIpO3NvdXJjZS5jbG9zZSgpO30sYWRkTWVzc2FnZUxpc3RlbmVyOmZ1bmN0aW9uKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYil7ZXZlbnRDYWxsYmFja3MucHVzaChjYik7fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtyZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO31cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzb3VyY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXHJcbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxyXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xyXG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uKCl7dGhpcy5zaWduYWw9bnVsbDt0aGlzLmFib3J0PWZ1bmN0aW9uKCl7fTt9O31mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCl7dGhpcy5iaXRzTmVlZGVkPTA7dGhpcy5jb2RlUG9pbnQ9MDt9VGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlPWZ1bmN0aW9uKG9jdGV0cyl7ZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LHNoaWZ0LG9jdGV0c0NvdW50KXtpZihvY3RldHNDb3VudD09PTEpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDA4MD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MDdmZjt9aWYob2N0ZXRzQ291bnQ9PT0yKXtyZXR1cm4gY29kZVBvaW50Pj0weDA4MDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weGQ3ZmZ8fGNvZGVQb2ludD49MHhlMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhmZmZmO31pZihvY3RldHNDb3VudD09PTMpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDEwMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHgxMGZmZmY7fXRocm93IG5ldyBFcnJvcigpO31mdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCl7aWYoYml0c05lZWRlZD09PTYqMSl7cmV0dXJuIGNvZGVQb2ludD4+Nj4xNT8zOmNvZGVQb2ludD4zMT8yOjE7fWlmKGJpdHNOZWVkZWQ9PT02KjIpe3JldHVybiBjb2RlUG9pbnQ+MTU/MzoyO31pZihiaXRzTmVlZGVkPT09NiozKXtyZXR1cm4gMzt9dGhyb3cgbmV3IEVycm9yKCk7fXZhciBSRVBMQUNFUj0weGZmZmQ7dmFyIHN0cmluZz0nJzt2YXIgYml0c05lZWRlZD10aGlzLmJpdHNOZWVkZWQ7dmFyIGNvZGVQb2ludD10aGlzLmNvZGVQb2ludDtmb3IodmFyIGk9MDtpPG9jdGV0cy5sZW5ndGg7aSs9MSl7dmFyIG9jdGV0PW9jdGV0c1tpXTtpZihiaXRzTmVlZGVkIT09MCl7aWYob2N0ZXQ8MTI4fHxvY3RldD4xOTF8fCF2YWxpZChjb2RlUG9pbnQ8PDZ8b2N0ZXQmNjMsYml0c05lZWRlZC02LG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fX1pZihiaXRzTmVlZGVkPT09MCl7aWYob2N0ZXQ+PTAmJm9jdGV0PD0xMjcpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9b2N0ZXQ7fWVsc2UgaWYob2N0ZXQ+PTE5MiYmb2N0ZXQ8PTIyMyl7Yml0c05lZWRlZD02KjE7Y29kZVBvaW50PW9jdGV0JjMxO31lbHNlIGlmKG9jdGV0Pj0yMjQmJm9jdGV0PD0yMzkpe2JpdHNOZWVkZWQ9NioyO2NvZGVQb2ludD1vY3RldCYxNTt9ZWxzZSBpZihvY3RldD49MjQwJiZvY3RldDw9MjQ3KXtiaXRzTmVlZGVkPTYqMztjb2RlUG9pbnQ9b2N0ZXQmNzt9ZWxzZXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO31pZihiaXRzTmVlZGVkIT09MCYmIXZhbGlkKGNvZGVQb2ludCxiaXRzTmVlZGVkLG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7fX1lbHNle2JpdHNOZWVkZWQtPTY7Y29kZVBvaW50PWNvZGVQb2ludDw8NnxvY3RldCY2Mzt9aWYoYml0c05lZWRlZD09PTApe2lmKGNvZGVQb2ludDw9MHhmZmZmKXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTt9ZWxzZXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwKyhjb2RlUG9pbnQtMHhmZmZmLTE+PjEwKSk7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCsoY29kZVBvaW50LTB4ZmZmZi0xJjB4M2ZmKSk7fX19dGhpcy5iaXRzTmVlZGVkPWJpdHNOZWVkZWQ7dGhpcy5jb2RlUG9pbnQ9Y29kZVBvaW50O3JldHVybiBzdHJpbmc7fTsvLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxyXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb249ZnVuY3Rpb24gc3VwcG9ydHNTdHJlYW1PcHRpb24oKXt0cnl7cmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSx7c3RyZWFtOnRydWV9KT09PSd0ZXN0Jzt9Y2F0Y2goZXJyb3Ipe2NvbnNvbGUubG9nKGVycm9yKTt9cmV0dXJuIGZhbHNlO307Ly8gSUUsIEVkZ2VcclxuaWYoVGV4dERlY29kZXI9PXVuZGVmaW5lZHx8VGV4dEVuY29kZXI9PXVuZGVmaW5lZHx8IXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpe1RleHREZWNvZGVyPVRleHREZWNvZGVyUG9seWZpbGw7fXZhciBrPWZ1bmN0aW9uIGsoKXt9O2Z1bmN0aW9uIFhIUldyYXBwZXIoeGhyKXt0aGlzLndpdGhDcmVkZW50aWFscz1mYWxzZTt0aGlzLnJlc3BvbnNlVHlwZT0nJzt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLnN0YXR1cz0wO3RoaXMuc3RhdHVzVGV4dD0nJzt0aGlzLnJlc3BvbnNlVGV4dD0nJzt0aGlzLm9ucHJvZ3Jlc3M9azt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1rO3RoaXMuX2NvbnRlbnRUeXBlPScnO3RoaXMuX3hocj14aHI7dGhpcy5fc2VuZFRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1rO31YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3RoaXMuX2Fib3J0KHRydWUpO3ZhciB0aGF0PXRoaXM7dmFyIHhocj10aGlzLl94aHI7dmFyIHN0YXRlPTE7dmFyIHRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1mdW5jdGlvbihzaWxlbnQpe2lmKHRoYXQuX3NlbmRUaW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTt0aGF0Ll9zZW5kVGltZW91dD0wO31pZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O3hoci5vbmxvYWQ9azt4aHIub25lcnJvcj1rO3hoci5vbmFib3J0PWs7eGhyLm9ucHJvZ3Jlc3M9azt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWs7Ly8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxuLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxyXG54aHIuYWJvcnQoKTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9aWYoIXNpbGVudCl7dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fXN0YXRlPTA7fTt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KCl7aWYoc3RhdGU9PT0xKXsvLyBzdGF0ZSA9IDI7XHJcbnZhciBzdGF0dXM9MDt2YXIgc3RhdHVzVGV4dD0nJzt2YXIgY29udGVudFR5cGU9dW5kZWZpbmVkO2lmKCEoJ2NvbnRlbnRUeXBlJ2luIHhocikpe3RyeXtzdGF0dXM9eGhyLnN0YXR1cztzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O2NvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7fWNhdGNoKGVycm9yKXsvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXHJcbi8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcclxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXHJcbnN0YXR1cz0wO3N0YXR1c1RleHQ9Jyc7Y29udGVudFR5cGU9dW5kZWZpbmVkOy8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XHJcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcclxufX1lbHNle3N0YXR1cz0yMDA7c3RhdHVzVGV4dD0nT0snO2NvbnRlbnRUeXBlPXhoci5jb250ZW50VHlwZTt9aWYoc3RhdHVzIT09MCl7c3RhdGU9Mjt0aGF0LnJlYWR5U3RhdGU9Mjt0aGF0LnN0YXR1cz1zdGF0dXM7dGhhdC5zdGF0dXNUZXh0PXN0YXR1c1RleHQ7dGhhdC5fY29udGVudFR5cGU9Y29udGVudFR5cGU7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcygpe29uU3RhcnQoKTtpZihzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9Mzt2YXIgcmVzcG9uc2VUZXh0PScnO3RyeXtyZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt9Y2F0Y2goZXJyb3Ipey8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcclxufXRoYXQucmVhZHlTdGF0ZT0zO3RoYXQucmVzcG9uc2VUZXh0PXJlc3BvbnNlVGV4dDt0aGF0Lm9ucHJvZ3Jlc3MoKTt9fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXsvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXHJcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXHJcbm9uUHJvZ3Jlc3MoKTtpZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319O3ZhciBvblJlYWR5U3RhdGVDaGFuZ2U9ZnVuY3Rpb24gb25SZWFkeVN0YXRlQ2hhbmdlKCl7aWYoeGhyIT11bmRlZmluZWQpey8vIE9wZXJhIDEyXHJcbmlmKHhoci5yZWFkeVN0YXRlPT09NCl7b25GaW5pc2goKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTMpe29uUHJvZ3Jlc3MoKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTIpe29uU3RhcnQoKTt9fX07dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDUwMCk7aWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fX07Ly8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcclxueGhyLm9ubG9hZD1vbkZpbmlzaDt4aHIub25lcnJvcj1vbkZpbmlzaDsvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XHJcbi8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcclxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXHJcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcclxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXHJcbnhoci5vbmFib3J0PW9uRmluaXNoOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xyXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXHJcbi8vIE9wZXJhIDwgMTJcclxuLy8gRmlyZWZveCA8IDMuNVxyXG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcclxuLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcclxuLy8gc2VlIGFsc28gIzY0XHJcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xyXG4vLyAjOTFcclxudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSwwKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3RoaXMuX2Fib3J0KGZhbHNlKTt9O1hIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyPWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9jb250ZW50VHlwZTt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24obmFtZSx2YWx1ZSl7dmFyIHhocj10aGlzLl94aHI7aWYoJ3NldFJlcXVlc3RIZWFkZXInaW4geGhyKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLHZhbHVlKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyE9dW5kZWZpbmVkP3RoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTonJzt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oKXsvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcclxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxyXG54aHIud2l0aENyZWRlbnRpYWxzPXRoaXMud2l0aENyZWRlbnRpYWxzO3hoci5yZXNwb25zZVR5cGU9dGhpcy5yZXNwb25zZVR5cGU7dHJ5ey8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcclxueGhyLnNlbmQodW5kZWZpbmVkKTt9Y2F0Y2goZXJyb3IxKXsvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXHJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcclxudmFyIG1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciBhcnJheT1hbGwuc3BsaXQoJ1xcclxcbicpO2Zvcih2YXIgaT0wO2k8YXJyYXkubGVuZ3RoO2krPTEpe3ZhciBsaW5lPWFycmF5W2ldO3ZhciBwYXJ0cz1saW5lLnNwbGl0KCc6ICcpO3ZhciBuYW1lPXBhcnRzLnNoaWZ0KCk7dmFyIHZhbHVlPXBhcnRzLmpvaW4oJzogJyk7bWFwW3RvTG93ZXJDYXNlKG5hbWUpXT12YWx1ZTt9dGhpcy5fbWFwPW1hcDt9SGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07fTtmdW5jdGlvbiBYSFJUcmFuc3BvcnQoKXt9WEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt4aHIub3BlbignR0VUJyx1cmwpO3ZhciBvZmZzZXQ9MDt4aHIub25wcm9ncmVzcz1mdW5jdGlvbigpe3ZhciByZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt2YXIgY2h1bms9cmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7b2Zmc2V0Kz1jaHVuay5sZW5ndGg7b25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTt9O3hoci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih4aHIucmVhZHlTdGF0ZT09PTIpe3ZhciBzdGF0dXM9eGhyLnN0YXR1czt2YXIgc3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDt2YXIgY29udGVudFR5cGU9eGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTt2YXIgaGVhZGVycz14aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7b25TdGFydENhbGxiYWNrKHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksZnVuY3Rpb24oKXt4aHIuYWJvcnQoKTt9KTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoQ2FsbGJhY2soKTt9fTt4aHIud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPSd0ZXh0Jztmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsaGVhZGVyc1tuYW1lXSk7fX14aHIuc2VuZCgpO307ZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycyl7dGhpcy5faGVhZGVycz1oZWFkZXJzO31IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTt9O2Z1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCl7fUZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt2YXIgY29udHJvbGxlcj1uZXcgQWJvcnRDb250cm9sbGVyKCk7dmFyIHNpZ25hbD1jb250cm9sbGVyLnNpZ25hbDsvLyBzZWUgIzEyMFxyXG52YXIgdGV4dERlY29kZXI9bmV3IFRleHREZWNvZGVyKCk7ZmV0Y2godXJsLHtoZWFkZXJzOmhlYWRlcnMsY3JlZGVudGlhbHM6d2l0aENyZWRlbnRpYWxzPydpbmNsdWRlJzonc2FtZS1vcmlnaW4nLHNpZ25hbDpzaWduYWwsY2FjaGU6J25vLXN0b3JlJ30pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZWFkZXI9cmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtvblN0YXJ0Q2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzLHJlc3BvbnNlLnN0YXR1c1RleHQscmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxmdW5jdGlvbigpe2NvbnRyb2xsZXIuYWJvcnQoKTtyZWFkZXIuY2FuY2VsKCk7fSk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgcmVhZE5leHRDaHVuaz1mdW5jdGlvbiByZWFkTmV4dENodW5rKCl7cmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7aWYocmVzdWx0LmRvbmUpey8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXHJcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9ZmV0Y2ghPXVuZGVmaW5lZCYmUmVzcG9uc2UhPXVuZGVmaW5lZCYmJ2JvZHknaW4gUmVzcG9uc2UucHJvdG90eXBlO2Z1bmN0aW9uIHN0YXJ0KGVzLHVybCxvcHRpb25zKXt1cmw9U3RyaW5nKHVybCk7dmFyIHdpdGhDcmVkZW50aWFscz1vcHRpb25zIT11bmRlZmluZWQmJkJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpO3ZhciBpbml0aWFsUmV0cnk9Y2xhbXBEdXJhdGlvbigxMDAwKTt2YXIgaGVhcnRiZWF0VGltZW91dD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCE9dW5kZWZpbmVkP3BhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LDQ1MDAwKTpjbGFtcER1cmF0aW9uKDQ1MDAwKTt2YXIgbGFzdEV2ZW50SWQ9Jyc7dmFyIHJldHJ5PWluaXRpYWxSZXRyeTt2YXIgd2FzQWN0aXZpdHk9ZmFsc2U7dmFyIGhlYWRlcnM9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLmhlYWRlcnMhPXVuZGVmaW5lZD9KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpOnVuZGVmaW5lZDt2YXIgQ3VycmVudFRyYW5zcG9ydD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuVHJhbnNwb3J0IT11bmRlZmluZWQ/b3B0aW9ucy5UcmFuc3BvcnQ6WE1MSHR0cFJlcXVlc3Q7dmFyIHhocj1pc0ZldGNoU3VwcG9ydGVkJiYhKG9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZCk/dW5kZWZpbmVkOm5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO3ZhciB0cmFuc3BvcnQ9eGhyPT11bmRlZmluZWQ/bmV3IEZldGNoVHJhbnNwb3J0KCk6bmV3IFhIUlRyYW5zcG9ydCgpO3ZhciBjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7dmFyIHRpbWVvdXQ9MDt2YXIgY3VycmVudFN0YXRlPVdBSVRJTkc7dmFyIGRhdGFCdWZmZXI9Jyc7dmFyIGxhc3RFdmVudElkQnVmZmVyPScnO3ZhciBldmVudFR5cGVCdWZmZXI9Jyc7dmFyIHRleHRCdWZmZXI9Jyc7dmFyIHN0YXRlPUZJRUxEX1NUQVJUO3ZhciBmaWVsZFN0YXJ0PTA7dmFyIHZhbHVlU3RhcnQ9MDt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLGhlYWRlcnMsY2FuY2VsKXtpZihjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjYW5jZWxGdW5jdGlvbj1jYW5jZWw7aWYoc3RhdHVzPT09MjAwJiZjb250ZW50VHlwZSE9dW5kZWZpbmVkJiZjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKSl7Y3VycmVudFN0YXRlPU9QRU47d2FzQWN0aXZpdHk9dHJ1ZTtyZXRyeT1pbml0aWFsUmV0cnk7ZXMucmVhZHlTdGF0ZT1PUEVOO3ZhciBldmVudD1uZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbm9wZW4sZXZlbnQpO31lbHNle3ZhciBtZXNzYWdlPScnO2lmKHN0YXR1cyE9PTIwMCl7aWYoc3RhdHVzVGV4dCl7c3RhdHVzVGV4dD1zdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywnICcpO31tZXNzYWdlPVwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIrc3RhdHVzKycgJytzdGF0dXNUZXh0KycgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO31lbHNle21lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiKyhjb250ZW50VHlwZT09dW5kZWZpbmVkPyctJzpjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csJyAnKSkrJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJzt9dGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO2Nsb3NlKCk7dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbmVycm9yLGV2ZW50KTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcyh0ZXh0Q2h1bmspe2lmKGN1cnJlbnRTdGF0ZT09PU9QRU4pe3ZhciBuPS0xO2Zvcih2YXIgaT0wO2k8dGV4dENodW5rLmxlbmd0aDtpKz0xKXt2YXIgYz10ZXh0Q2h1bmsuY2hhckNvZGVBdChpKTtpZihjPT09J1xcbicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXHInLmNoYXJDb2RlQXQoMCkpe249aTt9fXZhciBjaHVuaz0obiE9PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZSgwLG4rMSk7dGV4dEJ1ZmZlcj0obj09PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZShuKzEpO2lmKGNodW5rIT09Jycpe3dhc0FjdGl2aXR5PXRydWU7fWZvcih2YXIgcG9zaXRpb249MDtwb3NpdGlvbjxjaHVuay5sZW5ndGg7cG9zaXRpb24rPTEpe3ZhciBjPWNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO2lmKHN0YXRlPT09QUZURVJfQ1ImJmM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtzdGF0ZT1GSUVMRF9TVEFSVDt9ZWxzZXtpZihzdGF0ZT09PUFGVEVSX0NSKXtzdGF0ZT1GSUVMRF9TVEFSVDt9aWYoYz09PSdcXHInLmNoYXJDb2RlQXQoMCl8fGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtpZihzdGF0ZSE9PUZJRUxEX1NUQVJUKXtpZihzdGF0ZT09PUZJRUxEKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7fXZhciBmaWVsZD1jaHVuay5zbGljZShmaWVsZFN0YXJ0LHZhbHVlU3RhcnQtMSk7dmFyIHZhbHVlPWNodW5rLnNsaWNlKHZhbHVlU3RhcnQrKHZhbHVlU3RhcnQ8cG9zaXRpb24mJmNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCk9PT0nICcuY2hhckNvZGVBdCgwKT8xOjApLHBvc2l0aW9uKTtpZihmaWVsZD09PSdkYXRhJyl7ZGF0YUJ1ZmZlcis9J1xcbic7ZGF0YUJ1ZmZlcis9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0naWQnKXtsYXN0RXZlbnRJZEJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdldmVudCcpe2V2ZW50VHlwZUJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdyZXRyeScpe2luaXRpYWxSZXRyeT1wYXJzZUR1cmF0aW9uKHZhbHVlLGluaXRpYWxSZXRyeSk7cmV0cnk9aW5pdGlhbFJldHJ5O31lbHNlIGlmKGZpZWxkPT09J2hlYXJ0YmVhdFRpbWVvdXQnKXtoZWFydGJlYXRUaW1lb3V0PXBhcnNlRHVyYXRpb24odmFsdWUsaGVhcnRiZWF0VGltZW91dCk7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO319fWlmKHN0YXRlPT09RklFTERfU1RBUlQpe2lmKGRhdGFCdWZmZXIhPT0nJyl7bGFzdEV2ZW50SWQ9bGFzdEV2ZW50SWRCdWZmZXI7aWYoZXZlbnRUeXBlQnVmZmVyPT09Jycpe2V2ZW50VHlwZUJ1ZmZlcj0nbWVzc2FnZSc7fXZhciBldmVudD1uZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlcix7ZGF0YTpkYXRhQnVmZmVyLnNsaWNlKDEpLGxhc3RFdmVudElkOmxhc3RFdmVudElkQnVmZmVyfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7aWYoZXZlbnRUeXBlQnVmZmVyPT09J21lc3NhZ2UnKXtmaXJlKGVzLGVzLm9ubWVzc2FnZSxldmVudCk7fWlmKGN1cnJlbnRTdGF0ZT09PUNMT1NFRCl7cmV0dXJuO319ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7fXN0YXRlPWM9PT0nXFxyJy5jaGFyQ29kZUF0KDApP0FGVEVSX0NSOkZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09RklFTERfU1RBUlQpe2ZpZWxkU3RhcnQ9cG9zaXRpb247c3RhdGU9RklFTEQ7fWlmKHN0YXRlPT09RklFTEQpe2lmKGM9PT0nOicuY2hhckNvZGVBdCgwKSl7dmFsdWVTdGFydD1wb3NpdGlvbisxO3N0YXRlPVZBTFVFX1NUQVJUO319ZWxzZSBpZihzdGF0ZT09PVZBTFVFX1NUQVJUKXtzdGF0ZT1WQUxVRTt9fX19fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7aWYoY3VycmVudFN0YXRlPT09T1BFTnx8Y3VycmVudFN0YXRlPT09Q09OTkVDVElORyl7Y3VycmVudFN0YXRlPVdBSVRJTkc7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fXRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30scmV0cnkpO3JldHJ5PWNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5KjE2LHJldHJ5KjIpKTtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7dmFyIGV2ZW50PW5ldyBFdmVudCgnZXJyb3InKTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319O3ZhciBjbG9zZT1mdW5jdGlvbiBjbG9zZSgpe2N1cnJlbnRTdGF0ZT1DTE9TRUQ7aWYoY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWlmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31lcy5yZWFkeVN0YXRlPUNMT1NFRDt9O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD0wO2lmKGN1cnJlbnRTdGF0ZSE9PVdBSVRJTkcpe2lmKCF3YXNBY3Rpdml0eSYmY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7dGhyb3dFcnJvcihuZXcgRXJyb3IoJ05vIGFjdGl2aXR5IHdpdGhpbiAnK2hlYXJ0YmVhdFRpbWVvdXQrJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWVsc2V7d2FzQWN0aXZpdHk9ZmFsc2U7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTt9cmV0dXJuO313YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO2N1cnJlbnRTdGF0ZT1DT05ORUNUSU5HO2RhdGFCdWZmZXI9Jyc7ZXZlbnRUeXBlQnVmZmVyPScnO2xhc3RFdmVudElkQnVmZmVyPWxhc3RFdmVudElkO3RleHRCdWZmZXI9Jyc7ZmllbGRTdGFydD0wO3ZhbHVlU3RhcnQ9MDtzdGF0ZT1GSUVMRF9TVEFSVDsvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcclxuLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxyXG52YXIgcmVxdWVzdFVSTD11cmw7aWYodXJsLnNsaWNlKDAsNSkhPT0nZGF0YTonJiZ1cmwuc2xpY2UoMCw1KSE9PSdibG9iOicpe2lmKGxhc3RFdmVudElkIT09Jycpe3JlcXVlc3RVUkwrPSh1cmwuaW5kZXhPZignPycpPT09LTE/Jz8nOicmJykrJ2xhc3RFdmVudElkPScrZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTt9fXZhciByZXF1ZXN0SGVhZGVycz17fTtyZXF1ZXN0SGVhZGVyc1snQWNjZXB0J109J3RleHQvZXZlbnQtc3RyZWFtJztpZihoZWFkZXJzIT11bmRlZmluZWQpe2Zvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycyxuYW1lKSl7cmVxdWVzdEhlYWRlcnNbbmFtZV09aGVhZGVyc1tuYW1lXTt9fX10cnl7dHJhbnNwb3J0Lm9wZW4oeGhyLG9uU3RhcnQsb25Qcm9ncmVzcyxvbkZpbmlzaCxyZXF1ZXN0VVJMLHdpdGhDcmVkZW50aWFscyxyZXF1ZXN0SGVhZGVycyk7fWNhdGNoKGVycm9yKXtjbG9zZSgpO3Rocm93IGVycm9yO319O2VzLnVybD11cmw7ZXMucmVhZHlTdGF0ZT1DT05ORUNUSU5HO2VzLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7ZXMuX2Nsb3NlPWNsb3NlO29uVGltZW91dCgpO31FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORz1DT05ORUNUSU5HO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQ9Q0xPU0VEO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xvc2UoKTt9O0V2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORz1DT05ORUNUSU5HO0V2ZW50U291cmNlUG9seWZpbGwuT1BFTj1PUEVOO0V2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3ZhciBfZGVmYXVsdD1FdmVudFNvdXJjZVBvbHlmaWxsO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGlzcGxheUNvbnRlbnQ9ZGlzcGxheUNvbnRlbnQ7Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xyXG4vLyBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudC4gSXQgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGh5ZHJhdGlvbiwgb3IgZWxzZVxyXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cclxuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spezsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fWlmKGNhbGxiYWNrKXtjYWxsYmFjaygpO319KTt9XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jbG9zZVBpbmc9Y2xvc2VQaW5nO2V4cG9ydHMuc2V0dXBQaW5nPXNldHVwUGluZztleHBvcnRzLmN1cnJlbnRQYWdlPXZvaWQgMDt2YXIgX2V2ZW50c291cmNlPXJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7LyogZ2xvYmFsIGxvY2F0aW9uICovbGV0IGV2dFNvdXJjZTtsZXQgY3VycmVudFBhZ2U7ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZTtmdW5jdGlvbiBjbG9zZVBpbmcoKXtpZihldnRTb3VyY2UpZXZ0U291cmNlLmNsb3NlKCk7ZXZ0U291cmNlPW51bGw7fWZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCxwYXRobmFtZUZuLHJldHJ5KXtjb25zdCBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcclxuaWYocGF0aG5hbWU9PT1jdXJyZW50UGFnZSYmIXJldHJ5KXJldHVybjtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlPXBhdGhuYW1lOy8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxyXG5jbG9zZVBpbmcoKTtldnRTb3VyY2U9KDAsX2V2ZW50c291cmNlLmdldEV2ZW50U291cmNlV3JhcHBlcikoe3BhdGg6YCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gLHRpbWVvdXQ6NTAwMH0pO2V2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoZXZlbnQ9PntpZihldmVudC5kYXRhLmluZGV4T2YoJ3snKT09PS0xKXJldHVybjt0cnl7Y29uc3QgcGF5bG9hZD1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKHBheWxvYWQuaW52YWxpZCl7Ly8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxyXG4vLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXHJcbmZldGNoKGxvY2F0aW9uLmhyZWYse2NyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHBhZ2VSZXM9PntpZihwYWdlUmVzLnN0YXR1cz09PTIwMCl7bG9jYXRpb24ucmVsb2FkKCk7fX0pO319Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLGVycik7fX0pO31cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMubWFwIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XHJcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcclxuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcclxuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgX25leHQodW5kZWZpbmVkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xyXG4iLCIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcclxuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XHJcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXHJcbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcclxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xyXG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XHJcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcclxuXHJcbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXHJcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcclxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcclxuXHJcbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXHJcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXHJcbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcclxuICB9XHJcbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcclxuXHJcbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXHJcbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXHJcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXHJcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxyXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcclxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXHJcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcclxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcclxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXHJcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxyXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xyXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xyXG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XHJcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcclxuXHJcbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xyXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cclxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xyXG5cclxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcclxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cclxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxyXG5cclxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XHJcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cclxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcclxuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xyXG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxyXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcclxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xyXG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcclxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cclxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XHJcbiAgfVxyXG5cclxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxyXG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcclxuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxyXG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XHJcblxyXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXHJcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cclxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XHJcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gY3RvclxyXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XHJcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxyXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cclxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcclxuICAgICAgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcclxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XHJcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xyXG4gICAgcmV0dXJuIGdlbkZ1bjtcclxuICB9O1xyXG5cclxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cclxuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxyXG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcclxuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxyXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcclxuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xyXG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xyXG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcclxuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxyXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXHJcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXHJcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXHJcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcclxuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XHJcbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxyXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxyXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcclxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xyXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxyXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXHJcbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxyXG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXHJcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxyXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XHJcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxyXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXHJcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxyXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcclxuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXHJcbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcclxuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcclxuXHJcbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxyXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxyXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxyXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcclxuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XHJcblxyXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcclxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXHJcbiAgICAgIFByb21pc2VJbXBsXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcclxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cclxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcclxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHRocm93IGFyZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxyXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcclxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XHJcblxyXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cclxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cclxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXHJcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcclxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xyXG5cclxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxyXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcclxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcclxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXHJcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXHJcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXHJcbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xyXG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcclxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcclxuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXHJcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXHJcbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxyXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcclxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcclxuXHJcbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xyXG5cclxuICAgIGlmICghIGluZm8pIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxyXG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxyXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcclxuXHJcbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxyXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXHJcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXHJcbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xyXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxyXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXHJcbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXHJcbiAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXHJcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXHJcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XHJcblxyXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XHJcblxyXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXHJcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcclxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxyXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxyXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XHJcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xyXG5cclxuICAgIGlmICgxIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgyIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XHJcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XHJcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcclxuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcclxuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xyXG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxyXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxyXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxyXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcclxuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcclxuICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAga2V5cy5yZXZlcnNlKCk7XHJcblxyXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcclxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXHJcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXHJcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxyXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gbmV4dDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XHJcbiAgICBpZiAoaXRlcmFibGUpIHtcclxuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xyXG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xyXG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcclxuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxyXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xyXG4gIH1cclxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcclxuXHJcbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcclxuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xyXG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgdGhpcy5wcmV2ID0gMDtcclxuICAgICAgdGhpcy5uZXh0ID0gMDtcclxuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcclxuXHJcbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xyXG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcclxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcclxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxyXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcclxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xyXG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xyXG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XHJcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xyXG5cclxuICAgICAgICBpZiAoY2F1Z2h0KSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxyXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XHJcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxyXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXHJcbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XHJcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcclxuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcclxuXHJcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcclxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXHJcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxyXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxyXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cclxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcclxuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xyXG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XHJcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XHJcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xyXG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcclxuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXHJcbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xyXG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxyXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXHJcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xyXG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XHJcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxyXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXHJcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXHJcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXHJcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cclxuICByZXR1cm4gZXhwb3J0cztcclxuXHJcbn0oXHJcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcclxuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxyXG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcclxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxyXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XHJcbikpO1xyXG5cclxudHJ5IHtcclxuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xyXG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xyXG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXHJcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XHJcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXHJcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXHJcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXHJcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcclxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxyXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxyXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxyXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==