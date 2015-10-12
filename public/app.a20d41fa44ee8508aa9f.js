webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(224)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (false) {
	  module.exports = require('./production');
	} else {
	  module.exports = __webpack_require__(377);
	}

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(452);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(453);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(455);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var error = this.props.error;
	
	    var _assign = _objectAssign2['default']({}, _styleJs2['default'], this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = _errorStackParser2['default'].parse(error).map(function (f, index) {
	      var link = f.fileName + ':' + f.lineNumber + ':' + f.columnNumber;
	      return _react2['default'].createElement(
	        'div',
	        { style: frame, key: index },
	        _react2['default'].createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        _react2['default'].createElement(
	          'div',
	          { style: file },
	          _react2['default'].createElement(
	            'a',
	            { href: link, style: linkToFile },
	            link
	          )
	        )
	      );
	    });
	    return _react2['default'].createElement(
	      'div',
	      { style: redbox },
	      _react2['default'].createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: _react.PropTypes.instanceOf(Error).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(_react.Component);
	
	exports['default'] = RedBox;
	module.exports = exports['default'];

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	// Signals that the router's state has changed. It should
	// never be called by the application, only as an implementation detail of
	// redux-react-router.
	'use strict';
	
	exports.__esModule = true;
	var ROUTER_DID_CHANGE = '@@reduxReactRouter/routerDidChange';
	
	exports.ROUTER_DID_CHANGE = ROUTER_DID_CHANGE;
	var HISTORY_API = '@@reduxReactRouter/historyAPI';
	exports.HISTORY_API = HISTORY_API;
	var MATCH = '@@reduxReactRouter/match';
	exports.MATCH = MATCH;
	var REPLACE_ROUTES = '@@reduxReactRouter/replaceRoutes';
	
	exports.REPLACE_ROUTES = REPLACE_ROUTES;
	var ROUTER_STATE_SELECTOR = '@@reduxReactRouter/routerStateSelector';
	
	exports.ROUTER_STATE_SELECTOR = ROUTER_STATE_SELECTOR;
	var DOES_NEED_REFRESH = '@@reduxReactRouter/doesNeedRefresh';
	exports.DOES_NEED_REFRESH = DOES_NEED_REFRESH;

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 46 */
45,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
[544, 313, 54],
/* 54 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 55 */
54,
/* 56 */
44,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
[546, 53, 44],
/* 76 */
[547, 147, 54, 44],
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(230)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.loadLatestLifelog = loadLatestLifelog;
	exports.loadBarcodesToday = loadBarcodesToday;
	
	var _middlewareApi = __webpack_require__(126);
	
	var LATEST_LIFELOG_REQUEST = 'LATEST_LIFELOG_REQUEST';
	exports.LATEST_LIFELOG_REQUEST = LATEST_LIFELOG_REQUEST;
	var LATEST_LIFELOG_SUCCESS = 'LATEST_LIFELOG_SUCCESS';
	exports.LATEST_LIFELOG_SUCCESS = LATEST_LIFELOG_SUCCESS;
	var LATEST_LIFELOG_FAILURE = 'LATEST_LIFELOG_FAILURE';
	
	exports.LATEST_LIFELOG_FAILURE = LATEST_LIFELOG_FAILURE;
	// Fetches lifelog from Github API.
	// Relies on the custom API middleware defined in ../middleware/api.js.
	function fetchLatestLifelog(userId) {
	  return _defineProperty({}, _middlewareApi.CALL_API, {
	    types: [LATEST_LIFELOG_REQUEST, LATEST_LIFELOG_SUCCESS, LATEST_LIFELOG_FAILURE],
	    endpoint: userId + '/lifelogs/latest',
	    schema: _middlewareApi.Schemas.LATESTLIFELOGS
	  });
	}
	
	// Fetches lifelog from Github API unless it is cached.
	// Relies on Redux Thunk middleware.
	
	function loadLatestLifelog(userId) {
	  // return (dispatch, getState) => {
	  return function (dispatch) {
	    // const lifelog = getState().entities.latestLifelog;
	    // if (lifelog && requiredFields.every(key => lifelog.hasOwnProperty(key))) {
	    //   return null;
	    // }
	
	    return dispatch(fetchLatestLifelog(userId));
	  };
	}
	
	var BARCODES_TODAY_REQUEST = 'BARCODES_TODAY_REQUEST';
	exports.BARCODES_TODAY_REQUEST = BARCODES_TODAY_REQUEST;
	var BARCODES_TODAY_SUCCESS = 'BARCODES_TODAY_SUCCESS';
	exports.BARCODES_TODAY_SUCCESS = BARCODES_TODAY_SUCCESS;
	var BARCODES_TODAY_FAILURE = 'BARCODES_TODAY_FAILURE';
	
	exports.BARCODES_TODAY_FAILURE = BARCODES_TODAY_FAILURE;
	// Fetches lifelog from Github API.
	// Relies on the custom API middleware defined in ../middleware/api.js.
	function fetchBarcodesToday(userId, steps, distanceM, usageTimeS) {
	  return _defineProperty({}, _middlewareApi.CALL_API, {
	    types: [BARCODES_TODAY_REQUEST, BARCODES_TODAY_SUCCESS, BARCODES_TODAY_FAILURE],
	    endpoint: userId + '/barcodes/today?steps=' + steps + '&distance_m=' + distanceM + '&usage_time_s=' + usageTimeS,
	    schema: _middlewareApi.Schemas.BARCODESTODAY
	  });
	}
	
	// Fetches lifelog from Github API unless it is cached.
	// Relies on Redux Thunk middleware.
	
	function loadBarcodesToday(userId, steps, distanceM, usageTimeS) {
	  // return (dispatch, getState) => {
	  return function (dispatch) {
	    // const lifelog = getState().entities.latestLifelog;
	    // if (lifelog && requiredFields.every(key => lifelog.hasOwnProperty(key))) {
	    //   return null;
	    // }
	
	    return dispatch(fetchBarcodesToday(userId, steps, distanceM, usageTimeS));
	  };
	}

/***/ },
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 98 */
[552, 75, 76, 97, 54, 45],
/* 99 */
[547, 149, 55, 56],
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.routerDidChange = routerDidChange;
	exports.replaceRoutes = replaceRoutes;
	exports.historyAPI = historyAPI;
	
	var _constants = __webpack_require__(38);
	
	/**
	 * Action creator for signaling that the router has changed.
	 * @private
	 * @param  {RouterState} state - New router state
	 * @return {Action} Action object
	 */
	
	function routerDidChange(state) {
	  return {
	    type: _constants.ROUTER_DID_CHANGE,
	    payload: state
	  };
	}
	
	/**
	 * Action creator that replaces the current route config
	 * @private
	 * @param {Array<Route>|ReactElement} routes - New routes
	 */
	
	function replaceRoutes(routes) {
	  return {
	    type: _constants.REPLACE_ROUTES,
	    payload: routes
	  };
	}
	
	/**
	 * Creates an action creator for calling a history API method.
	 * @param {string} method - Name of method
	 * @returns {ActionCreator} Action creator with same parameters as corresponding
	 * history method
	 */
	
	function historyAPI(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return {
	      type: _constants.HISTORY_API,
	      payload: {
	        method: method,
	        args: args
	      }
	    };
	  };
	}
	
	var pushState = historyAPI('pushState');
	exports.pushState = pushState;
	var replaceState = historyAPI('replaceState');
	exports.replaceState = replaceState;
	var setState = historyAPI('setState');
	exports.setState = setState;
	var go = historyAPI('go');
	exports.go = go;
	var goBack = historyAPI('goBack');
	exports.goBack = goBack;
	var goForward = historyAPI('goForward');
	exports.goForward = goForward;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = __webpack_require__(233)['default'];
	
	var _Promise = __webpack_require__(227)['default'];
	
	var _Object$assign = __webpack_require__(129)['default'];
	
	var _Symbol = __webpack_require__(228)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _normalizr = __webpack_require__(326);
	
	var _humps = __webpack_require__(297);
	
	__webpack_require__(299);
	
	// Extracts the next page URL from Github API response.
	function getNextPageUrl() {
	  // const link = response.headers.get('link');
	  // if (!link) {
	  //   return null;
	  // }
	
	  // const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
	  // if (!nextLink) {
	  //   return null;
	  // }
	
	  // return nextLink.split(';')[0].slice(1, -1);
	  // TODO: pagenation
	  return null;
	}
	
	var API_ROOT = 'https://lifecodebattler.herokuapp.com/api/';
	
	// Fetches an API response and normalizes the result JSON according to schema.
	// This makes every API response have the same shape, regardless of how nested it was.
	function callApi(endpoint, schema) {
	  var fullUrl = endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
	
	  return fetch(fullUrl).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json;
	    var response = _ref.response;
	
	    if (!response.ok) {
	      return _Promise.reject(json);
	    }
	
	    var camelizedJson = (0, _humps.camelizeKeys)(json);
	    var nextPageUrl = getNextPageUrl(response) || undefined;
	
	    return _Object$assign({}, (0, _normalizr.normalize)(camelizedJson, schema), { nextPageUrl: nextPageUrl });
	  });
	}
	
	var latestLifesLogSchema = new _normalizr.Schema('latestLifelogs', {
	  idAttribute: 'id'
	});
	
	var barcodesTodaySchema = new _normalizr.Schema('barcodesToday', {
	  idAttribute: 'id'
	});
	
	var barcodeSchema = new _normalizr.Schema('barcodes', {
	  idAttribute: 'objectId'
	});
	
	// Schemas for Github API responses.
	var Schemas = {
	  LATESTLIFELOGS: latestLifesLogSchema,
	  BARCODESTODAY: barcodesTodaySchema,
	  BARCODE: barcodeSchema,
	  BARCODE_ARRAY: (0, _normalizr.arrayOf)(barcodeSchema)
	};
	
	exports.Schemas = Schemas;
	// Action key that carries API call info interpreted by this Redux middleware.
	var CALL_API = _Symbol('Call API');
	
	exports.CALL_API = CALL_API;
	// A Redux middleware that interprets actions with CALL_API info specified.
	// Performs the call and promises when such actions are dispatched.
	
	exports['default'] = function (store) {
	  return function (next) {
	    return function (action) {
	      var callAPI = action[CALL_API];
	      if (typeof callAPI === 'undefined') {
	        return next(action);
	      }
	
	      var endpoint = callAPI.endpoint;
	      var schema = callAPI.schema;
	      var types = callAPI.types;
	
	      if (typeof endpoint === 'function') {
	        endpoint = endpoint(store.getState());
	      }
	
	      if (typeof endpoint !== 'string') {
	        throw new Error('Specify a string endpoint URL.');
	      }
	      if (!schema) {
	        throw new Error('Specify one of the exported Schemas.');
	      }
	      if (!Array.isArray(types) || types.length !== 3) {
	        throw new Error('Expected an array of three action types.');
	      }
	      if (!types.every(function (type) {
	        return typeof type === 'string';
	      })) {
	        throw new Error('Expected action types to be strings.');
	      }
	
	      function actionWith(data) {
	        var finalAction = _Object$assign({}, action, data);
	        delete finalAction[CALL_API];
	        return finalAction;
	      }
	
	      var _types = _slicedToArray(types, 3);
	
	      var requestType = _types[0];
	      var successType = _types[1];
	      var failureType = _types[2];
	
	      next(actionWith({ type: requestType }));
	
	      return callApi(endpoint, schema).then(function (response) {
	        return next(actionWith({
	          response: response,
	          type: successType
	        }));
	      }, function (error) {
	        return next(actionWith({
	          type: failureType,
	          error: error.message || 'Something bad happened'
	        }));
	      });
	    };
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(34);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layoutsCoreLayout = __webpack_require__(214);
	
	var _layoutsCoreLayout2 = _interopRequireDefault(_layoutsCoreLayout);
	
	var _viewsHomeView = __webpack_require__(219);
	
	var _viewsHomeView2 = _interopRequireDefault(_viewsHomeView);
	
	var _viewsPrintView = __webpack_require__(220);
	
	var _viewsPrintView2 = _interopRequireDefault(_viewsPrintView);
	
	var _viewsHistoryView = __webpack_require__(218);
	
	var _viewsHistoryView2 = _interopRequireDefault(_viewsHistoryView);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { key: 'root', component: _layoutsCoreLayout2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { key: 'home', name: 'home', path: '/home', component: _viewsHomeView2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { key: 'print', name: 'print', path: '/print', component: _viewsPrintView2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { key: 'history', name: 'history', path: '/history', component: _viewsHistoryView2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
[543, 318],
/* 148 */
[550, 54, 44],
/* 149 */
[543, 339],
/* 150 */
[544, 335, 55],
/* 151 */
97,
/* 152 */
[546, 150, 56],
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _routerStateReducer2 = __webpack_require__(524);
	
	var _routerStateReducer3 = _interopRequireDefault(_routerStateReducer2);
	
	exports.routerStateReducer = _routerStateReducer3['default'];
	
	var _ReduxRouter2 = __webpack_require__(517);
	
	var _ReduxRouter3 = _interopRequireDefault(_ReduxRouter2);
	
	exports.ReduxRouter = _ReduxRouter3['default'];
	
	var _client = __webpack_require__(518);
	
	var _client2 = _interopRequireDefault(_client);
	
	exports.reduxReactRouter = _client2['default'];
	
	var _isActive2 = __webpack_require__(520);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	exports.isActive = _isActive3['default'];
	
	var _actionCreators = __webpack_require__(125);
	
	exports.historyAPI = _actionCreators.historyAPI;
	exports.pushState = _actionCreators.pushState;
	exports.replaceState = _actionCreators.replaceState;
	exports.setState = _actionCreators.setState;
	exports.go = _actionCreators.go;
	exports.goBack = _actionCreators.goBack;
	exports.goForward = _actionCreators.goForward;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = routerStateEquals;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deepEqual = __webpack_require__(526);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _constants = __webpack_require__(38);
	
	/**
	 * Check if two router states are equal. Ignores `location.key`.
	 * @returns {Boolean}
	 */
	
	function routerStateEquals(a, b) {
	  if (!a && !b) return true;
	  if (a && !b || !a && b) return false;
	  if (a[_constants.DOES_NEED_REFRESH] || b[_constants.DOES_NEED_REFRESH]) return false;
	
	  return a.location.pathname === b.location.pathname && a.location.search === b.location.search && _deepEqual2['default'](a.location.state, b.location.state);
	}
	
	module.exports = exports['default'];

/***/ },
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = {
	  _$Barcode: {
	    displayName: 'Barcode'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/Barcode.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var Barcode = (function (_React$Component) {
	  _inherits(Barcode, _React$Component);
	
	  function Barcode() {
	    _classCallCheck(this, _Barcode);
	
	    _get(Object.getPrototypeOf(_Barcode.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Barcode, [{
	    key: 'renderCardImage',
	    value: function renderCardImage() {
	      var src = '';
	      switch (this.props.characterLv) {
	        case 1:
	          src = '../img/character-lv1.png';
	          break;
	        case 2:
	          src = '../img/character-lv2.png';
	          break;
	        case 3:
	          src = '../img/character-lv3.png';
	          break;
	        case 4:
	          src = '../img/character-lv4.png';
	          break;
	        default:
	          src = '../img/character-lv5.png';
	          break;
	      }
	
	      return _react2['default'].createElement('img', { src: src, alt: 'カードの絵柄', className: 'card-img' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'well' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'card-title row' },
	          _react2['default'].createElement('img', { src: '../img/logo-card.png', alt: 'LIFE CORD BATTLER', className: 'col-xs-8' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'trimming' },
	          this.renderCardImage()
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'card-barcode row' },
	          _react2['default'].createElement('img', { src: this.props.barcodeImgUrl, alt: 'バーコード', className: 'col-xs-offset-2 col-xs-8' })
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      barcodeImgUrl: _react2['default'].PropTypes.string,
	      characterLv: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  var _Barcode = Barcode;
	  Barcode = _wrapComponent('_$Barcode')(Barcode) || Barcode;
	  return Barcode;
	})(_react2['default'].Component);
	
	exports['default'] = Barcode;
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Barcode = __webpack_require__(205);
	
	var _Barcode2 = _interopRequireDefault(_Barcode);
	
	var _components = {
	  _$BarcodeWidget: {
	    displayName: 'BarcodeWidget'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/BarcodeWidget.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var BarcodeWidget = (function (_React$Component) {
	  _inherits(BarcodeWidget, _React$Component);
	
	  function BarcodeWidget() {
	    _classCallCheck(this, _BarcodeWidget);
	
	    _get(Object.getPrototypeOf(_BarcodeWidget.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(BarcodeWidget, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'cards' },
	        _react2['default'].createElement(_Barcode2['default'], { characterLv: this.props.level, barcodeImgUrl: this.props.barcodes[0].imageUrl })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      barcodes: _react2['default'].PropTypes.array,
	      level: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  var _BarcodeWidget = BarcodeWidget;
	  BarcodeWidget = _wrapComponent('_$BarcodeWidget')(BarcodeWidget) || BarcodeWidget;
	  return BarcodeWidget;
	})(_react2['default'].Component);
	
	exports['default'] = BarcodeWidget;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = {
	  _$HistoryItem: {
	    displayName: 'HistoryItem'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/HistoryItem.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var HistoryItem = (function (_React$Component) {
	  _inherits(HistoryItem, _React$Component);
	
	  function HistoryItem() {
	    _classCallCheck(this, _HistoryItem);
	
	    _get(Object.getPrototypeOf(_HistoryItem.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(HistoryItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'well' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'card-title row' },
	          _react2['default'].createElement('img', { src: '../img/logo-card.png', alt: 'LIFE CORD BATTLER', className: 'col-xs-8' })
	        ),
	        _react2['default'].createElement('img', { src: this.props.cardImgUrl, alt: 'カードの絵柄', className: 'card-img' }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'card-info' },
	          _react2['default'].createElement(
	            'h3',
	            { className: 'card-character' },
	            this.props.characterName
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            this.props.characterType
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'HP ',
	            this.props.characterHp
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      characterName: _react2['default'].PropTypes.string,
	      cardImgUrl: _react2['default'].PropTypes.string,
	      characterHp: _react2['default'].PropTypes.number,
	      characterType: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  var _HistoryItem = HistoryItem;
	  HistoryItem = _wrapComponent('_$HistoryItem')(HistoryItem) || HistoryItem;
	  return HistoryItem;
	})(_react2['default'].Component);
	
	exports['default'] = HistoryItem;
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	var _extends = __webpack_require__(20)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistoryItem = __webpack_require__(207);
	
	var _HistoryItem2 = _interopRequireDefault(_HistoryItem);
	
	var _components = {
	  _$HistoryWidget: {
	    displayName: 'HistoryWidget'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/HistoryWidget.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var HistoryWidget = (function (_React$Component) {
	  _inherits(HistoryWidget, _React$Component);
	
	  function HistoryWidget() {
	    _classCallCheck(this, _HistoryWidget);
	
	    _get(Object.getPrototypeOf(_HistoryWidget.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(HistoryWidget, [{
	    key: 'renderHistories',
	    value: function renderHistories() {
	      return this.props.histories.map(function (history) {
	        return _react2['default'].createElement(_HistoryItem2['default'], _extends({ key: history.id }, history));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'histories' },
	        this.renderHistories()
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      histories: _react2['default'].PropTypes.array
	    },
	    enumerable: true
	  }]);
	
	  var _HistoryWidget = HistoryWidget;
	  HistoryWidget = _wrapComponent('_$HistoryWidget')(HistoryWidget) || HistoryWidget;
	  return HistoryWidget;
	})(_react2['default'].Component);
	
	exports['default'] = HistoryWidget;
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = {
	  _$Status: {
	    displayName: 'Status'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/Status.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var Status = (function (_React$Component) {
	  _inherits(Status, _React$Component);
	
	  function Status() {
	    _classCallCheck(this, _Status);
	
	    _get(Object.getPrototypeOf(_Status.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Status, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'col-xs-6' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'lifelog-circle ' + this.props.circleClassName },
	          _react2['default'].createElement(
	            'span',
	            { className: 'lifelog-count' },
	            this.props.value.toLocaleString()
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      name: _react2['default'].PropTypes.string,
	      value: _react2['default'].PropTypes.number,
	      isLoading: _react2['default'].PropTypes.bool,
	      circleClassName: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  var _Status = Status;
	  Status = _wrapComponent('_$Status')(Status) || Status;
	  return Status;
	})(_react2['default'].Component);
	
	exports['default'] = Status;
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(34);
	
	var _components = {
	  _$StatusButtons: {
	    displayName: 'StatusButtons'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/StatusButtons.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var StatusButtons = (function (_React$Component) {
	  _inherits(StatusButtons, _React$Component);
	
	  function StatusButtons() {
	    _classCallCheck(this, _StatusButtons);
	
	    _get(Object.getPrototypeOf(_StatusButtons.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(StatusButtons, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'buttons row' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/print', id: 'barcodeBtn', className: 'btn btn-lg btn-block btn-default',
	            query: {
	              steps: this.props.latestLifelog.steps,
	              distance_m: this.props.latestLifelog.distanceM,
	              usage_time_s: this.props.latestLifelog.usageTimeS
	            } },
	          'バーコードをつくる'
	        ),
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/history', id: 'historyBtn', className: 'btn btn-lg btn-block btn-default' },
	          '履歴を見る'
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      createBarcodeHandler: _react2['default'].PropTypes.func,
	      showHistoryHandler: _react2['default'].PropTypes.func,
	      latestLifelog: _react2['default'].PropTypes.object
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      latestLifelog: {}
	    },
	    enumerable: true
	  }]);
	
	  var _StatusButtons = StatusButtons;
	  StatusButtons = _wrapComponent('_$StatusButtons')(StatusButtons) || StatusButtons;
	  return StatusButtons;
	})(_react2['default'].Component);
	
	exports['default'] = StatusButtons;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _geolib = __webpack_require__(282);
	
	var _geolib2 = _interopRequireDefault(_geolib);
	
	var _Status = __webpack_require__(209);
	
	var _Status2 = _interopRequireDefault(_Status);
	
	var _components = {
	  _$StatusWidget: {
	    displayName: 'StatusWidget'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/components/StatusWidget.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var StatusWidget = (function (_React$Component) {
	  _inherits(StatusWidget, _React$Component);
	
	  function StatusWidget() {
	    _classCallCheck(this, _StatusWidget);
	
	    _get(Object.getPrototypeOf(_StatusWidget.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(StatusWidget, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'lifelogs row' },
	        _react2['default'].createElement(_Status2['default'], { circleClassName: 'steps-circle', value: this.props.steps }),
	        _react2['default'].createElement(_Status2['default'], { circleClassName: 'distance-circle', value: _geolib2['default'].convertUnit('km', this.props.distanceM, 2) })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      steps: _react2['default'].PropTypes.number,
	      distanceM: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  var _StatusWidget = StatusWidget;
	  StatusWidget = _wrapComponent('_$StatusWidget')(StatusWidget) || StatusWidget;
	  return StatusWidget;
	})(_react2['default'].Component);
	
	exports['default'] = StatusWidget;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(47);
	
	var _reactRouter = __webpack_require__(34);
	
	var _invariant = __webpack_require__(9);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _routes = __webpack_require__(127);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _utils = __webpack_require__(217);
	
	var _reduxDevtoolsLibReact = __webpack_require__(123);
	
	var _components = {
	  _$Root: {
	    displayName: 'Root'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/containers/Root.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var Root = (function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  _createClass(Root, null, [{
	    key: 'propTypes',
	
	    // routerHistory is provided by the client bundle to determine which
	    // history to use (memory, hash, browser). routingContext, on the other hand,
	    // is provided by the server and provides a full router state.
	    value: {
	      store: _react2['default'].PropTypes.object.isRequired,
	      routerHistory: _react2['default'].PropTypes.object,
	      routingContext: _react2['default'].PropTypes.object
	    },
	    enumerable: true
	  }]);
	
	  function Root() {
	    _classCallCheck(this, _Root);
	
	    _get(Object.getPrototypeOf(_Root.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(Root, [{
	    key: 'renderDevTools',
	    value: function renderDevTools() {
	      if (false) {
	        (0, _utils.createDevToolsWindow)(this.props.store);
	        return null;
	      } else {
	        return _react2['default'].createElement(
	          _reduxDevtoolsLibReact.DebugPanel,
	          { top: true, right: true, bottom: true, key: 'debugPanel' },
	          _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: this.props.store, monitor: _reduxDevtoolsLibReact.LogMonitor })
	        );
	      }
	    }
	  }, {
	    key: 'renderRouter',
	    value: function renderRouter() {
	      (0, _invariant2['default'])(this.props.routingContext || this.props.routerHistory, '<Root /> needs either a routingContext or routerHistory to render.');
	
	      if (this.props.routingContext) {
	        return _react2['default'].createElement(_reactRouter.RoutingContext, this.props.routingContext);
	      } else {
	        return _react2['default'].createElement(
	          _reactRouter.Router,
	          { history: this.props.routerHistory },
	          _routes2['default']
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var debugTools = null;
	
	      if (true) {
	        debugTools = this.renderDevTools();
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        debugTools,
	        _react2['default'].createElement(
	          _reactRedux.Provider,
	          { store: this.props.store },
	          this.renderRouter()
	        )
	      );
	    }
	  }]);
	
	  var _Root = Root;
	  Root = _wrapComponent('_$Root')(Root) || Root;
	  return Root;
	})(_react2['default'].Component);
	
	exports['default'] = Root;
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(100);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _containersRoot = __webpack_require__(212);
	
	var _containersRoot2 = _interopRequireDefault(_containersRoot);
	
	var _stores = __webpack_require__(216);
	
	var _stores2 = _interopRequireDefault(_stores);
	
	var _historyLibCreateBrowserHistory = __webpack_require__(95);
	
	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
	
	var target = document.getElementById('root');
	var store = (0, _stores2['default'])(window.__INITIAL_STATE__);
	
	var node = _react2['default'].createElement(_containersRoot2['default'], { routerHistory: (0, _historyLibCreateBrowserHistory2['default'])(), store: store });
	_reactDom2['default'].render(node, target);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(535);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(344);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _components = {
	  _$CoreLayout: {
	    displayName: 'CoreLayout'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/layouts/CoreLayout.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var CoreLayout = (function (_React$Component) {
	  _inherits(CoreLayout, _React$Component);
	
	  _createClass(CoreLayout, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react2['default'].PropTypes.element,
	      location: _react2['default'].PropTypes.object
	    },
	    enumerable: true
	  }]);
	
	  function CoreLayout() {
	    _classCallCheck(this, _CoreLayout);
	
	    _get(Object.getPrototypeOf(_CoreLayout.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(CoreLayout, [{
	    key: 'render',
	    value: function render() {
	      var pathname = this.props.location.pathname;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'page-container' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'view-container' },
	          _react2['default'].createElement('img', { src: '../img/logo.png', alt: 'LIFECODE BATTLER', width: '100%' }),
	          _react2['default'].createElement(
	            _reactAddonsCssTransitionGroup2['default'],
	            { transitionEnterTimeout: 300, transitionLeaveTimeout: 300, transitionName: 'page-transition' },
	            _react2['default'].cloneElement(this.props.children || _react2['default'].createElement('div', null), { key: pathname })
	          )
	        )
	      );
	    }
	  }]);
	
	  var _CoreLayout = CoreLayout;
	  CoreLayout = _wrapComponent('_$CoreLayout')(CoreLayout) || CoreLayout;
	  return CoreLayout;
	})(_react2['default'].Component);
	
	exports['default'] = CoreLayout;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(231)['default'];
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _actions = __webpack_require__(88);
	
	var ActionTypes = _interopRequireWildcard(_actions);
	
	var _lodashObjectMerge = __webpack_require__(322);
	
	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);
	
	// import paginate from './paginate';
	
	var _reduxRouter = __webpack_require__(199);
	
	var _redux = __webpack_require__(39);
	
	// Updates an entity cache in response to any action with response.entities.
	function entities(state, action) {
	  if (state === undefined) state = { latestLifelogs: {}, barcodesToday: {}, barcodes: {} };
	
	  if (action.response && action.response.entities) {
	    return (0, _lodashObjectMerge2['default'])({}, state, action.response.entities);
	  }
	
	  return state;
	}
	
	// Updates error message to notify about the failed fetches.
	function errorMessage(state, action) {
	  if (state === undefined) state = null;
	  var type = action.type;
	  var error = action.error;
	
	  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
	    return null;
	  } else if (error) {
	    return action.error;
	  }
	
	  return state;
	}
	
	// Updates the pagination data for different actions.
	// const pagination = combineReducers({
	// starredByUser: paginate({
	//   mapActionToKey: action => action.login,
	//   types: [
	//     ActionTypes.STARRED_REQUEST,
	//     ActionTypes.STARRED_SUCCESS,
	//     ActionTypes.STARRED_FAILURE
	//   ]
	// }),
	// stargazersByRepo: paginate({
	//   mapActionToKey: action => action.fullName,
	//   types: [
	//     ActionTypes.STARGAZERS_REQUEST,
	//     ActionTypes.STARGAZERS_SUCCESS,
	//     ActionTypes.STARGAZERS_FAILURE
	//   ]
	// })
	// });
	
	var rootReducer = (0, _redux.combineReducers)({
	  entities: entities,
	  // pagination,
	  errorMessage: errorMessage,
	  router: _reduxRouter.routerStateReducer
	});
	
	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;
	
	var _redux = __webpack_require__(39);
	
	var _reduxRouter = __webpack_require__(199);
	
	var _reduxDevtools = __webpack_require__(197);
	
	var _historyLibCreateBrowserHistory = __webpack_require__(95);
	
	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
	
	var _reducers = __webpack_require__(215);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _routes = __webpack_require__(127);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reduxThunk = __webpack_require__(529);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _middlewareApi = __webpack_require__(126);
	
	var _middlewareApi2 = _interopRequireDefault(_middlewareApi);
	
	var createStoreWithMiddleware = undefined;
	
	if (true) {
	  createStoreWithMiddleware = (0, _redux.compose)((0, _reduxDevtools.devTools)())(_redux.createStore);
	} else {
	  createStoreWithMiddleware = _redux.createStore;
	}
	
	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default'], _middlewareApi2['default']), (0, _reduxRouter.reduxReactRouter)({ routes: _routes2['default'], createHistory: _historyLibCreateBrowserHistory2['default'] }))(createStoreWithMiddleware);
	
	function configureStore(initialState) {
	  var store = finalCreateStore(_reducers2['default'], initialState);
	
	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextRootReducer = require('../reducers/index');
	
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	  return store;
	}
	
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createConstants = createConstants;
	exports.createReducer = createReducer;
	exports.createDevToolsWindow = createDevToolsWindow;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(100);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reduxDevtoolsLibReact = __webpack_require__(123);
	
	function createConstants() {
	  for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
	    constants[_key] = arguments[_key];
	  }
	
	  return constants.reduce(function (acc, constant) {
	    acc[constant] = constant;
	    return acc;
	  }, {});
	}
	
	function createReducer(initialState, reducerMap) {
	  return function (state, action) {
	    if (state === undefined) state = initialState;
	
	    var reducer = reducerMap[action.type];
	
	    return reducer ? reducer(state, action.payload) : state;
	  };
	}
	
	function createDevToolsWindow(store) {
	  var win = window.open(null, 'redux-devtools', // give it a name so it reuses the same window
	  'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
	
	  // reload in case it's reusing the same window with the old content
	  win.location.reload();
	
	  // wait a little bit for it to reload, then render
	  setTimeout(function () {
	    // Wait for the reload to prevent:
	    // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
	    win.document.write('<div id="react-devtools-root"></div>');
	
	    _reactDom2['default'].render(_react2['default'].createElement(
	      _reduxDevtoolsLibReact.DebugPanel,
	      { top: true, right: true, bottom: true, left: true, key: 'debugPanel' },
	      _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: store, monitor: _reduxDevtoolsLibReact.LogMonitor })
	    ), win.document.getElementById('react-devtools-root'));
	  }, 10);
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(47);
	
	var _componentsHistoryWidget = __webpack_require__(208);
	
	var _componentsHistoryWidget2 = _interopRequireDefault(_componentsHistoryWidget);
	
	// function mapStateToProps(state) {
	//   // const { login } = state.router.params;
	//   const {
	//     // pagination: { starredByUser },
	//     router: {
	//       location: { query }
	//     },
	//     entities: { latestLifelogs }
	//   } = state;
	
	//   // const starredPagination = starredByUser[login] || { ids: [] };
	//   // const starredRepos = starredPagination.ids.map(id => repos[id]);
	//   // const starredRepoOwners = starredRepos.map(repo => users[repo.owner]);
	
	//   return {
	//     latestLifelog: latestLifelogs[undefined], // TODO: idを追加してもらう
	//     userId: query.id
	//   };
	// }
	
	// const mapStateToProps = (state) => ({
	var _components = {
	  _$HistoryView: {
	    displayName: 'HistoryView'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/views/HistoryView.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var mapStateToProps = function mapStateToProps() {
	  return {
	    histories: [{
	      id: 1,
	      characterName: 'レベル１',
	      characterType: '人間族',
	      characterHp: 1000,
	      cardImgUrl: '../img/character-lv1.png'
	    }, {
	      id: 2,
	      characterName: 'レベル５',
	      characterType: '人間族',
	      characterHp: 50000,
	      cardImgUrl: '../img/character-lv5.png'
	    }, {
	      id: 3,
	      characterName: 'レベル３',
	      characterType: '人間族',
	      characterHp: 3200,
	      cardImgUrl: '../img/character-lv3.png'
	    }]
	  };
	};
	
	var HistoryView = (function (_React$Component) {
	  _inherits(HistoryView, _React$Component);
	
	  function HistoryView() {
	    _classCallCheck(this, _HistoryView);
	
	    _get(Object.getPrototypeOf(_HistoryView.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(HistoryView, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'lifecode-history', className: 'container' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'History'
	        ),
	        _react2['default'].createElement(_componentsHistoryWidget2['default'], { histories: this.props.histories })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      dispatch: _react2['default'].PropTypes.func,
	      counter: _react2['default'].PropTypes.number,
	      histories: _react2['default'].PropTypes.array
	    },
	    enumerable: true
	  }]);
	
	  var _HistoryView = HistoryView;
	  HistoryView = _wrapComponent('_$HistoryView')(HistoryView) || HistoryView;
	  return HistoryView;
	})(_react2['default'].Component);
	
	exports.HistoryView = HistoryView;
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(HistoryView);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(47);
	
	var _actions = __webpack_require__(88);
	
	var _componentsStatusWidget = __webpack_require__(211);
	
	var _componentsStatusWidget2 = _interopRequireDefault(_componentsStatusWidget);
	
	var _componentsStatusButtons = __webpack_require__(210);
	
	var _componentsStatusButtons2 = _interopRequireDefault(_componentsStatusButtons);
	
	// We define mapStateToProps where we'd normally use the @connect
	// decorator so the data requirements are clear upfront, but then
	// export the decorated component after the main class definition so
	// the component can be tested w/ and w/o being connected.
	// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
	var _components = {
	  _$HomeView: {
	    displayName: 'HomeView'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/views/HomeView.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	function mapStateToProps(state) {
	  // const { login } = state.router.params;
	  var query = state.router.location.query;
	  var latestLifelogs = state.entities.latestLifelogs;
	
	  return {
	    latestLifelog: latestLifelogs[undefined], // TODO: idを追加してもらう
	    userId: query.id
	  };
	}
	
	var HomeView = (function (_React$Component) {
	  _inherits(HomeView, _React$Component);
	
	  _createClass(HomeView, null, [{
	    key: 'propTypes',
	    value: {
	      dispatch: _react2['default'].PropTypes.func,
	      loadLatestLifelog: _react2['default'].PropTypes.func,
	      latestLifelog: _react2['default'].PropTypes.object,
	      userId: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  function HomeView() {
	    _classCallCheck(this, _HomeView);
	
	    _get(Object.getPrototypeOf(_HomeView.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(HomeView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.loadLatestLifelog(this.props.userId);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.latestLifelog) {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'text-center', style: { marginTop: '2em' } },
	          _react2['default'].createElement('i', { className: 'fa fa-spinner fa-spin fa-5x' })
	        );
	      }
	      return _react2['default'].createElement(
	        'div',
	        { id: 'lifecode-home', className: 'container' },
	        _react2['default'].createElement(_componentsStatusWidget2['default'], this.props.latestLifelog),
	        _react2['default'].createElement(_componentsStatusButtons2['default'], { latestLifelog: this.props.latestLifelog })
	      );
	    }
	  }]);
	
	  var _HomeView = HomeView;
	  HomeView = _wrapComponent('_$HomeView')(HomeView) || HomeView;
	  return HomeView;
	})(_react2['default'].Component);
	
	exports.HomeView = HomeView;
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, { loadLatestLifelog: _actions.loadLatestLifelog })(HomeView);
	
	// pagination: { starredByUser },

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(17);
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(19);
	
	var _get = __webpack_require__(14)['default'];
	
	var _inherits = __webpack_require__(7)['default'];
	
	var _createClass = __webpack_require__(11)['default'];
	
	var _classCallCheck = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(47);
	
	var _actions = __webpack_require__(88);
	
	var _componentsBarcodeWidget = __webpack_require__(206);
	
	var _componentsBarcodeWidget2 = _interopRequireDefault(_componentsBarcodeWidget);
	
	var _components = {
	  _$PrintView: {
	    displayName: 'PrintView'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Users/fukuyamaken/Projects/js/lifecodebattler/node_modules/eslint-loader/index.js!/Users/fukuyamaken/Projects/js/lifecodebattler/src/views/PrintView.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var mapStateToProps = function mapStateToProps(state) {
	  var query = state.router.location.query;
	  var barcodesToday = state.entities.barcodesToday;
	
	  return {
	    barcodes: barcodesToday[undefined], // TODO: idを追加してもらう
	    userId: query.id,
	    steps: query.steps,
	    distanceM: query.distanceM,
	    usageTimeS: query.usage_time_s
	  };
	};
	
	var PrintView = (function (_React$Component) {
	  _inherits(PrintView, _React$Component);
	
	  _createClass(PrintView, null, [{
	    key: 'propTypes',
	    value: {
	      dispatch: _react2['default'].PropTypes.func,
	      counter: _react2['default'].PropTypes.number,
	      barcodes: _react2['default'].PropTypes.array,
	      loadBarcodesToday: _react2['default'].PropTypes.object,
	      userId: _react2['default'].PropTypes.number,
	      steps: _react2['default'].PropTypes.number,
	      distanceM: _react2['default'].PropTypes.number,
	      usageTimeS: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  function PrintView() {
	    _classCallCheck(this, _PrintView);
	
	    _get(Object.getPrototypeOf(_PrintView.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(PrintView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.loadBarcodesToday(this.props.userId, this.props.steps, this.props.distanceM, this.props.usageTimeS);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.barcodes) {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'text-center', style: { marginTop: '2em' } },
	          _react2['default'].createElement('i', { className: 'fa fa-spinner fa-spin fa-5x' })
	        );
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { id: 'lifecode-print', className: 'container' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'TODAY\'S CARDS'
	        ),
	        _react2['default'].createElement(_componentsBarcodeWidget2['default'], { barcodes: this.props.barcodes })
	      );
	    }
	  }]);
	
	  var _PrintView = PrintView;
	  PrintView = _wrapComponent('_$PrintView')(PrintView) || PrintView;
	  return PrintView;
	})(_react2['default'].Component);
	
	exports.PrintView = PrintView;
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, { loadBarcodesToday: _actions.loadBarcodesToday })(PrintView);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(235), __esModule: true };

/***/ },
/* 222 */,
/* 223 */,
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(240), __esModule: true };

/***/ },
/* 225 */,
/* 226 */,
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ },
/* 229 */,
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(130)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 232 */,
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(128)["default"];
	
	var _isIterable = __webpack_require__(221)["default"];
	
	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 234 */,
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(71);
	module.exports = __webpack_require__(270);

/***/ },
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(274);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 241 */,
/* 242 */,
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(277);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(278);
	module.exports = __webpack_require__(15).Promise;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(279);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 245 */,
/* 246 */,
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(23).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(65)
	  , call        = __webpack_require__(255)
	  , isArrayIter = __webpack_require__(252)
	  , anObject    = __webpack_require__(40)
	  , toLength    = __webpack_require__(267)
	  , getIterFn   = __webpack_require__(140);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(51)
	  , getNames  = __webpack_require__(12).getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23).document && document.documentElement;

/***/ },
/* 251 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(42)
	  , ITERATOR  = __webpack_require__(16)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 254 */,
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(40);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 256 */,
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(16)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 258 */,
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(12)
	  , toIObject = __webpack_require__(51);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(23)
	  , macrotask = __webpack_require__(266).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(50)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	}
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(93);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(12)
	  , SPECIES = __webpack_require__(16)('species');
	module.exports = function(C){
	  if(__webpack_require__(69) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 265 */,
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(65)
	  , invoke             = __webpack_require__(251)
	  , html               = __webpack_require__(250)
	  , cel                = __webpack_require__(247)
	  , global             = __webpack_require__(23)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(50)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(138)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 268 */,
/* 269 */,
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(89)
	  , ITERATOR  = __webpack_require__(16)('iterator')
	  , Iterators = __webpack_require__(42);
	module.exports = __webpack_require__(15).isIterable = function(it){
	  var O = Object(it);
	  return ITERATOR in O || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(51);
	
	__webpack_require__(135)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 275 */,
/* 276 */,
/* 277 */
/***/ function(module, exports) {



/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(12)
	  , LIBRARY    = __webpack_require__(91)
	  , global     = __webpack_require__(23)
	  , ctx        = __webpack_require__(65)
	  , classof    = __webpack_require__(89)
	  , $def       = __webpack_require__(31)
	  , isObject   = __webpack_require__(41)
	  , anObject   = __webpack_require__(40)
	  , aFunction  = __webpack_require__(131)
	  , strictNew  = __webpack_require__(264)
	  , forOf      = __webpack_require__(248)
	  , setProto   = __webpack_require__(136).set
	  , same       = __webpack_require__(262)
	  , species    = __webpack_require__(263)
	  , SPECIES    = __webpack_require__(16)('species')
	  , RECORD     = __webpack_require__(94)('record')
	  , asap       = __webpack_require__(260)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(69)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(261)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(70)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(15)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(257)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(12)
	  , global         = __webpack_require__(23)
	  , has            = __webpack_require__(67)
	  , SUPPORT_DESC   = __webpack_require__(69)
	  , $def           = __webpack_require__(31)
	  , $redef         = __webpack_require__(93)
	  , $fails         = __webpack_require__(66)
	  , shared         = __webpack_require__(137)
	  , setTag         = __webpack_require__(70)
	  , uid            = __webpack_require__(94)
	  , wks            = __webpack_require__(16)
	  , keyOf          = __webpack_require__(259)
	  , $names         = __webpack_require__(249)
	  , enumKeys       = __webpack_require__(132)
	  , isArray        = __webpack_require__(253)
	  , isObject       = __webpack_require__(41)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(51)
	  , createDesc     = __webpack_require__(92)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = SUPPORT_DESC && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(SUPPORT_DESC && !__webpack_require__(91)){
	    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);
	
	setter = true;
	
	$def($def.G + $def.W, {Symbol: $Symbol});
	
	$def($def.S, 'Symbol', symbolStatics);
	
	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $def($def.S + $def.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(281)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-transition-enter {\n  opacity: 0.01; }\n\n.page-transition-enter.page-transition-enter-active {\n  opacity: 1;\n  transition: opacity 500ms ease-in; }\n\n.page-transition-leave {\n  opacity: 1; }\n\n.page-transition-leave.page-transition-leave-active {\n  opacity: 0.01;\n  transition: opacity 300ms ease-in; }\n\n.loader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: black;\n  z-index: 9999; }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"], input[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n", ""]);
	
	// exports


/***/ },
/* 281 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! geolib 2.0.18 by Manuel Bieh
	* Library to provide geo functions like distance calculation,
	* conversion of decimal coordinates to sexagesimal and vice versa, etc.
	* WGS 84 (World Geodetic System 1984)
	* 
	* @author Manuel Bieh
	* @url http://www.manuelbieh.com/
	* @version 2.0.18
	* @license MIT 
	**/;(function(global, undefined) {
	
	    "use strict";
	
	    function Geolib() {}
	
	    // Constants
	    Geolib.TO_RAD = Math.PI / 180;
	    Geolib.TO_DEG = 180 / Math.PI;
	    Geolib.PI_X2 = Math.PI * 2;
	    Geolib.PI_DIV4 = Math.PI / 4;
	
	    // Setting readonly defaults
	    var geolib = Object.create(Geolib.prototype, {
	        version: {
	            value: "2.0.18"
	        },
	        radius: {
	            value: 6378137
	        },
	        minLat: {
	            value: -90
	        },
	        maxLat: {
	            value: 90
	        },
	        minLon: {
	            value: -180
	        },
	        maxLon: {
	            value: 180
	        },
	        sexagesimalPattern: {
	            value: /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,2}))?)'\s*(([0-9]{1,3}(\.([0-9]{1,2}))?)"\s*)?([NEOSW]?)$/
	        },
	        measures: {
	            value: Object.create(Object.prototype, {
	                "m" : {value: 1},
	                "km": {value: 0.001},
	                "cm": {value: 100},
	                "mm": {value: 1000},
	                "mi": {value: (1 / 1609.344)},
	                "sm": {value: (1 / 1852.216)},
	                "ft": {value: (100 / 30.48)},
	                "in": {value: (100 / 2.54)},
	                "yd": {value: (1 / 0.9144)}
	            })
	        },
	        prototype: {
	            value: Geolib.prototype
	        },
	        extend: {
	            value: function(methods, overwrite) {
	                for(var prop in methods) {
	                    if(typeof geolib.prototype[prop] === 'undefined' || overwrite === true) {
	                        if(typeof methods[prop] === 'function' && typeof methods[prop].bind === 'function') {
	                            geolib.prototype[prop] = methods[prop].bind(geolib);
	                        } else {
	                            geolib.prototype[prop] = methods[prop];
	                        }
	                    }
	                }
	            }
	        }
	    });
	
	    if (typeof(Number.prototype.toRad) === 'undefined') {
	        Number.prototype.toRad = function() {
	            return this * Geolib.TO_RAD;
	        };
	    }
	
	    if (typeof(Number.prototype.toDeg) === 'undefined') {
	        Number.prototype.toDeg = function() {
	            return this * Geolib.TO_DEG;
	        };
	    }
	
	    // Here comes the magic
	    geolib.extend({
	
	        decimal: {},
	
	        sexagesimal: {},
	
	        distance: null,
	
	        getKeys: function(point) {
	
	            // GeoJSON Array [longitude, latitude(, elevation)]
	            if(Object.prototype.toString.call(point) == '[object Array]') {
	
	                return {
	                    longitude: point.length >= 1 ? 0 : undefined,
	                    latitude: point.length >= 2 ? 1 : undefined,
	                    elevation: point.length >= 3 ? 2 : undefined
	                };
	
	            }
	
	            var getKey = function(possibleValues) {
	
	                var key;
	
	                possibleValues.every(function(val) {
	                    // TODO: check if point is an object
	                    if(typeof point != 'object') {
	                        return true;
	                    }
	                    return point.hasOwnProperty(val) ? (function() { key = val; return false; }()) : true;
	                });
	
	                return key;
	
	            };
	
	            var longitude = getKey(['lng', 'lon', 'longitude']);
	            var latitude = getKey(['lat', 'latitude']);
	            var elevation = getKey(['alt', 'altitude', 'elevation', 'elev']);
	
	            // return undefined if not at least one valid property was found
	            if(typeof latitude == 'undefined' &&
	                typeof longitude == 'undefined' &&
	                typeof elevation == 'undefined') {
	                return undefined;
	            }
	
	            return {
	                latitude: latitude,
	                longitude: longitude,
	                elevation: elevation
	            };
	
	        },
	
	        // returns latitude of a given point, converted to decimal
	        // set raw to true to avoid conversion
	        getLat: function(point, raw) {
	            return raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]);
	        },
	
	        // Alias for getLat
	        latitude: function(point) {
	            return this.getLat.call(this, point);
	        },
	
	        // returns longitude of a given point, converted to decimal
	        // set raw to true to avoid conversion
	        getLon: function(point, raw) {
	            return raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude]);
	        },
	
	        // Alias for getLon
	        longitude: function(point) {
	            return this.getLon.call(this, point);
	        },
	
	        getElev: function(point) {
	            return point[this.getKeys(point).elevation];
	        },
	
	        // Alias for getElev
	        elevation: function(point) {
	            return this.getElev.call(this, point);
	        },
	
	        coords: function(point, raw) {
	
	            var retval = {
	                latitude: raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]),
	                longitude: raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude])
	            };
	
	            var elev = point[this.getKeys(point).elevation];
	
	            if(typeof elev !== 'undefined') {
	                retval['elevation'] = elev;
	            }
	
	            return retval;
	
	        },
	
	        // Alias for coords
	        ll: function(point, raw) {
	            return this.coords.call(this, point, raw);
	        },
	
	
	        // checks if a variable contains a valid latlong object
	        validate: function(point) {
	
	            var keys = this.getKeys(point);
	
	            if(typeof keys === 'undefined' || typeof keys.latitude === 'undefined' || keys.longitude === 'undefined') {
	                return false;
	            }
	
	            var lat = point[keys.latitude];
	            var lng = point[keys.longitude];
	
	            if(typeof lat === 'undefined' || !this.isDecimal(lat) && !this.isSexagesimal(lat)) {
	                return false;
	            }
	
	            if(typeof lng === 'undefined' || !this.isDecimal(lng) && !this.isSexagesimal(lng)) {
	                return false;
	            }
	
	            lat = this.useDecimal(lat);
	            lng = this.useDecimal(lng);
	
	            if(lat < this.minLat || lat > this.maxLat || lng < this.minLon || lng > this.maxLon) {
	                return false;
	            }
	
	            return true;
	
	        },
	
	        /**
	        * Calculates geodetic distance between two points specified by latitude/longitude using
	        * Vincenty inverse formula for ellipsoids
	        * Vincenty Inverse Solution of Geodesics on the Ellipsoid (c) Chris Veness 2002-2010
	        * (Licensed under CC BY 3.0)
	        *
	        * @param    object    Start position {latitude: 123, longitude: 123}
	        * @param    object    End position {latitude: 123, longitude: 123}
	        * @param    integer   Accuracy (in meters)
	        * @return   integer   Distance (in meters)
	        */
	        getDistance: function(start, end, accuracy) {
	
	            accuracy = Math.floor(accuracy) || 1;
	
	            var s = this.coords(start);
	            var e = this.coords(end);
	
	            var a = 6378137, b = 6356752.314245,  f = 1/298.257223563;  // WGS-84 ellipsoid params
	            var L = (e['longitude']-s['longitude']).toRad();
	
	            var cosSigma, sigma, sinAlpha, cosSqAlpha, cos2SigmaM, sinSigma;
	
	            var U1 = Math.atan((1-f) * Math.tan(parseFloat(s['latitude']).toRad()));
	            var U2 = Math.atan((1-f) * Math.tan(parseFloat(e['latitude']).toRad()));
	            var sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
	            var sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);
	
	            var lambda = L, lambdaP, iterLimit = 100;
	            do {
	                var sinLambda = Math.sin(lambda), cosLambda = Math.cos(lambda);
	                sinSigma = (
	                    Math.sqrt(
	                        (
	                            cosU2 * sinLambda
	                        ) * (
	                            cosU2 * sinLambda
	                        ) + (
	                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
	                        ) * (
	                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
	                        )
	                    )
	                );
	                if (sinSigma === 0) {
	                    return geolib.distance = 0;  // co-incident points
	                }
	
	                cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
	                sigma = Math.atan2(sinSigma, cosSigma);
	                sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
	                cosSqAlpha = 1 - sinAlpha * sinAlpha;
	                cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
	
	                if (isNaN(cos2SigmaM)) {
	                    cos2SigmaM = 0;  // equatorial line: cosSqAlpha=0 (§6)
	                }
	                var C = (
	                    f / 16 * cosSqAlpha * (
	                        4 + f * (
	                            4 - 3 * cosSqAlpha
	                        )
	                    )
	                );
	                lambdaP = lambda;
	                lambda = (
	                    L + (
	                        1 - C
	                    ) * f * sinAlpha * (
	                        sigma + C * sinSigma * (
	                            cos2SigmaM + C * cosSigma * (
	                                -1 + 2 * cos2SigmaM * cos2SigmaM
	                            )
	                        )
	                    )
	                );
	
	            } while (Math.abs(lambda-lambdaP) > 1e-12 && --iterLimit>0);
	
	            if (iterLimit === 0) {
	                return NaN;  // formula failed to converge
	            }
	
	            var uSq = (
	                cosSqAlpha * (
	                    a * a - b * b
	                ) / (
	                    b*b
	                )
	            );
	
	            var A = (
	                1 + uSq / 16384 * (
	                    4096 + uSq * (
	                        -768 + uSq * (
	                            320 - 175 * uSq
	                        )
	                    )
	                )
	            );
	
	            var B = (
	                uSq / 1024 * (
	                    256 + uSq * (
	                        -128 + uSq * (
	                            74-47 * uSq
	                        )
	                    )
	                )
	            );
	
	            var deltaSigma = (
	                B * sinSigma * (
	                    cos2SigmaM + B / 4 * (
	                        cosSigma * (
	                            -1 + 2 * cos2SigmaM * cos2SigmaM
	                        ) -B / 6 * cos2SigmaM * (
	                            -3 + 4 * sinSigma * sinSigma
	                        ) * (
	                            -3 + 4 * cos2SigmaM * cos2SigmaM
	                        )
	                    )
	                )
	            );
	
	            var distance = b * A * (sigma - deltaSigma);
	
	            distance = distance.toFixed(3); // round to 1mm precision
	
	            //if (start.hasOwnProperty(elevation) && end.hasOwnProperty(elevation)) {
	            if (typeof this.elevation(start) !== 'undefined' && typeof this.elevation(end) !== 'undefined') {
	                var climb = Math.abs(this.elevation(start) - this.elevation(end));
	                distance = Math.sqrt(distance * distance + climb * climb);
	            }
	
	            return this.distance = Math.floor(
	                Math.round(distance / accuracy) * accuracy
	            );
	
	            /*
	            // note: to return initial/final bearings in addition to distance, use something like:
	            var fwdAz = Math.atan2(cosU2*sinLambda,  cosU1*sinU2-sinU1*cosU2*cosLambda);
	            var revAz = Math.atan2(cosU1*sinLambda, -sinU1*cosU2+cosU1*sinU2*cosLambda);
	
	            return { distance: s, initialBearing: fwdAz.toDeg(), finalBearing: revAz.toDeg() };
	            */
	
	        },
	
	
	        /**
	        * Calculates the distance between two spots.
	        * This method is more simple but also far more inaccurate
	        *
	        * @param    object    Start position {latitude: 123, longitude: 123}
	        * @param    object    End position {latitude: 123, longitude: 123}
	        * @param    integer   Accuracy (in meters)
	        * @return   integer   Distance (in meters)
	        */
	        getDistanceSimple: function(start, end, accuracy) {
	
	            accuracy = Math.floor(accuracy) || 1;
	
	            var distance =
	                Math.round(
	                    Math.acos(
	                        Math.sin(
	                            this.latitude(end).toRad()
	                        ) *
	                        Math.sin(
	                            this.latitude(start).toRad()
	                        ) +
	                        Math.cos(
	                            this.latitude(end).toRad()
	                        ) *
	                        Math.cos(
	                            this.latitude(start).toRad()
	                        ) *
	                        Math.cos(
	                            this.longitude(start).toRad() - this.longitude(end).toRad()
	                        )
	                    ) * this.radius
	                );
	
	            return geolib.distance = Math.floor(Math.round(distance/accuracy)*accuracy);
	
	        },
	
	
	    /**
	        * Calculates the center of a collection of geo coordinates
	        *
	        * @param        array       Collection of coords [{latitude: 51.510, longitude: 7.1321}, {latitude: 49.1238, longitude: "8° 30' W"}, ...]
	        * @return       object      {latitude: centerLat, longitude: centerLng}
	        */
	        getCenter: function(coords) {
	
	            if (!coords.length) {
	                return false;
	            }
	
	            var X = 0.0;
	            var Y = 0.0;
	            var Z = 0.0;
	            var lat, lon, hyp;
	
	            coords.forEach(function(coord) {
	
	                lat = coord.latitude * Geolib.TO_RAD;
	                lon = coord.longitude * Geolib.TO_RAD;
	
	                X += Math.cos(lat) * Math.cos(lon);
	                Y += Math.cos(lat) * Math.sin(lon);
	                Z += Math.sin(lat);
	
	            });
	
	            var nb_coords = coords.length;
	            X = X / nb_coords;
	            Y = Y / nb_coords;
	            Z = Z / nb_coords;
	
	            lon = Math.atan2(Y, X);
	            hyp = Math.sqrt(X * X + Y * Y);
	            lat = Math.atan2(Z, hyp);
	
	            return {
	                latitude: (lat * Geolib.TO_DEG).toFixed(6),
	                longitude: (lon * Geolib.TO_DEG).toFixed(6)
	            };
	
	        },
	
	
	        /**
	        * Gets the max and min, latitude, longitude, and elevation (if provided).
	        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        * @return   object      {maxLat: maxLat,
	        *                     minLat: minLat
	        *                     maxLng: maxLng,
	        *                     minLng: minLng,
	        *                     maxElev: maxElev,
	        *                     minElev: minElev}
	        */
	        getBounds: function(coords) {
	
	            if (!coords.length) {
	                return false;
	            }
	
	            var useElevation = this.elevation(coords[0]);
	
	            var stats = {
	                maxLat: -Infinity,
	                minLat: Infinity,
	                maxLng: -Infinity,
	                minLng: Infinity
	            };
	
	            if (typeof useElevation != 'undefined') {
	                stats.maxElev = 0;
	                stats.minElev = Infinity;
	            }
	
	            for (var i = 0, l = coords.length; i < l; ++i) {
	
	                stats.maxLat = Math.max(this.latitude(coords[i]), stats.maxLat);
	                stats.minLat = Math.min(this.latitude(coords[i]), stats.minLat);
	                stats.maxLng = Math.max(this.longitude(coords[i]), stats.maxLng);
	                stats.minLng = Math.min(this.longitude(coords[i]), stats.minLng);
	
	                if (useElevation) {
	                    stats.maxElev = Math.max(this.elevation(coords[i]), stats.maxElev);
	                    stats.minElev = Math.min(this.elevation(coords[i]), stats.minElev);
	                }
	
	            }
	
	            return stats;
	
	        },
	
	
	        /**
	        * Computes the bounding coordinates of all points on the surface
	        * of the earth less than or equal to the specified great circle
	        * distance.
	        *
	        * @param object Point position {latitude: 123, longitude: 123}
	        * @param number Distance (in meters).
	        * @return array Collection of two points defining the SW and NE corners.
	        */
	        getBoundsOfDistance: function(point, distance) {
	
	            var latitude = this.latitude(point);
	            var longitude = this.longitude(point);
	
	            var radLat = latitude.toRad();
	            var radLon = longitude.toRad();
	
	            var radDist = distance / this.radius;
	            var minLat = radLat - radDist;
	            var maxLat = radLat + radDist;
	
	            var MAX_LAT_RAD = this.maxLat.toRad();
	            var MIN_LAT_RAD = this.minLat.toRad();
	            var MAX_LON_RAD = this.maxLon.toRad();
	            var MIN_LON_RAD = this.minLon.toRad();
	
	            var minLon;
	            var maxLon;
	
	            if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {
	
	                var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
	                minLon = radLon - deltaLon;
	
	                if (minLon < MIN_LON_RAD) {
	                    minLon += Geolib.PI_X2;
	                }
	
	                maxLon = radLon + deltaLon;
	
	                if (maxLon > MAX_LON_RAD) {
	                    maxLon -= Geolib.PI_X2;
	                }
	
	            } else {
	                // A pole is within the distance.
	                minLat = Math.max(minLat, MIN_LAT_RAD);
	                maxLat = Math.min(maxLat, MAX_LAT_RAD);
	                minLon = MIN_LON_RAD;
	                maxLon = MAX_LON_RAD;
	            }
	
	            return [
	                // Southwest
	                {
	                    latitude: minLat.toDeg(),
	                    longitude: minLon.toDeg()
	                },
	                // Northeast
	                {
	                    latitude: maxLat.toDeg(),
	                    longitude: maxLon.toDeg()
	                }
	            ];
	
	        },
	
	
	        /**
	        * Checks whether a point is inside of a polygon or not.
	        * Note that the polygon coords must be in correct order!
	        *
	        * @param        object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
	        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        * @return       bool        true if the coordinate is inside the given polygon
	        */
	        isPointInside: function(latlng, coords) {
	
	            for(var c = false, i = -1, l = coords.length, j = l - 1; ++i < l; j = i) {
	
	                if(
	                    (
	                        (this.longitude(coords[i]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[j])) ||
	                        (this.longitude(coords[j]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[i]))
	                    ) &&
	                    (
	                        this.latitude(latlng) < (this.latitude(coords[j]) - this.latitude(coords[i])) *
	                        (this.longitude(latlng) - this.longitude(coords[i])) /
	                        (this.longitude(coords[j]) - this.longitude(coords[i])) +
	                        this.latitude(coords[i])
	                    )
	                ) {
	                    c = !c;
	                }
	
	            }
	
	            return c;
	
	        },
	
	       /**
	        * Pre calculate the polygon coords, to speed up the point inside check.
	        * Use this function before calling isPointInsideWithPreparedPolygon()
	        * @see          Algorythm from http://alienryderflex.com/polygon/
	        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        */
	        preparePolygonForIsPointInsideOptimized: function(coords) {
	
	            for(var i = 0, j = coords.length-1; i < coords.length; i++) {
	
	            if(this.longitude(coords[j]) === this.longitude(coords[i])) {
	
	                    coords[i].constant = this.latitude(coords[i]);
	                    coords[i].multiple = 0;
	
	                } else {
	
	                    coords[i].constant = this.latitude(coords[i]) - (
	                        this.longitude(coords[i]) * this.latitude(coords[j])
	                    ) / (
	                        this.longitude(coords[j]) - this.longitude(coords[i])
	                    ) + (
	                        this.longitude(coords[i])*this.latitude(coords[i])
	                    ) / (
	                        this.longitude(coords[j])-this.longitude(coords[i])
	                    );
	
	                    coords[i].multiple = (
	                        this.latitude(coords[j])-this.latitude(coords[i])
	                    ) / (
	                        this.longitude(coords[j])-this.longitude(coords[i])
	                    );
	
	                }
	
	                j=i;
	
	            }
	
	        },
	
	      /**
	       * Checks whether a point is inside of a polygon or not.
	       * "This is useful if you have many points that need to be tested against the same (static) polygon."
	       * Please call the function preparePolygonForIsPointInsideOptimized() with the same coords object before using this function.
	       * Note that the polygon coords must be in correct order!
	       *
	       * @see          Algorythm from http://alienryderflex.com/polygon/
	       *
	       * @param     object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
	       * @param     array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	       * @return        bool        true if the coordinate is inside the given polygon
	       */
	        isPointInsideWithPreparedPolygon: function(point, coords) {
	
	            var flgPointInside = false,
	            y = this.longitude(point),
	            x = this.latitude(point);
	
	            for(var i = 0, j = coords.length-1; i < coords.length; i++) {
	
	                if ((this.longitude(coords[i]) < y && this.longitude(coords[j]) >=y ||
	                    this.longitude(coords[j]) < y && this.longitude(coords[i]) >= y)) {
	
	                    flgPointInside^=(y*coords[i].multiple+coords[i].constant < x);
	
	                }
	
	                j=i;
	
	            }
	
	            return flgPointInside;
	
	        },
	
	
	        /**
	        * Shortcut for geolib.isPointInside()
	        */
	        isInside: function() {
	            return this.isPointInside.apply(this, arguments);
	        },
	
	
	        /**
	        * Checks whether a point is inside of a circle or not.
	        *
	        * @param        object      coordinate to check (e.g. {latitude: 51.5023, longitude: 7.3815})
	        * @param        object      coordinate of the circle's center (e.g. {latitude: 51.4812, longitude: 7.4025})
	        * @param        integer     maximum radius in meters
	        * @return       bool        true if the coordinate is within the given radius
	        */
	        isPointInCircle: function(latlng, center, radius) {
	            return this.getDistance(latlng, center) < radius;
	        },
	
	
	        /**
	        * Shortcut for geolib.isPointInCircle()
	        */
	        withinRadius: function() {
	            return this.isPointInCircle.apply(this, arguments);
	        },
	
	
	        /**
	        * Gets rhumb line bearing of two points. Find out about the difference between rhumb line and
	        * great circle bearing on Wikipedia. It's quite complicated. Rhumb line should be fine in most cases:
	        *
	        * http://en.wikipedia.org/wiki/Rhumb_line#General_and_mathematical_description
	        *
	        * Function heavily based on Doug Vanderweide's great PHP version (licensed under GPL 3.0)
	        * http://www.dougv.com/2009/07/13/calculating-the-bearing-and-compass-rose-direction-between-two-latitude-longitude-coordinates-in-php/
	        *
	        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
	        * @param        object      destination coordinate
	        * @return       integer     calculated bearing
	        */
	        getRhumbLineBearing: function(originLL, destLL) {
	
	            // difference of longitude coords
	            var diffLon = this.longitude(destLL).toRad() - this.longitude(originLL).toRad();
	
	            // difference latitude coords phi
	            var diffPhi = Math.log(
	                Math.tan(
	                    this.latitude(destLL).toRad() / 2 + Geolib.PI_DIV4
	                ) /
	                Math.tan(
	                    this.latitude(originLL).toRad() / 2 + Geolib.PI_DIV4
	                )
	            );
	
	            // recalculate diffLon if it is greater than pi
	            if(Math.abs(diffLon) > Math.PI) {
	                if(diffLon > 0) {
	                    diffLon = (Geolib.PI_X2 - diffLon) * -1;
	                }
	                else {
	                    diffLon = Geolib.PI_X2 + diffLon;
	                }
	            }
	
	            //return the angle, normalized
	            return (Math.atan2(diffLon, diffPhi).toDeg() + 360) % 360;
	
	        },
	
	
	        /**
	        * Gets great circle bearing of two points. See description of getRhumbLineBearing for more information
	        *
	        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
	        * @param        object      destination coordinate
	        * @return       integer     calculated bearing
	        */
	        getBearing: function(originLL, destLL) {
	
	            destLL['latitude'] = this.latitude(destLL);
	            destLL['longitude'] = this.longitude(destLL);
	            originLL['latitude'] = this.latitude(originLL);
	            originLL['longitude'] = this.longitude(originLL);
	
	            var bearing = (
	                (
	                    Math.atan2(
	                        Math.sin(
	                            destLL['longitude'].toRad() -
	                            originLL['longitude'].toRad()
	                        ) *
	                        Math.cos(
	                            destLL['latitude'].toRad()
	                        ),
	                        Math.cos(
	                            originLL['latitude'].toRad()
	                        ) *
	                        Math.sin(
	                            destLL['latitude'].toRad()
	                        ) -
	                        Math.sin(
	                            originLL['latitude'].toRad()
	                        ) *
	                        Math.cos(
	                            destLL['latitude'].toRad()
	                        ) *
	                        Math.cos(
	                            destLL['longitude'].toRad() - originLL['longitude'].toRad()
	                        )
	                    )
	                ).toDeg() + 360
	            ) % 360;
	
	            return bearing;
	
	        },
	
	
	        /**
	        * Gets the compass direction from an origin coordinate to a destination coordinate.
	        *
	        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
	        * @param        object      destination coordinate
	        * @param        string      Bearing mode. Can be either circle or rhumbline
	        * @return       object      Returns an object with a rough (NESW) and an exact direction (NNE, NE, ENE, E, ESE, etc).
	        */
	        getCompassDirection: function(originLL, destLL, bearingMode) {
	
	            var direction;
	            var bearing;
	
	            if(bearingMode == 'circle') {
	                // use great circle bearing
	                bearing = this.getBearing(originLL, destLL);
	            } else {
	                // default is rhumb line bearing
	                bearing = this.getRhumbLineBearing(originLL, destLL);
	            }
	
	            switch(Math.round(bearing/22.5)) {
	                case 1:
	                    direction = {exact: "NNE", rough: "N"};
	                    break;
	                case 2:
	                    direction = {exact: "NE", rough: "N"};
	                    break;
	                case 3:
	                    direction = {exact: "ENE", rough: "E"};
	                    break;
	                case 4:
	                    direction = {exact: "E", rough: "E"};
	                    break;
	                case 5:
	                    direction = {exact: "ESE", rough: "E"};
	                    break;
	                case 6:
	                    direction = {exact: "SE", rough: "E"};
	                    break;
	                case 7:
	                    direction = {exact: "SSE", rough: "S"};
	                    break;
	                case 8:
	                    direction = {exact: "S", rough: "S"};
	                    break;
	                case 9:
	                    direction = {exact: "SSW", rough: "S"};
	                    break;
	                case 10:
	                    direction = {exact: "SW", rough: "S"};
	                    break;
	                case 11:
	                    direction = {exact: "WSW", rough: "W"};
	                    break;
	                case 12:
	                    direction = {exact: "W", rough: "W"};
	                    break;
	                case 13:
	                    direction = {exact: "WNW", rough: "W"};
	                    break;
	                case 14:
	                    direction = {exact: "NW", rough: "W"};
	                    break;
	                case 15:
	                    direction = {exact: "NNW", rough: "N"};
	                    break;
	                default:
	                    direction = {exact: "N", rough: "N"};
	            }
	
	            direction['bearing'] = bearing;
	            return direction;
	
	        },
	
	
	        /**
	        * Shortcut for getCompassDirection
	        */
	        getDirection: function(originLL, destLL, bearingMode) {
	            return this.getCompassDirection.apply(this, arguments);
	        },
	
	
	        /**
	        * Sorts an array of coords by distance from a reference coordinate
	        *
	        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
	        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        * @return       array       ordered array
	        */
	        orderByDistance: function(latlng, coords) {
	
	            var coordsArray = [];
	
	            for(var coord in coords) {
	
	                var d = this.getDistance(latlng, coords[coord]);
	
	                coordsArray.push({
	                    key: coord,
	                    latitude: this.latitude(coords[coord]),
	                    longitude: this.longitude(coords[coord]),
	                    distance: d
	                });
	
	            }
	
	            return coordsArray.sort(function(a, b) { return a.distance - b.distance; });
	
	        },
	
	
	        /**
	        * Finds the nearest coordinate to a reference coordinate
	        *
	        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
	        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        * @return       array       ordered array
	        */
	        findNearest: function(latlng, coords, offset, limit) {
	
	            offset = offset || 0;
	            limit = limit || 1;
	            var ordered = this.orderByDistance(latlng, coords);
	
	            if(limit === 1) {
	                return ordered[offset];
	            } else {
	                return ordered.splice(offset, limit);
	            }
	
	        },
	
	
	        /**
	        * Calculates the length of a given path
	        *
	        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
	        * @return       integer     length of the path (in meters)
	        */
	        getPathLength: function(coords) {
	
	            var dist = 0;
	            var last;
	
	            for (var i = 0, l = coords.length; i < l; ++i) {
	                if(last) {
	                    //console.log(coords[i], last, this.getDistance(coords[i], last));
	                    dist += this.getDistance(this.coords(coords[i]), last);
	                }
	                last = this.coords(coords[i]);
	            }
	
	            return dist;
	
	        },
	
	
	        /**
	        * Calculates the speed between to points within a given time span.
	        *
	        * @param        object      coords with javascript timestamp {latitude: 51.5143, longitude: 7.4138, time: 1360231200880}
	        * @param        object      coords with javascript timestamp {latitude: 51.5502, longitude: 7.4323, time: 1360245600460}
	        * @param        object      options (currently "unit" is the only option. Default: km(h));
	        * @return       float       speed in unit per hour
	        */
	        getSpeed: function(start, end, options) {
	
	            var unit = options && options.unit || 'km';
	
	            if(unit == 'mph') {
	                unit = 'mi';
	            } else if(unit == 'kmh') {
	                unit = 'km';
	            }
	
	            var distance = geolib.getDistance(start, end);
	            var time = ((end.time*1)/1000) - ((start.time*1)/1000);
	            var mPerHr = (distance/time)*3600;
	            var speed = Math.round(mPerHr * this.measures[unit] * 10000)/10000;
	            return speed;
	
	        },
	
	
	        /**
	        * Converts a distance from meters to km, mm, cm, mi, ft, in or yd
	        *
	        * @param        string      Format to be converted in
	        * @param        float       Distance in meters
	        * @param        float       Decimal places for rounding (default: 4)
	        * @return       float       Converted distance
	        */
	        convertUnit: function(unit, distance, round) {
	
	            if(distance === 0) {
	
	                return 0;
	
	            } else if(typeof distance === 'undefined') {
	
	                if(this.distance === null) {
	                    throw new Error('No distance was given');
	                } else if(this.distance === 0) {
	                    return 0;
	                } else {
	                    distance = this.distance;
	                }
	
	            }
	
	            unit = unit || 'm';
	            round = (null == round ? 4 : round);
	
	            if(typeof this.measures[unit] !== 'undefined') {
	                return this.round(distance * this.measures[unit], round);
	            } else {
	                throw new Error('Unknown unit for conversion.');
	            }
	
	        },
	
	
	        /**
	        * Checks if a value is in decimal format or, if neccessary, converts to decimal
	        *
	        * @param        mixed       Value(s) to be checked/converted (array of latlng objects, latlng object, sexagesimal string, float)
	        * @return       float       Input data in decimal format
	        */
	        useDecimal: function(value) {
	
	            if(Object.prototype.toString.call(value) === '[object Array]') {
	
	                var geolib = this;
	
	                value = value.map(function(val) {
	
	                    //if(!isNaN(parseFloat(val))) {
	                    if(geolib.isDecimal(val)) {
	
	                        return geolib.useDecimal(val);
	
	                    } else if(typeof val == 'object') {
	
	                        if(geolib.validate(val)) {
	
	                            return geolib.coords(val);
	
	                        } else {
	
	                            for(var prop in val) {
	                                val[prop] = geolib.useDecimal(val[prop]);
	                            }
	
	                            return val;
	
	                        }
	
	                    } else if(geolib.isSexagesimal(val)) {
	
	                        return geolib.sexagesimal2decimal(val);
	
	                    } else {
	
	                        return val;
	
	                    }
	
	                });
	
	                return value;
	
	            } else if(typeof value === 'object' && this.validate(value)) {
	
	                return this.coords(value);
	
	            } else if(typeof value === 'object') {
	
	                for(var prop in value) {
	                    value[prop] = this.useDecimal(value[prop]);
	                }
	
	                return value;
	
	            }
	
	
	            if (this.isDecimal(value)) {
	
	                return parseFloat(value);
	
	            } else if(this.isSexagesimal(value) === true) {
	
	                return parseFloat(this.sexagesimal2decimal(value));
	
	            }
	
	            throw new Error('Unknown format.');
	
	        },
	
	        /**
	        * Converts a decimal coordinate value to sexagesimal format
	        *
	        * @param        float       decimal
	        * @return       string      Sexagesimal value (XX° YY' ZZ")
	        */
	        decimal2sexagesimal: function(dec) {
	
	            if (dec in this.sexagesimal) {
	                return this.sexagesimal[dec];
	            }
	
	            var tmp = dec.toString().split('.');
	
	            var deg = Math.abs(tmp[0]);
	            var min = ('0.' + (tmp[1] || 0))*60;
	            var sec = min.toString().split('.');
	
	            min = Math.floor(min);
	            sec = (('0.' + (sec[1] || 0)) * 60).toFixed(2);
	
	            this.sexagesimal[dec] = (deg + '° ' + min + "' " + sec + '"');
	
	            return this.sexagesimal[dec];
	
	        },
	
	
	        /**
	        * Converts a sexagesimal coordinate to decimal format
	        *
	        * @param        float       Sexagesimal coordinate
	        * @return       string      Decimal value (XX.XXXXXXXX)
	        */
	        sexagesimal2decimal: function(sexagesimal) {
	
	            if (sexagesimal in this.decimal) {
	                return this.decimal[sexagesimal];
	            }
	
	            var regEx = new RegExp(this.sexagesimalPattern);
	            var data = regEx.exec(sexagesimal);
	            var min = 0, sec = 0;
	
	            if(data) {
	                min = parseFloat(data[2]/60);
	                sec = parseFloat(data[4]/3600) || 0;
	            }
	
	            var dec = ((parseFloat(data[1]) + min + sec)).toFixed(8);
	            //var   dec = ((parseFloat(data[1]) + min + sec));
	
	                // South and West are negative decimals
	                dec = (data[7] == 'S' || data[7] == 'W') ? parseFloat(-dec) : parseFloat(dec);
	                //dec = (data[7] == 'S' || data[7] == 'W') ? -dec : dec;
	
	            this.decimal[sexagesimal] = dec;
	
	            return dec;
	
	        },
	
	
	        /**
	        * Checks if a value is in decimal format
	        *
	        * @param        string      Value to be checked
	        * @return       bool        True if in sexagesimal format
	        */
	        isDecimal: function(value) {
	
	            value = value.toString().replace(/\s*/, '');
	
	            // looks silly but works as expected
	            // checks if value is in decimal format
	            return (!isNaN(parseFloat(value)) && parseFloat(value) == value);
	
	        },
	
	
	        /**
	        * Checks if a value is in sexagesimal format
	        *
	        * @param        string      Value to be checked
	        * @return       bool        True if in sexagesimal format
	        */
	        isSexagesimal: function(value) {
	
	            value = value.toString().replace(/\s*/, '');
	
	            return this.sexagesimalPattern.test(value);
	
	        },
	
	        round: function(value, n) {
	            var decPlace = Math.pow(10, n);
	            return Math.round(value * decPlace)/decPlace;
	        }
	
	    });
	
	    // Node module
	    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	
	        global.geolib = module.exports = geolib;
	
	    // AMD module
	    } else if (true) {
	
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return geolib;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	    // we're in a browser
	    } else {
	
	        global.geolib = geolib;
	
	    }
	
	}(this));


/***/ },
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// =========
	// = humps =
	// =========
	// version 0.7.0
	// Underscore-to-camelCase converter (and vice versa)
	// for strings and object keys
	
	// humps is copyright © 2012+ Dom Christie
	// Released under the MIT license.
	
	
	;(function(global) {
	
	  var _processKeys = function(convert, obj, options) {
	    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj)) {
	      return obj;
	    }
	
	    var output,
	        i = 0,
	        l = 0;
	
	    if(_isArray(obj)) {
	      output = [];
	      for(l=obj.length; i<l; i++) {
	        output.push(_processKeys(convert, obj[i], options));
	      }
	    }
	    else {
	      output = {};
	      for(var key in obj) {
	        if(obj.hasOwnProperty(key)) {
	          output[convert(key, options)] = _processKeys(convert, obj[key], options);
	        }
	      }
	    }
	    return output;
	  };
	
	  // String conversion methods
	
	  var separateWords = function(string, options) {
	    options = options || {};
	    var separator = options.separator || '_';
	    var split = options.split || /(?=[A-Z])/;
	
	    return string.split(split).join(separator);
	  };
	
	  var camelize = function(string) {
	    if (_isNumerical(string)) {
	      return string;
	    }
	    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
	      return chr ? chr.toUpperCase() : '';
	    });
	    // Ensure 1st char is always lowercase
	    return string.substr(0, 1).toLowerCase() + string.substr(1);
	  };
	
	  var pascalize = function(string) {
	    var camelized = camelize(string);
	    // Ensure 1st char is always uppercase
	    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
	  };
	
	  var decamelize = function(string, options) {
	    return separateWords(string, options).toLowerCase();
	  };
	
	  // Utilities
	  // Taken from Underscore.js
	
	  var toString = Object.prototype.toString;
	
	  var _isObject = function(obj) {
	    return obj === Object(obj);
	  };
	  var _isArray = function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };
	  var _isDate = function(obj) {
	    return toString.call(obj) == '[object Date]';
	  };
	  var _isRegExp = function(obj) {
	    return toString.call(obj) == '[object RegExp]';
	  };
	  var _isBoolean = function(obj) {
	    return toString.call(obj) == '[object Boolean]';
	  };
	
	  // Performant way to determine if obj coerces to a number
	  var _isNumerical = function(obj) {
	    obj = obj - 0;
	    return obj === obj;
	  };
	
	  var humps = {
	    camelize: camelize,
	    decamelize: decamelize,
	    pascalize: pascalize,
	    depascalize: decamelize,
	    camelizeKeys: function(object) {
	      return _processKeys(camelize, object);
	    },
	    decamelizeKeys: function(object, options) {
	      return _processKeys(decamelize, object, options);
	    },
	    pascalizeKeys: function(object) {
	      return _processKeys(pascalize, object);
	    },
	    depascalizeKeys: function () {
	      return this.decamelizeKeys.apply(this, arguments);
	    }
	  };
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (humps), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module.exports) {
	    module.exports = humps;
	  } else {
	    global.humps = humps;
	  }
	
	})(this);


/***/ },
/* 298 */,
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(300);
	module.exports = self.fetch.bind(self);


/***/ },
/* 300 */
/***/ function(module, exports) {

	(function() {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(url, options) {
	    options = options || {}
	    this.url = url
	
	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }
	
	  Body.call(Response.prototype)
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function(input, init) {
	    // TODO: Request constructor should accept input, init
	    var request
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input
	    } else {
	      request = new Request(input, init)
	    }
	
	    return new Promise(function(resolve, reject) {
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return;
	      }
	
	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


/***/ },
/* 301 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 302 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 303 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 304 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(312);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(305),
	    keysIn = __webpack_require__(98);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(303),
	    baseMergeDeep = __webpack_require__(308),
	    isArray = __webpack_require__(76),
	    isArrayLike = __webpack_require__(53),
	    isObject = __webpack_require__(45),
	    isObjectLike = __webpack_require__(44),
	    isTypedArray = __webpack_require__(148),
	    keys = __webpack_require__(321);
	
	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);
	
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}
	
	module.exports = baseMerge;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(302),
	    isArguments = __webpack_require__(75),
	    isArray = __webpack_require__(76),
	    isArrayLike = __webpack_require__(53),
	    isPlainObject = __webpack_require__(319),
	    isTypedArray = __webpack_require__(148),
	    toPlainObject = __webpack_require__(320);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];
	
	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;
	
	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);
	
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}
	
	module.exports = baseMergeDeep;


/***/ },
/* 309 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 310 */
[541, 323],
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(310),
	    isIterateeCall = __webpack_require__(314),
	    restParam = __webpack_require__(301);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(316);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 313 */
[542, 309],
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(53),
	    isIndex = __webpack_require__(97),
	    isObject = __webpack_require__(45);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 315 */
[545, 75, 76, 97, 54, 98],
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 317 */
[548, 45],
/* 318 */
[549, 317, 44],
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(306),
	    isArguments = __webpack_require__(75),
	    isObjectLike = __webpack_require__(44);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(304),
	    keysIn = __webpack_require__(98);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 321 */
[551, 147, 53, 45, 315],
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(307),
	    createAssigner = __webpack_require__(311);
	
	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it's invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);
	
	module.exports = merge;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashLangIsObject = __webpack_require__(46);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var ArraySchema = (function () {
	  function ArraySchema(itemSchema) {
	    _classCallCheck(this, ArraySchema);
	
	    if (!_lodashLangIsObject2['default'](itemSchema)) {
	      throw new Error('ArraySchema requires item schema to be an object.');
	    }
	
	    this._itemSchema = itemSchema;
	  }
	
	  ArraySchema.prototype.getItemSchema = function getItemSchema() {
	    return this._itemSchema;
	  };
	
	  return ArraySchema;
	})();
	
	exports['default'] = ArraySchema;
	module.exports = exports['default'];

/***/ },
/* 325 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EntitySchema = (function () {
	  function EntitySchema(key) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, EntitySchema);
	
	    if (!key || typeof key !== 'string') {
	      throw new Error('A string non-empty key is required');
	    }
	
	    this._key = key;
	
	    var idAttribute = options.idAttribute || 'id';
	    this._getId = typeof idAttribute === 'function' ? idAttribute : function (x) {
	      return x[idAttribute];
	    };
	  }
	
	  EntitySchema.prototype.getKey = function getKey() {
	    return this._key;
	  };
	
	  EntitySchema.prototype.getId = function getId(entity) {
	    return this._getId(entity);
	  };
	
	  EntitySchema.prototype.define = function define(nestedSchema) {
	    for (var key in nestedSchema) {
	      if (nestedSchema.hasOwnProperty(key)) {
	        this[key] = nestedSchema[key];
	      }
	    }
	  };
	
	  return EntitySchema;
	})();
	
	exports['default'] = EntitySchema;
	module.exports = exports['default'];

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.arrayOf = arrayOf;
	exports.normalize = normalize;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EntitySchema = __webpack_require__(325);
	
	var _EntitySchema2 = _interopRequireDefault(_EntitySchema);
	
	var _ArraySchema = __webpack_require__(324);
	
	var _ArraySchema2 = _interopRequireDefault(_ArraySchema);
	
	var _lodashLangIsObject = __webpack_require__(46);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var _lodashLangIsEqual = __webpack_require__(337);
	
	var _lodashLangIsEqual2 = _interopRequireDefault(_lodashLangIsEqual);
	
	function defaultAssignEntity(normalized, key, entity) {
	  normalized[key] = entity;
	}
	
	function visitObject(obj, schema, bag, options) {
	  var _options$assignEntity = options.assignEntity;
	  var assignEntity = _options$assignEntity === undefined ? defaultAssignEntity : _options$assignEntity;
	
	  var normalized = {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      var entity = visit(obj[key], schema[key], bag, options);
	      assignEntity.call(null, normalized, key, entity);
	    }
	  }
	  return normalized;
	}
	
	function visitArray(obj, arraySchema, bag, options) {
	  var itemSchema = arraySchema.getItemSchema();
	
	  var normalized = obj.map(function (childObj) {
	    return visit(childObj, itemSchema, bag, options);
	  });
	  return normalized;
	}
	
	function mergeIntoEntity(entityA, entityB, entityKey) {
	  for (var key in entityB) {
	    if (!entityB.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (!entityA.hasOwnProperty(key) || _lodashLangIsEqual2['default'](entityA[key], entityB[key])) {
	      entityA[key] = entityB[key];
	      continue;
	    }
	
	    console.warn('When merging two ' + entityKey + ', found unequal data in their "' + key + '" values. Using the earlier value.', entityA[key], entityB[key]);
	  }
	}
	
	function visitEntity(entity, entitySchema, bag, options) {
	  var entityKey = entitySchema.getKey();
	  var id = entitySchema.getId(entity);
	
	  if (!bag[entityKey]) {
	    bag[entityKey] = {};
	  }
	
	  if (!bag[entityKey][id]) {
	    bag[entityKey][id] = {};
	  }
	
	  var stored = bag[entityKey][id];
	  var normalized = visitObject(entity, entitySchema, bag, options);
	  mergeIntoEntity(stored, normalized, entityKey);
	
	  return id;
	}
	
	function visit(obj, schema, bag, options) {
	  if (!_lodashLangIsObject2['default'](obj) || !_lodashLangIsObject2['default'](schema)) {
	    return obj;
	  }
	
	  if (schema instanceof _EntitySchema2['default']) {
	    return visitEntity(obj, schema, bag, options);
	  } else if (schema instanceof _ArraySchema2['default']) {
	    return visitArray(obj, schema, bag, options);
	  } else {
	    return visitObject(obj, schema, bag, options);
	  }
	}
	
	function arrayOf(schema) {
	  return new _ArraySchema2['default'](schema);
	}
	
	exports.Schema = _EntitySchema2['default'];
	
	function normalize(obj, schema) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  if (!_lodashLangIsObject2['default'](obj) && !Array.isArray(obj)) {
	    throw new Error('Normalize accepts an object or an array as its input.');
	  }
	
	  if (!_lodashLangIsObject2['default'](schema) || Array.isArray(schema)) {
	    throw new Error('Normalize accepts an object for schema.');
	  }
	
	  var bag = {};
	  var result = visit(obj, schema, bag, options);
	
	  return {
	    entities: bag,
	    result: result
	  };
	}

/***/ },
/* 327 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(329),
	    isObject = __webpack_require__(46),
	    isObjectLike = __webpack_require__(56);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(332),
	    equalByTag = __webpack_require__(333),
	    equalObjects = __webpack_require__(334),
	    isArray = __webpack_require__(99),
	    isTypedArray = __webpack_require__(340);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 330 */
309,
/* 331 */
[541, 343],
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(327);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 333 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(341);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 335 */
[542, 330],
/* 336 */
[545, 152, 99, 151, 55, 342],
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(328),
	    bindCallback = __webpack_require__(331);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent. If `customizer` is provided it's invoked to compare values.
	 * If `customizer` returns `undefined` comparisons are handled by the method
	 * instead. The `customizer` is bound to `thisArg` and invoked with up to
	 * three arguments: (value, other [, index|key]).
	 *
	 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	 * numbers, `Object` objects, regexes, and strings. Objects are compared by
	 * their own, not inherited, enumerable properties. Functions and DOM nodes
	 * are **not** supported. Provide a customizer function to extend support
	 * for comparing other values.
	 *
	 * @static
	 * @memberOf _
	 * @alias eq
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize value comparisons.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * object == other;
	 * // => false
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * // using a customizer callback
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqual(array, other, function(value, other) {
	 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	 *     return true;
	 *   }
	 * });
	 * // => true
	 */
	function isEqual(value, other, customizer, thisArg) {
	  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	}
	
	module.exports = isEqual;


/***/ },
/* 338 */
[548, 46],
/* 339 */
[549, 338, 56],
/* 340 */
[550, 55, 56],
/* 341 */
[551, 149, 150, 46, 336],
/* 342 */
[552, 152, 99, 151, 55, 46],
/* 343 */
323,
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(390);

/***/ },
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = catchErrors;
	
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 2);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        if (console.reportErrorsAsExceptions) {
	          // Stop react-native from triggering its own error handler
	          console.reportErrorsAsExceptions = false;
	          console.error(err);
	          // Reactivate it so other errors are still handled
	          console.reportErrorsAsExceptions = true;
	        } else {
	          console.error(err);
	        }
	        return React.createElement(ErrorReporter, {
	          error: err,
	          filename: filename
	        });
	      }
	    };
	    return ReactClass;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(78);
	
	var assign = __webpack_require__(3);
	
	var ReactTransitionGroup = __webpack_require__(417);
	var ReactCSSTransitionGroupChild = __webpack_require__(391);
	
	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (!props[timeoutPropName]) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}
	
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',
	
	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },
	
	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },
	
	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	module.exports = ReactCSSTransitionGroup;

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(78);
	var ReactDOM = __webpack_require__(108);
	
	var CSSCore = __webpack_require__(437);
	var ReactTransitionEvents = __webpack_require__(416);
	
	var onlyChild = __webpack_require__(189);
	
	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,
	
	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },
	
	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;
	
	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timeout);
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	
	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },
	
	  queueClass: function (className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function () {
	    this.classNameQueue = [];
	  },
	
	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },
	
	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },
	
	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(185);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(8);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(78);
	var ReactTransitionChildMapping = __webpack_require__(415);
	
	var assign = __webpack_require__(3);
	var emptyFunction = __webpack_require__(22);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(2);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }
	
	};
	
	module.exports = CSSCore;

/***/ },
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(454)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /\s+at .*(\S+\:\d+|\(native\))/;
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack && error.stack.match(FIREFOX_SAFARI_STACK_REGEXP)) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.replace(/^\s+/, '').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = (!tokens[0] || tokens[0] === 'Anonymous') ? undefined : tokens[0];
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.shift() || undefined;
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },
/* 455 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(47);
	
	var _reactRouter = __webpack_require__(34);
	
	var _routerStateEquals = __webpack_require__(200);
	
	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);
	
	var _constants = __webpack_require__(38);
	
	var _actionCreators = __webpack_require__(125);
	
	function memoizeRouterStateSelector(selector) {
	  var previousRouterState = null;
	
	  return function (state) {
	    var nextRouterState = selector(state);
	    if (_routerStateEquals2['default'](previousRouterState, nextRouterState)) {
	      return previousRouterState;
	    }
	    previousRouterState = nextRouterState;
	    return nextRouterState;
	  };
	}
	
	function getRoutesFromProps(props) {
	  return props.routes || props.children;
	}
	
	var ReduxRouter = (function (_Component) {
	  _inherits(ReduxRouter, _Component);
	
	  _createClass(ReduxRouter, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      store: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);
	
	  function ReduxRouter(props, context) {
	    _classCallCheck(this, ReduxRouter);
	
	    _Component.call(this, props, context);
	    this.receiveRoutes(getRoutesFromProps(props));
	  }
	
	  ReduxRouter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.receiveRoutes(getRoutesFromProps(nextProps));
	  };
	
	  ReduxRouter.prototype.receiveRoutes = function receiveRoutes(routes) {
	    if (!routes) return;
	
	    var store = this.context.store;
	
	    store.dispatch(_actionCreators.replaceRoutes(routes));
	  };
	
	  ReduxRouter.prototype.render = function render() {
	    var store = this.context.store;
	
	    if (!store) {
	      throw new Error('Redux store missing from context of <ReduxRouter>. Make sure you\'re ' + 'using a <Provider>');
	    }
	
	    var history = store.history;
	    var routerStateSelector = store[_constants.ROUTER_STATE_SELECTOR];
	
	    if (!history || !routerStateSelector) {
	      throw new Error('Redux store not configured properly for <ReduxRouter>. Make sure ' + 'you\'re using the reduxReactRouter() store enhancer.');
	    }
	
	    return _react2['default'].createElement(ReduxRouterContext, _extends({
	      history: history,
	      routerStateSelector: memoizeRouterStateSelector(routerStateSelector)
	    }, this.props));
	  };
	
	  return ReduxRouter;
	})(_react.Component);
	
	var ReduxRouterContext = (function (_Component2) {
	  _inherits(ReduxRouterContext, _Component2);
	
	  function ReduxRouterContext() {
	    _classCallCheck(this, _ReduxRouterContext);
	
	    _Component2.apply(this, arguments);
	  }
	
	  ReduxRouterContext.prototype.render = function render() {
	    return _react2['default'].createElement(_reactRouter.RoutingContext, this.props);
	  };
	
	  var _ReduxRouterContext = ReduxRouterContext;
	  ReduxRouterContext = _reactRedux.connect(function (state, _ref) {
	    var routerStateSelector = _ref.routerStateSelector;
	    return routerStateSelector(state) || {};
	  })(ReduxRouterContext) || ReduxRouterContext;
	  return ReduxRouterContext;
	})(_react.Component);
	
	exports['default'] = ReduxRouter;
	module.exports = exports['default'];

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(39);
	
	var _actionCreators = __webpack_require__(125);
	
	var _routerStateEquals = __webpack_require__(200);
	
	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);
	
	var _reduxReactRouter = __webpack_require__(521);
	
	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);
	
	var _useDefaults = __webpack_require__(525);
	
	var _useDefaults2 = _interopRequireDefault(_useDefaults);
	
	var _routeReplacement = __webpack_require__(523);
	
	var _routeReplacement2 = _interopRequireDefault(_routeReplacement);
	
	function historySynchronization(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var onError = options.onError;
	        var routerStateSelector = options.routerStateSelector;
	
	        var store = next(options)(createStore)(reducer, initialState);
	        var history = store.history;
	
	        var routerState = undefined;
	
	        history.listen(function (error, nextRouterState) {
	          if (error) {
	            onError(error);
	            return;
	          }
	
	          var prevRouterState = routerStateSelector(store.getState());
	
	          if (!_routerStateEquals2['default'](prevRouterState, nextRouterState)) {
	            store.dispatch(_actionCreators.routerDidChange(nextRouterState));
	          }
	        });
	
	        store.subscribe(function () {
	          var nextRouterState = routerStateSelector(store.getState());
	
	          if (nextRouterState && !_routerStateEquals2['default'](routerState, nextRouterState)) {
	            var _nextRouterState$location = nextRouterState.location;
	            var state = _nextRouterState$location.state;
	            var pathname = _nextRouterState$location.pathname;
	            var query = _nextRouterState$location.query;
	
	            history.replaceState(state, pathname, query);
	          }
	
	          routerState = nextRouterState;
	        });
	
	        return store;
	      };
	    };
	  };
	}
	
	exports['default'] = _redux.compose(_useDefaults2['default'], _routeReplacement2['default'], historySynchronization)(_reduxReactRouter2['default']);
	module.exports = exports['default'];

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = historyMiddleware;
	
	var _constants = __webpack_require__(38);
	
	/**
	 * Middleware for interacting with the history API
	 * @param {History} History object
	 */
	
	function historyMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.HISTORY_API) {
	          var _action$payload = action.payload;
	          var method = _action$payload.method;
	          var args = _action$payload.args;
	
	          return history[method].apply(history, args);
	        }
	        return next(action);
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isActive;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRouterLibIsActive = __webpack_require__(156);
	
	var _reactRouterLibIsActive2 = _interopRequireDefault(_reactRouterLibIsActive);
	
	/**
	 * Creates a router state selector that returns whether or not the given
	 * pathname and query are active.
	 * @param {String} pathname
	 * @param {Object} query
	 * @param {Boolean} indexOnly
	 * @return {Boolean}
	 */
	
	function isActive(pathname, query) {
	  var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	  return function (state) {
	    if (!state) return false;
	    var location = state.location;
	    var params = state.params;
	    var routes = state.routes;
	
	    return _reactRouterLibIsActive2['default'](pathname, query, indexOnly, location, routes, params);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = reduxReactRouter;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(39);
	
	var _reactRouter = __webpack_require__(34);
	
	var _historyMiddleware = __webpack_require__(519);
	
	var _historyMiddleware2 = _interopRequireDefault(_historyMiddleware);
	
	var _constants = __webpack_require__(38);
	
	function reduxReactRouter(_ref) {
	  var routes = _ref.routes;
	  var createHistory = _ref.createHistory;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var routerStateSelector = _ref.routerStateSelector;
	
	  return function (createStore) {
	    return function (reducer, initialState) {
	      var history = _reactRouter.useRoutes(createHistory)({
	        routes: routes,
	        parseQueryString: parseQueryString,
	        stringifyQuery: stringifyQuery
	      });
	
	      var store = _redux.applyMiddleware(_historyMiddleware2['default'](history))(createStore)(reducer, initialState);
	
	      store.history = history;
	      store[_constants.ROUTER_STATE_SELECTOR] = routerStateSelector;
	
	      return store;
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = replaceRoutesMiddleware;
	
	var _constants = __webpack_require__(38);
	
	function replaceRoutesMiddleware(replaceRoutes) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.REPLACE_ROUTES) {
	          replaceRoutes(action.payload);
	        }
	        return next(action);
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = routeReplacement;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(39);
	
	var _reactRouter = __webpack_require__(34);
	
	var _replaceRoutesMiddleware = __webpack_require__(522);
	
	var _replaceRoutesMiddleware2 = _interopRequireDefault(_replaceRoutesMiddleware);
	
	function routeReplacement(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var baseRoutes = options.routes;
	        var getRoutes = options.getRoutes;
	        var routerStateSelector = options.routerStateSelector;
	
	        var store = undefined;
	
	        var childRoutes = [];
	        var areChildRoutesResolved = false;
	        var childRoutesCallbacks = [];
	
	        function replaceRoutes(r) {
	          childRoutes = _reactRouter.createRoutes(r);
	
	          var routerState = routerStateSelector(store.getState());
	          if (routerState) {
	            var _routerState$location = routerState.location;
	            var state = _routerState$location.state;
	            var pathname = _routerState$location.pathname;
	            var query = _routerState$location.query;
	
	            store.history.replaceState(state, pathname, query);
	          }
	
	          if (!areChildRoutesResolved) {
	            areChildRoutesResolved = true;
	            childRoutesCallbacks.forEach(function (cb) {
	              return cb(null, childRoutes);
	            });
	          }
	        }
	
	        var routes = undefined;
	        if (baseRoutes) {
	          routes = baseRoutes;
	        } else if (getRoutes) {
	          routes = getRoutes({
	            dispatch: function dispatch(action) {
	              return store.dispatch(action);
	            },
	            getState: function getState() {
	              return store.getState();
	            }
	          });
	        } else {
	          routes = [{
	            getChildRoutes: function getChildRoutes(location, cb) {
	              if (!areChildRoutesResolved) {
	                childRoutesCallbacks.push(cb);
	                return;
	              }
	
	              cb(null, childRoutes);
	            }
	          }];
	        }
	
	        store = _redux.compose(_redux.applyMiddleware(_replaceRoutesMiddleware2['default'](replaceRoutes)), next(_extends({}, options, {
	          routes: _reactRouter.createRoutes(routes)
	        })))(createStore)(reducer, initialState);
	
	        return store;
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = routerStateReducer;
	
	var _constants = __webpack_require__(38);
	
	/**
	 * Reducer of ROUTER_DID_CHANGE actions. Returns a state object
	 * with { pathname, query, params, navigationType }
	 * @param  {Object} state - Previous state
	 * @param  {Object} action - Action
	 * @return {Object} New state
	 */
	
	function routerStateReducer(state, action) {
	  if (state === undefined) state = null;
	
	  var _extends2;
	
	  switch (action.type) {
	    case _constants.ROUTER_DID_CHANGE:
	      return action.payload;
	    case _constants.REPLACE_ROUTES:
	      if (!state) return state;
	      return _extends({}, state, (_extends2 = {}, _extends2[_constants.DOES_NEED_REFRESH] = true, _extends2));
	    default:
	      return state;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 525 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = useDefaults;
	var defaults = {
	  onError: function onError(error) {
	    throw error;
	  },
	  routerStateSelector: function routerStateSelector(state) {
	    return state.router;
	  }
	};
	
	function useDefaults(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var optionsWithDefaults = _extends({}, defaults, options);
	
	        var baseCreateHistory = optionsWithDefaults.createHistory;
	        var baseHistory = optionsWithDefaults.history;
	
	        var createHistory = undefined;
	        if (typeof baseCreateHistory === 'function') {
	          createHistory = baseCreateHistory;
	        } else if (baseHistory) {
	          createHistory = function () {
	            return baseHistory;
	          };
	        } else {
	          createHistory = null;
	        }
	
	        return next(_extends({}, optionsWithDefaults, {
	          createHistory: createHistory
	        }))(createStore)(reducer, initialState);
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 526 */
[537, 528, 527],
/* 527 */
292,
/* 528 */
293,
/* 529 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(280);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(534)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?includePaths[]=/Users/fukuyamaken/Projects/js/lifecodebattler/src/styles!./core.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?includePaths[]=/Users/fukuyamaken/Projects/js/lifecodebattler/src/styles!./core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var identity = __webpack_require__(__webpack_module_template_argument_0__);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var baseProperty = __webpack_require__(__webpack_module_template_argument_0__);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var isNative = __webpack_require__(__webpack_module_template_argument_0__);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var getLength = __webpack_require__(__webpack_module_template_argument_0__),
	    isLength = __webpack_require__(__webpack_module_template_argument_1__);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	var isArguments = __webpack_require__(__webpack_module_template_argument_0__),
	    isArray = __webpack_require__(__webpack_module_template_argument_1__),
	    isIndex = __webpack_require__(__webpack_module_template_argument_2__),
	    isLength = __webpack_require__(__webpack_module_template_argument_3__),
	    keysIn = __webpack_require__(__webpack_module_template_argument_4__);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var isArrayLike = __webpack_require__(__webpack_module_template_argument_0__),
	    isObjectLike = __webpack_require__(__webpack_module_template_argument_1__);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var getNative = __webpack_require__(__webpack_module_template_argument_0__),
	    isLength = __webpack_require__(__webpack_module_template_argument_1__),
	    isObjectLike = __webpack_require__(__webpack_module_template_argument_2__);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var isObject = __webpack_require__(__webpack_module_template_argument_0__);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var isFunction = __webpack_require__(__webpack_module_template_argument_0__),
	    isObjectLike = __webpack_require__(__webpack_module_template_argument_1__);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var isLength = __webpack_require__(__webpack_module_template_argument_0__),
	    isObjectLike = __webpack_require__(__webpack_module_template_argument_1__);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var getNative = __webpack_require__(__webpack_module_template_argument_0__),
	    isArrayLike = __webpack_require__(__webpack_module_template_argument_1__),
	    isObject = __webpack_require__(__webpack_module_template_argument_2__),
	    shimKeys = __webpack_require__(__webpack_module_template_argument_3__);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	var isArguments = __webpack_require__(__webpack_module_template_argument_0__),
	    isArray = __webpack_require__(__webpack_module_template_argument_1__),
	    isIndex = __webpack_require__(__webpack_module_template_argument_2__),
	    isLength = __webpack_require__(__webpack_module_template_argument_3__),
	    isObject = __webpack_require__(__webpack_module_template_argument_4__);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ }
]);
//# sourceMappingURL=app.a20d41fa44ee8508aa9f.js.map