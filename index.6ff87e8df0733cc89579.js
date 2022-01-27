"use strict";
(self["webpackChunkwfs_01"] = self["webpackChunkwfs_01"] || []).push([["index"],{

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
__webpack_require__(/*! ./app.scss */ "./src/app.scss");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        document.body.innerHTML = "\n            <div class=\"keyup\">\n                <b>KEYUP (e.key - e.code)</b>\n            </div>\n            <div class=\"keydown\">\n                <b>KEYDOWN (e.key - e.code)</b>\n            </div>\n        ";
        window.onkeyup = function (e) {
            console.log(e.type, e);
            _this.addLog(e);
        };
        window.onkeydown = function (e) {
            console.log(e.type, e);
            _this.addLog(e);
        };
    }
    App.prototype.addLog = function (e) {
        var target = document.querySelector("div.".concat(e.type));
        target.insertAdjacentHTML('beforeend', "\n            <div class=\"key\">".concat(e.key, " - ").concat(e.code, "</div>\n        "));
        target.scrollTop = target.scrollHeight;
    };
    return App;
}());
exports.App = App;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var App_1 = __webpack_require__(/*! ./App */ "./src/App.ts");
console.clear();
console.log(new Date());
new App_1.App();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=index.6ff87e8df0733cc89579.js.map