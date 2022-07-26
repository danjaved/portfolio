(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git Index\index\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



const _c0 = function () { return ["/"]; };
class HomeComponent {
    constructor(router) {
        this.router = router;
        this.sectionIndex = 1;
        this.containers = document.getElementsByClassName('home-element-container');
        this.sections = [null];
    }
    showDetail(aboutSelected) {
        var _a, _b, _c;
        document
            .querySelectorAll('.about-pannel')
            .forEach((ele) => ele.classList.remove('active'));
        document
            .querySelectorAll('.detail')
            .forEach((ele) => ele.classList.add('hide'));
        (_a = document.getElementById(aboutSelected)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        (_b = document
            .getElementById(aboutSelected + '-details')) === null || _b === void 0 ? void 0 : _b.classList.replace('hide', 'show');
        (_c = document
            .getElementById(aboutSelected + '-icon')) === null || _c === void 0 ? void 0 : _c.classList.replace('hide', 'show');
    }
    showWorkDetail(workSelected) {
        var _a, _b;
        console.log(workSelected);
        document
            .querySelectorAll('.work-pannel')
            .forEach((ele) => ele.classList.remove('active'));
        document
            .querySelectorAll('.my-work .work-detail')
            .forEach((ele) => ele.classList.add('hide'));
        ;
        (_a = document.getElementById(workSelected)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        (_b = document
            .getElementById(workSelected + '-detail')) === null || _b === void 0 ? void 0 : _b.classList.replace('hide', 'show');
        // document
        //   .getElementById(workSelected + '-icon')
        //   ?.classList.replace('hide', 'show');
    }
    scroll(id) {
        let scrollButton = document.getElementById('scroll-button');
        this.sectionIndex++;
        let element = this.sections[this.sectionIndex];
        if (id != undefined) {
            element = document.getElementById(id);
            this.sectionIndex = this.sections.indexOf(element);
            console.log(this.sections.length, this.sectionIndex);
        }
        if (this.sectionIndex < this.sections.length - 1) {
            scrollButton === null || scrollButton === void 0 ? void 0 : scrollButton.classList.replace('fa-arrow-up', 'fa-arrow-down');
        }
        // if (this.sectionIndex == this.sections.length-1)
        // { scrollButton?.classList.remove('fa-arrow-down'); scrollButton?.classList.add('fa-arrow-up'); console.log(scrollButton?.classList); }
        if (this.sectionIndex == this.sections.length - 1) {
            this.sectionIndex = 0;
            scrollButton === null || scrollButton === void 0 ? void 0 : scrollButton.classList.replace('fa-arrow-down', 'fa-arrow-up');
        }
        element === null || element === void 0 ? void 0 : element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
    ngOnInit() {
        setTimeout(() => {
            var _a, _b;
            (_a = document
                .getElementById('skill-details')) === null || _a === void 0 ? void 0 : _a.classList.replace('hide', 'show');
            (_b = document.getElementById('skill-icon')) === null || _b === void 0 ? void 0 : _b.classList.replace('hide', 'show');
        }, 500);
        //to get the parent element of all containers
        for (let i = 0; i < this.containers.length; i++)
            this.sections.push(this.containers[i].parentElement);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 397, vars: 2, consts: [["id", "homeComponent", 1, "home-text-color"], [1, "navbar", "navbar-dark", "sticky-top", "w-100", "px-3", "d-none", "d-md-flex", "text-light"], [1, "navbar-brand"], ["routerLinkActive", "router-link-active", 1, "btn", "border-0", 3, "routerLink"], [1, "display-6", "ms-lg-5", "font-montserrat", "fw-bold", "text-white"], [1, "text-turquoise-dim"], [1, "text-turquoise-dim", "display-6", "fw-bolder"], [1, "d-flex", "justify-content-end", "gap-3"], [1, "navbar-text"], [1, "btn", "border-0", 3, "click"], ["id", "home-body", 1, "container-fluid"], ["id", "main-intro", 1, "main-intro"], [1, "home-element-container"], [1, "d-flex", "w-100"], [1, "d-md-flex", "justify-content-center", "align-items-center"], [1, "m-md-0", "ps-2", "ps-md-0", "detail-container", "w-75", "mt-5"], [1, "profile", "text-white-50"], [1, "text-turquoise"], [1, "intro", "text-nowrap", "text-white"], [1, "experience", "text-white-50"], [1, "d-none", "d-md-block", "flex-md-grow-1"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "my-pic-container", "image-background-gradient"], ["height", "450", "width", "450", "src", "/assets/Danish.png", "alt", " \uD83E\uDD14", 1, "my-pic"], ["id", "about-me", 1, "about-section-container", "mt-5", "mt-lg-0", "d-flex", "align-items-center"], ["id", "", 1, "home-element-container", "d-flex", "align-items-center"], [1, "px-1", "px-md-5", "about-section", "d-flex", "justify-content-around", "align-items-center", "gap-5"], [1, "about-image-container", "image-background-gradient", "d-none", "d-md-block"], ["src", "/assets/Danish Pic 2.png", "alt", " \uD83E\uDD14", 1, "my-pic"], [1, "about-detail-container", "flex-grow-1", "align-self-start"], [1, "display-6", "mb-2", "section-heading", "fw-bold"], [1, "text-white-50"], [1, "d-flex", "gap-3", "gap-lg-4", "text-muted"], ["id", "skill", 1, "about-pannel", "active", 3, "click"], [1, "about_lower-bar"], ["id", "experience", 1, "about-pannel", 3, "click"], ["id", "education", 1, "about-pannel", 3, "click"], [1, "mt-3", "d-flex", "flex-column", "flex-md-row", "align-items-center", "gap-1", "gap-md-5"], [1, "detail-section"], ["id", "skill-details", 1, "detail", "hide", "fs-4", "font-pt-sans"], [1, "row", "col-10", "col-lg-9"], [1, "col"], [1, "p-3"], ["id", "experience-details", 1, "detail", "hide"], [1, "text-light", "font-montserrat"], [1, "text-turquoise", "fs-4", "font-pt-sans"], [1, "text-muted"], ["id", "education-details", 1, "detail", "hide"], [1, "px-3", "pt-3"], [1, "mb-3"], [1, "my-3"], [1, "mt-3"], [1, "detail-icon-section", "text-white-50", "d-none", "d-md-block"], ["id", "skill-icon", 1, "detail", "hide"], [1, "fa-solid", "fa-code"], ["id", "experience-icon", 1, "detail", "hide"], [1, "fa-solid", "fa-bug-slash"], ["id", "education-icon", 1, "detail", "hide"], [1, "fa-solid", "fa-school"], ["id", "services", 1, "my-services", "px-2", "mt-4", "mt-lg-0"], [1, "service-container"], [1, "row", "mb-3"], [1, "col-1", "ms-5", "d-none", "d-md-block"], [1, "col-12", "col-lg-9"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-center", "align-items-lg-stretch", "align-items-center", "gap-md-5", "mx-1", "mx-md-0"], [1, "card", "col-lg-3", "col-12"], [1, "card-body"], [1, "fa-solid", "fa-laptop-code", "service-icon"], [1, "card-title"], [1, "card-text", "text-white-50", "fs-6"], [1, "fa-solid", "fa-gears", "service-icon"], [1, "fa-solid", "fa-thumbs-up", "service-icon"], [1, "card-title", "text-turquoise-dim"], ["id", "my-work", 1, "my-work", "d-none"], [1, "home-element-container2"], [1, "w-100", "mt-4", "mt-lg-0"], [1, "row"], [1, "d-none", "d-lg-block", "col-lg-2"], [1, "col-lg-10", "col-12"], [1, "display-6", "section-heading", "fw-bold", "mb-lg-3"], [1, "d-flex", "flex-wrap", "justify-content-evenly", "align-items-center", "gap-md-5", "mx-1", "mx-md-0"], ["id", "mySpace", 1, "card", "work-pannel", "active", 3, "click"], [1, "fa-brands", "fa-java", "work-icon"], [1, "fa-brands", "fa-add", "work-icon", "px-1"], [1, "fa-solid", "fa-leaf", "work-icon"], ["id", "baanBaini", 1, "card", "work-pannel", 3, "click"], [1, "fa-brands", "fa-angular", "work-icon"], [1, "card-title", "text-center"], ["id", "portfolio", 1, "card", "work-pannel", 3, "click"], ["id", "mySpace-detail", 1, "row", "mySpace-detail", "mx-3", "mx-lg-0", "work-detail"], [1, "fs-4", "fw-bold", "mt-2", "mb-lg-3"], [1, "ms-2", "text-turquoise-dim"], ["href", "https://github.com/danjaved/My-Space-App", 1, "ms-2", "text-turquoise-dim", "text-decoration-none"], [1, "text-turquoise-dim", "fs-5"], ["id", "baanBaini-detail", 1, "row", "baanBaini-detail", "mx-3", "mx-lg-0", "hide", "work-detail"], ["id", "portfolio-detail", 1, "row", "portfolio-detail", "mx-3", "mx-lg-0", "hide", "work-detail"], ["id", "my-contact", 1, "mt-5", "mt-lg-0"], [1, "home-element-container", "container"], [1, "w-100"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "flex-column", "text-white-50", "d-none", "d-md-flex"], [1, "fa-solid", "fa-phone"], [1, "fa-solid", "fa-envelope"], [1, "d-flex", "flex-lg-row", "flex-column", "flex-wrap", "w-100", "gap-3", "gap-lg-4", "justify-content-between", "mt-4"], ["href", "https://www.linkedin.com/in/i-am-danish/", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "contactLinks"], [1, "fa-brands", "fa-linkedin"], ["href", "https://stackoverflow.com/users/11842836/danish-javed", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "contactLinks"], [1, "fa-brands", "fa-stack-overflow"], ["href", "https://github.com/danjaved", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "contactLinks"], [1, "fa-brands", "fa-github"], ["href", "https://www.hackerrank.com/Danish_Javed", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "contactLinks"], [1, "fa-brands", "fa-hackerrank"], ["href", "mailto:danishjaved636@gmail.com", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "text-light", "contactLinks"], ["href", "tel:+917525057580", "target", "_blank", "rel", "noopener", 1, "col-lg-3", "text-white", "contactLinks"], ["href", "assets/Danish Javed Resume.pdf", "download", "", 1, "col-lg-3", "text-white", "contactLinks", "w-100", "resumeButton"], [1, "fa-solid", "fa-file-arrow-down"], [1, "sticky-bottom"], [1, "d-flex", "justify-content-center"], ["title", "scrollButton", "focused", "true", 1, "btn", "scroll-button-container", 3, "keyup.Space", "click"], ["id", "scroll-button", 1, "fa-solid", "fa-arrow-down", "scroll-button", "text-white"], [1, "bg-black", "text-white-50", "text-center", "py-2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "anish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { return ctx.scroll("main-intro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() { return ctx.scroll("about-me"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() { return ctx.scroll("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Full Stack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hi, I am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Danish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Javed, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " with 1.5 years of experience in Web Development and keen intrest in Java, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Springboot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " and MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "In the infinity of web and development, I am a explorer and beginner. Hope I won't be someday. No, not explorer, I meant beginner. I'll be an explorer forever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_58_listener() { return ctx.showDetail("skill"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_62_listener() { return ctx.showDetail("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_66_listener() { return ctx.showDetail("education"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Springboot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Mindfire Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "( Dec 2020 - Current )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "(.Net Developer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Designed front-end and back-end solutions for test-driven development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Improved and enhanced functionality as per client requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Added a dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Implemented pdf and excel reports export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Recieved Angular training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Noida Institute of Engineering and Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Bachelor of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Computer Science - 76%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Rani Laxmi Bai Senior Secondary School, Lucknow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "68.4%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Galaxy Residntial School, Chhapra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "10 cgpa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "What I Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Being a developer I keep learning and fullfill my responsibality to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "update myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " with the fast changing technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Full Stack Web ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " I maintain current implementations and add new project modules as well. My entire focus remains on delivering the most optimzed code with least help required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Deployment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " I host simple websites for public access. Websites that are focused on sharing information about some product or service and don't need to hear back from users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "I don't deploy servers, not yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h5", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " I keep exploring deeper and deeper and try diffrent stuffs in relevent topics to find ways to do thing in even better ways. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " My Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " I belive there is not better way to learn, than to work. So I keep working on some or some other projects. Below are some examples: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_205_listener() { return ctx.showWorkDetail("mySpace"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " My Space ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_212_listener() { return ctx.showWorkDetail("baanBaini"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Baan Baini ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_221_listener() { return ctx.showWorkDetail("portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "My Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "small", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "(Get App)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " I keep moving my files back and forth between my laptop and phone. But the process of tranfering data was quiet frustating. I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "hate using cables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " for such tiny tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " All the available soultion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "required apps installed on both the devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " and almost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " all had tons of ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " and sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "shitty notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " So I came up with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "My Space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " I mean why do we have to complicate things simple task when life is already complicated enough. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " My Space is a simple application that helps you share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "uncompressed and unlimited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " files of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "any type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " across ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " any devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " in your local network. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Baan Baini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "small", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "(Get App)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " I keep moving my files back and forth between my laptop and phone. But the process of tranfering data was quiet frustating. I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "hate using cables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " for such tiny tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " All the available soultion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "required apps installed on both the devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " and almost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " all had tons of ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " and sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "shitty notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " So I came up with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "My Space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " I mean why do we have to complicate things simple task when life is already complicated enough. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " My Space is a simple application that helps you share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "uncompressed and unlimited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " files of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "any type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " across ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " any devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " in your local network. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "small", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "(Get App)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " I keep moving my files back and forth between my laptop and phone. But the process of tranfering data was quiet frustating. I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "hate using cables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " for such tiny tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " All the available soultion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "required apps installed on both the devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " and almost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " all had tons of ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " and sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "shitty notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " So I came up with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "My Space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " I mean why do we have to complicate things simple task when life is already complicated enough. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " My Space is a simple application that helps you share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "uncompressed and unlimited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " files of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "any type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " across ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " any devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " in your local network. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Find Me At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " +91 7525057580");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " danishjaved636@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " LinkedIn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Stackoverflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " HackerRank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " Call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " Get My Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.Space", function HomeComponent_Template_button_keyup_Space_389_listener() { return ctx.scroll(undefined); })("click", function HomeComponent_Template_button_click_389_listener() { return ctx.scroll(undefined); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Developed and maintained by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Danish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " with \u2764\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  backdrop-filter: blur(15px);\r\n  -webkit-backdrop-filter: blur(15px);\r\n  background: linear-gradient(rgba(64, 224, 208, 0.2), black);\r\n  text-shadow: 1px 1px 3px black;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  font-family: \"Montserrat\", \"Gill Sans\";\r\n  text-transform: uppercase;\r\n  word-spacing: 0.25rem;\r\n}\r\n\r\n.intro[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  font-family: \"PT Sans\", \"Times New Roman\", Times, serif;\r\n}\r\n\r\n.experience[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\n.my-pic[_ngcontent-%COMP%] {\r\n  transform: rotate(-1deg) translateY(1rem);\r\n}\r\n\r\n.detail-container[_ngcontent-%COMP%] {\r\n  border-radius: 48% 25% 50% 50%;\r\n}\r\n\r\n.about-pannel[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n#about-me[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: turquoise;\r\n  text-shadow: 0 0 10px teal;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.about_lower-bar[_ngcontent-%COMP%] {\r\n  height: 3px;\r\n  width: 100%;\r\n  background-color: grey;\r\n  border-radius: 3rem;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]   .about_lower-bar[_ngcontent-%COMP%] {\r\n  background-color: turquoise;\r\n  animation: expand-slowly 0.5s 1 forwards ease-in-out;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n  height: 0;\r\n  overflow: hidden;  \r\n  transition: all 0.5;\r\n}\r\n\r\n.detail[_ngcontent-%COMP%], .work-detail[_ngcontent-%COMP%] {\r\n  transition:all 0.5s;\r\n  background-color: inherit;\r\n}\r\n\r\n.detail.show[_ngcontent-%COMP%], .work-detail.show[_ngcontent-%COMP%] {\r\n  transform: translateX(0rem);\r\n  opacity: 1;\r\n}\r\n\r\n.detail.hide[_ngcontent-%COMP%], .work-detail.hide[_ngcontent-%COMP%] {\r\n  transform: translateX(-50rem);\r\n  opacity: 0;\r\n}\r\n\r\n.image-background-gradient[_ngcontent-%COMP%] {\r\n  background: radial-gradient(teal, turquoise, black);\r\n  border-radius: 48% 25% 50% 50%;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes expand-slowly {\r\n  from {\r\n    width: 0%;\r\n  }\r\n\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.text-turquoise[_ngcontent-%COMP%] {\r\n  color: turquoise;\r\n}\r\n\r\n.text-turquoise-dim[_ngcontent-%COMP%] {\r\n  color: #1db5a6;\r\n}\r\n\r\n.font-montserrat[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\", \"Gill Sans\";\r\n}\r\n\r\n.font-pt-sans[_ngcontent-%COMP%] {\r\n  font-family: \"PT Sans\", \"Times New Roman\", Times, serif;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]{\r\n    font-family: 'Open sans','system-ui';\r\n    color: rgb(216, 216, 216);\r\n}\r\n\r\n.home-text-color[_ngcontent-%COMP%] {\r\n  color: rgb(200, 200, 200);\r\n}\r\n\r\n.detail-icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 10rem;\r\n}\r\n\r\n.my-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .my-work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  padding: 0 0.5rem 0 0;\r\n  background-color: transparent;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.my-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover, .my-work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover, .my-work[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%] {\r\n  text-shadow: 0px 0px 1px white;\r\n  transform: scale(1.05);\r\n  background: linear-gradient(\r\n    to bottom right,\r\n    rgb(0, 0, 0, 0.3),\r\n    rgb(0, 0, 0, 0.5)\r\n  );\r\n  border-radius: 3rem 1rem 3rem 3rem;\r\n}\r\n\r\n.my-work[_ngcontent-%COMP%]   .card.active[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.home-element-container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.service-icon[_ngcontent-%COMP%] {\r\n  font-size: 5rem;\r\n  padding: 1rem 0 1rem 0;\r\n  color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.my-work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.work-icon[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n  padding: 1rem 0 1rem 0;\r\n  color: rgba(64, 224, 208, 0.466);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .work-icon[_ngcontent-%COMP%]{\r\n  color: turquoise;\r\n}\r\n\r\n.fa-leaf[_ngcontent-%COMP%]{\r\n  font-size: 3rem;\r\n}\r\n\r\n.scroll-button[_ngcontent-%COMP%]{\r\n    font-size: 3rem;\r\n    text-shadow: 1px 1px 2px black;\r\n    \r\n}\r\n\r\n.scroll-button-container[_ngcontent-%COMP%]{\r\n    \r\n    border-radius: 50%;\r\n    padding: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#scroll-button[_ngcontent-%COMP%]{\r\n    animation: move-up-down 0.8s alternate-reverse ease-in-out infinite;    \r\n}\r\n\r\n@keyframes move-up-down {\r\n    from{\r\n        transform: translateY(0.7rem);\r\n    }\r\n      to{\r\n        transform: translateY(-0.7rem);\r\n    }\r\n    \r\n}\r\n\r\n.work-detail[_ngcontent-%COMP%]{width:75%}\r\n\r\n.contactLinks[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  font-family: \"pt sans\", \"Gill Sans\";\r\n  color: inherit;\r\n  text-align: center;\r\n  font-size: larger;\r\n  padding: 0.3rem;\r\n  border: 2px solid #ffffff40;\r\n  border-radius: 0.5rem;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.contactLinks[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  text-shadow: 1px 0 8px grey;\r\n  border: 2px solid #1db5a6;\r\n  background-color: teal;\r\n  color: #000 !important;\r\n  font-weight: bold;\r\n}\r\n\r\n.contactLinks[_ngcontent-%COMP%]   .fa-solid[_ngcontent-%COMP%], .contactLinks[_ngcontent-%COMP%]   .fa-brands[_ngcontent-%COMP%]{\r\n    color: #1db5a6;\r\n    font-size: 1.5rem;\r\n    vertical-align: text-top;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.contactLinks[_ngcontent-%COMP%]:hover   .fa-solid[_ngcontent-%COMP%], .contactLinks[_ngcontent-%COMP%]:hover   .fa-brands[_ngcontent-%COMP%]{\r\n    color: black;\r\n    \r\n}\r\n\r\n.resumeButton[_ngcontent-%COMP%]{\r\n  font-size: x-large;\r\n  font-family: \"Montserrat\", \"Gill Sans\";\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .home-element-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n\r\n  .detail-icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n\r\n  .service-icon[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n  .my-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .my-work[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    \r\n    padding: 0;\r\n  }\r\n\r\n  .work-icon[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n  }\r\n  .fa-leaf[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n  }\r\n  .work-detail[_ngcontent-%COMP%]{width:100%}\r\n  .resumeButton[_ngcontent-%COMP%]{\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsMkRBQTJEO0VBQzNELDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxtREFBbUQ7RUFDbkQsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qjs7OztHQUlDO0VBQ0Qsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTs7OzJCQUd5Qjs7RUFFekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7O0FBRWxDOztBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtRUFBbUU7QUFDdkU7O0FBQ0E7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztNQUNFO1FBQ0UsOEJBQThCO0lBQ2xDOztBQUVKOztBQUNBLGFBQWEsU0FBUzs7QUFDdEI7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUNBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFDQTs7SUFFSSxZQUFZOztBQUVoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0EsYUFBYSxVQUFVO0VBQ3ZCOztFQUVBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDY0LCAyMjQsIDIwOCwgMC4yKSwgYmxhY2spO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkdpbGwgU2Fuc1wiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd29yZC1zcGFjaW5nOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uaW50cm8ge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLm15LXBpYyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpIHRyYW5zbGF0ZVkoMXJlbSk7XHJcbn1cclxuXHJcbi5kZXRhaWwtY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA0OCUgMjUlIDUwJSA1MCU7XHJcbn1cclxuXHJcbi5hYm91dC1wYW5uZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2Fib3V0LW1lIC5hY3RpdmUge1xyXG4gIGNvbG9yOiB0dXJxdW9pc2U7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHRlYWw7XHJcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG59XHJcblxyXG4uYWJvdXRfbG93ZXItYmFyIHtcclxuICBoZWlnaHQ6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUgLmFib3V0X2xvd2VyLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlO1xyXG4gIGFuaW1hdGlvbjogZXhwYW5kLXNsb3dseSAwLjVzIDEgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjU7XHJcbn1cclxuXHJcbi5kZXRhaWwsLndvcmstZGV0YWlsIHtcclxuICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5kZXRhaWwuc2hvdyxcclxuLndvcmstZGV0YWlsLnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZGV0YWlsLmhpZGUsXHJcbi53b3JrLWRldGFpbC5oaWRlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcmVtKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5pbWFnZS1iYWNrZ3JvdW5kLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodGVhbCwgdHVycXVvaXNlLCBibGFjayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDglIDI1JSA1MCUgNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhwYW5kLXNsb3dseSB7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LXR1cnF1b2lzZSB7XHJcbiAgY29sb3I6IHR1cnF1b2lzZTtcclxufVxyXG5cclxuLnRleHQtdHVycXVvaXNlLWRpbSB7XHJcbiAgY29sb3I6ICMxZGI1YTY7XHJcbn1cclxuXHJcbi5mb250LW1vbnRzZXJyYXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJHaWxsIFNhbnNcIjtcclxufVxyXG5cclxuLmZvbnQtcHQtc2FucyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLnNlY3Rpb24taGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywnc3lzdGVtLXVpJztcclxuICAgIGNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbn1cclxuLmhvbWUtdGV4dC1jb2xvciB7XHJcbiAgY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuLmRldGFpbC1pY29uLXNlY3Rpb24gaSB7XHJcbiAgZm9udC1zaXplOiAxMHJlbTtcclxufVxyXG5cclxuLm15LXNlcnZpY2VzIC5jYXJkLFxyXG4ubXktd29yayAuY2FyZCB7XHJcbiAgcGFkZGluZzogMCAwLjVyZW0gMCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubXktc2VydmljZXMgLmNhcmQ6aG92ZXIsXHJcbi5teS13b3JrIC5jYXJkOmhvdmVyLFxyXG4ubXktd29yayAuY2FyZC5hY3RpdmUge1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSByaWdodCxcclxuICAgIHJnYigwLCAwLCAwLCAwLjMpLFxyXG4gICAgcmdiKDAsIDAsIDAsIDAuNSlcclxuICApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW0gMXJlbSAzcmVtIDNyZW07XHJcbn1cclxuLm15LXdvcmsgLmNhcmQuYWN0aXZlIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uaG9tZS1lbGVtZW50LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ubXktd29yayAuY2FyZHtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxuICBcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi53b3JrLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwO1xyXG4gIGNvbG9yOiByZ2JhKDY0LCAyMjQsIDIwOCwgMC40NjYpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAud29yay1pY29ue1xyXG4gIGNvbG9yOiB0dXJxdW9pc2U7XHJcbn1cclxuXHJcbi5mYS1sZWFme1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG4uc2Nyb2xsLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcclxuICAgIFxyXG59XHJcbi5zY3JvbGwtYnV0dG9uLWNvbnRhaW5lcntcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3Njcm9sbC1idXR0b257XHJcbiAgICBhbmltYXRpb246IG1vdmUtdXAtZG93biAwLjhzIGFsdGVybmF0ZS1yZXZlcnNlIGVhc2UtaW4tb3V0IGluZmluaXRlOyAgICBcclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUtdXAtZG93biB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjdyZW0pO1xyXG4gICAgfVxyXG4gICAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuN3JlbSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ud29yay1kZXRhaWx7d2lkdGg6NzUlfVxyXG4uY29udGFjdExpbmtze1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJwdCBzYW5zXCIsIFwiR2lsbCBTYW5zXCI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmNDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcbi5jb250YWN0TGlua3M6aG92ZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMCA4cHggZ3JleTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMWRiNWE2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFjdExpbmtzIC5mYS1zb2xpZCwgXHJcbi5jb250YWN0TGlua3MgLmZhLWJyYW5kc3tcclxuICAgIGNvbG9yOiAjMWRiNWE2O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG4uY29udGFjdExpbmtzOmhvdmVyIC5mYS1zb2xpZCwgXHJcbi5jb250YWN0TGlua3M6aG92ZXIgLmZhLWJyYW5kc3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG59XHJcbi5yZXN1bWVCdXR0b257XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJHaWxsIFNhbnNcIjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhvbWUtZWxlbWVudC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1pY29uLXNlY3Rpb24gaSB7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAubXktc2VydmljZXMgLmNhcmQsIC5teS13b3JrIC5jYXJkIHtcclxuICAgIC8qIGJvcmRlciA6IDJweCBzb2xpZCByZWQ7ICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLndvcmstaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgLmZhLWxlYWZ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgLndvcmstZGV0YWlse3dpZHRoOjEwMCV9XHJcbiAgLnJlc3VtZUJ1dHRvbntcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'index';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map