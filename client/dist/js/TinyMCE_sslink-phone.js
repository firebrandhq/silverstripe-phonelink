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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = InsertLinkModal;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = TinyMCEActionRegistrar;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = __webpack_require__(4);

var _i18n2 = _interopRequireDefault(_i18n);

var _TinyMCEActionRegistrar = __webpack_require__(3);

var _TinyMCEActionRegistrar2 = _interopRequireDefault(_TinyMCEActionRegistrar);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

var _InsertLinkModal = __webpack_require__(1);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandName = 'sslinkphone';

_TinyMCEActionRegistrar2.default.addAction('sslink', {
    text: _i18n2.default._t('Admin.LINKLABEL_PHONE', 'Link to phone number'),

    onclick: function onclick(editor) {
        return editor.execCommand(commandName);
    },
    priority: 51
}).addCommandWithUrlTest(commandName, /^tel:/);

var plugin = {
    init: function init(editor) {
        editor.addCommand(commandName, function () {
            var field = window.jQuery('#' + editor.id).entwine('ss');

            field.openLinkPhoneDialog();
        });
    }
};

var modalId = 'insert-link__dialog-wrapper--phone';
var sectionConfigKey = 'SilverStripe\\Admin\\LeftAndMain';
var formName = 'EditorPhoneLink';
var InsertLinkPhoneModal = (0, _Injector.loadComponent)((0, _InsertLinkModal.createInsertLinkModal)(sectionConfigKey, formName));

_jquery2.default.entwine('ss', function ($) {
    $('textarea.htmleditor').entwine({
        openLinkPhoneDialog: function openLinkPhoneDialog() {
            var dialog = $('#' + modalId);

            if (!dialog.length) {
                dialog = $('<div id="' + modalId + '" />');
                $('body').append(dialog);
            }
            dialog.addClass('insert-link__dialog-wrapper');

            dialog.setElement(this);
            dialog.open();
        }
    });

    $('#' + modalId).entwine({
        renderModal: function renderModal(isOpen) {
            var _this = this;

            var handleHide = function handleHide() {
                return _this.close();
            };
            var handleInsert = function handleInsert() {
                return _this.handleInsert.apply(_this, arguments);
            };
            var attrs = this.getOriginalAttributes();
            var selection = tinymce.activeEditor.selection;
            var selectionContent = selection.getContent() || '';
            var tagName = selection.getNode().tagName;
            var requireLinkText = tagName !== 'A' && selectionContent.trim() === '';

            _reactDom2.default.render(React.createElement(InsertLinkPhoneModal, {
                isOpen: isOpen,
                onInsert: handleInsert,
                onClosed: handleHide,
                title: _i18n2.default._t('Admin.LINK_PHONE', 'Insert phone number link'),
                bodyClassName: 'modal__dialog',
                className: 'insert-link__dialog-wrapper--phone',
                fileAttributes: attrs,
                identifier: 'Admin.InsertLinkPhoneModal',
                requireLinkText: requireLinkText
            }), this[0]);
        },
        getOriginalAttributes: function getOriginalAttributes() {
            var editor = this.getElement().getEditor();
            var node = $(editor.getSelectedNode());

            var phone = (node.attr('href') || '').replace(/^tel:/, '');

            return {
                Link: phone,
                Description: node.attr('title')
            };
        },
        buildAttributes: function buildAttributes(data) {
            var attributes = this._super(data);

            var href = '';

            var phone = attributes.href.replace(/^tel:/, '');

            if (phone) {
                href = 'tel:' + phone;
            }
            attributes.href = href;

            delete attributes.target;

            return attributes;
        }
    });
});

tinymce.PluginManager.add(commandName, function (editor) {
    return plugin.init(editor);
});
exports.default = plugin;

/***/ })
/******/ ]);
//# sourceMappingURL=TinyMCE_sslink-phone.js.map