/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__responsiveImage_block_js__ = __webpack_require__(/*! ./responsiveImage/block.js */ 6);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//import './block/block.js';\n//import './block2/block.js';\n//import './block-news/block.js';\n//import './blockNews/block.js';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrLmpzJztcbi8vaW1wb3J0ICcuL2Jsb2NrMi9ibG9jay5qcyc7XG4vL2ltcG9ydCAnLi9ibG9jay1uZXdzL2Jsb2NrLmpzJztcbi8vaW1wb3J0ICcuL2Jsb2NrTmV3cy9ibG9jay5qcyc7XG5pbXBvcnQgJy4vcmVzcG9uc2l2ZUltYWdlL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */
/*!*****************************************!*\
  !*** ./src/responsiveImage/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlSW1hZ2UvZWRpdG9yLnNjc3M/MGU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Jlc3BvbnNpdmVJbWFnZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./src/responsiveImage/style.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlSW1hZ2Uvc3R5bGUuc2Nzcz9kNGZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzcG9uc2l2ZUltYWdlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/responsiveImage/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: Responsive Image\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    RadioControl = _wp$components.RadioControl;\n//const { useState } = wp.element;\n\n// Import our CSS files\n\n\n\n\nregisterBlockType('cgb/responsive-image', {\n  title: 'Responsive Image',\n  icon: 'saved',\n  category: 'common',\n  attributes: {\n    selection: {\n      type: 'string',\n      default: 'img',\n      attribute: 'val',\n      selector: '.responsive_image'\n    },\n    imageAlt: {\n      attribute: 'alt',\n      selector: '.responsive_image'\n    },\n    imageUrl: {\n      attribute: 'src',\n      selector: '.responsive_image'\n    },\n    mobileImgUrl: {\n      attribute: 'msrc',\n      selector: '.responsive_image'\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        className = _ref.className,\n        setAttributes = _ref.setAttributes;\n\n    //const { attributes, setAttributes } = props;\n    //const [ option, setOption ] = useState( 'img' );\n    var onRemoveMobileImage = function onRemoveMobileImage() {\n      setAttributes({\n        mobileImgUrl: undefined\n      });\n    };\n    var onRemoveImage = function onRemoveImage() {\n      setAttributes({\n        imageUrl: undefined\n      });\n    };\n    var getMobileImageButton = function getMobileImageButton(openEvent) {\n      if (attributes.mobileImgUrl) {\n        return wp.element.createElement(\n          'div',\n          { className: 'enclosure' },\n          wp.element.createElement('img', {\n            src: attributes.mobileImgUrl,\n            onClick: openEvent,\n            className: 'image'\n          }),\n          wp.element.createElement(\n            Button,\n            { onClick: onRemoveMobileImage, isLink: true, isDestructive: true },\n            __('Remove background image', 'image-selector-example')\n          )\n        );\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Mobile Img'\n          )\n        );\n      }\n    };\n    var getImageButton = function getImageButton(openEvent) {\n      if (attributes.imageUrl) {\n        return wp.element.createElement(\n          'div',\n          { className: 'image_wrapper' },\n          wp.element.createElement('img', {\n            src: attributes.imageUrl,\n            onClick: openEvent,\n            className: 'image'\n          }),\n          wp.element.createElement(\n            Button,\n            { onClick: onRemoveImage, isLink: true, isDestructive: true },\n            __('Remove background image', 'image-selector-example')\n          )\n        );\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Desktop Img'\n          )\n        );\n      }\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(\n        'p',\n        null,\n        __('Use a mobile and desktop image or just desktop.', 'image-selector-example')\n      ),\n      wp.element.createElement(RadioControl, {\n        label: 'Choose:',\n        help: 'If div, the image will be set as background',\n        selected: attributes.selection || 'img',\n        className: 'element_choice',\n        options: [{ label: 'image', value: 'img' }, { label: 'div', value: 'div' }],\n        onChange: function onChange(newSel) {\n          return setAttributes({ selection: newSel });\n        }\n\n      }),\n      wp.element.createElement(\n        'p',\n        null,\n        attributes.radiosel\n      ),\n      wp.element.createElement(\n        'div',\n        { className: 'media_wrapper' },\n        wp.element.createElement(MediaUpload, {\n          title: 'Mobile Image',\n          onSelect: function onSelect(media) {\n            setAttributes({ imageAlt: media.alt, mobileImgUrl: media.url });\n          },\n          type: 'image',\n          value: attributes.imageID,\n          render: function render(_ref2) {\n            var open = _ref2.open;\n            return getMobileImageButton(open);\n          }\n        }),\n        wp.element.createElement(MediaUpload, {\n          title: 'Desktop Image',\n          onSelect: function onSelect(media) {\n            setAttributes({ imageAlt: media.alt, imageUrl: media.url });\n          },\n          type: 'image',\n          value: attributes.imageID,\n          render: function render(_ref3) {\n            var open = _ref3.open;\n            return getImageButton(open);\n          }\n        })\n      )\n    );\n  },\n  save: function save(_ref4) {\n    var attributes = _ref4.attributes;\n\n\n    var responsiveImage = function responsiveImage(msrc, src, alt, val) {\n      if (msrc && !src) {\n        src = msrc;\n        msrc = undefined;\n      }\n      if (msrc) {\n        var urls = msrc + '|' + src;\n        if (val == 'img') {\n          if (alt) {\n            return wp.element.createElement('img', {\n              'data-back': urls,\n              className: 'responsive_image',\n              src: '',\n              alt: alt\n            });\n          }\n          return wp.element.createElement('img', {\n            'data-back': urls,\n            className: 'responsive_image',\n            src: '',\n            alt: '',\n            'aria-hidden': 'true'\n          });\n        } else {\n          return wp.element.createElement('div', {\n            'data-back': urls,\n            className: 'responsive_image'\n          });\n        }\n      } else {\n        if (val == 'img') {\n          if (alt) {\n            return wp.element.createElement('img', {\n              className: 'responsive_image',\n              src: src,\n              alt: alt\n            });\n          }\n          return wp.element.createElement('img', {\n            className: 'responsive_image',\n            src: src,\n            alt: '',\n            'aria-hidden': 'true'\n          });\n        } else {\n          return wp.element.createElement('div', {\n            style: 'background: url(\\' + { src } + \\')',\n            className: 'responsive_image'\n          });\n        }\n      }\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: 'responsive_image_block' },\n      responsiveImage(attributes.mobileImgUrl, attributes.imageUrl, attributes.imageAlt, attributes.selection)\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlSW1hZ2UvYmxvY2suanM/YWQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBSZXNwb25zaXZlIEltYWdlXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9sZWFybmluZy1ndXRlbmJlcmctNy1idWlsZGluZy1vdXItYmxvY2stY3VzdG9tLWNhcmQtYmxvY2svXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQ7XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBSYWRpb0NvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5SYWRpb0NvbnRyb2w7XG4vL2NvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbi8vIEltcG9ydCBvdXIgQ1NTIGZpbGVzXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvcmVzcG9uc2l2ZS1pbWFnZScsIHtcbiAgdGl0bGU6ICdSZXNwb25zaXZlIEltYWdlJyxcbiAgaWNvbjogJ3NhdmVkJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgc2VsZWN0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdpbWcnLFxuICAgICAgYXR0cmlidXRlOiAndmFsJyxcbiAgICAgIHNlbGVjdG9yOiAnLnJlc3BvbnNpdmVfaW1hZ2UnXG4gICAgfSxcbiAgICBpbWFnZUFsdDoge1xuICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICAgIHNlbGVjdG9yOiAnLnJlc3BvbnNpdmVfaW1hZ2UnXG4gICAgfSxcbiAgICBpbWFnZVVybDoge1xuICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICAgIHNlbGVjdG9yOiAnLnJlc3BvbnNpdmVfaW1hZ2UnXG4gICAgfSxcbiAgICBtb2JpbGVJbWdVcmw6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ21zcmMnLFxuICAgICAgc2VsZWN0b3I6ICcucmVzcG9uc2l2ZV9pbWFnZSdcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuICAgIC8vY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgICAvL2NvbnN0IFsgb3B0aW9uLCBzZXRPcHRpb24gXSA9IHVzZVN0YXRlKCAnaW1nJyApO1xuICAgIHZhciBvblJlbW92ZU1vYmlsZUltYWdlID0gZnVuY3Rpb24gb25SZW1vdmVNb2JpbGVJbWFnZSgpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBtb2JpbGVJbWdVcmw6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgb25SZW1vdmVJbWFnZSA9IGZ1bmN0aW9uIG9uUmVtb3ZlSW1hZ2UoKSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgaW1hZ2VVcmw6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0TW9iaWxlSW1hZ2VCdXR0b24gPSBmdW5jdGlvbiBnZXRNb2JpbGVJbWFnZUJ1dHRvbihvcGVuRXZlbnQpIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzLm1vYmlsZUltZ1VybCkge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZW5jbG9zdXJlJyB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgc3JjOiBhdHRyaWJ1dGVzLm1vYmlsZUltZ1VybCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9wZW5FdmVudCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ltYWdlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgIHsgb25DbGljazogb25SZW1vdmVNb2JpbGVJbWFnZSwgaXNMaW5rOiB0cnVlLCBpc0Rlc3RydWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICBfXygnUmVtb3ZlIGJhY2tncm91bmQgaW1hZ2UnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ01vYmlsZSBJbWcnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGdldEltYWdlQnV0dG9uID0gZnVuY3Rpb24gZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50KSB7XG4gICAgICBpZiAoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW1hZ2Vfd3JhcHBlcicgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgIHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG9wZW5FdmVudCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ltYWdlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgIHsgb25DbGljazogb25SZW1vdmVJbWFnZSwgaXNMaW5rOiB0cnVlLCBpc0Rlc3RydWN0aXZlOiB0cnVlIH0sXG4gICAgICAgICAgICBfXygnUmVtb3ZlIGJhY2tncm91bmQgaW1hZ2UnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ0Rlc2t0b3AgSW1nJ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAncCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9fKCdVc2UgYSBtb2JpbGUgYW5kIGRlc2t0b3AgaW1hZ2Ugb3IganVzdCBkZXNrdG9wLicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJylcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFkaW9Db250cm9sLCB7XG4gICAgICAgIGxhYmVsOiAnQ2hvb3NlOicsXG4gICAgICAgIGhlbHA6ICdJZiBkaXYsIHRoZSBpbWFnZSB3aWxsIGJlIHNldCBhcyBiYWNrZ3JvdW5kJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGF0dHJpYnV0ZXMuc2VsZWN0aW9uIHx8ICdpbWcnLFxuICAgICAgICBjbGFzc05hbWU6ICdlbGVtZW50X2Nob2ljZScsXG4gICAgICAgIG9wdGlvbnM6IFt7IGxhYmVsOiAnaW1hZ2UnLCB2YWx1ZTogJ2ltZycgfSwgeyBsYWJlbDogJ2RpdicsIHZhbHVlOiAnZGl2JyB9XSxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld1NlbCkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgc2VsZWN0aW9uOiBuZXdTZWwgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYXR0cmlidXRlcy5yYWRpb3NlbFxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnbWVkaWFfd3JhcHBlcicgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgdGl0bGU6ICdNb2JpbGUgSW1hZ2UnLFxuICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIG1vYmlsZUltZ1VybDogbWVkaWEudXJsIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5pbWFnZUlELFxuICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9iaWxlSW1hZ2VCdXR0b24ob3Blbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgdGl0bGU6ICdEZXNrdG9wIEltYWdlJyxcbiAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QobWVkaWEpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5pbWFnZUlELFxuICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYzKSB7XG4gICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYzLm9wZW47XG4gICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VCdXR0b24ob3Blbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjQpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWY0LmF0dHJpYnV0ZXM7XG5cblxuICAgIHZhciByZXNwb25zaXZlSW1hZ2UgPSBmdW5jdGlvbiByZXNwb25zaXZlSW1hZ2UobXNyYywgc3JjLCBhbHQsIHZhbCkge1xuICAgICAgaWYgKG1zcmMgJiYgIXNyYykge1xuICAgICAgICBzcmMgPSBtc3JjO1xuICAgICAgICBtc3JjID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKG1zcmMpIHtcbiAgICAgICAgdmFyIHVybHMgPSBtc3JjICsgJ3wnICsgc3JjO1xuICAgICAgICBpZiAodmFsID09ICdpbWcnKSB7XG4gICAgICAgICAgaWYgKGFsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgICAnZGF0YS1iYWNrJzogdXJscyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmVzcG9uc2l2ZV9pbWFnZScsXG4gICAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICAgIGFsdDogYWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgJ2RhdGEtYmFjayc6IHVybHMsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyZXNwb25zaXZlX2ltYWdlJyxcbiAgICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgICBhbHQ6ICcnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2RhdGEtYmFjayc6IHVybHMsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyZXNwb25zaXZlX2ltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsID09ICdpbWcnKSB7XG4gICAgICAgICAgaWYgKGFsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdyZXNwb25zaXZlX2ltYWdlJyxcbiAgICAgICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgICAgIGFsdDogYWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmVzcG9uc2l2ZV9pbWFnZScsXG4gICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgIGFsdDogJycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICBzdHlsZTogJ2JhY2tncm91bmQ6IHVybChcXCcgKyB7IHNyYyB9ICsgXFwnKScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyZXNwb25zaXZlX2ltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncmVzcG9uc2l2ZV9pbWFnZV9ibG9jaycgfSxcbiAgICAgIHJlc3BvbnNpdmVJbWFnZShhdHRyaWJ1dGVzLm1vYmlsZUltZ1VybCwgYXR0cmlidXRlcy5pbWFnZVVybCwgYXR0cmlidXRlcy5pbWFnZUFsdCwgYXR0cmlidXRlcy5zZWxlY3Rpb24pXG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzcG9uc2l2ZUltYWdlL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);