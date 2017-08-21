webpackJsonp([2,5],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(319);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutus',
        template: __webpack_require__(419),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(420),
        styles: [__webpack_require__(383)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_scroll_to__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slideshow_slideshow_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aboutus_aboutus_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__slideshow_slideshow_component__["a" /* SlideshowComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__aboutus_aboutus_component__["a" /* AboutusComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_scroll_to__["ScrollToModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(http) {
        this.http = http;
        this.success = false;
        this.warning = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.mailForm = function (value) {
        console.log(value);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post("https://formspree.io/welloculus@gmail.com", value, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    ContactComponent.prototype.extractData = function (res) {
        var body = res.json();
        if (body.success) {
            $("#success").attr("display");
            $("#success").show();
            $("#warning").hide();
            $("input#name").val('');
            $("input#_replyto").val('');
            $("input#_subject").val('');
            $("textarea#message").val('');
            setTimeout(function () {
                $("#success").hide();
            }.bind(this), 15000);
        }
        else {
            $("#warning").attr("display");
            $("#success").hide();
            $("#warning").show();
            setTimeout(function () {
                $("#warning").hide();
            }.bind(this), 15000);
        }
        return body.data || {};
    };
    ContactComponent.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(421),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(422),
        styles: [__webpack_require__(385)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(423),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(424),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideshowComponent = (function () {
    function SlideshowComponent() {
        this.bgImg1 = "./assets/images/slideshow/Website-Health-1440-x-700.png";
        this.bgImg2 = "./assets/images/slideshow/slider3.png";
        this.bgImg3 = "./assets/images/slideshow/slider2.png";
        this.user_details = { video: "https://www.youtube.com/embed/AR6hyuPdyrM", title: "Welloculus for patient", bgimage: "./assets/images/front-video/user.png" };
        this.provider_details = { video: "https://www.youtube.com/embed/ae3f_ngNtY0", title: "Welloculus for healthcare provider", bgimage: "./assets/images/front-video/provider.png" };
        this.caretaker_details = { video: "https://www.youtube.com/embed/g32t4DCptx0", title: "Welloculus for caretaker", bgimage: "./assets/images/front-video/caretaker.png" };
    }
    SlideshowComponent.prototype.ngAfterViewInit = function () {
        $('#slideshow-carousel').carousel();
    };
    SlideshowComponent.prototype.ngOnInit = function () {
    };
    SlideshowComponent.prototype.showChildModal = function (data) {
        $(".modal-title").text(data.title);
        $(".modal-body").find('iframe').attr('src', data.video);
        this.childModal.show();
    };
    SlideshowComponent.prototype.hideChildModal = function () {
        $('.modal-body').find('iframe').attr('src', ' ');
        $(".modal-title").text(' ');
        this.childModal.hide();
    };
    return SlideshowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], SlideshowComponent.prototype, "childModal", void 0);
SlideshowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slideshow',
        template: __webpack_require__(425),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [])
], SlideshowComponent);

var _a;
//# sourceMappingURL=slideshow.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#sp-contact-wrapper {\r\n    padding: 80px 0 100px !important;\r\n}\r\n.sp_qc_clr {\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n}\r\n#sp-contact-wrapper .sp_quickcontact textarea#message {\r\n    margin-top: -170px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#sp-footer-wrapper {\r\n    padding: 10px 0px 0px !important;\r\n}\r\n#sp-footerbottom-wrapper {\r\n    padding: 15px 0px !important;\r\n}\r\n.btn.social {\r\n    padding: 20px 20px;\r\n}\r\na{\r\n     cursor: pointer;\r\n}\r\n\r\n#sp-footer1 [class^=\"icon-\"], [class*=\" icon-\"],#sp-footer1 [class^=\"fa-\"], [class*=\" fa-\"] {\r\n    position: absolute;\r\n    top: 40px;\r\n    margin-left: -12px;\r\n}\r\ni.icon-facebook {\r\n    margin-left: -6px!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "@media (min-width: 1200px){\r\n     .container, .navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container {\r\n         width: 1170px;\r\n     }\r\n}\r\n.text-left {\r\n    text-align: left;\r\n}\r\n#sp-logo{\r\n     float: left;\r\n}\r\n#sp-menu{\r\n     margin-left: 0px;\r\n     margin-right: 0px;\r\n}\r\n.container {\r\n    padding-left: 0px!important;\r\n    padding-right: 0px!important;\r\n}\r\nli a{\r\n     cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".modal {\r\n     top: 0;\r\n     right: 0;\r\n     width: 100%;\r\n     left: inherit;\r\n     margin-right: 0px;\r\n     background-color: transparent;\r\n}\r\n.modal.in .modal-dialog, .modal-content{\r\n     position: fixed;\r\n    margin: 0 auto;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 6%;\r\n    top: 6%;\r\n}\r\n.modal-body{\r\n/*     height: 93%;\r\n     max-height: none;\r\n     overflow: hidden;\r\n*/\r\n     margin: 0 auto;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    top: 10%;\r\n    position: absolute;\r\n   margin-bottom: -32px;\r\n}\r\np.video_button {\r\n     padding-bottom: 0px;\r\n     margin-bottom: 0px;\r\n}\r\nbutton.close.pull-right {\r\n    background: red;\r\n    color: white;\r\n    border-radius: 10px;\r\n    width: 30px;\r\n    font-weight: bold;\r\n}\r\n#sp-slideshow-wrapper .carousel .carousel-caption{\r\n     background-color: #68A097;\r\n}\r\n.carousel-control.left, .carousel-control.right{\r\n     top:50%;\r\n}\r\n#sp-slideshow-wrapper .carousel .carousel-control.left {\r\n    text-align: left;\r\n}\r\n#sp-slideshow-wrapper .carousel .carousel-control.right {\r\n    text-align: right;\r\n}\r\n.slideshowModal{\r\n     overflow: hidden;\r\n     top: 10%;\r\n}\r\n.carousel-control{\r\n     right:inherit;\r\n}\r\n.owl-item {\r\n    -webkit-backface-visibility: hidden;\r\n    -webkit-transform: translateZ(0) scale(1.0, 1.0);\r\n}\r\n.carousel-inner>.item{position:relative;display:none;transition:.6s ease-in-out left}\r\n.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}\r\n.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 106,
	"./af.js": 106,
	"./ar": 113,
	"./ar-dz": 107,
	"./ar-dz.js": 107,
	"./ar-kw": 108,
	"./ar-kw.js": 108,
	"./ar-ly": 109,
	"./ar-ly.js": 109,
	"./ar-ma": 110,
	"./ar-ma.js": 110,
	"./ar-sa": 111,
	"./ar-sa.js": 111,
	"./ar-tn": 112,
	"./ar-tn.js": 112,
	"./ar.js": 113,
	"./az": 114,
	"./az.js": 114,
	"./be": 115,
	"./be.js": 115,
	"./bg": 116,
	"./bg.js": 116,
	"./bn": 117,
	"./bn.js": 117,
	"./bo": 118,
	"./bo.js": 118,
	"./br": 119,
	"./br.js": 119,
	"./bs": 120,
	"./bs.js": 120,
	"./ca": 121,
	"./ca.js": 121,
	"./cs": 122,
	"./cs.js": 122,
	"./cv": 123,
	"./cv.js": 123,
	"./cy": 124,
	"./cy.js": 124,
	"./da": 125,
	"./da.js": 125,
	"./de": 128,
	"./de-at": 126,
	"./de-at.js": 126,
	"./de-ch": 127,
	"./de-ch.js": 127,
	"./de.js": 128,
	"./dv": 129,
	"./dv.js": 129,
	"./el": 130,
	"./el.js": 130,
	"./en-au": 131,
	"./en-au.js": 131,
	"./en-ca": 132,
	"./en-ca.js": 132,
	"./en-gb": 133,
	"./en-gb.js": 133,
	"./en-ie": 134,
	"./en-ie.js": 134,
	"./en-nz": 135,
	"./en-nz.js": 135,
	"./eo": 136,
	"./eo.js": 136,
	"./es": 138,
	"./es-do": 137,
	"./es-do.js": 137,
	"./es.js": 138,
	"./et": 139,
	"./et.js": 139,
	"./eu": 140,
	"./eu.js": 140,
	"./fa": 141,
	"./fa.js": 141,
	"./fi": 142,
	"./fi.js": 142,
	"./fo": 143,
	"./fo.js": 143,
	"./fr": 146,
	"./fr-ca": 144,
	"./fr-ca.js": 144,
	"./fr-ch": 145,
	"./fr-ch.js": 145,
	"./fr.js": 146,
	"./fy": 147,
	"./fy.js": 147,
	"./gd": 148,
	"./gd.js": 148,
	"./gl": 149,
	"./gl.js": 149,
	"./gom-latn": 150,
	"./gom-latn.js": 150,
	"./he": 151,
	"./he.js": 151,
	"./hi": 152,
	"./hi.js": 152,
	"./hr": 153,
	"./hr.js": 153,
	"./hu": 154,
	"./hu.js": 154,
	"./hy-am": 155,
	"./hy-am.js": 155,
	"./id": 156,
	"./id.js": 156,
	"./is": 157,
	"./is.js": 157,
	"./it": 158,
	"./it.js": 158,
	"./ja": 159,
	"./ja.js": 159,
	"./jv": 160,
	"./jv.js": 160,
	"./ka": 161,
	"./ka.js": 161,
	"./kk": 162,
	"./kk.js": 162,
	"./km": 163,
	"./km.js": 163,
	"./kn": 164,
	"./kn.js": 164,
	"./ko": 165,
	"./ko.js": 165,
	"./ky": 166,
	"./ky.js": 166,
	"./lb": 167,
	"./lb.js": 167,
	"./lo": 168,
	"./lo.js": 168,
	"./lt": 169,
	"./lt.js": 169,
	"./lv": 170,
	"./lv.js": 170,
	"./me": 171,
	"./me.js": 171,
	"./mi": 172,
	"./mi.js": 172,
	"./mk": 173,
	"./mk.js": 173,
	"./ml": 174,
	"./ml.js": 174,
	"./mr": 175,
	"./mr.js": 175,
	"./ms": 177,
	"./ms-my": 176,
	"./ms-my.js": 176,
	"./ms.js": 177,
	"./my": 178,
	"./my.js": 178,
	"./nb": 179,
	"./nb.js": 179,
	"./ne": 180,
	"./ne.js": 180,
	"./nl": 182,
	"./nl-be": 181,
	"./nl-be.js": 181,
	"./nl.js": 182,
	"./nn": 183,
	"./nn.js": 183,
	"./pa-in": 184,
	"./pa-in.js": 184,
	"./pl": 185,
	"./pl.js": 185,
	"./pt": 187,
	"./pt-br": 186,
	"./pt-br.js": 186,
	"./pt.js": 187,
	"./ro": 188,
	"./ro.js": 188,
	"./ru": 189,
	"./ru.js": 189,
	"./sd": 190,
	"./sd.js": 190,
	"./se": 191,
	"./se.js": 191,
	"./si": 192,
	"./si.js": 192,
	"./sk": 193,
	"./sk.js": 193,
	"./sl": 194,
	"./sl.js": 194,
	"./sq": 195,
	"./sq.js": 195,
	"./sr": 197,
	"./sr-cyrl": 196,
	"./sr-cyrl.js": 196,
	"./sr.js": 197,
	"./ss": 198,
	"./ss.js": 198,
	"./sv": 199,
	"./sv.js": 199,
	"./sw": 200,
	"./sw.js": 200,
	"./ta": 201,
	"./ta.js": 201,
	"./te": 202,
	"./te.js": 202,
	"./tet": 203,
	"./tet.js": 203,
	"./th": 204,
	"./th.js": 204,
	"./tl-ph": 205,
	"./tl-ph.js": 205,
	"./tlh": 206,
	"./tlh.js": 206,
	"./tr": 207,
	"./tr.js": 207,
	"./tzl": 208,
	"./tzl.js": 208,
	"./tzm": 210,
	"./tzm-latn": 209,
	"./tzm-latn.js": 209,
	"./tzm.js": 210,
	"./uk": 211,
	"./uk.js": 211,
	"./ur": 212,
	"./ur.js": 212,
	"./uz": 214,
	"./uz-latn": 213,
	"./uz-latn.js": 213,
	"./uz.js": 214,
	"./vi": 215,
	"./vi.js": 215,
	"./x-pseudo": 216,
	"./x-pseudo.js": 216,
	"./yo": 217,
	"./yo.js": 217,
	"./zh-cn": 218,
	"./zh-cn.js": 218,
	"./zh-hk": 219,
	"./zh-hk.js": 219,
	"./zh-tw": 220,
	"./zh-tw.js": 220
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 390;


/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<section id=\"sp-about-us-wrapper\" class=\" wow bounceIn \"><div class=\"container\"><div class=\"row-fluid\" id=\"about-us\">\n<div id=\"sp-about\" class=\"span12\">\t<div class=\"module \">\n\t\t<div class=\"mod-wrapper clearfix\">\n\t\t\t\t\t\t\t<h3 class=\"mod_header\">\n\t\t\t\t\tAbout Us\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mod-content clearfix\">\n\t\t\t\t<div class=\"mod-inner clearfix\">\n\t\t\t\t\t\t<div class=\"tm-about-main\">\n\t\t<p class=\"title_desc\">Welloculus is designed to care about the health of its users not only in a day-to-day life, but also when they need us the most, that is in emergency situations. We are involved in complete lifecycle of healthcare monitoring from keeping an eye on the vital statistics to analysis and reporting for the betterment of society on larger picture. As our name indicates, we proctor the well-being of every individual who is linked to us via their mobile and health monitoring devices.\n\nWelloculus is originated by Transility, an ‘end-to-end’ product development and IT solution providing concern, engaging on development, integration and implementation of Software for Healthcare. Transility has been working with some of the leading healthcare companies, offering its technology expertise and experience.For more information, visit:<a href=\"http://transility.com/\" target=\"_blank\"> http://transility.com</a></p>\n\t\t<span class=\"sub-title1\">Meet the team</span>\n\t\t<div class=\"row-fluid\">\n\t\t\t\t\t\t\t <div class=\"span3\">\n\t\t\t\t\t<div class=\"tm-about-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/about/about1.png\" alt=\"Anton Petrov\">\n\t\t\t\t\t\t<h4>Anton Petrov</h4>\n\t\t\t\t\t\t<strong class=\"tm-about-desg\">General manager</strong>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"tm-about-f\"><a href=\"https://www.facebook.com/pcmshaper\" class=\"btn btn-link social facebook\"><i style=\"\" class=\"icon-facebook \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-t\"><a href=\"https://www.twitter.com/pcmshaper\" class=\"btn btn-link social twitter\"><i style=\"\" class=\"icon-twitter \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-gp\"><a href=\"https://plus.google.com/+PCMShaper\" class=\"btn btn-link social gplus\"><i style=\"\" class=\"icon-google-plus \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-in\"><a href=\"/welloculus/\" class=\"btn btn-link social linkedin\"><i style=\"\" class=\"icon-linkedin \"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\t <div class=\"span3\">\n\t\t\t\t\t<div class=\"tm-about-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/about/about2.png\" alt=\"Kirl DONCHEV\">\n\t\t\t\t\t\t<h4>Kirl DONCHEV</h4>\n\t\t\t\t\t\t<strong class=\"tm-about-desg\">Design Master</strong>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"tm-about-f\"><a href=\"https://www.facebook.com/pcmshaper\" class=\"btn btn-link social facebook\"><i style=\"\" class=\"icon-facebook \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-t\"><a href=\"https://www.twitter.com/pcmshaper\" class=\"btn btn-link social twitter\"><i style=\"\" class=\"icon-twitter \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-gp\"><a href=\"/welloculus/\" class=\"btn btn-link social gplus\"><i style=\"\" class=\"icon-google-plus \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-in\"><a href=\"/welloculus/\" class=\"btn btn-link social linkedin\"><i style=\"\" class=\"icon-linkedin \"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\t <div class=\"span3\">\n\t\t\t\t\t<div class=\"tm-about-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/about/about3.png\" alt=\"Ilian Bonev\">\n\t\t\t\t\t\t<h4>Ilian Bonev</h4>\n\t\t\t\t\t\t<strong class=\"tm-about-desg\">Developer Ninja</strong>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"tm-about-f\"><a href=\"https://www.facebook.com/pcmshaper\" class=\"btn btn-link social facebook\"><i style=\"\" class=\"icon-facebook \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-t\"><a href=\"https://www.twitter.com/pcmshaper\" class=\"btn btn-link social twitter\"><i style=\"\" class=\"icon-twitter \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-gp\"><a href=\"https://plus.google.com/+PCMShaper\" class=\"btn btn-link social gplus\"><i style=\"\" class=\"icon-google-plus \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-in\"><a href=\"/welloculus/\" class=\"btn btn-link social linkedin\"><i style=\"\" class=\"icon-linkedin \"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\t <div class=\"span3\">\n\t\t\t\t\t<div class=\"tm-about-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/about/about4.png\" alt=\"Doni Stamov\">\n\t\t\t\t\t\t<h4>Doni Stamov</h4>\n\t\t\t\t\t\t<strong class=\"tm-about-desg\">SEO guru</strong>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"tm-about-f\"><a href=\"https://www.facebook.com/pcmshaper\" class=\"btn btn-link social facebook\"><i style=\"\" class=\"icon-facebook \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-t\"><a href=\"https://www.twitter.com/pcmshaper\" class=\"btn btn-link social twitter\"><i style=\"\" class=\"icon-twitter \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-gp\"><a href=\"https://plus.google.com/+PCMShaper\" class=\"btn btn-link social gplus\"><i style=\"\" class=\"icon-google-plus \"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"tm-about-in\"><a href=\"/welloculus/\" class=\"btn btn-link social linkedin\"><i style=\"\" class=\"icon-linkedin \"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"gap\"></div>\n\t</div>\n</div></div></section>\n"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<body class=\"article homepage  ltr preset1 menu-hidden-home responsive bg hfeed clearfix\">\n      <div class=\"body-innerwrapper\">\n           <app-slideshow></app-slideshow>\n           <app-header></app-header>\n           <app-aboutus></app-aboutus>\n           <app-contact></app-contact>\n           <app-footer></app-footer>\n      </div>\n</body>\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<section id=\"sp-contact-wrapper\" class=\" \"><div class=\"container\"><div class=\"row-fluid\" id=\"contact\">\n<div id=\"sp-contact\" class=\"span12\">\n<h4>Ask a question</h4>\n<div id=\"warning\" class=\"alert alert-danger\" style=\"display:none;\">\n\t<strong>Warning!</strong> Due to technical issue, mail couldn't sent!\n</div>\n<div id=\"success\" class=\"alert alert-success\" style=\"display:none;\">\n  <strong>Success!</strong> Your mail has been successfully sent!\n</div>\n<div id=\"sp_quickcontact141\" class=\"sp_quickcontact\">\n\t<form action=\"https://formspree.io/welloculus@gmail.com\" method=\"POST\"  #form=\"ngForm\" (ngSubmit)=\"mailForm(form.value)\">\r\n\t<div id=\"sp_qc_status\"></div>\n\t<div class=\"sp_qc_clr\"></div>\n\t<input type=\"text\" name=\"name\" id=\"name\" ngModel placeholder=\"Name...\">\r\n\t<div class=\"sp_qc_clr\"></div>\n\t<input type=\"email\" name=\"_replyto\" id=\"_replyto\" ngModel placeholder=\"Email...\">\r\n\t<div class=\"sp_qc_clr\"></div>\n\t<input type=\"text\" name=\"_subject\" id=\"_subject\" ngModel placeholder=\"Subject...\">\r\n\t<div class=\"sp_qc_clr\"></div>\n\t<textarea name=\"InputMessage\" id=\"message\" ngModel placeholder=\"Message...\" cols=\"\" rows=\"\"></textarea>\r\n\t<div class=\"sp_qc_clr\"></div>\r\n\t<button id=\"sp_qc_submit\" class=\"btn btn-primary\" type=\"submit\" name=\"submit\">SEND</button>\r\n\t<div class=\"sp_qc_clr\"></div>\r\n\t</form>\r\n</div>\n</div>\n</div></div></section>\n"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<footer id=\"sp-footer-wrapper\" class=\" \"><div class=\"container\"><div class=\"row-fluid\" id=\"footer\">\n<div id=\"sp-footer1\" class=\"span11\">\n\n<div class=\"custom\">\n\t<p><span style=\"line-height: 1.3em;\">\n\t\t<a href=\"https://www.facebook.com/Welloculus-306001339854927\" target=\"  \" class=\"btn btn-link social facebook btn-\"><i style=\"\" class=\"icon-facebook \"></i></a>&nbsp;\n\t\t<a href=\"https://github.com/welloculus\" target=\"  \" class=\"btn btn-link social github\"><i style=\"\" class=\"icon-github \"></i></a>\n\t\t<a href=\"https://www.linkedin.com/company-beta/13332395\" target=\"  \" class=\"btn btn-link social linkedin btn-\"><i style=\"\" class=\"icon-linkedin \"></i></a>\n\t\t<a href=\"https://welloculus.github.io/Cockpit/public\" target=\"  \" class=\"btn btn-link social\" title=\"Cockpit\"><i style=\"\" class=\"icon-cog\"></i></a>\n\t\t<a href=\"https://hub.docker.com/r/welloculus/rtawelloculus/\" target=\"_blank\" class=\"btn btn-link social\" title=\"Docker\"><i class=\"fa fa-docker\"></i></a>\n\t\t<a href=\"javascript:void(0);\" target=\"\" class=\"btn btn-link social\" title=\"Real Time Analysis\"><i class=\"icon-bar-chart\"></i></a>\n\t</span></p></div>\n</div>\n<div id=\"sp-footer2\" class=\"span1\"><a class=\"sp-totop\" scrollTo scrollTargetSelector=\"#sp-slideshow-wrapper\" title=\"Goto Top\" rel=\"nofollow\"><small>Goto Top </small><i class=\"icon-caret-up\"></i></a></div>\n</div></div></footer>\n<section id=\"sp-footerbottom-wrapper\" class=\" \"><div class=\"container\"><div class=\"row-fluid\" id=\"footerbottom\">\n<div id=\"sp-footerbottom\" class=\"span12\"><span class=\"copyright\">Copyright ©  2017 Welloculus. All Rights Reserved.</span><span class=\"designed-by\"> Developed by <a href=\"http://www.transility.com\" target=\" \">www.transility.com</a></span></div>\n</div></div></section>\n<a class=\"hidden-desktop btn btn-inverse sp-main-menu-toggler\" href=\"#\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n\t\t\t<i class=\"icon-align-justify\"></i>\n\t\t</a>\n\n          <div class=\"hidden-desktop sp-mobile-menu nav-collapse collapse\">\n          \t\t\t<ul class=\"\"><li class=\"menu-item first\"><a href=\"#sp-slideshow-wrapper\" class=\"menu-item first\"><span class=\"menu\"><span class=\"menu-title\">Home</span></span></a></li><li class=\"menu-item\"><a href=\"#sp-about-us-wrapper\" class=\"menu-item\"><span class=\"menu\"><span class=\"menu-title\">About</span></span></a></li><li class=\"menu-item\"><a href=\"#sp-contact-wrapper\" class=\"menu-item\"><span class=\"menu\"><span class=\"menu-title\">Contact</span></span></a></li><li class=\"menu-item\"><a href=\"#login\" class=\"menu-item\"><span class=\"menu\"><span class=\"menu-title\">Login</span></span></a></li><li class=\"menu-item last\"><a href=\"#sp-services-wrapper\" class=\"menu-item last\"><span class=\"menu\"><span class=\"menu-title\">Registration</span></span></a></li></ul>\n          \t\t</div>\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "<header id=\"sp-header-wrapper\" class=\" \"><div class=\"container\"><div class=\"row-fluid\" id=\"header\">\n<div id=\"sp-logo\" class=\"span6 text-left\"><div class=\"logo-wrapper\"><a href=\"#\"><img alt=\"\" class=\"image-logo\" src=\"./assets/images/logo.png\"></a></div></div>\n\n<div id=\"sp-menu\" class=\"span6\">\n\n\n\t\t\t<div id=\"sp-main-menu\" class=\"visible-desktop\">\n\t\t\t\t<ul class=\"sp-menu level-0\">\n                         <li class=\"menu-item first\">\n                              <a scrollTo scrollTargetSelector=\"#sp-slideshow-wrapper\" class=\"menu-item first current\">\n                                   <span class=\"menu\"><span class=\"menu-title\">Home</span></span>\n                              </a>\n                         </li>\n\t\t\t\t\t<li class=\"menu-item\">\n                              <a class=\"menu-item\" href=\"https://welloculus.github.io/Cockpit/public/\" target=\"_blank\">\n                                   <span class=\"menu\"><span class=\"menu-title\">Cockpit</span></span>\n                              </a>\n                         </li>\n\t\t\t\t\t<li class=\"menu-item\">\n                              <a class=\"menu-item\" href=\"https://welloculus.github.io/Wiki/public/\" target=\"_blank\">\n                                   <span class=\"menu\"><span class=\"menu-title\">Wiki</span></span>\n                              </a>\n                         </li>\n\t\t\t\t\t<li class=\"menu-item\">\n                              <a class=\"menu-item\" href=\"https://hub.docker.com/r/welloculus/rtawelloculus/\" target=\"_blank\">\n                                   <span class=\"menu\"><span class=\"menu-title\">Docker</span></span>\n                              </a>\n                         </li>\n\t\t\t\t\t<li class=\"menu-item\">\n                              <a scrollTo scrollTargetSelector=\"#sp-about-us-wrapper\" class=\"menu-item\">\n                                   <span class=\"menu\"><span class=\"menu-title\">About</span></span>\n                              </a>\n                         </li>\n\t\t\t\t\t<li class=\"menu-item\">\n                              <a scrollTo scrollTargetSelector=\"#sp-contact-wrapper\" class=\"menu-item\">\n                                   <span class=\"menu\"><span class=\"menu-title\">Contact</span></span>\n                              </a>\n                         </li>\n                    </ul>\n\t\t\t</div>\n\t\t\t</div>\n</div></div></header>\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<section id=\"sp-services-wrapper\" class=\" \"><div class=\"container\"><div class=\"row-fluid\" id=\"services\">\n<div id=\"sp-service\" class=\"span12\">\t<div class=\"module \">\n\t\t<div class=\"mod-wrapper clearfix\">\n\t\t\t\t\t\t\t<h3 class=\"mod_header\">\n\t\t\t\t\tJoin Welloculus\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mod-content clearfix\">\n\t\t\t\t<div class=\"mod-inner clearfix\">\n\t\t\t\t\t\t<div class=\"tm-service-main\">\n\t\t<p style=\"text-transform:uppercase;\"><strong></strong></p>\n\t\t<p class=\"title_desc\"></p>\n\t\t<div class=\"row-fluid\">\n               <div class=\"span1 registration_type\" reg-type=\"login\">\n   <div class=\"tm-service-inner\"  style=\"display:none;\">\n         <img src=\"./assets/images/services/login.png\" alt=\"Login\">\n         <h4>Login</h4>\n         <p>Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>\n   </div>\n</div>\n\n\t\t\t\t\t\t\t <div class=\"span3 registration_type\" reg-type=\"providers\">\n\t\t\t\t\t<div class=\"tm-service-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/services/provider.png\" alt=\"Providers\">\n\t\t\t\t\t\t<h4>Providers</h4>\n\t\t\t\t\t\t<p>Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\t <div class=\"span3 registration_type\" reg-type=\"suppliers\">\n\t\t\t\t\t<div class=\"tm-service-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/services/supplier.png\" alt=\"Suppliers\">\n\t\t\t\t\t\t<h4>Suppliers</h4>\n\t\t\t\t\t\t<p>Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\t <div class=\"span3 registration_type\" reg-type=\"facilitators\">\n\t\t\t\t\t<div class=\"tm-service-inner\">\n\t\t\t\t\t\t<img src=\"./assets/images/services/facilitator.png\" alt=\"Facilitators\">\n\t\t\t\t\t\t<h4>Facilitators</h4>\n\t\t\t\t\t\t<p>Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"gap\"></div>\n\t</div>\n</div></div></section>\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "          <section id=\"sp-slideshow-wrapper\" class=\" \">\n          <div class=\"row-fluid\" id=\"slideshow\">\n             <div id=\"sp-slider\" class=\"span12\">\n             <div id=\"slideshow-carousel\" class=\"carousel slide  \">\n                 <div class=\"carousel-inner\">\n                         <div class=\"item active\">\n                                <img style=\"border: 0;\" [src]=\"bgImg1\" alt=\"\">\n                                <div class=\"carousel-caption_\">\n                                     <div class=\"carousel-caption first-video\"><img class=\"slider-video-img\" [src]=\"user_details.bgimage\">\n                                      <p class=\"video_button\" (click)=\"showChildModal(user_details)\">\n                                           <!-- START: Modals -->\n                                           <a href=\"#\" class=\"modal_link cboxElement\" data-modal-inner-width=\"1000\" data-modal-inner-height=\"600\" [title]=\"user_details.title\" data-modal-iframe=\"true\" data-modal-video=\"true\" data-modal-done=\"1\"></a>\n                                           <!-- END: Modals -->\n                                      </p>\n                                      </div>\n                                 </div>\n                           </div>\n                           <div class=\"item\">\n                                <img style=\"border: 0;\" [src]=\"bgImg2\" alt=\"\">\n                                <div class=\"carousel-caption_\">\n                                   <div class=\"carousel-caption second-video\"><img class=\"slider-video-img\" [src]=\"provider_details.bgimage\">\n                                        <p class=\"video_button\" (click)=\"showChildModal(provider_details)\">\n                                             <!-- START: Modals -->\n                                             <a href=\"#\" class=\"modal_link cboxElement\" data-modal-inner-width=\"1000\" data-modal-inner-height=\"600\" [title]=\"provider_details.title\" data-modal-iframe=\"true\" data-modal-video=\"true\" data-modal-done=\"1\"></a>\n                                             <!-- END: Modals -->\n                                        </p>\n                                   </div>\n                              </div>\n                           </div>\n\n                           <div class=\"item\">\n                                <img style=\"border: 0;\"  [src]=\"bgImg3\" alt=\"\">\n                                <div class=\"carousel-caption_\">\n                                   <div class=\"carousel-caption second-video\"><img class=\"slider-video-img\" [src]=\"caretaker_details.bgimage\">\n                                        <p class=\"video_button\" (click)=\"showChildModal(caretaker_details)\">\n                                             <!-- START: Modals -->\n                                             <a href=\"#\" class=\"modal_link cboxElement\" data-modal-inner-width=\"1000\" data-modal-inner-height=\"600\" [title]=\"caretaker_details.title\" data-modal-iframe=\"true\" data-modal-video=\"true\" data-modal-done=\"1\"></a>\n                                             <!-- END: Modals -->\n                                        </p>\n                                   </div>\n                              </div>\n                           </div>\n                           </div>\n                 <a class=\"carousel-control left\" scrollTo href=\"#slideshow-carousel\" data-slide=\"prev\"><i class=\"icon-chevron-left\"></i></a>\n                 <a class=\"carousel-control right\" scrollTo href=\"#slideshow-carousel\" data-slide=\"next\"><i class=\"icon-chevron-right\"></i></a>\n             </div>\n             </div>\n          </div>\n          </section>\n\n          <div bsModal #childModal=\"bs-modal\" class=\"modal fade slideshowModal\"  [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title pull-left\">Child modal</h4>\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <iframe width=\"100%\" height=\"100%\"></iframe>\n                </div>\n              </div>\n            </div>\n          </div>\n"

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[477]);
//# sourceMappingURL=main.bundle.js.map