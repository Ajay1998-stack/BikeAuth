(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-bike-form></app-bike-form> -->\n\n<!-- <app-user-form></app-user-form> -->\n\n<!-- <div class=\"container-fluid\">\n<mat-toolbar color=\"primary\" class=\"navbar\">\n        <div>BOOL</div>\n        <div>\n            <span>Home</span>\n            <span>About</span>\n        </div>\n</mat-toolbar>\n</div> -->\n\n<!-- <app-map></app-map> -->\n\n<!-- <canvas width=\"1520\" height=\"600\" \n        style=\"position: absolute; width: 760px; height: 300px;\">\n        <app-map></app-map>\n</canvas> -->\n\n<!-- <app-map-stations></app-map-stations> -->\n\n<!-- <app-navigation></app-navigation> -->\n<!-- <app-map-navigation></app-map-navigation> -->\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bike-form/bike-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bike-form/bike-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n   <div class=\"row\">\n       <mat-toolbar color=\"accent\" class=\"app-header\">\n           <div class=\"logo-image\" routerLink=\"\"> </div>\n           <div id=\"writing\">\n               <p><strong> BOLT TO YOUR DESTINATION </strong></p>\n           </div>\n       </mat-toolbar>\n   </div>>\n</div>\n\n<div class=\"container-fluid\">\n   <div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n       <mat-card class=\"box\">\n           <mat-card-header>\n               <mat-card-title>Bike Login</mat-card-title>\n           </mat-card-header>\n\n           <form class=\"example-form\">\n                <mat-card-content>\n                   <mat-form-field class=\"example-full-width\">\n                       <input type=\"text\" matInput placeholder=\"Console ID\" name=\"consoleId\" [(ngModel)]=\"consoleId\">\n                   </mat-form-field>\n               </mat-card-content>\n               <a mat-stroked-button (click)=bikeLogin() color=\"accent\" class=\"btn-block\"><strong>Login</strong></a>\n           </form>\n       </mat-card>\n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <mat-toolbar color=\"accent\" class=\"app-header\">\n            <div class=\"logo-image\" routerLink=\"\"> </div>\n            <div id=\"writing\">\n                <p><strong> BOLT TO YOUR DESTINATION </strong></p>\n            </div>\n        </mat-toolbar>\n    </div>>\n</div> \n\n<div class=\"container-fluid\">\n    <mat-card class=\"card-center\">\n        <mat-card-title>BOLT Invoice</mat-card-title>\n        <mat-card-content>Fare: {{fare}}</mat-card-content>\n        <mat-card-content>Travel Distance: {{travelDistance}}</mat-card-content>\n    </mat-card>\n</div>\n\n<a mat-stroked-button (click)=logOut() color=\"accent\" class=\"btn-block\"><strong>SIGN OUT</strong></a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-navigation/map-navigation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-navigation/map-navigation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>map-navigation works!</p> -->\n<div id='map'></div>\n\n<div *ngIf=\"rideStarted;then thenBlock;else elseBlock\"></div>\n\n<<ng-template #thenBlock>\n    <!-- <button class=\"trip-button\" *ngIf=\"rideStarted\" (click)=\"endTrip()\" mat-button>End Trip</button> -->\n    <!-- <div *ngIf=\"isCharging;then endTripBlock\"></div> -->\n    <ng-template *ngIf=\"isCharging;then endTripBlock\"></ng-template>\n    <ng-template #endTripBlock>  \n        <a mat-raised-button (click)=\"endTrip()\" color=\"accent\" class=\"btn-block\"><strong>End Trip</strong></a>\n    </ng-template> \n</ng-template>\n\n<<ng-template #elseBlock>\n    <!-- <button class=\"trip-button\" (click)=\"startTrip()\" mat-button>Start Trip</button> -->\n    <a mat-raised-button (click)=\"startTrip()\" color=\"accent\" class=\"btn-block\"><strong>Start Trip</strong></a>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-stations/map-stations.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-stations/map-stations.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>map-stations works!</p> -->\n\n<mat-toolbar color=\"primary\" class=\"navbar\">\n    <div>BOLT</div>\n    <!-- <div>\n        <span>Home</span>\n        <span>About</span>\n    </div> -->\n</mat-toolbar>\n\n<div id='map'></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='map'></div>\n<pre id='coordinates' class='coordinates'></pre>\n\n<!-- <button (click)=\"onClick()\" mat-button>Next</button> -->\n<a mat-raised-button (click)=\"onClick()\" color=\"accent\" class=\"btn-block\"><strong>Next</strong></a>\n\n<!-- <script>\n\n        setInterval(function(battery) {\n            var level = battery.level;\n            console.log(level);\n            },3000);\n\n        navigator.getBattery().then((battery) => {\n\n    \n          battery.ondischargingtimechange = (event) => { \n            console.warn('Discharging : ', event.target.level) \n          };\n    \n          battery.onchargingtimechange = (event) => { \n            console.info('Charging : ', event.target.level) ;\n          };\n\n          battery.onchargingchange = (event) => { \n            console.info('Charging Change : ', event.target.level) ;\n          };\n\n          battery.onlevelchange = (event) => { \n            console.warn('Level Change : ', event.target.level) \n          };\n\n        });\n        navigator.getBattery().then(function(battery) {\n    \n          var level = battery.level;\n    \n          console.log(level);\n        });\n</script> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <mat-toolbar color=\"accent\" class=\"app-header\">\n            <div class=\"logo-image\" routerLink=\"\"> </div>\n            <div id=\"writing\">\n                <p><strong> BOLT TO YOUR DESTINATION </strong></p>\n            </div>\n        </mat-toolbar>\n    </div>>\n </div>\n \n\n<!-- <div *ngIf=\"check\" ></div> -->\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID </th>\n        <td mat-cell *matCellDef=\"let station\"> {{station.id}} </td>\n    </ng-container> -->\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Station Name </th>\n        <td mat-cell *matCellDef=\"let station\" (click)=\"navigate(station.latitude, \n            station.longitude)\"> {{station.name}} </td>\n    </ng-container>    \n\n    <ng-container matColumnDef=\"travelDistance\">\n        <th mat-header-cell *matHeaderCellDef> Travel Distance(km) </th>\n        <td mat-cell *matCellDef=\"let station\"> {{station.travelDistance}} </td>\n        <!-- <td mat-cell *matCellDef=\"let station\" (click)=\"navigate({{station.latitude}}, \n        {{station.longitude}})\"> {{station.travelDistance}} </td> -->\n    </ng-container>\n\n    <ng-container matColumnDef=\"travelDuration\">\n        <th mat-header-cell *matHeaderCellDef> Travel Duration(minutes) </th>\n        <td mat-cell *matCellDef=\"let station\"> {{station.travelDuration}} </td>\n        <!-- <td mat-cell *matCellDef=\"let station\" (click)=\"navigate({{station.latitude}}, \n        {{station.longitude}})\"> {{station.travelDuration}} </td> -->\n    </ng-container>\n  \n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n\n\n<!-- <div *ngFor= \"let a of dataSource\"> \n    {{a.travelDistance}}\n</div> -->\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <mat-toolbar color=\"accent\" class=\"app-header\">\n            <div class=\"logo-image\" routerLink=\"\"> </div>\n            <div id=\"writing\">\n                <p><strong> BOLT TO YOUR DESTINATION </strong></p>\n            </div>\n        </mat-toolbar>\n    </div>>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-card class=\"box\">\n            <mat-card-header>\n                <mat-card-title>User Login</mat-card-title>\n            </mat-card-header>\n\n            <form class=\"example-form\">\n\n                <mat-card-content>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" matInput placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n                    </mat-form-field>\n\n                </mat-card-content>\n                <a mat-stroked-button (click)=userLogin() color=\"accent\" class=\"btn-block\"><strong>SIGN IN</strong></a>\n            </form>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-location/user-location.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-location/user-location.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-location works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _bike_form_bike_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bike-form/bike-form.component */ "./src/app/bike-form/bike-form.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _map_stations_map_stations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-stations/map-stations.component */ "./src/app/map-stations/map-stations.component.ts");
/* harmony import */ var _map_navigation_map_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-navigation/map-navigation.component */ "./src/app/map-navigation/map-navigation.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










const routes = [
    { path: '', redirectTo: '/user-form', pathMatch: 'full' },
    // { path: 'map', component: MapComponent,canActivate:[AuthGaurdService]},
    // { path: 'map-navigation/:coordinate1/:coordinate2', component: MapNavigationComponent,canActivate:[AuthGaurdService]},
    // { path: 'routing/:coordinate1/:coordinate2', component: RoutingComponent,canActivate:[AuthGaurdService]},
    // { path: 'invoice/:invoiceObj', component: InvoiceComponent, canActivate:[AuthGaurdService]},
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"] },
    { path: 'map-navigation/:coordinate1/:coordinate2', component: _map_navigation_map_navigation_component__WEBPACK_IMPORTED_MODULE_6__["MapNavigationComponent"] },
    { path: 'routing/:coordinate1/:coordinate2', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_2__["RoutingComponent"] },
    { path: 'invoice/:invoiceObj', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceComponent"] },
    { path: 'map-stations', component: _map_stations_map_stations_component__WEBPACK_IMPORTED_MODULE_5__["MapStationsComponent"] },
    { path: 'user-form', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
    { path: 'bike-form', component: _bike_form_bike_form_component__WEBPACK_IMPORTED_MODULE_3__["BikeFormComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"], _map_navigation_map_navigation_component__WEBPACK_IMPORTED_MODULE_6__["MapNavigationComponent"], _map_stations_map_stations_component__WEBPACK_IMPORTED_MODULE_5__["MapStationsComponent"],
    _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"], _bike_form_bike_form_component__WEBPACK_IMPORTED_MODULE_3__["BikeFormComponent"], _routing_routing_component__WEBPACK_IMPORTED_MODULE_2__["RoutingComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/* .navbar {\n    justify-content: space-between;\n}  \n  \nspan {\n    padding: 1rem;\n} */\n/* \n.map {\n    position: relative;\n    height: 60%;\n    display: flex;\n    flex-direction: row;\n} */\n/* .search {\n    position: relative;\n} */\n/* .map {\n    position: relative;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7O0dBTUc7QUFDSDs7Ozs7O0dBTUc7QUFFSDs7R0FFRztBQUVIOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyogLm5hdmJhciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSAgXG4gIFxuc3BhbiB7XG4gICAgcGFkZGluZzogMXJlbTtcbn0gKi9cbi8qIFxuLm1hcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0gKi9cblxuLyogLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSAqL1xuXG4vKiAubWFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59ICovIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    // public batteryLevel = window["level"];
    constructor() {
        this.title = 'Route-Optimizer-Interface';
        // console.log(this.batteryLevel);
    }
    ngOnInit() {
        // this.batteryLevel = window["level"];
        // console.log(this.batteryLevel);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _routingapiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routingapiservice.service */ "./src/app/routingapiservice.service.ts");
/* harmony import */ var _trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip.service */ "./src/app/trip.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _user_location_user_location_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-location/user-location.component */ "./src/app/user-location/user-location.component.ts");
















// import { RoutingComponent } from './routing/routing.component';
// import { BikeFormComponent } from './bike-form/bike-form.component';
// import { UserFormComponent } from './user-form/user-form.component';
// import { MapComponent } from './map/map.component';
// import { MapStationsComponent } from './map-stations/map-stations.component';
// import { MapNavigationComponent } from './map-navigation/map-navigation.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["routingComponents"],
            _user_location_user_location_component__WEBPACK_IMPORTED_MODULE_15__["UserLocationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"]
        ],
        providers: [_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"], _routingapiservice_service__WEBPACK_IMPORTED_MODULE_1__["RoutingapiserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/auth-service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: User, JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class User {
    constructor(status) {
        this.status = status;
    }
}
class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(username, password) {
        return this.httpClient.post('http://localhost:8082/authenticate', { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/bike-form/bike-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/bike-form/bike-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-image {\n  background-image: url('bolt.svg');\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 90px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-top: -6px;\n  outline: none;\n}\n\n.app-header {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n#writing {\n  margin-top: 20px;\n}\n\n#userLogin {\n  margin-top: 35px;\n}\n\n.my-card {\n  left: 25%;\n}\n\n.login-wrapper {\n  height: 100%;\n  margin-top: 150px;\n  margin-bottom: 50px;\n  \n}\n\n.positronx {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 500px;\n}\n\n.box.back {\n  transform: scale(.95);\n  -webkit-transform: scale(.95);\n  -ms-transform: scale(.95);\n  top: -20px;\n  opacity: .8;\n  z-index: -1;\n}\n\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, .6);\n  left: 0;\n  transform: scale(.95);\n  -webkit-transform: scale(.95);\n  -ms-transform: scale(.95);\n  z-index: -1;\n}\n\n.login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n  width: 100%;\n}\n\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0px;\n}\n\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: rgb(39, 34, 36);\n  color: #FFC107;\n  font-size: 17px;\n}\n\n.login-wrapper .mat-stroked-button:hover {\n  background: #FFC107;\n  color: white;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n/* Navbar Image-logo */\n\n#newUserHyper {\n  margin-left: 100px;\n  margin-top: 15px;\n}\n\nmat-form-field.mat-form-field {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlrZS1mb3JtL2Jpa2UtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLDhHQUE4RztBQUNoSDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsT0FBTztFQUNQLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBR0Esc0JBQXNCOztBQUV0QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmlrZS1mb3JtL2Jpa2UtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYm9sdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuI3dyaXRpbmcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jdXNlckxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLm15LWNhcmQge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5sb2dpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgXG59XG5cbi5wb3NpdHJvbngge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgei1pbmRleDogNTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmJveC5iYWNrIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgdG9wOiAtMjBweDtcbiAgb3BhY2l0eTogLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcbi5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDQwcHggNzBweCA1MHB4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogcmdiKDM5LCAzNCwgMzYpO1xuICBjb2xvcjogI0ZGQzEwNztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuXG4vKiBOYXZiYXIgSW1hZ2UtbG9nbyAqL1xuXG4jbmV3VXNlckh5cGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bike-form/bike-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bike-form/bike-form.component.ts ***!
  \**************************************************/
/*! exports provided: BikeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeFormComponent", function() { return BikeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let BikeFormComponent = class BikeFormComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    bikeLogin() {
        this.router.navigate(['/user-form']);
    }
};
BikeFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BikeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bike-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bike-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bike-form/bike-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bike-form.component.css */ "./src/app/bike-form/bike-form.component.css")).default]
    })
], BikeFormComponent);



/***/ }),

/***/ "./src/app/booking.ts":
/*!****************************!*\
  !*** ./src/app/booking.ts ***!
  \****************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Booking {
}


/***/ }),

/***/ "./src/app/invoice.ts":
/*!****************************!*\
  !*** ./src/app/invoice.ts ***!
  \****************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Invoice {
}


/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/*!***********************************************!*\
  !*** ./src/app/invoice/invoice.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-image {\n    background-image: url('bolt.svg');\n    background-repeat: no-repeat;\n    width: 100px;\n    height: 90px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin-top: -6px;\n    outline: none;\n  }\n  \n  .app-header {\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n  }\n  \n  #writing {\n    margin-top: 20px;\n  }\n  \n  .container-fluid {\n  margin-top: 40px;\n  /* align-items: center; */\n}\n  \n  .card-center {\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n  \n  .card-center>mat-card-title {\n  text-align: center;\n}\n  \n  .btn-block {\n  width: 40%;\n  margin-top: 30px;\n  margin-left: 29%;\n  margin-right: 27%;\n  text-align: center;\n}\n  \n  .mat-stroked-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: rgb(39, 34, 36);\n  color: #FFC107;\n  font-size: 17px;\n}\n  \n  .mat-stroked-button:hover {\n  background: #FFC107;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsOEdBQThHO0VBQ2hIOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9ib2x0LnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLmFwcC1oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgfVxuICBcbiAgI3dyaXRpbmcge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG5cbi5jYXJkLWNlbnRlciB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4uY2FyZC1jZW50ZXI+bWF0LWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmxvY2sge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMjklO1xuICBtYXJnaW4tcmlnaHQ6IDI3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogcmdiKDM5LCAzNCwgMzYpO1xuICBjb2xvcjogI0ZGQzEwNztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InvoiceComponent = class InvoiceComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        console.log("Invoice: " + this.route.snapshot.paramMap.get('invoiceObj'));
        var invoice = JSON.parse(this.route.snapshot.paramMap.get('invoiceObj'));
        console.log(invoice);
        this.fare = invoice["fare"];
        this.travelDistance = invoice["travelDistance"];
        console.log(this.fare);
    }
};
InvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice.component.css */ "./src/app/invoice/invoice.component.css")).default]
    })
], InvoiceComponent);



/***/ }),

/***/ "./src/app/map-navigation/map-navigation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/map-navigation/map-navigation.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map { \n    position:absolute;\n    top:0;\n    bottom:0;\n    width:100%; \n}\n\nbody { margin:0; padding:0; }\n\n.btn-block {\n    width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW5hdmlnYXRpb24vbWFwLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQSxPQUFPLFFBQVEsRUFBRSxTQUFTLEVBQUU7O0FBRTVCO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFwLW5hdmlnYXRpb24vbWFwLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAgeyBcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206MDtcbiAgICB3aWR0aDoxMDAlOyBcbn1cblxuYm9keSB7IG1hcmdpbjowOyBwYWRkaW5nOjA7IH1cblxuLmJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/map-navigation/map-navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/map-navigation/map-navigation.component.ts ***!
  \************************************************************/
/*! exports provided: MapNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapNavigationComponent", function() { return MapNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../invoice */ "./src/app/invoice.ts");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../payment */ "./src/app/payment.ts");
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../booking */ "./src/app/booking.ts");
/* harmony import */ var _trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../trip.service */ "./src/app/trip.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routingapiservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routingapiservice.service */ "./src/app/routingapiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let MapNavigationComponent = class MapNavigationComponent {
    constructor(routeapiservice, zone, route, tripservice, router) {
        this.routeapiservice = routeapiservice;
        this.zone = zone;
        this.route = route;
        this.tripservice = tripservice;
        this.router = router;
        this.rideStarted = false;
        // booking: Booking = new Booking("12345", "MH49-7867", 95, 0, "Forum Mall", 
        //   "Phoenix Marketcity");
        this.booking = new _booking__WEBPACK_IMPORTED_MODULE_3__["Booking"]();
        this.payment = new _payment__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
        this.invoice = new _invoice__WEBPACK_IMPORTED_MODULE_1__["Invoice"]();
        this.isCharging = false;
        this.points = [];
        // coordinates = [[12.934485,77.6192336],[12.934603,77.611312]];
        this.coordinates = [];
        this.checkforbranching = "this is to see if branching and updation have happened or not";
    }
    ngOnInit() {
        // console.log(window.navigator.getBattery())
        // End Trip Button is shown only if the device is charging 
        console.log();
        let that = this;
        let battery_navigator;
        battery_navigator = this.getWindow().navigator.getBattery();
        battery_navigator.then(battery => {
            // console.log("Is charging: " + battery.charging);
            // battery.onchargingchange = onStartCharging();
            // function onStartCharging() {
            //   that.isCharging = true;
            // }
            battery.addEventListener('chargingchange', function () {
                updateChargeInfo();
            });
            function updateChargeInfo() {
                console.log("Battery charging? "
                    + (battery.charging ? "Yes" : "No"));
                if (battery.charging) {
                    that.isCharging = true;
                }
                else {
                    that.isCharging = false;
                }
                console.log(that.isCharging);
            }
        });
        // console.log(this.booking);
        console.log("Coord1: " + this.route.snapshot.paramMap.get('coordinate1') + "\n");
        // console.log(typeof(this.route.snapshot.paramMap.get('coord1')));
        // console.log(this.route.snapshot.paramMap.get('coord1').split(","));
        // console.log(JSON.parse(this.route.snapshot.paramMap.get('coord1')));
        console.log("Coord2: " + this.route.snapshot.paramMap.get('coordinate2') + "\n");
        // console.log(this.coordinates[0][1]);
        this.coordinates[0] = JSON.parse(this.route.snapshot.paramMap.get('coordinate1'));
        this.coordinates[1] = JSON.parse(this.route.snapshot.paramMap.get('coordinate2'));
        var midPointLong = (this.coordinates[0][1] + this.coordinates[1][1]) / 2;
        var midPointLat = (this.coordinates[0][0] + this.coordinates[1][0]) / 2;
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_6__, "accessToken").set('pk.eyJ1IjoiZ2F1dGhhbTk5IiwiYSI6ImNrMzRlMmxrNjE0ZTMzbXBhOWRwdDk1eTcifQ.-ZceQ8jARpf90y0tJnQhoQ');
        let map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            // center: [this.coordinates[0][1]+0.002,this.coordinates[0][0]+0.002],
            center: [midPointLong, midPointLat],
            zoom: 13
        });
        updatepointsonmap(this.coordinates);
        this.routeapiservice.getGeoJsonLatLOng(this.coordinates).subscribe((data2) => {
            this.zone.run(() => {
                this.waypoints = data2;
                makegeojsonline(data2);
            });
        });
        // var geomarker = new mapboxgl.Marker(
        //   {
        //     draggable: true,
        //     color: "orange"
        //   })
        //   .setLngLat([77.65542724609375, 12.940049667358398])
        //   .addTo(map);
        function makegeojsonline(coordinateset) {
            map.on('load', function () {
                var actualcordinates = coordinateset.resourceSets[0].resources[0].routePath.line.coordinates;
                var revcoordinates = [];
                for (var j = 0; j < actualcordinates.length; j++) {
                    revcoordinates[j] = [actualcordinates[j][1], actualcordinates[j][0]];
                }
                console.log(revcoordinates);
                map.addLayer({
                    "id": "route",
                    "type": "line",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": revcoordinates
                            }
                        }
                    },
                    "layout": {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    "paint": {
                        "line-color": "#2d81b3",
                        "line-width": 5
                    }
                });
            });
        }
        function updatepointsonmap(coordinates) {
            for (var i = 0; i < 2; i++) {
                var geomarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["Marker"]({
                    draggable: false,
                    color: "orange"
                })
                    .setLngLat([coordinates[i][1], coordinates[i][0]])
                    .addTo(map);
            }
        }
    } // ngOnit ends
    startTrip() {
        this.booking.user_id = '12345';
        this.booking.vehicle_id = "MH49-7867";
        this.booking.initial_meter_reading = 95;
        this.booking.final_meter_reading = this.booking.initial_meter_reading;
        this.booking.start_station = "Christ Uni";
        this.booking.end_station = "Phoenix Marketcity";
        this.rideStarted = true;
        console.log(this.booking);
        // this.tripservice.startTripBooking(this.booking).subscribe();
    }
    endTrip() {
        this.rideStarted = false;
        this.booking["final_meter_reading"] += Math.floor((Math.random() * 10) + 1);
        // this.tripservice.endTripBooking(this.booking).subscribe(data => {
        //   console.log(data);
        //   console.log(data["booking_id"]);
        //   // booking_id = data["booking_id"];
        //   // fare = Math.round(data["fare"]);
        //   makePayment(data["booking_id"], Math.round(data["fare"]), this.tripservice);
        // });
        //////////////////////////////
        // Only for testing payment service
        // this.payment.fare = 100;
        // this.payment.userID = "raj@gmail.com";
        // this.payment.booking_id = "54321";
        // console.log(this.payment);
        // this.tripservice.pay(this.payment).subscribe();
        ///////////////////////////////
        // Only for Invoice
        // const invoice = new Invoice();
        // invoice.fare = 100;
        // invoice.travelDistance = 15;
        // console.log(invoice);
        // this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        this.tripservice.getInvoice().subscribe(invoice => {
            console.log(invoice);
            this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        });
        /////////////////////////////////
        function makePayment(booking_id, fare, tripservice) {
            console.log("fare: " + fare);
            console.log("booking_id: " + booking_id);
            const payment = new _payment__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
            payment.fare = fare;
            payment.userID = "User001";
            payment.booking_id = booking_id;
            console.log(payment);
            const invoice = new _invoice__WEBPACK_IMPORTED_MODULE_1__["Invoice"]();
            invoice.fare = 100;
            invoice.travelDistance = 15;
            console.log(invoice);
            // tripservice.pay(payment).subscribe();
            // tripservice.getInvoice().subscribe(invoice => {
            //   console.log(invoice);
            //   this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
            // });
            this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        }
    }
    getWindow() {
        return window;
    }
};
MapNavigationComponent.ctorParameters = () => [
    { type: _routingapiservice_service__WEBPACK_IMPORTED_MODULE_7__["RoutingapiserviceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
MapNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-map-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-navigation/map-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-navigation.component.css */ "./src/app/map-navigation/map-navigation.component.css")).default]
    })
], MapNavigationComponent);



/***/ }),

/***/ "./src/app/map-stations/map-stations.component.css":
/*!*********************************************************!*\
  !*** ./src/app/map-stations/map-stations.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 70%;\n}\n\nbody { margin:0; padding:0; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXN0YXRpb25zL21hcC1zdGF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQSxPQUFPLFFBQVEsRUFBRSxTQUFTLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9tYXAtc3RhdGlvbnMvbWFwLXN0YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbn1cblxuYm9keSB7IG1hcmdpbjowOyBwYWRkaW5nOjA7IH0iXX0= */");

/***/ }),

/***/ "./src/app/map-stations/map-stations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/map-stations/map-stations.component.ts ***!
  \********************************************************/
/*! exports provided: MapStationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapStationsComponent", function() { return MapStationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);



let MapStationsComponent = class MapStationsComponent {
    constructor() { }
    ngOnInit() {
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, "accessToken")
            .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
        let map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            container: 'map',
            style: 'mapbox://styles/saurabhbagade/ck3e30rr20gwn1cpefhoxnf6u',
            center: [77.641431, 12.970582],
            zoom: 11.5 // starting zoom
        });
        map.on('click', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['stations'] // replace this with the name of the layer
            });
            if (!features.length) {
                return;
            }
            var feature = features["0"];
            console.log(feature);
            var popup = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
                .addTo(map);
        });
    }
};
MapStationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-stations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-stations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-stations/map-stations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-stations.component.css */ "./src/app/map-stations/map-stations.component.css")).default]
    })
], MapStationsComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map { \n    position: absolute; \n    /* left:30;  */\n    top: 0;\n    width:100%; \n    height: 100%;\n}\n\n.coordinates {\n    background: rgba(0,0,0,0.5);\n    color: #fff;\n    position: absolute;\n    bottom: 40px;\n    left: 10px;\n    padding:5px 10px;\n    margin: 0;\n    font-size: 11px;\n    line-height: 18px;\n    border-radius: 3px;\n    display: none;\n}\n\n#geocoder-container > div {\n    min-width:50%;\n    margin-left:25%;\n}\n\nbody {\n     margin:0; padding:0; \n}\n\n.btn-block {\n    width: 10%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0tBQ0ssUUFBUSxFQUFFLFNBQVM7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAvKiBsZWZ0OjMwOyAgKi9cbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6MTAwJTsgXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29vcmRpbmF0ZXMge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzo1cHggMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ2VvY29kZXItY29udGFpbmVyID4gZGl2IHtcbiAgICBtaW4td2lkdGg6NTAlO1xuICAgIG1hcmdpbi1sZWZ0OjI1JTtcbn1cblxuYm9keSB7XG4gICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7IFxufVxuXG4uYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogMTAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ "./node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js");
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MapComponent = class MapComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        //  navigator.getBattery().then(data => console.log(data))
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, "accessToken")
            .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
        var coordinates = document.getElementById('coordinates');
        let map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [77.618436, 12.929369],
            zoom: 13 // starting zoom
        });
        // Bangalore center location = 12.954517,77.3507367 (from Google Maps)
        /*
          BBox Bound
          12.420498, 77.464691 South-west
          13.225842, 77.736004 North-east
        */
        var geoMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"]({
            draggable: true,
        }).setLngLat([77.3507367, 12.954517])
            .addTo(map);
        var geocoder = new _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__({
            accessToken: mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["accessToken"],
            // marker: {
            //   draggable: true,
            //   color: 'orange'
            // },
            marker: false,
            countries: 'in',
            bbox: [77.464691, 12.420498, 77.736004, 13.225842],
            filter: function (item) {
                // returns true if item contains Bangalore asa place
                return item.context.map(function (i) {
                    // id is in the form {index}.{id} per https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
                    // this example attempts to find the `place` named 'Bangalore'
                    return (i.id.split('.').shift() === 'place' && i.text === 'Bangalore');
                }).reduce(function (acc, cur) {
                    return acc || cur;
                });
            },
            mapboxgl: mapbox_gl__WEBPACK_IMPORTED_MODULE_2__
        });
        map.addControl(geocoder);
        function onDragEnd() {
            var lngLat = geoMarker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
        }
        geoMarker.on('dragend', onDragEnd);
        // geocoder.on('results', onDragEnd);
        // console.log(geocoder.accessToken);
        geocoder.on('results', (results) => {
            console.log(results.features[0].center);
            // console.log(results.features[0]);
            // var longitude = results.features[0].center[0] - 0.001;
            // var latitude = results.features[0].center[1]  - 0.001;
            this.destCoordinateLat = results.features[0].center[1];
            this.destCoordinateLng = results.features[0].center[0];
            geoMarker.setLngLat(results.features[0].center);
            // console.log("Coordinates type: " + typeof(results.features[0].center[0]));
        });
        var geoLocate = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["GeolocateControl"]({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });
        map.addControl(geoLocate);
        geoLocate.on('geolocate', (Position) => {
            console.log('User Longitude: ' + Position.coords.longitude +
                'User Latitude: ' + Position.coords.latitude);
            this.userCoordinateLat = Position.coords.latitude;
            this.userCoordinateLng = Position.coords.longitude;
            var geoMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"]({
                draggable: true,
                color: "orange"
            }).setLngLat([Position.coords.longitude, Position.coords.latitude])
                .addTo(map);
        });
        map.on('load', function () {
            geoLocate.trigger();
        });
    }
    onClick() {
        var userCoordinate = [this.userCoordinateLat, this.userCoordinateLng];
        var destCoordinate = [this.destCoordinateLat, this.destCoordinateLng];
        console.log(userCoordinate, destCoordinate);
        // this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
        this.router.navigateByUrl(`/routing/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
        // this.router.navigateByUrl(`/map-navigation/[[`+coord1+"]"+","+"["+coord2+"]]");
        // this.router.navigate(['/map-navigation', coord1, coord2]);
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/payment.ts":
/*!****************************!*\
  !*** ./src/app/payment.ts ***!
  \****************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Payment {
}


/***/ }),

/***/ "./src/app/routing/routing.component.css":
/*!***********************************************!*\
  !*** ./src/app/routing/routing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n}\n\n.logo-image {\n    background-image: url('bolt.svg');\n    background-repeat: no-repeat;\n    width: 100px;\n    height: 90px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin-top: -6px;\n    outline: none;\n  }\n\n.app-header {\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n#writing {\n    margin-top: 20px;\n}\n\n#userLogin {\n    margin-top: 35px;\n}\n\n.mat-elevation-z8 {\n    margin-top: 60px;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVGO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYm9sdC5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4uYXBwLWhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4jd3JpdGluZyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3VzZXJMb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _routingapiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../routingapiservice.service */ "./src/app/routingapiservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RoutingComponent = class RoutingComponent {
    constructor(routingservice, route, router) {
        this.routingservice = routingservice;
        this.route = route;
        this.router = router;
        this.displayedColumnsDummy = ['id', 'travelDistance', 'travelDuration'];
        this.dummyResults = [
            { id: 0, travelDistance: 10, travelDuration: 20.5 },
            { id: 1, travelDistance: 15, travelDuration: 24.5 },
        ];
        this.displayedColumns = ['name', 'travelDistance', 'travelDuration'];
        this.coordinates = [];
        this.results = [];
        this.check = false;
        this.dataSource = [];
    }
    ngOnInit() {
        console.log("Routing Coord1: " + this.route.snapshot.paramMap.get('coordinate1') + "\n");
        console.log("Routing Coord2: " + this.route.snapshot.paramMap.get('coordinate2') + "\n");
        this.coordinates[0] = JSON.parse(this.route.snapshot.paramMap.get('coordinate1'));
        this.coordinates[1] = JSON.parse(this.route.snapshot.paramMap.get('coordinate2'));
        this.routingservice.getDistanceMatrix(this.coordinates[1]).subscribe(data => {
            console.log("POST Request is successful ", data);
            console.log(typeof (data["resourceSets"]));
            this.results = data["resourceSets"][0]["resources"][0]["results"];
            // console.log(data["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"]);
            // console.log("Inside: " + this.results);
            console.log("Inside subscribe!");
            console.log(this.results);
            findNearestStations(this.results);
        });
        //console.log("Results: " + this.results); This won't work outside subscribe unless data is
        // passed to some method
        let that = this;
        function findNearestStations(results) {
            console.log("Inside nearest stations!");
            console.log(sort_by_key(results, 'travelDistance'));
            // console.log(typeof that.dataSource)
            // that.dataSource = results.map(e => e);
            let arr = [];
            results.map(e => {
                that.routingservice.stations.map(i => {
                    if (e["destinationIndex"] == i["id"]) {
                        let obj = Object.assign({}, e, i);
                        console.log(obj);
                        arr.push(obj);
                    }
                });
            });
            that.dataSource = arr;
            console.log("Data source!");
            // that.check = true;
            // console.log(JSON.stringify(that.dataSource, 1, 1));
            console.log(that.dataSource);
        }
        function sort_by_key(array, key) {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    } //ngOnInit ends here
    navigate(destLatitude, destLongitude) {
        // console.log("navigate!");
        // console.log(destLatitude + " : " + destLongitude);
        var userCoordinate = this.coordinates[0];
        var destCoordinate = [destLatitude, destLongitude];
        console.log(userCoordinate, destCoordinate);
        this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
    }
};
RoutingComponent.ctorParameters = () => [
    { type: _routingapiservice_service__WEBPACK_IMPORTED_MODULE_1__["RoutingapiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-routing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./routing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./routing.component.css */ "./src/app/routing/routing.component.css")).default]
    })
], RoutingComponent);



/***/ }),

/***/ "./src/app/routingapiservice.service.ts":
/*!**********************************************!*\
  !*** ./src/app/routingapiservice.service.ts ***!
  \**********************************************/
/*! exports provided: RoutingapiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingapiserviceService", function() { return RoutingapiserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RoutingapiserviceService = class RoutingapiserviceService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.API_KEY = 'Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb';
        this.responses = [];
        this.stations = [
            { "id": 0, "name": "Forum Mall", "latitude": 12.934603, "longitude": 77.611312 },
            { "id": 1, "name": "Christ University", "latitude": 12.9345805, "longitude": 77.605785 },
            { "id": 2, "name": "St. Johns Medical College", "latitude": 12.99369, "longitude": 77.618436 },
            { "id": 3, "name": "Phoenix Marketcity", "latitude": 12.997058, "longitude": 77.696404 },
            { "id": 4, "name": "Cubbon Park", "latitude": 12.980437, "longitude": 77.597878 },
            { "id": 5, "name": "Bangalore Palace", "latitude": 12.9983585, "longitude": 77.5920115 },
            { "id": 6, "name": "Lalbagh Botanical Garden", "latitude": 12.948948, "longitude": 77.586951 },
            { "id": 7, "name": "Visvesvaraya Industrial and Technological Museum", "latitude": 12.974992, "longitude": 77.596463 },
            { "id": 8, "name": "ISKCON Bangalore", "latitude": 13.01089, "longitude": 77.55149 },
        ];
    }
    getGeoJsonLatLOng(coordinates) {
        return this.httpclient.get('http://dev.virtualearth.net/REST/V1/Routes?wp.0=' + coordinates[0][0] + ', ' + coordinates[0][1] + '&wp.1=' + coordinates[1][0] + ',' + coordinates[1][1] + '&optmz=distance&routeAttributes=routePath&key=Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb');
    }
    getDistanceMatrix(userDestination) {
        // console.log("Stations: " + this.stations);
        // for(var j = 0;j < 9;j++) {
        //   console.log(this.stations[j]);
        //   console.log(this.stations[j]["latitude"]);
        // }
        var JSONrequest = { origins: [{
                    latitude: userDestination[0],
                    longitude: userDestination[1]
                }],
            destinations: [],
            travelMode: "driving"
        };
        for (var i = 0; i < 9; i++) {
            JSONrequest.destinations.push({
                latitude: this.stations[i]["latitude"],
                longitude: this.stations[i]["longitude"]
            });
        }
        console.log(JSON.stringify(JSONrequest));
        return this.httpclient.post('https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb', JSON.stringify(JSONrequest));
    }
};
RoutingapiserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RoutingapiserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoutingapiserviceService);



/***/ }),

/***/ "./src/app/trip.service.ts":
/*!*********************************!*\
  !*** ./src/app/trip.service.ts ***!
  \*********************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TripService = class TripService {
    constructor(http) {
        this.http = http;
    }
    // aws ip Url: 'http://15.206.48.113:'
    startTripBooking(booking) {
        return this.http.post("http://172.23.239.104:9090/api/v1/start_ride", booking);
    }
    endTripBooking(booking) {
        return this.http.post("http://172.23.239.104:9090/api/v1/end_ride", booking);
    }
    pay(payment) {
        return this.http.post("http://172.23.239.64:8080/payment/pay", payment);
    }
    getInvoice() {
        return this.http.get("http://localhost:30001/invoice");
    }
};
TripService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TripService);



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-image {\n    background-image: url('bolt.svg');\n    background-repeat: no-repeat;\n    width: 100px;\n    height: 90px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin-top: -6px;\n    outline: none;\n}\n\n.app-header {\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n#writing {\n    margin-top: 20px;\n}\n\n#userLogin {\n    margin-top: 35px;\n}\n\n.my-card {\n    left: 25%;\n}\n\n.login-wrapper {\n    height: 100%;\n    margin-top: 150px;\n    margin-bottom: 50px;\n    \n}\n\n.positronx {\n    text-decoration: none;\n    color: #ffffff;\n}\n\n.box {\n    position: relative;\n    top: 0;\n    opacity: 1;\n    float: left;\n    padding: 60px 50px 40px 50px;\n    width: 100%;\n    background: #fff;\n    border-radius: 10px;\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    z-index: 5;\n    max-width: 500px;\n}\n\n.box.back {\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    top: -20px;\n    opacity: .8;\n    z-index: -1;\n}\n\n.box:before {\n    content: \"\";\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    position: absolute;\n    top: -10px;\n    background: rgba(255, 255, 255, .6);\n    left: 0;\n    transform: scale(.95);\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    z-index: -1;\n}\n\n.login-wrapper .example-form {\n    min-width: 100%;\n    max-width: 300px;\n    width: 100%;\n}\n\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n    width: 100%;\n}\n\n.login-wrapper mat-card-header {\n    text-align: center;\n    width: 100%;\n    display: block;\n    font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n    font-size: 30px;\n    margin: 0px;\n}\n\n.login-wrapper .mat-card {\n    padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n    border: 1px solid currentColor;\n    line-height: 54px;\n    background: rgb(39, 34, 36);\n    color: #FFC107;\n    font-size: 17px;\n}\n\n.login-wrapper .mat-stroked-button:hover {\n    background: #FFC107;\n    color: white;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n    padding: 0.8375em 0;\n}\n\n/* Navbar Image-logo */\n\n#newUserHyper {\n    margin-left: 100px;\n    margin-top: 15px;\n}\n\nmat-form-field.mat-form-field {\n    font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDViw4R0FBOEc7QUFDbEg7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQSxzQkFBc0I7O0FBRXRCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2JvbHQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4jd3JpdGluZyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3VzZXJMb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLm15LWNhcmQge1xuICAgIGxlZnQ6IDI1JTtcbn1cblxuLmxvZ2luLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIFxufVxuXG4ucG9zaXRyb254IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB6LWluZGV4OiA1O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ib3guYmFjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgdG9wOiAtMjBweDtcbiAgICBvcGFjaXR5OiAuODtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJveDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4ubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzksIDM0LCAzNik7XG4gICAgY29sb3I6ICNGRkMxMDc7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuXG4vKiBOYXZiYXIgSW1hZ2UtbG9nbyAqL1xuXG4jbmV3VXNlckh5cGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/authentication.service */ "./src/app/auth-service/authentication.service.ts");




let UserFormComponent = class UserFormComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    userLogin() {
        (this.loginservice.authenticate(this.username, this.password).subscribe(data => {
            this.router.navigate(['map']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
            alert('Invalid Credentials');
        }));
    }
};
UserFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")).default]
    })
], UserFormComponent);



/***/ }),

/***/ "./src/app/user-location/user-location.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-location/user-location.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9jYXRpb24vdXNlci1sb2NhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-location/user-location.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-location/user-location.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationComponent", function() { return UserLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserLocationComponent = class UserLocationComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-location/user-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-location.component.css */ "./src/app/user-location/user-location.component.css")).default]
    })
], UserLocationComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    mapbox: {
        accessToken: 'sk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWxvMWEwNmpjM21wZGVmdnZtYTM0In0.AzbMO0UM9jDGtoCpIbbixQ'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cgi/Documents/smart-bikes/angular-ui/bike-console/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map