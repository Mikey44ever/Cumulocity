webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-springboot/angular-springboot.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/angular-springboot/angular-springboot.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"testData\">\n  <li *ngFor=\"let testDatum of testData\">\n    <a>\n      <span class=\"badge\">{{testDatum.data}}</span>\n    </a>\n  </li>\n</ul>\n<div *ngIf=\"test\">\n  <h2>{{ test.data | uppercase }}</h2>\n</div>\n<div>\n  <label>Cumulocity Test Datum:\n    <input [(ngModel)]=\"test.data\" placeholder=\"Device Name\"/>\n  </label>\n</div>-->\n<button (click)=\"testCumulocity()\">Submit</button>\n\n<div  *ngIf=\"devices\">\n  <ul class=\"devices\">\n    <li *ngFor=\"let device of devices\">\n      <a>\n        <span class=\"badge\">{{device.name}}</span>\n      </a>\n    </li>\n  </ul>\n</div>\n<input class=\"form-control\" placeholder=\"Enter Insured policyNumber\" [(ngModel)]=\"policy.policyNumber\">\n<input class=\"form-control\" placeholder=\"Enter policyHolder\" [(ngModel)]=\"policy.name\">\n<input class=\"form-control\" placeholder=\"Enter Insured plateNumber\" [(ngModel)]=\"policy.plateNumber\">\n<input class=\"form-control\" placeholder=\"Enter Insured address\" [(ngModel)]=\"policy.address\">\n<input class=\"form-control\" placeholder=\"Enter Insured contactNumber\" [(ngModel)]=\"policy.contactNumber\">\n<input type=\"button\" class=\"btn btn-primary\" value=\"Go Go GO!!!\" (click)=\"saveInsured()\">\n<input type=\"button\" class=\"btn btn-primary\" value=\"find find find!!!\" (click)=\"findInsured()\">\n<div *ngIf=\"retrievedPolicy\">\n  <h2>{{ retrievedPolicy.status | uppercase }}</h2>\n  <h2>{{ retrievedPolicy.statusMsg | uppercase }}</h2>\n  <h2>{{ retrievedPolicy.returnedObjectCount }}</h2>\n  <h2>{{ retrievedPolicy.returnedObject | uppercase }}</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-springboot/angular-springboot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularSpringbootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test__ = __webpack_require__("./src/app/test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_policy__ = __webpack_require__("./src/app/objects/policy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testing_service__ = __webpack_require__("./src/app/testing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AngularSpringbootComponent = /** @class */ (function () {
    function AngularSpringbootComponent(testingService) {
        this.testingService = testingService;
    }
    AngularSpringbootComponent.prototype.ngOnInit = function () {
        this.policy = new __WEBPACK_IMPORTED_MODULE_2__objects_policy__["a" /* Policy */]();
        //this.test = new Test('');
        //this.saveInsured();
        //this.getAllCumulocityDevices();
        //this.getAngularSpringBoot();
        //this.testCumulocity();
    };
    AngularSpringbootComponent.prototype.findInsured = function () {
        var _this = this;
        this.testingService.findInsured(this.policy).then(function (retrievedPolicy) { return _this.retrievedPolicy = retrievedPolicy[0]; });
    };
    AngularSpringbootComponent.prototype.saveInsured = function () {
        var _this = this;
        this.testingService.saveInsured(this.policy).then(function (noNo) { return _this.noNo = noNo; });
    };
    AngularSpringbootComponent.prototype.testCumulocity = function () {
        var _this = this;
        this.testingService.testCumulocity(this.test).then(function (test) { return _this.test = test[0]; });
    };
    AngularSpringbootComponent.prototype.getAllCumulocityDevices = function () {
        var _this = this;
        console.log('getting devices');
        this.testingService.getAllCumulocityDevices().then(function (devices) { return _this.devices = devices; });
        console.log('devices gotten');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__test__["a" /* Test */])
    ], AngularSpringbootComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__objects_policy__["a" /* Policy */])
    ], AngularSpringbootComponent.prototype, "policy", void 0);
    AngularSpringbootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-angular-springboot',
            template: __webpack_require__("./src/app/angular-springboot/angular-springboot.component.html"),
            styles: [__webpack_require__("./src/app/angular-springboot/angular-springboot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__testing_service__["a" /* TestingService */]])
    ], AngularSpringbootComponent);
    return AngularSpringbootComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gmaps_gmaps_component__ = __webpack_require__("./src/app/gmaps/gmaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request_component__ = __webpack_require__("./src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gmaps_gmaps_component__["a" /* GmapsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__gmaps_gmaps_component__["a" /* GmapsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'request', component: __WEBPACK_IMPORTED_MODULE_3__request_request_component__["a" /* RequestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.nav-custom {\r\n  background-color: #272936 !important;\r\n}\r\n.btn-primary {\r\n    font-family: roboto !important;\r\n    font-size: smaller !important;\r\n    font-weight: 600 !important;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-lg nav-custom\">\r\n    <a class=\"navbar-brand\" href=\"#\"><h4>Corus RoadSide Assist</h4></a>\r\n    <!-- Collapse button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cNav\" aria-controls=\"basicExampleNav\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- Collapsible content -->\r\n    <div class=\"collapse navbar-collapse\" id=\"cNav\" *ngIf=\"isLoggedIn$ | async\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <ng-template ngxPermissionsOnly=\"INSURED\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" routerLink=\"/request\">Request</a>\r\n            </li>\r\n          </ng-template>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" style=\"float:right\" (click)=\"onLogout()\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- Collapsible content -->\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_permissions__ = __webpack_require__("./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_permission_service__ = __webpack_require__("./src/app/services/permission.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(authService, permissionsService, ps) {
        this.authService = authService;
        this.permissionsService = permissionsService;
        this.ps = ps;
    }
    AppComponent.prototype.ngOnInit = function () {
        var perm = ["ADMIN"];
        this.permissionsService.loadPermissions(perm);
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    AppComponent.prototype.onLogout = function () {
        var permission = this.ps.getPermission();
        this.permissionsService.removePermission(permission);
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_permissions__["NgxPermissionsService"],
            __WEBPACK_IMPORTED_MODULE_6__services_permission_service__["a" /* PermissionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_permissions__ = __webpack_require__("./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_springboot_angular_springboot_component__ = __webpack_require__("./src/app/angular-springboot/angular-springboot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testing_service__ = __webpack_require__("./src/app/testing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gmaps_gmaps_component__ = __webpack_require__("./src/app/gmaps/gmaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__request_request_component__ = __webpack_require__("./src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gplaces_directive__ = __webpack_require__("./src/app/gplaces.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_towtrucks_service__ = __webpack_require__("./src/app/services/towtrucks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_request_service__ = __webpack_require__("./src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_permission_service__ = __webpack_require__("./src/app/services/permission.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__angular_springboot_angular_springboot_component__["a" /* AngularSpringbootComponent */],
                __WEBPACK_IMPORTED_MODULE_10__gmaps_gmaps_component__["a" /* GmapsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__request_request_component__["a" /* RequestComponent */],
                __WEBPACK_IMPORTED_MODULE_12__gplaces_directive__["a" /* GplacesDirective */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_permissions__["NgxPermissionsModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__testing_service__["a" /* TestingService */],
                __WEBPACK_IMPORTED_MODULE_13__services_towtrucks_service__["a" /* TowtrucksService */],
                __WEBPACK_IMPORTED_MODULE_14__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_17__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_18__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__services_permission_service__["a" /* PermissionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gmaps/gmaps.component.css":
/***/ (function(module, exports) {

module.exports = "tbody tr.highlighted {\r\n  background-color: #007bff !important;\r\n  color: #ffffff;\r\n}\r\n\r\ntbody tr.undo {\r\n  background-color: white !important;\r\n  color: black;\r\n}\r\n\r\n#rqst-card-size {\r\n  overflow-x: auto;\r\n}\r\n\r\n#rqst-card-size-body{\r\n  overflow-y: auto;\r\n  height: 173px;\r\n  width: 100%;\r\n}\r\n\r\n#active_tbl.table td, .table th {\r\n\tpadding: 1px 1px 4px 1px;\r\n\tborder: none;\r\n\tfont-size: 0.9em;\r\n /* border-left: 1px solid #568ba5;*/\r\n  font-family: roboto;\r\n}\r\n\r\n#active_tbl th {\r\n  font-family: Abel;\r\n  font-size: 1em;\r\n  color: #568ba5;\r\n  font-weight: 700;\r\n}\r\n\r\n.table-striped > tbody > tr:nth-child(2n+1) > td, \r\n.table-striped > tbody > tr:nth-child(2n+1) > th \r\n{\r\n    background-color: #0808080f;\r\n}\r\n\r\nh4.req-title  {\r\n\tfont-family: Abel;\r\n\tfont-weight: 600;\r\n\tline-height: 17.4px;\r\n\tcolor: #568ba5;\r\n}\r\n\r\n.req-title {\r\n\tfont-family: Tahoma;\r\n\tfont-weight: 200;\r\n}\r\n\r\n.table-responsive {\r\n\theight: 180px;\r\n\r\n}\r\n\r\n.j-height {\r\n    padding: 2rem 1rem !important;\r\n\r\n    background-color: #d6d6d605;\r\n    border: 1px solid;\r\n    border-color: #3a3a3a36;\r\n}\r\n\r\n/*FOR SCROLLBAR*/\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 5px grey;\r\n            box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #568ba5; \r\n    border-radius: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #2477a0; \r\n}\r\n\r\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\r\n  background-color: #568ba573;\r\n}\r\n\r\n.btn-rounded.btn {\r\n  border-radius: 5px;\r\n  font-family: Arial;\r\n  color: #007cff;\r\n  font-size: 15px;\r\n  background: #ffffff;\r\n  padding: 5px 10px 5px 10px;\r\n  border: solid ##007cff 2px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.btn-rounded.btn:hover {\r\n  background: #007cff;\r\n  text-decoration: none;\r\n  color: #ffffff;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.form-inline .form-control {\r\n\twidth: 100%;\r\n}\r\n\r\n#details_tbl tbody tr:nth-of-type(odd) {\r\n  background-color: #82b1ff3b;\r\n}\r\n\r\n#details_tbl {\r\n  font-size: 12px;\r\n  font-family: roboto;\r\n}\r\n\r\n#details_tbl td {\r\n  font-weight: 500 !important;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.btn-primary {\r\n    font-family: roboto !important;\r\n    font-size: smaller !important;\r\n    font-weight: 600 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Abel\" />\r\n<div class= \"col-md-12 mt-3\"> </div>\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-md-8\">\r\n    <div class=\"mt-3\"></div>\r\n    <div class=\"col-md-12\">\r\n      <div  #gmap style=\"height:350px\" > </div>\r\n    </div>\r\n    <div class=\"mt-3\"></div>\r\n    <ng-template [ngxPermissionsOnly]=\"['CSR']\">\r\n      <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"setCenter($event)\" ac>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input [disabled]=\"selectedRequest && selectedRequest.status!=='REQUESTED' ? false : true\" type=\"text\" class=\"form-control\" placeholder=\"Enter Insured Location\" name=\"insuredLoc\"\r\n                   [(ngModel)]=\"insuredLoc\" #LocationCtrl=\"ngModel\"\r\n                   Googleplace (setAddress)=\"getLocation($event,'insured') \"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select [disabled]=\"selectedRequest && selectedRequest.status==='PINNED' ? false : true\" class=\"form-control\" name=\"selectTruck\" [(ngModel)]=\"selectedTruck\" (ngModelChange)=\"assignTruck($event)\">\r\n              <option  *ngFor=\"let towTruck of towTrucks\" [ngValue]=\"towTruck\">\r\n                {{towTruck.plateNumber}} - {{towTruck.availability}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-md-2\">\r\n          <button [disabled]=\"(selectedRequest && selectedRequest.status==='PINNED') ? false : true\" type=\"submit\" class=\"btn btn-primary\"> Assign Truck </button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <input [disabled]=\"selectedRequest && (selectedRequest.status==='PINNED' || selectedRequest.status==='ASSIGNED') ? false : true\" type=\"button\" class=\"btn btn-primary\" value=\"Simulate Dispatch\" (click)=\"setCenter2($event)\">\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <div class= \"col-md-12 mt-3\"> </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card bg-light req-title\" id=\"rqst-card-size\">\r\n        <div class=\"card-header\"><h4 class=\"req-title\"><i class=\"fa fa-car\"></i> REQUEST </h4></div>\r\n        <div class=\"card-body\" id=\"rqst-card-size-body\">\r\n          <table class=\"table\" id=\"active_tbl\">\r\n            <thead>\r\n                <tr>\r\n                <th scope=\"col\">Request ID</th>\r\n                <th scope=\"col\">Plate No.</th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Contact No.</th>\r\n                <th scope=\"col\">Time Requested</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">ETA</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n              <tr *ngFor=\"let request of requests\" (click)=\"selectRequest(request)\"\r\n                  [class.highlighted]=\"request === currentSelected\" [class.undo]=\"null != pastSelected\" >\r\n                <td>{{ request.requestId }}</td>\r\n                <td>{{ request.plateNumber }}</td>\r\n                <td>{{ request.contactName }}</td>\r\n                <td>{{ request.contactNumber }}</td>\r\n                <td>{{ request.timeRequested }}</td>\r\n                <td>{{ request.status }}</td>\r\n                <td>{{ request.eta }}</td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"col-6 col-md-4\">\r\n    <div class= \"col-md-12 mt-3\"> </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card bg-light mb-3 req-title\" name=\"currentSelected\" ngDefaultControl style=\"max-width: 25rem;\" >\r\n        <div class=\"card-header\"><h4 class=\"req-title\"> Details </h4></div>\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-striped\" id=\"details_tbl\" ngDisabled=\"fk_rqst_tbl\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>Request ID</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.requestId }} </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Status</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.status }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Actual Arrival Time</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.actualArrivalTime }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Distance to Travel</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.distanceToTravel }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Assigned TowTruck</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.assignedTowTruck }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>TowTruck Initial Location</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.towTruckInitialLocation }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>TowTruck Target Destination</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.towTruckTargetDestination }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>ETA</td>\r\n                  <td>:</td>\r\n                  <td>{{ currentSelected.eta }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Remarks</td>\r\n                  <td>:</td>\r\n                  <td>\r\n                  <textarea class=\"form-control font-weight-light\" rows=\"5\" placeholder=\"Remark\" [(ngModel)]=\"currentSelected.remarks\"> </textarea>\r\n                  </td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"currentSelected\">\r\n      <button *ngIf=\"currentSelected.status==='ASSIGNED' && currentSelected.actualArrivalTime\" type=\"button\" class=\"btn btn-primary\" (click)=\"acceptRequest('COMPLETED')\"> COMPLETE SERVICE </button>\r\n      <ng-template [ngxPermissionsOnly]=\"['CSR']\">\r\n        <button *ngIf=\"currentSelected.status==='ASSIGNED'\" type=\"button\" class=\"btn btn-primary\"  (click)=\"acceptRequest('ASSIGNED')\"> ACCEPT </button>\r\n        <button *ngIf=\"currentSelected.status==='PINNED'\" type=\"button\" class=\"btn btn-primary\"  (click)=\"acceptRequest('ASSIGNED')\"> ACCEPT </button>\r\n        <button *ngIf=\"currentSelected.status==='PROCESSING'\" type=\"button\" class=\"btn btn-primary\" (click)=\"acceptRequest('PINNED')\"> ACCEPT </button>\r\n        <button *ngIf=\"currentSelected.status==='REQUESTED'\" type=\"button\" class=\"btn btn-primary\" (click)=\"acceptRequest('PROCESSING')\"> ACCEPT </button>\r\n      </ng-template>\r\n      <button *ngIf=\"currentSelected.status != null\" type=\"button\" class=\"btn btn-primary\" (click)=\"acceptRequest('CANCELLED')\"> CANCEL </button>\r\n    </div>\r\n    <div class= \"col-md-12 mt-3\"> </div>\r\n    <div class=\"col-md-12\" *ngIf=\"returnObject\">\r\n      <span> <labeL> Status: </labeL>  {{ returnObject.status }} </span><br>\r\n      <span> <labeL> Status message: </labeL>  {{ returnObject.statusMsg }} </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/gmaps/gmaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_towtrucks_service__ = __webpack_require__("./src/app/services/towtrucks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__("./src/app/services/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_returnObject__ = __webpack_require__("./src/app/objects/returnObject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_request__ = __webpack_require__("./src/app/objects/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_request_service__ = __webpack_require__("./src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GmapsComponent = /** @class */ (function () {
    function GmapsComponent(tts, deviceService, rService) {
        this.tts = tts;
        this.deviceService = deviceService;
        this.rService = rService;
    }
    GmapsComponent.prototype.ngOnInit = function () {
        this.currentSelected = new __WEBPACK_IMPORTED_MODULE_5__objects_request__["a" /* Request */]();
        //test only
        //this.tts.saveUser().then(user => console.log('mikey yoww...'+user));
        //test end
        var gmapsComponent = this;
        this.travelMode = google.maps.TravelMode.DRIVING;
        this.truckMarkers = [];
        this.getAllTowTrucks();
        /*setInterval(function(){
          console.log('updating location.......');
          gmapsComponent.getAllTowTrucks()
        },3000);*/
        this.getAllRequests();
        this.dirRenderer = null;
        var mapProp = {
            center: new google.maps.LatLng(0, 0),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        //add traffic layer
        this.trafficLayer = new google.maps.TrafficLayer();
        this.trafficLayer.setMap(this.map);
        this.map.addListener('click', function (e) {
            gmapsComponent.insuredLocation = e.latLng;
            if (gmapsComponent.insuredMarker != null) {
                if (gmapsComponent.currentSelected.status == 'PINNED' || gmapsComponent.currentSelected.status == 'ASSIGNED') {
                    gmapsComponent.currentSelected.insuredLatLng = e.latLng.lat() + '|' + e.latLng.lng();
                    console.log(gmapsComponent.currentSelected.insuredLatLng);
                }
                gmapsComponent.insuredMarker.setPosition(e.latLng);
                gmapsComponent.setRoute();
            }
        });
        this.geoCoder = new google.maps.Geocoder();
    };
    GmapsComponent.prototype.checkDeviceLocation = function (deviceId, truck) {
        var _this = this;
        this.deviceService.checkDeviceLocation(deviceId).then(function (device) { return _this.plotLocation(device, truck); });
    };
    GmapsComponent.prototype.plotLocation = function (device, truck) {
        this.truckLocation = new google.maps.LatLng(Number(device.lat), Number(device.lng));
        console.log(device);
    };
    GmapsComponent.prototype.plotParties = function (request) {
        this.clearTruckMarkers();
        var insuredLatLang = request.insuredLatLng.split('|');
        this.insuredLocation = new google.maps.LatLng(Number(insuredLatLang[0]), Number(insuredLatLang[1]));
        this.map.panTo(this.insuredLocation);
        this.insuredMarker = this.setMarkerPosition(this.insuredMarker, 'insured', this.insuredLocation);
        this.map.panTo(this.insuredLocation);
        if (request.status == 'ASSIGNED') {
            var truckLatLang = request.truckLatLng.split('|');
            this.truckLocation = new google.maps.LatLng(Number(truckLatLang[0]), Number(truckLatLang[1]));
            this.map.panTo(this.truckLocation);
            this.truckMarker = this.setMarkerPosition(this.truckMarker, 'truck', this.truckLocation);
            this.map.panTo(this.truckLocation);
            this.setRoute();
        }
    };
    GmapsComponent.prototype.pinMarkers = function (request) {
        this.clearTruckMarkers();
        if (this.dirRenderer != null) {
            this.dirRenderer.setMap(null);
            this.dirRenderer = null;
        }
        this.insuredLocation = null;
        if (this.insuredMarker) {
            this.insuredMarker.setMap(null);
        }
        this.truckLocation = null;
        if (this.truckMarker) {
            this.truckMarker.setMap(null);
        }
        if (request.status == 'ASSIGNED' || request.status == 'PINNED') {
            this.plotParties(request);
        }
    };
    GmapsComponent.prototype.acceptRequest = function (status) {
        var _this = this;
        if (status === 'PINNED' && this.insuredLocation == null) {
            this.returnObject = new __WEBPACK_IMPORTED_MODULE_4__objects_returnObject__["a" /* ReturnObject */]();
            this.returnObject.status = 'ERROR';
            this.returnObject.statusMsg = 'Please pin insured location first.';
        }
        else if (status === 'ASSIGNED' && this.truckLocation == null) {
            this.returnObject = new __WEBPACK_IMPORTED_MODULE_4__objects_returnObject__["a" /* ReturnObject */]();
            this.returnObject.status = 'ERROR';
            this.returnObject.statusMsg = 'Please assign tow truck first.';
        }
        else {
            this.currentSelected.status = status;
            this.rService.submitRequest(this.currentSelected).then(function (returnObj) { return _this.updateRequestDetailsView(returnObj); });
        }
    };
    GmapsComponent.prototype.updateRequestDetailsView = function (returnObj) {
        this.returnObject = returnObj[0];
        this.currentSelected = JSON.parse(returnObj[0].returnedObject)[0];
        console.log('after accept button mikey!....' + this.currentSelected);
        this.getAllRequests();
    };
    GmapsComponent.prototype.selectRequest = function (request) {
        if (request.status == 'ASSIGNED') {
            var truck = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.towTrucks, { truckId: Number(request.assignedTowTruck) });
            this.checkDeviceLocation(JSON.stringify(truck.device.systemId), truck);
            this.truckMarker = this.setMarkerPosition(this.truckMarker, 'truck', this.truckLocation);
        }
        this.pastSelected = null;
        this.selectedRequest = request;
        if (this.selectedRequest == this.currentSelected) {
            this.pastSelected = this.currentSelected;
        }
        this.currentSelected = this.selectedRequest;
        if (this.pastSelected != null) {
            this.currentSelected = new __WEBPACK_IMPORTED_MODULE_5__objects_request__["a" /* Request */]();
        }
        this.pinMarkers(this.currentSelected);
        this.returnObject = null;
    };
    GmapsComponent.prototype.getAllRequests = function () {
        var _this = this;
        this.rService.getAllRequests().then(function (returnObj) { return _this.check(returnObj); });
    };
    GmapsComponent.prototype.check = function (returnObj) {
        this.requests = JSON.parse(returnObj[0].returnedObject);
    };
    GmapsComponent.prototype.clearTruckMarkers = function () {
        for (var i = 0; i < this.truckMarkers.length; i++) {
            if (this.truckMarkers[i] != null) {
                this.truckMarkers[i].setMap(null);
            }
        }
    };
    GmapsComponent.prototype.assignTruck = function (truck) {
        this.clearTruckMarkers();
        this.truckLocation = new google.maps.LatLng(truck.lat, truck.lng);
        this.truckMarker = this.setMarkerPosition(this.truckMarker, 'truck', this.truckLocation);
        this.map.panTo(this.truckLocation);
        this.currentSelected.truckLatLng = truck.lat + '|' + truck.lng;
        this.currentSelected.assignedTowTruck = truck.truckId + '';
        var gmapsComponent = this;
        this.geoCoder.geocode({ 'location': this.truckLocation }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var result = results[0].address_components;
                    var truckLoc = result[0].short_name + ', ' + result[1].short_name + ', ' + result[2].short_name + ', ' +
                        result[3].short_name;
                    gmapsComponent.currentSelected.towTruckInitialLocation = truckLoc;
                    gmapsComponent.infoWindow = new google.maps.InfoWindow({
                        content: truckLoc
                    });
                    gmapsComponent.infoWindow.open(gmapsComponent.map, gmapsComponent.truckMarker);
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    GmapsComponent.prototype.getAllDevices = function () {
        var _this = this;
        this.deviceService.getAllDevices(this.towTrucks).then(function (returnObj) { return _this.locateDevices(returnObj); });
    };
    GmapsComponent.prototype.locateDevices = function (returnObj) {
        this.towTrucks = JSON.parse(returnObj[0].returnedObject);
        if (this.truckMarkers.length > 0) {
            for (var i = 0; i < this.truckMarkers.length; i++) {
                console.log('lat...................' + this.towTrucks[i].lat);
                console.log('lng...................' + this.towTrucks[i].lng);
                var tempCoord = new google.maps.LatLng(this.towTrucks[i].lat, this.towTrucks[i].lng);
                var marker = this.truckMarkers[i];
                marker.setPosition(tempCoord);
            }
        }
        else {
            for (var i = 0; i < this.towTrucks.length; i++) {
                var tempCoord = new google.maps.LatLng(this.towTrucks[i].lat, this.towTrucks[i].lng);
                var trucksMarker = new google.maps.Marker({
                    map: this.map,
                    position: tempCoord,
                    //label : this.towTrucks[i].plateNumber,
                    icon: {
                        //scaledSize: new google.maps.Size(75, 75),
                        url: 'http://maps.google.com/mapfiles/ms/micons/truck.png'
                    }
                });
                this.map.panTo(tempCoord);
                trucksMarker.setMap(this.map);
                trucksMarker.setPosition(tempCoord);
                this.truckMarkers.push(trucksMarker);
            }
        }
        console.log(this.truckMarkers);
    };
    GmapsComponent.prototype.getAllTowTrucks = function () {
        var _this = this;
        this.tts.getAllTowTrucks()
            .then(function (towTrucks) { return _this.evaluateTrucks(towTrucks); });
    };
    GmapsComponent.prototype.evaluateTrucks = function (values) {
        this.towTrucks = JSON.parse(values[0].returnedObject);
        this.getAllDevices();
    };
    GmapsComponent.prototype.setCenter = function (e) {
        e.preventDefault();
        this.insuredMarker = this.setMarkerPosition(this.insuredMarker, 'insured', this.insuredLocation);
        this.setRoute();
    };
    GmapsComponent.prototype.setCenter2 = function (e) {
        e.preventDefault();
        var gmapsComponent = this;
        this.autoRefresh(this.map, this.allCoordinates);
    };
    GmapsComponent.prototype.getLocation = function (e, type) {
        var gmapsComponent = this;
        var latitude = parseFloat(e.geometry.location.lat());
        var longitude = parseFloat(e.geometry.location.lng());
        if (type == 'insured') {
            this.insuredLocation = new google.maps.LatLng(latitude, longitude);
            this.map.panTo(this.insuredLocation);
            this.insuredMarker = this.setMarkerPosition(this.insuredMarker, 'insured', this.insuredLocation);
            this.insuredMarker.addListener('mouseup', function (e) {
                if (gmapsComponent.insuredMarker != null) {
                    gmapsComponent.setMarkerPosition(gmapsComponent.insuredMarker, 'insured', e.latLng);
                }
            });
            this.currentSelected.insuredLatLng = latitude + '|' + longitude;
            this.currentSelected.towTruckTargetDestination = e.name;
        }
        else {
            this.truckLocation = new google.maps.LatLng(latitude, longitude);
            this.truckMarker = this.setMarkerPosition(this.truckMarker, 'truck', this.truckLocation);
            this.currentSelected.truckLatLng = latitude + '|' + longitude;
            this.map.panTo(this.truckLocation);
        }
        this.setRoute();
    };
    GmapsComponent.prototype.setMarkerPosition = function (marker, markerType, loc) {
        if (marker != null) {
            marker.setMap(null);
        }
        var icon = '';
        if (markerType == 'insured') {
            icon = 'http://maps.google.com/mapfiles/ms/micons/man.png';
        }
        else {
            icon = 'http://maps.google.com/mapfiles/ms/micons/truck.png';
        }
        marker = new google.maps.Marker({
            map: this.map,
            position: loc,
            icon: icon
        });
        return marker;
    };
    GmapsComponent.prototype.getDistance = function () {
        var remainingDistance = google.maps.geometry.spherical.computeDistanceBetween(this.insuredLocation, this.truckLocation);
        console.log('distance to travel...' + remainingDistance);
        if (remainingDistance < 100) {
            console.log('distance left:::::::::' + remainingDistance);
            this.travelMode = google.maps.TravelMode.WALKING;
            var timeArrived = new Date();
            var timestamp = timeArrived.getHours() + ':' + timeArrived.getMinutes() + ':' + timeArrived.getSeconds();
            var formatted_date = timeArrived.getDate() + "/" + timeArrived.getMonth() + 1 + "/" + timeArrived.getFullYear();
            this.currentSelected.actualArrivalTime = formatted_date + ' ' + timestamp;
        }
        //get distance
        var gmapsComponent = this;
        this.distMatrixService = new google.maps.DistanceMatrixService;
        var origin = { lat: this.truckLocation.lat(), lng: this.truckLocation.lng() };
        var destination = { lat: this.insuredLocation.lat(), lng: this.insuredLocation.lng() };
        this.distMatrixService.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: this.travelMode,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (result, status) {
            if (status === google.maps.DistanceMatrixStatus.OK) {
                var element = result.rows[0].elements[0];
                gmapsComponent.currentSelected.distanceToTravel = element.distance.text;
                gmapsComponent.currentSelected.eta = element.duration.text;
            }
        });
    };
    GmapsComponent.prototype.setRoute = function () {
        var gmapsComponent = this;
        this.getDistance();
        //clear(the old route) and render the route(new)
        if (this.dirRenderer != null) {
            this.dirRenderer.setMap(null);
            this.dirRenderer = null;
        }
        var dirService = new google.maps.DirectionsService();
        this.dirRenderer = new google.maps.DirectionsRenderer({ map: this.map,
            preserveViewport: false,
            draggable: true,
            suppressMarkers: true });
        this.dirRenderer.setMap(this.map);
        var request = {
            origin: this.truckLocation,
            destination: this.insuredLocation,
            travelMode: this.travelMode,
            optimizeWaypoints: true
        };
        dirService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                gmapsComponent.allCoordinates = result.routes[0].overview_path;
                gmapsComponent.dirRenderer.setDirections(result);
            }
        });
    };
    //simulation of route
    GmapsComponent.prototype.autoRefresh = function (map, pathCoords) {
        var gmapsComponent = this;
        for (var i = 0; i < pathCoords.length; i++) {
            setTimeout(function (coords) {
                gmapsComponent.moveMarker(gmapsComponent.map, gmapsComponent.truckMarker, coords);
                gmapsComponent.getDistance();
            }, 200 * i, pathCoords[i]);
        }
    };
    GmapsComponent.prototype.moveMarker = function (map, marker, latLng) {
        marker.setPosition(latLng);
        map.panTo(latLng);
        this.truckLocation = latLng;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], GmapsComponent.prototype, "gmapElement", void 0);
    GmapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gmaps',
            template: __webpack_require__("./src/app/gmaps/gmaps.component.html"),
            styles: [__webpack_require__("./src/app/gmaps/gmaps.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_towtrucks_service__["a" /* TowtrucksService */], __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_6__services_request_service__["a" /* RequestService */]])
    ], GmapsComponent);
    return GmapsComponent;
}());



/***/ }),

/***/ "./src/app/gplaces.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GplacesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GplacesDirective = /** @class */ (function () {
    function GplacesDirective(el, model) {
        var _this = this;
        this.model = model;
        this.setAddress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
        this.autocomplete = new google.maps.places.Autocomplete(input, {});
        google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
            var place = _this.autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    }
    GplacesDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    GplacesDirective.prototype.onInputChange = function () {
        console.log(this.model);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GplacesDirective.prototype, "setAddress", void 0);
    GplacesDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[Googleplace]',
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgModel */]],
            host: {
                '(input)': 'onInputChange()'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgModel */]])
    ], GplacesDirective);
    return GplacesDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn
            .take(1)
            .map(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['login']);
                return false;
            }
            return true;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".masterhdr{\r\n    background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.6)), to(rgba(0,0,0,.3))), url('login-bg.b7e905b6ca8201bb1b3d.jpg');\r\n    background:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.3)), url('login-bg.b7e905b6ca8201bb1b3d.jpg');\r\n    text-align: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n    width: 100%;    \r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\ninput[type=password],\r\ninput[type=text] {\r\n    color: #007bff;\r\n}\r\n\r\n.cardbg {\r\n    /*background: #6DB3F2 url(\"assets\\images\\login-bg.jpg\");*/\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    height: 430px;\r\n\r\n}\r\n\r\n.input-group>.form-control:not(:first-child) {\r\n    border-top-left-radius: 2px;\r\n    border-bottom-left-radius: 2px;\r\n}\r\n\r\n.fa{\r\n    font-size: 2.4em; /*size whatever you like*/\r\n    width: 2.6rem; \r\n    color:#fff;\r\n}\r\n\r\nh5.login-title {\r\n    font-family: arial;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    margin-left: 23px;\r\n    margin-top: 70px;\r\n    text-align-last: center;\r\n}\r\n\r\n.login-form-btn {\r\n    font-family: ARIAL;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #FFF;\r\n    text-transform: uppercase;\r\n    width: 25%;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    background: #1874CD;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 25px;\r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n}\r\n\r\n.mb-25 {\r\n    margin-bottom: 25px;\r\n}\r\n\r\nmat-card {\r\n  max-width: 400px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.signin-content {\r\n  padding: 60px 1rem;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n        background-color: rgba(0,0,25,.5);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <header class=\"masterhdr\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"> </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card cardbg mb-25\" >\r\n            <h5 class=\"login-title\">Login to your Account</h5>\r\n            <div class=\"card-body mb-25\">\r\n\r\n                <form id=\"loginform\" class=\"form-horizontal mb-25\" role=\"form\">\r\n                    <span *ngIf=\"loginReturnObject && loginReturnObject.status=='ERROR'\"> {{ loginReturnObject.statusMsg }} </span>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"input-group mt-3 mb-25\">\r\n                          <i class=\"fa fa-user-circle-o\"></i>\r\n                          <input type=\"text\" class=\"form-control\" name=\"username\"  [(ngModel)]=\"user.userName\" placeholder=\"username\" required/>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"input-group mb-25\">\r\n                        <span class=\"input-group-addon\">\r\n                          <i class=\"fa fa-lock\"></i>\r\n                        </span>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"password\" required/>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-12 controls\">\r\n                          <a id=\"btn-login\" href=\"#\" class=\"btn login-form-btn pull-right\" (click)=\"loginUser($event)\">Sign In</a>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      <div class=\"col-md-3\"> </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_user__ = __webpack_require__("./src/app/objects/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_user_role__ = __webpack_require__("./src/app/objects/user-role.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_permission_service__ = __webpack_require__("./src/app/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__ = __webpack_require__("./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_permissions__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(ls, authService, ps, permissionsService) {
        this.ls = ls;
        this.authService = authService;
        this.ps = ps;
        this.permissionsService = permissionsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userRole = new __WEBPACK_IMPORTED_MODULE_2__objects_user_role__["a" /* UserRole */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__objects_user__["a" /* Users */]();
    };
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        this.formSubmitAttempt = true;
        this.ls.loginUser(this.user).then(function (returnObj) { return _this.evaluateReturn(returnObj); });
        //this.ls.login(this.user).subscribe(response => console.log(response));
    };
    LoginComponent.prototype.evaluateReturn = function (returnObj) {
        var _this = this;
        this.loginReturnObject = returnObj; //sdsasdas
        if (this.loginReturnObject.status == 'SUCCESS') {
            this.authService.login();
            var user = JSON.parse(returnObj.returnedObject)[0];
            var userRole = this.userRole;
            userRole.roleId = user.userRoleId;
            this.ps.loadPermission(userRole).subscribe(function (userRole) { return _this.loadPermissions(userRole); });
        }
    };
    LoginComponent.prototype.loadPermissions = function (userRole) {
        this.permissionsService.addPermission(userRole.roleType);
        //var permissions = this.permissionsService.getPermissions();
        //console.log(permissions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_user__["a" /* Users */])
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_permission_service__["a" /* PermissionService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__["NgxPermissionsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/objects/policy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policy; });
var Policy = /** @class */ (function () {
    function Policy() {
    }
    return Policy;
}());



/***/ }),

/***/ "./src/app/objects/request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
var Request = /** @class */ (function () {
    function Request() {
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/objects/returnObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnObject; });
var ReturnObject = /** @class */ (function () {
    function ReturnObject() {
    }
    return ReturnObject;
}());



/***/ }),

/***/ "./src/app/objects/user-role.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRole; });
var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    return UserRole;
}());



/***/ }),

/***/ "./src/app/objects/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/***/ (function(module, exports) {

module.exports = ".md-form .prefix~input, .md-form .prefix~textarea {\r\n\tmargin-left: 2rem;\r\n}\r\n\r\ntextarea {\r\n\tdisplay: block;\r\n    width: calc(100% - 1.5rem) !important;\r\n\tborder: 0;\r\n\tpadding: 10px 5px;\r\n\tbackground: white no-repeat;\r\n\t\r\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#1abc9c), to(#1abc9c)), -webkit-gradient(linear, left top, left bottom, from(silver), to(silver));\r\n\t\r\n\tbackground-image: linear-gradient(to bottom, #1abc9c, #1abc9c), linear-gradient(to bottom, silver, silver);\r\n\tbackground-size: 0 2px, 100% 1px;\r\n\tbackground-position: 50% 100%, 50% 100%;\r\n  \t-webkit-transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\r\n  \ttransition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\r\n}\r\n\r\ntextarea:focus{\r\n\tbackground-size: 100% 2px, 100% 1px;\r\n\toutline: none;\r\n}\r\n\r\nh5.title {\r\n    font-family: arial;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    margin-left: 23px;\r\n    text-align-last: center;\r\n    color: #272936 \r\n}\r\n\r\ni.custom-text {\r\n\tcolor: #272936;\r\n}\r\n\r\n.btn-primary {\r\n    font-family: roboto !important;\r\n    font-size: smaller !important;\r\n    font-weight: 600 !important;\r\n}"

/***/ }),

/***/ "./src/app/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <form (ngSubmit)=\"submitRequest()\" ac>\r\n                <h5 class=\"title\"><p class=\"text-center py-4\">REGISTER </p></h5>\r\n\r\n                <div class=\"form-group\">\r\n                  <div *ngIf=\"returnObject\">\r\n                    <span>Status : {{ returnObject.status }}</span><br>\r\n                    <span>Status Message : {{ returnObject.statusMsg }}</span><br>\r\n                    <span *ngIf=\"request.requestId\">Request ID : {{ request.requestId }}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"md-form\">\r\n                    <i class=\"fa fa-user prefix custom-text\"></i>\r\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"request.contactName\" required class=\"form-control font-weight-light\" placeholder=\"Name\">\r\n                </div>\r\n\r\n                <div class=\"md-form\">\r\n                    <i class=\"fa fa-phone-square prefix custom-text\"></i>\r\n                    <input type=\"text\" name=\"contactNo\" [(ngModel)]=\"request.contactNumber\" required class=\"form-control font-weight-light\" placeholder=\"Contact number\">\r\n\r\n                </div>\r\n\r\n                <div class=\"md-form\">\r\n                    <i class=\"fa fa-car prefix custom-text\"></i>\r\n                    <input type=\"text\" name=\"plateNo\" [(ngModel)]=\"request.plateNumber\" required class=\"form-control font-weight-light\" placeholder=\"Plate Number\">\r\n\r\n                </div>\r\n\r\n                <div class=\"md-form\">\r\n                    <i class=\"fa fa-file-text prefix custom-text\"></i>\r\n                    <textarea name=\"remarks\" [(ngModel)]=\"request.remarks\" class=\"form-control font-weight-light\" rows=\"5\" placeholder=\"Remark\"> </textarea>\r\n                </div>\r\n\r\n                <div class=\"text-center py-4 mt-3\">\r\n                    <button [disabled]=\"submitted == true ? true : false\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                    <input type=\"button\" class=\"btn btn-primary\" (click)=\"clear()\" value=\"Clear\">\r\n                </div>\r\n              </form>\r\n            </div><!-- Card body -->\r\n          </div> <!-- Card end -->\r\n        </div>\r\n\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("./src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_request__ = __webpack_require__("./src/app/objects/request.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestComponent = /** @class */ (function () {
    function RequestComponent(rService) {
        this.rService = rService;
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.request = new __WEBPACK_IMPORTED_MODULE_2__objects_request__["a" /* Request */]();
    };
    RequestComponent.prototype.clear = function () {
        this.submitted = false;
        this.request = new __WEBPACK_IMPORTED_MODULE_2__objects_request__["a" /* Request */]();
        this.returnObject = null;
    };
    RequestComponent.prototype.submitRequest = function () {
        var _this = this;
        this.submitted = true;
        this.request.status = 'REQUESTED';
        var timeRequested = new Date();
        var timestamp = timeRequested.getHours() + ':' + timeRequested.getMinutes() + ':' + timeRequested.getSeconds();
        var formatted_date = timeRequested.getDate() + "/" + timeRequested.getMonth() + 1 + "/" + timeRequested.getFullYear();
        this.request.timeRequested = formatted_date + ' ' + timestamp;
        this.rService.submitRequest(this.request).then(function (ro) { return _this.evaluateResponse(ro); });
    };
    RequestComponent.prototype.evaluateResponse = function (value) {
        this.returnObject = value[0];
        var requests = JSON.parse(value[0].returnedObject);
        this.request = requests[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__objects_request__["a" /* Request */])
    ], RequestComponent.prototype, "request", void 0);
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request',
            template: __webpack_require__("./src/app/request/request.component.html"),
            styles: [__webpack_require__("./src/app/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.loggedIn.next(true);
        this.router.navigate(['']);
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    DeviceService.prototype.getAllDevices = function (towTrucks) {
        return this.http.post('http://localhost:8080/api/getAllCumulocityDevices', towTrucks)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DeviceService.prototype.checkDeviceLocation = function (deviceId) {
        return this.http.put('http://localhost:8080/api/checkDeviceLocation', deviceId)
            .toPromise()
            .then(function (device) { return device.json(); }) //device.json() as Device
            .catch(this.handleError);
    };
    DeviceService.prototype.saveInsured = function (policy) {
        return this.http.put('http://localhost:8080/api/saveInsured', policy)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DeviceService.prototype.findInsured = function (policy) {
        return this.http.put('http://localhost:8080/api/findInsured', policy)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DeviceService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    LoginService.prototype.loginUser = function (user) {
        console.log('/api/loginUser2222');
        return this.http.post('/api/loginUser', user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/loginUser', user)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    LoginService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionService = /** @class */ (function () {
    function PermissionService(http) {
        this.http = http;
        this.permittedRole = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    PermissionService.prototype.getPermission = function () {
        return this.permittedRole.getValue();
    };
    PermissionService.prototype.loadPermission = function (userRole) {
        var _this = this;
        return this.http.post('http://localhost:8080/api/loadPermissions', userRole)
            .map(function (res) {
            var resp = res.json();
            _this.permittedRole.next(resp.roleType);
            console.log(resp);
            return resp;
        });
    };
    PermissionService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    PermissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    RequestService.prototype.submitRequest = function (request) {
        return this.http.put('http://localhost:8080/api/saveRequest', request)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.getAllRequests = function () {
        return this.http.get('http://localhost:8080/api/getRequests')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/towtrucks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TowtrucksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TowtrucksService = /** @class */ (function () {
    function TowtrucksService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TowtrucksService.prototype.saveUser = function () {
        var user = {
            userName: 'JohnJones2',
            password: 'admin',
            firstName: 'First Name',
            lastName: 'Last Name',
            contactNumber: '09567851660',
            userRoleId: 3
        };
        return this.http.put('http://localhost:8080/api/saveUser', user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TowtrucksService.prototype.getAllTowTrucks = function () {
        return this.http.get('http://localhost:8080/api/getAllTowTrucks')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TowtrucksService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    TowtrucksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TowtrucksService);
    return TowtrucksService;
}());



/***/ }),

/***/ "./src/app/test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var Test = /** @class */ (function () {
    function Test(data) {
        this.data = data;
    }
    return Test;
}());



/***/ }),

/***/ "./src/app/testing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestingService = /** @class */ (function () {
    function TestingService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TestingService.prototype.testCumulocity = function (test) {
        return this.http.post('http://localhost:8080/api/testCumulocity', test)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestingService.prototype.getAllCumulocityDevices = function () {
        return this.http.get('http://localhost:8080/api/getAllCumulocityDevices')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestingService.prototype.saveInsured = function (policy) {
        return this.http.put('http://localhost:8080/api/saveInsured', policy)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestingService.prototype.findInsured = function (policy) {
        return this.http.put('http://localhost:8080/api/findInsured', policy)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TestingService.prototype.handleError = function (error) {
        console.error('An error    occurred', error);
        return Promise.reject(error.message || error);
    };
    TestingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TestingService);
    return TestingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map