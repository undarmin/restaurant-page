/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n}\n\n/* nav styling */\n\nnav {\n    width: 100%;\n    display: flex;\n    gap: 0.5rem;\n    justify-content: space-evenly;\n    background: linear-gradient(to right, #130541, #1f3541);\n    height: 4rem;\n    align-items: center;\n}\n\n.nav-button {\n    height: 100%;\n    width: 12rem;\n    font-size: 2rem;\n    font-weight: bold;\n    color: #f5f5f5;\n    background: #031a43;\n    border: none;\n    border-radius: 12px;\n}\n\n.nav-button:hover {\n    background: #072964;\n}\n\n.nav-button:active {\n    background: #0d3d74;\n}\n\ndiv#content {\n    width: 75%;\n    margin: 0 12.5%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    line-height: 1.5lh;\n    padding: 1rem 0;\n}\n\n.heading {\n    font-size: 3rem;\n    text-align: center;\n    vertical-align: middle;\n    height: 8rem;\n    width: 100%;\n    line-height: 8rem;\n}\n\n@media only screen and (max-width: 800px) {\n    .heading {\n        font-size: 2rem;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .heading {\n        font-size: 1.75rem;\n    }\n}\n\nh2 {\n    text-align: center;\n}\n\n.menu-item {\n    width: 75%;\n    margin: 0 12.5%;\n}\n\n.menu-item span:nth-child(1) {\n    font-weight: 700;\n}\n\n.headline {\n    font-size: 0.8rem;\n}\n\naddress {\n    font-size: 1.1rem;\n}\n\naddress::before {\n    content: 'Address:';\n    display: block;\n    font-weight: 700;\n    font-style: normal;\n}\n\naddress, .headline {\n    text-align: center;\n    font-weight: 300;\n    color: #262626;\n}\n\nimg {\n    width: 75%;\n    margin: 0 12.5%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_about_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/about-image.jpg */ \"./src/assets/about-image.jpg\");\n\n\nfunction createAbout(parent) {\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"About Us: Thistle & Heather Tavern\";\n\n  const img = document.createElement('img');\n  img.src = _assets_about_image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.style.width = \"75%\";\n  img.style.height = \"auto\";\n  heading.classList.add(\"heading\");\n\n  // Our Founding Inspiration\n  const inspirationSectionHeading = document.createElement(\"h2\");\n  inspirationSectionHeading.textContent = \"Our Founding Inspiration\";\n  const inspirationSectionParagraph = document.createElement(\"p\");\n  inspirationSectionParagraph.textContent =\n    \"Nestled in the heart of Edinburgh's historic Old Town, Thistle & Heather Tavern is more than just a restaurant; it's a celebration of Scotland's rich cultural heritage and culinary traditions.\";\n\n  // A Journey Through Scotland's Heart\n  const journeySectionHeading = document.createElement(\"h2\");\n  journeySectionHeading.textContent = \"A Journey Through Scotland's Heart\";\n  const journeySectionParagraph = document.createElement(\"p\");\n  journeySectionParagraph.textContent =\n    \"Founded by a group of friends with a passion for Scottish cuisine and a deep appreciation for the country's natural beauty, Thistle & Heather Tavern was born out of a desire to create a welcoming space where locals and visitors alike could come together to savor the flavors of Scotland.\";\n\n  // Crafting Culinary Classics with a Modern Twist\n  const craftingSectionHeading = document.createElement(\"h2\");\n  craftingSectionHeading.textContent =\n    \"Crafting Culinary Classics with a Modern Twist\";\n  const craftingSectionParagraph = document.createElement(\"p\");\n  craftingSectionParagraph.textContent =\n    \"Drawing on their own Scottish roots and a commitment to sourcing the finest local ingredients, the founders worked tirelessly to craft a menu that pays homage to Scotland's culinary classics while also incorporating modern twists and flavors.\";\n\n  // A Hub of Creativity and Community\n  const hubSectionHeading = document.createElement(\"h2\");\n  hubSectionHeading.textContent = \"A Hub of Creativity and Community\";\n  const hubSectionParagraph = document.createElement(\"p\");\n  hubSectionParagraph.textContent =\n    \"But Thistle & Heather Tavern is more than just a place to enjoy delicious food; it's a gathering place for the community, a hub of creativity and conversation, and a home away from home for all who walk through its doors.\";\n\n  // Join Us on a Culinary Adventure\n  const joinSectionHeading = document.createElement(\"h2\");\n  joinSectionHeading.textContent = \"Join Us on a Culinary Adventure\";\n  const joinSectionParagraph = document.createElement(\"p\");\n  joinSectionParagraph.textContent =\n    \"With its cozy interior and warm hospitality, Thistle & Heather Tavern invites you to embark on a culinary adventure through Scotland's heart, one delicious dish at a time.\";\n\n  parent.append(\n    heading,\n    img,\n    inspirationSectionHeading,\n    inspirationSectionParagraph,\n    journeySectionHeading,\n    journeySectionParagraph,\n    craftingSectionHeading,\n    craftingSectionParagraph,\n    hubSectionHeading,\n    hubSectionParagraph,\n    joinSectionHeading,\n    joinSectionParagraph\n  );\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-interior.jpg */ \"./src/assets/restaurant-interior.jpg\");\n\n\nfunction createHome(parent) {\n  const heading = document.createElement(\"h1\");\n  const img = document.createElement(\"img\");\n  const headline = document.createElement(\"p\");\n  const headlineInner = document.createElement(\"em\");\n  const paras = [];\n\n  heading.textContent = \"Thistle & Heather Tavern\";\n  heading.classList.add(\"heading\");\n  img.src = _assets_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = \"Interior of the restaurant\";\n  img.style.width = \"75%\";\n  img.style.height = \"auto\";\n  headlineInner.textContent = \"Embark on a Gastronomic Journey at Thistle & Heather Tavern: Where Scottish Tradition Meets Culinary Innovation!\";\n  headline.classList.add('headline');\n  headline.appendChild(headlineInner);\n\n  parent.append(heading, img, headline);\n  for (let i = 0; i < 4; i++) {\n    paras.push(document.createElement(\"p\"));\n    let textContent;\n    switch (i + 1) {\n        case 1:\n            textContent = \"Welcome to Thistle & Heather Tavern, where the warm embrace of Scottish hospitality meets the culinary delights of the Highlands. Nestled in the heart of Edinburgh's historic Old Town, our restaurant offers a cozy and inviting atmosphere, perfect for a gathering of friends or a romantic evening out.\";\n            break;\n        case 2:\n            textContent = \"Indulge in a menu inspired by Scotland's rich culinary heritage, featuring traditional dishes with a modern twist. From hearty stews made with locally sourced ingredients to succulent Scottish salmon grilled to perfection, every bite tells a story of the land and sea that surrounds us.\";\n            break;\n        case 3:\n            textContent = \"Pair your meal with a fine selection of Scotch whiskies from renowned distilleries across the country, or choose from our curated list of Scottish ales and craft beers. Our knowledgeable staff is always on hand to guide you through our extensive drinks menu, ensuring a truly immersive dining experience.\";\n            break;\n        case 4:\n            textContent = \"Whether you're a visitor to Scotland or a local looking for a taste of home, Thistle & Heather Tavern invites you to savor the flavors of this beautiful land in every dish we serve.\";\n            break;\n        default:\n            textContent = \"Something went wrong!\";\n        \n    }\n    paras[i].textContent = textContent;\n  }\n\n\n\n  paras.forEach((p) => parent.appendChild(p));\n  const address = document.createElement('address');\n  address.textContent = \"Thistle & Heather Tavern, 42 Royal Mile, Edinburgh, EH1 1QN, Scotland\";\n  parent.appendChild(address);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst homeButton = document.querySelector(\"#home\");\nconst menuButton = document.querySelector(\"#menu\");\nconst aboutButton = document.querySelector(\"#about\");\nconst content = document.querySelector(\"div#content\");\n\nfunction displayContent(fxn) {\n  [...content.children].forEach((child) => {\n    content.removeChild(content.children[[...content.children].indexOf(child)]);\n  });\n  fxn(content);\n}\n\nhomeButton.addEventListener(\"click\", () => {\n  displayContent(_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome);\n});\n\nmenuButton.addEventListener(\"click\", () => {\n  displayContent(_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu);\n});\n\naboutButton.addEventListener(\"click\", () => {\n  displayContent(_about_js__WEBPACK_IMPORTED_MODULE_2__.createAbout);\n});\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)(content);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-image.jpg */ \"./src/assets/menu-image.jpg\");\n\n\nfunction createMenu(parent) {\n    const heading = document.createElement('h1');\n    heading.textContent = \"Menu\";\n    const img = document.createElement('img');\n    img.src = _assets_menu_image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.style.width = \"75%\";\n    img.style.height = \"auto\";\n\n    heading.classList.add(\"heading\");\n    const menu = document.createElement('div');\n    \n    const groupStarters = document.createElement('div');\n    const groupStartersHeading = document.createElement('h2');\n    groupStarters.append(groupStartersHeading)\n    groupStartersHeading.textContent = \"Starters\";\n    const groupMains = document.createElement('div');\n    const groupMainsHeading = document.createElement('h2');\n    groupMains.append(groupMainsHeading)\n    groupMainsHeading.textContent = \"Mains\";\n    const groupDesserts = document.createElement('div');\n    const groupDessertsHeading = document.createElement('h2');\n    groupDesserts.append(groupDessertsHeading)\n    groupDessertsHeading.textContent = \"Desserts\";\n    const groupDrinks = document.createElement('div');\n    const groupDrinksHeading = document.createElement('h2');\n    groupDrinks.append(groupDrinksHeading)\n    groupDrinksHeading.textContent = \"Drinks\";\n    for (let i = 0; i < 4; i++) {\n        const li = document.createElement('li');\n        li.classList.add('menu-item');\n        const name = document.createElement('span');\n        const desc = document.createElement('span');\n        let nameContent;\n        let descContent;\n        switch (i + 1) {\n            case 1:\n                [nameContent, descContent] = (\"Cullen Skink - A creamy Scottish soup with smoked haddock, potatoes, and onions.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 2:\n                [nameContent, descContent] = (\"Haggis Bon Bons - Deep fried haggis balls served with a whisky cream sauce.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 3:\n                [nameContent, descContent] = (\"Scottish Smoked Salmon Platter - Locally sourced smoked salmon served with capers, red onions, and homemade oatcakes.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 4:\n                [nameContent, descContent] = (\"Cock a Leekie Soup - A traditional Scottish soup made with chicken, leeks, and barley.\").split(\" -\").join(\":$\").split(\"$\");\n        }\n        name.textContent = nameContent;\n        desc.textContent = descContent;\n        li.append(name, desc)\n        groupStarters.append(li);\n    }\n    for (let i = 0; i < 4; i++) {\n        const li = document.createElement('li');\n        li.classList.add('menu-item');\n        const name = document.createElement('span');\n        const desc = document.createElement('span');\n        let nameContent;\n        let descContent;\n        switch (i + 1) {\n            case 1:\n                [nameContent, descContent] = (\"Highland Beef Wellington - Prime Scottish beef fillet wrapped in puff pastry, served with buttery mash, seasonal vegetables, and a rich red wine jus.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 2:\n                [nameContent, descContent] = (\"Loch Ness Salmon Fillet - Grilled Scottish salmon fillet served with a lemon dill sauce, roasted potatoes, and wilted greens.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 3:\n                [nameContent, descContent] = (\"Vegetarian Haggis Neeps & Tatties - Vegetarian haggis served with mashed turnips, potatoes, and a whisky cream sauce.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 4:\n                [nameContent, descContent] = (\"Aberdeen Angus Burger - Juicy Aberdeen Angus beef burger served with caramelized onions, melted cheddar cheese, lettuce, tomato, and hand-cut chips.\").split(\" -\").join(\":$\").split(\"$\");\n        }\n        name.textContent = nameContent;\n        desc.textContent = descContent;\n        li.append(name, desc)\n        groupMains.append(li);\n    }\n    \n    // Desserts\n    for (let i = 0; i < 4; i++) {\n        const li = document.createElement('li');\n        li.classList.add('menu-item');\n        const name = document.createElement('span');\n        const desc = document.createElement('span');\n        let nameContent;\n        let descContent;\n        switch (i + 1) {\n            case 1:\n                [nameContent, descContent] = (\"Cranachan - A traditional Scottish dessert made with whipped cream, raspberries, toasted oats, and Scottish heather honey.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 2:\n                [nameContent, descContent] = (\"Sticky Toffee Pudding - Moist sponge cake made with dates, covered in a rich toffee sauce, served with vanilla ice cream.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 3:\n                [nameContent, descContent] = (\"Edinburgh Gin & Raspberry Cranachan Cheesecake - Creamy cheesecake infused with Edinburgh Gin and raspberries, topped with cranachan and a raspberry coulis.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 4:\n                [nameContent, descContent] = (\"Scottish Tablet - Homemade Scottish tablet made with sugar, butter, and condensed milk, served with a drizzle of caramel sauce.\").split(\" -\").join(\":$\").split(\"$\");\n        }\n        name.textContent = nameContent;\n        desc.textContent = descContent;\n        li.append(name, desc)\n        groupDesserts.append(li);\n    }\n    \n    // Drinks\n    for (let i = 0; i < 4; i++) {\n        const li = document.createElement('li');\n        li.classList.add('menu-item');\n        const name = document.createElement('span');\n        const desc = document.createElement('span');\n        let nameContent;\n        let descContent;\n        switch (i + 1) {\n            case 1:\n                [nameContent, descContent] = (\"Single Malt Scotch Whiskies - Choose from a selection of single malt Scotch whiskies, each with its own unique flavor profile.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 2:\n                [nameContent, descContent] = (\"Craft Beers - Explore our range of locally brewed craft beers, featuring traditional Scottish ales and modern IPA styles.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 3:\n                [nameContent, descContent] = (\"Scottish Gins - Sample our collection of Scottish gins, served with premium tonic and garnishes.\").split(\" -\").join(\":$\").split(\"$\");\n                break;\n            case 4:\n                [nameContent, descContent] = (\"Non-Alcoholic Beverages - Enjoy a variety of non-alcoholic options including Scottish sparkling water, artisanal sodas, and fresh fruit juices.\").split(\" -\").join(\":$\").split(\"$\");\n        }\n        name.textContent = nameContent;\n        desc.textContent = descContent;\n        li.append(name, desc)\n        groupDrinks.append(li);\n    }\n    menu.append(groupStarters, groupMains, groupDesserts, groupDrinks);\n    parent.append(heading, img, menu);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/about-image.jpg":
/*!************************************!*\
  !*** ./src/assets/about-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8226992b100a2e186650.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/about-image.jpg?");

/***/ }),

/***/ "./src/assets/menu-image.jpg":
/*!***********************************!*\
  !*** ./src/assets/menu-image.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"460aaf2eab3fa5e98c10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-image.jpg?");

/***/ }),

/***/ "./src/assets/restaurant-interior.jpg":
/*!********************************************!*\
  !*** ./src/assets/restaurant-interior.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edf8dd6d33773703c90b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/restaurant-interior.jpg?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;