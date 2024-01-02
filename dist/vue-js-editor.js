(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vueJsEditor", [], factory);
	else if(typeof exports === 'object')
		exports["vueJsEditor"] = factory();
	else
		root["vueJsEditor"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f800c1e2", content, true, {});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

var listToStyles = __webpack_require__(10)

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

module.exports = function (parentId, list, _isProduction, _options) {
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css__);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vue-js-editor',
  props: {
    value: {
      type: String
    },
    config: {
      type: Object,
      default: null
    },
    uploadHandler: {
      type: Function
    },
    globalOptions: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      editorId: 'editor_' + Date.now() + ~~(Math.random() * 1000),
      currentValue: null,
      currentConfig: {},
      _currentEditor: null,
      hasInit: false, //是否初始化
      disabled: false // 是否禁用
    };
  },

  watch: {
    isDisabled: function isDisabled(disabled) {
      if (!this._currentEditor) return;
      if (disabled) {
        this._currentEditor.disable();
      } else {
        this._currentEditor.enable();
      }
    },
    value: {
      handler: function handler(val) {
        this.setContent(val);
      },

      immediate: true
    },
    currentValue: function currentValue(val) {
      var _this2 = this;

      var html = val; //xss等处理
      if (html !== this._currentEditor.$txt.html()) {
        this.$nextTick(function () {
          _this2._currentEditor && _this2._currentEditor.$txt && _this2._currentEditor.$txt.html(html);
        });
      }
    }
  },
  methods: {
    setContent: function setContent(val) {
      var _this3 = this;

      var setValueFunc = function setValueFunc() {
        if (val !== _this3.currentValue) {
          _this3.currentValue = val;
        }
      };
      //编辑器赋值
      if (!this.hasInit) {
        this.$nextTick(function () {
          _this3.renderEditor();
          setValueFunc();
        });
      } else {
        setValueFunc();
      }
    },
    asyncValue: function asyncValue(html) {
      this.$emit('input', html);
    },
    renderEditor: function renderEditor() {
      //渲染编辑器
      var _this = this;
      if (_this.hasInit) {
        return console.log('编辑器已初始化');
      }
      //日志配置
      __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js___default.a.config.printLog = false;
      var editor = new __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js___default.a(this.editorId);
      if (!editor.config) return;
      _this.editorConfig(editor);
      _this.imageConfig(editor);
      // 合并配置
      this.currentConfig = __WEBPACK_IMPORTED_MODULE_0_object_assign___default()(editor.config, this.globalOptions.config, _this.config);
      _this.hasInit = true;
      editor.onchange = function () {
        var html = _this._currentEditor.$txt.html();
        _this.asyncValue(html);
      };
      editor.create();
      // editor.disable()
      this._currentEditor = editor;
      if (this.isDisabled) {
        this._currentEditor.disable();
      }
    },
    editorConfig: function editorConfig(editor) {
      //编辑器配置
      // 自定义菜单配置
      editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|', 'link', 'unlink', 'table',
      // 'emotion',
      '|', 'img', 'video', 'insertcode', 'hr', '|', 'undo', 'redo', 'fullscreen'];
      editor.config.withCredentials = false;
      editor.config.uploadImgFileName = 'file';
      // editor.config.uploadImgUrl = ''
      editor.config.uploadParams = {};
      editor.config.uploadHeaders = {};
      editor.config.zindex = 100;
      editor.config.pasteFilter = true;
      editor.config.menuFixed = false;
    },

    imageConfig: function imageConfig(editor) {
      //编辑器上传图片配置
      var _this = this;
      // 自定义load事件
      editor.config.uploadImgFns.onload = function (resultText, xhr, fileName) {
        if (xhr.status !== 200) {
          var msg = _this._uploadHandler('error');
          uploadError.call(this, fileName, msg || this.config.lang.uploadErrorPlaceTxt);
          return;
        }
        var fileUrl = _this._uploadHandler('success', resultText);
        var $img = this.$txt.find('img[alt="' + this.config.lang.uploadPlaceTxt + fileName + '"]');
        if (fileUrl) {
          if ($img.length > 0) {
            $img.attr('src', fileUrl).removeAttr('alt');
            this.$txt.change();
          } else {
            this.command(null, 'insertHtml', '<img src="' + fileUrl + '"/>');
          }
        } else {
          uploadError.call(this, fileName, this.config.lang.uploadErrorPlaceTxt);
        }
      };

      // 自定义timeout事件
      editor.config.uploadImgFns.ontimeout = function (xhr, fileName) {
        var msg = _this._uploadHandler('timeout');
        uploadError.call(this, fileName, msg || this.config.lang.uploadTimeoutPlaceTxt);
      };

      // 自定义error事件
      editor.config.uploadImgFns.onerror = function (xhr, fileName) {
        var msg = _this._uploadHandler('error');
        uploadError.call(this, fileName, msg || this.config.lang.uploadErrorPlaceTxt);
      };
      function uploadError(fileName, msg) {
        var $img = this.$txt.find('img[alt="' + this.config.lang.uploadPlaceTxt + fileName + '"]');
        $img.after('【' + msg + fileName + '】');
        $img.remove();
        this.$txt.change();
      }
    },
    _uploadHandler: function _uploadHandler(type, resultText) {
      var _this = this;
      if (_this.uploadHandler) {
        return _this.uploadHandler(type, resultText);
      } else if (_this.globalOptions.uploadHandler) {
        return _this.globalOptions.uploadHandler(type, resultText);
      } else if (type === 'success') return resultText;
      return null;
    },

    InsertImage: function InsertImage(imageUrl, callback) {
      this._currentEditor.addUploadImage(imageUrl, callback);
    }
  },
  created: function created() {}
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

;(function (factory) {
  if (typeof window.define === 'function') {
    if (window.define.amd) {
      // AMD模式
      window.define('wangEditor', ['jquery'], factory)
    } else if (window.define.cmd) {
      // CMD模式
      window.define(function (require, exports, module) {
        return factory
      })
    } else {
      // 全局模式
      factory(window.jQuery)
    }
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // commonjs

    // 引用 css —— webapck
    __webpack_require__(0)
    module.exports = factory(
      // 传入 jquery ，支持使用 npm 方式或者自己定义jquery的路径
      __webpack_require__(18)
    )
  } else {
    // 全局模式
    factory(window.jQuery)
  }
})(function ($) {
  // 验证是否引用jquery
  if (!$ || !$.fn || !$.fn.jquery) {
    alert('在引用wangEditor.js之前，先引用jQuery，否则无法使用 wangEditor')
    return
  }

  // 编辑器（整体）构造函数
  var E = function (elem) {
    // 支持 id 和 element 两种形式
    if (typeof elem === 'string') {
      elem = '#' + elem
    }

    // ---------------获取基本节点------------------
    var $elem = $(elem)
    if ($elem.length !== 1) {
      return
    }
    var nodeName = $elem[0].nodeName
    if (nodeName !== 'TEXTAREA' && nodeName !== 'DIV') {
      // 只能是 textarea 和 div ，其他类型的元素不行
      return
    }
    this.valueNodeName = nodeName.toLowerCase()
    this.$valueContainer = $elem

    // 记录 elem 的 prev 和 parent（最后渲染 editor 要用到）
    this.$prev = $elem.prev()
    this.$parent = $elem.parent()

    // ------------------初始化------------------
    this.init()
  }

  E.fn = E.prototype

  E.$body = $('body')
  E.$document = $(document)
  E.$window = $(window)
  E.userAgent = navigator.userAgent
  E.getComputedStyle = window.getComputedStyle
  E.w3cRange = typeof document.createRange === 'function'
  E.hostname = location.hostname.toLowerCase()
  E.websiteHost = 'wangeditor.github.io|www.wangeditor.com|wangeditor.coding.me'
  E.isOnWebsite = E.websiteHost.indexOf(E.hostname) >= 0
  E.docsite = 'http://www.kancloud.cn/wangfupeng/wangeditor2/113961'

  // 注册 plugin 事件，用于用户自定义插件
  // 用户在引用 wangEditor.js 之后，还可以通过 E.plugin() 注入自定义函数，
  // 该函数将会在 editor.create() 方法的最后一步执行
  E.plugin = function (fn) {
    if (!E._plugins) {
      E._plugins = []
    }

    if (typeof fn === 'function') {
      E._plugins.push(fn)
    }
  }
  initPlugins(function (fn) {
    // 执行传入的函数
    fn(E, $)
  })

  function initPlugins(_e) {
    // editor 绑定事件
    _e(function (E, $) {
      E.fn.init = function () {
        // 初始化 editor 默认配置
        this.initDefaultConfig()

        // 增加container
        this.addEditorContainer()

        // 增加编辑区域
        this.addTxt()

        // 增加menuContainer
        this.addMenuContainer()

        // 初始化菜单集合
        this.menus = {}

        // 初始化commandHooks
        this.commandHooks()
      }
    })
    // editor api
    _e(function (E, $) {
      // 预定义 ready 事件
      E.fn.ready = function (fn) {
        if (!this.readyFns) {
          this.readyFns = []
        }

        this.readyFns.push(fn)
      }

      // 处理ready事件
      E.fn.readyHeadler = function () {
        var fns = this.readyFns

        while (fns.length) {
          fns.shift().call(this)
        }
      }

      // 更新内容到 $valueContainer
      E.fn.updateValue = function () {
        var editor = this
        var $valueContainer = editor.$valueContainer
        var $txt = editor.txt.$txt

        if ($valueContainer === $txt) {
          // 传入生成编辑器的div，即是编辑区域
          return
        }

        var value = $txt.html()
        $valueContainer.val(value)
      }

      // 获取初始化的内容
      E.fn.getInitValue = function () {
        var editor = this
        var $valueContainer = editor.$valueContainer
        var currentValue = ''
        var nodeName = editor.valueNodeName
        if (nodeName === 'div') {
          currentValue = $valueContainer.html()
        } else if (nodeName === 'textarea') {
          currentValue = $valueContainer.val()
        }

        return currentValue
      }

      // 触发菜单updatestyle
      E.fn.updateMenuStyle = function () {
        var menus = this.menus

        $.each(menus, function (k, menu) {
          menu.updateSelected()
        })
      }

      // 除了传入的 menuIds，其他全部启用
      E.fn.enableMenusExcept = function (menuIds) {
        if (this._disabled) {
          // 编辑器处于禁用状态，则不执行改操作
          return
        }
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || []
        if (typeof menuIds === 'string') {
          menuIds = [menuIds]
        }

        $.each(this.menus, function (k, menu) {
          if (menuIds.indexOf(k) >= 0) {
            return
          }
          menu.disabled(false)
        })
      }

      // 除了传入的 menuIds，其他全部禁用
      E.fn.disableMenusExcept = function (menuIds) {
        if (this._disabled) {
          // 编辑器处于禁用状态，则不执行改操作
          return
        }
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || []
        if (typeof menuIds === 'string') {
          menuIds = [menuIds]
        }

        $.each(this.menus, function (k, menu) {
          if (menuIds.indexOf(k) >= 0) {
            return
          }
          menu.disabled(true)
        })
      }

      // 隐藏所有 dropPanel droplist modal
      E.fn.hideDropPanelAndModal = function () {
        var menus = this.menus

        $.each(menus, function (k, menu) {
          var m = menu.dropPanel || menu.dropList || menu.modal
          if (m && m.hide) {
            m.hide()
          }
        })
      }
    })
    // selection range API
    _e(function (E, $) {
      // 用到 w3c range 的函数，如果检测到浏览器不支持 w3c range，则赋值为空函数
      var ieRange = !E.w3cRange

      function emptyFn() {
      }

      // 设置或读取当前的range
      E.fn.currentRange = function (cr) {
        if (cr) {
          this._rangeData = cr
        } else {
          return this._rangeData
        }
      }

      // 将当前选区折叠
      E.fn.collapseRange = function (range, opt) {
        // opt 参数说明：'start'-折叠到开始; 'end'-折叠到结束
        opt = opt || 'end'
        opt = opt === 'start' ? true : false

        range = range || this.currentRange()

        if (range) {
          // 合并，保存
          range.collapse(opt)
          this.currentRange(range)
        }
      }

      // 获取选区的文字
      E.fn.getRangeText = ieRange
        ? emptyFn
        : function (range) {
          range = range || this.currentRange()
          if (!range) {
            return
          }
          return range.toString()
        }

      // 获取选区对应的DOM对象
      E.fn.getRangeElem = ieRange
        ? emptyFn
        : function (range) {
          range = range || this.currentRange()
          var dom = range.commonAncestorContainer

          if (dom.nodeType === 1) {
            return dom
          } else {
            return dom.parentNode
          }
        }

      // 选区内容是否为空？
      E.fn.isRangeEmpty = ieRange
        ? emptyFn
        : function (range) {
          range = range || this.currentRange()

          if (range && range.startContainer) {
            if (range.startContainer === range.endContainer) {
              if (range.startOffset === range.endOffset) {
                return true
              }
            }
          }

          return false
        }

      // 保存选区数据
      E.fn.saveSelection = ieRange
        ? emptyFn
        : function (range) {
          var self = this,
            _parentElem,
            selection,
            txt = self.txt.$txt.get(0)

          if (range) {
            _parentElem = range.commonAncestorContainer
          } else {
            selection = document.getSelection()
            if (selection.getRangeAt && selection.rangeCount) {
              range = document.getSelection().getRangeAt(0)
              _parentElem = range.commonAncestorContainer
            }
          }
          // 确定父元素一定要包含在编辑器区域内
          if (
            _parentElem &&
            ($.contains(txt, _parentElem) || txt === _parentElem)
          ) {
            // 保存选择区域
            self.currentRange(range)
          }
        }

      // 恢复选中区域
      E.fn.restoreSelection = ieRange
        ? emptyFn
        : function (range) {
          var selection

          range = range || this.currentRange()

          if (!range) {
            return
          }

          // 使用 try catch 来防止 IE 某些情况报错
          try {
            selection = document.getSelection()
            selection.removeAllRanges()
            selection.addRange(range)
          } catch (ex) {
            E.error(
              '执行 editor.restoreSelection 时，IE可能会有异常，不影响使用'
            )
          }
        }

      // 根据elem恢复选区
      E.fn.restoreSelectionByElem = ieRange
        ? emptyFn
        : function (elem, opt) {
          // opt参数说明：'start'-折叠到开始，'end'-折叠到结束，'all'-全部选中
          if (!elem) {
            return
          }
          opt = opt || 'end' // 默认为折叠到结束

          // 根据elem获取选区
          this.setRangeByElem(elem)

          // 根据 opt 折叠选区
          if (opt === 'start') {
            this.collapseRange(this.currentRange(), 'start')
          }
          if (opt === 'end') {
            this.collapseRange(this.currentRange(), 'end')
          }

          // 恢复选区
          this.restoreSelection()
        }

      // 初始化选区
      E.fn.initSelection = ieRange
        ? emptyFn
        : function () {
          var editor = this
          if (editor.currentRange()) {
            //如果currentRange有值，则不用再初始化
            return
          }

          var range
          var $txt = editor.txt.$txt
          var $firstChild = $txt.children().first()

          if ($firstChild.length) {
            editor.restoreSelectionByElem($firstChild.get(0))
          }
        }

      // 根据元素创建选区
      E.fn.setRangeByElem = ieRange
        ? emptyFn
        : function (elem) {
          var editor = this
          var txtElem = editor.txt.$txt.get(0)
          if (!elem || !$.contains(txtElem, elem)) {
            return
          }

          // 找到elem的第一个 textNode 和 最后一个 textNode
          var firstTextNode = elem.firstChild
          while (firstTextNode) {
            if (firstTextNode.nodeType === 3) {
              break
            }
            // 继续向下
            firstTextNode = firstTextNode.firstChild
          }
          var lastTextNode = elem.lastChild
          while (lastTextNode) {
            if (lastTextNode.nodeType === 3) {
              break
            }
            // 继续向下
            lastTextNode = lastTextNode.lastChild
          }

          var range = document.createRange()
          if (firstTextNode && lastTextNode) {
            // 说明 elem 有内容，能取到子元素
            range.setStart(firstTextNode, 0)
            range.setEnd(lastTextNode, lastTextNode.textContent.length)
          } else {
            // 说明 elem 无内容
            range.setStart(elem, 0)
            range.setEnd(elem, 0)
          }

          // 保存选区
          editor.saveSelection(range)
        }
    })
    // selection range API - IE8及以下
    _e(function (E, $) {
      if (E.w3cRange) {
        // 说明支持 W3C 的range方法
        return
      }

      // -----------------IE8时，需要重写以下方法-------------------

      // 获取选区的文字
      E.fn.getRangeText = function (range) {
        range = range || this.currentRange()
        if (!range) {
          return
        }
        return range.text
      }

      // 获取选区对应的DOM对象
      E.fn.getRangeElem = function (range) {
        range = range || this.currentRange()
        if (!range) {
          return
        }
        var dom = range.parentElement()

        if (dom.nodeType === 1) {
          return dom
        } else {
          return dom.parentNode
        }
      }

      // 选区内容是否为空？
      E.fn.isRangeEmpty = function (range) {
        range = range || this.currentRange()

        if (range && range.text) {
          return false
        }

        return true
      }

      // 保存选区数据
      E.fn.saveSelection = function (range) {
        var self = this,
          _parentElem,
          selection,
          txt = self.txt.$txt.get(0)

        if (range) {
          _parentElem = range.parentElement()
        } else {
          range = document.selection.createRange()
          if (typeof range.parentElement === 'undefined') {
            //IE6、7中，insertImage后会执行此处
            //由于找不到range.parentElement，所以干脆将_parentElem赋值为null
            _parentElem = null
          } else {
            _parentElem = range.parentElement()
          }
        }

        // 确定父元素一定要包含在编辑器区域内
        if (
          _parentElem &&
          ($.contains(txt, _parentElem) || txt === _parentElem)
        ) {
          // 保存选择区域
          self.currentRange(range)
        }
      }

      // 恢复选中区域
      E.fn.restoreSelection = function (currentRange) {
        var editor = this,
          selection,
          range

        currentRange = currentRange || editor.currentRange()
        if (!currentRange) {
          return
        }

        range = document.selection.createRange()
        try {
          // 此处，plupload上传上传图片时，IE8-会报一个『参数无效』的错误
          range.setEndPoint('EndToEnd', currentRange)
        } catch (ex) {
        }

        if (currentRange.text.length === 0) {
          try {
            // IE8 插入表情会报错
            range.collapse(false)
          } catch (ex) {
          }
        } else {
          range.setEndPoint('StartToStart', currentRange)
        }
        range.select()
      }
    })
    // editor command hooks
    _e(function (E, $) {
      E.fn.commandHooks = function () {
        var editor = this
        var commandHooks = {}

        // insertHtml
        commandHooks.insertHtml = function (html) {
          var $elem = $(html)
          var rangeElem = editor.getRangeElem()
          var targetElem

          targetElem = editor.getLegalTags(rangeElem)
          if (!targetElem) {
            return
          }

          $(targetElem).after($elem)
        }

        // 保存到对象
        editor.commandHooks = commandHooks
      }
    })
    // editor command API
    _e(function (E, $) {
      // 基本命令
      E.fn.command = function (e, commandName, commandValue, callback) {
        var editor = this
        var hooks

        function commandFn() {
          if (!commandName) {
            return
          }
          if (editor.queryCommandSupported(commandName)) {
            // 默认命令
            document.execCommand(commandName, false, commandValue)
          } else {
            // hooks 命令
            hooks = editor.commandHooks
            if (commandName in hooks) {
              hooks[commandName](commandValue)
            }
          }
        }

        this.customCommand(e, commandFn, callback)
      }

      // 针对一个elem对象执行基础命令
      E.fn.commandForElem = function (
        elemOpt,
        e,
        commandName,
        commandValue,
        callback
      ) {
        // 取得查询elem的查询条件和验证函数
        var selector
        var check
        if (typeof elemOpt === 'string') {
          selector = elemOpt
        } else {
          selector = elemOpt.selector
          check = elemOpt.check
        }

        // 查询elem
        var rangeElem = this.getRangeElem()
        rangeElem = this.getSelfOrParentByName(rangeElem, selector, check)

        // 根据elem设置range
        if (rangeElem) {
          this.setRangeByElem(rangeElem)
        }

        // 然后执行基础命令
        this.command(e, commandName, commandValue, callback)
      }

      // 自定义命令
      E.fn.customCommand = function (e, commandFn, callback) {
        var editor = this
        var range = editor.currentRange()

        if (!range) {
          // 目前没有选区，则无法执行命令
          e && e.preventDefault()
          return
        }
        // 记录内容，以便撤销（执行命令之前就要记录）
        editor.undoRecord()

        // 恢复选区（有 range 参数）
        this.restoreSelection(range)

        // 执行命令事件
        commandFn.call(editor)

        // 保存选区（无参数，要从浏览器直接获取range信息）
        this.saveSelection()
        // 重新恢复选区（无参数，要取得刚刚从浏览器得到的range信息）
        this.restoreSelection()

        // 执行 callback
        if (callback && typeof callback === 'function') {
          callback.call(editor)
        }

        // 最后插入空行
        editor.txt.insertEmptyP()

        // 包裹暴露的img和text
        editor.txt.wrapImgAndText()

        // 更新内容
        editor.updateValue()

        // 更新菜单样式
        editor.updateMenuStyle()

        // 隐藏 dropPanel dropList modal  设置 200ms 间隔
        function hidePanelAndModal() {
          editor.hideDropPanelAndModal()
        }

        setTimeout(hidePanelAndModal, 200)

        if (e) {
          e.preventDefault()
        }
      }

      // 封装 document.queryCommandValue 函数
      // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
      E.fn.queryCommandValue = function (commandName) {
        var result = ''
        try {
          result = document.queryCommandValue(commandName)
        } catch (ex) {
        }
        return result
      }

      // 封装 document.queryCommandState 函数
      // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
      E.fn.queryCommandState = function (commandName) {
        var result = false
        try {
          result = document.queryCommandState(commandName)
        } catch (ex) {
        }
        return result
      }

      // 封装 document.queryCommandSupported 函数
      E.fn.queryCommandSupported = function (commandName) {
        var result = false
        try {
          result = document.queryCommandSupported(commandName)
        } catch (ex) {
        }
        return result
      }
    })
    // dom selector
    _e(function (E, $) {
      var matchesSelector

      // matchesSelector hook
      function _matchesSelectorForIE(selector) {
        var elem = this
        var $elems = $(selector)
        var result = false

        // 用jquery查找 selector 所有对象，如果其中有一个和传入 elem 相同，则证明 elem 符合 selector
        $elems.each(function () {
          if (this === elem) {
            result = true
            return false
          }
        })

        return result
      }

      // 从当前的elem，往上去查找合法标签 如 p head table blockquote ul ol 等
      E.fn.getLegalTags = function (elem) {
        var legalTags = this.config.legalTags
        if (!legalTags) {
          E.error('配置项中缺少 legalTags 的配置')
          return
        }
        return this.getSelfOrParentByName(elem, legalTags)
      }

      // 根据条件，查询自身或者父元素，符合即返回
      E.fn.getSelfOrParentByName = function (elem, selector, check) {
        if (!elem || !selector) {
          return
        }

        if (!matchesSelector) {
          // 定义 matchesSelector 函数
          matchesSelector =
            elem.webkitMatchesSelector ||
            elem.mozMatchesSelector ||
            elem.oMatchesSelector ||
            elem.matchesSelector
        }
        if (!matchesSelector) {
          // 如果浏览器本身不支持 matchesSelector 则使用自定义的hook
          matchesSelector = _matchesSelectorForIE
        }

        var txt = this.txt.$txt.get(0)

        while (elem && txt !== elem && $.contains(txt, elem)) {
          if (matchesSelector.call(elem, selector)) {
            // 符合 selector 查询条件

            if (!check) {
              // 没有 check 验证函数，直接返回即可
              return elem
            }

            if (check(elem)) {
              // 如果有 check 验证函数，还需 check 函数的确认
              return elem
            }
          }

          // 如果上一步没经过验证，则将跳转到父元素
          elem = elem.parentNode
        }

        return
      }
    })
    // undo redo
    _e(function (E, $) {
      var length = 20 // 缓存的最大长度
      function _getRedoList(editor) {
        if (editor._redoList == null) {
          editor._redoList = []
        }
        return editor._redoList
      }

      function _getUndoList(editor) {
        if (editor._undoList == null) {
          editor._undoList = []
        }
        return editor._undoList
      }

      // 数据处理
      function _handle(editor, data, type) {
        // var range = data.range;
        // var range2 = range.cloneRange && range.cloneRange();
        var val = data.val
        var html = editor.txt.$txt.html()

        if (val == null) {
          return
        }

        if (val === html) {
          if (type === 'redo') {
            editor.redo()
            return
          } else if (type === 'undo') {
            editor.undo()
            return
          } else {
            return
          }
        }

        // 保存数据
        editor.txt.$txt.html(val)
        // 更新数据到textarea（有必要的话）
        editor.updateValue()

        // onchange 事件
        if (editor.onchange && typeof editor.onchange === 'function') {
          editor.onchange.call(editor)
        }

        // ?????
        // 注释：$txt 被重新赋值之后，range会被重置，cloneRange() 也不好使
        // // 重置选区
        // if (range2) {
        //     editor.restoreSelection(range2);
        // }
      }

      // 记录
      E.fn.undoRecord = function () {
        var editor = this
        var $txt = editor.txt.$txt
        var val = $txt.html()
        var undoList = _getUndoList(editor)
        var redoList = _getRedoList(editor)
        var currentVal = undoList.length ? undoList[0] : ''

        if (val === currentVal.val) {
          return
        }

        // 清空 redolist
        if (redoList.length) {
          redoList = []
        }

        // 添加数据到 undoList
        undoList.unshift({
          range: editor.currentRange(), // 将当前的range也记录下
          val: val
        })

        // 限制 undoList 长度
        if (undoList.length > length) {
          undoList.pop()
        }
      }

      // undo 操作
      E.fn.undo = function () {
        var editor = this
        var undoList = _getUndoList(editor)
        var redoList = _getRedoList(editor)

        if (!undoList.length) {
          return
        }

        // 取出 undolist 第一个值，加入 redolist
        var data = undoList.shift()
        redoList.unshift(data)

        // 并修改编辑器的内容
        _handle(this, data, 'undo')
      }

      // redo 操作
      E.fn.redo = function () {
        var editor = this
        var undoList = _getUndoList(editor)
        var redoList = _getRedoList(editor)
        if (!redoList.length) {
          return
        }

        // 取出 redolist 第一个值，加入 undolist
        var data = redoList.shift()
        undoList.unshift(data)

        // 并修改编辑器的内容
        _handle(this, data, 'redo')
      }
    })
    // 暴露给用户的 API
    _e(function (E, $) {
      // 创建编辑器
      E.fn.create = function () {
        var editor = this
        // 检查 E.$body 是否有值
        // 如果在 body 之前引用了 js 文件，body 尚未加载，可能没有值
        if (!E.$body || E.$body.length === 0) {
          E.$body = $('body')
          E.$document = $(document)
          E.$window = $(window)
        }

        // 执行 addMenus 之前：
        // 1. 允许用户修改 editor.UI 自定义配置UI
        // 2. 允许用户通过修改 editor.menus 来自定义配置菜单
        // 因此要在 create 时执行，而不是 init
        editor.addMenus()

        // 渲染
        editor.renderMenus()
        editor.renderMenuContainer()
        editor.renderTxt()
        editor.renderEditorContainer()

        // 绑定事件
        editor.eventMenus()
        editor.eventMenuContainer()
        editor.eventTxt()

        // 处理ready事件
        editor.readyHeadler()

        // 初始化选区
        editor.initSelection()

        // $txt 快捷方式
        editor.$txt = editor.txt.$txt

        // 执行用户自定义事件，通过 E.ready() 添加
        var _plugins = E._plugins
        if (_plugins && _plugins.length) {
          $.each(_plugins, function (k, val) {
            val.call(editor)
          })
        }
      }

      // 禁用编辑器
      E.fn.disable = function () {
        this.txt.$txt.removeAttr('contenteditable')
        this.disableMenusExcept()

        // 先禁用，再记录状态
        this._disabled = true
      }
      // 启用编辑器
      E.fn.enable = function () {
        // 先解除状态记录，再启用
        this._disabled = false
        this.txt.$txt.attr('contenteditable', 'true')
        this.enableMenusExcept()
      }

      // 销毁编辑器
      E.fn.destroy = function () {
        var self = this
        var $valueContainer = self.$valueContainer
        var $editorContainer = self.$editorContainer
        var valueNodeName = self.valueNodeName

        if (valueNodeName === 'div') {
          // div 生成的编辑器
          $valueContainer.removeAttr('contenteditable')
          $editorContainer.after($valueContainer)
          $editorContainer.hide()
        } else {
          // textarea 生成的编辑器
          $valueContainer.show()
          $editorContainer.hide()
        }
      }

      // 撤销 销毁编辑器
      E.fn.undestroy = function () {
        var self = this
        var $valueContainer = self.$valueContainer
        var $editorContainer = self.$editorContainer
        var $menuContainer = self.menuContainer.$menuContainer
        var valueNodeName = self.valueNodeName

        if (valueNodeName === 'div') {
          // div 生成的编辑器
          $valueContainer.attr('contenteditable', 'true')
          $menuContainer.after($valueContainer)
          $editorContainer.show()
        } else {
          // textarea 生成的编辑器
          $valueContainer.hide()
          $editorContainer.show()
        }
      }

      // 清空内容的快捷方式
      E.fn.clear = function () {
        var editor = this
        var $txt = editor.txt.$txt
        $txt.html('<p><br></p>')
        editor.restoreSelectionByElem($txt.find('p').get(0))
      }

      E.fn.addUploadImage = function (imageUrl, callback) {
        var editor = this
        var url = imageUrl.trim()
        if (!url) {
          // 无内容
          return
        }
        var imgHtml = '<img style="max-width:100%;display:block;" src="' + url + '"/>'
        if (editor.config.defaultWidth && editor.config.defaultWidth()) {
          imgHtml = '<img style="width:' + editor.config.defaultWidth() + '%;display:block;" src="' + url + '"/>'
        }
        editor.command(null, 'insertHtml', imgHtml, callback)
      }
    })
    // menuContainer 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var MenuContainer = function (editor) {
        this.editor = editor
        this.init()
      }

      MenuContainer.fn = MenuContainer.prototype

      // 暴露给 E 即 window.wangEditor
      E.MenuContainer = MenuContainer
    })
    // MenuContainer.fn bind fn
    _e(function (E, $) {
      var MenuContainer = E.MenuContainer

      // 初始化
      MenuContainer.fn.init = function () {
        var self = this
        var $menuContainer = $(
          '<div class="wangEditor-menu-container clearfix"></div>'
        )

        self.$menuContainer = $menuContainer

        // change shadow
        self.changeShadow()
      }

      // 编辑区域滚动时，增加shadow
      MenuContainer.fn.changeShadow = function () {
        var $menuContainer = this.$menuContainer
        var editor = this.editor
        var $txt = editor.txt.$txt

        $txt.on('scroll', function () {
          if ($txt.scrollTop() > 10) {
            $menuContainer.addClass('wangEditor-menu-shadow')
          } else {
            $menuContainer.removeClass('wangEditor-menu-shadow')
          }
        })
      }
    })
    // MenuContainer.fn API
    _e(function (E, $) {
      var MenuContainer = E.MenuContainer

      MenuContainer.fn.render = function () {
        var $menuContainer = this.$menuContainer
        var $editorContainer = this.editor.$editorContainer

        $editorContainer.append($menuContainer)
      }

      // 获取菜单栏的高度
      MenuContainer.fn.height = function () {
        var $menuContainer = this.$menuContainer
        return $menuContainer.height()
      }

      // 添加菜单
      MenuContainer.fn.appendMenu = function (groupIdx, menu) {
        // 判断是否需要新增一个菜单组
        this._addGroup(groupIdx)
        // 增加菜单（返回 $menuItem）
        return this._addOneMenu(menu)
      }
      MenuContainer.fn._addGroup = function (groupIdx) {
        var $menuContainer = this.$menuContainer
        var $menuGroup
        if (!this.$currentGroup || this.currentGroupIdx !== groupIdx) {
          $menuGroup = $('<div class="menu-group clearfix"></div>')
          $menuContainer.append($menuGroup)

          this.$currentGroup = $menuGroup
          this.currentGroupIdx = groupIdx
        }
      }
      MenuContainer.fn._addOneMenu = function (menu) {
        var $menuNormal = menu.$domNormal
        var $menuSelected = menu.$domSelected

        var $menuGroup = this.$currentGroup
        var $item = $('<div class="menu-item clearfix"></div>')
        $menuSelected.hide()
        $item.append($menuNormal).append($menuSelected)
        $menuGroup.append($item)

        return $item
      }
    })
    // menu 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var Menu = function (opt) {
        this.editor = opt.editor
        this.id = opt.id
        this.title = opt.title
        this.$domNormal = opt.$domNormal
        this.$domSelected = opt.$domSelected || opt.$domNormal

        // document.execCommand 的参数
        this.commandName = opt.commandName
        this.commandValue = opt.commandValue
        this.commandNameSelected = opt.commandNameSelected || opt.commandName
        this.commandValueSelected = opt.commandValueSelected || opt.commandValue
      }

      Menu.fn = Menu.prototype

      // 暴露给 E 即 window.wangEditor
      E.Menu = Menu
    })
    // Menu.fn 初始化绑定的事件
    _e(function (E, $) {
      var Menu = E.Menu

      // 初始化UI
      Menu.fn.initUI = function () {
        var editor = this.editor
        var uiConfig = editor.UI.menus
        var menuId = this.id
        var menuUI = uiConfig[menuId]

        if (this.$domNormal && this.$domSelected) {
          // 自定义的菜单中，已经传入了 $dom 无需从配置文件中查找生成
          return
        }

        if (menuUI == null) {
          E.warn(
            'editor.UI配置中，没有菜单 "' + menuId + '" 的UI配置，只能取默认值'
          )

          // 必须写成 uiConfig['default'];
          // 写成 uiConfig.default IE8会报错
          menuUI = uiConfig['default']
        }

        // 正常状态
        this.$domNormal = $(menuUI.normal)

        // 选中状态
        if (/^\./.test(menuUI.selected)) {
          // 增加一个样式
          this.$domSelected = this.$domNormal
            .clone()
            .addClass(menuUI.selected.slice(1))
        } else {
          // 一个新的dom对象
          this.$domSelected = $(menuUI.selected)
        }
      }
    })
    // Menu.fn API
    _e(function (E, $) {
      var Menu = E.Menu

      // 渲染菜单
      Menu.fn.render = function (groupIdx) {
        // 渲染UI
        this.initUI()

        var editor = this.editor
        var menuContainer = editor.menuContainer
        var $menuItem = menuContainer.appendMenu(groupIdx, this)
        var onRender = this.onRender

        // 渲染tip
        this._renderTip($menuItem)

        // 执行 onRender 函数
        if (onRender && typeof onRender === 'function') {
          onRender.call(this)
        }
      }
      Menu.fn._renderTip = function ($menuItem) {
        var self = this
        var editor = self.editor
        var title = self.title
        var $tip = $('<div class="menu-tip"></div>')
        // var $triangle = $('<i class="tip-triangle"></i>'); // 小三角

        // 计算 tip 宽度
        var $tempDiv
        if (!self.tipWidth) {
          // 设置一个纯透明的 p（absolute;top:-10000px;不会显示在内容区域）
          // 内容赋值为 title ，为了计算tip宽度
          $tempDiv = $(
            '<p style="opacity:0; filter:Alpha(opacity=0); position:absolute;top:-10000px;">' +
            title +
            '</p>'
          )
          // 先添加到body，计算完再 remove
          E.$body.append($tempDiv)
          editor.ready(function () {
            var editor = this
            var titleWidth = $tempDiv.outerWidth() + 5 // 多出 5px 的冗余
            var currentWidth = $tip.outerWidth()
            var currentMarginLeft = parseFloat($tip.css('margin-left'), 10)
            // 计算完，拿到数据，则弃用
            $tempDiv.remove()
            $tempDiv = null

            // 重新设置样式
            $tip.css({
              width: titleWidth,
              'margin-left': currentMarginLeft + (currentWidth - titleWidth) / 2
            })

            // 存储
            self.tipWidth = titleWidth
          })
        }

        // $tip.append($triangle);
        $tip.append(title)
        $menuItem.append($tip)

        function show() {
          $tip.show()
        }

        function hide() {
          $tip.hide()
        }

        var timeoutId
        $menuItem
          .find('a')
          .on('mouseenter', function (e) {
            if (!self.active() && !self.disabled()) {
              timeoutId = setTimeout(show, 200)
            }
          })
          .on('mouseleave', function (e) {
            timeoutId && clearTimeout(timeoutId)
            hide()
          })
          .on('click', hide)
      }

      // 绑定事件
      Menu.fn.bindEvent = function () {
        var self = this

        var $domNormal = self.$domNormal
        var $domSelected = self.$domSelected

        // 试图获取该菜单定义的事件（未selected），没有则自己定义
        var clickEvent = self.clickEvent
        if (!clickEvent) {
          clickEvent = function (e) {
            // -----------dropPanel dropList modal-----------
            var dropObj = self.dropPanel || self.dropList || self.modal
            if (dropObj && dropObj.show) {
              if (dropObj.isShowing) {
                dropObj.hide()
              } else {
                dropObj.show()
              }
              return
            }

            // -----------command-----------
            var editor = self.editor
            var commandName
            var commandValue

            var selected = self.selected
            if (selected) {
              commandName = self.commandNameSelected
              commandValue = self.commandValueSelected
            } else {
              commandName = self.commandName
              commandValue = self.commandValue
            }

            if (commandName) {
              // 执行命令
              editor.command(e, commandName, commandValue)
            } else {
              E.warn('菜单 "' + self.id + '" 未定义click事件')
              e.preventDefault()
            }
          }
        }
        // 获取菜单定义的selected情况下的点击事件
        var clickEventSelected = self.clickEventSelected || clickEvent

        // 将事件绑定到菜单dom上
        $domNormal.click(function (e) {
          if (!self.disabled()) {
            clickEvent.call(self, e)
            self.updateSelected()
          }
          e.preventDefault()
        })
        $domSelected.click(function (e) {
          if (!self.disabled()) {
            clickEventSelected.call(self, e)
            self.updateSelected()
          }
          e.preventDefault()
        })
      }

      // 更新选中状态
      Menu.fn.updateSelected = function () {
        var self = this
        var editor = self.editor

        // 试图获取用户自定义的判断事件
        var updateSelectedEvent = self.updateSelectedEvent
        if (!updateSelectedEvent) {
          // 用户未自定义，则设置默认值
          updateSelectedEvent = function () {
            var self = this
            var editor = self.editor
            var commandName = self.commandName
            var commandValue = self.commandValue

            if (commandValue) {
              if (
                editor.queryCommandValue(commandName).toLowerCase() ===
                commandValue.toLowerCase()
              ) {
                return true
              }
            } else if (editor.queryCommandState(commandName)) {
              return true
            }

            return false
          }
        }

        // 获取结果
        var result = updateSelectedEvent.call(self)
        result = !!result

        // 存储结果、显示效果
        self.changeSelectedState(result)
      }

      // 切换选中状态、显示效果
      Menu.fn.changeSelectedState = function (state) {
        var self = this
        var selected = self.selected

        if (state != null && typeof state === 'boolean') {
          if (selected === state) {
            // 计算结果和当前的状态一样
            return
          }
          // 存储结果
          self.selected = state

          // 切换菜单的显示
          if (state) {
            // 选中
            self.$domNormal.hide()
            self.$domSelected.show()
          } else {
            // 未选中
            self.$domNormal.show()
            self.$domSelected.hide()
          }
        } // if
      }

      // 点击菜单，显示了 dropPanel modal 时，菜单的状态
      Menu.fn.active = function (active) {
        if (active == null) {
          return this._activeState
        }
        this._activeState = active
      }
      Menu.fn.activeStyle = function (active) {
        var selected = this.selected
        var $dom = this.$domNormal
        var $domSelected = this.$domSelected

        if (active) {
          $dom.addClass('active')
          $domSelected.addClass('active')
        } else {
          $dom.removeClass('active')
          $domSelected.removeClass('active')
        }

        // 记录状态 （ menu hover 时会取状态用 ）
        this.active(active)
      }

      // 菜单的启用和禁用
      Menu.fn.disabled = function (opt) {
        // 参数为空，取值
        if (opt == null) {
          return !!this._disabled
        }

        if (this._disabled === opt) {
          // 要设置的参数值和当前参数只一样，无需再次设置
          return
        }

        var $dom = this.$domNormal
        var $domSelected = this.$domSelected

        // 设置样式
        if (opt) {
          $dom.addClass('disable')
          $domSelected.addClass('disable')
        } else {
          $dom.removeClass('disable')
          $domSelected.removeClass('disable')
        }

        // 存储
        this._disabled = opt
      }
    })
    // dropList 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var DropList = function (editor, menu, opt) {
        this.editor = editor
        this.menu = menu

        // list 的数据源，格式 {'commandValue': 'title', ...}
        this.data = opt.data
        // 要为每个item自定义的模板
        this.tpl = opt.tpl
        // 为了执行 editor.commandForElem 而传入的elem查询方式
        this.selectorForELemCommand = opt.selectorForELemCommand

        // 执行事件前后的钩子
        this.beforeEvent = opt.beforeEvent
        this.afterEvent = opt.afterEvent

        // 初始化
        this.init()
      }

      DropList.fn = DropList.prototype

      // 暴露给 E 即 window.wangEditor
      E.DropList = DropList
    })
    // dropList fn bind
    _e(function (E, $) {
      var DropList = E.DropList

      // init
      DropList.fn.init = function () {
        var self = this

        // 生成dom对象
        self.initDOM()

        // 绑定command事件
        self.bindEvent()

        // 声明隐藏的事件
        self.initHideEvent()
      }

      // 初始化dom结构
      DropList.fn.initDOM = function () {
        var self = this
        var data = self.data
        var tpl = self.tpl || '<span>{#title}</span>'
        var $list = $('<div class="wangEditor-drop-list clearfix"></div>')

        var itemContent
        var $item
        $.each(data, function (commandValue, title) {
          itemContent = tpl
            .replace(/{#commandValue}/gi, commandValue)
            .replace(/{#title}/gi, title)
          $item = $('<a href="#" commandValue="' + commandValue + '"></a>')
          $item.append(itemContent)
          $list.append($item)
        })

        self.$list = $list
      }

      // 绑定事件
      DropList.fn.bindEvent = function () {
        var self = this
        var editor = self.editor
        var menu = self.menu
        var commandName = menu.commandName
        var selectorForELemCommand = self.selectorForELemCommand
        var $list = self.$list

        // 执行事件前后的钩子函数
        var beforeEvent = self.beforeEvent
        var afterEvent = self.afterEvent

        $list.on('click', 'a[commandValue]', function (e) {
          // 正式命令执行之前
          if (beforeEvent && typeof beforeEvent === 'function') {
            beforeEvent.call(e)
          }

          // 执行命令
          var commandValue = $(e.currentTarget).attr('commandValue')
          if (
            menu.selected &&
            editor.isRangeEmpty() &&
            selectorForELemCommand
          ) {
            // 当前处于选中状态，并且选中内容为空
            editor.commandForElem(
              selectorForELemCommand,
              e,
              commandName,
              commandValue
            )
          } else {
            // 当前未处于选中状态，或者有选中内容。则执行默认命令
            editor.command(e, commandName, commandValue)
          }

          // 正式命令之后的钩子
          if (afterEvent && typeof afterEvent === 'function') {
            afterEvent.call(e)
          }
        })
      }

      // 点击其他地方，立即隐藏 droplist
      DropList.fn.initHideEvent = function () {
        var self = this

        // 获取 list elem
        var thisList = self.$list.get(0)

        E.$body.on('click', function (e) {
          if (!self.isShowing) {
            return
          }
          var trigger = e.target

          // 获取菜单elem
          var menu = self.menu
          var menuDom
          if (menu.selected) {
            menuDom = menu.$domSelected.get(0)
          } else {
            menuDom = menu.$domNormal.get(0)
          }

          if (menuDom === trigger || $.contains(menuDom, trigger)) {
            // 说明由本菜单点击触发的
            return
          }

          if (thisList === trigger || $.contains(thisList, trigger)) {
            // 说明由本list点击触发的
            return
          }

          // 其他情况，隐藏 list
          self.hide()
        })

        E.$window.scroll(function () {
          self.hide()
        })

        E.$window.on('resize', function () {
          self.hide()
        })
      }
    })
    // dropListfn api
    _e(function (E, $) {
      var DropList = E.DropList

      // 渲染
      DropList.fn._render = function () {
        var self = this
        var editor = self.editor
        var $list = self.$list

        // 渲染到页面
        editor.$editorContainer.append($list)

        // 记录状态
        self.rendered = true
      }

      // 定位
      DropList.fn._position = function () {
        var self = this
        var $list = self.$list
        var editor = self.editor
        var menu = self.menu
        var $menuContainer = editor.menuContainer.$menuContainer
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position()

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top
        var menuLeft = menuPosition.left
        var menuHeight = $menuDom.offsetParent().height()
        var menuWidth = $menuDom.offsetParent().width()

        // 取得 list 的尺寸属性
        var listWidth = $list.outerWidth()
        // var listHeight = $list.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth()

        // ------------开始计算-------------

        // 初步计算 list 位置属性
        var top = menuTop + menuHeight
        var left = menuLeft + menuWidth / 2
        var marginLeft = 0 - menuWidth / 2

        // 如果超出了有边界，则要左移（且和右侧有间隙）
        var valWithTxt = left + listWidth - txtWidth
        if (valWithTxt > -10) {
          marginLeft = marginLeft - valWithTxt - 10
        }
        // 设置样式
        $list.css({
          top: top,
          left: left,
          'margin-left': marginLeft
        })

        // 如果因为向下滚动而导致菜单fixed，则再加一步处理
        if (editor._isMenufixed) {
          top =
            top +
            ($menuContainer.offset().top +
              $menuContainer.outerHeight() -
              $list.offset().top)

          // 重新设置top
          $list.css({
            top: top
          })
        }
      }

      // 显示
      DropList.fn.show = function () {
        var self = this
        var menu = self.menu
        if (!self.rendered) {
          // 第一次show之前，先渲染
          self._render()
        }

        if (self.isShowing) {
          return
        }

        var $list = self.$list
        $list.show()

        // 定位
        self._position()

        // 记录状态
        self.isShowing = true

        // 菜单状态
        menu.activeStyle(true)
      }

      // 隐藏
      DropList.fn.hide = function () {
        var self = this
        var menu = self.menu
        if (!self.isShowing) {
          return
        }

        var $list = self.$list
        $list.hide()

        // 记录状态
        self.isShowing = false

        // 菜单状态
        menu.activeStyle(false)
      }
    })
    // dropPanel 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var DropPanel = function (editor, menu, opt) {
        this.editor = editor
        this.menu = menu
        this.$content = opt.$content
        this.width = opt.width || 200
        this.height = opt.height
        this.onRender = opt.onRender

        // init
        this.init()
      }

      DropPanel.fn = DropPanel.prototype

      // 暴露给 E 即 window.wangEditor
      E.DropPanel = DropPanel
    })
    // dropPanel fn bind
    _e(function (E, $) {
      var DropPanel = E.DropPanel

      // init
      DropPanel.fn.init = function () {
        var self = this

        // 生成dom对象
        self.initDOM()

        // 声明隐藏的事件
        self.initHideEvent()
      }

      // init DOM
      DropPanel.fn.initDOM = function () {
        var self = this
        var $content = self.$content
        var width = self.width
        var height = self.height
        var $panel = $('<div class="wangEditor-drop-panel clearfix"></div>')
        var $triangle = $('<div class="tip-triangle"></div>')

        $panel.css({
          width: width,
          height: height ? height : 'auto'
        })
        $panel.append($triangle)
        $panel.append($content)

        // 添加对象数据
        self.$panel = $panel
        self.$triangle = $triangle
      }

      // 点击其他地方，立即隐藏 dropPanel
      DropPanel.fn.initHideEvent = function () {
        var self = this

        // 获取 panel elem
        var thisPanle = self.$panel.get(0)

        E.$body.on('click', function (e) {
          if (!self.isShowing) {
            return
          }
          var trigger = e.target

          // 获取菜单elem
          var menu = self.menu
          var menuDom
          if (menu.selected) {
            menuDom = menu.$domSelected.get(0)
          } else {
            menuDom = menu.$domNormal.get(0)
          }

          if (menuDom === trigger || $.contains(menuDom, trigger)) {
            // 说明由本菜单点击触发的
            return
          }

          if (thisPanle === trigger || $.contains(thisPanle, trigger)) {
            // 说明由本panel点击触发的
            return
          }

          // 其他情况，隐藏 panel
          self.hide()
        })

        E.$window.scroll(function (e) {
          self.hide()
        })

        E.$window.on('resize', function () {
          self.hide()
        })
      }
    })
    // dropPanel fn api
    _e(function (E, $) {
      var DropPanel = E.DropPanel

      // 渲染
      DropPanel.fn._render = function () {
        var self = this
        var onRender = self.onRender
        var editor = self.editor
        var $panel = self.$panel

        // 渲染到页面
        editor.$editorContainer.append($panel)

        // 渲染后的回调事件
        onRender && onRender.call(self)

        // 记录状态
        self.rendered = true
      }

      // 定位
      DropPanel.fn._position = function () {
        var self = this
        var $panel = self.$panel
        var $triangle = self.$triangle
        var editor = self.editor
        var $menuContainer = editor.menuContainer.$menuContainer
        var menu = self.menu
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position()

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top
        var menuLeft = menuPosition.left
        var menuHeight = $menuDom.offsetParent().height()
        var menuWidth = $menuDom.offsetParent().width()

        // 取得 panel 的尺寸属性
        var panelWidth = $panel.outerWidth()
        // var panelHeight = $panel.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth()

        // ------------开始计算-------------

        // 初步计算 panel 位置属性
        var top = menuTop + menuHeight
        var left = menuLeft + menuWidth / 2
        var marginLeft = 0 - panelWidth / 2
        var marginLeft2 = marginLeft // 下文用于和 marginLeft 比较，来设置三角形tip的位置

        // 如果超出了左边界，则移动回来（要和左侧有10px间隙）
        if (0 - marginLeft > left - 10) {
          marginLeft = 0 - (left - 10)
        }

        // 如果超出了有边界，则要左移（且和右侧有10px间隙）
        var valWithTxt = left + panelWidth + marginLeft - txtWidth
        if (valWithTxt > -10) {
          marginLeft = marginLeft - valWithTxt - 10
        }

        // 设置样式
        $panel.css({
          top: top,
          left: left,
          'margin-left': marginLeft
        })

        // 如果因为向下滚动而导致菜单fixed，则再加一步处理
        if (editor._isMenufixed) {
          top =
            top +
            ($menuContainer.offset().top +
              $menuContainer.outerHeight() -
              $panel.offset().top)

          // 重新设置top
          $panel.css({
            top: top
          })
        }

        // 设置三角形 tip 的位置
        $triangle.css({
          'margin-left': marginLeft2 - marginLeft - 5
        })
      }

      // focus 第一个 input
      DropPanel.fn.focusFirstInput = function () {
        var self = this
        var $panel = self.$panel
        $panel.find('input[type=text],textarea').each(function () {
          var $input = $(this)
          if ($input.attr('disabled') == null) {
            $input.focus()
            return false
          }
        })
      }

      // 显示
      DropPanel.fn.show = function () {
        var self = this
        var menu = self.menu
        if (!self.rendered) {
          // 第一次show之前，先渲染
          self._render()
        }

        if (self.isShowing) {
          return
        }

        var $panel = self.$panel
        $panel.show()

        // 定位
        self._position()

        // 记录状态
        self.isShowing = true

        // 菜单状态
        menu.activeStyle(true)

        if (E.w3cRange) {
          // 高级浏览器
          self.focusFirstInput()
        } else {
          // 兼容 IE8 input placeholder
          E.placeholderForIE8($panel)
        }
      }

      // 隐藏
      DropPanel.fn.hide = function () {
        var self = this
        var menu = self.menu
        if (!self.isShowing) {
          return
        }

        var $panel = self.$panel
        $panel.hide()

        // 记录状态
        self.isShowing = false

        // 菜单状态
        menu.activeStyle(false)
      }
    })
    // modal 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var Modal = function (editor, menu, opt) {
        this.editor = editor
        this.menu = menu
        this.$content = opt.$content

        this.init()
      }

      Modal.fn = Modal.prototype

      // 暴露给 E 即 window.wangEditor
      E.Modal = Modal
    })
    // modal fn bind
    _e(function (E, $) {
      var Modal = E.Modal

      Modal.fn.init = function () {
        var self = this

        // 初始化dom
        self.initDom()

        // 初始化隐藏事件
        self.initHideEvent()
      }

      // 初始化dom
      Modal.fn.initDom = function () {
        var self = this
        var $content = self.$content
        var $modal = $('<div class="wangEditor-modal"></div>')
        var $close = $(
          '<div class="wangEditor-modal-close"><i class="wangeditor-menu-img-cancel-circle"></i></div>'
        )

        $modal.append($close)
        $modal.append($content)

        // 记录数据
        self.$modal = $modal
        self.$close = $close
      }

      // 初始化隐藏事件
      Modal.fn.initHideEvent = function () {
        var self = this
        var $close = self.$close
        var modal = self.$modal.get(0)

        // 点击 $close 按钮，隐藏
        $close.click(function () {
          self.hide()
        })

        // 点击其他部分，隐藏
        E.$body.on('click', function (e) {
          if (!self.isShowing) {
            return
          }
          var trigger = e.target

          // 获取菜单elem
          var menu = self.menu
          var menuDom
          if (menu) {
            if (menu.selected) {
              menuDom = menu.$domSelected.get(0)
            } else {
              menuDom = menu.$domNormal.get(0)
            }

            if (menuDom === trigger || $.contains(menuDom, trigger)) {
              // 说明由本菜单点击触发的
              return
            }
          }

          if (modal === trigger || $.contains(modal, trigger)) {
            // 说明由本panel点击触发的
            return
          }

          // 其他情况，隐藏 panel
          self.hide()
        })
      }
    })
    // modal fn api
    _e(function (E, $) {
      var Modal = E.Modal

      // 渲染
      Modal.fn._render = function () {
        var self = this
        var editor = self.editor
        var $modal = self.$modal

        // $modal的z-index，在配置的z-index基础上再 +10
        $modal.css('z-index', editor.config.zindex + 10 + '')

        // 渲染到body最后面
        E.$body.append($modal)

        // 记录状态
        self.rendered = true
      }

      // 定位
      Modal.fn._position = function () {
        var self = this
        var $modal = self.$modal
        var top = $modal.offset().top
        var width = $modal.outerWidth()
        var height = $modal.outerHeight()
        var marginLeft = 0 - width / 2
        var marginTop = 0 - height / 2
        var sTop = E.$window.scrollTop()

        // 保证modal最顶部，不超过浏览器上边框
        if (height / 2 > top) {
          marginTop = 0 - top
        }

        $modal.css({
          'margin-left': marginLeft + 'px',
          'margin-top': marginTop + sTop + 'px'
        })
      }

      // 显示
      Modal.fn.show = function () {
        var self = this
        var menu = self.menu
        if (!self.rendered) {
          // 第一次show之前，先渲染
          self._render()
        }

        if (self.isShowing) {
          return
        }
        // 记录状态
        self.isShowing = true

        var $modal = self.$modal
        $modal.show()

        // 定位
        self._position()

        // 激活菜单状态
        menu && menu.activeStyle(true)
      }

      // 隐藏
      Modal.fn.hide = function () {
        var self = this
        var menu = self.menu
        if (!self.isShowing) {
          return
        }
        // 记录状态
        self.isShowing = false

        // 隐藏
        var $modal = self.$modal
        $modal.hide()

        // 菜单状态
        menu && menu.activeStyle(false)
      }
    })
    // txt 构造函数
    _e(function (E, $) {
      // 定义构造函数
      var Txt = function (editor) {
        this.editor = editor

        // 初始化
        this.init()
      }

      Txt.fn = Txt.prototype

      // 暴露给 E 即 window.wangEditor
      E.Txt = Txt
    })
    // Txt.fn bind fn
    _e(function (E, $) {
      var Txt = E.Txt

      // 初始化
      Txt.fn.init = function () {
        var self = this
        var editor = self.editor
        var $valueContainer = editor.$valueContainer
        var currentValue = editor.getInitValue()
        var $txt

        if ($valueContainer.get(0).nodeName === 'DIV') {
          // 如果传入生成编辑器的元素就是div，则直接使用
          $txt = $valueContainer
          $txt.addClass('wangEditor-txt')
          $txt.attr('contentEditable', 'true')
        } else {
          // 如果不是div（是textarea），则创建一个div
          $txt = $(
            '<div class="wangEditor-txt" contentEditable="true">' +
            currentValue +
            '</div>'
          )
        }

        // 试图最后插入一个空行，ready之后才行
        editor.ready(function () {
          self.insertEmptyP()
        })

        self.$txt = $txt

        // 删除时，如果没有内容了，就添加一个 <p><br></p>
        self.contentEmptyHandle()

        // enter时，不能使用 div 换行
        self.bindEnterForDiv()

        // enter时，用 p 包裹 text
        self.bindEnterForText()

        // tab 插入4个空格
        self.bindTabEvent()

        // 处理粘贴内容
        self.bindPasteFilter()

        // $txt.formatText() 方法
        self.bindFormatText()

        // 定义 $txt.html() 方法
        self.bindHtml()
      }

      // 删除时，如果没有内容了，就添加一个 <p><br></p>
      Txt.fn.contentEmptyHandle = function () {
        var self = this
        var editor = self.editor
        var $txt = self.$txt
        var $p

        $txt.on('keydown', function (e) {
          if (e.keyCode !== 8) {
            return
          }
          var txtHtml = $.trim($txt.html().toLowerCase())
          if (txtHtml === '<p><br></p>') {
            // 如果最后还剩余一个空行，就不再继续删除了
            e.preventDefault()
            return
          }
        })

        $txt.on('keyup', function (e) {
          if (e.keyCode !== 8) {
            return
          }
          var txtHtml = $.trim($txt.html().toLowerCase())
          // ff时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
          if (!txtHtml || txtHtml === '<br>') {
            // 内容空了
            $p = $('<p><br/></p>')
            $txt.html('') // 一定要先清空，否则在 ff 下有问题
            $txt.append($p)
            editor.restoreSelectionByElem($p.get(0))
          }
        })
      }

      // enter时，不能使用 div 换行
      Txt.fn.bindEnterForDiv = function () {
        var tags = E.config.legalTags // 配置中编辑器要求的合法标签，如 p head table blockquote ul ol 等
        var self = this
        var editor = self.editor
        var $txt = self.$txt

        var $keydownDivElem

        function divHandler() {
          if (!$keydownDivElem) {
            return
          }

          var $pElem = $('<p>' + $keydownDivElem.html() + '</p>')
          $keydownDivElem.after($pElem)
          $keydownDivElem.remove()
        }

        $txt.on('keydown keyup', function (e) {
          if (e.keyCode !== 13) {
            return
          }
          // 查找合法标签
          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getLegalTags(rangeElem)
          var $targetElem
          var $pElem

          if (!targetElem) {
            // 没找到合法标签，就去查找 div
            targetElem = editor.getSelfOrParentByName(rangeElem, 'div')
            if (!targetElem) {
              return
            }
            $targetElem = $(targetElem)

            if (e.type === 'keydown') {
              // 异步执行（同步执行会出现问题）
              $keydownDivElem = $targetElem
              setTimeout(divHandler, 0)
            }

            if (e.type === 'keyup') {
              // 将 div 的内容移动到 p 里面，并移除 div
              $pElem = $('<p>' + $targetElem.html() + '</p>')
              $targetElem.after($pElem)
              $targetElem.remove()

              // 如果是回车结束，将选区定位到行首
              editor.restoreSelectionByElem($pElem.get(0), 'start')
            }
          }
        })
      }

      // enter时，用 p 包裹 text
      Txt.fn.bindEnterForText = function () {
        var self = this
        var $txt = self.$txt
        var handle
        $txt.on('keyup', function (e) {
          if (e.keyCode !== 13) {
            return
          }
          if (!handle) {
            handle = function () {
              self.wrapImgAndText()
            }
          }
          setTimeout(handle)
        })
      }

      // tab 时，插入4个空格
      Txt.fn.bindTabEvent = function () {
        var self = this
        var editor = self.editor
        var $txt = self.$txt

        $txt.on('keydown', function (e) {
          if (e.keyCode !== 9) {
            // 只监听 tab 按钮
            return
          }
          // 如果浏览器支持 insertHtml 则插入4个空格。如果不支持，就不管了
          if (editor.queryCommandSupported('insertHtml')) {
            editor.command(e, 'insertHtml', '&nbsp;&nbsp;&nbsp;&nbsp;')
          }
        })
      }

      // 处理粘贴内容
      Txt.fn.bindPasteFilter = function () {
        var self = this
        var editor = self.editor
        var resultHtml = '' //存储最终的结果
        var $txt = self.$txt
        var legalTags = editor.config.legalTags
        var legalTagArr = legalTags.split(',')

        $txt.on('paste', function (e) {
          if (!editor.config.pasteFilter) {
            // 配置中取消了粘贴过滤
            return
          }

          var currentNodeName = editor.getRangeElem().nodeName
          if (currentNodeName === 'TD' || currentNodeName === 'TH') {
            // 在表格的单元格中粘贴，忽略所有内容。否则会出现异常情况
            return
          }

          resultHtml = '' // 先清空 resultHtml

          var pasteHtml, $paste, docSplitHtml
          var data = e.clipboardData || e.originalEvent.clipboardData
          var ieData = window.clipboardData

          if (editor.config.pasteText) {
            // 只粘贴纯文本

            if (data && data.getData) {
              // w3c
              pasteHtml = data.getData('text/plain')
            } else if (ieData && ieData.getData) {
              // IE
              pasteHtml = ieData.getData('text')
            } else {
              // 其他情况
              return
            }

            // 拼接为 <p> 标签
            if (pasteHtml) {
              resultHtml = '<p>' + pasteHtml + '</p>'
            }
          } else {
            // 粘贴过滤了样式的、只有标签的 html

            if (data && data.getData) {
              // w3c

              // 获取粘贴过来的html
              pasteHtml = data.getData('text/html')

              // 过滤从 word excel 粘贴过来的乱码
              docSplitHtml = pasteHtml.split('</html>')
              if (docSplitHtml.length === 2) {
                pasteHtml = docSplitHtml[0]
              }

              if (pasteHtml) {
                // 创建dom
                $paste = $('<div>' + pasteHtml + '</div>')
                // 处理，并将结果存储到 resultHtml 『全局』变量
                handle($paste.get(0))
              } else {
                // 得不到html，试图获取text
                pasteHtml = data.getData('text/plain')
                if (pasteHtml) {
                  // 替换特殊字符
                  pasteHtml = pasteHtml
                    .replace(/[ ]/g, '&nbsp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/\n/g, '</p><p>')
                  // 拼接
                  resultHtml = '<p>' + pasteHtml + '</p>'

                  // 查询链接
                  resultHtml = resultHtml.replace(
                    /<p>(https?:\/\/.*?)<\/p>/gi,
                    function (match, link) {
                      return (
                        '<p><a href="' +
                        link +
                        '" target="_blank">' +
                        link +
                        '</p>'
                      )
                    }
                  )
                }
              }
            } else if (ieData && ieData.getData) {
              // IE 直接从剪切板中取出纯文本格式
              resultHtml = ieData.getData('text')
              if (!resultHtml) {
                return
              }
              // 拼接为 <p> 标签
              resultHtml = '<p>' + resultHtml + '</p>'
              resultHtml = resultHtml.replace(new RegExp('\n', 'g'), '</p><p>')
            } else {
              // 其他情况
              return
            }
          }

          // 执行命令
          if (resultHtml) {
            editor.command(e, 'insertHtml', resultHtml)

            // 删除内容为空的 p 和嵌套的 p
            self.clearEmptyOrNestP()
          }
        })

        // 处理粘贴的内容
        function handle(elem) {
          if (!elem || !elem.nodeType || !elem.nodeName) {
            return
          }
          var $elem
          var nodeName = elem.nodeName.toLowerCase()
          var nodeType = elem.nodeType
          var childNodesClone

          // 只处理文本和普通node标签
          if (nodeType !== 3 && nodeType !== 1) {
            return
          }

          $elem = $(elem)

          // 如果是容器，则继续深度遍历
          if (nodeName === 'div') {
            childNodesClone = []
            $.each(elem.childNodes, function (index, item) {
              // elem.childNodes 可获取TEXT节点，而 $elem.children() 就获取不到
              // 先将 elem.childNodes 拷贝一份，一面在循环递归过程中 elem 发生变化
              childNodesClone.push(item)
            })
            // 遍历子元素，执行操作
            $.each(childNodesClone, function () {
              handle(this)
            })
            return
          }

          if (legalTagArr.indexOf(nodeName) >= 0) {
            // 如果是合法标签之内的，则根据元素类型，获取值
            resultHtml += getResult(elem)
          } else if (nodeType === 3) {
            // 如果是文本，则直接插入 p 标签
            resultHtml += '<p>' + elem.textContent + '</p>'
          } else if (nodeName === 'br') {
            // <br>保留
            resultHtml += '<br/>'
          } else {
            // 忽略的标签
            if (
              [
                'meta',
                'style',
                'script',
                'object',
                'form',
                'iframe',
                'hr'
              ].indexOf(nodeName) >= 0
            ) {
              return
            }
            // 其他标签，移除属性，插入 p 标签
            $elem = $(removeAttrs(elem))
            // 注意，这里的 clone() 是必须的，否则会出错
            resultHtml += $('<div>')
              .append($elem.clone())
              .html()
          }
        }

        // 获取元素的结果
        function getResult(elem) {
          var nodeName = elem.nodeName.toLowerCase()
          var $elem
          var htmlForP = ''
          var htmlForLi = ''

          if (['blockquote'].indexOf(nodeName) >= 0) {
            // 直接取出元素text即可
            $elem = $(elem)
            return '<' + nodeName + '>' + $elem.text() + '</' + nodeName + '>'
          } else if (
            ['p', 'h1', 'h2', 'h3', 'h4', 'h5'].indexOf(nodeName) >= 0
          ) {
            //p head 取出 text 和链接
            elem = removeAttrs(elem)
            $elem = $(elem)
            htmlForP = $elem.html()

            // 剔除 a img 之外的元素
            htmlForP = htmlForP.replace(/<.*?>/gi, function (tag) {
              if (
                tag === '</a>' ||
                tag.indexOf('<a ') === 0 ||
                tag.indexOf('<img ') === 0
              ) {
                return tag
              } else {
                return ''
              }
            })

            return '<' + nodeName + '>' + htmlForP + '</' + nodeName + '>'
          } else if (['ul', 'ol'].indexOf(nodeName) >= 0) {
            // ul ol元素，获取子元素（li元素）的text link img，再拼接
            $elem = $(elem)
            $elem.children().each(function () {
              var $li = $(removeAttrs(this))
              var html = $li.html()

              html = html.replace(/<.*?>/gi, function (tag) {
                if (
                  tag === '</a>' ||
                  tag.indexOf('<a ') === 0 ||
                  tag.indexOf('<img ') === 0
                ) {
                  return tag
                } else {
                  return ''
                }
              })

              htmlForLi += '<li>' + html + '</li>'
            })
            return '<' + nodeName + '>' + htmlForLi + '</' + nodeName + '>'
          } else {
            // 其他元素，移除元素属性
            $elem = $(removeAttrs(elem))
            return $('<div>')
              .append($elem)
              .html()
          }
        }

        // 移除一个元素（子元素）的attr
        function removeAttrs(elem) {
          var attrs = elem.attributes || []
          var attrNames = []
          var exception = ['href', 'target', 'src', 'alt', 'rowspan', 'colspan'] //例外情况

          // 先存储下elem中所有 attr 的名称
          $.each(attrs, function (key, attr) {
            if (attr && attr.nodeType === 2) {
              attrNames.push(attr.nodeName)
            }
          })
          // 再根据名称删除所有attr
          $.each(attrNames, function (key, attr) {
            if (exception.indexOf(attr) < 0) {
              // 除了 exception 规定的例外情况，删除其他属性
              elem.removeAttribute(attr)
            }
          })

          // 递归子节点
          var children = elem.childNodes
          if (children.length) {
            $.each(children, function (key, value) {
              removeAttrs(value)
            })
          }

          return elem
        }
      }

      // 绑定 $txt.formatText() 方法
      Txt.fn.bindFormatText = function () {
        var self = this
        var editor = self.editor
        var $txt = self.$txt
        var legalTags = E.config.legalTags
        var legalTagArr = legalTags.split(',')
        var length = legalTagArr.length
        var regArr = []

        // 将 E.config.legalTags 配置的有效字符，生成正则表达式
        $.each(legalTagArr, function (k, tag) {
          var reg = '>\\s*<(' + tag + ')>'
          regArr.push(new RegExp(reg, 'ig'))
        })

        // 增加 li
        regArr.push(new RegExp('>\\s*<(li)>', 'ig'))

        // 增加 tr
        regArr.push(new RegExp('>\\s*<(tr)>', 'ig'))

        // 增加 code
        regArr.push(new RegExp('>\\s*<(code)>', 'ig'))

        // 生成 formatText 方法
        $txt.formatText = function () {
          var $temp = $('<div>')
          var html = $txt.html()

          // 去除空格
          html = html.replace(/\s*</gi, '<')

          // 段落、表格之间换行
          $.each(regArr, function (k, reg) {
            if (!reg.test(html)) {
              return
            }
            html = html.replace(reg, function (matchStr, tag) {
              return '>\n<' + tag + '>'
            })
          })

          $temp.html(html)
          return $temp.text()
        }
      }

      // 定制 $txt.html 方法
      Txt.fn.bindHtml = function () {
        var self = this
        var editor = self.editor
        var $txt = self.$txt
        var $valueContainer = editor.$valueContainer
        var valueNodeName = editor.valueNodeName

        $txt.html = function (html) {
          var result

          if (valueNodeName === 'div') {
            // div 生成的编辑器，取值、赋值，都直接触发jquery的html方法
            result = $.fn.html.call($txt, html)
          }

          // textarea 生成的编辑器，则需要考虑赋值时，也给textarea赋值

          if (html === undefined) {
            // 取值，直接触发jquery原生html方法
            result = $.fn.html.call($txt)

            // 替换 html 中，src和href属性中的 & 字符。
            // 因为 .html() 或者 .innerHTML 会把所有的 & 字符都改成 &amp; 但是 src 和 href 中的要保持 &
            result = result.replace(/(href|src)\=\"(.*)\"/gim, function (
              a,
              b,
              c
            ) {
              return b + '="' + c.replace('&amp;', '&') + '"'
            })
          } else {
            // 赋值，需要同时给 textarea 赋值
            result = $.fn.html.call($txt, html)
            $valueContainer.val(html)
          }

          if (html === undefined) {
            return result
          } else {
            // 手动触发 change 事件，因为 $txt 监控了 change 事件来判断是否需要执行 editor.onchange
            $txt.change()
          }
        }
      }
    })
    // Txt.fn api
    _e(function (E, $) {
      var Txt = E.Txt

      var txtChangeEventNames = 'propertychange change click keyup input paste'

      // 渲染
      Txt.fn.render = function () {
        var $txt = this.$txt
        var $editorContainer = this.editor.$editorContainer
        $editorContainer.append($txt)
      }

      // 计算高度
      Txt.fn.initHeight = function () {
        var editor = this.editor
        var $txt = this.$txt
        var valueContainerHeight = editor.$valueContainer.height()
        var menuHeight = editor.menuContainer.height()
        var txtHeight = valueContainerHeight - menuHeight

        // 限制最小为 50px
        txtHeight = txtHeight < 50 ? 50 : txtHeight

        $txt.height(txtHeight)

        // 记录原始高度
        editor.valueContainerHeight = valueContainerHeight

        // 设置 max-height
        this.initMaxHeight(txtHeight, menuHeight)
      }

      // 计算最大高度
      Txt.fn.initMaxHeight = function (txtHeight, menuHeight) {
        var editor = this.editor
        var $menuContainer = editor.menuContainer.$menuContainer
        var $txt = this.$txt
        var $wrap = $('<div>')

        // 需要浏览器支持 max-height，否则不管
        if (
          window.getComputedStyle &&
          'max-height' in window.getComputedStyle($txt.get(0))
        ) {
          // 获取 max-height 并判断是否有值
          var maxHeight = parseInt(editor.$valueContainer.css('max-height'))
          if (isNaN(maxHeight)) {
            return
          }

          // max-height 和『全屏』暂时有冲突
          if (editor.menus.fullscreen) {
            E.warn(
              'max-height和『全屏』菜单一起使用时，会有一些问题尚未解决，请暂时不要两个同时使用'
            )
            return
          }

          // 标记
          editor.useMaxHeight = true

          // 设置maxheight
          $wrap.css({
            'max-height': maxHeight - menuHeight + 'px',
            'overflow-y': 'auto'
          })
          $txt.css({
            height: 'auto',
            'overflow-y': 'visible',
            'min-height': txtHeight + 'px'
          })

          // 滚动式，菜单阴影
          $wrap.on('scroll', function () {
            if ($txt.parent().scrollTop() > 10) {
              $menuContainer.addClass('wangEditor-menu-shadow')
            } else {
              $menuContainer.removeClass('wangEditor-menu-shadow')
            }
          })

          // 需在编辑器区域外面再包裹一层
          $txt.wrap($wrap)
        }
      }

      // 保存选区
      Txt.fn.saveSelectionEvent = function () {
        var $txt = this.$txt
        var editor = this.editor
        var timeoutId
        var dt = Date.now()

        function save() {
          editor.saveSelection()
        }

        // 同步保存选区
        function saveSync() {
          // 100ms之内，不重复保存
          if (Date.now() - dt < 100) {
            return
          }

          dt = Date.now()
          save()
        }

        // 异步保存选区
        function saveAync() {
          // 节流，防止高频率重复操作
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(save, 300)
        }

        // txt change 、focus、blur 时随时保存选区
        $txt.on(txtChangeEventNames + ' focus blur', function (e) {
          // 先同步保存选区，为了让接下来就马上要执行 editor.getRangeElem() 的程序
          // 能够获取到正确的 rangeElem
          saveSync()

          // 再异步保存选区，为了确定更加准确的选区，为后续的操作做准备
          saveAync()
        })

        // 鼠标拖拽选择时，可能会拖拽到编辑器区域外面再松手，此时 $txt 就监听不到 click事件了
        $txt
          .on('mousedown', function () {
            $txt.on('mouseleave.saveSelection', function (e) {
              // 先同步后异步，如上述注释
              saveSync()
              saveAync()

              // 顺道吧菜单状态也更新了
              editor.updateMenuStyle()
            })
          })
          .on('mouseup', function () {
            $txt.off('mouseleave.saveSelection')
          })
      }

      // 随时更新 value
      Txt.fn.updateValueEvent = function () {
        var $txt = this.$txt
        var editor = this.editor
        var timeoutId, oldValue

        // 触发 onchange 事件
        function doOnchange() {
          var val = $txt.html()
          if (oldValue === val) {
            // 无变化
            return
          }

          // 触发 onchange 事件
          if (editor.onchange && typeof editor.onchange === 'function') {
            editor.onchange.call(editor)
          }

          // 更新内容
          editor.updateValue()

          // 记录最新内容
          oldValue = val
        }

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
          // 初始化
          if (oldValue == null) {
            oldValue = $txt.html()
          }

          // 监控内容变化（停止操作 100ms 之后立即执行）
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(doOnchange, 100)
        })
      }

      // 随时更新 menustyle
      Txt.fn.updateMenuStyleEvent = function () {
        var $txt = this.$txt
        var editor = this.editor

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
          editor.updateMenuStyle()
        })
      }

      // 最后插入试图插入 <p><br><p>
      Txt.fn.insertEmptyP = function () {
        var $txt = this.$txt
        var $children = $txt.children()

        if ($children.length === 0) {
          $txt.append($('<p><br></p>'))
          return
        }

        if ($.trim($children.last().html()).toLowerCase() !== '<br>') {
          $txt.append($('<p><br></p>'))
        }
      }

      // 将编辑器暴露出来的文字和图片，都用 p 来包裹
      Txt.fn.wrapImgAndText = function () {
        var $txt = this.$txt
        var $imgs = $txt.children('img')
        var txt = $txt[0]
        var childNodes = txt.childNodes
        var childrenLength = childNodes.length
        var i, childNode, p

        // 处理图片
        $imgs.length &&
        $imgs.each(function () {
          $(this).wrap('<p>')
        })

        // 处理文字
        for (i = 0; i < childrenLength; i++) {
          childNode = childNodes[i]
          if (
            childNode.nodeType === 3 &&
            childNode.textContent &&
            $.trim(childNode.textContent)
          ) {
            $(childNode).wrap('<p>')
          }
        }
      }

      // 清空内容为空的<p>，以及重复包裹的<p>（在windows下的chrome粘贴文字之后，会出现上述情况）
      Txt.fn.clearEmptyOrNestP = function () {
        var $txt = this.$txt
        var $pList = $txt.find('p')

        $pList.each(function () {
          var $p = $(this)
          var $children = $p.children()
          var childrenLength = $children.length
          var $firstChild
          var content = $.trim($p.html())

          // 内容为空的p
          if (!content) {
            $p.remove()
            return
          }

          // 嵌套的p
          if (childrenLength === 1) {
            $firstChild = $children.first()
            if ($firstChild.get(0) && $firstChild.get(0).nodeName === 'P') {
              $p.html($firstChild.html())
            }
          }
        })
      }

      // 获取 scrollTop
      Txt.fn.scrollTop = function (val) {
        var self = this
        var editor = self.editor
        var $txt = self.$txt

        if (editor.useMaxHeight) {
          return $txt.parent().scrollTop(val)
        } else {
          return $txt.scrollTop(val)
        }
      }

      // 鼠标hover时候，显示p、head的高度
      Txt.fn.showHeightOnHover = function () {
        var editor = this.editor
        var $editorContainer = editor.$editorContainer
        var menuContainer = editor.menuContainer
        var $txt = this.$txt
        var $tip = $('<i class="height-tip"><i>')
        var isTipInTxt = false

        function addAndShowTip($target) {
          if (!isTipInTxt) {
            $editorContainer.append($tip)
            isTipInTxt = true
          }

          var txtTop = $txt.position().top
          var txtHeight = $txt.outerHeight()

          var height = $target.height()
          var top = $target.position().top
          var marginTop = parseInt($target.css('margin-top'), 10)
          var paddingTop = parseInt($target.css('padding-top'), 10)
          var marginBottom = parseInt($target.css('margin-bottom'), 10)
          var paddingBottom = parseInt($target.css('padding-bottom'), 10)

          // 计算初步的结果
          var resultHeight =
            height + paddingTop + marginTop + paddingBottom + marginBottom
          var resultTop = top + menuContainer.height()

          // var spaceValue;

          // // 判断是否超出下边界
          // spaceValue = (resultTop + resultHeight) - (txtTop + txtHeight);
          // if (spaceValue > 0) {
          //     resultHeight = resultHeight - spaceValue;
          // }

          // // 判断是否超出了下边界
          // spaceValue = txtTop > resultTop;
          // if (spaceValue) {
          //     resultHeight = resultHeight - spaceValue;
          //     top = top + spaceValue;
          // }

          // 按照最终结果渲染
          $tip.css({
            height:
              height + paddingTop + marginTop + paddingBottom + marginBottom,
            top: top + menuContainer.height()
          })
        }

        function removeTip() {
          if (!isTipInTxt) {
            return
          }
          $tip.remove()
          isTipInTxt = false
        }

        $txt
          .on(
            'mouseenter',
            'ul,ol,blockquote,p,h1,h2,h3,h4,h5,table,pre',
            function (e) {
              addAndShowTip($(e.currentTarget))
            }
          )
          .on('mouseleave', function () {
            removeTip()
          })
      }
    })
    // 工具函数
    _e(function (E, $) {
      // IE8 [].indexOf()
      if (!Array.prototype.indexOf) {
        //IE低版本不支持 arr.indexOf
        Array.prototype.indexOf = function (elem) {
          var i = 0,
            length = this.length
          for (; i < length; i++) {
            if (this[i] === elem) {
              return i
            }
          }
          return -1
        }
        //IE低版本不支持 arr.lastIndexOf
        Array.prototype.lastIndexOf = function (elem) {
          var length = this.length
          for (length = length - 1; length >= 0; length--) {
            if (this[length] === elem) {
              return length
            }
          }
          return -1
        }
      }

      // IE8 Date.now()
      if (!Date.now) {
        Date.now = function () {
          return new Date().valueOf()
        }
      }

      // console.log && console.warn && console.error
      var console = window.console
      var emptyFn = function () {
      }
      $.each(['info', 'log', 'warn', 'error'], function (key, value) {
        if (console == null) {
          E[value] = emptyFn
        } else {
          var _tt = this
          E[value] = function (info) {
            // 通过配置来控制打印输出
            if (E.config && E.config.printLog) {

            }
          }
        }
      })

      // 获取随机数
      E.random = function () {
        return Math.random()
          .toString()
          .slice(2)
      }

      // 浏览器是否支持 placeholder
      E.placeholder = 'placeholder' in document.createElement('input')

      // 兼容IE8的 input placeholder
      E.placeholderForIE8 = function ($container) {
        if (E.placeholder) {
          return
        }
        $container.find('input[placeholder]').each(function () {
          var $input = $(this)
          var placeholder = $input.attr('placeholder')

          if ($input.val() === '') {
            $input.css('color', '#666')
            $input.val(placeholder)

            $input.on('focus.placeholder click.placeholder', function () {
              $input.val('')
              $input.css('color', '#333')
              $input.off('focus.placeholder click.placeholder')
            })
          }
        })
      }
    })
    // 语言包
    _e(function (E, $) {
      E.langs = {}

      // 中文
      E.langs['zh-cn'] = {
        bold: '粗体',
        underline: '下划线',
        italic: '斜体',
        forecolor: '文字颜色',
        bgcolor: '背景色',
        strikethrough: '删除线',
        eraser: '清空格式',
        source: '源码',
        quote: '引用',
        fontfamily: '字体',
        fontsize: '字号',
        head: '标题',
        orderlist: '有序列表',
        unorderlist: '无序列表',
        alignleft: '左对齐',
        aligncenter: '居中',
        alignright: '右对齐',
        link: '链接',
        linkTarget: '打开方式',
        text: '文本',
        submit: '提交',
        cancel: '取消',
        unlink: '取消链接',
        table: '表格',
        emotion: '表情',
        img: '图片',
        uploadImg: '上传图片',
        linkImg: '网络图片',
        video: '视频',
        width: '宽',
        height: '高',
        location: '位置',
        loading: '加载中',
        searchlocation: '搜索位置',
        dynamicMap: '动态地图',
        clearLocation: '清除位置',
        langDynamicOneLocation: '动态地图只能显示一个位置',
        insertcode: '插入代码',
        undo: '撤销',
        redo: '重复',
        fullscreen: '全屏',
        openLink: '打开链接',
        uploadPlaceTxt: '上传中__',
        uploadTimeoutPlaceTxt: '上传超时__',
        uploadErrorPlaceTxt: '上传错误__',
        hr: '分割线'
      }

      // 英文
      E.langs.en = {
        bold: 'Bold',
        underline: 'Underline',
        italic: 'Italic',
        forecolor: 'Color',
        bgcolor: 'Backcolor',
        strikethrough: 'Strikethrough',
        eraser: 'Eraser',
        source: 'Codeview',
        quote: 'Quote',
        fontfamily: 'Font family',
        fontsize: 'Font size',
        head: 'Head',
        orderlist: 'Ordered list',
        unorderlist: 'Unordered list',
        alignleft: 'Align left',
        aligncenter: 'Align center',
        alignright: 'Align right',
        link: 'Insert link',
        linkTarget: 'Open mode',
        text: 'Text',
        submit: 'Submit',
        cancel: 'Cancel',
        unlink: 'Unlink',
        table: 'Table',
        emotion: 'Emotions',
        img: 'Image',
        uploadImg: 'Upload',
        linkImg: 'Link',
        video: 'Video',
        width: 'width',
        height: 'height',
        location: 'Location',
        loading: 'Loading',
        searchlocation: 'search',
        dynamicMap: 'Dynamic',
        clearLocation: 'Clear',
        langDynamicOneLocation: 'Only one location in dynamic map',
        insertcode: 'Insert Code',
        undo: 'Undo',
        redo: 'Redo',
        fullscreen: 'Full screnn',
        openLink: 'open link',
        uploadPlaceTxt: 'uploading__',
        uploadTimeoutPlaceTxt: 'upload_timeout__',
        uploadErrorPlaceTxt: 'upload_error__',
        hr: 'horizontal'
      }
    })
    // 全局配置
    _e(function (E, $) {
      E.config = {}

      // 全屏时的 z-index
      E.config.zindex = 10000

      // 是否打印log
      E.config.printLog = true

      // 菜单吸顶：false - 不吸顶；number - 吸顶，值为top值
      E.config.menuFixed = 0

      // 编辑源码时，过滤 javascript
      E.config.jsFilter = true

      // 编辑器允许的标签
      E.config.legalTags = 'p,h1,h2,h3,h4,h5,h6,blockquote,table,ul,ol,pre'

      // 语言包
      E.config.lang = E.langs['zh-cn']

      // 菜单配置
      E.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'uploadImg',
        'video',
        'location',
        'insertcode',
        'hr',
        '|',
        'undo',
        'redo',
        'fullscreen'
      ]

      // 颜色配置
      E.config.colors = {
        // 'value': 'title'
        '#880000': '暗红色',
        '#800080': '紫色',
        '#ff0000': '红色',
        '#ff00ff': '鲜粉色',
        '#000080': '深蓝色',
        '#0000ff': '蓝色',
        '#00ffff': '湖蓝色',
        '#008080': '蓝绿色',
        '#008000': '绿色',
        '#808000': '橄榄色',
        '#00ff00': '浅绿色',
        '#ffcc00': '橙黄色',
        '#808080': '灰色',
        '#c0c0c0': '银色',
        '#000000': '黑色',
        '#ffffff': '白色'
      }

      // 字体
      E.config.familys = [
        {title: '宋体', font: '宋体'},
        {title: '黑体', font: '黑体'},
        {title: '楷体', font: '楷体'},
        {title: '思源黑体', font: 'Source Han Sans SC,Source Han Sans CN'},
        {title: '微软雅黑', font: '微软雅黑'},
        {title: 'Arial', font: 'Arial'},
        {title: 'Verdana', font: 'Verdana'},
        {title: 'Georgia', font: 'Georgia'},
        {title: 'Times New Roman', font: 'Times New Roman'},
        {title: 'Microsoft JhengHei', font: 'Microsoft JhengHei'},
        {title: 'Trebuchet MS', font: 'Trebuchet MS'},
        {title: 'Courier New', font: 'Courier New'},
        {title: 'Impact', font: 'Impact'},
        {title: 'Comic Sans MS', font: 'Comic Sans MS'},
        {title: 'Consolas',  font: 'Consolas'}
      ]

      // 字号
      E.config.fontsizes = {
        // 格式：'value': 'title'
        1: '12px',
        2: '13px',
        3: '16px',
        4: '18px',
        5: '24px',
        6: '32px',
        7: '48px'
      }

      // 表情包
      E.config.emotionsShow = 'icon' // 显示项，默认为'icon'，也可以配置成'value'
      E.config.emotions = {
        // 'default': {
        //     title: '默认',
        //     data: './emotions.data'
        // },
        weibo: {
          title: '微博表情',
          data: [
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
              value: '[草泥马]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
              value: '[神马]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
              value: '[浮云]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif',
              value: '[给力]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif',
              value: '[围观]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif',
              value: '[威武]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif',
              value: '[熊猫]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif',
              value: '[兔子]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif',
              value: '[奥特曼]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif',
              value: '[囧]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif',
              value: '[互粉]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif',
              value: '[礼物]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif',
              value: '[呵呵]'
            },
            {
              icon:
                'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif',
              value: '[哈哈]'
            }
          ]
        }
      }

      // 上传图片的配置
      // server地址
      E.config.uploadImgUrl = ''
      // 超时时间
      E.config.uploadTimeout = 20 * 1000
      // 用于存储上传回调事件
      E.config.uploadImgFns = {}
      // 自定义上传图片的filename
      // E.config.uploadImgFileName = 'customFileName';

      // 自定义上传，设置为 true 之后，显示上传图标
      E.config.customUpload = false
      // 自定义上传的init事件
      // E.config.customUploadInit = function () {....};
      E.config.uploadPlaceholderImg =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
      // 自定义上传时传递的参数（如 token）
      E.config.uploadParams = {
        /* token: 'abcdef12345' */
      }

      // 自定义上传是的header参数
      E.config.uploadHeaders = {
        /* 'Accept' : 'text/x-json' */
      }

      // 跨域上传时传递 cookie，默认为 true
      E.config.withCredentials = true

      // 隐藏网络图片，默认为 false
      E.config.hideLinkImg = false

      // 是否过滤粘贴内容
      E.config.pasteFilter = true

      // 是否粘贴纯文本，当 editor.config.pasteFilter === false 时候，此配置将失效
      E.config.pasteText = false

      // 插入代码时，默认的语言
      E.config.codeDefaultLang = 'javascript'
    })
    // 全局UI
    _e(function (E, $) {
      E.UI = {}

      // 为菜单自定义配置的UI
      E.UI.menus = {
        // 这个 default 不加引号，在 IE8 会报错
        default: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-command"></i></a>',
          selected: '.selected'
        },
        bold: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-bold"></i></a>',
          selected: '.selected'
        },
        underline: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-underline"></i></a>',
          selected: '.selected'
        },
        italic: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-italic"></i></a>',
          selected: '.selected'
        },
        forecolor: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-pencil"></i></a>',
          selected: '.selected'
        },
        bgcolor: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-brush"></i></a>',
          selected: '.selected'
        },
        strikethrough: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-strikethrough"></i></a>',
          selected: '.selected'
        },
        eraser: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-eraser"></i></a>',
          selected: '.selected'
        },
        quote: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-quotes-left"></i></a>',
          selected: '.selected'
        },
        source: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-code"></i></a>',
          selected: '.selected'
        },
        fontfamily: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-font2"></i></a>',
          selected: '.selected'
        },
        fontsize: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-text-height"></i></a>',
          selected: '.selected'
        },
        head: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-header"></i></a>',
          selected: '.selected'
        },
        orderlist: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-numbered"></i></a>',
          selected: '.selected'
        },
        unorderlist: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-bullet"></i></a>',
          selected: '.selected'
        },
        alignleft: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-left"></i></a>',
          selected: '.selected'
        },
        aligncenter: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-center"></i></a>',
          selected: '.selected'
        },
        alignright: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-right"></i></a>',
          selected: '.selected'
        },
        link: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-link"></i></a>',
          selected: '.selected'
        },
        unlink: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-unlink"></i></a>',
          selected: '.selected'
        },
        table: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-table"></i></a>',
          selected: '.selected'
        },
        emotion: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-happy"></i></a>',
          selected: '.selected'
        },
        img: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-picture"></i></a>',
          selected: '.selected'
        },
        uploadImg: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-file-image"></i></a>',
          selected: '.selected'
        },
        video: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-play"></i></a>',
          selected: '.selected'
        },
        location: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-location"></i></a>',
          selected: '.selected'
        },
        insertcode: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-terminal"></i></a>',
          selected: '.selected'
        },
        undo: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-ccw"></i></a>',
          selected: '.selected'
        },
        redo: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-cw"></i></a>',
          selected: '.selected'
        },
        fullscreen: {
          normal:
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-enlarge2"></i></a>',
          selected:
            '<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-shrink2"></i></a>'
        },
        hr: {
          normal:
            '<a href="#" tabindex="-1">—</a>',
          selected:
            '<a href="#" tabindex="-1" class="selected">—</a>'
        }
      }
    })
    // 对象配置
    _e(function (E, $) {
      E.fn.initDefaultConfig = function () {
        var editor = this
        editor.config = $.extend({}, E.config)
        editor.UI = $.extend({}, E.UI)
      }
    })
    // 增加 container
    _e(function (E, $) {
      E.fn.addEditorContainer = function () {
        this.$editorContainer = $('<div class="wangEditor-container"></div>')
      }
    })
    // 增加编辑区域对象
    _e(function (E, $) {
      E.fn.addTxt = function () {
        var editor = this
        var txt = new E.Txt(editor)

        editor.txt = txt
      }
    })
    // 增加menuContainer对象
    _e(function (E, $) {
      E.fn.addMenuContainer = function () {
        var editor = this
        editor.menuContainer = new E.MenuContainer(editor)
      }
    })
    // 增加menus
    _e(function (E, $) {
      // 存储创建菜单的函数
      E.createMenuFns = []
      E.createMenu = function (fn) {
        E.createMenuFns.push(fn)
      }

      // 创建所有菜单
      E.fn.addMenus = function () {
        var editor = this
        var menuIds = editor.config.menus

        // 检验 menuId 是否在配置中存在
        function check(menuId) {
          if (menuIds.indexOf(menuId) >= 0) {
            return true
          }
          return false
        }

        // 遍历所有的菜单创建函数，并执行
        $.each(E.createMenuFns, function (k, createMenuFn) {
          createMenuFn.call(editor, check)
        })
      }
    })
    // bold菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'bold'
        if (!check(menuId)) {
          return
        }

        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.bold,
          commandName: 'Bold'
        })

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 如果选区有内容，则执行基础命令
            editor.command(e, 'Bold')
          } else {
            // 如果选区没有内容
            editor.commandForElem('b,strong,h1,h2,h3,h4,h5', e, 'Bold')
          }
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // underline菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'underline'
        if (!check(menuId)) {
          return
        }

        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.underline,
          commandName: 'Underline'
        })

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 如果选区有内容，则执行基础命令
            editor.command(e, 'Underline')
          } else {
            // 如果选区没有内容
            editor.commandForElem('u,a', e, 'Underline')
          }
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // italic 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'italic'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.italic,
          commandName: 'Italic'
        })

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 如果选区有内容，则执行基础命令
            editor.command(e, 'Italic')
          } else {
            // 如果选区没有内容
            editor.commandForElem('i', e, 'Italic')
          }
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // forecolor 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'forecolor'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var configColors = editor.config.colors

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.forecolor
        })

        // 创建 dropPanel
        var $content = $('<div></div>')
        $.each(configColors, function (k, v) {
          $content.append(
            [
              '<a href="#" class="color-item"',
              '    title="' + v + '" commandValue="' + k + '" ',
              '    style="color: ' + k + '" ',
              '><i class="wangeditor-menu-img-pencil"></i></a>'
            ].join('')
          )
        })
        $content.on('click', 'a[commandValue]', function (e) {
          // 执行命令
          var $elem = $(this)
          var commandValue = $elem.attr('commandValue')

          if (menu.selected && editor.isRangeEmpty()) {
            // 当前处于选中状态，并且选中内容为空
            editor.commandForElem('font[color]', e, 'forecolor', commandValue)
          } else {
            // 当前未处于选中状态，或者有选中内容。则执行默认命令
            editor.command(e, 'forecolor', commandValue)
          }
        })
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 125
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[color]')
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // bgcolor 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'bgcolor'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var configColors = editor.config.colors

        // 检查元素是否有 background-color: 内联样式
        function checkElemFn(elem) {
          var cssText
          if (elem && elem.style && elem.style.cssText != null) {
            cssText = elem.style.cssText
            if (cssText && cssText.indexOf('background-color:') >= 0) {
              return true
            }
          }
          return false
        }

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.bgcolor
        })

        // 创建 dropPanel
        var $content = $('<div></div>')
        $.each(configColors, function (k, v) {
          $content.append(
            [
              '<a href="#" class="color-item"',
              '    title="' + v + '" commandValue="' + k + '" ',
              '    style="color: ' + k + '" ',
              '><i class="wangeditor-menu-img-brush"></i></a>'
            ].join('')
          )
        })
        $content.on('click', 'a[commandValue]', function (e) {
          // 执行命令

          var $elem = $(this)
          var commandValue = $elem.attr('commandValue')

          if (menu.selected && editor.isRangeEmpty()) {
            // 当前处于选中状态，并且选中内容为空。使用 commandForElem 执行命令
            editor.commandForElem(
              {
                selector: 'span,font',
                check: checkElemFn
              },
              e,
              'BackColor',
              commandValue
            )
          } else {
            // 当前未处于选中状态，或者有选中内容。则执行默认命令
            editor.command(e, 'BackColor', commandValue)
          }
        })
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 125
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(
            rangeElem,
            'span,font',
            checkElemFn
          )

          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // strikethrough 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'strikethrough'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.strikethrough,
          commandName: 'StrikeThrough'
        })

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 如果选区有内容，则执行基础命令
            editor.command(e, 'StrikeThrough')
          } else {
            // 如果选区没有内容
            editor.commandForElem('strike', e, 'StrikeThrough')
          }
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // eraser 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'eraser'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.eraser,
          commandName: 'RemoveFormat'
        })

        // 定义点击事件
        menu.clickEvent = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()

          if (!isRangeEmpty) {
            // 选区不是空的，则执行默认命令
            editor.command(e, 'RemoveFormat')
            return
          }

          var $clearElem

          // 自定义的命令函数
          function commandFn() {
            var editor = this
            var rangeElem
            var pElem, $pElem
            var quoteElem, $quoteElem
            var listElem, $listElem

            // 获取选区 elem
            rangeElem = editor.getRangeElem()
            // 第一步，获取 quote 父元素
            quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote')
            if (quoteElem) {
              $quoteElem = $(quoteElem)
              $clearElem = $('<p>' + $quoteElem.text() + '</p>')
              $quoteElem.after($clearElem).remove()
            }
            // 第二步，获取 p h 父元素
            pElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5')
            if (pElem) {
              $pElem = $(pElem)
              $clearElem = $('<p>' + $pElem.text() + '</p>')
              $pElem.after($clearElem).remove()
            }
            // 第三步，获取list
            listElem = editor.getSelfOrParentByName(rangeElem, 'ul,ol')
            if (listElem) {
              $listElem = $(listElem)
              $clearElem = $('<p>' + $listElem.text() + '</p>')
              $listElem.after($clearElem).remove()
            }
          }

          // 自定义 callback 事件
          function callback() {
            // callback中，设置range为clearElem
            var editor = this
            if ($clearElem) {
              editor.restoreSelectionByElem($clearElem.get(0))
            }
          }

          // 执行自定义命令
          editor.customCommand(e, commandFn, callback)
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // source 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'source'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var txtHtml

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.source
        })

        menu.isShowCode = false

        // 更新内容
        function updateValue() {
          var $code = menu.$codeTextarea
          var $txt = editor.txt.$txt
          var value = $.trim($code.val()) // 取值

          if (!value) {
            value = '<p><br></p>'
          }

          // 过滤js代码
          if (editor.config.jsFilter) {
            value = value.replace(/<script[\s\S]*?<\/script>/gi, '')
          }
          // 赋值
          try {
            $txt.html(value)
          } catch (ex) {
            // 更新 html 源码出错，一般都是取消了 js 过滤之后，js报错导致的
          }
        }

        // 定义click事件
        menu.clickEvent = function (e) {
          var self = this
          var editor = self.editor
          var $txt = editor.txt.$txt
          var txtOuterHeight = $txt.outerHeight()
          var txtHeight = $txt.height()

          if (!self.$codeTextarea) {
            self.$codeTextarea = $(
              '<textarea class="code-textarea"></textarea>'
            )
          }
          var $code = self.$codeTextarea
          $code.css({
            height: txtHeight,
            'margin-top': txtOuterHeight - txtHeight
          })

          // 赋值
          $code.val($txt.html())

          // 监控变化
          $code.on('change', function (e) {
            updateValue()
          })

          // 渲染
          $txt.after($code).hide()
          $code.show()

          // 更新状态
          menu.isShowCode = true

          // 执行 updateSelected 事件
          this.updateSelected()

          // 禁用其他菜单
          editor.disableMenusExcept('source')

          // 记录当前html值
          txtHtml = $txt.html()
        }

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var self = this
          var editor = self.editor
          var $txt = editor.txt.$txt
          var $code = self.$codeTextarea
          var value

          if (!$code) {
            return
          }

          // 更新内容
          updateValue()

          // 渲染
          $code.after($txt).hide()
          $txt.show()

          // 更新状态
          menu.isShowCode = false

          // 执行 updateSelected 事件
          this.updateSelected()

          // 启用其他菜单
          editor.enableMenusExcept('source')

          // 判断是否执行 onchange 事件
          if ($txt.html() !== txtHtml) {
            if (editor.onchange && typeof editor.onchange === 'function') {
              editor.onchange.call(editor)
            }
          }
        }

        // 定义切换选中状态事件
        menu.updateSelectedEvent = function () {
          return this.isShowCode
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // quote 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'quote'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.quote,
          commandName: 'formatBlock',
          commandValue: 'blockquote'
        })

        // 定义click事件
        menu.clickEvent = function (e) {
          var rangeElem = editor.getRangeElem()
          var $rangeElem
          if (!rangeElem) {
            e.preventDefault()
            return
          }
          var currentQuote = editor.getSelfOrParentByName(
            rangeElem,
            'blockquote'
          )
          var $quote

          if (currentQuote) {
            // 说明当前在quote之内，不做任何处理
            e.preventDefault()
            return
          }

          rangeElem = editor.getLegalTags(rangeElem)
          $rangeElem = $(rangeElem)

          // 无文字，则不允许执行引用
          if (!$rangeElem.text()) {
            return
          }

          if (!rangeElem) {
            // 执行默认命令
            // IE8 下执行此处（不过，经测试代码无效，也不报错）
            editor.command(e, 'formatBlock', 'blockquote')
            return
          }

          // 自定义command事件
          function commandFn() {
            $quote = $('<p>' + $rangeElem.text() + '</p>')
            $rangeElem.after($quote).remove()
            $quote.wrap('<blockquote>')
          }

          // 自定义 callback 事件
          function callback() {
            // callback中，设置range为quote
            var editor = this
            if ($quote) {
              editor.restoreSelectionByElem($quote.get(0))
            }
          }

          // 执行自定义命令
          editor.customCommand(e, commandFn, callback)
        }

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
          var rangeElem
          var quoteElem
          var $lastChild

          // 获取当前选区的elem，并试图往上找 quote 元素
          rangeElem = editor.getRangeElem()
          quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote')
          if (!quoteElem) {
            // 没找到，则返回
            e.preventDefault()
            return
          }

          // 自定义的command事件
          function commandFn() {
            var $quoteElem
            var $children

            $quoteElem = $(quoteElem)
            $children = $quoteElem.children()
            if ($children.length) {
              $children.each(function (k) {
                var $item = $(this)
                if ($item.get(0).nodeName === 'P') {
                  $quoteElem.after($item)
                } else {
                  $quoteElem.after('<p>' + $item.text() + '</p>')
                }
                $lastChild = $item // 记录最后一个子元素，用于callback中的range定位
              })
              $quoteElem.remove()
              return
            }
          }

          // 自定义的callback函数
          function callback() {
            // callback中，设置range为lastChild
            var editor = this
            if ($lastChild) {
              editor.restoreSelectionByElem($lastChild.get(0))
            }
          }

          // 执行自定义命令
          editor.customCommand(e, commandFn, callback)
        }

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
          var self = this //菜单对象
          var editor = self.editor
          var rangeElem

          rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote')

          if (rangeElem) {
            return true
          }

          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu

        // --------------- 两次点击 enter 跳出引用 ---------------
        editor.ready(function () {
          var editor = this
          var $txt = editor.txt.$txt
          var isPrevEnter = false // 是不是刚刚在quote中按了 enter 键
          $txt.on('keydown', function (e) {
            if (e.keyCode !== 13) {
              // 不是 enter 键
              isPrevEnter = false
              return
            }

            var rangeElem = editor.getRangeElem()
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote')
            if (!rangeElem) {
              // 选区不是 quote
              isPrevEnter = false
              return
            }

            if (!isPrevEnter) {
              // 最近没有在qote中按enter键
              isPrevEnter = true
              return
            }

            var currentRangeElem = editor.getRangeElem()
            var $currentRangeElem = $(currentRangeElem)
            if ($currentRangeElem.length) {
              $currentRangeElem.parent().after($currentRangeElem)
            }

            // 设置选区
            editor.restoreSelectionByElem(currentRangeElem, 'start')

            isPrevEnter = false
            // 阻止默认行文
            e.preventDefault()
          })
        }) // editor.ready(

        // --------------- 处理quote中无内容时不能删除的问题 ---------------
        editor.ready(function () {
          var editor = this
          var $txt = editor.txt.$txt
          var $rangeElem

          function commandFn() {
            $rangeElem && $rangeElem.remove()
          }

          function callback() {
            if (!$rangeElem) {
              return
            }
            var $prev = $rangeElem.prev()
            if ($prev.length) {
              // 有 prev 则定位到 prev 最后
              editor.restoreSelectionByElem($prev.get(0))
            } else {
              // 无 prev 则初始化选区
              editor.initSelection()
            }
          }

          $txt.on('keydown', function (e) {
            if (e.keyCode !== 8) {
              // 不是 backspace 键
              return
            }

            var rangeElem = editor.getRangeElem()
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote')
            if (!rangeElem) {
              // 选区不是 quote
              return
            }
            $rangeElem = $(rangeElem)

            var text = $rangeElem.text()
            if (text) {
              // quote 中还有内容
              return
            }
            editor.customCommand(e, commandFn, callback)
          }) // $txt.on
        }) // editor.ready(
      })
    })
    // 字体 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'fontfamily'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var configFamilys = editor.config.familys

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.fontfamily,
          commandName: 'fontName'
        })


        // 初始化数据
        var data = {}
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */
        $.each(configFamilys, function (k, v) {
          // configFamilys 是数组，data 是对象
          data[v.font] = v.title
        })


        // 创建droplist
        var tpl = '<span style="font-family:{#commandValue};">{#title}</span>'
        menu.dropList = new E.DropList(editor, menu, {
          data: data,
          tpl: tpl,
          selectorForELemCommand: 'font[face]' // 为了执行 editor.commandForElem 而传入的elem查询方式
        })


        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[face]')
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // 字号 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'fontsize'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var configSize = editor.config.fontsizes

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.fontsize,
          commandName: 'fontSize'
        })

        // 初始化数据
        var data = configSize
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        // 创建droplist
        var tpl = '<span style="font-size:{#title};">{#title}</span>'
        menu.dropList = new E.DropList(editor, menu, {
          data: data,
          tpl: tpl,
          selectorForELemCommand: 'font[size]' // 为了执行 editor.commandForElem 而传入的elem查询方式
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[size]')
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // head 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'head'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.head,
          commandName: 'formatBlock'
        })

        // 初始化数据
        var data = {
          '<h1>': '标题1',
          '<h2>': '标题2',
          '<h3>': '标题3',
          '<h4>': '标题4',
          '<h5>': '标题5'
        }
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        var isOrderedList

        function beforeEvent(e) {
          if (editor.queryCommandState('InsertOrderedList')) {
            isOrderedList = true

            // 先取消有序列表
            editor.command(e, 'InsertOrderedList')
          } else {
            isOrderedList = false
          }
        }

        function afterEvent(e) {
          if (isOrderedList) {
            // 再设置有序列表
            editor.command(e, 'InsertOrderedList')
          }
        }

        // 创建droplist
        var tpl = '{#commandValue}{#title}'
        menu.dropList = new E.DropList(editor, menu, {
          data: data,
          tpl: tpl,
          // 对 ol 直接设置 head，会出现每个 li 的 index 都变成 1 的问题，因此要先取消 ol，然后设置 head，最后再增加上 ol
          beforeEvent: beforeEvent,
          afterEvent: afterEvent
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'h1,h2,h3,h4,h5')
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // unorderlist 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'unorderlist'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.unorderlist,
          commandName: 'InsertUnorderedList'
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // orderlist 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'orderlist'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.orderlist,
          commandName: 'InsertOrderedList'
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // alignleft 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'alignleft'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.alignleft,
          commandName: 'JustifyLeft'
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(
            rangeElem,
            'p,h1,h2,h3,h4,h5,li',
            function (elem) {
              var cssText
              if (elem && elem.style && elem.style.cssText != null) {
                cssText = elem.style.cssText
                if (cssText && /text-align:\s*left;/.test(cssText)) {
                  return true
                }
              }
              if ($(elem).attr('align') === 'left') {
                // ff 中，设置align-left之后，会是 <p align="left">xxx</p>
                return true
              }
              return false
            }
          )
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // aligncenter 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'aligncenter'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.aligncenter,
          commandName: 'JustifyCenter'
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(
            rangeElem,
            'p,h1,h2,h3,h4,h5,li',
            function (elem) {
              var cssText
              if (elem && elem.style && elem.style.cssText != null) {
                cssText = elem.style.cssText
                if (cssText && /text-align:\s*center;/.test(cssText)) {
                  return true
                }
              }
              if ($(elem).attr('align') === 'center') {
                // ff 中，设置align-center之后，会是 <p align="center">xxx</p>
                return true
              }
              return false
            }
          )
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // alignright 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'alignright'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.alignright,
          commandName: 'JustifyRight'
        })

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(
            rangeElem,
            'p,h1,h2,h3,h4,h5,li',
            function (elem) {
              var cssText
              if (elem && elem.style && elem.style.cssText != null) {
                cssText = elem.style.cssText
                if (cssText && /text-align:\s*right;/.test(cssText)) {
                  return true
                }
              }
              if ($(elem).attr('align') === 'right') {
                // ff 中，设置align-right之后，会是 <p align="right">xxx</p>
                return true
              }
              return false
            }
          )
          if (rangeElem) {
            return true
          }
          return false
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // link 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'link'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.link
        })

        // 创建 dropPanel
        var $content = $('<div></div>')
        var $div1 = $('<div style="margin:20px 10px;" class="clearfix"></div>')
        var $div2 = $div1.clone()
        var $div3 = $div1.clone().css('margin', '0 10px')
        var $div4 = $div1.clone().css('margin', '0 10px')
        var $textInput = $(
          '<input type="text" class="block" placeholder="' + lang.text + '"/>'
        )
        var $urlInput = $(
          '<input type="text" class="block" placeholder="' + lang.link + '"/>'
        )
        var $targetInput = $(
          '<input type="text" class="block" placeholder="' +
          lang.linkTarget +
          ': _self / _blank / _top / _parent" />'
        )
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>')
        var $btnCancel = $(
          '<button class="right gray">' + lang.cancel + '</button>'
        )

        $div1.append($textInput)
        $div2.append($urlInput)
        $div4.append($targetInput)
        $div4.append($btnSubmit).append($btnCancel)
        $content
          .append($div1)
          .append($div2)
          .append($div3)
          .append($div4)

        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 300
        })

        // 定义click事件
        menu.clickEvent = function (e) {
          var menu = this
          var dropPanel = menu.dropPanel

          // -------------隐藏----------------
          if (dropPanel.isShowing) {
            dropPanel.hide()
            return
          }

          // -------------显示----------------

          // 重置 input
          $textInput.val('')
          $urlInput.val('')
          $targetInput.val('')

          // 获取url
          var url = ''
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'a')
          if (
            rangeElem &&
            typeof rangeElem.getAttribute == 'function' &&
            rangeElem.getAttribute('href')
          ) {
            url = rangeElem.getAttribute('href') || ''
          } else if (rangeElem && !url) {
            url = rangeElem.href || ''
          }

          // 获取 text
          var text = ''
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 选区不是空
            text = editor.getRangeText() || ''
          } else if (rangeElem) {
            // 如果选区空，并且在 a 标签之内
            text = rangeElem.textContent || rangeElem.innerHTML
          }

          // 设置 url 和 text
          url && $urlInput.val(url)
          text && $textInput.val(text)

          // 如果有选区内容，textinput 不能修改
          if (!isRangeEmpty) {
            $textInput.attr('disabled', true)
          } else {
            $textInput.removeAttr('disabled')
          }

          // 显示（要设置好了所有input的值和属性之后再显示）
          dropPanel.show()
        }

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
          var rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'a')
          if (rangeElem) {
            return true
          }
          return false
        }

        // 『取消』 按钮
        $btnCancel.click(function (e) {
          e.preventDefault()
          menu.dropPanel.hide()
        })

        // 『确定』按钮
        $btnSubmit.click(function (e) {
          e.preventDefault()
          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getSelfOrParentByName(rangeElem, 'a')
          var isRangeEmpty = editor.isRangeEmpty()

          var $linkElem, linkHtml
          var commandFn, callback
          var $txt = editor.txt.$txt
          var $oldLinks, $newLinks
          var uniqId = 'link' + E.random()

          // 获取数据
          var url = $.trim($urlInput.val())
          var text = $.trim($textInput.val())
          var target = $.trim($targetInput.val())
          if (!url) {
            menu.dropPanel.focusFirstInput()
            return
          }
          if (!text) {
            text = url
          }

          if (!isRangeEmpty) {
            // 选中区域有内容，则执行默认命令

            // 获取目前 txt 内所有链接，并为当前链接做一个标记
            $oldLinks = $txt.find('a')
            $oldLinks.attr(uniqId, '1')

            // 执行命令
            editor.command(e, 'createLink', url)

            // 去的没有标记的链接，即刚刚插入的链接
            $newLinks = $txt.find('a').not('[' + uniqId + ']')
            target && $newLinks.attr('target', target) // 增加 _blank
            // 去掉之前做的标记
            $oldLinks.removeAttr(uniqId)
          } else if (targetElem) {
            // 无选中区域，在 a 标签之内，修改该 a 标签的内容和链接
            $linkElem = $(targetElem)
            commandFn = function () {
              $linkElem.attr('href', url)
              $linkElem.text(text)
              target && $linkElem.attr('target', target)
            }
            callback = function () {
              var editor = this
              editor.restoreSelectionByElem(targetElem)
            }
            // 执行命令
            editor.customCommand(e, commandFn, callback)
          } else {
            // 无选中区域，不在 a 标签之内，插入新的链接
            linkHtml =
              '<a href="' +
              url +
              '"' +
              (target ? ' target="' + target + '"' : '') +
              '>' +
              text +
              '</a>'
            if (E.userAgent.indexOf('Firefox') > 0) {
              linkHtml += '<span>&nbsp;</span>'
            }
            editor.command(e, 'insertHtml', linkHtml)
          }
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // unlink 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'unlink'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.unlink,
          commandName: 'unLink'
        })

        // click 事件
        menu.clickEvent = function (e) {
          var isRangeEmpty = editor.isRangeEmpty()
          if (!isRangeEmpty) {
            // 有选中区域，或者IE8，执行默认命令
            editor.command(e, 'unLink')
            return
          }

          // 无选中区域...

          var rangeElem = editor.getRangeElem()
          var aElem = editor.getSelfOrParentByName(rangeElem, 'a')
          if (!aElem) {
            // 不在 a 之内，返回
            e.preventDefault()
            return
          }

          // 在 a 之内
          var $a = $(aElem)
          var $span = $('<span>' + $a.text() + '</span>')

          function commandFn() {
            $a.after($span).remove()
          }

          function callback() {
            editor.restoreSelectionByElem($span.get(0))
          }

          editor.customCommand(e, commandFn, callback)
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // table 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'table'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.table
        })

        // dropPanel 内容
        var $content = $(
          '<div style="font-size: 14px; color: #666; text-align:right;"></div>'
        )
        var $table = $(
          '<table class="choose-table" style="margin-bottom:10px;margin-top:5px;">'
        )
        var $row = $('<span>0</span>')
        var $rowspan = $('<span> 行 </span>')
        var $col = $('<span>0</span>')
        var $colspan = $('<span> 列</span>')
        var $tr
        var i, j

        // 创建一个n行n列的表格
        for (i = 0; i < 15; i++) {
          $tr = $('<tr index="' + (i + 1) + '">')
          for (j = 0; j < 20; j++) {
            $tr.append($('<td index="' + (j + 1) + '">'))
          }
          $table.append($tr)
        }
        $content.append($table)
        $content
          .append($row)
          .append($rowspan)
          .append($col)
          .append($colspan)

        // 定义table事件
        $table
          .on('mouseenter', 'td', function (e) {
            var $currentTd = $(e.currentTarget)
            var currentTdIndex = $currentTd.attr('index')
            var $currentTr = $currentTd.parent()
            var currentTrIndex = $currentTr.attr('index')

            // 显示
            $row.text(currentTrIndex)
            $col.text(currentTdIndex)

            // 遍历设置背景颜色
            $table.find('tr').each(function () {
              var $tr = $(this)
              var trIndex = $tr.attr('index')
              if (parseInt(trIndex, 10) <= parseInt(currentTrIndex, 10)) {
                // 该行需要可能需要设置背景色
                $tr.find('td').each(function () {
                  var $td = $(this)
                  var tdIndex = $td.attr('index')
                  if (parseInt(tdIndex, 10) <= parseInt(currentTdIndex, 10)) {
                    // 需要设置背景色
                    $td.addClass('active')
                  } else {
                    // 需要移除背景色
                    $td.removeClass('active')
                  }
                })
              } else {
                // 改行不需要设置背景色
                $tr.find('td').removeClass('active')
              }
            })
          })
          .on('mouseleave', function (e) {
            // mouseleave 删除背景色
            $table.find('td').removeClass('active')

            $row.text(0)
            $col.text(0)
          })

        // 插入表格
        $table.on('click', 'td', function (e) {
          var $currentTd = $(e.currentTarget)
          var currentTdIndex = $currentTd.attr('index')
          var $currentTr = $currentTd.parent()
          var currentTrIndex = $currentTr.attr('index')

          var rownum = parseInt(currentTrIndex, 10)
          var colnum = parseInt(currentTdIndex, 10)

          // -------- 拼接tabel html --------

          var i, j
          var tableHtml = '<table>'
          for (i = 0; i < rownum; i++) {
            tableHtml += '<tr>'

            for (j = 0; j < colnum; j++) {
              tableHtml += '<td><span>&nbsp;</span></td>'
            }
            tableHtml += '</tr>'
          }
          tableHtml += '</table>'

          // -------- 执行命令 --------
          editor.command(e, 'insertHtml', tableHtml)
        })

        // 创建 panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 262
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // emotion 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'emotion'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var config = editor.config
        var lang = config.lang
        var configEmotions = config.emotions
        var emotionsShow = config.emotionsShow

        // 记录每一个表情图片的地址
        editor.emotionUrls = []

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.emotion
        })

        // 添加表情图片的函数
        function insertEmotionImgs(data, $tabContent) {
          // 添加表情图片
          $.each(data, function (k, emotion) {
            var src = emotion.icon || emotion.url
            var value = emotion.value || emotion.title
            // 通过配置 editor.config.emotionsShow 的值来修改插入到编辑器的内容（图片/value）
            var commandValue = emotionsShow === 'icon' ? src : value
            var $command = $(
              '<a href="#" commandValue="' + commandValue + '"></a>'
            )
            var $img = $('<img>')
            $img.attr('_src', src) // 先将 src 复制到 '_src' 属性，先不加载

            $command.append($img)
            $tabContent.append($command)

            // 记录下每一个表情图片的地址
            editor.emotionUrls.push(src)
          })
        }

        // 拼接 dropPanel 内容
        var $panelContent = $('<div class="panel-tab"></div>')
        var $tabContainer = $('<div class="tab-container"></div>')
        var $contentContainer = $(
          '<div class="content-container emotion-content-container"></div>'
        )
        $.each(configEmotions, function (k, emotion) {
          var title = emotion.title
          var data = emotion.data

          E.log('正在处理 ' + title + ' 表情的数据...')

          // 增加该组表情的tab和content
          var $tab = $('<a href="#">' + title + ' </a>')
          $tabContainer.append($tab)
          var $tabContent = $('<div class="content"></div>')
          $contentContainer.append($tabContent)

          // tab 切换事件
          $tab.click(function (e) {
            $tabContainer.children().removeClass('selected')
            $contentContainer.children().removeClass('selected')
            $tabContent.addClass('selected')
            $tab.addClass('selected')
            e.preventDefault()
          })

          // 处理data
          if (typeof data === 'string') {
            // url 形式，需要通过ajax从该url获取数据
            E.log('将通过 ' + data + ' 地址ajax下载表情包')
            $.get(data, function (result) {
              result = $.parseJSON(result)
              E.log('下载完毕，得到 ' + result.length + ' 个表情')
              insertEmotionImgs(result, $tabContent)
            })
          } else if (
            Object.prototype.toString
              .call(data)
              .toLowerCase()
              .indexOf('array') > 0
          ) {
            // 数组，即 data 直接就是表情包数据
            insertEmotionImgs(data, $tabContent)
          } else {
            // 其他情况，data格式不对
            E.error(
              'data 数据格式错误，请修改为正确格式，参考文档：' + E.docsite
            )
            return
          }
        })
        $panelContent.append($tabContainer).append($contentContainer)

        // 默认显示第一个tab
        $tabContainer
          .children()
          .first()
          .addClass('selected')
        $contentContainer
          .children()
          .first()
          .addClass('selected')

        // 插入表情command事件
        $contentContainer.on('click', 'a[commandValue]', function (e) {
          var $a = $(e.currentTarget)
          var commandValue = $a.attr('commandValue')
          var img

          // commandValue 有可能是图片url，也有可能是表情的 value，需要区别对待

          if (emotionsShow === 'icon') {
            // 插入图片
            editor.command(e, 'InsertImage', commandValue)
          } else {
            // 插入value
            editor.command(e, 'insertHtml', '<span>' + commandValue + '</span>')
          }

          e.preventDefault()
        })

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $panelContent,
          width: 350
        })

        // 定义click事件（异步加载表情图片）
        menu.clickEvent = function (e) {
          var menu = this
          var dropPanel = menu.dropPanel

          // -------------隐藏-------------
          if (dropPanel.isShowing) {
            dropPanel.hide()
            return
          }

          // -------------显示-------------
          dropPanel.show()

          // 异步加载图片
          if (menu.imgLoaded) {
            return
          }
          $contentContainer.find('img').each(function () {
            var $img = $(this)
            var _src = $img.attr('_src')
            $img.on('error', function () {
              E.error('加载不出表情图片 ' + _src)
            })
            $img.attr('src', _src)
            $img.removeAttr('_src')
          })
          menu.imgLoaded = true
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // img 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'img'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.img
        })

        // 创建 panel content
        var $panelContent = $('<div class="panel-tab"></div>')
        var $tabContainer = $('<div class="tab-container"></div>')
        var $contentContainer = $('<div class="content-container"></div>')
        $panelContent.append($tabContainer).append($contentContainer)

        // tab
        var $uploadTab = $('<a href="#">' + lang.uploadImg + '</a>')
        var $linkTab = $('<a href="#">' + lang.linkImg + '</a>')
        $tabContainer.append($uploadTab).append($linkTab)

        // 上传图片 content
        var $uploadContent = $('<div class="content"></div>')
        $contentContainer.append($uploadContent)

        // 网络图片 content
        var $linkContent = $('<div class="content"></div>')
        $contentContainer.append($linkContent)
        linkContentHandler(editor, menu, $linkContent)

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $panelContent,
          width: 400,
          onRender: function () {
            // 渲染后的回调事件，用于执行自定义上传的init
            // 因为渲染之后，上传面板的dom才会被渲染到页面，才能让第三方空间获取到
            var init = editor.config.customUploadInit
            init && init.call(editor)
          }
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu

        // tab 切换事件
        function tabToggle() {
          $uploadTab.click(function (e) {
            $tabContainer.children().removeClass('selected')
            $contentContainer.children().removeClass('selected')
            $uploadContent.addClass('selected')
            $uploadTab.addClass('selected')
            e.preventDefault()
          })
          $linkTab.click(function (e) {
            $tabContainer.children().removeClass('selected')
            $contentContainer.children().removeClass('selected')
            $linkContent.addClass('selected')
            $linkTab.addClass('selected')
            e.preventDefault()

            // focus input
            if (E.placeholder) {
              $linkContent.find('input[type=text]').focus()
            }
          })

          // 默认情况
          // $uploadTab.addClass('selected');
          // $uploadContent.addClass('selected');
          $uploadTab.click()
        }

        // 隐藏上传图片
        function hideUploadImg() {
          $tabContainer.remove()
          $uploadContent.remove()
          $linkContent.addClass('selected')
        }

        // 隐藏网络图片
        function hideLinkImg() {
          $tabContainer.remove()
          $linkContent.remove()
          $uploadContent.addClass('selected')
        }

        // 判断用户是否配置了上传图片
        editor.ready(function () {
          var editor = this
          var config = editor.config
          var uploadImgUrl = config.uploadImgUrl
          var customUpload = config.customUpload
          var linkImg = config.hideLinkImg
          var $uploadImgPanel

          if (uploadImgUrl || customUpload) {
            // 第一，暴露出 $uploadContent 以便用户自定义 ！！！重要
            editor.$uploadContent = $uploadContent

            // 第二，绑定tab切换事件
            tabToggle()

            if (linkImg) {
              // 隐藏网络图片
              hideLinkImg()
            }
          } else {
            // 未配置上传图片功能
            hideUploadImg()
          }

          // 点击 $uploadContent 立即隐藏 dropPanel
          // 为了兼容IE8、9的上传，因为IE8、9使用 modal 上传
          // 这里使用异步，为了不妨碍高级浏览器通过点击 $uploadContent 选择文件
          function hidePanel() {
            menu.dropPanel.hide()
          }

          $uploadContent.click(function () {
            setTimeout(hidePanel)
          })
        })
      })

      // --------------- 处理网络图片content ---------------
      function linkContentHandler(editor, menu, $linkContent) {
        var lang = editor.config.lang
        var $urlContainer = $('<div style="margin:20px 10px 10px 10px;"></div>')
        var $urlInput = $(
          '<input type="text" class="block" placeholder="http://"/>'
        )
        $urlContainer.append($urlInput)
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>')
        var $btnCancel = $(
          '<button class="right gray">' + lang.cancel + '</button>'
        )

        $linkContent
          .append($urlContainer)
          .append($btnSubmit)
          .append($btnCancel)

        // 取消
        $btnCancel.click(function (e) {
          e.preventDefault()
          menu.dropPanel.hide()
        })

        // callback
        function callback() {
          $urlInput.val('')
        }

        // 确定
        $btnSubmit.click(function (e) {
          e.preventDefault()
          var url = $.trim($urlInput.val())
          if (!url) {
            // 无内容
            $urlInput.focus()
            return
          }

          var imgHtml = '<img style="max-width:100%;display:block;" src="' + url + '"/>'
          if (editor.config.defaultWidth && editor.config.defaultWidth()) {
            imgHtml = '<img style="width:' + editor.config.defaultWidth() + '%;display:block;" src="' + url + '"/>'
          }
          editor.command(e, 'insertHtml', imgHtml, callback)
        })
      }
    })
    // img upload 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'uploadImg'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.uploadImg
        })


        menu.isShowCode = false

        // 更新内容
        function updateValue() {
          var $code = menu.$codeTextarea
          var $txt = editor.txt.$txt
          var value = $.trim($code.val()) // 取值

          if (!value) {
            value = '<p><br></p>'
          }

          // 过滤js代码
          if (editor.config.jsFilter) {
            value = value.replace(/<script[\s\S]*?<\/script>/gi, '')
          }
          // 赋值
          try {
            $txt.html(value)
          } catch (ex) {
            // 更新 html 源码出错，一般都是取消了 js 过滤之后，js报错导致的
          }
        }

        // 定义click事件
        menu.clickEvent = function (e) {
          // 通知父节点弹出组件
          var self = this
          var editor = self.editor
          editor.config.showUpload()
          /* console.log(editor)
          var $txt = editor.txt.$txt
          var txtOuterHeight = $txt.outerHeight()
          var txtHeight = $txt.height()

          if (!self.$codeTextarea) {
            self.$codeTextarea = $(
              '<textarea class="code-textarea"></textarea>'
            )
          }
          var $code = self.$codeTextarea
          $code.css({
            height: txtHeight,
            'margin-top': txtOuterHeight - txtHeight
          })

          // 赋值
          $code.val($txt.html())

          // 监控变化
          $code.on('change', function(e) {
            updateValue()
          })

          // 渲染
          $txt.after($code).hide()
          $code.show()

          // 更新状态
          menu.isShowCode = true

          // 执行 updateSelected 事件
          this.updateSelected()

          // 禁用其他菜单
          editor.disableMenusExcept('source')

          // 记录当前html值
          txtHtml = $txt.html()
        }

        // 定义选中状态下的click事件
        menu.clickEventSelected = function(e) {
          var self = this
          var editor = self.editor
          var $txt = editor.txt.$txt
          var $code = self.$codeTextarea
          var value

          if (!$code) {
            return
          }

          // 更新内容
          updateValue()

          // 渲染
          $code.after($txt).hide()
          $txt.show()

          // 更新状态
          menu.isShowCode = false

          // 执行 updateSelected 事件
          this.updateSelected()

          // 启用其他菜单
          editor.enableMenusExcept('source')

          // 判断是否执行 onchange 事件
          if ($txt.html() !== txtHtml) {
            if (editor.onchange && typeof editor.onchange === 'function') {
              editor.onchange.call(editor)
            }
          }
        }

        // 定义切换选中状态事件
        menu.updateSelectedEvent = function() {
          return this.isShowCode
        }
        */
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu

        // 判断用户是否配置了上传图片
        editor.ready(function () {

        })
      })
    })
    // video 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'video'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang
        var reg = /^<(iframe)|(embed)/i // <iframe... 或者 <embed... 格式

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.video
        })

        // 创建 panel 内容
        var $content = $('<div></div>')
        var $linkInputContainer = $('<div style="margin:20px 10px;"></div>')
        var $linkInput = $(
          '<input type="text" class="block" placeholder=\'格式如：<iframe src="..." frameborder=0 allowfullscreen></iframe>\'/>'
        )
        $linkInputContainer.append($linkInput)
        var $sizeContainer = $('<div style="margin:20px 10px;"></div>')
        var $widthInput = $(
          '<input type="text" value="640" style="width:50px;text-align:center;"/>'
        )
        var $heightInput = $(
          '<input type="text" value="498" style="width:50px;text-align:center;"/>'
        )
        $sizeContainer
          .append('<span> ' + lang.width + ' </span>')
          .append($widthInput)
          .append('<span> px &nbsp;&nbsp;&nbsp;</span>')
          .append('<span> ' + lang.height + ' </span>')
          .append($heightInput)
          .append('<span> px </span>')
        var $btnContainer = $('<div></div>')
        var $howToCopy = $(
          '<a href="http://www.kancloud.cn/wangfupeng/wangeditor2/134973" target="_blank" style="display:inline-block;margin-top:10px;margin-left:10px;color:#999;">如何复制视频链接？</a>'
        )
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>')
        var $btnCancel = $(
          '<button class="right gray">' + lang.cancel + '</button>'
        )
        $btnContainer
          .append($howToCopy)
          .append($btnSubmit)
          .append($btnCancel)
        $content
          .append($linkInputContainer)
          .append($sizeContainer)
          .append($btnContainer)

        // 取消按钮
        $btnCancel.click(function (e) {
          e.preventDefault()
          $linkInput.val('')
          menu.dropPanel.hide()
        })

        // 确定按钮
        $btnSubmit.click(function (e) {
          e.preventDefault()
          var link = $.trim($linkInput.val())
          var $link
          var width = parseInt($widthInput.val())
          var height = parseInt($heightInput.val())
          var $div = $('<div>')
          var html = '<p>{content}</p>'

          // 验证数据
          if (!link) {
            menu.dropPanel.focusFirstInput()
            return
          }

          if (!reg.test(link)) {
            alert('视频链接格式错误！')
            menu.dropPanel.focusFirstInput()
            return
          }

          if (isNaN(width) || isNaN(height)) {
            alert('宽度或高度不是数字！')
            return
          }

          $link = $(link)

          // 设置高度和宽度
          $link.attr('width', width).attr('height', height)

          // 拼接字符串
          html = html.replace('{content}', $div.append($link).html())

          // 执行命令
          editor.command(e, 'insertHtml', html)
          $linkInput.val('')
        })

        // 创建panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 400
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // insertcode 菜单
    _e(function (E, $) {
      // 加载 highlightjs 代码
      function loadHljs() {
        if (E.userAgent.indexOf('MSIE 8') > 0) {
          // 不支持 IE8
          return
        }
        if (window.hljs) {
          // 不要重复加载
          return
        }
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '//cdn.bootcss.com/highlight.js/9.2.0/highlight.min.js'
        document.body.appendChild(script)
      }

      E.createMenu(function (check) {
        var menuId = 'insertcode'
        if (!check(menuId)) {
          return
        }

        // 加载 highlightjs 代码
        setTimeout(loadHljs, 0)

        var editor = this
        var config = editor.config
        var lang = config.lang
        var $txt = editor.txt.$txt

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.insertcode
        })

        // click 事件
        menu.clickEvent = function (e) {
          var menu = this
          var dropPanel = menu.dropPanel

          // 隐藏
          if (dropPanel.isShowing) {
            dropPanel.hide()
            return
          }

          // 显示
          $textarea.val('')
          dropPanel.show()

          // highlightjs 语言列表
          var hljs = window.hljs
          if (hljs && hljs.listLanguages) {
            if ($langSelect.children().length !== 0) {
              return
            }
            $langSelect.css({
              'margin-top': '9px',
              'margin-left': '5px'
            })
            $.each(hljs.listLanguages(), function (key, lang) {
              if (lang === 'xml') {
                lang = 'html'
              }
              if (lang === config.codeDefaultLang) {
                $langSelect.append(
                  '<option value="' +
                  lang +
                  '" selected="selected">' +
                  lang +
                  '</option>'
                )
              } else {
                $langSelect.append(
                  '<option value="' + lang + '">' + lang + '</option>'
                )
              }
            })
          } else {
            $langSelect.hide()
          }
        }

        // 选中状态下的 click 事件
        menu.clickEventSelected = function (e) {
          var menu = this
          var dropPanel = menu.dropPanel

          // 隐藏
          if (dropPanel.isShowing) {
            dropPanel.hide()
            return
          }

          // 显示
          dropPanel.show()

          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre')
          var $targetElem
          var className
          if (targetElem) {
            // 确定找到 pre 之后，再找 code
            targetElem = editor.getSelfOrParentByName(rangeElem, 'code')
          }
          if (!targetElem) {
            return
          }
          $targetElem = $(targetElem)

          // 赋值内容
          $textarea.val($targetElem.text())
          if ($langSelect) {
            // 赋值语言
            className = $targetElem.attr('class')
            if (className) {
              $langSelect.val(className.split(' ')[0])
            }
          }
        }

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
          var self = this //菜单对象
          var editor = self.editor
          var rangeElem

          rangeElem = editor.getRangeElem()
          rangeElem = editor.getSelfOrParentByName(rangeElem, 'pre')

          if (rangeElem) {
            return true
          }

          return false
        }

        // 创建 panel
        var $content = $('<div></div>')
        var $textarea = $('<textarea></textarea>')
        var $langSelect = $('<select></select>')
        contentHandle($content)
        menu.dropPanel = new E.DropPanel(editor, menu, {
          $content: $content,
          width: 500
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu

        // ------ 增加 content 内容 ------
        function contentHandle($content) {
          // textarea 区域
          var $textareaContainer = $('<div></div>')
          $textareaContainer.css({
            margin: '15px 5px 5px 5px',
            height: '160px',
            'text-align': 'center'
          })
          $textarea.css({
            width: '100%',
            height: '100%',
            padding: '10px'
          })
          $textarea.on('keydown', function (e) {
            // 取消 tab 键默认行为
            if (e.keyCode === 9) {
              e.preventDefault()
            }
          })
          $textareaContainer.append($textarea)
          $content.append($textareaContainer)

          // 按钮区域
          var $btnContainer = $('<div></div>')
          var $btnSubmit = $(
            '<button class="right">' + lang.submit + '</button>'
          )
          var $btnCancel = $(
            '<button class="right gray">' + lang.cancel + '</button>'
          )

          $btnContainer
            .append($btnSubmit)
            .append($btnCancel)
            .append($langSelect)
          $content.append($btnContainer)

          // 取消按钮
          $btnCancel.click(function (e) {
            e.preventDefault()
            menu.dropPanel.hide()
          })

          // 确定按钮
          var codeTpl =
            '<pre style="max-width:100%;overflow-x:auto;"><code{#langClass}>{#content}</code></pre>'
          $btnSubmit.click(function (e) {
            e.preventDefault()
            var val = $textarea.val()
            if (!val) {
              // 无内容
              $textarea.focus()
              return
            }

            var rangeElem = editor.getRangeElem()
            if (
              $.trim($(rangeElem).text()) &&
              codeTpl.indexOf('<p><br></p>') !== 0
            ) {
              codeTpl = '<p><br></p>' + codeTpl
            }

            var lang = $langSelect ? $langSelect.val() : '' // 获取高亮语言
            var langClass = ''
            var doHightlight = function () {
              $txt.find('pre code').each(function (i, block) {
                var $block = $(block)
                if ($block.attr('codemark')) {
                  // 有 codemark 标记的代码块，就不再重新格式化了
                  return
                } else if (window.hljs) {
                  // 新代码块，格式化之后，立即标记 codemark
                  window.hljs.highlightBlock(block)
                  $block.attr('codemark', '1')
                }
              })
            }

            // 语言高亮样式
            if (lang) {
              langClass = ' class="' + lang + ' hljs"'
            }

            // 替换标签
            val = val
              .replace(/&/gm, '&amp;')
              .replace(/</gm, '&lt;')
              .replace(/>/gm, '&gt;')

            // ---- menu 未选中状态 ----
            if (!menu.selected) {
              // 拼接html
              var html = codeTpl
                .replace('{#langClass}', langClass)
                .replace('{#content}', val)
              editor.command(e, 'insertHtml', html, doHightlight)
              return
            }

            // ---- menu 选中状态 ----
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre')
            var $targetElem
            if (targetElem) {
              // 确定找到 pre 之后，再找 code
              targetElem = editor.getSelfOrParentByName(rangeElem, 'code')
            }
            if (!targetElem) {
              return
            }
            $targetElem = $(targetElem)

            function commandFn() {
              var className
              if (lang) {
                className = $targetElem.attr('class')
                if (className !== lang + ' hljs') {
                  $targetElem.attr('class', lang + ' hljs')
                }
              }
              $targetElem.html(val)
            }

            function callback() {
              editor.restoreSelectionByElem(targetElem)
              doHightlight()
            }

            editor.customCommand(e, commandFn, callback)
          })
        }

        // ------ enter 时，不另起标签，只换行 ------
        $txt.on('keydown', function (e) {
          if (e.keyCode !== 13) {
            return
          }
          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getSelfOrParentByName(rangeElem, 'code')
          if (!targetElem) {
            return
          }

          editor.command(e, 'insertHtml', '\n')
        })

        // ------ 点击时，禁用其他标签 ------
        function updateMenu() {
          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getSelfOrParentByName(rangeElem, 'code')
          if (targetElem) {
            // 在 code 之内，禁用其他菜单
            editor.disableMenusExcept('insertcode')
          } else {
            // 不是在 code 之内，启用其他菜单
            editor.enableMenusExcept('insertcode')
          }
        }

        $txt.on('keydown click', function (e) {
          // 此处必须使用 setTimeout 异步处理，否则不对
          setTimeout(updateMenu)
        })
      })
    })
    // undo 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'undo'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.undo
        })

        // click 事件
        menu.clickEvent = function (e) {
          editor.undo()
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu

        // ------------ 初始化时、enter 时、打字中断时，做记录 ------------
        // ------------ ctrl + z 是调用记录撤销，而不是使用浏览器默认的撤销 ------------
        editor.ready(function () {
          var editor = this
          var $txt = editor.txt.$txt
          var timeoutId

          // 执行undo记录
          function undo() {
            editor.undoRecord()
          }

          $txt.on('keydown', function (e) {
            var keyCode = e.keyCode

            // 撤销 ctrl + z
            if (e.ctrlKey && keyCode === 90) {
              editor.undo()
              return
            }

            if (keyCode === 13) {
              // enter 做记录
              undo()
            } else {
              // keyup 之后 1s 之内不操作，则做一次记录
              if (timeoutId) {
                clearTimeout(timeoutId)
              }
              timeoutId = setTimeout(undo, 1000)
            }
          })

          // 初始化做记录
          editor.undoRecord()
        })
      })
    })
    // redo 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'redo'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var lang = editor.config.lang

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.redo
        })

        // click 事件
        menu.clickEvent = function (e) {
          editor.redo()
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // 全屏 菜单
    _e(function (E, $) {
      // 记录全屏时的scrollTop
      var scrollTopWhenFullScreen

      E.createMenu(function (check) {
        var menuId = 'fullscreen'
        if (!check(menuId)) {
          return
        }
        var editor = this
        var $txt = editor.txt.$txt
        var config = editor.config
        var zIndexConfig = config.zindex || 10000
        var lang = config.lang

        var isSelected = false
        var zIndex

        var maxHeight

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor,
          id: menuId,
          title: lang.fullscreen
        })

        // 定义click事件
        menu.clickEvent = function (e) {
          // 增加样式
          var $editorContainer = editor.$editorContainer
          $editorContainer.addClass('wangEditor-fullscreen')

          // （先保存当前的）再设置z-index
          zIndex = $editorContainer.css('z-index')
          $editorContainer.css('z-index', zIndexConfig)

          var $wrapper
          var txtHeight = $txt.height()
          var txtOuterHeight = $txt.outerHeight()

          if (editor.useMaxHeight) {
            // 记录 max-height，并暂时去掉maxheight
            maxHeight = $txt.css('max-height')
            $txt.css('max-height', 'none')

            // 如果使用了maxHeight， 将$txt从它的父元素中移出来
            $wrapper = $txt.parent()
            $wrapper.after($txt)
            $wrapper.remove()
            $txt.css('overflow-y', 'auto')
          }

          // 设置高度到全屏
          var menuContainer = editor.menuContainer
          $txt.height(
            E.$window.height() -
            menuContainer.height() -
            (txtOuterHeight - txtHeight) // 去掉内边距和外边距
          )

          // 取消menuContainer的内联样式（menu吸顶时，会为 menuContainer 设置一些内联样式）
          editor.menuContainer.$menuContainer.attr('style', '')

          // 保存状态
          isSelected = true

          // 记录编辑器是否全屏
          editor.isFullScreen = true

          // 记录设置全屏时的高度
          scrollTopWhenFullScreen = E.$window.scrollTop()
        }

        // 定义选中状态的 click 事件
        menu.clickEventSelected = function (e) {
          // 取消样式
          var $editorContainer = editor.$editorContainer
          $editorContainer.removeClass('wangEditor-fullscreen')
          $editorContainer.css('z-index', zIndex)

          // 还原height
          if (editor.useMaxHeight) {
            $txt.css('max-height', maxHeight)
          } else {
            // editor.valueContainerHeight 在 editor.txt.initHeight() 中事先保存了
            editor.$valueContainer.css('height', editor.valueContainerHeight)
          }

          // 重新计算高度
          editor.txt.initHeight()

          // 保存状态
          isSelected = false

          // 记录编辑器是否全屏
          editor.isFullScreen = false

          // 还原scrollTop
          if (scrollTopWhenFullScreen != null) {
            E.$window.scrollTop(scrollTopWhenFullScreen)
          }
        }

        // 定义选中事件
        menu.updateSelectedEvent = function (e) {
          return isSelected
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // 渲染menus
    _e(function (E, $) {
      E.fn.renderMenus = function () {
        var editor = this
        var menus = editor.menus
        var menuIds = editor.config.menus
        var menuContainer = editor.menuContainer

        var menu
        var groupIdx = 0
        $.each(menuIds, function (k, v) {
          if (v === '|') {
            groupIdx++
            return
          }

          menu = menus[v]
          if (menu) {
            menu.render(groupIdx)
          }
        })
      }
    })
    // 渲染menus
    _e(function (E, $) {
      E.fn.renderMenuContainer = function () {
        var editor = this
        var menuContainer = editor.menuContainer
        var $editorContainer = editor.$editorContainer

        menuContainer.render()
      }
    })
    // 渲染 txt
    _e(function (E, $) {
      E.fn.renderTxt = function () {
        var editor = this
        var txt = editor.txt

        txt.render()

        // ready 时候，计算txt的高度
        editor.ready(function () {
          txt.initHeight()
        })
      }
    })
    // 渲染 container
    _e(function (E, $) {
      E.fn.renderEditorContainer = function () {
        var editor = this
        var $valueContainer = editor.$valueContainer
        var $editorContainer = editor.$editorContainer
        var $txt = editor.txt.$txt
        var $prev, $parent

        // 将编辑器渲染到页面中
        if ($valueContainer === $txt) {
          $prev = editor.$prev
          $parent = editor.$parent

          if ($prev && $prev.length) {
            // 有前置节点，就插入到前置节点的后面
            $prev.after($editorContainer)
          } else {
            // 没有前置节点，就直接插入到父元素
            $parent.prepend($editorContainer)
          }
        } else {
          $valueContainer.after($editorContainer)
          $valueContainer.hide()
        }

        // 设置宽度（这样设置宽度有问题）
        // $editorContainer.css('width', $valueContainer.css('width'));
      }
    })
    // 菜单事件
    _e(function (E, $) {
      // 绑定每个菜单的click事件
      E.fn.eventMenus = function () {
        var menus = this.menus

        // 绑定菜单的点击事件
        $.each(menus, function (k, v) {
          v.bindEvent()
        })
      }
    })
    // 菜单container事件
    _e(function (E, $) {
      E.fn.eventMenuContainer = function () {
      }
    })
    // 编辑区域事件
    _e(function (E, $) {
      E.fn.eventTxt = function () {
        var txt = this.txt

        // txt内容变化时，保存选区
        txt.saveSelectionEvent()

        // txt内容变化时，随时更新 value
        txt.updateValueEvent()

        // txt内容变化时，随时更新 menu style
        txt.updateMenuStyleEvent()

        // // 鼠标hover时，显示 p head 高度（暂时关闭这个功能）
        // if (!/ie/i.test(E.userAgent)) {
        //     // 暂时不支持IE
        //     txt.showHeightOnHover();
        // }
      }
    })
    // 上传图片事件
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var fns = editor.config.uploadImgFns // editor.config.uploadImgFns = {} 在config文件中定义了

        // -------- 定义load函数 --------
        fns.onload ||
        (fns.onload = function (resultText, xhr) {
          E.log('上传结束，返回结果为 ' + resultText)

          var editor = this
          var originalName = editor.uploadImgOriginalName || '' // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
          var img
          if (resultText.indexOf('error|') === 0) {
            // 提示错误
            E.warn('上传失败：' + resultText.split('|')[1])
            alert(resultText.split('|')[1])
          } else {
            E.log('上传成功，即将插入编辑区域，结果为：' + resultText)

            // 将结果插入编辑器
            img = document.createElement('img')
            img.onload = function () {
              var html =
                '<img src="' +
                resultText +
                '" alt="' +
                originalName +
                '" style="max-width:100%;display:block;"/>'
              if (editor.config.defaultWidth && editor.config.defaultWidth()) {
                html = '<img src="' +
                  resultText +
                  '" alt="' +
                  originalName +
                  '" style="width:' + editor.config.defaultWidth() + '%;display:block;"/>'
              }
              editor.command(null, 'insertHtml', html)
              img = null
            }
            img.onerror = function () {
              E.error(
                '使用返回的结果获取图片，发生错误。请确认以下结果是否正确：' +
                resultText
              )
              img = null
            }
            img.src = resultText
          }
        })

        // -------- 定义tiemout函数 --------
        fns.ontimeout ||
        (fns.ontimeout = function (xhr) {
          E.error('上传图片超时')
          alert('上传图片超时')
        })

        // -------- 定义error函数 --------
        fns.onerror ||
        (fns.onerror = function (xhr) {
          E.error('上传上图片发生错误')
          alert('上传上图片发生错误')
        })
      })
    })
    // xhr 上传图片
    _e(function (E, $) {
      if (!window.FileReader || !window.FormData) {
        // 如果不支持html5的文档操作，直接返回
        return
      }

      E.plugin(function () {
        var editor = this
        var config = editor.config
        var uploadImgUrl = config.uploadImgUrl
        var uploadTimeout = config.uploadTimeout

        // 获取配置中的上传事件
        var uploadImgFns = config.uploadImgFns
        var onload = uploadImgFns.onload
        var ontimeout = uploadImgFns.ontimeout
        var onerror = uploadImgFns.onerror

        if (!uploadImgUrl) {
          return
        }

        // -------- 将以base64的图片url数据转换为Blob --------
        function convertBase64UrlToBlob(urlData, filetype) {
          //去掉url的头，并转换为byte
          var bytes = window.atob(urlData.split(',')[1])

          //处理异常,将ascii码小于0的转换为大于0
          var ab = new ArrayBuffer(bytes.length)
          var ia = new Uint8Array(ab)
          var i
          for (i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i)
          }

          return new Blob([ab], {type: filetype})
        }

        // -------- 插入图片的方法 --------
        function insertImg(src, event) {
          var img = document.createElement('img')
          img.onload = function () {
            var html = '<img src="' + src + '" style="max-width:100%;display:block;"/>'
            if (editor.config.defaultWidth && editor.config.defaultWidth()) {
              html = '<img src="' + src + '" style="width:' + editor.config.defaultWidth() + '%;display:block;"/>'
            }
            editor.command(event, 'insertHtml', html)

            E.log('已插入图片，地址 ' + src)
            img = null
          }
          img.onerror = function () {
            E.error(
              '使用返回的结果获取图片，发生错误。请确认以下结果是否正确：' + src
            )
            img = null
          }
          img.src = src
        }

        // -------- onprogress 事件 --------
        function updateProgress(e) {
          if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total
            editor.showUploadProgress(percentComplete * 100)
          }
        }

        // -------- xhr 上传图片 --------
        editor.xhrUploadImg = function (opt) {
          // opt 数据
          var event = opt.event
          var base64 = opt.base64
          var fileType = opt.fileType || 'image/png' // 无扩展名则默认使用 png
          var fileName = opt.filename || ('temp_' + parseInt(Math.random() * 10000) + '.' + fileType.replace('image/', ''))
          var name = opt.name || 'wangEditor_upload_file'
          var loadfn = opt.loadfn || onload
          var errorfn = opt.errorfn || onerror
          var timeoutfn = opt.timeoutfn || ontimeout

          // 上传参数（如 token）
          var params = editor.config.uploadParams || {}

          // headers
          var headers = editor.config.uploadHeaders || {}

          // 获取文件扩展名
          var fileExt = 'png' // 默认为 png
          if (fileName.indexOf('.') > 0) {
            // 原来的文件名有扩展名
            fileExt = fileName.slice(
              fileName.lastIndexOf('.') - fileName.length + 1
            )
          } else if (fileType.indexOf('/') > 0 && fileType.split('/')[1]) {
            // 文件名没有扩展名，通过类型获取，如从 'image/png' 取 'png'
            fileExt = fileType.split('/')[1]
          }

          // ------------ begin 预览模拟上传 ------------
          if (E.isOnWebsite) {
            E.log('预览模拟上传')
            insertImg(base64, event)
            return
          }
          // ------------ end 预览模拟上传 ------------

          // 变量声明
          var xhr = new XMLHttpRequest()
          var timeoutId
          var src
          var formData = new FormData()

          // 超时处理
          function timeoutCallback() {
            if (timeoutId) {
              clearTimeout(timeoutId)
            }
            if (xhr && xhr.abort) {
              xhr.abort()
            }

            // 超时了就阻止默认行为
            event.preventDefault()

            // 执行回调函数，提示什么内容，都应该在回调函数中定义
            timeoutfn && timeoutfn.call(editor, xhr, fileName)

            // 隐藏进度条
            editor.hideUploadProgress()
          }

          xhr.onload = function () {
            if (timeoutId) {
              clearTimeout(timeoutId)
            }

            // 记录文件名到 editor.uploadImgOriginalName ，插入图片时，可做 alt 属性用
            editor.uploadImgOriginalName = fileName
            if (fileName.indexOf('.') > 0) {
              editor.uploadImgOriginalName = fileName.split('.')[0]
            }
            // 执行load函数，任何操作，都应该在load函数中定义
            loadfn && loadfn.call(editor, xhr.responseText, xhr, fileName)

            // 隐藏进度条
            editor.hideUploadProgress()
          }
          xhr.onerror = function () {
            if (timeoutId) {
              clearTimeout(timeoutId)
            }

            // 超时了就阻止默认行为
            event.preventDefault()

            // 执行error函数，错误提示，应该在error函数中定义
            errorfn && errorfn.call(editor, xhr, fileName)

            // 隐藏进度条
            editor.hideUploadProgress()
          }
          // xhr.onprogress = updateProgress;
          xhr.upload.onprogress = updateProgress

          // 填充数据
          formData.append(
            name,
            convertBase64UrlToBlob(base64, fileType),
            fileName // E.random() + '.' + fileExt
          )

          // 添加参数
          $.each(params, function (key, value) {
            formData.append(key, value)
          })

          // 开始上传
          xhr.open('POST', uploadImgUrl, true)
          // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  // 将参数解析成传统form的方式上传

          // 修改自定义配置的headers
          $.each(headers, function (key, value) {
            xhr.setRequestHeader(key, value)
          })

          // 跨域上传时，传cookie
          xhr.withCredentials = !!editor.config.withCredentials

          // 发送数据
          xhr.send(formData)
          timeoutId = setTimeout(timeoutCallback, uploadTimeout)

          E.log('开始上传...并开始超时计算')
        }
      })
    })
    // 进度条
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var menuContainer = editor.menuContainer
        var menuHeight = menuContainer.height()
        var $editorContainer = editor.$editorContainer
        var width = $editorContainer.width()
        var $progress = $('<div class="wangEditor-upload-progress"></div>')

        // 渲染事件
        var isRender = false

        function render() {
          if (isRender) {
            return
          }
          isRender = true

          $progress.css({
            top: menuHeight + 'px'
          })
          $editorContainer.append($progress)
        }

        // ------ 显示进度 ------
        editor.showUploadProgress = function (progress) {
          if (timeoutId) {
            clearTimeout(timeoutId)
          }

          // 显示之前，先判断是否渲染
          render()

          $progress.show()
          $progress.width((progress * width) / 100)
        }

        // ------ 隐藏进度条 ------
        var timeoutId

        function hideProgress() {
          $progress.hide()
          timeoutId = null
        }

        editor.hideUploadProgress = function (time) {
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
          time = time || 750
          timeoutId = setTimeout(hideProgress, time)
        }
      })
    })
    // upload img 插件
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var config = editor.config
        var uploadImgUrl = config.uploadImgUrl
        var uploadTimeout = config.uploadTimeout
        var event

        if (!uploadImgUrl) {
          return
        }

        // 获取editor的上传dom
        var $uploadContent = editor.$uploadContent
        if (!$uploadContent) {
          return
        }

        // 自定义UI，并添加到上传dom节点上
        var $uploadIcon = $(
          '<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>'
        )
        $uploadContent.append($uploadIcon)

        // ---------- 构建上传对象 ----------
        var upfile = new E.UploadFile({
          editor: editor,
          uploadUrl: uploadImgUrl,
          timeout: uploadTimeout,
          fileAccept: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp' // 只允许选择图片
        })

        // 选择本地文件，上传
        $uploadIcon.click(function (e) {
          event = e
          upfile.selectFiles()
        })
      })
    })
    // h5 方式上传图片
    _e(function (E, $) {
      if (!window.FileReader || !window.FormData) {
        // 如果不支持html5的文档操作，直接返回
        return
      }

      // 构造函数
      var UploadFile = function (opt) {
        this.editor = opt.editor
        this.uploadUrl = opt.uploadUrl
        this.timeout = opt.timeout
        this.fileAccept = opt.fileAccept
        this.multiple = true
      }

      UploadFile.fn = UploadFile.prototype

      // clear
      UploadFile.fn.clear = function () {
        this.$input.val('')
        E.log('input value 已清空')
      }

      // 渲染
      UploadFile.fn.render = function () {
        var self = this
        if (self._hasRender) {
          // 不要重复渲染
          return
        }

        E.log('渲染dom')

        var fileAccept = self.fileAccept
        var acceptTpl = fileAccept ? 'accept="' + fileAccept + '"' : ''
        var multiple = self.multiple
        var multipleTpl = multiple ? 'multiple="multiple"' : ''
        var $input = $(
          '<input type="file" ' + acceptTpl + ' ' + multipleTpl + '/>'
        )
        var $container = $('<div style="display:none;"></div>')

        $container.append($input)
        E.$body.append($container)

        // onchange 事件
        $input.on('change', function (e) {
          self.selected(e, $input.get(0))
        })

        // 记录对象数据
        self.$input = $input

        // 记录
        self._hasRender = true
      }

      // 选择
      UploadFile.fn.selectFiles = function () {
        var self = this

        E.log('使用 html5 方式上传')

        // 先渲染
        self.render()

        // 选择
        E.log('选择文件')
        self.$input.click()
      }

      // 选中文件之后
      UploadFile.fn.selected = function (e, input) {
        var self = this
        var files = input.files || []
        if (files.length === 0) {
          return
        }

        E.log('选中 ' + files.length + ' 个文件')

        // 遍历选中的文件，预览、上传
        $.each(files, function (key, value) {
          self.upload(value)
        })
      }

      // 上传单个文件
      UploadFile.fn.upload = function (file) {
        var self = this
        var editor = self.editor
        var filename = file.name || ''
        var fileType = file.type || ''
        var uploadImgFns = editor.config.uploadImgFns
        var lang = editor.config.lang
        var uploadFileName =
          editor.config.uploadImgFileName || 'wangEditorH5File'
        var onload = uploadImgFns.onload
        var ontimeout = uploadImgFns.ontimeout
        var onerror = uploadImgFns.onerror
        var reader = new FileReader()

        if (!onload || !ontimeout || !onerror) {
          E.error('请为编辑器配置上传图片的 onload ontimeout onerror 回调事件')
          return
        }

        E.log('开始执行 ' + filename + ' 文件的上传')

        // 清空 input 数据
        function clearInput() {
          self.clear()
        }

        editor.command(
          null,
          'insertHtml',
          '<img alt="' +
          lang.uploadPlaceTxt +
          filename +
          '" src="' +
          editor.config.uploadPlaceholderImg +
          '"/>'
        )
        // onload事件
        reader.onload = function (e) {
          E.log('已读取' + filename + '文件')

          var base64 = e.target.result || this.result
          editor.xhrUploadImg({
            event: e,
            filename: filename,
            base64: base64,
            fileType: fileType,
            name: uploadFileName,
            loadfn: function (resultText, xhr, fileName) {
              clearInput()
              // 执行配置中的方法
              var editor = this
              onload.call(editor, resultText, xhr, fileName)
            },
            errorfn: function (xhr, fileName) {
              clearInput()
              if (E.isOnWebsite) {
                alert(
                  'wangEditor官网暂时没有服务端，因此报错。实际项目中不会发生'
                )
              }
              // 执行配置中的方法
              var editor = this
              onerror.call(editor, xhr, fileName)
            },
            timeoutfn: function (xhr, fileName) {
              clearInput()
              if (E.isOnWebsite) {
                alert(
                  'wangEditor官网暂时没有服务端，因此超时。实际项目中不会发生'
                )
              }
              // 执行配置中的方法
              var editor = this
              ontimeout(editor, xhr, fileName)
            }
          })
        }

        // 开始取文件
        reader.readAsDataURL(file)
      }

      // 暴露给 E
      E.UploadFile = UploadFile
    })
    // form方式上传图片
    _e(function (E, $) {
      if (window.FileReader && window.FormData) {
        // 如果支持 html5 上传，则返回
        return
      }

      // 构造函数
      var UploadFile = function (opt) {
        this.editor = opt.editor
        this.uploadUrl = opt.uploadUrl
        this.timeout = opt.timeout
        this.fileAccept = opt.fileAccept
        this.multiple = false
      }

      UploadFile.fn = UploadFile.prototype

      // clear
      UploadFile.fn.clear = function () {
        this.$input.val('')
        E.log('input value 已清空')
      }

      // 隐藏modal
      UploadFile.fn.hideModal = function () {
        this.modal.hide()
      }

      // 渲染
      UploadFile.fn.render = function () {
        var self = this
        var editor = self.editor
        var uploadFileName =
          editor.config.uploadImgFileName || 'wangEditorFormFile'
        if (self._hasRender) {
          // 不要重复渲染
          return
        }

        // 服务器端路径
        var uploadUrl = self.uploadUrl

        E.log('渲染dom')

        // 创建 form 和 iframe
        var iframeId = 'iframe' + E.random()
        var $iframe = $(
          '<iframe name="' +
          iframeId +
          '" id="' +
          iframeId +
          '" frameborder="0" width="0" height="0"></iframe>'
        )
        var multiple = self.multiple
        var multipleTpl = multiple ? 'multiple="multiple"' : ''
        var $p = $('<p>选择图片并上传</p>')
        var $input = $(
          '<input type="file" ' +
          multipleTpl +
          ' name="' +
          uploadFileName +
          '"/>'
        )
        var $btn = $('<input type="submit" value="上传"/>')
        var $form = $(
          '<form enctype="multipart/form-data" method="post" action="' +
          uploadUrl +
          '" target="' +
          iframeId +
          '"></form>'
        )
        var $container = $('<div style="margin:10px 20px;"></div>')

        $form
          .append($p)
          .append($input)
          .append($btn)

        // 增加用户配置的参数，如 token
        $.each(editor.config.uploadParams, function (key, value) {
          $form.append(
            $('<input type="hidden" name="' + key + '" value="' + value + '"/>')
          )
        })

        $container.append($form)
        $container.append($iframe)

        self.$input = $input
        self.$iframe = $iframe

        // 生成 modal
        var modal = new E.Modal(editor, undefined, {
          $content: $container
        })
        self.modal = modal

        // 记录
        self._hasRender = true
      }

      // 绑定 iframe load 事件
      UploadFile.fn.bindLoadEvent = function () {
        var self = this
        if (self._hasBindLoad) {
          // 不要重复绑定
          return
        }

        var editor = self.editor
        var $iframe = self.$iframe
        var iframe = $iframe.get(0)
        var iframeWindow = iframe.contentWindow
        var onload = editor.config.uploadImgFns.onload

        // 定义load事件
        function onloadFn() {
          var resultText = $.trim(iframeWindow.document.body.innerHTML)
          if (!resultText) {
            return
          }

          // 获取文件名
          var fileFullName = self.$input.val() // 结果如 C:\folder\abc.png 格式
          var fileOriginalName = fileFullName
          if (fileFullName.lastIndexOf('\\') >= 0) {
            // 获取 abc.png 格式
            fileOriginalName = fileFullName.slice(
              fileFullName.lastIndexOf('\\') + 1
            )
            if (fileOriginalName.indexOf('.') > 0) {
              // 获取 abc （即不带扩展名的文件名）
              fileOriginalName = fileOriginalName.split('.')[0]
            }
          }

          // 将文件名暂存到 editor.uploadImgOriginalName ，插入图片时，可作为 alt 属性来用
          editor.uploadImgOriginalName = fileOriginalName

          // 执行load函数，插入图片的操作，应该在load函数中执行
          onload.call(editor, resultText)

          // 清空 input 数据
          self.clear()

          // 隐藏modal
          self.hideModal()
        }

        // 绑定 load 事件
        if (iframe.attachEvent) {
          iframe.attachEvent('onload', onloadFn)
        } else {
          iframe.onload = onloadFn
        }

        // 记录
        self._hasBindLoad = true
      }

      UploadFile.fn.show = function () {
        var self = this
        var modal = self.modal

        function show() {
          modal.show()
          self.bindLoadEvent()
        }

        setTimeout(show)
      }

      // 选择
      UploadFile.fn.selectFiles = function () {
        var self = this

        E.log('使用 form 方式上传')

        // 先渲染
        self.render()

        // 先清空
        self.clear()

        // 显示
        self.show()
      }

      // 暴露给 E
      E.UploadFile = UploadFile
    })
    // upload img 插件 粘贴图片
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var txt = editor.txt
        var $txt = txt.$txt
        var config = editor.config
        var uploadImgUrl = config.uploadImgUrl
        var uploadFileName = config.uploadImgFileName || 'wangEditorPasteFile'
        var pasteEvent
        var $imgsBeforePaste

        // 未配置上传图片url，则忽略
        if (!uploadImgUrl) {
          return
        }

        // -------- 非 chrome 下，通过查找粘贴的图片的方式上传 --------
        function findPasteImgAndUpload() {
          var reg = /^data:(image\/\w+);base64/
          var $imgs = $txt.find('img')

          E.log(
            '粘贴后，检查到编辑器有' +
            $imgs.length +
            '个图片。开始遍历图片，试图找到刚刚粘贴过来的图片'
          )

          $.each($imgs, function () {
            var img = this
            var $img = $(img)
            var flag
            var base64 = $img.attr('src')
            var type

            // 判断当前图片是否是粘贴之前的
            $imgsBeforePaste.each(function () {
              if (img === this) {
                // 当前图片是粘贴之前的
                flag = true
                return false
              }
            })

            // 当前图片是粘贴之前的，则忽略
            if (flag) {
              return
            }

            E.log('找到一个粘贴过来的图片')

            if (reg.test(base64)) {
              // 得到的粘贴的图片是 base64 格式，符合要求
              E.log('src 是 base64 格式，可以上传')
              type = base64.match(reg)[1]
              editor.xhrUploadImg({
                event: pasteEvent,
                base64: base64,
                fileType: type,
                name: uploadFileName
              })
            } else {
              E.log('src 为 ' + base64 + ' ，不是 base64 格式，暂时不支持上传')
            }

            // 最终移除原图片
            $img.remove()
          })

          E.log('遍历结束')
        }

        // 开始监控粘贴事件
        $txt.on('paste', function (e) {
          pasteEvent = e
          var data =
            pasteEvent.clipboardData || pasteEvent.originalEvent.clipboardData
          var text
          var items

          // -------- 试图获取剪切板中的文字，有文字的情况下，就不处理图片粘贴 --------
          if (data == null) {
            text = window.clipboardData && window.clipboardData.getData('text')
          } else {
            text = data.getData('text/plain') || data.getData('text/html')
          }
          if (text) {
            return
          }

          items = data && data.items
          if (items) {
            // -------- chrome 可以用 data.items 取出图片 -----
            E.log('通过 data.items 得到了数据')
            $.each(items, function (key, value) {
              var fileType = value.type || ''
              if (fileType.indexOf('image') < 0) {
                // 不是图片
                return
              }

              var file = value.getAsFile()
              var reader = new FileReader()

              E.log('得到一个粘贴图片')
              reader.onload = function (e) {
                E.log('读取到粘贴的图片')

                // 执行上传
                var base64 = e.target.result || this.result
                editor.xhrUploadImg({
                  event: pasteEvent,
                  base64: base64,
                  fileType: fileType,
                  name: uploadFileName
                })
              }

              //读取粘贴的文件
              reader.readAsDataURL(file)
            })
          } else {
            // -------- 非 chrome 不能用 data.items 取图片 -----

            E.log('未从 data.items 得到数据，使用检测粘贴图片的方式')

            // 获取
            $imgsBeforePaste = $txt.find('img')
            E.log('粘贴前，检查到编辑器有' + $imgsBeforePaste.length + '个图片')

            // 异步上传找到的图片
            setTimeout(findPasteImgAndUpload, 0)
          }
        })
      })
    })
    // 拖拽上传图片 插件
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var txt = editor.txt
        var $txt = txt.$txt
        var config = editor.config
        var lang = editor.config.lang
        var uploadImgUrl = config.uploadImgUrl
        var uploadFileName = config.uploadImgFileName || 'wangEditorDragFile'

        // 未配置上传图片url，则忽略
        if (!uploadImgUrl) {
          return
        }

        // 阻止浏览器默认行为
        E.$document.on('dragleave drop dragenter dragover', function (e) {
          e.preventDefault()
        })

        // 监控 $txt drop 事件
        $txt.on('drop', function (dragEvent) {
          dragEvent.preventDefault()

          var originalEvent = dragEvent.originalEvent
          var files =
            originalEvent.dataTransfer && originalEvent.dataTransfer.files

          if (!files || !files.length) {
            return
          }

          $.each(files, function (k, file) {
            var type = file.type
            var name = file.name

            if (type.indexOf('image/') < 0) {
              // 只接收图片
              return
            }

            E.log('得到图片 ' + name)

            editor.command(
              null,
              'insertHtml',
              '<img alt="' +
              lang.uploadPlaceTxt +
              name +
              '"  src="' +
              editor.config.uploadPlaceholderImg +
              '" />'
            )
            var reader = new FileReader()
            reader.onload = function (e) {
              E.log('读取到图片 ' + name)

              // 执行上传
              var base64 = e.target.result || this.result
              editor.xhrUploadImg({
                event: dragEvent,
                filename: name,
                base64: base64,
                fileType: type,
                name: uploadFileName
              })
            }

            //读取粘贴的文件
            reader.readAsDataURL(file)
          })
        })
      })
    })
    // 编辑器区域 table toolbar
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var txt = editor.txt
        var $txt = txt.$txt
        var html = ''
        // 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
        var $currentTxt = editor.useMaxHeight ? $txt.parent() : $txt
        var $currentTable

        // 用到的dom节点
        var isRendered = false
        var $toolbar = $('<div class="txt-toolbar"></div>')
        var $triangle = $('<div class="tip-triangle"></div>')
        var $delete = $(
          '<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>'
        )
        var $zoomSmall = $(
          '<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>'
        )
        var $zoomBig = $(
          '<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>'
        )

        // 渲染到页面
        function render() {
          if (isRendered) {
            return
          }

          // 绑定事件
          bindEvent()

          // 拼接 渲染到页面上
          $toolbar
            .append($triangle)
            .append($delete)
            .append($zoomSmall)
            .append($zoomBig)
          editor.$editorContainer.append($toolbar)
          isRendered = true
        }

        // 绑定事件
        function bindEvent() {
          // 统一执行命令的方法
          var commandFn

          function command(e, callback) {
            // 执行命令之前，先存储html内容
            html = $txt.html()
            // 监控内容变化
            var cb = function () {
              if (callback) {
                callback()
              }
              if (html !== $txt.html()) {
                $txt.change()
              }
            }
            // 执行命令
            if (commandFn) {
              editor.customCommand(e, commandFn, cb)
            }
          }

          // 删除
          $delete.click(function (e) {
            commandFn = function () {
              $currentTable.remove()
            }
            command(e, function () {
              setTimeout(hide, 100)
            })
          })

          // 放大
          $zoomBig.click(function (e) {
            commandFn = function () {
              $currentTable.css({
                width: '100%'
              })
            }
            command(e, function () {
              setTimeout(show)
            })
          })

          // 缩小
          $zoomSmall.click(function (e) {
            commandFn = function () {
              $currentTable.css({
                width: 'auto'
              })
            }
            command(e, function () {
              setTimeout(show)
            })
          })
        }

        // 显示 toolbar
        function show() {
          if (editor._disabled) {
            // 编辑器已经被禁用，则不让显示
            return
          }
          if ($currentTable == null) {
            return
          }
          $currentTable.addClass('clicked')
          var tablePosition = $currentTable.position()
          var tableTop = tablePosition.top
          var tableLeft = tablePosition.left
          var tableHeight = $currentTable.outerHeight()
          var tableWidth = $currentTable.outerWidth()

          // --- 定位 toolbar ---

          // 计算初步结果
          var top = tableTop + tableHeight
          var left = tableLeft
          var marginLeft = 0

          var txtTop = $currentTxt.position().top
          var txtHeight = $currentTxt.outerHeight()
          if (top > txtTop + txtHeight) {
            // top 不得超出编辑范围
            top = txtTop + txtHeight
          }

          // 显示（方便计算 margin）
          $toolbar.show()

          // 计算 margin
          var width = $toolbar.outerWidth()
          marginLeft = tableWidth / 2 - width / 2

          // 定位
          $toolbar.css({
            top: top + 5,
            left: left,
            'margin-left': marginLeft
          })
          // 如果定位太靠左了
          if (marginLeft < 0) {
            // 得到三角形的margin-left
            $toolbar.css('margin-left', '0')
            $triangle.hide()
          } else {
            $triangle.show()
          }
        }

        // 隐藏 toolbar
        function hide() {
          if ($currentTable == null) {
            return
          }
          $currentTable.removeClass('clicked')
          $currentTable = null
          $toolbar.hide()
        }

        // click table 事件
        $currentTxt
          .on('click', 'table', function (e) {
            var $table = $(e.currentTarget)

            // 渲染
            render()

            if ($currentTable && $currentTable.get(0) === $table.get(0)) {
              setTimeout(hide, 100)
              return
            }

            // 显示 toolbar
            $currentTable = $table
            show()

            // 阻止冒泡
            e.preventDefault()
            e.stopPropagation()
          })
          .on('click keydown scroll', function (e) {
            setTimeout(hide, 100)
          })
        E.$body.on('click keydown scroll', function (e) {
          setTimeout(hide, 100)
        })
      })
    })
    // 编辑器区域 img toolbar
    _e(function (E, $) {
      if (E.userAgent.indexOf('MSIE 8') > 0) {
        return
      }

      E.plugin(function () {
        var editor = this
        var lang = editor.config.lang
        var txt = editor.txt
        var $txt = txt.$txt
        var html = ''
        // 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
        var $currentTxt = editor.useMaxHeight ? $txt.parent() : $txt
        var $editorContainer = editor.$editorContainer
        var $currentImg
        var currentLink = ''

        // 用到的dom节点
        var isRendered = false
        var $dragPoint = $('<div class="img-drag-point"></div>')

        var $toolbar = $('<div class="txt-toolbar"></div>')
        var $triangle = $('<div class="tip-triangle"></div>')

        var $menuContainer = $('<div></div>')
        var $delete = $(
          '<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>'
        )
        var $zoomSmall = $(
          '<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>'
        )
        var $zoomBig = $(
          '<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>'
        )
        // var $floatLeft = $('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');
        // var $noFloat = $('<a href="#"><i class="wangeditor-menu-img-align-justify"></i></a>');
        // var $floatRight = $('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');
        var $alignLeft = $(
          '<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>'
        )
        var $alignCenter = $(
          '<a href="#"><i class="wangeditor-menu-img-align-center"></i></a>'
        )
        var $alignRight = $(
          '<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>'
        )
        var $link = $(
          '<a href="#"><i class="wangeditor-menu-img-link"></i></a>'
        )
        var $unLink = $(
          '<a href="#"><i class="wangeditor-menu-img-unlink"></i></a>'
        )

        var $linkInputContainer = $('<div style="display:none;"></div>')
        var $linkInput = $(
          '<input type="text" style="height:26px; margin-left:10px; width:200px;"/>'
        )
        var $linkBtnSubmit = $(
          '<button class="right">' + lang.submit + '</button>'
        )
        var $linkBtnCancel = $(
          '<button class="right gray">' + lang.cancel + '</button>'
        )

        // 记录是否正在拖拽
        var isOnDrag = false

        // 获取 / 设置 链接
        function imgLink(e, url) {
          if (!$currentImg) {
            return
          }
          var commandFn
          var callback = function () {
            // 及时保存currentLink
            if (url != null) {
              currentLink = url
            }
            if (html !== $txt.html()) {
              $txt.change()
            }
          }
          var $link
          var inLink = false
          var $parent = $currentImg.parent()
          if ($parent.get(0).nodeName.toLowerCase() === 'a') {
            // 父元素就是图片链接
            $link = $parent
            inLink = true
          } else {
            // 父元素不是图片链接，则重新创建一个链接
            $link = $('<a target="_blank"></a>')
          }

          if (url == null) {
            // url 无值，是获取链接
            return $link.attr('href') || ''
          } else if (url === '') {
            // url 是空字符串，是取消链接
            if (inLink) {
              commandFn = function () {
                $currentImg.unwrap()
              }
            }
          } else {
            // url 有值，是设置链接
            if (url === currentLink) {
              return
            }
            commandFn = function () {
              $link.attr('href', url)

              if (!inLink) {
                // 当前图片未包含在链接中，则包含进来
                $currentImg.wrap($link)
              }
            }
          }

          // 执行命令
          if (commandFn) {
            // 记录下执行命令之前的html内容
            html = $txt.html()
            // 执行命令
            editor.customCommand(e, commandFn, callback)
          }
        }

        // 渲染到页面
        function render() {
          if (isRendered) {
            return
          }

          // 绑定事件
          bindToolbarEvent()
          bindDragEvent()

          // 菜单放入 container
          $menuContainer
            .append($delete)
            .append($zoomSmall)
            .append($zoomBig)
            // .append($floatLeft)
            // .append($noFloat)
            // .append($floatRight);
            .append($alignLeft)
            .append($alignCenter)
            .append($alignRight)
            .append($link)
            .append($unLink)

          // 链接input放入container
          $linkInputContainer
            .append($linkInput)
            .append($linkBtnCancel)
            .append($linkBtnSubmit)

          // 拼接 渲染到页面上
          $toolbar
            .append($triangle)
            .append($menuContainer)
            .append($linkInputContainer)

          editor.$editorContainer.append($toolbar).append($dragPoint)
          isRendered = true
        }

        // 绑定toolbar事件
        function bindToolbarEvent() {
          // 统一执行命令的方法
          var commandFn

          function customCommand(e, callback) {
            var cb
            // 记录下执行命令之前的html内容
            html = $txt.html()
            cb = function () {
              if (callback) {
                callback()
              }
              if (html !== $txt.html()) {
                $txt.change()
              }
            }
            // 执行命令
            if (commandFn) {
              editor.customCommand(e, commandFn, cb)
            }
          }

          // 删除
          $delete.click(function (e) {
            // 删除之前先unlink
            imgLink(e, '')

            // 删除图片
            commandFn = function () {
              $currentImg.remove()
            }
            customCommand(e, function () {
              setTimeout(hide, 100)
            })
          })

          // 放大
          $zoomBig.click(function (e) {
            commandFn = function () {
              var img = $currentImg.get(0)
              var width = img.width
              var height = img.height
              width = width * 1.1
              height = height * 1.1

              $currentImg.css({
                width: width + 'px',
                height: height + 'px'
              })
            }
            customCommand(e, function () {
              setTimeout(show)
            })
          })

          // 缩小
          $zoomSmall.click(function (e) {
            commandFn = function () {
              var img = $currentImg.get(0)
              var width = img.width
              var height = img.height
              width = width * 0.9
              height = height * 0.9

              $currentImg.css({
                width: width + 'px',
                height: height + 'px'
              })
            }
            customCommand(e, function () {
              setTimeout(show)
            })
          })

          // // 左浮动
          // $floatLeft.click(function (e) {
          //     commandFn = function () {
          //         $currentImg.css({
          //             float: 'left'
          //         });
          //     };
          //     customCommand(e, function () {
          //         setTimeout(hide, 100);
          //     });
          // });

          // alignLeft
          $alignLeft.click(function (e) {
            commandFn = function () {
              // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
              $currentImg
                .parents('p')
                .css({
                  'text-align': 'left'
                })
                .attr('align', 'left')
            }
            customCommand(e, function () {
              setTimeout(hide, 100)
            })
          })

          // // 右浮动
          // $floatRight.click(function (e) {
          //     commandFn = function () {
          //         $currentImg.css({
          //             float: 'right'
          //         });
          //     };
          //     customCommand(e, function () {
          //         setTimeout(hide, 100);
          //     });
          // });

          // alignRight
          $alignRight.click(function (e) {
            commandFn = function () {
              // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
              $currentImg
                .parents('p')
                .css({
                  'text-align': 'right'
                })
                .attr('align', 'right')
            }
            customCommand(e, function () {
              setTimeout(hide, 100)
            })
          })

          // // 无浮动
          // $noFloat.click(function (e) {
          //     commandFn = function () {
          //         $currentImg.css({
          //             float: 'none'
          //         });
          //     };
          //     customCommand(e, function () {
          //         setTimeout(hide, 100);
          //     });
          // });

          // alignCenter
          $alignCenter.click(function (e) {
            commandFn = function () {
              // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
              $currentImg
                .parents('p')
                .css({
                  'text-align': 'center'
                })
                .attr('align', 'center')
            }
            customCommand(e, function () {
              setTimeout(hide, 100)
            })
          })

          // link
          // 显示链接input
          $link.click(function (e) {
            e.preventDefault()

            // 获取当前链接，并显示
            currentLink = imgLink(e)
            $linkInput.val(currentLink)

            $menuContainer.hide()
            $linkInputContainer.show()
          })
          // 设置链接
          $linkBtnSubmit.click(function (e) {
            e.preventDefault()

            var url = $.trim($linkInput.val())
            if (url) {
              // 设置链接，同时会自动更新 currentLink 的值
              imgLink(e, url)
            }

            // 隐藏 toolbar
            setTimeout(hide)
          })
          // 取消设置链接
          $linkBtnCancel.click(function (e) {
            e.preventDefault()

            // 重置链接 input
            $linkInput.val(currentLink)

            $menuContainer.show()
            $linkInputContainer.hide()
          })

          // unlink
          $unLink.click(function (e) {
            e.preventDefault()

            // 执行 unlink
            imgLink(e, '')

            // 隐藏 toolbar
            setTimeout(hide)
          })
        }

        // 绑定drag事件
        function bindDragEvent() {
          var _x, _y
          var dragMarginLeft, dragMarginTop
          var imgWidth, imgHeight

          function mousemove(e) {
            var diffX, diffY

            // 计算差额
            diffX = e.pageX - _x
            diffY = e.pageY - _y

            // --------- 计算拖拽点的位置 ---------
            var currentDragMarginLeft = dragMarginLeft + diffX
            var currentDragMarginTop = dragMarginTop + diffY
            $dragPoint.css({
              'margin-left': currentDragMarginLeft,
              'margin-top': currentDragMarginTop
            })

            // --------- 计算图片的大小 ---------
            var currentImgWidth = imgWidth + diffX
            var currentImggHeight = imgHeight + diffY
            $currentImg &&
            $currentImg.css({
              width: currentImgWidth,
              height: currentImggHeight
            })
          }

          $dragPoint.on('mousedown', function (e) {
            if (!$currentImg) {
              return
            }
            // 当前鼠标位置
            _x = e.pageX
            _y = e.pageY

            // 当前拖拽点的位置
            dragMarginLeft = parseFloat($dragPoint.css('margin-left'), 10)
            dragMarginTop = parseFloat($dragPoint.css('margin-top'), 10)

            // 当前图片的大小
            imgWidth = $currentImg.width()
            imgHeight = $currentImg.height()

            // 隐藏 $toolbar
            $toolbar.hide()

            // 绑定计算事件
            E.$document.on('mousemove._dragResizeImg', mousemove)
            E.$document.on('mouseup._dragResizeImg', function (e) {
              // 取消绑定
              E.$document.off('mousemove._dragResizeImg')
              E.$document.off('mouseup._dragResizeImg')

              // 隐藏，并还原拖拽点的位置
              hide()
              $dragPoint.css({
                'margin-left': dragMarginLeft,
                'margin-top': dragMarginTop
              })

              // 记录
              isOnDrag = false
            })

            // 记录
            isOnDrag = true
          })
        }

        // 显示 toolbar
        function show() {
          if (editor._disabled) {
            // 编辑器已经被禁用，则不让显示
            return
          }
          if ($currentImg == null) {
            return
          }
          $currentImg.addClass('clicked')
          var imgPosition = $currentImg.position()
          var imgTop = imgPosition.top
          var imgLeft = imgPosition.left
          var imgHeight = $currentImg.outerHeight()
          var imgWidth = $currentImg.outerWidth()

          // --- 定位 dragpoint ---
          $dragPoint.css({
            top: imgTop + imgHeight,
            left: imgLeft + imgWidth
          })

          // --- 定位 toolbar ---

          // 计算初步结果
          var top = imgTop + imgHeight
          var left = imgLeft
          var marginLeft = 0

          var txtTop = $currentTxt.position().top
          var txtHeight = $currentTxt.outerHeight()
          if (top > txtTop + txtHeight) {
            // top 不得超出编辑范围
            top = txtTop + txtHeight
          } else {
            // top 超出编辑范围，dragPoint就不显示了
            $dragPoint.show()
          }

          // 显示（方便计算 margin）
          $toolbar.show()

          // 计算 margin
          var width = $toolbar.outerWidth()
          marginLeft = imgWidth / 2 - width / 2

          // 定位
          $toolbar.css({
            top: top + 5,
            left: left,
            'margin-left': marginLeft
          })
          // 如果定位太靠左了
          if (marginLeft < 0) {
            // 得到三角形的margin-left
            $toolbar.css('margin-left', '0')
            $triangle.hide()
          } else {
            $triangle.show()
          }

          // disable 菜单
          editor.disableMenusExcept()
        }

        // 隐藏 toolbar
        function hide() {
          if ($currentImg == null) {
            return
          }
          $currentImg.removeClass('clicked')
          $currentImg = null

          $toolbar.hide()
          $dragPoint.hide()

          // enable 菜单
          editor.enableMenusExcept()
        }

        // 判断img是否是一个表情
        function isEmotion(imgSrc) {
          var result = false
          if (!editor.emotionUrls) {
            return result
          }
          $.each(editor.emotionUrls, function (index, url) {
            var flag = false
            if (imgSrc === url) {
              result = true
              flag = true
            }
            if (flag) {
              return false // break 循环
            }
          })
          return result
        }

        // click img 事件
        $currentTxt
          .on('mousedown', 'img', function (e) {
            e.preventDefault()
          })
          .on('click', 'img', function (e) {
            var $img = $(e.currentTarget)
            var src = $img.attr('src')

            if (!src || isEmotion(src)) {
              // 是一个表情图标
              return
            }

            // ---------- 不是表情图标 ----------

            // 渲染
            render()

            if ($currentImg && $currentImg.get(0) === $img.get(0)) {
              setTimeout(hide, 100)
              return
            }

            // 显示 toolbar
            $currentImg = $img
            show()

            // 默认显示menuContainer，其他默认隐藏
            $menuContainer.show()
            $linkInputContainer.hide()

            // 阻止冒泡
            e.preventDefault()
            e.stopPropagation()
          })
          .on('click keydown scroll', function (e) {
            if (!isOnDrag) {
              setTimeout(hide, 100)
            }
          })
      })
    })
    // 编辑区域 link toolbar
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var lang = editor.config.lang
        var $txt = editor.txt.$txt

        // 当前命中的链接
        var $currentLink

        var $toolbar = $('<div class="txt-toolbar"></div>')
        var $triangle = $('<div class="tip-triangle"></div>')
        var $triggerLink = $(
          '<a href="#" target="_blank"><i class="wangeditor-menu-img-link"></i> ' +
          lang.openLink +
          '</a>'
        )
        var isRendered

        // 记录当前的显示/隐藏状态
        var isShow = false

        var showTimeoutId, hideTimeoutId
        var showTimeoutIdByToolbar, hideTimeoutIdByToolbar

        // 渲染 dom
        function render() {
          if (isRendered) {
            return
          }

          $toolbar.append($triangle).append($triggerLink)

          editor.$editorContainer.append($toolbar)

          isRendered = true
        }

        // 定位
        function setPosition() {
          if (!$currentLink) {
            return
          }

          var position = $currentLink.position()
          var left = position.left
          var top = position.top
          var height = $currentLink.height()

          // 初步计算top值
          var topResult = top + height + 5

          // 判断 toolbar 是否超过了编辑器区域的下边界
          var menuHeight = editor.menuContainer.height()
          var txtHeight = editor.txt.$txt.outerHeight()
          if (topResult > menuHeight + txtHeight) {
            topResult = menuHeight + txtHeight + 5
          }

          // 最终设置
          $toolbar.css({
            top: topResult,
            left: left
          })
        }

        // 显示 toolbar
        function show() {
          if (isShow) {
            return
          }

          if (!$currentLink) {
            return
          }

          render()

          $toolbar.show()

          // 设置链接
          var href = $currentLink.attr('href')
          $triggerLink.attr('href', href)

          // 定位
          setPosition()

          isShow = true
        }

        // 隐藏 toolbar
        function hide() {
          if (!isShow) {
            return
          }

          if (!$currentLink) {
            return
          }

          $toolbar.hide()
          isShow = false
        }

        // $txt 绑定事件
        $txt
          .on('mouseenter', 'a', function (e) {
            // 延时 500ms 显示toolbar
            if (showTimeoutId) {
              clearTimeout(showTimeoutId)
            }
            showTimeoutId = setTimeout(function () {
              var a = e.currentTarget
              var $a = $(a)
              $currentLink = $a

              var $img = $a.children('img')
              if ($img.length) {
                // 该链接下包含一个图片

                // 图片点击时，隐藏toolbar
                $img.click(function (e) {
                  hide()
                })

                if ($img.hasClass('clicked')) {
                  // 图片还处于clicked状态，则不显示toolbar
                  return
                }
              }

              // 显示toolbar
              show()
            }, 500)
          })
          .on('mouseleave', 'a', function (e) {
            // 延时 500ms 隐藏toolbar
            if (hideTimeoutId) {
              clearTimeout(hideTimeoutId)
            }
            hideTimeoutId = setTimeout(hide, 500)
          })
          .on('click keydown scroll', function (e) {
            setTimeout(hide, 100)
          })
        // $toolbar 绑定事件
        $toolbar
          .on('mouseenter', function (e) {
            // 先中断掉 $txt.mouseleave 导致的隐藏
            if (hideTimeoutId) {
              clearTimeout(hideTimeoutId)
            }
          })
          .on('mouseleave', function (e) {
            // 延时 500ms 显示toolbar
            if (showTimeoutIdByToolbar) {
              clearTimeout(showTimeoutIdByToolbar)
            }
            showTimeoutIdByToolbar = setTimeout(hide, 500)
          })
      })
    })
    // menu吸顶
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var menuFixed = editor.config.menuFixed
        if (menuFixed === false || typeof menuFixed !== 'number') {
          // 没有配置菜单吸顶
          return
        }
        var bodyMarginTop = parseFloat(E.$body.css('margin-top'), 10)
        if (isNaN(bodyMarginTop)) {
          bodyMarginTop = 0
        }

        var $editorContainer = editor.$editorContainer
        var editorTop = $editorContainer.offset().top
        var editorHeight = $editorContainer.outerHeight()

        var $menuContainer = editor.menuContainer.$menuContainer
        var menuCssPosition = $menuContainer.css('position')
        var menuCssTop = $menuContainer.css('top')
        var menuTop = $menuContainer.offset().top
        var menuHeight = $menuContainer.outerHeight()

        var $txt = editor.txt.$txt

        E.$window.scroll(function () {
          //全屏模式不支持
          if (editor.isFullScreen) {
            return
          }

          var sTop = E.$window.scrollTop()

          // 需要重新计算宽度，因为浏览器可能此时出现滚动条
          var menuWidth = $menuContainer.width()

          // 如果 menuTop === 0 说明此前编辑器一直隐藏，后来显示出来了，要重新计算相关数据
          if (menuTop === 0) {
            menuTop = $menuContainer.offset().top
            editorTop = $editorContainer.offset().top
            editorHeight = $editorContainer.outerHeight()
            menuHeight = $menuContainer.outerHeight()
          }

          if (
            sTop >= menuTop &&
            sTop + menuFixed + menuHeight + 30 < editorTop + editorHeight
          ) {
            // 吸顶
            $menuContainer.css({
              position: 'fixed',
              top: menuFixed
            })

            // 固定宽度
            $menuContainer.width(menuWidth)

            // 增加body margin-top
            E.$body.css({
              'margin-top': bodyMarginTop + menuHeight
            })

            // 记录
            if (!editor._isMenufixed) {
              editor._isMenufixed = true
            }
          } else {
            // 取消吸顶
            $menuContainer.css({
              position: menuCssPosition,
              top: menuCssTop
            })

            // 取消宽度固定
            $menuContainer.css('width', '100%')

            // 还原 body margin-top
            E.$body.css({
              'margin-top': bodyMarginTop
            })

            // 撤销记录
            if (editor._isMenufixed) {
              editor._isMenufixed = false
            }
          }
        })
      })
    })
    // 缩进 菜单插件
    _e(function (E, $) {
      // 用 createMenu 方法创建菜单
      E.createMenu(function (check) {
        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'indent'

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
          return
        }

        // this 指向 editor 对象自身
        var editor = this

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor, // 编辑器对象
          id: menuId, // 菜单id
          title: '缩进', // 菜单标题

          // 正常状态和选中装下的dom对象，样式需要自定义
          $domNormal: $(
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-indent-left"></i></a>'
          ),
          $domSelected: $(
            '<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-indent-left"></i></a>'
          )
        })

        // 菜单正常状态下，点击将触发该事件
        menu.clickEvent = function (e) {
          var elem = editor.getRangeElem()
          var p = editor.getSelfOrParentByName(elem, 'p')
          var $p

          if (!p) {
            // 未找到 p 元素，则忽略
            return e.preventDefault()
          }
          $p = $(p)

          // 使用自定义命令
          function commandFn() {
            $p.css('text-indent', '2em')
          }

          editor.customCommand(e, commandFn)
        }

        // 菜单选中状态下，点击将触发该事件
        menu.clickEventSelected = function (e) {
          var elem = editor.getRangeElem()
          var p = editor.getSelfOrParentByName(elem, 'p')
          var $p

          if (!p) {
            // 未找到 p 元素，则忽略
            return e.preventDefault()
          }
          $p = $(p)

          // 使用自定义命令
          function commandFn() {
            $p.css('text-indent', '0')
          }

          editor.customCommand(e, commandFn)
        }

        // 根据当前选区，自定义更新菜单的选中状态或者正常状态
        menu.updateSelectedEvent = function () {
          // 获取当前选区所在的父元素
          var elem = editor.getRangeElem()
          var p = editor.getSelfOrParentByName(elem, 'p')
          var $p
          var indent

          if (!p) {
            // 未找到 p 元素，则标记为未处于选中状态
            return false
          }
          $p = $(p)
          indent = $p.css('text-indent')

          if (!indent || indent === '0px') {
            // 得到的p，text-indent 属性是 0，则标记为未处于选中状态
            return false
          }

          // 找到 p 元素，并且 text-indent 不是 0，则标记为选中状态
          return true
        }

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // 行高 菜单插件
    _e(function (E, $) {
      // 用 createMenu 方法创建菜单
      E.createMenu(function (check) {
        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'lineheight'

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
          return
        }

        // this 指向 editor 对象自身
        var editor = this

        // 由于浏览器自身不支持 lineHeight 命令，因此要做一个hook
        editor.commandHooks.lineHeight = function (value) {
          var rangeElem = editor.getRangeElem()
          var targetElem = editor.getSelfOrParentByName(
            rangeElem,
            'p,h1,h2,h3,h4,h5,pre'
          )
          if (!targetElem) {
            return
          }
          $(targetElem).css('line-height', value + '')
        }

        // 创建 menu 对象
        var menu = new E.Menu({
          editor: editor, // 编辑器对象
          id: menuId, // 菜单id
          title: '行高', // 菜单标题
          commandName: 'lineHeight', // 命令名称

          // 正常状态和选中装下的dom对象，样式需要自定义
          $domNormal: $(
            '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-arrows-v"></i></a>'
          ),
          $domSelected: $(
            '<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-arrows-v"></i></a>'
          )
        })

        // 数据源
        var data = {
          // 格式： 'value' : 'title'
          '1.0': '1.0倍',
          '1.5': '1.5倍',
          '1.8': '1.8倍',
          '2.0': '2.0倍',
          '2.5': '2.5倍',
          '3.0': '3.0倍'
        }

        // 为menu创建droplist对象
        var tpl = '<span style="line-height:{#commandValue}">{#title}</span>'
        menu.dropList = new E.DropList(editor, menu, {
          data: data, // 传入数据源
          tpl: tpl // 传入模板
        })

        // 增加到editor对象中
        editor.menus[menuId] = menu
      })
    })
    // 分割线hr 菜单
    _e(function (E, $) {
      E.createMenu(function (check) {
        var menuId = 'hr';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.hr,
            commandName: 'insertHtml',
            commandValue: 'Hr'
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            // 自定义command事件
            function commandFn() {
                editor.command(e, 'insertHtml','<hr/>');
            }
            // 执行自定义命令
            editor.customCommand(e, commandFn);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
  });
    // 自定义上传
    _e(function (E, $) {
      E.plugin(function () {
        var editor = this
        var customUpload = editor.config.customUpload
        if (!customUpload) {
          return
        } else if (editor.config.uploadImgUrl) {
          alert('自定义上传无效，详看浏览器日志console.log')
          E.error(
            '已经配置了 uploadImgUrl ，就不能再配置 customUpload ，两者冲突。将导致自定义上传无效。'
          )
          return
        }

        var $uploadContent = editor.$uploadContent
        if (!$uploadContent) {
          E.error('自定义上传，无法获取 editor.$uploadContent')
        }

        // UI
        var $uploadIcon = $(
          '<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>'
        )
        $uploadContent.append($uploadIcon)

        // 设置id，并暴露
        var btnId = 'upload' + E.random()
        var containerId = 'upload' + E.random()
        $uploadIcon.attr('id', btnId)
        $uploadContent.attr('id', containerId)

        editor.customUploadBtnId = btnId
        editor.customUploadContainerId = containerId
      })
    })
    // 版权提示
    _e(function (E, $) {

    })
  }

  // 最终返回wangEditor构造函数
  return E
})


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueJsEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_wangEditor_css__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_1__assets_js_wangEditor_js___default.a; });




const instance = __WEBPACK_IMPORTED_MODULE_0__VueJsEditor__["a" /* default */]

const install = (Vue, globalOptions) => {
  let compName = instance.name
  if (globalOptions) {
    compName = globalOptions.name || compName
    instance.props.globalOptions.default = () => globalOptions
  }
  Vue.component(compName, instance)
}
instance.install = install
/* harmony default export */ __webpack_exports__["default"] = (instance);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueJsEditor_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354b8dd8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueJsEditor_vue__ = __webpack_require__(19);
function injectStyle (ssrContext) {
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueJsEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354b8dd8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueJsEditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1675daaa", content, true, {});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".vue-js-editor{width:100%;height:auto!important;min-height:300px}.wangEditor-fullscreen{overflow-y:auto;padding-top:32px!important}.wangEditor-fullscreen .wangEditor-menu-container{position:fixed;top:0;left:0}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(14);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".wangEditor-container{position:relative;background-color:#fff;border:1px solid #ccc;z-index:1;width:100%}.wangEditor-container a:focus,.wangEditor-container button:focus{outline:none}.wangEditor-container,.wangEditor-container *{margin:0;padding:0;box-sizing:border-box;line-height:1}.wangEditor-container img{border:none}.wangEditor-container .clearfix:after{content:\"\";display:table;clear:both}.wangEditor-container .clearfix{*zoom:1}.wangEditor-container textarea{border:none}.wangEditor-container textarea:focus{outline:none}.wangEditor-container .height-tip{position:absolute;width:3px;background-color:#ccc;left:0;transition:top .2s}.wangEditor-container .txt-toolbar{position:absolute;background-color:#fff;padding:3px 5px;border-top:2px solid #666;box-shadow:1px 3px 3px #999;border-left:1px solid #ccc;border-bottom:1px solid #999;border-right:1px solid #999}.wangEditor-container .txt-toolbar .tip-triangle{display:block;position:absolute;width:0;height:0;border:5px solid;border-color:transparent transparent #666;top:-12px;left:50%;margin-left:-5px}.wangEditor-container .txt-toolbar a{color:#666;display:inline-block;margin:0 3px;padding:5px;text-decoration:none;border-radius:3px}.wangEditor-container .txt-toolbar a:hover{background-color:#f1f1f1}.wangEditor-container .img-drag-point{display:block;position:absolute;width:12px;height:12px;border-radius:50%;cursor:se-resize;background-color:#666;margin-left:-6px;margin-top:-6px;box-shadow:1px 1px 5px #999}.wangEditor-container .wangEditor-upload-progress{position:absolute;height:1px;background:#1e88e5;width:0;display:none;-webkit-transition:width .5s;-o-transition:width .5s;transition:width .5s}.wangEditor-fullscreen{position:fixed;top:0;bottom:0;left:0;right:0}.wangEditor-container .code-textarea{resize:none;width:100%;font-size:14px;line-height:1.5;font-family:Verdana;color:#333;padding:0 15px}.wangEditor-menu-container{width:100%;border-bottom:1px solid #f1f1f1;background-color:#fff}.wangEditor-menu-container a{text-decoration:none}.wangEditor-menu-container .menu-group{float:left;padding:0 8px;border-right:1px solid #f1f1f1}.wangEditor-menu-container .menu-item{float:left;position:relative;text-align:center;height:31px;width:35px}.wangEditor-menu-container .menu-item:hover{background-color:#f1f1f1}.wangEditor-menu-container .menu-item a{display:block;text-align:center;color:#666;width:100%;padding:8px 0;font-size:.9em}.wangEditor-menu-container .menu-item .selected{color:#1e88e5}.wangEditor-menu-container .menu-item .active{background-color:#f1f1f1}.wangEditor-menu-container .menu-item .disable{opacity:.5;filter:alpha(opacity=50)}.wangEditor-menu-container .menu-tip{display:block;position:absolute;z-index:20;width:60px;text-align:center;background-color:#666;color:#fff;padding:7px 0;font-size:12px;top:100%;left:50%;margin-left:-30px;border-radius:2px;box-shadow:1px 1px 5px #999;display:none}.wangEditor-menu-container .menu-tip-40{width:40px;margin-left:-20px}.wangEditor-menu-container .menu-tip-50{width:50px;margin-left:-25px}.wangEditor-menu-shadow{border-bottom:1px solid #f1f1f1;box-shadow:0 1px 3px #999}.wangEditor-container .wangEditor-txt{width:100%;text-align:left;padding:15px;padding-top:0;margin-top:5px;overflow-y:auto}.wangEditor-container .wangEditor-txt h1,.wangEditor-container .wangEditor-txt h2,.wangEditor-container .wangEditor-txt h3,.wangEditor-container .wangEditor-txt h4,.wangEditor-container .wangEditor-txt h5,.wangEditor-container .wangEditor-txt p{margin:10px 0;line-height:1.8}.wangEditor-container .wangEditor-txt h1 *,.wangEditor-container .wangEditor-txt h2 *,.wangEditor-container .wangEditor-txt h3 *,.wangEditor-container .wangEditor-txt h4 *,.wangEditor-container .wangEditor-txt h5 *,.wangEditor-container .wangEditor-txt p *{line-height:1.8}.wangEditor-container .wangEditor-txt ol,.wangEditor-container .wangEditor-txt ul{padding-left:20px}.wangEditor-container .wangEditor-txt img{cursor:pointer}.wangEditor-container .wangEditor-txt img.clicked,.wangEditor-container .wangEditor-txt table.clicked{box-shadow:1px 1px 10px #999}.wangEditor-container .wangEditor-txt pre code{line-height:1.5}.wangEditor-container .wangEditor-txt:focus{outline:none}.wangEditor-container .wangEditor-txt blockquote{display:block;border-left:8px solid #d0e5f2;padding:5px 10px;margin:10px 0;line-height:1.4;font-size:100%;background-color:#f1f1f1}.wangEditor-container .wangEditor-txt table{border:none;border-collapse:collapse}.wangEditor-container .wangEditor-txt table td,.wangEditor-container .wangEditor-txt table th{border:1px solid #999;padding:3px 5px;min-width:50px;height:20px}.wangEditor-container .wangEditor-txt pre{border:1px solid #ccc;background-color:#f8f8f8;padding:10px;margin:5px 0;font-size:.8em;border-radius:3px}.wangEditor-drop-list{display:none;position:absolute;background-color:#fff;overflow:hidden;z-index:10;transition:height .7s;border-top:1px solid #f1f1f1;box-shadow:1px 3px 3px #999;border-left:1px solid #ccc;border-bottom:1px solid #999;border-right:1px solid #999}.wangEditor-drop-list a{text-decoration:none;display:block;color:#666;padding:3px 5px}.wangEditor-drop-list a:hover{background-color:#f1f1f1}.txt-toolbar,.wangEditor-drop-panel{display:none;position:absolute;padding:10px;font-size:14px;background-color:#fff;z-index:10;border-top:2px solid #666;box-shadow:1px 3px 3px #999;border-left:1px solid #ccc;border-bottom:1px solid #999;border-right:1px solid #999}.txt-toolbar .tip-triangle,.wangEditor-drop-panel .tip-triangle{display:block;position:absolute;width:0;height:0;border:5px solid;border-color:transparent transparent #666;top:-12px;left:50%;margin-left:-5px}.txt-toolbar a,.wangEditor-drop-panel a{text-decoration:none}.txt-toolbar input[type=text],.wangEditor-drop-panel input[type=text]{border:none;border-bottom:1px solid #ccc;font-size:14px;height:20px;color:#333;padding:3px 0}.txt-toolbar input[type=text]:focus,.wangEditor-drop-panel input[type=text]:focus{outline:none;border-bottom:2px solid #1e88e5}.txt-toolbar input[type=text].block,.wangEditor-drop-panel input[type=text].block{display:block;width:100%}.txt-toolbar textarea,.wangEditor-drop-panel textarea{border:1px solid #ccc}.txt-toolbar textarea:focus,.wangEditor-drop-panel textarea:focus{outline:none;border-color:#1e88e5}.txt-toolbar button,.wangEditor-drop-panel button{font-size:14px;color:#1e88e5;border:none;padding:10px;background-color:#fff;cursor:pointer;border-radius:3px}.txt-toolbar button:hover,.wangEditor-drop-panel button:hover{background-color:#f1f1f1}.txt-toolbar button:focus,.wangEditor-drop-panel button:focus{outline:none}.txt-toolbar button.right,.wangEditor-drop-panel button.right{float:right;margin-left:10px}.txt-toolbar button.gray,.wangEditor-drop-panel button.gray{color:#999}.txt-toolbar button.link,.wangEditor-drop-panel button.link{padding:5px 10px}.txt-toolbar button.link:hover,.wangEditor-drop-panel button.link:hover{background-color:#fff;text-decoration:underline}.txt-toolbar .color-item,.wangEditor-drop-panel .color-item{display:block;float:left;width:25px;height:25px;text-align:center;padding:2px;border-radius:2px;text-decoration:underline}.txt-toolbar .color-item:hover,.wangEditor-drop-panel .color-item:hover{background-color:#f1f1f1}.txt-toolbar .list-menu-item,.wangEditor-drop-panel .list-menu-item{display:block;float:left;color:#333;padding:5px;border-radius:2px}.txt-toolbar .list-menu-item:hover,.wangEditor-drop-panel .list-menu-item:hover{background-color:#f1f1f1}.txt-toolbar table.choose-table,.wangEditor-drop-panel table.choose-table{border:none;border-collapse:collapse}.txt-toolbar table.choose-table td,.wangEditor-drop-panel table.choose-table td{border:1px solid #ccc;width:16px;height:12px}.txt-toolbar table.choose-table td.active,.wangEditor-drop-panel table.choose-table td.active{background-color:#ccc;opacity:.5;filter:alpha(opacity=50)}.txt-toolbar .panel-tab .tab-container,.wangEditor-drop-panel .panel-tab .tab-container{margin-bottom:5px}.txt-toolbar .panel-tab .tab-container a,.wangEditor-drop-panel .panel-tab .tab-container a{display:inline-block;color:#999;text-align:center;margin:0 5px;padding:5px}.txt-toolbar .panel-tab .tab-container a.selected,.wangEditor-drop-panel .panel-tab .tab-container a.selected{color:#1e88e5;border-bottom:2px solid #1e88e5}.txt-toolbar .panel-tab .content-container .content,.wangEditor-drop-panel .panel-tab .content-container .content{display:none}.txt-toolbar .panel-tab .content-container .content a,.wangEditor-drop-panel .panel-tab .content-container .content a{display:inline-block;margin:2px;padding:2px;border-radius:2px}.txt-toolbar .panel-tab .content-container .content a:hover,.wangEditor-drop-panel .panel-tab .content-container .content a:hover{background-color:#f1f1f1}.txt-toolbar .panel-tab .content-container .selected,.wangEditor-drop-panel .panel-tab .content-container .selected{display:block}.txt-toolbar .panel-tab .emotion-content-container,.wangEditor-drop-panel .panel-tab .emotion-content-container{height:200px;overflow-y:auto}.txt-toolbar .upload-icon-container,.wangEditor-drop-panel .upload-icon-container{color:#ccc;text-align:center;margin:20px 20px 15px!important;padding:5px!important;font-size:65px;cursor:pointer;border:2px dotted #f1f1f1;display:block!important}.txt-toolbar .upload-icon-container:hover,.wangEditor-drop-panel .upload-icon-container:hover{color:#666;border-color:#ccc}.wangEditor-modal{position:absolute;top:50%;left:50%;background-color:#fff;border-top:1px solid #f1f1f1;box-shadow:1px 3px 3px #999;border-top:1px solid #ccc;border-left:1px solid #ccc;border-bottom:1px solid #999;border-right:1px solid #999}.wangEditor-modal .wangEditor-modal-close{position:absolute;top:0;right:0;margin-top:-25px;margin-right:-25px;font-size:1.5em;color:#666;cursor:pointer}@font-face{font-family:icomoon;src:url(" + escape(__webpack_require__(5)) + ");src:url(" + escape(__webpack_require__(5)) + ") format(\"embedded-opentype\"),url(" + escape(__webpack_require__(15)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(16)) + ") format(\"woff\"),url(" + escape(__webpack_require__(17)) + ") format(\"svg\");font-weight:400;font-style:normal}[class*=\" wangeditor-menu-img-\"],[class^=wangeditor-menu-img-]{font-family:icomoon;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.wangeditor-menu-img-link:before{content:\"\\E800\"}.wangeditor-menu-img-unlink:before{content:\"\\E801\"}.wangeditor-menu-img-code:before{content:\"\\E802\"}.wangeditor-menu-img-cancel:before{content:\"\\E803\"}.wangeditor-menu-img-terminal:before{content:\"\\E804\"}.wangeditor-menu-img-angle-down:before{content:\"\\E805\"}.wangeditor-menu-img-font:before{content:\"\\E806\"}.wangeditor-menu-img-bold:before{content:\"\\E807\"}.wangeditor-menu-img-italic:before{content:\"\\E808\"}.wangeditor-menu-img-header:before{content:\"\\E809\"}.wangeditor-menu-img-align-left:before{content:\"\\E80A\"}.wangeditor-menu-img-align-center:before{content:\"\\E80B\"}.wangeditor-menu-img-align-right:before{content:\"\\E80C\"}.wangeditor-menu-img-list-bullet:before{content:\"\\E80D\"}.wangeditor-menu-img-indent-left:before{content:\"\\E80E\"}.wangeditor-menu-img-indent-right:before{content:\"\\E80F\"}.wangeditor-menu-img-list-numbered:before{content:\"\\E810\"}.wangeditor-menu-img-underline:before{content:\"\\E811\"}.wangeditor-menu-img-table:before{content:\"\\E812\"}.wangeditor-menu-img-eraser:before{content:\"\\E813\"}.wangeditor-menu-img-text-height:before{content:\"\\E814\"}.wangeditor-menu-img-brush:before{content:\"\\E815\"}.wangeditor-menu-img-pencil:before{content:\"\\E816\"}.wangeditor-menu-img-minus:before{content:\"\\E817\"}.wangeditor-menu-img-picture:before{content:\"\\E818\"}.wangeditor-menu-img-file-image:before{content:\"\\E819\"}.wangeditor-menu-img-cw:before{content:\"\\E81A\"}.wangeditor-menu-img-ccw:before{content:\"\\E81B\"}.wangeditor-menu-img-music:before{content:\"\\E911\"}.wangeditor-menu-img-play:before{content:\"\\E912\"}.wangeditor-menu-img-location:before{content:\"\\E947\"}.wangeditor-menu-img-happy:before{content:\"\\E9DF\"}.wangeditor-menu-img-sigma:before{content:\"\\EA67\"}.wangeditor-menu-img-enlarge2:before{content:\"\\E98B\"}.wangeditor-menu-img-shrink2:before{content:\"\\E98C\"}.wangeditor-menu-img-newspaper:before{content:\"\\E904\"}.wangeditor-menu-img-camera:before{content:\"\\E90F\"}.wangeditor-menu-img-video-camera:before{content:\"\\E914\"}.wangeditor-menu-img-file-zip:before{content:\"\\E92B\"}.wangeditor-menu-img-stack:before{content:\"\\E92E\"}.wangeditor-menu-img-credit-card:before{content:\"\\E93F\"}.wangeditor-menu-img-address-book:before{content:\"\\E944\"}.wangeditor-menu-img-envelop:before{content:\"\\E945\"}.wangeditor-menu-img-drawer:before{content:\"\\E95C\"}.wangeditor-menu-img-download:before{content:\"\\E960\"}.wangeditor-menu-img-upload:before{content:\"\\E961\"}.wangeditor-menu-img-lock:before{content:\"\\E98F\"}.wangeditor-menu-img-unlocked:before{content:\"\\E990\"}.wangeditor-menu-img-wrench:before{content:\"\\E991\"}.wangeditor-menu-img-eye:before{content:\"\\E9CE\"}.wangeditor-menu-img-eye-blocked:before{content:\"\\E9D1\"}.wangeditor-menu-img-command:before{content:\"\\EA4E\"}.wangeditor-menu-img-font2:before{content:\"\\EA5C\"}.wangeditor-menu-img-libreoffice:before{content:\"\\EADE\"}.wangeditor-menu-img-quotes-left:before{content:\"\\E977\"}.wangeditor-menu-img-strikethrough:before{content:\"\\EA65\"}.wangeditor-menu-img-desktop:before{content:\"\\F108\"}.wangeditor-menu-img-tablet:before{content:\"\\F10A\"}.wangeditor-menu-img-search-plus:before{content:\"\\F00E\"}.wangeditor-menu-img-search-minus:before{content:\"\\F010\"}.wangeditor-menu-img-trash-o:before{content:\"\\F014\"}.wangeditor-menu-img-align-justify:before{content:\"\\F039\"}.wangeditor-menu-img-arrows-v:before{content:\"\\F07D\"}.wangeditor-menu-img-sigma2:before{content:\"\\EA68\"}.wangeditor-menu-img-omega:before{content:\"\\E900\"}.wangeditor-menu-img-cancel-circle:before{content:\"\\E901\"}.hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8;-webkit-text-size-adjust:none}.diff .hljs-header,.hljs-comment{color:#998;font-style:italic}.css .rule .hljs-keyword,.hljs-keyword,.hljs-request,.hljs-status,.hljs-subst,.hljs-winutils,.nginx .hljs-title{color:#333;font-weight:700}.hljs-hexcolor,.hljs-number,.ruby .hljs-constant{color:teal}.hljs-doctag,.hljs-string,.hljs-tag .hljs-value,.tex .hljs-formula{color:#d14}.hljs-id,.hljs-title,.scss .hljs-preprocessor{color:#900;font-weight:700}.hljs-list .hljs-keyword,.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type,.tex .hljs-command,.vhdl .hljs-literal{color:#458;font-weight:700}.django .hljs-tag .hljs-keyword,.hljs-rule .hljs-property,.hljs-tag,.hljs-tag .hljs-title{color:navy;font-weight:400}.hljs-attribute,.hljs-name,.hljs-variable,.lisp .hljs-body{color:teal}.hljs-regexp{color:#009926}.clojure .hljs-keyword,.hljs-prompt,.hljs-symbol,.lisp .hljs-keyword,.ruby .hljs-symbol .hljs-string,.scheme .hljs-keyword,.tex .hljs-special{color:#990073}.hljs-built_in{color:#0086b3}.hljs-cdata,.hljs-doctype,.hljs-pi,.hljs-pragma,.hljs-preprocessor,.hljs-shebang{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.diff .hljs-change{background:#0086b3}.hljs-chunk{color:#aaa}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPg0KPGRlZnM+DQo8Zm9udCBpZD0iaWNvbW9vbiIgaG9yaXotYWR2LXg9IjEwMjQiPg0KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+DQo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3gyMDsiIGhvcml6LWFkdi14PSI1MTIiIGQ9IiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODAwOyIgZ2x5cGgtbmFtZT0ibGluayIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTgzMS40ODggMjY0LjcwNHEwIDIzLjU1Mi0xNS4zNiAzOC45MTJsLTExOC43ODQgMTE4Ljc4NHEtMTYuMzg0IDE2LjM4NC0zOC45MTIgMTYuMzg0LTI0LjU3NiAwLTQwLjk2LTE4LjQzMiAxLjAyNC0xLjAyNCAxMC4yNC0xMC4yNHQxMi4yODgtMTIuMjg4IDkuMjE2LTExLjI2NCA3LjE2OC0xNC4zMzYgMi4wNDgtMTUuMzZxMC0yMy41NTItMTYuMzg0LTM4LjkxMnQtMzguOTEyLTE2LjM4NHEtOC4xOTIgMC0xNS4zNiAyLjA0OHQtMTQuMzM2IDcuMTY4LTExLjI2NCA5LjIxNi0xMi4yODggMTIuMjg4LTEwLjI0IDEwLjI0cS0xOS40NTYtMTcuNDA4LTE5LjQ1Ni00MC45NnQxNi4zODQtMzguOTEybDExNy43Ni0xMTguNzg0cTE1LjM2LTE1LjM2IDM4LjkxMi0xNS4zNiAyMi41MjggMCAzOC45MTIgMTUuMzZsODMuOTY4IDgyLjk0NHExNS4zNiAxNi4zODQgMTUuMzYgMzcuODg4ek00MzAuMDgwIDY2OC4xNnEwIDIyLjUyOC0xNS4zNiAzOC45MTJsLTExNy43NiAxMTcuNzZxLTE2LjM4NCAxNi4zODQtMzguOTEyIDE2LjM4NHQtMzguOTEyLTE1LjM2bC04My45NjgtODMuOTY4cS0xNi4zODQtMTUuMzYtMTYuMzg0LTM3Ljg4OHQxNi4zODQtMzguOTEybDExOC43ODQtMTE4Ljc4NHExNS4zNi0xNS4zNiAzOC45MTItMTUuMzZ0NDAuOTYgMTcuNDA4cS0yLjA0OCAyLjA0OC0xMS4yNjQgMTEuMjY0dC0xMi4yODggMTIuMjg4LTguMTkyIDEwLjI0LTcuMTY4IDE0LjMzNi0yLjA0OCAxNi4zODRxMCAyMi41MjggMTUuMzYgMzguOTEydDM4LjkxMiAxNS4zNnE5LjIxNiAwIDE2LjM4NC0yLjA0OHQxNC4zMzYtNy4xNjggMTAuMjQtOC4xOTIgMTIuMjg4LTEyLjI4OCAxMS4yNjQtMTEuMjY0cTE4LjQzMiAxNy40MDggMTguNDMyIDQxLjk4NHpNOTQyLjA4MCAyNjQuNzA0cTAtNjguNjA4LTQ5LjE1Mi0xMTUuNzEybC04My45NjgtODIuOTQ0cS00Ny4xMDQtNDguMTI4LTExNS43MTItNDguMTI4LTY5LjYzMiAwLTExNi43MzYgNDkuMTUybC0xMTcuNzYgMTE3Ljc2cS00Ny4xMDQgNDguMTI4LTQ3LjEwNCAxMTYuNzM2IDAgNjkuNjMyIDUwLjE3NiAxMTguNzg0bC01MC4xNzYgNTAuMTc2cS00OS4xNTItNTAuMTc2LTExOC43ODQtNTAuMTc2LTY4LjYwOCAwLTExNi43MzYgNDguMTI4bC0xMTguNzg0IDExOC43ODRxLTQ4LjEyOCA0OC4xMjgtNDguMTI4IDExNi43MzZ0NDguMTI4IDExNS43MTJsODMuOTY4IDgzLjk2OHE0OC4xMjggNDcuMTA0IDExNi43MzYgNDcuMTA0dDExNi43MzYtNDguMTI4bDExNi43MzYtMTE4Ljc4NHE0OC4xMjgtNDcuMTA0IDQ4LjEyOC0xMTUuNzEyIDAtNzAuNjU2LTUwLjE3Ni0xMTkuODA4bDUwLjE3Ni01MC4xNzZxNDkuMTUyIDUwLjE3NiAxMTguNzg0IDUwLjE3NiA2OC42MDggMCAxMTYuNzM2LTQ4LjEyOGwxMTguNzg0LTExOC43ODRxNDguMTI4LTQ4LjEyOCA0OC4xMjgtMTE2LjczNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwMTsiIGdseXBoLW5hbWU9InVubGluayIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTI1MC44OCAyMzMuOTg0bC0xNDYuNDMyLTE0Ni40MzJxLTUuMTItNS4xMi0xMy4zMTItNS4xMi02LjE0NCAwLTEzLjMxMiA1LjEyLTUuMTIgNS4xMi01LjEyIDEzLjMxMnQ1LjEyIDEzLjMxMmwxNDYuNDMyIDE0NS40MDhxNi4xNDQgNS4xMiAxMy4zMTIgNS4xMnQxMy4zMTItNS4xMnE1LjEyLTUuMTIgNS4xMi0xMi4yODh0LTUuMTItMTMuMzEyek0zNDcuMTM2IDIxMC40MzJ2LTE4My4yOTZxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTItMTIuMjg4IDUuMTItNS4xMiAxMy4zMTJ2MTgzLjI5NnEwIDguMTkyIDUuMTIgMTMuMzEydDEyLjI4OCA1LjEyIDEzLjMxMi01LjEyIDUuMTItMTMuMzEyek0yMTkuMTM2IDMzOC40MzJxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTE4Mi4yNzJxLTguMTkyIDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEyIDUuMTIgMTMuMzEyIDEzLjMxMiA1LjEyaDE4Mi4yNzJxOC4xOTIgMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnpNOTQyLjA4MCAyNjQuNzA0cTAtNjguNjA4LTQ5LjE1Mi0xMTUuNzEybC04My45NjgtODIuOTQ0cS00Ny4xMDQtNDguMTI4LTExNS43MTItNDguMTI4LTY5LjYzMiAwLTExNi43MzYgNDkuMTUybC0xOTAuNDY0IDE5MS40ODhxLTEyLjI4OCAxMS4yNjQtMjQuNTc2IDMxLjc0NGwxMzcuMjE2IDEwLjI0IDE1NS42NDgtMTU2LjY3MnExNS4zNi0xNS4zNiAzOC45MTItMTUuMzZ0MzguOTEyIDE1LjM2bDgzLjk2OCA4Mi45NDRxMTUuMzYgMTYuMzg0IDE1LjM2IDM3Ljg4OCAwIDIzLjU1Mi0xNS4zNiAzOC45MTJsLTE1Ni42NzIgMTU3LjY5NiAxMC4yNCAxMzYuMTkycTIwLjQ4LTEyLjI4OCAzMS43NDQtMjMuNTUybDE5Mi41MTItMTkyLjUxMnE0OC4xMjgtNDkuMTUyIDQ4LjEyOC0xMTYuNzM2ek01ODguOCA2NzguNGwtMTM2LjE5Mi0xMC4yNC0xNTUuNjQ4IDE1Ni42NzJxLTE2LjM4NCAxNi4zODQtMzguOTEyIDE2LjM4NHQtMzguOTEyLTE1LjM2bC04My45NjgtODMuOTY4cS0xNi4zODQtMTUuMzYtMTYuMzg0LTM3Ljg4OHQxNi4zODQtMzguOTEybDE1Ni42NzItMTU2LjY3Mi0xMC4yNC0xMzcuMjE2cS0yMC40OCAxMi4yODgtMzIuNzY4IDI0LjU3NmwtMTkxLjQ4OCAxOTEuNDg4cS00OC4xMjggNDkuMTUyLTQ4LjEyOCAxMTYuNzM2IDAgNjguNjA4IDQ4LjEyOCAxMTUuNzEybDgzLjk2OCA4My45NjhxNDguMTI4IDQ3LjEwNCAxMTYuNzM2IDQ3LjEwNHQxMTYuNzM2LTQ4LjEyOGwxOTAuNDY0LTE5MS40ODhxMTIuMjg4LTEyLjI4OCAyMy41NTItMzIuNzY4ek05NTEuMjk2IDYzMS4yOTZxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTE4My4yOTZxLTguMTkyIDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEyIDUuMTIgMTIuMjg4IDEzLjMxMiA1LjEyaDE4My4yOTZxOC4xOTIgMCAxMy4zMTItNS4xMnQ1LjEyLTEyLjI4OHpNNjQwIDk0MS41Njh2LTE4Mi4yNzJxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTItMTMuMzEyIDUuMTItNS4xMiAxMy4zMTJ2MTgyLjI3MnEwIDguMTkyIDUuMTIgMTMuMzEydDEzLjMxMiA1LjEyIDEzLjMxMi01LjEyIDUuMTItMTMuMzEyek04NzIuNDQ4IDg1NS41NTJsLTE0Ni40MzItMTQ2LjQzMnEtNi4xNDQtNS4xMi0xMy4zMTItNS4xMnQtMTIuMjg4IDUuMTJxLTUuMTIgNi4xNDQtNS4xMiAxMy4zMTJ0NS4xMiAxMy4zMTJsMTQ1LjQwOCAxNDUuNDA4cTYuMTQ0IDUuMTIgMTMuMzEyIDUuMTJ0MTMuMzEyLTUuMTJxNS4xMi01LjEyIDUuMTItMTIuMjg4dC01LjEyLTEzLjMxMnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwMjsiIGdseXBoLW5hbWU9ImNvZGUiIGhvcml6LWFkdi14PSIxMDk3IiBkPSJNMzUyLjI1NiAxNjAuMjU2bC0yOC42NzItMjguNjcycS01LjEyLTUuMTItMTIuMjg4LTUuMTJ0LTEzLjMxMiA1LjEybC0yNjYuMjQgMjY2LjI0cS02LjE0NCA2LjE0NC02LjE0NCAxMy4zMTJ0Ni4xNDQgMTMuMzEybDI2Ni4yNCAyNjYuMjRxNS4xMiA2LjE0NCAxMy4zMTIgNi4xNDR0MTIuMjg4LTYuMTQ0bDI4LjY3Mi0yOC42NzJxNi4xNDQtNS4xMiA2LjE0NC0xMy4zMTJ0LTYuMTQ0LTEyLjI4OGwtMjI0LjI1Ni0yMjUuMjggMjI0LjI1Ni0yMjQuMjU2cTYuMTQ0LTYuMTQ0IDYuMTQ0LTEzLjMxMnQtNi4xNDQtMTMuMzEyek02OTAuMTc2IDc3MC41NmwtMjEyLjk5Mi03MzguMzA0cS0yLjA0OC03LjE2OC05LjIxNi0xMS4yNjR0LTEzLjMxMi0xLjAyNGwtMzQuODE2IDkuMjE2cS04LjE5MiAzLjA3Mi0xMS4yNjQgOS4yMTZ0LTIuMDQ4IDE0LjMzNmwyMTIuOTkyIDczNy4yOHEzLjA3MiA4LjE5MiA5LjIxNiAxMS4yNjR0MTMuMzEyIDIuMDQ4bDM1Ljg0LTEwLjI0cTcuMTY4LTIuMDQ4IDExLjI2NC05LjIxNnQxLjAyNC0xMy4zMTJ6TTEwNjUuOTg0IDM5Ny44MjRsLTI2Ni4yNC0yNjYuMjRxLTYuMTQ0LTUuMTItMTMuMzEyLTUuMTJ0LTEzLjMxMiA1LjEybC0yOC42NzIgMjguNjcycS01LjEyIDYuMTQ0LTUuMTIgMTMuMzEydDUuMTIgMTMuMzEybDIyNC4yNTYgMjI0LjI1Ni0yMjQuMjU2IDIyNS4yOHEtNS4xMiA1LjEyLTUuMTIgMTIuMjg4dDUuMTIgMTMuMzEybDI4LjY3MiAyOC42NzJxNi4xNDQgNi4xNDQgMTMuMzEyIDYuMTQ0dDEzLjMxMi02LjE0NGwyNjYuMjQtMjY2LjI0cTUuMTItNS4xMiA1LjEyLTEzLjMxMnQtNS4xMi0xMy4zMTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDM7IiBnbHlwaC1uYW1lPSJjYW5jZWwiIGhvcml6LWFkdi14PSI4MDQiIGQ9Ik03NDEuMzc2IDIwNC4yODhxMC0yMi41MjgtMTUuMzYtMzguOTEybC03Ny44MjQtNzcuODI0cS0xNi4zODQtMTUuMzYtMzguOTEyLTE1LjM2dC0zOC45MTIgMTUuMzZsLTE2Ny45MzYgMTY4Ljk2LTE2Ny45MzYtMTY4Ljk2cS0xNi4zODQtMTUuMzYtMzguOTEyLTE1LjM2dC0zOC45MTIgMTUuMzZsLTc3LjgyNCA3Ny44MjRxLTE2LjM4NCAxNi4zODQtMTYuMzg0IDM4LjkxMnQxNi4zODQgMzguOTEybDE2Ny45MzYgMTY3LjkzNi0xNjcuOTM2IDE2Ny45MzZxLTE2LjM4NCAxNi4zODQtMTYuMzg0IDM4LjkxMnQxNi4zODQgMzguOTEybDc3LjgyNCA3Ny44MjRxMTYuMzg0IDE2LjM4NCAzOC45MTIgMTYuMzg0dDM4LjkxMi0xNi4zODRsMTY3LjkzNi0xNjcuOTM2IDE2Ny45MzYgMTY3LjkzNnExNi4zODQgMTYuMzg0IDM4LjkxMiAxNi4zODR0MzguOTEyLTE2LjM4NGw3Ny44MjQtNzcuODI0cTE1LjM2LTE1LjM2IDE1LjM2LTM4LjkxMnQtMTUuMzYtMzguOTEybC0xNjcuOTM2LTE2Ny45MzYgMTY3LjkzNi0xNjcuOTM2cTE1LjM2LTE1LjM2IDE1LjM2LTM4LjkxMnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwNDsiIGdseXBoLW5hbWU9InRlcm1pbmFsIiBob3Jpei1hZHYteD0iOTUwIiBkPSJNMzMzLjgyNCAzOTcuODI0bC0yNjYuMjQtMjY2LjI0cS01LjEyLTUuMTItMTIuMjg4LTUuMTJ0LTEzLjMxMiA1LjEybC0yOC42NzIgMjguNjcycS02LjE0NCA2LjE0NC02LjE0NCAxMy4zMTJ0Ni4xNDQgMTMuMzEybDIyNC4yNTYgMjI0LjI1Ni0yMjQuMjU2IDIyNS4yOHEtNi4xNDQgNS4xMi02LjE0NCAxMi4yODh0Ni4xNDQgMTMuMzEybDI4LjY3MiAyOC42NzJxNS4xMiA2LjE0NCAxMy4zMTIgNi4xNDR0MTIuMjg4LTYuMTQ0bDI2Ni4yNC0yNjYuMjRxNi4xNDQtNS4xMiA2LjE0NC0xMy4zMTJ0LTYuMTQ0LTEzLjMxMnpNOTUxLjI5NiAxMzYuNzA0di0zNS44NHEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtNTQ4Ljg2NHEtOC4xOTIgMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTJ2MzUuODRxMCA4LjE5MiA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg1NDguODY0cTguMTkyIDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDU7IiBnbHlwaC1uYW1lPSJhbmdsZS1kb3duIiBob3Jpei1hZHYteD0iNjU3IiBkPSJNNjE0LjQgNTM5LjEzNnEwLTcuMTY4LTYuMTQ0LTEzLjMxMmwtMjY2LjI0LTI2Ni4yNHEtNS4xMi01LjEyLTEzLjMxMi01LjEydC0xMi4yODggNS4xMmwtMjY2LjI0IDI2Ni4yNHEtNi4xNDQgNi4xNDQtNi4xNDQgMTMuMzEydDYuMTQ0IDEzLjMxMmwyNy42NDggMjguNjcycTYuMTQ0IDYuMTQ0IDEzLjMxMiA2LjE0NHQxMy4zMTItNi4xNDRsMjI0LjI1Ni0yMjQuMjU2IDIyNS4yOCAyMjQuMjU2cTUuMTIgNi4xNDQgMTMuMzEyIDYuMTQ0dDEyLjI4OC02LjE0NGwyOC42NzItMjguNjcycTYuMTQ0LTUuMTIgNi4xNDQtMTMuMzEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODA2OyIgZ2x5cGgtbmFtZT0iZm9udCIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTQxNC43MiA2NDAuNTEybC05Ny4yOC0yNTcuMDI0cTE4LjQzMiAwIDc3LjgyNC0xLjAyNHQ5MS4xMzYtMS4wMjRxMTEuMjY0IDAgMzIuNzY4IDEuMDI0LTQ5LjE1MiAxNDQuMzg0LTEwNC40NDggMjU4LjA0OHpNMCA4LjcwNGwxLjAyNCA0NS4wNTZxMTMuMzEyIDQuMDk2IDMxLjc0NCA3LjE2OHQzMi43NjggNi4xNDQgMjguNjcyIDguMTkyIDI1LjYgMTcuNDA4IDE3LjQwOCAyOC42NzJsMTM1LjE2OCAzNTIuMjU2IDE1OS43NDQgNDEzLjY5Nmg3My43MjhxNC4wOTYtOC4xOTIgNi4xNDQtMTIuMjg4bDExNi43MzYtMjc0LjQzMnExOS40NTYtNDUuMDU2IDYxLjQ0LTE0Ny40NTZ0NjQuNTEyLTE1Ni42NzJxOS4yMTYtMTkuNDU2IDMzLjc5Mi04Mi45NDR0NDAuOTYtOTYuMjU2cTExLjI2NC0yNS42IDE5LjQ1Ni0zMS43NDQgMTEuMjY0LTkuMjE2IDUwLjE3Ni0xNy40MDh0NDguMTI4LTExLjI2NHE0LjA5Ni0yMi41MjggNC4wOTYtMzIuNzY4IDAtMi4wNDgtMS4wMjQtNy4xNjh0MC04LjE5MnEtMzUuODQgMC0xMDguNTQ0IDUuMTJ0LTEwOS41NjggNC4wOTZxLTQzLjAwOCAwLTEyMi44OC00LjA5NnQtMTAxLjM3Ni00LjA5NnEwIDI0LjU3NiAyLjA0OCA0NC4wMzJsNzQuNzUyIDE2LjM4NHExLjAyNCAwIDcuMTY4IDEuMDI0dDkuMjE2IDIuMDQ4IDguMTkyIDMuMDcyIDkuMjE2IDQuMDk2IDYuMTQ0IDQuMDk2IDUuMTIgNi4xNDQgMS4wMjQgOC4xOTJxMCA5LjIxNi0xNy40MDggNTUuMjk2dC00MC45NiAxMDEuMzc2LTI0LjU3NiA1Ny4zNDRsLTI1Ny4wMjQgMS4wMjRxLTE0LjMzNi0zMy43OTItNDQuMDMyLTExMS42MTZ0LTI4LjY3Mi05My4xODRxMC0xMi4yODggOC4xOTItMjEuNTA0dDI0LjU3Ni0xNC4zMzYgMjcuNjQ4LTcuMTY4IDMyLjc2OC01LjEyIDIzLjU1Mi0yLjA0OHExLjAyNC0xMS4yNjQgMS4wMjQtMzIuNzY4IDAtNS4xMi0yLjA0OC0xNi4zODQtMzIuNzY4IDAtOTkuMzI4IDYuMTQ0dC05OS4zMjggNi4xNDRxLTUuMTIgMC0xNS4zNi0zLjA3MnQtMTIuMjg4LTIuMDQ4cS00Ni4wODAtOC4xOTItMTA3LjUyLTguMTkyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODA3OyIgZ2x5cGgtbmFtZT0iYm9sZCIgaG9yaXotYWR2LXg9IjgwNCIgZD0iTTMxNy40NCA5MC42MjRxNDEuOTg0LTE4LjQzMiA3OS44NzItMTguNDMyIDIxNS4wNDAgMCAyMTUuMDQwIDE5MS40ODggMCA2NS41MzYtMjMuNTUyIDEwMy40MjQtMTUuMzYgMjQuNTc2LTM1Ljg0IDQxLjk4NHQtMzcuODg4IDI2LjYyNC00Ni4wODAgMTQuMzM2LTQ4LjEyOCA2LjE0NC01NC4yNzIgMS4wMjRxLTQwLjk2IDAtNTcuMzQ0LTYuMTQ0IDAtMjkuNjk2IDAtOTAuMTEydC0xLjAyNC05MS4xMzZxMC00LjA5NiAwLTM3Ljg4OHQwLTU1LjI5NiAyLjA0OC00OC4xMjggNy4xNjgtMzcuODg4ek0zMDkuMjQ4IDUxNy42MzJxMjMuNTUyLTQuMDk2IDYyLjQ2NC00LjA5NiA0Ny4xMDQgMCA4MS45MiA3LjE2OHQ2Mi40NjQgMjUuNiA0MS45ODQgNTEuMiAxNS4zNiA4MC44OTZxMCAzOS45MzYtMTYuMzg0IDY5LjYzMnQtNDYuMDgwIDQ3LjEwNC02MS40NCAyNC41NzYtNzAuNjU2IDguMTkycS0yOC42NzIgMC03NC43NTItNy4xNjggMC0yOC42NzIgMy4wNzItODYuMDE2dDIuMDQ4LTg3LjA0MHEwLTE1LjM2IDAtNDYuMDgwdC0xLjAyNC00NS4wNTZxMC0yNi42MjQgMS4wMjQtMzguOTEyek0wIDguNzA0bDEuMDI0IDU0LjI3MnE5LjIxNiAyLjA0OCA0OS4xNTIgOS4yMTZ0NjAuNDE2IDE1LjM2cTQuMDk2IDcuMTY4IDcuMTY4IDE1LjM2dDQuMDk2IDE5LjQ1NiA0LjA5NiAxOC40MzIgMS4wMjQgMjEuNTA0IDAgMTkuNDU2djM2Ljg2NHEwIDU2MS4xNTItMTIuMjg4IDU4NS43MjgtMi4wNDggNS4xMi0xMi4yODggOC4xOTJ0LTI1LjYgNi4xNDQtMjguNjcyIDQuMDk2LTI3LjY0OCAzLjA3Mi0xNy40MDggMi4wNDhsLTIuMDQ4IDQ3LjEwNHE1Ni4zMiAxLjAyNCAxOTQuNTYgNi4xNDR0MjEyLjk5MiA1LjEycTEzLjMxMiAwIDM4LjkxMiAwdDM4LjkxMiAwcTM5LjkzNiAwIDc3LjgyNC03LjE2OHQ3My43MjgtMjQuNTc2IDYxLjQ0LTM5LjkzNiA0MS45ODQtNjAuNDE2IDE2LjM4NC03Ny44MjRxMC0yOS42OTYtOS4yMTYtNTUuMjk2dC0yMi41MjgtNDAuOTYtMzYuODY0LTMyLjc2OC00MS45ODQtMjUuNi00OC4xMjgtMjIuNTI4cTg4LjA2NC0yMC40OCAxNDcuNDU2LTc2Ljh0NTguMzY4LTE0Mi4zMzZxMC01Ni4zMi0yMC40OC0xMDIuNHQtNTMuMjQ4LTc0Ljc1Mi03OC44NDgtNDguMTI4LTkzLjE4NC0yNy42NDgtMTAwLjM1Mi04LjE5MnEtMjUuNiAwLTc1Ljc3NiAyLjA0OHQtNzUuNzc2IDEuMDI0cS02MC40MTYgMC0xNzUuMTA0LTYuMTQ0dC0xMzIuMDk2LTcuMTY4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODA4OyIgZ2x5cGgtbmFtZT0iaXRhbGljIiBob3Jpei1hZHYteD0iNTg1IiBkPSJNMCA5LjcyOGwxMC4yNCA0OS4xNTJxMy4wNzIgMS4wMjQgNDYuMDgwIDEyLjI4OHQ2My40ODggMjEuNTA0cTE2LjM4NCAxOS40NTYgMjMuNTUyIDU3LjM0NCAxLjAyNCA0LjA5NiAzNS44NCAxNjUuODg4dDY0LjUxMiAzMTAuMjcyIDI5LjY5NiAxNjguOTZ2MTQuMzM2cS0xMy4zMTIgNy4xNjgtMzAuNzIgMTEuMjY0dC0zOS45MzYgNC4wOTYtMzIuNzY4IDMuMDcybDEwLjI0IDU5LjM5MnExOS40NTYtMi4wNDggNjguNjA4LTQuMDk2dDg2LjAxNi00LjA5NiA2OC42MDgtMS4wMjRxMjcuNjQ4IDAgNTYuMzIgMS4wMjR0NjguNjA4IDQuMDk2IDU2LjMyIDQuMDk2cS0yLjA0OC0yMi41MjgtMTAuMjQtNTEuMi0xNy40MDgtNi4xNDQtNTguMzY4LTE2LjM4NHQtNjEuNDQtMTkuNDU2cS01LjEyLTEwLjI0LTguMTkyLTIzLjU1MnQtNS4xMi0yMy41NTItNC4wOTYtMjUuNi00LjA5Ni0yNC41NzZxLTE1LjM2LTgzLjk2OC01MC4xNzYtMjM5LjYxNnQtNDQuMDMyLTIwMi43NTJxLTEuMDI0LTUuMTItNy4xNjgtMzIuNzY4dC0xMS4yNjQtNTIuMjI0LTkuMjE2LTQ3LjEwNC00LjA5Ni0zMi43NjhsMS4wMjQtMTAuMjRxOS4yMTYtMy4wNzIgMTA1LjQ3Mi0xOC40MzItMi4wNDgtMjQuNTc2LTkuMjE2LTU2LjMyLTYuMTQ0IDAtMTguNDMyLTEuMDI0dC0xOC40MzItMS4wMjRxLTE2LjM4NCAwLTUwLjE3NiA2LjE0NHQtNDkuMTUyIDYuMTQ0cS03OC44NDggMS4wMjQtMTE3Ljc2IDEuMDI0LTI4LjY3MiAwLTgwLjg5Ni01LjEydC02OS42MzItNi4xNDR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDk7IiBnbHlwaC1uYW1lPSJoZWFkZXIiIGQ9Ik05NjEuNTM2IDguNzA0cS0yNS42IDAtNzUuNzc2IDIuMDQ4dC03Ni44IDIuMDQ4cS0yNC41NzYgMC03NC43NTItMi4wNDh0LTc1Ljc3Ni0yLjA0OHEtMTQuMzM2IDAtMjEuNTA0IDEyLjI4OHQtNy4xNjggMjUuNnEwIDE3LjQwOCA5LjIxNiAyNi42MjR0MjIuNTI4IDkuMjE2IDI5LjY5NiA0LjA5NiAyNS42IDkuMjE2cTE4LjQzMiAxMS4yNjQgMTguNDMyIDc5Ljg3MnYyMjMuMjMycTAgMTIuMjg4LTEuMDI0IDE3LjQwOC03LjE2OCAzLjA3Mi0yOC42NzIgMy4wNzJoLTM4NS4wMjRxLTIyLjUyOCAwLTI5LjY5Ni0zLjA3MiAwLTUuMTIgMC0xNy40MDhsLTEuMDI0LTIxMS45NjhxMC04MC44OTYgMjEuNTA0LTk0LjIwOCA5LjIxNi01LjEyIDI2LjYyNC03LjE2OHQzMi43NjgtMi4wNDggMjUuNi04LjE5MiAxMS4yNjQtMjYuNjI0cTAtMTQuMzM2LTcuMTY4LTI2LjYyNHQtMjAuNDgtMTMuMzEycS0yNi42MjQgMC03OS44NzIgMi4wNDh0LTc4Ljg0OCAyLjA0OHEtMjQuNTc2IDAtNzIuNzA0LTIuMDQ4dC03Mi43MDQtMi4wNDhxLTEzLjMxMiAwLTIwLjQ4IDEyLjI4OHQtNy4xNjggMjUuNnEwIDE3LjQwOCA5LjIxNiAyNS42dDIwLjQ4IDEwLjI0IDI2LjYyNCA0LjA5NiAyNC41NzYgOS4yMTZxMTguNDMyIDEzLjMxMiAxOC40MzIgODEuOTJsLTEuMDI0IDMxLjc0NHY0NjQuODk2cTAgMi4wNDggMS4wMjQgMTQuMzM2dDAgMjEuNTA0LTEuMDI0IDIxLjUwNC0yLjA0OCAyNC41NzYtNC4wOTYgMjAuNDgtNi4xNDQgMTguNDMyLTkuMjE2IDEwLjI0cS04LjE5MiA1LjEyLTI1LjYgNi4xNDR0LTI5LjY5NiAyLjA0OC0yMy41NTIgNy4xNjgtMTAuMjQgMjYuNjI0cTAgMTQuMzM2IDYuMTQ0IDI2LjYyNHQyMC40OCAxMy4zMTJxMjYuNjI0IDAgNzkuODcyLTIuMDQ4dDc4Ljg0OC0yLjA0OHEyMy41NTIgMCA3Mi43MDQgMi4wNDh0NzEuNjggMi4wNDhxMTQuMzM2IDAgMjEuNTA0LTEzLjMxMnQ3LjE2OC0yNi42MjRxMC0xNy40MDgtOS4yMTYtMjUuNnQtMjIuNTI4LTguMTkyLTI4LjY3Mi0yLjA0OC0yNC41NzYtNy4xNjhxLTE5LjQ1Ni0xMi4yODgtMTkuNDU2LTkyLjE2bDEuMDI0LTE4Mi4yNzJxMC0xMi4yODggMC0xOC40MzIgNy4xNjgtMi4wNDggMjIuNTI4LTIuMDQ4aDM5OS4zNnExNC4zMzYgMCAyMS41MDQgMi4wNDggMS4wMjQgNi4xNDQgMS4wMjQgMTguNDMydjE4Mi4yNzJxMCA3OS44NzItMTkuNDU2IDkyLjE2LTEwLjI0IDYuMTQ0LTMzLjc5MiA3LjE2OHQtMzcuODg4IDcuMTY4LTE0LjMzNiAyOC42NzJxMCAxNC4zMzYgNy4xNjggMjYuNjI0dDIxLjUwNCAxMy4zMTJxMjQuNTc2IDAgNzUuNzc2LTIuMDQ4dDc0Ljc1Mi0yLjA0OHEyNC41NzYgMCA3My43MjggMi4wNDh0NzMuNzI4IDIuMDQ4cTE0LjMzNiAwIDIxLjUwNC0xMy4zMTJ0Ny4xNjgtMjYuNjI0cTAtMTcuNDA4LTEwLjI0LTI1LjZ0LTIyLjUyOC04LjE5Mi0yOS42OTYtMi4wNDgtMjQuNTc2LTcuMTY4cS0yMC40OC0xMy4zMTItMjAuNDgtOTIuMTZsMS4wMjQtNTM4LjYyNHEwLTY3LjU4NCAxOS40NTYtNzkuODcyIDkuMjE2LTYuMTQ0IDI1LjYtNy4xNjh0MzAuNzItMy4wNzIgMjMuNTUyLTkuMjE2IDEwLjI0LTI0LjU3NnEwLTE1LjM2LTYuMTQ0LTI3LjY0OHQtMjAuNDgtMTMuMzEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODBhOyIgZ2x5cGgtbmFtZT0iYWxpZ24tbGVmdCIgZD0iTTEwMjQgMTkydi03Mi43MDRxMC0xNS4zNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTk1MC4yNzJxLTE1LjM2IDAtMjUuNiAxMS4yNjR0LTExLjI2NCAyNS42djcyLjcwNHEwIDE1LjM2IDExLjI2NCAyNS42dDI1LjYgMTEuMjY0aDk1MC4yNzJxMTUuMzYgMCAyNS42LTExLjI2NHQxMS4yNjQtMjUuNnpNODA0Ljg2NCA0MTEuMTM2di03Mi43MDRxMC0xNS4zNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTczMS4xMzZxLTE1LjM2IDAtMjUuNiAxMS4yNjR0LTExLjI2NCAyNS42djcyLjcwNHEwIDE1LjM2IDExLjI2NCAyNS42dDI1LjYgMTEuMjY0aDczMS4xMzZxMTUuMzYgMCAyNS42LTExLjI2NHQxMS4yNjQtMjUuNnpNOTUxLjI5NiA2MzEuMjk2di03My43MjhxMC0xNC4zMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC04NzcuNTY4cS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3My43MjhxMCAxNC4zMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMC4yNGg4NzcuNTY4cTE0LjMzNiAwIDI1LjYtMTAuMjR0MTEuMjY0LTI1LjZ6TTczMS4xMzYgODUwLjQzMnYtNzMuNzI4cTAtMTQuMzM2LTEwLjI0LTI1LjZ0LTI1LjYtMTAuMjRoLTY1OC40MzJxLTE1LjM2IDAtMjUuNiAxMC4yNHQtMTEuMjY0IDI1LjZ2NzMuNzI4cTAgMTQuMzM2IDExLjI2NCAyNS42dDI1LjYgMTEuMjY0aDY1OC40MzJxMTQuMzM2IDAgMjUuNi0xMS4yNjR0MTAuMjQtMjUuNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwYjsiIGdseXBoLW5hbWU9ImFsaWduLWNlbnRlciIgZD0iTTEwMjQgMTkydi03Mi43MDRxMC0xNS4zNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTk1MC4yNzJxLTE1LjM2IDAtMjUuNiAxMS4yNjR0LTExLjI2NCAyNS42djcyLjcwNHEwIDE1LjM2IDExLjI2NCAyNS42dDI1LjYgMTEuMjY0aDk1MC4yNzJxMTUuMzYgMCAyNS42LTExLjI2NHQxMS4yNjQtMjUuNnpNODA0Ljg2NCA0MTEuMTM2di03Mi43MDRxMC0xNS4zNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTUxMnEtMTQuMzM2IDAtMjUuNiAxMS4yNjR0LTExLjI2NCAyNS42djcyLjcwNHEwIDE1LjM2IDExLjI2NCAyNS42dDI1LjYgMTEuMjY0aDUxMnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42ek05NTEuMjk2IDYzMS4yOTZ2LTczLjcyOHEwLTE0LjMzNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTgwNC44NjRxLTE0LjMzNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3My43MjhxMCAxNC4zMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMC4yNGg4MDQuODY0cTE0LjMzNiAwIDI1LjYtMTAuMjR0MTEuMjY0LTI1LjZ6TTczMS4xMzYgODUwLjQzMnYtNzMuNzI4cTAtMTQuMzM2LTEwLjI0LTI1LjZ0LTI1LjYtMTAuMjRoLTM2Ni41OTJxLTE0LjMzNiAwLTI1LjYgMTAuMjR0LTEwLjI0IDI1LjZ2NzMuNzI4cTAgMTQuMzM2IDEwLjI0IDI1LjZ0MjUuNiAxMS4yNjRoMzY2LjU5MnExNC4zMzYgMCAyNS42LTExLjI2NHQxMC4yNC0yNS42eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODBjOyIgZ2x5cGgtbmFtZT0iYWxpZ24tcmlnaHQiIGQ9Ik0xMDI0IDE5MnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC05NTAuMjcycS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3Mi43MDRxMCAxNS4zNiAxMS4yNjQgMjUuNnQyNS42IDExLjI2NGg5NTAuMjcycTE1LjM2IDAgMjUuNi0xMS4yNjR0MTEuMjY0LTI1LjZ6TTEwMjQgNDExLjEzNnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC03MzEuMTM2cS0xNC4zMzYgMC0yNS42IDExLjI2NHQtMTEuMjY0IDI1LjZ2NzIuNzA0cTAgMTUuMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMS4yNjRoNzMxLjEzNnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42ek0xMDI0IDYzMS4yOTZ2LTczLjcyOHEwLTE0LjMzNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTg3Ny41NjhxLTE0LjMzNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3My43MjhxMCAxNC4zMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMC4yNGg4NzcuNTY4cTE1LjM2IDAgMjUuNi0xMC4yNHQxMS4yNjQtMjUuNnpNMTAyNCA4NTAuNDMydi03My43MjhxMC0xNC4zMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTAuMjRoLTY1OC40MzJxLTE0LjMzNiAwLTI1LjYgMTAuMjR0LTEwLjI0IDI1LjZ2NzMuNzI4cTAgMTQuMzM2IDEwLjI0IDI1LjZ0MjUuNiAxMS4yNjRoNjU4LjQzMnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODBkOyIgZ2x5cGgtbmFtZT0ibGlzdC1idWxsZXQiIGQ9Ik0yMTkuMTM2IDE1NS4xMzZxMC00NS4wNTYtMzEuNzQ0LTc3LjgyNHQtNzcuODI0LTMxLjc0NC03Ny44MjQgMzEuNzQ0LTMxLjc0NCA3Ny44MjQgMzEuNzQ0IDc3LjgyNCA3Ny44MjQgMzEuNzQ0IDc3LjgyNC0zMS43NDQgMzEuNzQ0LTc3LjgyNHpNMjE5LjEzNiA0NDhxMC00Ni4wODAtMzEuNzQ0LTc3LjgyNHQtNzcuODI0LTMxLjc0NC03Ny44MjQgMzEuNzQ0LTMxLjc0NCA3Ny44MjQgMzEuNzQ0IDc3LjgyNCA3Ny44MjQgMzEuNzQ0IDc3LjgyNC0zMS43NDQgMzEuNzQ0LTc3LjgyNHpNMTAyNCAyMTAuNDMydi0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC02OTQuMjcycS04LjE5MiAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYxMDkuNTY4cTAgNy4xNjggNS4xMiAxMi4yODh0MTMuMzEyIDYuMTQ0aDY5NC4yNzJxNy4xNjggMCAxMy4zMTItNi4xNDR0NS4xMi0xMi4yODh6TTIxOS4xMzYgNzQwLjg2NHEwLTQ2LjA4MC0zMS43NDQtNzcuODI0dC03Ny44MjQtMzEuNzQ0LTc3LjgyNCAzMS43NDQtMzEuNzQ0IDc3LjgyNCAzMS43NDQgNzcuODI0IDc3LjgyNCAzMS43NDQgNzcuODI0LTMxLjc0NCAzMS43NDQtNzcuODI0ek0xMDI0IDUwMy4yOTZ2LTExMC41OTJxMC03LjE2OC01LjEyLTEyLjI4OHQtMTMuMzEyLTUuMTJoLTY5NC4yNzJxLTguMTkyIDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTIuMjg4djExMC41OTJxMCA3LjE2OCA1LjEyIDEyLjI4OHQxMy4zMTIgNS4xMmg2OTQuMjcycTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMi4yODh6TTEwMjQgNzk1LjEzNnYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTIuMjg4dC0xMy4zMTItNi4xNDRoLTY5NC4yNzJxLTguMTkyIDAtMTMuMzEyIDYuMTQ0dC01LjEyIDEyLjI4OHYxMDkuNTY4cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTJoNjk0LjI3MnE3LjE2OCAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODBlOyIgZ2x5cGgtbmFtZT0iaW5kZW50LWxlZnQiIGQ9Ik0yMTkuMTM2IDY0OC43MDR2LTMyOC43MDRxMC03LjE2OC01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJxLTcuMTY4IDAtMTIuMjg4IDUuMTJsLTE2NC44NjQgMTY0Ljg2NHEtNS4xMiA1LjEyLTUuMTIgMTMuMzEydDUuMTIgMTMuMzEybDE2NC44NjQgMTYzLjg0cTUuMTIgNS4xMiAxMi4yODggNS4xMiA4LjE5MiAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyek0xMDI0IDIxMC40MzJ2LTEwOS41NjhxMC03LjE2OC01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTk4Ny4xMzZxLTcuMTY4IDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEyLjI4OHQxMy4zMTIgNi4xNDRoOTg3LjEzNnE3LjE2OCAwIDEzLjMxMi02LjE0NHQ1LjEyLTEyLjI4OHpNMTAyNCA0MjkuNTY4di0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC02MjEuNTY4cS03LjE2OCAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYxMDkuNTY4cTAgNy4xNjggNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTJoNjIxLjU2OHE3LjE2OCAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyek0xMDI0IDY0OC43MDR2LTEwOS41NjhxMC03LjE2OC01LjEyLTEyLjI4OHQtMTMuMzEyLTYuMTQ0aC02MjEuNTY4cS03LjE2OCAwLTEzLjMxMiA2LjE0NHQtNS4xMiAxMi4yODh2MTA5LjU2OHEwIDguMTkyIDUuMTIgMTMuMzEydDEzLjMxMiA1LjEyaDYyMS41NjhxNy4xNjggMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnpNMTAyNCA4NjguODY0di0xMDkuNTY4cTAtOC4xOTItNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC05ODcuMTM2cS03LjE2OCAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYxMDkuNTY4cTAgNy4xNjggNS4xMiAxMi4yODh0MTMuMzEyIDYuMTQ0aDk4Ny4xMzZxNy4xNjggMCAxMy4zMTItNi4xNDR0NS4xMi0xMi4yODh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGY7IiBnbHlwaC1uYW1lPSJpbmRlbnQtcmlnaHQiIGQ9Ik0yMDAuNzA0IDQ4NC44NjRxMC04LjE5Mi01LjEyLTEzLjMxMmwtMTYzLjg0LTE2NC44NjRxLTUuMTItNS4xMi0xMy4zMTItNS4xMi03LjE2OCAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYzMjguNzA0cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTIgMTMuMzEyLTUuMTJsMTYzLjg0LTE2My44NHE1LjEyLTUuMTIgNS4xMi0xMy4zMTJ6TTEwMjQgMjEwLjQzMnYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtOTg3LjEzNnEtNy4xNjggMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTJ2MTA5LjU2OHEwIDcuMTY4IDUuMTIgMTIuMjg4dDEzLjMxMiA2LjE0NGg5ODcuMTM2cTcuMTY4IDAgMTMuMzEyLTYuMTQ0dDUuMTItMTIuMjg4ek0xMDI0IDQyOS41Njh2LTEwOS41NjhxMC03LjE2OC01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTYyMS41NjhxLTcuMTY4IDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2MjEuNTY4cTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6TTEwMjQgNjQ4LjcwNHYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTIuMjg4dC0xMy4zMTItNi4xNDRoLTYyMS41NjhxLTcuMTY4IDAtMTMuMzEyIDYuMTQ0dC01LjEyIDEyLjI4OHYxMDkuNTY4cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTJoNjIxLjU2OHE3LjE2OCAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyek0xMDI0IDg2OC44NjR2LTEwOS41NjhxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTk4Ny4xMzZxLTcuMTY4IDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEyLjI4OHQxMy4zMTIgNi4xNDRoOTg3LjEzNnE3LjE2OCAwIDEzLjMxMi02LjE0NHQ1LjEyLTEyLjI4OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxMDsiIGdseXBoLW5hbWU9Imxpc3QtbnVtYmVyZWQiIGQ9Ik0yMTguMTEyIDM0LjMwNHEwLTQ2LjA4MC0zMS43NDQtNzEuNjh0LTc2LjgtMjYuNjI0cS02MS40NCAwLTk4LjMwNCAzNy44ODhsMzEuNzQ0IDUwLjE3NnEyOC42NzItMjUuNiA2MS40NC0yNS42IDE2LjM4NCAwIDI4LjY3MiA4LjE5MnQxMi4yODggMjQuNTc2cTAgMzUuODQtNjAuNDE2IDMxLjc0NGwtMTQuMzM2IDMxLjc0NHE0LjA5NiA2LjE0NCAxOC40MzIgMjQuNTc2dDI0LjU3NiAzMS43NDQgMjAuNDggMjEuNTA0djEuMDI0cS05LjIxNiAwLTI3LjY0OC0xLjAyNHQtMjcuNjQ4IDB2LTMwLjcyaC02MC40MTZ2ODcuMDQwaDE5MC40NjR2LTUwLjE3NmwtNTQuMjcyLTY2LjU2cTI4LjY3Mi02LjE0NCA0Ni4wODAtMjcuNjQ4dDE3LjQwOC01MC4xNzZ6TTIxOS4xMzYgMzkyLjcwNHYtOTEuMTM2aC0yMDYuODQ4cS00LjA5NiAyMC40OC00LjA5NiAzMC43MiAwIDI5LjY5NiAxNC4zMzYgNTMuMjQ4dDMxLjc0NCAzOC45MTIgMzcuODg4IDI3LjY0OCAzMS43NDQgMjQuNTc2IDE0LjMzNiAyNS42cTAgMTQuMzM2LTkuMjE2IDIyLjUyOHQtMjIuNTI4IDcuMTY4cS0yNS42IDAtNDYuMDgwLTMyLjc2OGwtNDguMTI4IDMzLjc5MnExMy4zMTIgMjguNjcyIDQwLjk2IDQ1LjA1NnQ2MC40MTYgMTYuMzg0cTQwLjk2IDAgNjkuNjMyLTIzLjU1MnQyOC42NzItNjQuNTEycTAtMjguNjcyLTE5LjQ1Ni01Mi4yMjR0LTQzLjAwOC0zNi44NjQtNDMuMDA4LTI4LjY3Mi0yMC40OC0zMC43Mmg3Mi43MDR2MzQuODE2aDYwLjQxNnpNMTAyNCAyMTAuNDMydi0xMDkuNTY4cTAtOC4xOTItNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC02OTQuMjcycS04LjE5MiAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYxMDkuNTY4cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTJoNjk0LjI3MnE3LjE2OCAwIDEzLjMxMi02LjE0NHQ1LjEyLTEyLjI4OHpNMjE5LjEzNiA3MjQuNDh2LTU3LjM0NGgtMTkxLjQ4OHY1Ny4zNDRoNjEuNDRxMCAyMi41MjggMCA2OS42MzJ0MS4wMjQgNjguNjA4djcuMTY4aC0xLjAyNHEtNS4xMi0xMC4yNC0yOC42NzItMzAuNzJsLTQwLjk2IDQzLjAwOCA3Ny44MjQgNzIuNzA0aDYwLjQxNnYtMjMwLjRoNjEuNDR6TTEwMjQgNTAzLjI5NnYtMTEwLjU5MnEwLTcuMTY4LTUuMTItMTIuMjg4dC0xMy4zMTItNS4xMmgtNjk0LjI3MnEtOC4xOTIgMC0xMy4zMTIgNS4xMnQtNS4xMiAxMi4yODh2MTEwLjU5MnEwIDcuMTY4IDUuMTIgMTIuMjg4dDEzLjMxMiA1LjEyaDY5NC4yNzJxNy4xNjggMCAxMy4zMTItNS4xMnQ1LjEyLTEyLjI4OHpNMTAyNCA3OTUuMTM2di0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMi4yODh0LTEzLjMxMi02LjE0NGgtNjk0LjI3MnEtOC4xOTIgMC0xMy4zMTIgNi4xNDR0LTUuMTIgMTIuMjg4djEwOS41NjhxMCA4LjE5MiA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2OTQuMjcycTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTE7IiBnbHlwaC1uYW1lPSJ1bmRlcmxpbmUiIGhvcml6LWFkdi14PSI4NzgiIGQ9Ik0yNy42NDggODMzLjAyNHEtMjEuNTA0IDEuMDI0LTI1LjYgMi4wNDhsLTIuMDQ4IDUwLjE3NnE3LjE2OCAwIDIyLjUyOCAwIDM0LjgxNiAwIDY0LjUxMi0yLjA0OCA3NS43NzYtNC4wOTYgOTQuMjA4LTQuMDk2IDQ5LjE1MiAwIDk2LjI1NiAyLjA0OCA2Ni41NiAyLjA0OCA4My45NjggMy4wNzIgMzEuNzQ0IDAgNDkuMTUyIDEuMDI0bC0xLjAyNC04LjE5MiAxLjAyNC0zNi44NjR2LTUuMTJxLTMzLjc5Mi01LjEyLTcwLjY1Ni01LjEyLTMzLjc5MiAwLTQ1LjA1Ni0xNC4zMzYtNy4xNjgtNy4xNjgtNy4xNjgtNzQuNzUyIDAtOC4xOTIgMC0xOC40MzJ0MC0xNS4zNmwxLjAyNC0xMzEuMDcyIDguMTkyLTE1OS43NDRxMy4wNzItNzAuNjU2IDI4LjY3Mi0xMTQuNjg4IDIwLjQ4LTMzLjc5MiA1NS4yOTYtNTMuMjQ4IDUwLjE3Ni0yNi42MjQgMTAwLjM1Mi0yNi42MjQgNTkuMzkyIDAgMTA5LjU2OCAxNi4zODQgMzEuNzQ0IDEwLjI0IDU2LjMyIDI4LjY3MiAyNy42NDggMjAuNDggMzcuODg4IDM2Ljg2NCAyMC40OCAzMS43NDQgMjkuNjk2IDY0LjUxMiAxMi4yODggNDEuOTg0IDEyLjI4OCAxMzEuMDcyIDAgNDUuMDU2LTIuMDQ4IDczLjcyOHQtNi4xNDQgNjkuNjMyLTguMTkyIDkxLjEzNmwtMi4wNDggMzMuNzkycS0zLjA3MiAzNy44ODgtMTMuMzEyIDUwLjE3Ni0xOS40NTYgMjAuNDgtNDQuMDMyIDE5LjQ1NmwtNTcuMzQ0LTEuMDI0LTguMTkyIDIuMDQ4IDEuMDI0IDQ5LjE1Mmg0OC4xMjhsMTE2LjczNi02LjE0NHE0NC4wMzItMi4wNDggMTEyLjY0IDYuMTQ0bDEwLjI0LTIuMDQ4cTMuMDcyLTIxLjUwNCAzLjA3Mi0yOC42NzIgMC00LjA5Ni0yLjA0OC0xNy40MDgtMjUuNi03LjE2OC00OC4xMjgtOC4xOTItNDEuOTg0LTYuMTQ0LTQ1LjA1Ni05LjIxNi04LjE5Mi05LjIxNi04LjE5Mi0yMy41NTIgMC00LjA5NiAwLTE1LjM2dDEuMDI0LTE3LjQwOHE1LjEyLTExLjI2NCAxMy4zMTItMjI2LjMwNCAzLjA3Mi0xMTEuNjE2LTkuMjE2LTE3NC4wODAtOC4xOTItNDMuMDA4LTIzLjU1Mi02OS42MzItMjEuNTA0LTM2Ljg2NC02My40ODgtNzAuNjU2LTQzLjAwOC0zMi43NjgtMTA0LjQ0OC01MC4xNzYtNjIuNDY0LTE5LjQ1Ni0xNDUuNDA4LTE5LjQ1Ni05NS4yMzIgMC0xNjIuODE2IDI2LjYyNHQtMTAxLjM3NiA2OS42MzJxLTM0LjgxNiA0My4wMDgtNDguMTI4IDExMS42MTYtOS4yMTYgNDUuMDU2LTkuMjE2IDEzNS4xNjh2MTkwLjQ2NHEwIDEwNy41Mi05LjIxNiAxMjEuODU2LTE0LjMzNiAyMC40OC04My45NjggMjEuNTA0ek04NzcuNTY4IDI3LjEzNnYzNi44NjRxMCA4LjE5Mi01LjEyIDEzLjMxMnQtMTMuMzEyIDUuMTJoLTg0MC43MDRxLTguMTkyIDAtMTMuMzEyLTUuMTJ0LTUuMTItMTMuMzEydi0zNi44NjRxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmg4NDAuNzA0cTguMTkyIDAgMTMuMzEyIDUuMTJ0NS4xMiAxMy4zMTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTI7IiBnbHlwaC1uYW1lPSJ0YWJsZSIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTI5Mi44NjQgMTczLjU2OHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyaC0xODMuMjk2cS03LjE2OCAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxOC4xOTIgMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnpNMjkyLjg2NCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTMuMzEyIDUuMTJoLTE4My4yOTZxLTcuMTY4IDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgzLjI5NnE4LjE5MiAwIDEzLjMxMiA1LjEydDUuMTIgMTIuMjg4ek01ODQuNzA0IDE3My41Njh2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMi4yODggNS4xMmgtMTgzLjI5NnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODMuMjk2cTcuMTY4IDAgMTIuMjg4IDUuMTJ0NS4xMiAxMy4zMTJ6TTI5Mi44NjQgNjEyLjg2NHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyaC0xODMuMjk2cS03LjE2OCAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxOC4xOTIgMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnpNNTg0LjcwNCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTIuMjg4IDUuMTJoLTE4My4yOTZxLTguMTkyIDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgzLjI5NnE3LjE2OCAwIDEyLjI4OCA1LjEydDUuMTIgMTIuMjg4ek04NzcuNTY4IDE3My41Njh2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMy4zMTIgNS4xMmgtMTgyLjI3MnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODIuMjcycTguMTkyIDAgMTMuMzEyIDUuMTJ0NS4xMiAxMy4zMTJ6TTU4NC43MDQgNjEyLjg2NHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEyLjI4OCA1LjEyaC0xODMuMjk2cS04LjE5MiAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxNy4xNjggMCAxMi4yODggNS4xMnQ1LjEyIDEzLjMxMnpNODc3LjU2OCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTMuMzEyIDUuMTJoLTE4Mi4yNzJxLTguMTkyIDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgyLjI3MnE4LjE5MiAwIDEzLjMxMiA1LjEydDUuMTIgMTIuMjg4ek04NzcuNTY4IDYxMi44NjR2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMy4zMTIgNS4xMmgtMTgyLjI3MnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODIuMjcycTguMTkyIDAgMTMuMzEyIDUuMTJ0NS4xMiAxMy4zMTJ6TTk1MS4yOTYgNzk1LjEzNnYtNjIxLjU2OHEwLTM3Ljg4OC0yNy42NDgtNjQuNTEydC02NC41MTItMjYuNjI0aC03NjhxLTM2Ljg2NCAwLTY0LjUxMiAyNi42MjR0LTI2LjYyNCA2NC41MTJ2NjIxLjU2OHEwIDM3Ljg4OCAyNi42MjQgNjQuNTEydDY0LjUxMiAyNy42NDhoNzY4cTM3Ljg4OCAwIDY0LjUxMi0yNy42NDh0MjcuNjQ4LTY0LjUxMnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxMzsiIGdseXBoLW5hbWU9ImVyYXNlciIgaG9yaXotYWR2LXg9IjEwOTciIGQ9Ik01MTIgMTU1LjEzNmwxOTIuNTEyIDIyMC4xNmgtNDM5LjI5NmwtMTkyLjUxMi0yMjAuMTZoNDM5LjI5NnpNMTA5MC41NiA3NzAuNTZxOS4yMTYtMTkuNDU2IDYuMTQ0LTQwLjk2dC0xNy40MDgtMzYuODY0bC01MTItNTg1LjcyOHEtMjIuNTI4LTI0LjU3Ni01NS4yOTYtMjQuNTc2aC00MzkuMjk2cS0yMS41MDQgMC0zOC45MTIgMTEuMjY0dC0yNy42NDggMzEuNzQ0cS04LjE5MiAxOS40NTYtNS4xMiA0MC45NnQxNy40MDggMzYuODY0bDUxMiA1ODUuNzI4cTIxLjUwNCAyNC41NzYgNTQuMjcyIDI0LjU3Nmg0MzkuMjk2cTIxLjUwNCAwIDM5LjkzNi0xMS4yNjR0MjYuNjI0LTMxLjc0NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxNDsiIGdseXBoLW5hbWU9InRleHQtaGVpZ2h0IiBkPSJNOTk2LjM1MiAxNTUuMTM2cTE5LjQ1NiAwIDI0LjU3Ni0xMC4yNHQtNi4xNDQtMjUuNmwtNzIuNzA0LTkyLjE2cS0xMS4yNjQtMTUuMzYtMjcuNjQ4LTE1LjM2dC0yNy42NDggMTUuMzZsLTcyLjcwNCA5Mi4xNnEtMTEuMjY0IDE1LjM2LTYuMTQ0IDI1LjZ0MjMuNTUyIDEwLjI0aDQ2LjA4MHY1ODUuNzI4aC00Ni4wODBxLTE4LjQzMiAwLTIzLjU1MiAxMC4yNHQ2LjE0NCAyNS42bDcyLjcwNCA5Mi4xNnExMS4yNjQgMTUuMzYgMjcuNjQ4IDE1LjM2dDI3LjY0OC0xNS4zNmw3Mi43MDQtOTIuMTZxMTEuMjY0LTE1LjM2IDYuMTQ0LTI1LjZ0LTI0LjU3Ni0xMC4yNGgtNDUuMDU2di01ODUuNzI4aDQ1LjA1NnpNNDYuMDgwIDg4Ni4yNzJsMzAuNzItMTUuMzZxNy4xNjgtMy4wNzIgMTIwLjgzMi0zLjA3MiAyNS42IDAgNzUuNzc2IDEuMDI0dDc0Ljc1MiAxLjAyNHEyMS41MDQgMCA2MS40NCAwdDYxLjQ0IDBoMTY3LjkzNnEzLjA3MiAwIDEyLjI4OCAwdDExLjI2NCAwIDkuMjE2IDEuMDI0IDEwLjI0IDUuMTIgOC4xOTIgMTAuMjRsMjQuNTc2IDEuMDI0cTIuMDQ4IDAgNy4xNjgtMS4wMjR0OC4xOTIgMHExLjAyNC02My40ODggMS4wMjQtMTkxLjQ4OCAwLTQ2LjA4MC0yLjA0OC02Mi40NjQtMjIuNTI4LTguMTkyLTM4LjkxMi0xMC4yNC0xNC4zMzYgMjQuNTc2LTMxLjc0NCA3Mi43MDQtMS4wMjQgNS4xMi02LjE0NCAyNy42NDh0LTguMTkyIDQxLjk4NC00LjA5NiAyMC40OHEtMy4wNzIgNC4wOTYtNy4xNjggNy4xNjh0LTguMTkyIDMuMDcyLTguMTkyIDEuMDI0LTEwLjI0IDEuMDI0LTkuMjE2LTEuMDI0cS05LjIxNiAwLTM3Ljg4OCAxLjAyNHQtNDMuMDA4IDAtMzUuODQtMS4wMjQtNDAuOTYtNC4wOTZxLTUuMTItNDYuMDgwLTQuMDk2LTc2LjggMC01NC4yNzIgMS4wMjQtMjIyLjIwOHQxLjAyNC0yNjAuMDk2cTAtOS4yMTYtMS4wMjQtNDAuOTZ0MC01Mi4yMjQgNy4xNjgtMzguOTEycTIyLjUyOC0xMi4yODggNzAuNjU2LTI0LjU3NnQ2OC42MDgtMjEuNTA0cTIuMDQ4LTIyLjUyOCAyLjA0OC0yOC42NzIgMC04LjE5Mi0xLjAyNC0xNi4zODRsLTE5LjQ1Ni0xLjAyNHEtNDQuMDMyLTEuMDI0LTEyNC45MjggNS4xMnQtMTE3Ljc2IDUuMTJxLTI4LjY3MiAwLTg3LjA0MC01LjEydC04Ni4wMTYtNS4xMnEtMi4wNDggMjkuNjk2LTIuMDQ4IDI5LjY5NnY1LjEycTkuMjE2IDE1LjM2IDM0LjgxNiAyNC41NzZ0NTYuMzIgMTcuNDA4IDQ1LjA1NiAxNS4zNnExMC4yNCAyMy41NTIgMTAuMjQgMjE4LjExMiAwIDU4LjM2OC0xLjAyNCAxNzMuMDU2dC0yLjA0OCAxNzQuMDgwdjY2LjU2cTAgMS4wMjQgMCA4LjE5MnQxLjAyNCAxNC4zMzYtMS4wMjQgMTUuMzYtMi4wNDggMTMuMzEyLTMuMDcyIDguMTkycS02LjE0NCA3LjE2OC05Mi4xNiA3LjE2OC0xOC40MzIgMC01My4yNDgtNy4xNjh0LTQ1LjA1Ni0xNS4zNnEtMTEuMjY0LTcuMTY4LTE5LjQ1Ni00MC45NnQtMTguNDMyLTYzLjQ4OC0yNC41NzYtMzAuNzJxLTIzLjU1MiAxNS4zNi0zMS43NDQgMjUuNnYyMTguMTEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODE1OyIgZ2x5cGgtbmFtZT0iYnJ1c2giIGQ9Ik05MjIuNjI0IDk2MHEzOS45MzYgMCA3MC42NTYtMjYuNjI0dDI5LjY5Ni02Ni41NnEwLTM1Ljg0LTI1LjYtODYuMDE2LTE4OS40NC0zNTkuNDI0LTI2Ni4yNC00MzAuMDgwLTU1LjI5Ni01Mi4yMjQtMTIzLjkwNC01Mi4yMjQtNzIuNzA0IDAtMTIzLjkwNCA1My4yNDh0LTUyLjIyNCAxMjQuOTI4cTAgNzMuNzI4IDUzLjI0OCAxMjEuODU2bDM2NC41NDQgMzMwLjc1MnEzMy43OTIgMzAuNzIgNzMuNzI4IDMwLjcyek00MDMuNDU2IDM2OS4xNTJxMjIuNTI4LTQzLjAwOCA2MC40MTYtNzQuNzUydDg2LjAxNi00My4wMDhsMS4wMjQtNDAuOTZxMi4wNDgtMTIxLjg1Ni03My43MjgtMTk3LjYzMnQtMTk5LjY4LTc2LjhxLTY5LjYzMiAwLTEyMy45MDQgMjYuNjI0dC04OC4wNjQgNzIuNzA0LTQ5LjE1MiAxMDQuNDQ4LTE2LjM4NCAxMjUuOTUycTQuMDk2LTMuMDcyIDIzLjU1Mi0xNy40MDh0MzUuODQtMjUuNiAzMi43NjgtMjAuNDggMjYuNjI0LTkuMjE2cTIzLjU1MiAwIDMxLjc0NCAyMC40OCAxNC4zMzYgMzcuODg4IDMyLjc2OCA2NC41MTJ0MzkuOTM2IDQzLjAwOCA1MC4xNzYgMjcuNjQ4IDU4LjM2OCAxNC4zMzYgNzEuNjggNi4xNDR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTY7IiBnbHlwaC1uYW1lPSJwZW5jaWwiIGhvcml6LWFkdi14PSI4NzgiIGQ9Ik0yMDcuODcyIDgyLjQzMmw1MS4yIDUyLjIyNC0xMzQuMTQ0IDEzNC4xNDQtNTIuMjI0LTUyLjIyNHYtNjEuNDRoNzMuNzI4di03Mi43MDRoNjEuNDR6TTUwNS44NTYgNjEyLjg2NHEwIDEyLjI4OC0xMi4yODggMTIuMjg4LTUuMTIgMC05LjIxNi00LjA5NmwtMzEwLjI3Mi0zMDkuMjQ4cS00LjA5Ni00LjA5Ni00LjA5Ni0xMC4yNCAwLTEyLjI4OCAxMy4zMTItMTIuMjg4IDUuMTIgMCA5LjIxNiA0LjA5NmwzMTAuMjcyIDMwOS4yNDhxMy4wNzIgNC4wOTYgMy4wNzIgMTAuMjR6TTQ3NS4xMzYgNzIyLjQzMmwyMzcuNTY4LTIzNy41NjgtNDc1LjEzNi00NzYuMTZoLTIzNy41Njh2MjM4LjU5MnpNODY1LjI4IDY2Ny4xMzZxMC0yOS42OTYtMjAuNDgtNTEuMmwtOTUuMjMyLTk1LjIzMi0yMzcuNTY4IDIzOC41OTIgOTUuMjMyIDk0LjIwOHEyMC40OCAyMS41MDQgNTEuMiAyMS41MDQgMjkuNjk2IDAgNTIuMjI0LTIxLjUwNGwxMzQuMTQ0LTEzNC4xNDRxMjAuNDgtMjIuNTI4IDIwLjQ4LTUyLjIyNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxNzsiIGdseXBoLW5hbWU9Im1pbnVzIiBob3Jpei1hZHYteD0iODA0IiBkPSJNODA0Ljg2NCA1MzkuMTM2di0xMDkuNTY4cTAtMjIuNTI4LTE2LjM4NC0zOC45MTJ0LTM4LjkxMi0xNS4zNmgtNjk0LjI3MnEtMjMuNTUyIDAtMzguOTEyIDE1LjM2dC0xNi4zODQgMzguOTEydjEwOS41NjhxMCAyMy41NTIgMTYuMzg0IDM4LjkxMnQzOC45MTIgMTYuMzg0aDY5NC4yNzJxMjIuNTI4IDAgMzguOTEyLTE2LjM4NHQxNi4zODQtMzguOTEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlODE4OyIgZ2x5cGgtbmFtZT0icGljdHVyZSIgaG9yaXotYWR2LXg9IjEwOTciIGQ9Ik0zNjUuNTY4IDYzMS4yOTZxMC00Ni4wODAtMzEuNzQ0LTc3LjgyNHQtNzcuODI0LTMyLjc2OC03Ny44MjQgMzIuNzY4LTMxLjc0NCA3Ny44MjQgMzEuNzQ0IDc2LjggNzcuODI0IDMyLjc2OCA3Ny44MjQtMzIuNzY4IDMxLjc0NC03Ni44ek05NTEuMjk2IDQxMS4xMzZ2LTI1NmgtODA0Ljg2NHYxMDkuNTY4bDE4Mi4yNzIgMTgzLjI5NiA5Mi4xNi05MS4xMzYgMjkxLjg0IDI5MS44NHpNMTAwNS41NjggODEzLjU2OGgtOTE0LjQzMnEtNy4xNjggMC0xMi4yODgtNS4xMnQtNi4xNDQtMTMuMzEydi02OTQuMjcycTAtOC4xOTIgNi4xNDQtMTMuMzEydDEyLjI4OC01LjEyaDkxNC40MzJxNy4xNjggMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnY2OTQuMjcycTAgNy4xNjgtNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyek0xMDk2LjcwNCA3OTUuMTM2di02OTQuMjcycTAtMzcuODg4LTI2LjYyNC02NC41MTJ0LTY0LjUxMi0yNy42NDhoLTkxNC40MzJxLTM2Ljg2NCAwLTY0LjUxMiAyNy42NDh0LTI2LjYyNCA2NC41MTJ2Njk0LjI3MnEwIDM3Ljg4OCAyNi42MjQgNjQuNTEydDY0LjUxMiAyNy42NDhoOTE0LjQzMnEzNy44ODggMCA2NC41MTItMjcuNjQ4dDI2LjYyNC02NC41MTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTk7IiBnbHlwaC1uYW1lPSJmaWxlLWltYWdlIiBob3Jpei1hZHYteD0iODc4IiBkPSJNODM4LjY1NiA3NDIuOTEycTE2LjM4NC0xNi4zODQgMjcuNjQ4LTQzLjAwOHQxMS4yNjQtNTEuMnYtNjU3LjQwOHEwLTIzLjU1Mi0xNS4zNi0zOC45MTJ0LTM4LjkxMi0xNi4zODRoLTc2OHEtMjMuNTUyIDAtMzguOTEyIDE2LjM4NHQtMTYuMzg0IDM4LjkxMnY5MTMuNDA4cTAgMjMuNTUyIDE2LjM4NCAzOC45MTJ0MzguOTEyIDE2LjM4NGg1MTJxMjIuNTI4IDAgNTAuMTc2LTExLjI2NHQ0My4wMDgtMjcuNjQ4ek01ODQuNzA0IDg4Mi4xNzZ2LTIxNS4wNDBoMjE1LjA0MHEtNS4xMiAxNi4zODQtMTIuMjg4IDIzLjU1MmwtMTc5LjIgMTc5LjJxLTYuMTQ0IDcuMTY4LTIzLjU1MiAxMi4yODh6TTgwNC44NjQgOC43MDR2NTg1LjcyOGgtMjM3LjU2OHEtMjMuNTUyIDAtMzguOTEyIDE1LjM2dC0xNi4zODQgMzguOTEydjIzOC41OTJoLTQzOS4yOTZ2LTg3OC41OTJoNzMyLjE2ek03MzEuMTM2IDI2NC43MDR2LTE4Mi4yNzJoLTU4NC43MDR2MTA5LjU2OGwxMDkuNTY4IDEwOS41NjggNzIuNzA0LTcyLjcwNCAyMjAuMTYgMjE5LjEzNnpNMjU2IDM3NS4yOTZxLTQ2LjA4MCAwLTc3LjgyNCAzMS43NDR0LTMxLjc0NCA3Ny44MjQgMzEuNzQ0IDc3LjgyNCA3Ny44MjQgMzEuNzQ0IDc3LjgyNC0zMS43NDQgMzEuNzQ0LTc3LjgyNC0zMS43NDQtNzcuODI0LTc3LjgyNC0zMS43NDR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MWE7IiBnbHlwaC1uYW1lPSJjdyIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTg3Ny41NjggODEzLjU2OHYtMjU2cTAtMTQuMzM2LTEwLjI0LTI1LjZ0LTI2LjYyNC0xMS4yNjRoLTI1NnEtMjMuNTUyIDAtMzIuNzY4IDIzLjU1Mi0xMC4yNCAyMi41MjggNy4xNjggMzguOTEybDc4Ljg0OCA3OC44NDhxLTgzLjk2OCA3OC44NDgtMTk4LjY1NiA3OC44NDgtNTkuMzkyIDAtMTEzLjY2NC0yMy41NTJ0LTkzLjE4NC02Mi40NjQtNjMuNDg4LTkzLjE4NC0yMi41MjgtMTEzLjY2NCAyMi41MjgtMTEzLjY2NCA2My40ODgtOTMuMTg0IDkzLjE4NC02Mi40NjQgMTEzLjY2NC0yMy41NTJxNjcuNTg0IDAgMTI4IDI5LjY5NnQxMDIuNCA4My45NjhxNC4wOTYgNi4xNDQgMTMuMzEyIDcuMTY4IDguMTkyIDAgMTQuMzM2LTUuMTJsNzcuODI0LTc4Ljg0OHE1LjEyLTQuMDk2IDYuMTQ0LTExLjI2NHQtNS4xMi0xMy4zMTJxLTYxLjQ0LTc1Ljc3Ni0xNTAuNTI4LTExNi43MzZ0LTE4Ni4zNjgtNDEuOTg0cS04OS4wODggMC0xNzEuMDA4IDM0LjgxNnQtMTM5LjI2NCA5NC4yMDgtOTQuMjA4IDE0MC4yODgtMzQuODE2IDE2OS45ODQgMzQuODE2IDE2OS45ODQgOTQuMjA4IDE0MC4yODggMTM5LjI2NCA5NC4yMDggMTcxLjAwOCAzNC44MTZxODMuOTY4IDAgMTYxLjc5Mi0zMS43NDR0MTQwLjI4OC05MC4xMTJsNzMuNzI4IDczLjcyOHExNi4zODQgMTguNDMyIDM5LjkzNiA4LjE5MiAyMi41MjgtOS4yMTYgMjIuNTI4LTMzLjc5MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxYjsiIGdseXBoLW5hbWU9ImNjdyIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTg3Ny41NjggNDQ4cTAtODkuMDg4LTM0LjgxNi0xNjkuOTg0dC05My4xODQtMTQwLjI4OC0xNDAuMjg4LTk0LjIwOC0xNjkuOTg0LTM0LjgxNnEtOTguMzA0IDAtMTg3LjM5MiA0MS45ODR0LTE1MC41MjggMTE2LjczNnEtNC4wOTYgNi4xNDQtNC4wOTYgMTMuMzEydDUuMTIgMTEuMjY0bDc3LjgyNCA3OC44NDhxNi4xNDQgNS4xMiAxNC4zMzYgNS4xMiA5LjIxNi0xLjAyNCAxMy4zMTItNy4xNjggNDEuOTg0LTU0LjI3MiAxMDIuNC04My45Njh0MTI5LjAyNC0yOS42OTZxNTkuMzkyIDAgMTEyLjY0IDIzLjU1MnQ5NC4yMDggNjIuNDY0IDYyLjQ2NCA5My4xODQgMjIuNTI4IDExMy42NjQtMjIuNTI4IDExMy42NjQtNjIuNDY0IDkzLjE4NC05NC4yMDggNjIuNDY0LTExMi42NCAyMy41NTJxLTU2LjMyIDAtMTA3LjUyLTIwLjQ4dC05Mi4xNi01OC4zNjhsNzguODQ4LTc4Ljg0OHExNy40MDgtMTYuMzg0IDguMTkyLTM4LjkxMi0xMC4yNC0yMy41NTItMzMuNzkyLTIzLjU1MmgtMjU2cS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnYyNTZxMCAyNC41NzYgMjIuNTI4IDMzLjc5MiAyMi41MjggMTAuMjQgMzkuOTM2LTguMTkybDczLjcyOC03My43MjhxNjEuNDQgNTguMzY4IDE0MC4yODggOTAuMTEydDE2Mi44MTYgMzEuNzQ0cTg5LjA4OCAwIDE2OS45ODQtMzQuODE2dDE0MC4yODgtOTQuMjA4IDkzLjE4NC0xNDAuMjg4IDM0LjgxNi0xNjkuOTg0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0ib21lZ2EiIGQ9Ik03MDQgNjRoMjU2bDY0IDEyOHYtMjU2aC0zODR2MjE0LjIxNGMxMzEuMTEyIDU2LjQ4NCAyMjQgMTk3LjE2MiAyMjQgMzYxLjc4NiAwIDIxNC40MzItMTU3LjU5OCAzODIuMjY2LTM1MiAzODIuMjY2LTE5NC40MDYgMC0zNTItMTY3LjgzMi0zNTItMzgyLjI2NiAwLTE2NC42MjQgOTIuODg2LTMwNS4zMDIgMjI0LTM2MS43ODZ2LTIxNC4yMTRoLTM4NHYyNTZsNjQtMTI4aDI1NnYzMi41OWMtMTg3LjYzIDY2LjQ2LTMyMCAyMjcuNDAyLTMyMCA0MTUuNDEgMCAyNDcuNDI0IDIyOS4yMyA0NDggNTEyIDQ0OHM1MTItMjAwLjU3NiA1MTItNDQ4YzAtMTg4LjAwOC0xMzIuMzctMzQ4Ljk1LTMyMC00MTUuNDF2LTMyLjU5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTAxOyIgZ2x5cGgtbmFtZT0iY2FuY2VsLWNpcmNsZSIgZD0iTTUxMiA5NjBjLTI4Mi43NyAwLTUxMi0yMjkuMjMtNTEyLTUxMnMyMjkuMjMtNTEyIDUxMi01MTIgNTEyIDIyOS4yMyA1MTIgNTEyLTIyOS4yMyA1MTItNTEyIDUxMnpNNTEyIDMyYy0yMjkuNzUgMC00MTYgMTg2LjI1LTQxNiA0MTZzMTg2LjI1IDQxNiA0MTYgNDE2IDQxNi0xODYuMjUgNDE2LTQxNi0xODYuMjUtNDE2LTQxNi00MTZ6TTY3MiA3MDRsLTE2MC0xNjAtMTYwIDE2MC05Ni05NiAxNjAtMTYwLTE2MC0xNjAgOTYtOTYgMTYwIDE2MCAxNjAtMTYwIDk2IDk2LTE2MCAxNjAgMTYwIDE2MHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9Im5ld3NwYXBlciIgZD0iTTg5NiA3MDR2MTI4aC04OTZ2LTcwNGMwLTM1LjM0NiAyOC42NTQtNjQgNjQtNjRoODY0YzUzLjAyMiAwIDk2IDQyLjk3OCA5NiA5NnY1NDRoLTEyOHpNODMyIDEyOGgtNzY4djY0MGg3Njh2LTY0MHpNMTI4IDY0MGg2NDB2LTY0aC02NDB6TTUxMiA1MTJoMjU2di02NGgtMjU2ek01MTIgMzg0aDI1NnYtNjRoLTI1NnpNNTEyIDI1NmgxOTJ2LTY0aC0xOTJ6TTEyOCA1MTJoMzIwdi0zMjBoLTMyMHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZjsiIGdseXBoLW5hbWU9ImNhbWVyYSIgZD0iTTMwNCAzNTJjMC0xMTQuODc2IDkzLjEyNC0yMDggMjA4LTIwOHMyMDggOTMuMTI0IDIwOCAyMDgtOTMuMTI0IDIwOC0yMDggMjA4LTIwOC05My4xMjQtMjA4LTIwOHpNOTYwIDcwNGgtMjI0Yy0xNiA2NC0zMiAxMjgtOTYgMTI4aC0yNTZjLTY0IDAtODAtNjQtOTYtMTI4aC0yMjRjLTM1LjIgMC02NC0yOC44LTY0LTY0di01NzZjMC0zNS4yIDI4LjgtNjQgNjQtNjRoODk2YzM1LjIgMCA2NCAyOC44IDY0IDY0djU3NmMwIDM1LjItMjguOCA2NC02NCA2NHpNNTEyIDY4Yy0xNTYuODUgMC0yODQgMTI3LjE0OC0yODQgMjg0IDAgMTU2Ljg1IDEyNy4xNSAyODQgMjg0IDI4NCAxNTYuODUyIDAgMjg0LTEyNy4xNSAyODQtMjg0IDAtMTU2Ljg1Mi0xMjcuMTQ2LTI4NC0yODQtMjg0ek05NjAgNTEyaC0xMjh2NjRoMTI4di02NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMTsiIGdseXBoLW5hbWU9Im11c2ljIiBkPSJNOTYwIDk2MGg2NHYtNzM2YzAtODguMzY2LTEwMC4yOS0xNjAtMjI0LTE2MHMtMjI0IDcxLjYzNC0yMjQgMTYwYzAgODguMzY4IDEwMC4yOSAxNjAgMjI0IDE2MCA2Mi42ODQgMCAxMTkuMzQyLTE4LjQgMTYwLTQ4LjA0MHYzNjguMDQwbC01MTItMTEzLjc3OHYtNDk0LjIyMmMwLTg4LjM2Ni0xMDAuMjg4LTE2MC0yMjQtMTYwcy0yMjQgNzEuNjM0LTIyNCAxNjBjMCA4OC4zNjggMTAwLjI4OCAxNjAgMjI0IDE2MCA2Mi42ODQgMCAxMTkuMzQyLTE4LjQgMTYwLTQ4LjA0MHY2MjQuMDQwbDU3NiAxMjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTI7IiBnbHlwaC1uYW1lPSJwbGF5IiBkPSJNOTgxLjE4OCA3OTkuODkyYy0xNDMuNjMyIDIwLjY1LTMwMi4zMzIgMzIuMTA4LTQ2OS4xODYgMzIuMTA4LTE2Ni44NiAwLTMyNS41NTYtMTEuNDU4LTQ2OS4xOTQtMzIuMTA4LTI3LjUzLTEwNy43MjYtNDIuODA4LTIyNi43NS00Mi44MDgtMzUxLjg5MiAwLTEyNS4xNCAxNS4yNzgtMjQ0LjE2NiA0Mi44MDgtMzUxLjg5IDE0My42MzgtMjAuNjUyIDMwMi4zMzYtMzIuMTEgNDY5LjE5NC0zMi4xMSAxNjYuODU0IDAgMzI1LjU1MiAxMS40NTggNDY5LjE4NiAzMi4xMSAyNy41MzIgMTA3LjcyNCA0Mi44MTIgMjI2Ljc1IDQyLjgxMiAzNTEuODkgMCAxMjUuMTQyLTE1LjI4IDI0NC4xNjYtNDIuODEyIDM1MS44OTJ6TTM4NC4wMDIgMjU2djM4NGwzMjAtMTkyLTMyMC0xOTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTQ7IiBnbHlwaC1uYW1lPSJ2aWRlby1jYW1lcmEiIGQ9Ik0zODQgNjcyYzAgODguMzY2IDcxLjYzNCAxNjAgMTYwIDE2MHMxNjAtNzEuNjM0IDE2MC0xNjBjMC04OC4zNjYtNzEuNjM0LTE2MC0xNjAtMTYwcy0xNjAgNzEuNjM0LTE2MCAxNjB6TTAgNjcyYzAgODguMzY2IDcxLjYzNCAxNjAgMTYwIDE2MHMxNjAtNzEuNjM0IDE2MC0xNjBjMC04OC4zNjYtNzEuNjM0LTE2MC0xNjAtMTYwcy0xNjAgNzEuNjM0LTE2MCAxNjB6TTc2OCAzNTJ2OTZjMCAzNS4yLTI4LjggNjQtNjQgNjRoLTY0MGMtMzUuMiAwLTY0LTI4LjgtNjQtNjR2LTMyMGMwLTM1LjIgMjguOC02NCA2NC02NGg2NDBjMzUuMiAwIDY0IDI4LjggNjQgNjR2OTZsMjU2LTE2MHY0NDhsLTI1Ni0xNjB6TTY0MCAxOTJoLTUxMnYxOTJoNTEydi0xOTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MmI7IiBnbHlwaC1uYW1lPSJmaWxlLXppcCIgZD0iTTkxNy44MDYgNzMwLjkyNGMtMjIuMjA4IDMwLjI5Mi01My4xNzQgNjUuNy04Ny4xNzggOTkuNzA0cy02OS40MTIgNjQuOTY0LTk5LjcwNCA4Ny4xNzhjLTUxLjU3NCAzNy44Mi03Ni41OTIgNDIuMTk0LTkwLjkyNCA0Mi4xOTRoLTQ5NmMtNDQuMTEyIDAtODAtMzUuODg4LTgwLTgwdi04NjRjMC00NC4xMTIgMzUuODg0LTgwIDgwLTgwaDczNmM0NC4xMTIgMCA4MCAzNS44ODggODAgODB2NjI0YzAgMTQuMzMyLTQuMzcyIDM5LjM1LTQyLjE5NCA5MC45MjR2MCAwek03ODUuMzc0IDc4NS4zNzRjMzAuNy0zMC43IDU0LjgtNTguMzk4IDcyLjU4LTgxLjM3NGgtMTUzLjk1NHYxNTMuOTQ2YzIyLjk4LTE3Ljc4IDUwLjY3OC00MS44NzggODEuMzc0LTcyLjU3MnYwIDB6TTg5NiAxNmMwLTguNjcyLTcuMzI4LTE2LTE2LTE2aC03MzZjLTguNjcyIDAtMTYgNy4zMjgtMTYgMTZ2ODY0YzAgOC42NzIgNy4zMjggMTYgMTYgMTYgMCAwIDQ5NS45NTYgMC4wMDIgNDk2IDB2LTIyNGMwLTE3LjY3MiAxNC4zMjItMzIgMzItMzJoMjI0di02MjR6TTI1NiA4OTZoMTI4di02NGgtMTI4djY0ek0zODQgODMyaDEyOHYtNjRoLTEyOHY2NHpNMjU2IDc2OGgxMjh2LTY0aC0xMjh2NjR6TTM4NCA3MDRoMTI4di02NGgtMTI4djY0ek0yNTYgNjQwaDEyOHYtNjRoLTEyOHY2NHpNMzg0IDU3NmgxMjh2LTY0aC0xMjh2NjR6TTI1NiA1MTJoMTI4di02NGgtMTI4djY0ek0zODQgNDQ4aDEyOHYtNjRoLTEyOHY2NHpNMjU2IDExMmMwLTI2LjQgMjEuNi00OCA0OC00OGgxNjBjMjYuNCAwIDQ4IDIxLjYgNDggNDh2MTYwYzAgMjYuNC0yMS42IDQ4LTQ4IDQ4aC04MHY2NGgtMTI4di0yNzJ6TTQ0OCAxOTJ2LTY0aC0xMjh2NjRoMTI4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTJlOyIgZ2x5cGgtbmFtZT0ic3RhY2siIGQ9Ik0xMDI0IDY0MGwtNTEyIDI1Ni01MTItMjU2IDUxMi0yNTYgNTEyIDI1NnpNNTEyIDgxMS4wMzBsMzQyLjA1OC0xNzEuMDMwLTM0Mi4wNTgtMTcxLjAzMC0zNDIuMDU4IDE3MS4wMzAgMzQyLjA1OCAxNzEuMDMwek05MjEuNDQ0IDQ5OS4yNzhsMTAyLjU1Ni01MS4yNzgtNTEyLTI1Ni01MTIgMjU2IDEwMi41NTYgNTEuMjc4IDQwOS40NDQtMjA0LjcyMnpNOTIxLjQ0NCAzMDcuMjc4bDEwMi41NTYtNTEuMjc4LTUxMi0yNTYtNTEyIDI1NiAxMDIuNTU2IDUxLjI3OCA0MDkuNDQ0LTIwNC43MjJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5M2Y7IiBnbHlwaC1uYW1lPSJjcmVkaXQtY2FyZCIgZD0iTTkyOCA4MzJoLTgzMmMtNTIuOCAwLTk2LTQzLjItOTYtOTZ2LTU3NmMwLTUyLjggNDMuMi05NiA5Ni05Nmg4MzJjNTIuOCAwIDk2IDQzLjIgOTYgOTZ2NTc2YzAgNTIuOC00My4yIDk2LTk2IDk2ek05NiA3NjhoODMyYzE3LjM0NiAwIDMyLTE0LjY1NCAzMi0zMnYtOTZoLTg5NnY5NmMwIDE3LjM0NiAxNC42NTQgMzIgMzIgMzJ6TTkyOCAxMjhoLTgzMmMtMTcuMzQ2IDAtMzIgMTQuNjU0LTMyIDMydjI4OGg4OTZ2LTI4OGMwLTE3LjM0Ni0xNC42NTQtMzItMzItMzJ6TTEyOCAzMjBoNjR2LTEyOGgtNjR6TTI1NiAzMjBoNjR2LTEyOGgtNjR6TTM4NCAzMjBoNjR2LTEyOGgtNjR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5NDQ7IiBnbHlwaC1uYW1lPSJhZGRyZXNzLWJvb2siIGQ9Ik0xOTIgOTYwdi0xMDI0aDc2OHYxMDI0aC03Njh6TTU3NiA3MDMuNjdjNzAuNTEgMCAxMjcuNjctNTcuMTYgMTI3LjY3LTEyNy42N3MtNTcuMTYtMTI3LjY3LTEyNy42Ny0xMjcuNjctMTI3LjY3IDU3LjE2LTEyNy42NyAxMjcuNjcgNTcuMTYgMTI3LjY3IDEyNy42NyAxMjcuNjd2MHpNNzY4IDE5MmgtMzg0djY0YzAgNzAuNjk2IDU3LjMwNiAxMjggMTI4IDEyOHYwaDEyOGM3MC42OTYgMCAxMjgtNTcuMzA0IDEyOC0xMjh2LTY0ek02NCA4OTZoOTZ2LTE5MmgtOTZ2MTkyek02NCA2NDBoOTZ2LTE5MmgtOTZ2MTkyek02NCAzODRoOTZ2LTE5MmgtOTZ2MTkyek02NCAxMjhoOTZ2LTE5MmgtOTZ2MTkyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTQ1OyIgZ2x5cGgtbmFtZT0iZW52ZWxvcCIgZD0iTTkyOCA4MzJoLTgzMmMtNTIuOCAwLTk2LTQzLjItOTYtOTZ2LTY0MGMwLTUyLjggNDMuMi05NiA5Ni05Nmg4MzJjNTIuOCAwIDk2IDQzLjIgOTYgOTZ2NjQwYzAgNTIuOC00My4yIDk2LTk2IDk2ek0zOTguNzQgNDA5LjYyOGwtMjcwLjc0LTIxMC44OTJ2NTAxLjY0MmwyNzAuNzQtMjkwLjc1ek0xNzYuMzggNzA0aDY3MS4yNGwtMzM1LjYyLTI1Mi0zMzUuNjIgMjUyek00MDkuMjg4IDM5OC4zMDJsMTAyLjcxMi0xMTAuMzAyIDEwMi43MSAxMTAuMzAyIDIxMC41NTQtMjcwLjMwMmgtNjI2LjUyOGwyMTAuNTUyIDI3MC4zMDJ6TTYyNS4yNiA0MDkuNjI4bDI3MC43NCAyOTAuNzV2LTUwMS42NDJsLTI3MC43NCAyMTAuODkyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTQ3OyIgZ2x5cGgtbmFtZT0ibG9jYXRpb24iIGQ9Ik01MTIgOTYwYy0xNzYuNzMyIDAtMzIwLTE0My4yNjgtMzIwLTMyMCAwLTMyMCAzMjAtNzA0IDMyMC03MDRzMzIwIDM4NCAzMjAgNzA0YzAgMTc2LjczMi0xNDMuMjcgMzIwLTMyMCAzMjB6TTUxMiA0NDhjLTEwNi4wNDAgMC0xOTIgODUuOTYtMTkyIDE5MnM4NS45NiAxOTIgMTkyIDE5MiAxOTItODUuOTYgMTkyLTE5Mi04NS45Ni0xOTItMTkyLTE5MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk1YzsiIGdseXBoLW5hbWU9ImRyYXdlciIgZD0iTTEwMTYuOTg4IDMwNy45OWwtMjU2IDMyMGMtNi4wNzQgNy41OTItMTUuMjY2IDEyLjAxMC0yNC45ODggMTIuMDEwaC00NDhjLTkuNzIgMC0xOC45MTYtNC40MTgtMjQuOTg4LTEyLjAxMGwtMjU2LTMyMGMtNC41MzgtNS42NzQtNy4wMTItMTIuNzI0LTcuMDEyLTE5Ljk5di0yODhjMC0zNS4zNDYgMjguNjU0LTY0IDY0LTY0aDg5NmMzNS4zNDggMCA2NCAyOC42NTQgNjQgNjR2Mjg4YzAgNy4yNjYtMi40NzIgMTQuMzE2LTcuMDEyIDE5Ljk5ek05NjAgMjU2aC0yMjRsLTEyOC0xMjhoLTE5MmwtMTI4IDEyOGgtMjI0djIwLjc3NmwyMzkuMzggMjk5LjIyNGg0MTcuMjRsMjM5LjM4LTI5OS4yMjR2LTIwLjc3NnpNNzM2IDQ0OGgtNDQ4Yy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJzMTQuMzI4IDMyIDMyIDMyaDQ0OGMxNy42NzQgMCAzMi0xNC4zMjggMzItMzJzLTE0LjMyNi0zMi0zMi0zMnpNODAwIDMyMGgtNTc2Yy0xNy42NzIgMC0zMiAxNC4zMjYtMzIgMzJzMTQuMzI4IDMyIDMyIDMyaDU3NmMxNy42NzQgMCAzMi0xNC4zMjYgMzItMzJzLTE0LjMyNi0zMi0zMi0zMnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk2MDsiIGdseXBoLW5hbWU9ImRvd25sb2FkIiBkPSJNNTEyIDM4NGwyNTYgMjU2aC0xOTJ2MjU2aC0xMjh2LTI1NmgtMTkyek03NDQuNzI2IDQ4OC43MjhsLTcxLjc0LTcxLjc0MiAyNjAuMDgwLTk2Ljk4Ni00MjEuMDY2LTE1Ny4wMTgtNDIxLjA2NiAxNTcuMDE4IDI2MC4wODAgOTYuOTg2LTcxLjc0MiA3MS43NDItMjc5LjI3Mi0xMDQuNzI4di0yNTZsNTEyLTE5MiA1MTIgMTkydjI1NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk2MTsiIGdseXBoLW5hbWU9InVwbG9hZCIgZD0iTTQ0OCAzODRoMTI4djI1NmgxOTJsLTI1NiAyNTYtMjU2LTI1NmgxOTJ6TTY0MCA1Mjh2LTk4LjcxMmwyOTMuMDY2LTEwOS4yODgtNDIxLjA2Ni0xNTcuMDE4LTQyMS4wNjYgMTU3LjAxOCAyOTMuMDY2IDEwOS4yODh2OTguNzEybC0zODQtMTQ0di0yNTZsNTEyLTE5MiA1MTIgMTkydjI1NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk3NzsiIGdseXBoLW5hbWU9InF1b3Rlcy1sZWZ0IiBkPSJNMjI1IDUxMmMxMjMuNzEyIDAgMjI0LTEwMC4yOSAyMjQtMjI0IDAtMTIzLjcxMi0xMDAuMjg4LTIyNC0yMjQtMjI0cy0yMjQgMTAwLjI4OC0yMjQgMjI0bC0xIDMyYzAgMjQ3LjQyNCAyMDAuNTc2IDQ0OCA0NDggNDQ4di0xMjhjLTg1LjQ3NCAwLTE2NS44MzQtMzMuMjg2LTIyNi4yNzQtOTMuNzI2LTExLjYzNC0xMS42MzYtMjIuMjUyLTI0LjAxNi0zMS44My0zNy4wMjAgMTEuNDM4IDEuOCAyMy4xNiAyLjc0NiAzNS4xMDQgMi43NDZ6TTgwMSA1MTJjMTIzLjcxIDAgMjI0LTEwMC4yOSAyMjQtMjI0IDAtMTIzLjcxMi0xMDAuMjktMjI0LTIyNC0yMjRzLTIyNCAxMDAuMjg4LTIyNCAyMjRsLTEgMzJjMCAyNDcuNDI0IDIwMC41NzYgNDQ4IDQ0OCA0NDh2LTEyOGMtODUuNDc0IDAtMTY1LjgzNC0zMy4yODYtMjI2LjI3NC05My43MjYtMTEuNjM2LTExLjYzNi0yMi4yNTQtMjQuMDE2LTMxLjgzMi0zNy4wMjAgMTEuNDQgMS44IDIzLjE2IDIuNzQ2IDM1LjEwNiAyLjc0NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk4YjsiIGdseXBoLW5hbWU9ImVubGFyZ2UyIiBkPSJNMTAyNCA5NjB2LTQxNmwtMTYwIDE2MC0xOTItMTkyLTk2IDk2IDE5MiAxOTItMTYwIDE2MHpNNDQ4IDI4OGwtMTkyLTE5MiAxNjAtMTYwaC00MTZ2NDE2bDE2MC0xNjAgMTkyIDE5MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk4YzsiIGdseXBoLW5hbWU9InNocmluazIiIGQ9Ik00NDggMzg0di00MTZsLTE2MCAxNjAtMTkyLTE5Mi05NiA5NiAxOTIgMTkyLTE2MCAxNjB6TTEwMjQgODY0bC0xOTItMTkyIDE2MC0xNjBoLTQxNnY0MTZsMTYwLTE2MCAxOTIgMTkyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOThmOyIgZ2x5cGgtbmFtZT0ibG9jayIgZD0iTTU5MiA1MTJoLTE2djE5MmMwIDEwNS44Ny04Ni4xMyAxOTItMTkyIDE5MmgtMTI4Yy0xMDUuODcgMC0xOTItODYuMTMtMTkyLTE5MnYtMTkyaC0xNmMtMjYuNCAwLTQ4LTIxLjYtNDgtNDh2LTQ4MGMwLTI2LjQgMjEuNi00OCA0OC00OGg1NDRjMjYuNCAwIDQ4IDIxLjYgNDggNDh2NDgwYzAgMjYuNC0yMS42IDQ4LTQ4IDQ4ek0xOTIgNzA0YzAgMzUuMjkgMjguNzEgNjQgNjQgNjRoMTI4YzM1LjI5IDAgNjQtMjguNzEgNjQtNjR2LTE5MmgtMjU2djE5MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTk5MDsiIGdseXBoLW5hbWU9InVubG9ja2VkIiBkPSJNNzY4IDg5NmMxMDUuODcgMCAxOTItODYuMTMgMTkyLTE5MnYtMTkyaC0xMjh2MTkyYzAgMzUuMjktMjguNzEgNjQtNjQgNjRoLTEyOGMtMzUuMjkgMC02NC0yOC43MS02NC02NHYtMTkyaDE2YzI2LjQgMCA0OC0yMS42IDQ4LTQ4di00ODBjMC0yNi40LTIxLjYtNDgtNDgtNDhoLTU0NGMtMjYuNCAwLTQ4IDIxLjYtNDggNDh2NDgwYzAgMjYuNCAyMS42IDQ4IDQ4IDQ4aDQwMHYxOTJjMCAxMDUuODcgODYuMTMgMTkyIDE5MiAxOTJoMTI4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTkxOyIgZ2x5cGgtbmFtZT0id3JlbmNoIiBkPSJNMTAwMi45MzQgMTQyLjEyNGwtNDYwLjU1MiAzOTQuNzZjMjEuNDQ4IDQwLjI5OCAzMy42MTggODYuMjgyIDMzLjYxOCAxMzUuMTE2IDAgMTU5LjA1OC0xMjguOTQyIDI4OC0yODggMjg4LTI5LjA5NCAwLTU3LjE3Mi00LjMzMi04My42NDYtMTIuMzU0bDE2Ni4zOS0xNjYuMzljMjQuODktMjQuODkgMjQuODktNjUuNjIgMC05MC41MWwtMTAxLjQ5LTEwMS40OWMtMjQuODktMjQuODktNjUuNjItMjQuODktOTAuNTEgMGwtMTY2LjM5IDE2Ni4zOWMtOC4wMjItMjYuNDc0LTEyLjM1NC01NC41NTItMTIuMzU0LTgzLjY0NiAwLTE1OS4wNTggMTI4Ljk0Mi0yODggMjg4LTI4OCA0OC44MzQgMCA5NC44MTggMTIuMTcgMTM1LjExNiAzMy42MmwzOTQuNzYtNDYwLjU1MmMyMi45MDgtMjYuNzI0IDYyLjAxNi0yOC4yMjYgODYuOTA0LTMuMzM4bDEwMS40OTIgMTAxLjQ5MmMyNC44ODggMjQuODg4IDIzLjM4NiA2My45OTQtMy4zMzggODYuOTAyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOWNlOyIgZ2x5cGgtbmFtZT0iZXllIiBkPSJNNTEyIDc2OGMtMjIzLjMxOCAwLTQxNi44ODItMTMwLjA0Mi01MTItMzIwIDk1LjExOC0xODkuOTU4IDI4OC42ODItMzIwIDUxMi0zMjAgMjIzLjMxMiAwIDQxNi44NzYgMTMwLjA0MiA1MTIgMzIwLTk1LjExNiAxODkuOTU4LTI4OC42ODggMzIwLTUxMiAzMjB6TTc2NC40NSA1OTguMjk2YzYwLjE2Mi0zOC4zNzQgMTExLjE0Mi04OS43NzQgMTQ5LjQzNC0xNTAuMjk2LTM4LjI5Mi02MC41MjItODkuMjc0LTExMS45MjItMTQ5LjQzNi0xNTAuMjk2LTc1LjU5NC00OC4yMTgtMTYyLjg5LTczLjcwNC0yNTIuNDQ4LTczLjcwNC04OS41NiAwLTE3Ni44NTggMjUuNDg2LTI1Mi40NTIgNzMuNzA0LTYwLjE1OCAzOC4zNzItMTExLjEzOCA4OS43NzItMTQ5LjQzMiAxNTAuMjk2IDM4LjI5MiA2MC41MjQgODkuMjc0IDExMS45MjQgMTQ5LjQzNCAxNTAuMjk2IDMuOTE4IDIuNSA3Ljg3NiA0LjkyMiAxMS44NiA3LjMtOS45Ni0yNy4zMjgtMTUuNDEtNTYuODIyLTE1LjQxLTg3LjU5NiAwLTE0MS4zODIgMTE0LjYxNi0yNTYgMjU2LTI1NiAxNDEuMzgyIDAgMjU2IDExNC42MTggMjU2IDI1NiAwIDMwLjc3NC01LjQ1MiA2MC4yNjgtMTUuNDA4IDg3LjU5OCAzLjk3OC0yLjM3OCA3LjkzOC00LjgwMiAxMS44NTgtNy4zMDJ2MHpNNTEyIDU0NGMwLTUzLjAyMC00Mi45OC05Ni05Ni05NnMtOTYgNDIuOTgtOTYgOTYgNDIuOTggOTYgOTYgOTYgOTYtNDIuOTgyIDk2LTk2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOWQxOyIgZ2x5cGgtbmFtZT0iZXllLWJsb2NrZWQiIGQ9Ik05NDUuOTQyIDk0NS45NDJjLTE4Ljc0NiAxOC43NDQtNDkuMTM2IDE4Ljc0NC02Ny44ODIgMGwtMjAyLjE2NC0yMDIuMTY0Yy01MS45MzggMTUuNzU0LTEwNi45NDggMjQuMjIyLTE2My44OTYgMjQuMjIyLTIyMy4zMTggMC00MTYuODgyLTEzMC4wNDItNTEyLTMyMCA0MS4xMjItODIuMTI0IDEwMC42NDgtMTUzLjA0MCAxNzMuMDIyLTIwNy4wOTZsLTE1OC45NjItMTU4Ljk2MmMtMTguNzQ2LTE4Ljc0Ni0xOC43NDYtNDkuMTM2IDAtNjcuODgyIDkuMzcyLTkuMzc0IDIxLjY1Ni0xNC4wNjAgMzMuOTQtMTQuMDYwczI0LjU2OCA0LjY4NiAzMy45NDIgMTQuMDU4bDg2NCA4NjRjMTguNzQ0IDE4Ljc0NiAxOC43NDQgNDkuMTM4IDAgNjcuODg0ek00MTYgNjQwYzQyLjI0IDAgNzguMDgyLTI3LjI5NCA5MC45Mi02NS4xOTZsLTEyMS43MjQtMTIxLjcyNGMtMzcuOTAyIDEyLjgzOC02NS4xOTYgNDguNjgtNjUuMTk2IDkwLjkyIDAgNTMuMDIwIDQyLjk4IDk2IDk2IDk2ek0xMTAuMTE2IDQ0OGMzOC4yOTIgNjAuNTI0IDg5LjI3NCAxMTEuOTI0IDE0OS40MzQgMTUwLjI5NiAzLjkxOCAyLjUgNy44NzYgNC45MjIgMTEuODYyIDcuMy05Ljk2Mi0yNy4zMjgtMTUuNDEyLTU2LjgyMi0xNS40MTItODcuNTk2IDAtNTQuODkgMTcuMjg2LTEwNS43MzggNDYuNy0xNDcuNDE4bC02MC45MjQtNjAuOTI0Yy01Mi40NDYgMzYuODQyLTk3LjIwMiA4My44ODItMTMxLjY2IDEzOC4zNDJ6TTc2OCA1MThjMCAyNy4xNjYtNC4yNTYgNTMuMzM0LTEyLjEwMiA3Ny44OThsLTMyMS44MDgtMzIxLjgwOGMyNC41NjgtNy44NDIgNTAuNzQyLTEyLjA5MCA3Ny45MS0xMi4wOTAgMTQxLjM4MiAwIDI1NiAxMTQuNjE4IDI1NiAyNTZ6TTgzMC4wMjYgNjcwLjAyNmwtNjkuMzYyLTY5LjM2MmMxLjI2NC0wLjc4NiAyLjUzLTEuNTY4IDMuNzg2LTIuMzY4IDYwLjE2Mi0zOC4zNzQgMTExLjE0Mi04OS43NzQgMTQ5LjQzNC0xNTAuMjk2LTM4LjI5Mi02MC41MjItODkuMjc0LTExMS45MjItMTQ5LjQzNi0xNTAuMjk2LTc1LjU5NC00OC4yMTgtMTYyLjg5LTczLjcwNC0yNTIuNDQ4LTczLjcwNC0zOC42NjQgMC03Ni45MDIgNC43Ni0xMTMuOTYyIDE0LjA0MGwtNzYuODk0LTc2Ljg5NGM1OS43MTgtMjEuNDYyIDEyMy45NS0zMy4xNDYgMTkwLjg1Ni0zMy4xNDYgMjIzLjMxIDAgNDE2Ljg3NiAxMzAuMDQyIDUxMiAzMjAtNDUuMDIyIDg5LjkxNi0xMTIuMTE4IDE2Ni4zOTYtMTkzLjk3NCAyMjIuMDI2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOWRmOyIgZ2x5cGgtbmFtZT0iaGFwcHkiIGQ9Ik01MTItNjRjMjgyLjc3IDAgNTEyIDIyOS4yMyA1MTIgNTEycy0yMjkuMjMgNTEyLTUxMiA1MTItNTEyLTIyOS4yMy01MTItNTEyIDIyOS4yMy01MTIgNTEyLTUxMnpNNTEyIDg2NGMyMjkuNzUgMCA0MTYtMTg2LjI1IDQxNi00MTZzLTE4Ni4yNS00MTYtNDE2LTQxNi00MTYgMTg2LjI1LTQxNiA0MTYgMTg2LjI1IDQxNiA0MTYgNDE2ek01MTIgMzYxLjI0YzExNS45NSAwIDIyNi4yMyAzMC44MDYgMzIwIDg0LjkyLTE0LjU3NC0xNzguNDM4LTE1My4xMjgtMzE4LjE2LTMyMC0zMTguMTYtMTY2Ljg2OCAwLTMwNS40MjIgMTM5Ljg3Mi0zMjAgMzE4LjMwNCA5My43Ny01NC4xMTIgMjA0LjA1MC04NS4wNjQgMzIwLTg1LjA2NHpNMjU2IDYwOGMwIDUzLjAxOSAyOC42NTQgOTYgNjQgOTZzNjQtNDIuOTgxIDY0LTk2YzAtNTMuMDE5LTI4LjY1NC05Ni02NC05NnMtNjQgNDIuOTgxLTY0IDk2ek02NDAgNjA4YzAgNTMuMDE5IDI4LjY1NCA5NiA2NCA5NnM2NC00Mi45ODEgNjQtOTZjMC01My4wMTktMjguNjU0LTk2LTY0LTk2cy02NCA0Mi45ODEtNjQgOTZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGVhNGU7IiBnbHlwaC1uYW1lPSJjb21tYW5kIiBkPSJNNzM2IDY0Yy04OC4yMjQgMC0xNjAgNzEuNzc2LTE2MCAxNjB2OTZoLTEyOHYtOTZjMC04OC4yMjQtNzEuNzc2LTE2MC0xNjAtMTYwcy0xNjAgNzEuNzc2LTE2MCAxNjAgNzEuNzc2IDE2MCAxNjAgMTYwaDk2djEyOGgtOTZjLTg4LjIyNCAwLTE2MCA3MS43NzYtMTYwIDE2MHM3MS43NzYgMTYwIDE2MCAxNjAgMTYwLTcxLjc3NiAxNjAtMTYwdi05NmgxMjh2OTZjMCA4OC4yMjQgNzEuNzc2IDE2MCAxNjAgMTYwczE2MC03MS43NzYgMTYwLTE2MC03MS43NzYtMTYwLTE2MC0xNjBoLTk2di0xMjhoOTZjODguMjI0IDAgMTYwLTcxLjc3NiAxNjAtMTYwcy03MS43NzQtMTYwLTE2MC0xNjB6TTY0MCAzMjB2LTk2YzAtNTIuOTM0IDQzLjA2Ni05NiA5Ni05NnM5NiA0My4wNjYgOTYgOTYtNDMuMDY2IDk2LTk2IDk2aC05NnpNMjg4IDMyMGMtNTIuOTM0IDAtOTYtNDMuMDY2LTk2LTk2czQzLjA2Ni05NiA5Ni05NiA5NiA0My4wNjYgOTYgOTZ2OTZoLTk2ek00NDggMzg0aDEyOHYxMjhoLTEyOHYtMTI4ek02NDAgNTc2aDk2YzUyLjkzNCAwIDk2IDQzLjA2NiA5NiA5NnMtNDMuMDY2IDk2LTk2IDk2LTk2LTQzLjA2Ni05Ni05NnYtOTZ6TTI4OCA3NjhjLTUyLjkzNCAwLTk2LTQzLjA2Ni05Ni05NnM0My4wNjYtOTYgOTYtOTZoOTZ2OTZjMCA1Mi45MzQtNDMuMDY0IDk2LTk2IDk2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlYTVjOyIgZ2x5cGgtbmFtZT0iZm9udDIiIGQ9Ik03OTkuNTk2IDk0My43OTJjLTkwLjUyNiAwLTE0OC42MiAxNi4yMDgtMjQxLjg0OCAxNi4yMDgtMzAxLjI4NCAwLTQ0MS43OTItMTcxLjU4NC00NDEuNzkyLTM0NS44NzIgMC0xMDIuNjc4IDQ4LjY0LTEzNi40NTggMTQ0LjU2NC0xMzYuNDU4LTYuNzU4IDE0Ljg2NC0xOC45MTQgMzEuMDgwLTE4LjkxNCAxMDQuMDM0IDAgMjA0LjAxMCA3Ny4wMDYgMjYzLjQ1OCAxNzUuNjM2IDI2Ny41MSAwIDAtODAuOTE4LTc5My4zNzQtMzE1Ljc3OC04ODguNTQydi0yNC42NzJoMzE2LjU5NGwxMDguMDI2IDUxMmgxOTcuODQ0bDQ0LjA3MiAxMjhoLTIxNC45MDhsNTEuOTQ0IDI0Ni4xOWM1OS40NDYtMTIuMTU2IDExNy41NDItMjQuMzE2IDE2Ny41MzItMjQuMzE2IDYyLjE0OCAwIDExOC44OTQgMTguOTE0IDE0OS45NjggMTYyLjEyNi0zNy44MjYtMTIuMTYtNzguMzYyLTE2LjIwOC0xMjIuOTQtMTYuMjA4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlYTY1OyIgZ2x5cGgtbmFtZT0ic3RyaWtldGhyb3VnaCIgZD0iTTEwMjQgNDQ4di02NGgtMjM0LjUwNmMyNy41MDQtMzguNTEgNDIuNTA2LTgyLjY5MiA0Mi41MDYtMTI4IDAtNzAuODc4LTM2LjY2LTEzOS4wMjYtMTAwLjU4LTE4Ni45NjQtNTkuMzU4LTQ0LjUxOC0xMzcuMjg0LTY5LjAzNi0yMTkuNDItNjkuMDM2LTgyLjEzOCAwLTE2MC4wNjIgMjQuNTE4LTIxOS40MiA2OS4wMzYtNjMuOTIgNDcuOTM4LTEwMC41OCAxMTYuMDg2LTEwMC41OCAxODYuOTY0aDEyOGMwLTY5LjM4MiA4Ny45MjYtMTI4IDE5Mi0xMjhzMTkyIDU4LjYxOCAxOTIgMTI4YzAgNjkuMzgyLTg3LjkyNiAxMjgtMTkyIDEyOGgtNTEydjY0aDI5OS41MThjLTIuMzM4IDEuNjU0LTQuNjU2IDMuMzI0LTYuOTM4IDUuMDM2LTYzLjkyIDQ3Ljk0LTEwMC41OCAxMTYuMDg2LTEwMC41OCAxODYuOTY0czM2LjY2IDEzOS4wMjQgMTAwLjU4IDE4Ni45NjRjNTkuMzU4IDQ0LjUxOCAxMzcuMjgyIDY5LjAzNiAyMTkuNDIgNjkuMDM2IDgyLjEzNiAwIDE2MC4wNjItMjQuNTE4IDIxOS40Mi02OS4wMzYgNjMuOTItNDcuOTQgMTAwLjU4LTExNi4wODYgMTAwLjU4LTE4Ni45NjRoLTEyOGMwIDY5LjM4Mi04Ny45MjYgMTI4LTE5MiAxMjhzLTE5Mi01OC42MTgtMTkyLTEyOGMwLTY5LjM4MiA4Ny45MjYtMTI4IDE5Mi0xMjggNzguOTc4IDAgMTU0LjA1NC0yMi42NzggMjEyLjQ4Mi02NGgyOTkuNTE4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlYTY3OyIgZ2x5cGgtbmFtZT0ic2lnbWEiIGQ9Ik05NDEuNjA2IDIyNS4yOTJsNDQuMzk0IDk0LjcwOGgzOGwtNjQtMzg0aC05NjB2NzQuMjQybDMzMS41NDYgMzkxLjIxMi0zMzEuNTQ2IDMzMS41NDZ2MjI3aDk4MGw0NC0yNTZoLTM0LjM3NmwtMTguNzIgMzguODhjLTM1LjMxOCA3My4zNjQtNjEuOTA0IDg5LjEyLTEzOC45MDQgODkuMTJoLTY2MmwzNTMuMDU2LTM1My4wNTYtMjk3LjQyLTM1MC45NDRoNTQyLjM2NGMxMTYuMDA4IDAgMTQ2LjY0OCA0MS41NzggMTczLjYwNiA5Ny4yOTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGVhNjg7IiBnbHlwaC1uYW1lPSJzaWdtYTIiIGQ9Ik05NDEuNjA2IDIyNS4yOTJsNDQuMzk0IDk0LjcwOGgzOGwtNjQtMzg0aC05NjB2NzQuMjQybDMzMS41NDYgMzkxLjIxMi0zMzEuNTQ2IDMzMS41NDZ2MjI3aDk4MGw0NC0yNTZoLTM0LjM3NmwtMTguNzIgMzguODhjLTM1LjMxOCA3My4zNjQtNjEuOTA0IDg5LjEyLTEzOC45MDQgODkuMTJoLTY2MmwzNTMuMDU2LTM1My4wNTYtMjk3LjQyLTM1MC45NDRoNTQyLjM2NGMxMTYuMDA4IDAgMTQ2LjY0OCA0MS41NzggMTczLjYwNiA5Ny4yOTJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGVhZGU7IiBnbHlwaC1uYW1lPSJsaWJyZW9mZmljZSIgZD0iTTUzNC42MjYgOTM3LjM3MmMtMTIuNDQ0IDEyLjQ0NC0zNy4wMjYgMjIuNjI4LTU0LjYyNiAyMi42MjhoLTM4NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJ2LTk2MGMwLTE3LjYgMTQuNC0zMiAzMi0zMmg3NjhjMTcuNiAwIDMyIDE0LjQgMzIgMzJ2NTc2YzAgMTcuNi0xMC4xODIgNDIuMTgyLTIyLjYyNiA1NC42MjZsLTMzOC43NDggMzM4Ljc0NnpNODMyIDBoLTcwNHY4OTZoMzUxLjE1OGMyLjkxNi0wLjQ4IDguNDA4LTIuNzU0IDEwLjgxLTQuNDc4bDMzNy41NTYtMzM3LjU1NGMxLjcyMi0yLjQwMiAzLjk5Ni03Ljg5NCA0LjQ3Ni0xMC44MXYtNTQzLjE1OHpNODY0IDk2MGgtMTkyYy0xNy42IDAtMjEuODE4LTEwLjE4Mi05LjM3NC0yMi42MjZsMjEwLjc0Ni0yMTAuNzQ2YzEyLjQ0Ni0xMi40NDYgMjIuNjI4LTguMjI4IDIyLjYyOCA5LjM3MnYxOTJjMCAxNy42LTE0LjQgMzItMzIgMzJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMGU7IiBnbHlwaC1uYW1lPSJzZWFyY2gtcGx1cyIgaG9yaXotYWR2LXg9Ijk1MSIgZD0iTTU4NS4xNDMgNDkzLjcxNHYtMzYuNTcxcTAtNy40MjktNS40MjktMTIuODU3dC0xMi44NTctNS40MjloLTEyOHYtMTI4cTAtNy40MjktNS40MjktMTIuODU3dC0xMi44NTctNS40MjloLTM2LjU3MXEtNy40MjkgMC0xMi44NTcgNS40Mjl0LTUuNDI5IDEyLjg1N3YxMjhoLTEyOHEtNy40MjkgMC0xMi44NTcgNS40Mjl0LTUuNDI5IDEyLjg1N3YzNi41NzFxMCA3LjQyOSA1LjQyOSAxMi44NTd0MTIuODU3IDUuNDI5aDEyOHYxMjhxMCA3LjQyOSA1LjQyOSAxMi44NTd0MTIuODU3IDUuNDI5aDM2LjU3MXE3LjQyOSAwIDEyLjg1Ny01LjQyOXQ1LjQyOS0xMi44NTd2LTEyOGgxMjhxNy40MjkgMCAxMi44NTctNS40Mjl0NS40MjktMTIuODU3ek02NTguMjg2IDQ3NS40MjhxMCAxMDUuNzE0LTc1LjE0MyAxODAuODU3dC0xODAuODU3IDc1LjE0My0xODAuODU3LTc1LjE0My03NS4xNDMtMTgwLjg1NyA3NS4xNDMtMTgwLjg1NyAxODAuODU3LTc1LjE0MyAxODAuODU3IDc1LjE0MyA3NS4xNDMgMTgwLjg1N3pNOTUwLjg1NyAwcTAtMzAuMjg2LTIxLjQyOS01MS43MTR0LTUxLjcxNC0yMS40MjlxLTMwLjg1NyAwLTUxLjQyOSAyMS43MTRsLTE5NiAxOTUuNDI5cS0xMDIuMjg2LTcwLjg1Ny0yMjgtNzAuODU3LTgxLjcxNCAwLTE1Ni4yODYgMzEuNzE0dC0xMjguNTcxIDg1LjcxNC04NS43MTQgMTI4LjU3MS0zMS43MTQgMTU2LjI4NiAzMS43MTQgMTU2LjI4NiA4NS43MTQgMTI4LjU3MSAxMjguNTcxIDg1LjcxNCAxNTYuMjg2IDMxLjcxNCAxNTYuMjg2LTMxLjcxNCAxMjguNTcxLTg1LjcxNCA4NS43MTQtMTI4LjU3MSAzMS43MTQtMTU2LjI4NnEwLTEyNS43MTQtNzAuODU3LTIyOGwxOTYtMTk2cTIxLjE0My0yMS4xNDMgMjEuMTQzLTUxLjQyOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxMDsiIGdseXBoLW5hbWU9InNlYXJjaC1taW51cyIgaG9yaXotYWR2LXg9Ijk1MSIgZD0iTTU4NS4xNDMgNDkzLjcxNHYtMzYuNTcxcTAtNy40MjktNS40MjktMTIuODU3dC0xMi44NTctNS40MjloLTMyOS4xNDNxLTcuNDI5IDAtMTIuODU3IDUuNDI5dC01LjQyOSAxMi44NTd2MzYuNTcxcTAgNy40MjkgNS40MjkgMTIuODU3dDEyLjg1NyA1LjQyOWgzMjkuMTQzcTcuNDI5IDAgMTIuODU3LTUuNDI5dDUuNDI5LTEyLjg1N3pNNjU4LjI4NiA0NzUuNDI4cTAgMTA1LjcxNC03NS4xNDMgMTgwLjg1N3QtMTgwLjg1NyA3NS4xNDMtMTgwLjg1Ny03NS4xNDMtNzUuMTQzLTE4MC44NTcgNzUuMTQzLTE4MC44NTcgMTgwLjg1Ny03NS4xNDMgMTgwLjg1NyA3NS4xNDMgNzUuMTQzIDE4MC44NTd6TTk1MC44NTcgMHEwLTMwLjI4Ni0yMS40MjktNTEuNzE0dC01MS43MTQtMjEuNDI5cS0zMC44NTcgMC01MS40MjkgMjEuNzE0bC0xOTYgMTk1LjQyOXEtMTAyLjI4Ni03MC44NTctMjI4LTcwLjg1Ny04MS43MTQgMC0xNTYuMjg2IDMxLjcxNHQtMTI4LjU3MSA4NS43MTQtODUuNzE0IDEyOC41NzEtMzEuNzE0IDE1Ni4yODYgMzEuNzE0IDE1Ni4yODYgODUuNzE0IDEyOC41NzEgMTI4LjU3MSA4NS43MTQgMTU2LjI4NiAzMS43MTQgMTU2LjI4Ni0zMS43MTQgMTI4LjU3MS04NS43MTQgODUuNzE0LTEyOC41NzEgMzEuNzE0LTE1Ni4yODZxMC0xMjUuNzE0LTcwLjg1Ny0yMjhsMTk2LTE5NnEyMS4xNDMtMjEuMTQzIDIxLjE0My01MS40Mjl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMTQ7IiBnbHlwaC1uYW1lPSJ0cmFzaC1vIiBob3Jpei1hZHYteD0iODA1IiBkPSJNMjkyLjU3MSA1MzAuMjg2di0zMjkuMTQzcTAtOC01LjE0My0xMy4xNDN0LTEzLjE0My01LjE0M2gtMzYuNTcxcS04IDAtMTMuMTQzIDUuMTQzdC01LjE0MyAxMy4xNDN2MzI5LjE0M3EwIDggNS4xNDMgMTMuMTQzdDEzLjE0MyA1LjE0M2gzNi41NzFxOCAwIDEzLjE0My01LjE0M3Q1LjE0My0xMy4xNDN6TTQzOC44NTcgNTMwLjI4NnYtMzI5LjE0M3EwLTgtNS4xNDMtMTMuMTQzdC0xMy4xNDMtNS4xNDNoLTM2LjU3MXEtOCAwLTEzLjE0MyA1LjE0M3QtNS4xNDMgMTMuMTQzdjMyOS4xNDNxMCA4IDUuMTQzIDEzLjE0M3QxMy4xNDMgNS4xNDNoMzYuNTcxcTggMCAxMy4xNDMtNS4xNDN0NS4xNDMtMTMuMTQzek01ODUuMTQzIDUzMC4yODZ2LTMyOS4xNDNxMC04LTUuMTQzLTEzLjE0M3QtMTMuMTQzLTUuMTQzaC0zNi41NzFxLTggMC0xMy4xNDMgNS4xNDN0LTUuMTQzIDEzLjE0M3YzMjkuMTQzcTAgOCA1LjE0MyAxMy4xNDN0MTMuMTQzIDUuMTQzaDM2LjU3MXE4IDAgMTMuMTQzLTUuMTQzdDUuMTQzLTEzLjE0M3pNNjU4LjI4NiAxMTYuNTcxdjU0MS43MTRoLTUxMnYtNTQxLjcxNHEwLTEyLjU3MSA0LTIzLjE0M3Q4LjI4Ni0xNS40MjkgNi00Ljg1N2g0NzUuNDI5cTEuNzE0IDAgNiA0Ljg1N3Q4LjI4NiAxNS40MjkgNCAyMy4xNDN6TTI3NC4yODYgNzMxLjQyOGgyNTZsLTI3LjQyOSA2Ni44NTdxLTQgNS4xNDMtOS43MTQgNi4yODZoLTE4MS4xNDNxLTUuNzE0LTEuMTQzLTkuNzE0LTYuMjg2ek04MDQuNTcxIDcxMy4xNDN2LTM2LjU3MXEwLTgtNS4xNDMtMTMuMTQzdC0xMy4xNDMtNS4xNDNoLTU0Ljg1N3YtNTQxLjcxNHEwLTQ3LjQyOS0yNi44NTctODJ0LTY0LjU3MS0zNC41NzFoLTQ3NS40MjlxLTM3LjcxNCAwLTY0LjU3MSAzMy40Mjl0LTI2Ljg1NyA4MC44NTd2NTQ0aC01NC44NTdxLTggMC0xMy4xNDMgNS4xNDN0LTUuMTQzIDEzLjE0M3YzNi41NzFxMCA4IDUuMTQzIDEzLjE0M3QxMy4xNDMgNS4xNDNoMTc2LjU3MWw0MCA5NS40MjlxOC41NzEgMjEuMTQzIDMwLjg1NyAzNnQ0NS4xNDMgMTQuODU3aDE4Mi44NTdxMjIuODU3IDAgNDUuMTQzLTE0Ljg1N3QzMC44NTctMzZsNDAtOTUuNDI5aDE3Ni41NzFxOCAwIDEzLjE0My01LjE0M3Q1LjE0My0xMy4xNDN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMzk7IiBnbHlwaC1uYW1lPSJhbGlnbi1qdXN0aWZ5IiBkPSJNMTAyNCAxODIuODU3di03My4xNDNxMC0xNC44NTctMTAuODU3LTI1LjcxNHQtMjUuNzE0LTEwLjg1N2gtOTUwLjg1N3EtMTQuODU3IDAtMjUuNzE0IDEwLjg1N3QtMTAuODU3IDI1LjcxNHY3My4xNDNxMCAxNC44NTcgMTAuODU3IDI1LjcxNHQyNS43MTQgMTAuODU3aDk1MC44NTdxMTQuODU3IDAgMjUuNzE0LTEwLjg1N3QxMC44NTctMjUuNzE0ek0xMDI0IDQwMi4yODZ2LTczLjE0M3EwLTE0Ljg1Ny0xMC44NTctMjUuNzE0dC0yNS43MTQtMTAuODU3aC05NTAuODU3cS0xNC44NTcgMC0yNS43MTQgMTAuODU3dC0xMC44NTcgMjUuNzE0djczLjE0M3EwIDE0Ljg1NyAxMC44NTcgMjUuNzE0dDI1LjcxNCAxMC44NTdoOTUwLjg1N3ExNC44NTcgMCAyNS43MTQtMTAuODU3dDEwLjg1Ny0yNS43MTR6TTEwMjQgNjIxLjcxNHYtNzMuMTQzcTAtMTQuODU3LTEwLjg1Ny0yNS43MTR0LTI1LjcxNC0xMC44NTdoLTk1MC44NTdxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTR2NzMuMTQzcTAgMTQuODU3IDEwLjg1NyAyNS43MTR0MjUuNzE0IDEwLjg1N2g5NTAuODU3cTE0Ljg1NyAwIDI1LjcxNC0xMC44NTd0MTAuODU3LTI1LjcxNHpNMTAyNCA4NDEuMTQzdi03My4xNDNxMC0xNC44NTctMTAuODU3LTI1LjcxNHQtMjUuNzE0LTEwLjg1N2gtOTUwLjg1N3EtMTQuODU3IDAtMjUuNzE0IDEwLjg1N3QtMTAuODU3IDI1LjcxNHY3My4xNDNxMCAxNC44NTcgMTAuODU3IDI1LjcxNHQyNS43MTQgMTAuODU3aDk1MC44NTdxMTQuODU3IDAgMjUuNzE0LTEwLjg1N3QxMC44NTctMjUuNzE0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDdkOyIgZ2x5cGgtbmFtZT0iYXJyb3dzLXYiIGhvcml6LWFkdi14PSI0MzkiIGQ9Ik00MDIuMjg2IDc2OHEwLTE0Ljg1Ny0xMC44NTctMjUuNzE0dC0yNS43MTQtMTAuODU3aC03My4xNDN2LTU4NS4xNDNoNzMuMTQzcTE0Ljg1NyAwIDI1LjcxNC0xMC44NTd0MTAuODU3LTI1LjcxNC0xMC44NTctMjUuNzE0bC0xNDYuMjg2LTE0Ni4yODZxLTEwLjg1Ny0xMC44NTctMjUuNzE0LTEwLjg1N3QtMjUuNzE0IDEwLjg1N2wtMTQ2LjI4NiAxNDYuMjg2cS0xMC44NTcgMTAuODU3LTEwLjg1NyAyNS43MTR0MTAuODU3IDI1LjcxNCAyNS43MTQgMTAuODU3aDczLjE0M3Y1ODUuMTQzaC03My4xNDNxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTQgMTAuODU3IDI1LjcxNGwxNDYuMjg2IDE0Ni4yODZxMTAuODU3IDEwLjg1NyAyNS43MTQgMTAuODU3dDI1LjcxNC0xMC44NTdsMTQ2LjI4Ni0xNDYuMjg2cTEwLjg1Ny0xMC44NTcgMTAuODU3LTI1LjcxNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwODsiIGdseXBoLW5hbWU9ImRlc2t0b3AiIGhvcml6LWFkdi14PSIxMDk3IiBkPSJNMTAyNCAzODR2NDc1LjQyOXEwIDcuNDI5LTUuNDI5IDEyLjg1N3QtMTIuODU3IDUuNDI5aC05MTQuMjg2cS03LjQyOSAwLTEyLjg1Ny01LjQyOXQtNS40MjktMTIuODU3di00NzUuNDI5cTAtNy40MjkgNS40MjktMTIuODU3dDEyLjg1Ny01LjQyOWg5MTQuMjg2cTcuNDI5IDAgMTIuODU3IDUuNDI5dDUuNDI5IDEyLjg1N3pNMTA5Ny4xNDMgODU5LjQyOHYtNjIxLjcxNHEwLTM3LjcxNC0yNi44NTctNjQuNTcxdC02NC41NzEtMjYuODU3aC0zMTAuODU3cTAtMjEuMTQzIDkuMTQzLTQ0LjI4NnQxOC4yODYtNDAuNTcxIDkuMTQzLTI0Ljg1N3EwLTE0Ljg1Ny0xMC44NTctMjUuNzE0dC0yNS43MTQtMTAuODU3aC0yOTIuNTcxcS0xNC44NTcgMC0yNS43MTQgMTAuODU3dC0xMC44NTcgMjUuNzE0cTAgOCA5LjE0MyAyNS4xNDN0MTguMjg2IDQwIDkuMTQzIDQ0LjU3MWgtMzEwLjg1N3EtMzcuNzE0IDAtNjQuNTcxIDI2Ljg1N3QtMjYuODU3IDY0LjU3MXY2MjEuNzE0cTAgMzcuNzE0IDI2Ljg1NyA2NC41NzF0NjQuNTcxIDI2Ljg1N2g5MTQuMjg2cTM3LjcxNCAwIDY0LjU3MS0yNi44NTd0MjYuODU3LTY0LjU3MXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwYTsiIGdseXBoLW5hbWU9InRhYmxldCIgaG9yaXotYWR2LXg9IjY1OCIgZD0iTTM2NS43MTQgMTQ2LjI4NnEwIDE0Ljg1Ny0xMC44NTcgMjUuNzE0dC0yNS43MTQgMTAuODU3LTI1LjcxNC0xMC44NTctMTAuODU3LTI1LjcxNCAxMC44NTctMjUuNzE0IDI1LjcxNC0xMC44NTcgMjUuNzE0IDEwLjg1NyAxMC44NTcgMjUuNzE0ek01ODUuMTQzIDIzNy43MTR2NTQ4LjU3MXEwIDcuNDI5LTUuNDI5IDEyLjg1N3QtMTIuODU3IDUuNDI5aC00NzUuNDI5cS03LjQyOSAwLTEyLjg1Ny01LjQyOXQtNS40MjktMTIuODU3di01NDguNTcxcTAtNy40MjkgNS40MjktMTIuODU3dDEyLjg1Ny01LjQyOWg0NzUuNDI5cTcuNDI5IDAgMTIuODU3IDUuNDI5dDUuNDI5IDEyLjg1N3pNNjU4LjI4NiA3ODYuMjg2di02MjEuNzE0cTAtMzcuNzE0LTI2Ljg1Ny02NC41NzF0LTY0LjU3MS0yNi44NTdoLTQ3NS40MjlxLTM3LjcxNCAwLTY0LjU3MSAyNi44NTd0LTI2Ljg1NyA2NC41NzF2NjIxLjcxNHEwIDM3LjcxNCAyNi44NTcgNjQuNTcxdDY0LjU3MSAyNi44NTdoNDc1LjQyOXEzNy43MTQgMCA2NC41NzEtMjYuODU3dDI2Ljg1Ny02NC41NzF6IiAvPg0KPC9mb250PjwvZGVmcz48L3N2Zz4="

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.9
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-12-19
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {

					// `qSA` may not throw for unrecognized parts using forgiving parsing:
					// https://drafts.csswg.org/selectors/#forgiving-selector
					// like the `:has()` pseudo-class:
					// https://drafts.csswg.org/selectors/#relational
					// `CSS.supports` is still expected to return `false` then:
					// https://drafts.csswg.org/css-conditional-4/#typedef-supports-selector-fn
					// https://drafts.csswg.org/css-conditional-4/#dfn-support-selector
					if ( support.cssSupportsSelector &&

						// eslint-disable-next-line no-undef
						!CSS.supports( "selector(:is(" + newSelector + "))" ) ) {

						// Support: IE 11+
						// Throw to get to the same code path as an error directly in qSA.
						// Note: once we only support browser supporting
						// `CSS.supports('selector(...)')`, we can most likely drop
						// the `try-catch`. IE doesn't implement the API.
						throw new Error();
					}

					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	// Support: Chrome 105+, Firefox 104+, Safari 15.4+
	// Make sure forgiving mode is not used in `CSS.supports( "selector(...)" )`.
	//
	// `:is()` uses a forgiving selector list as an argument and is widely
	// implemented, so it's a good one to test against.
	support.cssSupportsSelector = assert( function() {
		/* eslint-disable no-undef */

		return CSS.supports( "selector(*)" ) &&

			// Support: Firefox 78-81 only
			// In old Firefox, `:is()` didn't use forgiving parsing. In that case,
			// fail this test as there's no selector to test against that.
			// `CSS.supports` uses unforgiving parsing
			document.querySelectorAll( ":is(:jqfake)" ) &&

			// `*` is needed as Safari & newer Chrome implemented something in between
			// for `:has()` - it throws in `qSA` if it only contains an unsupported
			// argument but multiple ones, one of which is supported, are fine.
			// We want to play safe in case `:is()` gets the same treatment.
			!CSS.supports( "selector(:is(*,:jqfake))" );

		/* eslint-enable */
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	if ( !support.cssSupportsSelector ) {

		// Support: Chrome 105+, Safari 15.4+
		// `:has()` uses a forgiving selector list as an argument so our regular
		// `try-catch` mechanism fails to catch `:has()` with arguments not supported
		// natively like `:has(:contains("Foo"))`. Where supported & spec-compliant,
		// we now use `CSS.supports("selector(:is(SELECTOR_TO_BE_TESTED))")`, but
		// outside that we mark `:has` as buggy.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {

			// Support: IE <9 only
			// IE doesn't have `contains` on `document` so we need to check for
			// `documentElement` presence.
			// We need to fall back to `a` when `documentElement` is missing
			// as `ownerDocument` of elements within `<template/>` may have
			// a null one - a default behavior of all modern browsers.
			var adown = a.nodeType === 9 && a.documentElement || a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vue-js-editor",attrs:{"id":_vm.editorId}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-js-editor.js.map