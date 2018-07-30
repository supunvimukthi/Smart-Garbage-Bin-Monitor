(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    width: 80%;\r\n    max-width: 800px;\r\n    height: 70%;\r\n    background-color:rgba(255,255,255,0.5)\r\n  }\r\n  .examples-card1 {\r\n    \r\n    height: 70%;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    text-align: center;\r\n    background-color:rgba(255,255,255,0.5)\r\n  }\r\n  .scroll{\r\n    overflow-x: scroll;\r\n  }\r\n  .divider{\r\n      border-top-width: 3px;\r\n  }\r\n  .example-header-image {\r\n    background-image: url('http://www.fsgxx.com/images/upfile/20165231538716741.jpg');\r\n    background-size: cover;\r\n  }\r\n  .example-header-image1 {\r\n    background-image: url('https://vignette.wikia.nocookie.net/minecraftcreepypasta/images/7/7d/Bio-hazard-gas-mask-symbol-9223024.jpg');\r\n    background-size: cover;\r\n  }\r\n  .example-header-image2 {\r\n    background-image: url('https://thumbs.dreamstime.com/b/map-location-marker-flat-icon-white-generic-folding-nameless-city-map-flat-icon-red-gps-marker-isolated-white-97460808.jpg');\r\n    background-size: cover;\r\n  }\r\n  .example-header-image3 {\r\n    background-image: url('https://s3.envato.com/files/106288013/garbage-collector-rubbish-bin_ISO_PRVW.jpg');\r\n    background-size: cover;\r\n  }\r\n  .mat-card-title{\r\n      font-size: 30px;\r\n  }\r\n  .mat-card-title1{\r\n    font-size: 30px;\r\n}\r\n  .text-inside{\r\n      font-size: 35px;\r\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n      font-stretch: expanded;\r\n      text-align: center;\r\n      padding-top: 100px\r\n\r\n  }\r\n  .transparent{\r\n      background-color: transparent;\r\n  }\r\n  agm-map {\r\n    height: 250px;\r\n    \r\n  }\r\n  .text-inside1{\r\n    font-size: 40px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-stretch: expanded;\r\n    text-align: center;\r\n    padding-bottom: 20px\r\n\r\n}\r\n  .collector{\r\n    margin-top: 60px;\r\n   justify-content:center;\r\n}\r\n  .text-collector{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-left: 20px;\r\n    color: darkblue\r\n}\r\n  .background{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n\r\n    top:0;\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background:rgba(255,255,255,0.5);\r\n     background-size: cover;\r\n      background-image: url('Background-Color-67.jpg')\r\n  }\r\n  .green{\r\n      color:green;\r\n  }\r\n  .red{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"background scroll\">\n  <div class=\"transparent\" *ngFor='let bin of bins;let i = index' >\n    <div *ngIf='bin.Height'>\n    <mat-grid-list cols=\"1\" gutterSize=\"10px\" rowHeight=\"50px\">\n    <mat-card class=\"examples-card1\">\n        <mat-card-header class=\"header\">\n          <mat-card-title class=\"mat-card-title1\"> BIN NO : {{i+1}}</mat-card-title>\n          <mat-card-subtitle></mat-card-subtitle>\n        </mat-card-header>\n      </mat-card></mat-grid-list>\n<mat-grid-list cols=\"4\" gutterSize=\"5px\" rowHeight=\"500px\">\n  <mat-grid-tile>\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Amount Filled</mat-card-title>\n        <mat-card-subtitle></mat-card-subtitle>\n      </mat-card-header>\n      <br>\n      <mat-divider class=\"divider\" [inset]=true></mat-divider>\n      <mat-card-content>\n          <mat-grid-list cols=\"2\" gutterSize=\"10\" rowHeight=\"300px\">\n              <mat-grid-tile>\n          <p class=\"text-inside1\">\n            {{25-bin.Height}} cm</p></mat-grid-tile>\n            <mat-grid-tile>\n            <circle-progress [percent]=\"bin.Height<25?(25-bin.Height)/25*100:0\" [radius]=\"50\" [outerStrokeWidth]=\"16\" [innerStrokeWidth]=\"8\" [outerStrokeColor]=\"color(bin.Height)\"\n              [innerStrokeColor]=\"'#C7E596'\"   [titleFontSize] =\"25\" [unitsFontSize] = \"25\" [showSubtitle]=\"false\" [animation]=\"true\" [animationDuration]=\"300\"></circle-progress></mat-grid-tile>\n            </mat-grid-list>\n      </mat-card-content>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image1\"></div>\n        <mat-card-title class=\"mat-card-title\">Air Quality </mat-card-title>\n        <mat-card-subtitle></mat-card-subtitle>\n      </mat-card-header>\n      <br>\n      <mat-divider class=\"divider\" [inset]=true></mat-divider>\n      <mat-card-content>\n          <p [class.green]=\"bin.AirQuality==='Healthy'\" [class.red]=\"bin.AirQuality==='Bad'\"class=\"text-inside\">\n              {{bin.AirQuality==='Healthy'?'HEALTHY':'HAZARDOUS'}}\n            </p>\n      </mat-card-content>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image2\"></div>\n          <mat-card-title class=\"mat-card-title\">Location </mat-card-title>\n          <mat-card-subtitle></mat-card-subtitle>\n        </mat-card-header>\n        <br>\n        <mat-divider class=\"divider\" [inset]=true></mat-divider>\n        <mat-card-content><br><br>\n                <agm-map [zoom]=\"16\" [latitude]=\"bin.lat\" [longitude]=\"bin.long\">\n                    <agm-marker [latitude]=\"bin.lat\" [longitude]=\"bin.long\">\n                    <agm-info-window>\n                        <strong>{{bin.Location}}</strong>\n                      </agm-info-window></agm-marker>\n                  </agm-map>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image3\"></div>\n            <mat-card-title class=\"mat-card-title\">Last Collector </mat-card-title>\n            <mat-card-subtitle></mat-card-subtitle>\n          </mat-card-header>\n          <br>\n          <mat-divider class=\"divider\" [inset]=false></mat-divider>\n          <mat-card-content>\n            <div *ngFor='let collector of collectors'>\n            <div *ngIf='collector.Id===bin.Collector' class=\"collector\">\n              <p class=\"text-collector\">\n                  Name : {{collector.Name}}\n              </p>\n              <p class=\"text-collector\">\n                  Contact : {{collector.Contact}}\n              </p>\n              <p class=\"text-collector\">\n                  Age : {{collector.Age}}\n              </p></div></div>\n          </mat-card-content>\n        </mat-card>\n      </mat-grid-tile>\n</mat-grid-list>\n<mat-divider class=\"divider\" [inset]=false></mat-divider></div></div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        var _this = this;
        this.title = 'app';
        this.lat = 51.678418;
        this.lng = 7.809007;
        db.list('/').valueChanges()
            .subscribe(function (bins) {
            _this.bins = bins;
            console.log(bins);
        });
        db.list('/collectors').valueChanges()
            .subscribe(function (collector) {
            _this.collectors = collector;
            console.log(_this.collectors);
        });
    }
    AppComponent.prototype.color = function (distance) {
        distance = 25 - distance;
        if ((distance / 25 * 100) > 90) {
            return "#c00000";
        }
        else if ((distance / 25 * 100) > 70) {
            return "#c04200";
        }
        else if ((distance / 25 * 100) > 50) {
            return "#c08400";
        }
        else if ((distance / 25 * 100) > 30) {
            return "#c0c000";
        }
        else {
            return "#76c000";
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_component_card_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-component/card-component.component */ "./src/app/card-component/card-component.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fint */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fint__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fint__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular4_fusioncharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular4-fusioncharts */ "./node_modules/angular4-fusioncharts/dist/index.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















angular4_fusioncharts__WEBPACK_IMPORTED_MODULE_13__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_10__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_11__, fusioncharts_themes_fusioncharts_theme_fint__WEBPACK_IMPORTED_MODULE_12__);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_component_card_component_component__WEBPACK_IMPORTED_MODULE_5__["CardComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                angular4_fusioncharts__WEBPACK_IMPORTED_MODULE_13__["FusionChartsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD0oeyUX5xqqf1qkJ1zhkuY8ThIR0ejvjY'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-component/card-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/card-component/card-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/card-component/card-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/card-component/card-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Amount Filled</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n     {{tool}}\n     <fusioncharts\n    [id]=\"id\"\n    [width]=\"width\"\n    [height]=\"height\"\n    [type]=\"type\"\n    [dataFormat]=\"dataFormat\"\n    [dataSource]=\"dataSource\"\n></fusioncharts>\n    </p>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/card-component/card-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/card-component/card-component.component.ts ***!
  \************************************************************/
/*! exports provided: CardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponentComponent", function() { return CardComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponentComponent = /** @class */ (function () {
    function CardComponentComponent(db) {
        var _this = this;
        db.object('/PIR').valueChanges()
            .subscribe(function (parking) {
            _this.tool = parking;
        });
    }
    CardComponentComponent.prototype.ngOnInit = function () {
    };
    CardComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-component',
            template: __webpack_require__(/*! ./card-component.component.html */ "./src/app/card-component/card-component.component.html"),
            styles: [__webpack_require__(/*! ./card-component.component.css */ "./src/app/card-component/card-component.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CardComponentComponent);
    return CardComponentComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyABQAGoWJFd4MYhZVGm7cCeMnxM7ihk2w0",
        authDomain: "smartbin-c423c.firebaseapp.com",
        databaseURL: "https://smartbin-c423c.firebaseio.com",
        projectId: "smartbin-c423c",
        storageBucket: "smartbin-c423c.appspot.com",
        messagingSenderId: "961867237068"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\supunr\Desktop\Smart-Bin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map