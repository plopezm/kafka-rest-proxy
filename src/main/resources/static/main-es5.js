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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <button mat-icon-button>\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n    </button>\n    <h1>Kafka Explorer</h1>\n    <span class=\"menu-spacer\"></span>\n    <div>\n      <a [routerLink]=\"'/topics'\" mat-button > Topics </a>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>\n    <mat-nav-list>\n        <a [routerLink]=\"'/topics'\" mat-button > Topics </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <app-loader></app-loader>\n      <div style=\"height: 90vh\">\n        <router-outlet></router-outlet>\n      </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading | async\" class=\"overlay\">\n  <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n  </mat-progress-spinner>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabledata/tabledata.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabledata/tabledata.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayedColumns && displayedColumns.length > 0\">\n<mat-form-field class=\"wrapper\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n<table id=\"table\" mat-table [dataSource]=\"datasource\" class=\"mat-elevation-z1\">\n\n  <ng-container *ngFor=\"let column of displayedColumns\" [matColumnDef]=\"column\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> \n      {{this.getInfo(element[column])}} \n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClick.emit(row)\"></tr>\n</table>\n</div>\n<div *ngIf=\"!displayedColumns || displayedColumns.length === 0\">\n  <h2 style=\"text-align: center\">No data found</h2>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/topic-info/topic-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/topic-info/topic-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin:10px\">\r\n    <h2> Topic messages </h2>\r\n</div>\r\n   \r\n<div class=\"formWrapper\" *ngIf=\"rows != undefined && rows.length > 0\">\r\n    <mat-form-field class=\"form-field-wrapper\">\r\n        <input matInput type=\"number\" placeholder=\"Offset\" value=\"{{this.offset}}\" (change)=\"this.updateOffset($event.target.value)\" min=\"0\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form-field-wrapper\">\r\n        <input matInput type=\"number\" placeholder=\"Max records\" value=\"{{this.maxRecords}}\" (change)=\"this.updateMax($event.target.value)\" min=\"0\">\r\n    </mat-form-field>\r\n    <button mat-icon-button color=\"primary\" (click)=\"refresh()\"><mat-icon>refresh</mat-icon></button>\r\n</div>\r\n<app-tabledata [columns]=\"columns\" [data]=\"rows\" ></app-tabledata>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/topics/topics.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/topics/topics.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin:10px\">\n    <h2> Topics </h2>\n    \n</div>\n\n<mat-card style=\"margin: 10px\">\n    <h3>Create topic</h3>\n    <mat-form-field class=\"form-field-wrapper\">\n        <input matInput type=\"text\" placeholder=\"Queue name\" value=\"{{this.newTopic.topicName}}\" (change)=\"this.setNewTopicValue('topicName', $event.target.value)\">\n    </mat-form-field>\n    <mat-form-field class=\"form-field-wrapper\">\n        <input matInput type=\"number\" placeholder=\"Partitions\" value=\"{{this.newTopic.partitions}}\" (change)=\"this.setNewTopicValue('partitions', $event.target.value)\" min=\"1\">\n    </mat-form-field>\n    <mat-form-field class=\"form-field-wrapper\">\n        <input matInput type=\"number\" placeholder=\"Replicas\" value=\"{{this.newTopic.replicas}}\" (change)=\"this.setNewTopicValue('replicas', $event.target.value)\" min=\"1\">\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" (click)=\"createTopic()\"><mat-icon>add</mat-icon></button>\n</mat-card>\n<mat-card style=\"margin: 10px\">    \n    <h3>Topics found</h3>\n    <mat-slide-toggle color=\"primary\">System queues</mat-slide-toggle>\n    <app-tabledata [columns]=\"columns\" [data]=\"rows\" (onRowClick)=\"onTopicClick($event)\" ></app-tabledata>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/components/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/components/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/topics/topic.service */ "./src/app/services/topics/topic.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TopicShortInfo = /** @class */ (function () {
    function TopicShortInfo(topicInfo) {
        this.topic = topicInfo.topic;
        //this.leader = topicInfo.leader;
        this.partition = topicInfo.partition;
        this.replicas = topicInfo.replicas.length;
        this.inSyncReplicas = topicInfo.inSyncReplicas.length;
        this.offlineReplicas = topicInfo.offlineReplicas.length;
    }
    return TopicShortInfo;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(topicService) {
        var _this = this;
        this.topicService = topicService;
        this.title = 'kafka-rest-proxy-ui';
        this.columns = [];
        this.data = this.topicService.getTopicList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (topics) {
            return topics.map(function (topic) { return new TopicShortInfo(topic); });
        }));
        this.data.subscribe(function (topicInfo) {
            if (topicInfo != undefined && topicInfo.length > 0) {
                _this.columns = Object.keys(topicInfo[0]);
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/routes */ "./src/app/routes/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tabledata_tabledata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabledata/tabledata.component */ "./src/app/components/tabledata/tabledata.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_topics_topic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/topics/topic.service */ "./src/app/services/topics/topic.service.ts");
/* harmony import */ var _containers_topic_info_topic_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/topic-info/topic-info.component */ "./src/app/containers/topic-info/topic-info.component.ts");
/* harmony import */ var _routes_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/components/page-not-found/page-not-found.component */ "./src/app/routes/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _containers_topics_topics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/topics/topics.component */ "./src/app/containers/topics/topics.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _interceptors_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/loader/loader.interceptor */ "./src/app/interceptors/loader/loader.interceptor.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _routes_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _components_tabledata_tabledata_component__WEBPACK_IMPORTED_MODULE_8__["TabledataComponent"],
                _containers_topics_topics_component__WEBPACK_IMPORTED_MODULE_13__["TopicsComponent"],
                _containers_topic_info_topic_info_component__WEBPACK_IMPORTED_MODULE_11__["TopicInfoComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_6__["appRoutes"], { useHash: true }),
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"],
                _services_topics_topic_service__WEBPACK_IMPORTED_MODULE_10__["TopicService"],
                _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_17__["LoaderInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/loader/loader.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n    position:fixed;\r\n    display:block;\r\n    width:100%;\r\n    height:100%;\r\n    top:0;\r\n    left:0;\r\n    background-color:rgba(74,74,74,.8);\r\n    z-index:99999;\r\n  }\r\n  .spinner {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsS0FBSztJQUNMLE1BQU07SUFDTixrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUix1Q0FBK0I7WUFBL0IsK0JBQStCO0VBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3NCw3NCw3NCwuOCk7XHJcbiAgICB6LWluZGV4Ojk5OTk5O1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.loaderService.isLoading;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/components/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/tabledata/tabledata.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tabledata/tabledata.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.wrapper {\r\n    margin-left: 10px;\r\n    width: 95%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZWRhdGEvdGFibGVkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJsZWRhdGEvdGFibGVkYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/tabledata/tabledata.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tabledata/tabledata.component.ts ***!
  \*************************************************************/
/*! exports provided: TabledataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabledataComponent", function() { return TabledataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var TabledataComponent = /** @class */ (function () {
    function TabledataComponent(json, changeDetectorRef) {
        this.json = json;
        this.changeDetectorRef = changeDetectorRef;
        this.displayedColumns = [];
        this.columns = [];
        this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.data != undefined) {
            this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
            this.changeDetectorRef.detectChanges();
        }
    }
    TabledataComponent.prototype.ngOnInit = function () {
        if (this.data != undefined) {
            this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
            this.changeDetectorRef.detectChanges();
        }
    };
    TabledataComponent.prototype.ngOnChanges = function (changes) {
        if (this.columns != undefined) {
            this.displayedColumns = this.columns;
        }
        if (this.data != undefined) {
            this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
            this.changeDetectorRef.detectChanges();
        }
    };
    TabledataComponent.prototype.getInfo = function (data) {
        if (Array.isArray(data) || typeof data === 'object') {
            return this.json.transform(data);
        }
        return data;
    };
    TabledataComponent.prototype.applyFilter = function (filterValue) {
        this.datasource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TabledataComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TabledataComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TabledataComponent.prototype, "onRowClick", void 0);
    TabledataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabledata',
            template: __webpack_require__(/*! raw-loader!./tabledata.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabledata/tabledata.component.html"),
            styles: [__webpack_require__(/*! ./tabledata.component.css */ "./src/app/components/tabledata/tabledata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TabledataComponent);
    return TabledataComponent;
}());



/***/ }),

/***/ "./src/app/containers/topic-info/topic-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/containers/topic-info/topic-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formWrapper {\r\n    margin: 15px;\r\n    text-align: right;\r\n}\r\n\r\n.form-field-wrapper {\r\n    margin-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy90b3BpYy1pbmZvL3RvcGljLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3RvcGljLWluZm8vdG9waWMtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1XcmFwcGVyIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/containers/topic-info/topic-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/topic-info/topic-info.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicInfoComponent", function() { return TopicInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/topics/topic.service */ "./src/app/services/topics/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TopicInfoComponent = /** @class */ (function () {
    function TopicInfoComponent(router, topicService) {
        var _this = this;
        this.router = router;
        this.topicService = topicService;
        this.offset = 0;
        this.maxRecords = 100;
        this.columns = [];
        this.rows = [];
        this.router.paramMap.subscribe(function (params) {
            _this.topicId = params.get("id");
            _this.refresh();
        });
    }
    TopicInfoComponent.prototype.ngOnInit = function () {
    };
    TopicInfoComponent.prototype.refresh = function () {
        var _this = this;
        this.data = this.topicService.getTopicMessages(this.topicId, this.offset, this.maxRecords).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.map(function (msg) {
                delete msg["headers"];
                delete msg["checksum"];
                return msg;
            }).sort(function (a, b) {
                if (a.offset > b.offset) {
                    return -1;
                }
                if (a.offset < b.offset) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            });
        }));
        this.data.subscribe(function (topicInfo) {
            if (topicInfo != undefined && topicInfo.length > 0) {
                _this.columns = Object.keys(topicInfo[0]);
                _this.rows = topicInfo;
            }
        });
    };
    TopicInfoComponent.prototype.updateOffset = function (offset) {
        this.offset = offset;
    };
    TopicInfoComponent.prototype.updateMax = function (max) {
        this.maxRecords = max;
    };
    TopicInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic-info',
            template: __webpack_require__(/*! raw-loader!./topic-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/topic-info/topic-info.component.html"),
            styles: [__webpack_require__(/*! ./topic-info.component.css */ "./src/app/containers/topic-info/topic-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"]])
    ], TopicInfoComponent);
    return TopicInfoComponent;
}());



/***/ }),

/***/ "./src/app/containers/topics/topics.component.css":
/*!********************************************************!*\
  !*** ./src/app/containers/topics/topics.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvdG9waWNzL3RvcGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/topics/topics.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/topics/topics.component.ts ***!
  \*******************************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/topics/topic.service */ "./src/app/services/topics/topic.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TopicShortInfo = /** @class */ (function () {
    function TopicShortInfo(topicInfo) {
        this.topic = topicInfo.topic;
        this.leader = topicInfo.leader;
        this.partition = topicInfo.partition;
        this.replicas = topicInfo.replicas.length;
        this.inSyncReplicas = topicInfo.inSyncReplicas.length;
        this.offlineReplicas = topicInfo.offlineReplicas.length;
    }
    return TopicShortInfo;
}());
var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(router, topicService) {
        this.router = router;
        this.topicService = topicService;
        this.columns = [];
        this.rows = [];
        this.newTopic = { topicName: "", partitions: 1, replicas: 1 };
        this.refresh();
    }
    TopicsComponent.prototype.ngOnInit = function () {
    };
    TopicsComponent.prototype.refresh = function () {
        var _this = this;
        this.data = this.topicService.getTopicList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (topics) {
            return topics.map(function (topic) { return new TopicShortInfo(topic); });
        }));
        this.data.subscribe(function (topicInfo) {
            if (topicInfo != undefined && topicInfo.length > 0) {
                _this.columns = Object.keys(topicInfo[0]);
            }
            _this.rows = topicInfo;
        });
    };
    TopicsComponent.prototype.onTopicClick = function (topic) {
        this.router.navigate(["/topics/" + topic.topic]);
    };
    TopicsComponent.prototype.createTopic = function () {
        var _this = this;
        if (this.newTopic.topicName == undefined || this.newTopic.topicName === "") {
            alert("Topic name must be set");
            return;
        }
        this.topicService.createTopic(this.newTopic).subscribe(function (response) { return _this.refresh(); });
    };
    TopicsComponent.prototype.setNewTopicValue = function (key, value) {
        this.newTopic[key] = value;
    };
    TopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! raw-loader!./topics.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/containers/topics/topics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"]])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/loader/loader.interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptors/loader/loader.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.loaderService.hide(); }));
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/routes/components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/routes/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes.ts":
/*!**********************************!*\
  !*** ./src/app/routes/routes.ts ***!
  \**********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _containers_topic_info_topic_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/topic-info/topic-info.component */ "./src/app/containers/topic-info/topic-info.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/routes/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _containers_topics_topics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/topics/topics.component */ "./src/app/containers/topics/topics.component.ts");



var appRoutes = [
    {
        path: 'topics',
        component: _containers_topics_topics_component__WEBPACK_IMPORTED_MODULE_2__["TopicsComponent"],
    },
    {
        path: 'topics/:id',
        component: _containers_topic_info_topic_info_component__WEBPACK_IMPORTED_MODULE_0__["TopicInfoComponent"]
    },
    {
        path: '',
        redirectTo: '/topics',
        pathMatch: 'full'
    },
    {
        path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/loader/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/loader/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoaderService.prototype.show = function () {
        this.isLoading.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/topics/topic.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topics/topic.service.ts ***!
  \**************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TopicService = /** @class */ (function () {
    function TopicService(httpClient) {
        this.httpClient = httpClient;
    }
    TopicService.prototype.getBaseUrl = function () {
        return 'http://localhost:9000/';
    };
    TopicService.prototype.getTopicList = function () {
        return this.httpClient.get("/kafka/topics")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Object.keys(response)
                .map(function (key) { return response[key]; })
                .reduce(function (flat, toFlatten) {
                return flat.concat(toFlatten);
            }, []);
        }));
    };
    TopicService.prototype.getTopicMessages = function (topic, offset, limit) {
        if (offset === void 0) { offset = 0; }
        return this.httpClient.get("/kafka/topics/" + topic + "?offset=" + offset + "&max=" + limit);
    };
    TopicService.prototype.createTopic = function (newTopicRequest) {
        return this.httpClient.post("/admin/topics", newTopicRequest);
    };
    TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TopicService);
    return TopicService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pablolm\Documents\Workspace\java\kafka-rest-proxy\kafka-rest-proxy-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map