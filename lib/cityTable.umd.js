(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cityTable"] = factory();
	else
		root["cityTable"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table[data-v-03330bfe]{min-height:100%;font-size:14px;color:#999;background:#fff;overflow:scroll}.table .tr[data-v-03330bfe]{display:flex;border:1px solid #beb7b7}.table .th[data-v-03330bfe]{font-weight:600;color:#777;width:calc(33vw - 8px);display:flex;align-items:center;justify-content:center;padding:4px 0}.table .tbody[data-v-03330bfe],.table .th[data-v-03330bfe]:first-child,.table .th[data-v-03330bfe]:nth-child(2){border-right:1px solid #beb7b7}.table .tbody[data-v-03330bfe]{border-left:1px solid #beb7b7}.table .tbody .city-wrapper[data-v-03330bfe]{display:flex;flex-wrap:wrap;width:calc(66vw - 16px)}.table .tbody .area-wrapper[data-v-03330bfe]{width:calc(33vw - 8px);display:flex;flex-wrap:wrap}.table .tbody .provic-name[data-v-03330bfe]{border-bottom:1px solid #beb7b7}.table .tbody .city-name[data-v-03330bfe],.table .tbody .provic-name[data-v-03330bfe]{border-right:1px solid #beb7b7}.table .tbody .city[data-v-03330bfe],.table .tbody .provice[data-v-03330bfe]{display:flex}.table .tbody .area-wrapper .area-name[data-v-03330bfe],.table .tbody .city .city-name[data-v-03330bfe]{border-bottom:1px solid #beb7b7}.table .tbody .area-wrapper .area-name[data-v-03330bfe],.table .tbody .city-name[data-v-03330bfe],.table .tbody .provic-name[data-v-03330bfe]{width:calc(33vw - 8px);display:flex;justify-content:center;align-items:center;padding:4px 0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 819:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("a358fe18", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/city-table/src/city-table.vue?vue&type=template&id=03330bfe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table"},[_c('div',[_vm._m(0),_c('div',{staticClass:"tbody"},_vm._l((_vm.areaList),function(item){return _c('div',{key:item.area,staticClass:"provice"},[_c('div',{staticClass:"provic-name"},[_vm._v(_vm._s(item.area))]),_c('div',{staticClass:"city-wrapper"},_vm._l((item.sonAreaList),function(value){return _c('div',{key:value.area,staticClass:"city"},[_c('div',{staticClass:"city-name"},[_vm._v(_vm._s(value.area))]),_c('div',{staticClass:"area-wrapper"},_vm._l((value.sonAreaList),function(val){return _c('div',{key:val.area,staticClass:"area"},[_c('div',{staticClass:"area-name"},[_vm._v(_vm._s(val.area))])])}),0)])}),0)])}),0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tr"},[_c('div',{staticClass:"th"},[_vm._v("省")]),_c('div',{staticClass:"th"},[_vm._v("市")]),_c('div',{staticClass:"th"},[_vm._v("区")])])}]


;// CONCATENATED MODULE: ./packages/city-table/src/city-table.vue?vue&type=template&id=03330bfe&scoped=true&

;// CONCATENATED MODULE: ./packages/city-table/src/city.json
var city_namespaceObject = JSON.parse('{"aT":{"areaList":[{"area":"山东省","sonAreaList":[{"area":"莱芜市","sonAreaList":[]},{"area":"日照市","sonAreaList":[]},{"area":"临沂市","sonAreaList":[]},{"area":"淄博市","sonAreaList":[]},{"area":"威海市","sonAreaList":[]},{"area":"枣庄市","sonAreaList":[]},{"area":"东营市","sonAreaList":[]},{"area":"烟台市","sonAreaList":[]},{"area":"潍坊市","sonAreaList":[]}]},{"area":"河北省","sonAreaList":[{"area":"石家庄市","sonAreaList":[{"area":"市辖区","sonAreaList":null},{"area":"长安区","sonAreaList":null},{"area":"桥西区","sonAreaList":null},{"area":"新华区","sonAreaList":null},{"area":"井陉矿区","sonAreaList":null},{"area":"裕华区","sonAreaList":null},{"area":"藁城区","sonAreaList":null},{"area":"鹿泉区","sonAreaList":null},{"area":"高邑县","sonAreaList":null},{"area":"深泽县","sonAreaList":null},{"area":"赞皇县","sonAreaList":null},{"area":"无极县","sonAreaList":null}]},{"area":"邯郸市","sonAreaList":[]},{"area":"唐山市","sonAreaList":[]},{"area":"秦皇岛市","sonAreaList":[]}]},{"area":"江苏省","sonAreaList":[{"area":"盐城市","sonAreaList":[{"area":"市辖区","sonAreaList":null},{"area":"亭湖区","sonAreaList":null},{"area":"盐都区","sonAreaList":null},{"area":"大丰区","sonAreaList":null},{"area":"响水县","sonAreaList":null},{"area":"滨海县","sonAreaList":null},{"area":"阜宁县","sonAreaList":null},{"area":"射阳县","sonAreaList":null},{"area":"建湖县","sonAreaList":null},{"area":"东台市","sonAreaList":null}]},{"area":"连云港市","sonAreaList":[{"area":"市辖区","sonAreaList":null},{"area":"连云区","sonAreaList":null},{"area":"海州区","sonAreaList":null},{"area":"赣榆区","sonAreaList":null},{"area":"东海县","sonAreaList":null},{"area":"灌云县","sonAreaList":null},{"area":"灌南县","sonAreaList":null}]},{"area":"苏州市","sonAreaList":[{"area":"市辖区","sonAreaList":null},{"area":"虎丘区","sonAreaList":null},{"area":"吴中区","sonAreaList":null},{"area":"相城区","sonAreaList":null},{"area":"姑苏区","sonAreaList":null},{"area":"吴江区","sonAreaList":null},{"area":"常熟市","sonAreaList":null},{"area":"张家港市","sonAreaList":null},{"area":"昆山市","sonAreaList":null},{"area":"太仓市","sonAreaList":null}]}]},{"area":"辽宁省","sonAreaList":[]},{"area":"吉林省","sonAreaList":[]},{"area":"福建省","sonAreaList":[{"area":"南平市","sonAreaList":[]},{"area":"龙岩市","sonAreaList":[]},{"area":"厦门市","sonAreaList":[]},{"area":"莆田市","sonAreaList":[]},{"area":"三明市","sonAreaList":[]}]},{"area":"浙江省","sonAreaList":[{"area":"杭州市","sonAreaList":[{"area":"市辖区","sonAreaList":null},{"area":"上城区","sonAreaList":null},{"area":"下城区","sonAreaList":null},{"area":"江干区","sonAreaList":null},{"area":"拱墅区","sonAreaList":null},{"area":"西湖区","sonAreaList":null},{"area":"滨江区","sonAreaList":null},{"area":"萧山区","sonAreaList":null},{"area":"余杭区","sonAreaList":null},{"area":"富阳区","sonAreaList":null}]}]},{"area":"湖北省","sonAreaList":[{"area":"宜昌市","sonAreaList":[]},{"area":"孝感市","sonAreaList":[]},{"area":"荆门市","sonAreaList":[]},{"area":"鄂州市","sonAreaList":[]},{"area":"咸宁市","sonAreaList":[]},{"area":"黄冈市","sonAreaList":[]},{"area":"荆州市","sonAreaList":[]}]},{"area":"上海市","sonAreaList":[]},{"area":"山西省","sonAreaList":[]},{"area":"江西省","sonAreaList":[{"area":"萍乡市","sonAreaList":[]},{"area":"九江市","sonAreaList":[]},{"area":"抚州市","sonAreaList":[]},{"area":"宜春市","sonAreaList":[]},{"area":"吉安市","sonAreaList":[]},{"area":"新余市","sonAreaList":[]},{"area":"鹰潭市","sonAreaList":[]}]},{"area":"天津市","sonAreaList":[{"area":"市辖区","sonAreaList":[{"area":"和平区","sonAreaList":null},{"area":"河东区","sonAreaList":null},{"area":"河西区","sonAreaList":null},{"area":"南开区","sonAreaList":null},{"area":"东丽区","sonAreaList":null},{"area":"西青区","sonAreaList":null},{"area":"津南区","sonAreaList":null},{"area":"北辰区","sonAreaList":null},{"area":"武清区","sonAreaList":null},{"area":"宁河区","sonAreaList":null},{"area":"静海区","sonAreaList":null},{"area":"蓟州区","sonAreaList":null},{"area":"滨海新区","sonAreaList":null},{"area":"宝坻区","sonAreaList":null}]}]},{"area":"黑龙江省","sonAreaList":[]},{"area":"河南省","sonAreaList":[{"area":"焦作市","sonAreaList":[]},{"area":"濮阳市","sonAreaList":[]},{"area":"信阳市","sonAreaList":[]},{"area":"商丘市","sonAreaList":[]},{"area":"漯河市","sonAreaList":[]},{"area":"南阳市","sonAreaList":[]},{"area":"三门峡市","sonAreaList":[]}]},{"area":"新疆维吾尔自治区","sonAreaList":[{"area":"哈密市","sonAreaList":[]},{"area":"喀什地区","sonAreaList":[{"area":"麦盖提县","sonAreaList":null},{"area":"叶城县","sonAreaList":null},{"area":"岳普湖县","sonAreaList":null},{"area":"伽师县","sonAreaList":null},{"area":"巴楚县","sonAreaList":null}]},{"area":"克拉玛依市","sonAreaList":[{"area":"独山子区","sonAreaList":null},{"area":"克拉玛依区","sonAreaList":null}]},{"area":"乌鲁木齐市","sonAreaList":[{"area":"沙依巴克区","sonAreaList":null},{"area":"乌鲁木齐县","sonAreaList":null}]},{"area":"巴音郭楞蒙古自治州","sonAreaList":[{"area":"焉耆回族自治县","sonAreaList":null}]},{"area":"阿克苏地区","sonAreaList":[{"area":"阿克苏市","sonAreaList":null}]}]},{"area":"内蒙古自治区","sonAreaList":[{"area":"鄂尔多斯市","sonAreaList":[{"area":"鄂托克前旗","sonAreaList":null},{"area":"伊金霍洛旗","sonAreaList":null}]},{"area":"呼伦贝尔市","sonAreaList":[{"area":"莫力达瓦达斡尔族自治旗","sonAreaList":null},{"area":"鄂伦春自治旗","sonAreaList":null},{"area":"鄂温克族自治旗","sonAreaList":null},{"area":"陈巴尔虎旗","sonAreaList":null},{"area":"新巴尔虎左旗","sonAreaList":null},{"area":"新巴尔虎右旗","sonAreaList":null}]},{"area":"呼和浩特市","sonAreaList":[{"area":"土默特左旗","sonAreaList":null}]}]},{"area":"安徽省","sonAreaList":[]},{"area":"西藏自治区","sonAreaList":[]}]}}');
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/city-table/src/city-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var city_tablevue_type_script_lang_js_ = ({
  name: "cityTable",
  data() {
    return {
      mobileType: "",
      areaList: [],
    };
  },
  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
  created() {
    const { areaList } = city_namespaceObject.aT;
    areaList.map((item) => {
      if (item.sonAreaList.length === 0) {
        item.sonAreaList = [
          {
            area: "全部",
            sonAreaList: [{ area: "全部", sonAreaList: [] }],
          },
        ];
      } else if (item.sonAreaList.length !== 0) {
        item.sonAreaList = item.sonAreaList.map((value) => {
          if (value.sonAreaList.length === 0) {
            value.sonAreaList = [{ area: "全部", sonAreaList: [] }];
          }
          return value;
        });
      }

      return item;
    });

    this.areaList = areaList;
  },
});

;// CONCATENATED MODULE: ./packages/city-table/src/city-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_city_tablevue_type_script_lang_js_ = (city_tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-62[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[4]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/city-table/src/city-table.vue?vue&type=style&index=0&id=03330bfe&lang=scss&scoped=true&
var city_tablevue_type_style_index_0_id_03330bfe_lang_scss_scoped_true_ = __webpack_require__(819);
;// CONCATENATED MODULE: ./packages/city-table/src/city-table.vue?vue&type=style&index=0&id=03330bfe&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/city-table/src/city-table.vue



;


/* normalize component */

var component = normalizeComponent(
  src_city_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "03330bfe",
  null
  
)

/* harmony default export */ var city_table = (component.exports);
;// CONCATENATED MODULE: ./packages/city-table/index.js


city_table.install = function (Vue) {
  Vue.component(city_table.name, city_table);
};

/* harmony default export */ var packages_city_table = (city_table);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_city_table);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=cityTable.umd.js.map