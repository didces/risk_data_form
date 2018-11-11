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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-risk-data-form></app-risk-data-form>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'risk-data';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _risk_data_risk_data_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./risk-data/risk-data.module */ "./src/app/risk-data/risk-data.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _risk_data_risk_data_module__WEBPACK_IMPORTED_MODULE_5__["RiskDataModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/risk-data/counterparties-form/counterparties-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/risk-data/counterparties-form/counterparties-form.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/risk-data/counterparties-form/counterparties-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/risk-data/counterparties-form/counterparties-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"66\" fxFlexOffset=\"15\">\n  <form class=\"\" [formGroup]=\"counterpartiesForm\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <h1 class=\"mat-h1\" fxLayoutAlign=\"center\">\n      COUNTERPARTIES FORM\n    </h1>\n\n    <mat-form-field class=\"\">\n      <input required type=\"text\" maxlength=\"10\" #counterpartyIdRicos formControlName=\"counterpartyIdRicos\" matInput\n        placeholder=\"Counterparty Id RICOS\">\n      <mat-hint align=\"end\">{{counterpartyIdRicos.value.length}} / 10</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"text\" maxlength=\"10\" #counterpartyName formControlName=\"counterpartyName\" matInput\n        placeholder=\"Counterparty name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input type=\"text\" maxlength=\"10\" #ratingMethodology formControlName=\"ratingMethodology\" matInput placeholder=\"Rating methodology\">\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input type=\"text\" maxlength=\"10\" #groupIdRicos formControlName=\"groupIdRicos\" matInput placeholder=\"Group Id RICOS\">\n      <mat-hint align=\"end\">{{groupIdRicos.value.length}} / 10</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"rating\" placeholder=\"Rating\">\n        <mat-option *ngFor=\"let rating of ratings\" [value]=\"rating.value\"> {{rating.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"sector\" placeholder=\"Sector\">\n        <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.value\"> {{sector.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"category\" placeholder=\"Category\">\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\"> {{category.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"baselPortofolio\" placeholder=\"Basel portofolio\">\n        <mat-option *ngFor=\"let baselPortofolio of baselPortofolios\" [value]=\"baselPortofolio.value\">\n          {{baselPortofolio.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"countryOfResidence\" placeholder=\"Country of residence\">\n        <mat-option *ngFor=\"let countryOfResidence of countryOfResidences\" [value]=\"countryOfResidence.value\">\n          {{countryOfResidence.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"countryOfRisk\" placeholder=\"Country of risk\">\n        <mat-option *ngFor=\"let countryOfRisk of countryOfRisks\" [value]=\"countryOfRisk.value\">\n          {{countryOfRisk.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"role\" placeholder=\"Role\">\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\"> {{role.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" min=\"0\" #revenuesAmountEur formControlName=\"revenuesAmountEur\" matInput placeholder=\"Revenues amount (EUR)\">\n      <mat-error *ngIf=\"counterpartiesForm.get('revenuesAmountEur').hasError('negativeValueError')\">\n        Please enter a value superior to 0\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker\" formControlName=\"unpaidDebtsStartDate\" placeholder=\"Unpaid debts Start\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </form>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n    <button [disabled]=\"!counterpartiesForm.valid\" (click)=\"validate()\" class=\"\" mat-stroked-button color=\"primary\">Validate</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/risk-data/counterparties-form/counterparties-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/risk-data/counterparties-form/counterparties-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: CounterpartiesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterpartiesFormComponent", function() { return CounterpartiesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_validators_counterparty_id_ricos_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators/counterparty-id-ricos.validator */ "./src/app/shared/validators/counterparty-id-ricos.validator.ts");
/* harmony import */ var src_app_shared_validators_counterparty_name_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/validators/counterparty-name.validator */ "./src/app/shared/validators/counterparty-name.validator.ts");
/* harmony import */ var src_app_shared_validators_rating_methodology_valdiator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/validators/rating-methodology.valdiator */ "./src/app/shared/validators/rating-methodology.valdiator.ts");
/* harmony import */ var src_app_shared_validators_group_id_ricos_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/validators/group-id-ricos.validator */ "./src/app/shared/validators/group-id-ricos.validator.ts");
/* harmony import */ var src_app_shared_validators_rating_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/validators/rating.validator */ "./src/app/shared/validators/rating.validator.ts");
/* harmony import */ var src_app_shared_validators_sector_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/validators/sector.validator */ "./src/app/shared/validators/sector.validator.ts");
/* harmony import */ var src_app_shared_validators_category_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/validators/category.validator */ "./src/app/shared/validators/category.validator.ts");
/* harmony import */ var src_app_shared_validators_basel_portofolio_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/validators/basel-portofolio.validator */ "./src/app/shared/validators/basel-portofolio.validator.ts");
/* harmony import */ var src_app_shared_validators_country_of_risk_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/validators/country-of-risk.validator */ "./src/app/shared/validators/country-of-risk.validator.ts");
/* harmony import */ var src_app_shared_validators_revenues_amount_eur_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/validators/revenues-amount-eur.validator */ "./src/app/shared/validators/revenues-amount-eur.validator.ts");
/* harmony import */ var src_app_shared_validators_unpaid_debts_startDate_Validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/validators/unpaid-debts-startDate.Validator */ "./src/app/shared/validators/unpaid-debts-startDate.Validator.ts");
/* harmony import */ var src_app_shared_validators_country_of_residence_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/validators/country-of-residence.validator */ "./src/app/shared/validators/country-of-residence.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CounterpartiesFormComponent = /** @class */ (function () {
    function CounterpartiesFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.ratings = [
            { value: 'A++', viewValue: 'A++' },
            { value: 'A++', viewValue: 'A++' },
            { value: 'A+', viewValue: 'A+' },
            { value: 'B+', viewValue: 'B+' },
            { value: 'B', viewValue: 'B' },
            { value: 'C+', viewValue: 'C+' },
            { value: 'C-', viewValue: 'C-' }
        ];
        this.sectors = [
            { value: 'sectors-0', viewValue: 'Sectors-0' },
            { value: 'sectors-1', viewValue: 'Sectors-1' },
            { value: 'sectors-2', viewValue: 'Sectors-2' }
        ];
        this.categories = [
            { value: 'category-0', viewValue: 'Category-0' },
            { value: 'category-1', viewValue: 'Category-1' },
            { value: 'category-2', viewValue: 'Category-2' }
        ];
        this.baselPortofolios = [
            { value: 'baselPortofolio-0', viewValue: 'baselPortofolio-0' },
            { value: 'baselPortofolio-1', viewValue: 'baselPortofolio-1' },
            { value: 'baselPortofolio-2', viewValue: 'baselPortofolio-2' }
        ];
        this.countryOfResidences = [
            { value: 'countryOfResidence-0', viewValue: 'countryOfResidence-0' },
            { value: 'countryOfResidence-1', viewValue: 'countryOfResidence-1' },
            { value: 'countryOfResidence-2', viewValue: 'countryOfResidence-2' }
        ];
        this.countryOfRisks = [
            { value: 'countryOfRisk-0', viewValue: 'countryOfRisk-0' },
            { value: 'countryOfRisk-1', viewValue: 'countryOfRisk-1' },
            { value: 'countryOfRisk-2', viewValue: 'countryOfRisk-2' }
        ];
        this.roles = [
            { value: 'role-0', viewValue: 'role-0' },
            { value: 'role-1', viewValue: 'role-1' },
            { value: 'role-2', viewValue: 'role-2' }
        ];
    }
    CounterpartiesFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CounterpartiesFormComponent.prototype.initForm = function () {
        this.counterpartiesForm = this._formBuilder.group({
            counterpartyIdRicos: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_counterparty_id_ricos_validator__WEBPACK_IMPORTED_MODULE_2__["CounterpartyIdRicosValidator"].counterpartyIdRicos
                ])
            ],
            counterpartyName: ['', src_app_shared_validators_counterparty_name_validator__WEBPACK_IMPORTED_MODULE_3__["CounterpartyNameValidator"].counterpartyName],
            ratingMethodology: ['', src_app_shared_validators_rating_methodology_valdiator__WEBPACK_IMPORTED_MODULE_4__["RatingMethodologyValidator"].ratingMethodology],
            groupIdRicos: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_group_id_ricos_validator__WEBPACK_IMPORTED_MODULE_5__["GroupIdRicosValidator"].groupIdRicos
                ])
            ],
            rating: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_rating_validator__WEBPACK_IMPORTED_MODULE_6__["RatingValidator"].rating])
            ],
            sector: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_sector_validator__WEBPACK_IMPORTED_MODULE_7__["SectorValidator"].sector])
            ],
            category: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_category_validator__WEBPACK_IMPORTED_MODULE_8__["CategoryValidator"].category])
            ],
            baselPortofolio: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_basel_portofolio_validator__WEBPACK_IMPORTED_MODULE_9__["BaselPortoFolioValidator"].baselPortofolio
                ])
            ],
            countryOfResidence: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_country_of_residence_validator__WEBPACK_IMPORTED_MODULE_13__["CountryOfResidenceValidator"].countryOfResidence
                ])
            ],
            countryOfRisk: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_country_of_risk_validator__WEBPACK_IMPORTED_MODULE_10__["CountryOfRiskValidator"].countryOfRisk
                ])
            ],
            role: [],
            revenuesAmountEur: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_revenues_amount_eur_validator__WEBPACK_IMPORTED_MODULE_11__["RevenuesAmountEurValidator"].revenuesAmountEur
                ])
            ],
            unpaidDebtsStartDate: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_shared_validators_unpaid_debts_startDate_Validator__WEBPACK_IMPORTED_MODULE_12__["UnpaidDebtsStartDateValidator"].unpaidDebtsStartDate
                ])
            ]
        });
    };
    CounterpartiesFormComponent.prototype.validate = function () {
        console.log(this.counterpartiesForm.value);
    };
    CounterpartiesFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counterparties-form',
            template: __webpack_require__(/*! ./counterparties-form.component.html */ "./src/app/risk-data/counterparties-form/counterparties-form.component.html"),
            styles: [__webpack_require__(/*! ./counterparties-form.component.css */ "./src/app/risk-data/counterparties-form/counterparties-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CounterpartiesFormComponent);
    return CounterpartiesFormComponent;
}());



/***/ }),

/***/ "./src/app/risk-data/risk-data-form/risk-data-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/risk-data/risk-data-form/risk-data-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button~.mat-radio-button {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n"

/***/ }),

/***/ "./src/app/risk-data/risk-data-form/risk-data-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/risk-data/risk-data-form/risk-data-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n\n</div>\n<mat-tab-group>\n  <mat-tab label=\"Transactions\">\n    <app-transactions-form></app-transactions-form>\n  </mat-tab>\n  <mat-tab label=\"Counterparties\">\n    <app-counterparties-form></app-counterparties-form>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/risk-data/risk-data-form/risk-data-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/risk-data/risk-data-form/risk-data-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: RiskDataFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskDataFormComponent", function() { return RiskDataFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RiskDataFormComponent = /** @class */ (function () {
    function RiskDataFormComponent() {
    }
    RiskDataFormComponent.prototype.ngOnInit = function () { };
    RiskDataFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-data-form',
            template: __webpack_require__(/*! ./risk-data-form.component.html */ "./src/app/risk-data/risk-data-form/risk-data-form.component.html"),
            styles: [__webpack_require__(/*! ./risk-data-form.component.css */ "./src/app/risk-data/risk-data-form/risk-data-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RiskDataFormComponent);
    return RiskDataFormComponent;
}());



/***/ }),

/***/ "./src/app/risk-data/risk-data.module.ts":
/*!***********************************************!*\
  !*** ./src/app/risk-data/risk-data.module.ts ***!
  \***********************************************/
/*! exports provided: RiskDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskDataModule", function() { return RiskDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _risk_data_form_risk_data_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./risk-data-form/risk-data-form.component */ "./src/app/risk-data/risk-data-form/risk-data-form.component.ts");
/* harmony import */ var _transactions_form_transactions_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions-form/transactions-form.component */ "./src/app/risk-data/transactions-form/transactions-form.component.ts");
/* harmony import */ var _counterparties_form_counterparties_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counterparties-form/counterparties-form.component */ "./src/app/risk-data/counterparties-form/counterparties-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RiskDataModule = /** @class */ (function () {
    function RiskDataModule() {
    }
    RiskDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ],
            declarations: [_risk_data_form_risk_data_form_component__WEBPACK_IMPORTED_MODULE_5__["RiskDataFormComponent"], _transactions_form_transactions_form_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsFormComponent"], _counterparties_form_counterparties_form_component__WEBPACK_IMPORTED_MODULE_7__["CounterpartiesFormComponent"]],
            exports: [_risk_data_form_risk_data_form_component__WEBPACK_IMPORTED_MODULE_5__["RiskDataFormComponent"]]
        })
    ], RiskDataModule);
    return RiskDataModule;
}());



/***/ }),

/***/ "./src/app/risk-data/transactions-form/transactions-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/risk-data/transactions-form/transactions-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button~.mat-radio-button {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n"

/***/ }),

/***/ "./src/app/risk-data/transactions-form/transactions-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/risk-data/transactions-form/transactions-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"66\" fxFlexOffset=\"15\">\n  <form class=\"\" [formGroup]=\"riskDataForm\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <h1 class=\"mat-h1\" fxLayoutAlign=\"center\">\n      TRANSACTIONS FORM\n    </h1>\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker\" formControlName=\"asOfDate\" placeholder=\"As Of Date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" min=\"0\" #transactionReference formControlName=\"transactionReference\" matInput\n        placeholder=\"Transaction reference\">\n      <mat-error *ngIf=\"riskDataForm.get('transactionReference').hasError('negativeValueError')\">\n        Please enter a value superior to 0\n      </mat-error>\n    </mat-form-field>\n\n    <mat-radio-group required formControlName=\"seniority\">\n      <mat-radio-button value=\"SEN\">SEN</mat-radio-button>\n      <mat-radio-button value=\"JUN\">JUN</mat-radio-button>\n    </mat-radio-group>\n\n\n    <mat-form-field class=\"\">\n      <input required type=\"text\" maxlength=\"10\" #counterpartyIdRicos formControlName=\"counterpartyIdRicos\" matInput\n        placeholder=\"Counterparty Id RICOS\">\n      <mat-hint align=\"end\">{{counterpartyIdRicos.value.length}} / 10</mat-hint>\n    </mat-form-field>\n\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" min=\"0\" formControlName=\"capitalReimbursementAmount\" matInput placeholder=\"Capital reimboursement Amount\">\n      <mat-error *ngIf=\"riskDataForm.get('capitalReimbursementAmount').hasError('negativeValueError')\">\n        Please enter a value superior to 0\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker1\" formControlName=\"capitalReimbursementDate\" placeholder=\"capital Reimbursement Date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n\n\n    <mat-radio-group required formControlName=\"onBalanceFlag\">\n      <mat-radio-button value=\"B\">B</mat-radio-button>\n      <mat-radio-button value=\"C\">C</mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field class=\"\">\n      <input required type=\"text\" maxlength=\"10\" #guarantorIdRicos formControlName=\"guarantorIdRicos\" matInput\n        placeholder=\"Guarantor Id RICOS\">\n      <mat-hint align=\"end\">{{guarantorIdRicos.value.length}} / 10</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" min=\"0\" formControlName=\"interestRatePaymentFrequency\" matInput placeholder=\"Interest Rate Payment Frequency\">\n      <mat-error *ngIf=\"riskDataForm.get('interestRatePaymentFrequency').hasError('negativeValueError')\">\n        Please enter a value superior to 0\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"interestRatePeriodicity\" placeholder=\"Interest rate periodicity\">\n        <mat-option *ngFor=\"let interestRatePeriodicity of interestRatePeriodicities\" [value]=\"interestRatePeriodicity.value\">\n          {{interestRatePeriodicity.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" formControlName=\"interestRateValue\" matInput placeholder=\"Interest Rate Value\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input required matInput [matDatepicker]=\"picker2\" formControlName=\"transactionMaturityDate\" placeholder=\"transaction maturity Date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" formControlName=\"ccf\" matInput placeholder=\"Ccf\">\n    </mat-form-field>\n\n    <mat-form-field class=\"\">\n      <input required type=\"number\" formControlName=\"lgd\" matInput placeholder=\"Lgd\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"productLine\" placeholder=\"Product line\">\n        <mat-option *ngFor=\"let productLine of productLines\" [value]=\"productLine.value\"> {{productLine.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"riskType\" placeholder=\"Risk type\">\n        <mat-option *ngFor=\"let riskType of riskTypes\" [value]=\"riskType.value\"> {{riskType.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select required formControlName=\"transactionProductType\" placeholder=\"Transaction product type\">\n        <mat-option *ngFor=\"let transactionProductType of transactionProductTypes\" [value]=\"transactionProductType.value\">\n          {{transactionProductType.viewValue}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </form>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n    <button [disabled]=\"!riskDataForm.valid\" (click)=\"validate()\" class=\"\" mat-stroked-button color=\"primary\">Validate</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/risk-data/transactions-form/transactions-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/risk-data/transactions-form/transactions-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: TransactionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsFormComponent", function() { return TransactionsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_validators_as_of_date_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/validators/as-of-date.validator */ "./src/app/shared/validators/as-of-date.validator.ts");
/* harmony import */ var _shared_validators_capital_reimbursement_amount_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/validators/capital-reimbursement-amount.validator */ "./src/app/shared/validators/capital-reimbursement-amount.validator.ts");
/* harmony import */ var _shared_validators_capital_reimbursement_date_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/validators/capital-reimbursement-date.validator */ "./src/app/shared/validators/capital-reimbursement-date.validator.ts");
/* harmony import */ var _shared_validators_ccf_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/validators/ccf.validator */ "./src/app/shared/validators/ccf.validator.ts");
/* harmony import */ var _shared_validators_counterparty_id_ricos_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/validators/counterparty-id-ricos.validator */ "./src/app/shared/validators/counterparty-id-ricos.validator.ts");
/* harmony import */ var _shared_validators_guarantor_id_ricos_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/validators/guarantor-id-ricos.validator */ "./src/app/shared/validators/guarantor-id-ricos.validator.ts");
/* harmony import */ var _shared_validators_interest_rate_payment_frequency_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/validators/interest-rate-payment-frequency.validator */ "./src/app/shared/validators/interest-rate-payment-frequency.validator.ts");
/* harmony import */ var _shared_validators_interest_rate_periodicity_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/validators/interest-rate-periodicity.validator */ "./src/app/shared/validators/interest-rate-periodicity.validator.ts");
/* harmony import */ var _shared_validators_interest_rate_value_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/validators/interest-rate-value.validator */ "./src/app/shared/validators/interest-rate-value.validator.ts");
/* harmony import */ var _shared_validators_lgd_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/validators/lgd.validator */ "./src/app/shared/validators/lgd.validator.ts");
/* harmony import */ var _shared_validators_on_balance_flag_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/validators/on-balance-flag.validator */ "./src/app/shared/validators/on-balance-flag.validator.ts");
/* harmony import */ var _shared_validators_product_line_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/validators/product-line.validator */ "./src/app/shared/validators/product-line.validator.ts");
/* harmony import */ var _shared_validators_risk_type_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/validators/risk-type.validator */ "./src/app/shared/validators/risk-type.validator.ts");
/* harmony import */ var _shared_validators_seniority_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/validators/seniority.validator */ "./src/app/shared/validators/seniority.validator.ts");
/* harmony import */ var _shared_validators_transaction_maturity_date_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/validators/transaction-maturity-date.validator */ "./src/app/shared/validators/transaction-maturity-date.validator.ts");
/* harmony import */ var _shared_validators_transaction_product_type_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/validators/transaction-product-type.validator */ "./src/app/shared/validators/transaction-product-type.validator.ts");
/* harmony import */ var _shared_validators_transaction_reference_validator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/validators/transaction-reference.validator */ "./src/app/shared/validators/transaction-reference.validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var TransactionsFormComponent = /** @class */ (function () {
    function TransactionsFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.riskTypes = [
            { value: 'risk-0', viewValue: 'Risk-0' },
            { value: 'risk-1', viewValue: 'Risk-1' },
            { value: 'risk-2', viewValue: 'Risk-2' }
        ];
        this.productLines = [
            { value: 'productLine-0', viewValue: 'ProductLine-0' },
            { value: 'productLine-1', viewValue: 'ProductLine-1' },
            { value: 'productLine-2', viewValue: 'ProductLine-2' }
        ];
        this.interestRatePeriodicities = [
            {
                value: 'interestRatePeriodicity-0',
                viewValue: 'InterestRatePeriodicity-0'
            },
            {
                value: 'interestRatePeriodicity-1',
                viewValue: 'InterestRatePeriodicity-1'
            },
            {
                value: 'interestRatePeriodicity-2',
                viewValue: 'InterestRatePeriodicity-2'
            }
        ];
        this.transactionProductTypes = [
            {
                value: 'transactionProductType-0',
                viewValue: 'transactionProductType-0'
            },
            {
                value: 'transactionProductType-1',
                viewValue: 'transactionProductType-1'
            },
            {
                value: 'transactionProductType-2',
                viewValue: 'transactionProductType-2'
            }
        ];
    }
    TransactionsFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    TransactionsFormComponent.prototype.initForm = function () {
        this.riskDataForm = this._formBuilder.group({
            asOfDate: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required, _shared_validators_as_of_date_validator__WEBPACK_IMPORTED_MODULE_1__["AsOfDateValidator"].AsOfDate])
            ],
            transactionReference: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_transaction_reference_validator__WEBPACK_IMPORTED_MODULE_17__["TransactionReferenceValidator"].transactionReference
                ])
            ],
            counterpartyIdRicos: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_counterparty_id_ricos_validator__WEBPACK_IMPORTED_MODULE_5__["CounterpartyIdRicosValidator"].counterpartyIdRicos
                ])
            ],
            seniority: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required, _shared_validators_seniority_validator__WEBPACK_IMPORTED_MODULE_14__["SeniorityValidator"].seniority])
            ],
            capitalReimbursementAmount: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_capital_reimbursement_amount_validator__WEBPACK_IMPORTED_MODULE_2__["CapitalReimbursementAmountValidator"].capitalReimbursementAmount
                ])
            ],
            capitalReimbursementDate: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_capital_reimbursement_date_validator__WEBPACK_IMPORTED_MODULE_3__["CapitalReimbursementDateValidator"].capitalReimbursementDate
                ])
            ],
            onBalanceFlag: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_on_balance_flag_validator__WEBPACK_IMPORTED_MODULE_11__["OnBalanceFlagValidator"].onBalanceFlag
                ])
            ],
            guarantorIdRicos: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_guarantor_id_ricos_validator__WEBPACK_IMPORTED_MODULE_6__["GuarantorIdRicosValidator"].guarantorIdRicos
                ])
            ],
            interestRatePaymentFrequency: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_interest_rate_payment_frequency_validator__WEBPACK_IMPORTED_MODULE_7__["InterestRatePaymentFrequencyValidator"].interestRatePaymentFrequency
                ])
            ],
            interestRatePeriodicity: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_interest_rate_periodicity_validator__WEBPACK_IMPORTED_MODULE_8__["InterestRatePeriodicityValidator"].interestRatePeriodicity
                ])
            ],
            interestRateValue: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_interest_rate_value_validator__WEBPACK_IMPORTED_MODULE_9__["InterestRateValueValidator"].interestRateValue
                ])
            ],
            transactionMaturityDate: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_transaction_maturity_date_validator__WEBPACK_IMPORTED_MODULE_15__["TransactionMaturityDateValidator"].transactionMaturityDate
                ])
            ],
            ccf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required, _shared_validators_ccf_validator__WEBPACK_IMPORTED_MODULE_4__["CcfValidator"].ccf])],
            lgd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required, _shared_validators_lgd_validator__WEBPACK_IMPORTED_MODULE_10__["LgdValidator"].lgd])],
            productLine: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_product_line_validator__WEBPACK_IMPORTED_MODULE_12__["ProductLineValidator"].productLine
                ])
            ],
            riskType: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required, _shared_validators_risk_type_validator__WEBPACK_IMPORTED_MODULE_13__["RiskTypeValidator"].riskType])
            ],
            transactionProductType: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["Validators"].required,
                    _shared_validators_transaction_product_type_validator__WEBPACK_IMPORTED_MODULE_16__["TransactionProductTypeValidator"].transactionProductType
                ])
            ]
        });
    };
    TransactionsFormComponent.prototype.validate = function () {
        console.log(this.riskDataForm.value);
    };
    TransactionsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions-form',
            template: __webpack_require__(/*! ./transactions-form.component.html */ "./src/app/risk-data/transactions-form/transactions-form.component.html"),
            styles: [__webpack_require__(/*! ./transactions-form.component.css */ "./src/app/risk-data/transactions-form/transactions-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"]])
    ], TransactionsFormComponent);
    return TransactionsFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/validators/as-of-date.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/as-of-date.validator.ts ***!
  \***********************************************************/
/*! exports provided: AsOfDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsOfDateValidator", function() { return AsOfDateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsOfDateValidator = /** @class */ (function () {
    function AsOfDateValidator() {
    }
    AsOfDateValidator.AsOfDate = function (group) {
        return null;
    };
    AsOfDateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AsOfDateValidator);
    return AsOfDateValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/basel-portofolio.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validators/basel-portofolio.validator.ts ***!
  \*****************************************************************/
/*! exports provided: BaselPortoFolioValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselPortoFolioValidator", function() { return BaselPortoFolioValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaselPortoFolioValidator = /** @class */ (function () {
    function BaselPortoFolioValidator() {
    }
    BaselPortoFolioValidator.baselPortofolio = function (group) {
        return null;
    };
    BaselPortoFolioValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaselPortoFolioValidator);
    return BaselPortoFolioValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/capital-reimbursement-amount.validator.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/validators/capital-reimbursement-amount.validator.ts ***!
  \*****************************************************************************/
/*! exports provided: CapitalReimbursementAmountValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalReimbursementAmountValidator", function() { return CapitalReimbursementAmountValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapitalReimbursementAmountValidator = /** @class */ (function () {
    function CapitalReimbursementAmountValidator() {
    }
    CapitalReimbursementAmountValidator.capitalReimbursementAmount = function (input) {
        if (input === undefined) {
            return null;
        }
        if (input.value < 0) {
            return { negativeValueError: true };
        }
        return null;
    };
    CapitalReimbursementAmountValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CapitalReimbursementAmountValidator);
    return CapitalReimbursementAmountValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/capital-reimbursement-date.validator.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/validators/capital-reimbursement-date.validator.ts ***!
  \***************************************************************************/
/*! exports provided: CapitalReimbursementDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalReimbursementDateValidator", function() { return CapitalReimbursementDateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapitalReimbursementDateValidator = /** @class */ (function () {
    function CapitalReimbursementDateValidator() {
    }
    CapitalReimbursementDateValidator.capitalReimbursementDate = function (group) {
        return null;
    };
    CapitalReimbursementDateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CapitalReimbursementDateValidator);
    return CapitalReimbursementDateValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/category.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/category.validator.ts ***!
  \*********************************************************/
/*! exports provided: CategoryValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryValidator", function() { return CategoryValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryValidator = /** @class */ (function () {
    function CategoryValidator() {
    }
    CategoryValidator.category = function (group) {
        return null;
    };
    CategoryValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoryValidator);
    return CategoryValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/ccf.validator.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/validators/ccf.validator.ts ***!
  \****************************************************/
/*! exports provided: CcfValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcfValidator", function() { return CcfValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcfValidator = /** @class */ (function () {
    function CcfValidator() {
    }
    CcfValidator.ccf = function (group) {
        return null;
    };
    CcfValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CcfValidator);
    return CcfValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/counterparty-id-ricos.validator.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/validators/counterparty-id-ricos.validator.ts ***!
  \**********************************************************************/
/*! exports provided: CounterpartyIdRicosValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterpartyIdRicosValidator", function() { return CounterpartyIdRicosValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterpartyIdRicosValidator = /** @class */ (function () {
    function CounterpartyIdRicosValidator() {
    }
    CounterpartyIdRicosValidator.counterpartyIdRicos = function (group) {
        return null;
    };
    CounterpartyIdRicosValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CounterpartyIdRicosValidator);
    return CounterpartyIdRicosValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/counterparty-name.validator.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/validators/counterparty-name.validator.ts ***!
  \******************************************************************/
/*! exports provided: CounterpartyNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterpartyNameValidator", function() { return CounterpartyNameValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterpartyNameValidator = /** @class */ (function () {
    function CounterpartyNameValidator() {
    }
    CounterpartyNameValidator.counterpartyName = function (group) {
        return null;
    };
    CounterpartyNameValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CounterpartyNameValidator);
    return CounterpartyNameValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/country-of-residence.validator.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/validators/country-of-residence.validator.ts ***!
  \*********************************************************************/
/*! exports provided: CountryOfResidenceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOfResidenceValidator", function() { return CountryOfResidenceValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryOfResidenceValidator = /** @class */ (function () {
    function CountryOfResidenceValidator() {
    }
    CountryOfResidenceValidator.countryOfResidence = function (group) {
        return null;
    };
    CountryOfResidenceValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CountryOfResidenceValidator);
    return CountryOfResidenceValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/country-of-risk.validator.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/validators/country-of-risk.validator.ts ***!
  \****************************************************************/
/*! exports provided: CountryOfRiskValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOfRiskValidator", function() { return CountryOfRiskValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryOfRiskValidator = /** @class */ (function () {
    function CountryOfRiskValidator() {
    }
    CountryOfRiskValidator.countryOfRisk = function (group) {
        return null;
    };
    CountryOfRiskValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CountryOfRiskValidator);
    return CountryOfRiskValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/group-id-ricos.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/group-id-ricos.validator.ts ***!
  \***************************************************************/
/*! exports provided: GroupIdRicosValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupIdRicosValidator", function() { return GroupIdRicosValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupIdRicosValidator = /** @class */ (function () {
    function GroupIdRicosValidator() {
    }
    GroupIdRicosValidator.groupIdRicos = function (group) {
        return null;
    };
    GroupIdRicosValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GroupIdRicosValidator);
    return GroupIdRicosValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/guarantor-id-ricos.validator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/validators/guarantor-id-ricos.validator.ts ***!
  \*******************************************************************/
/*! exports provided: GuarantorIdRicosValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuarantorIdRicosValidator", function() { return GuarantorIdRicosValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuarantorIdRicosValidator = /** @class */ (function () {
    function GuarantorIdRicosValidator() {
    }
    GuarantorIdRicosValidator.guarantorIdRicos = function (group) {
        return null;
    };
    GuarantorIdRicosValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GuarantorIdRicosValidator);
    return GuarantorIdRicosValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/interest-rate-payment-frequency.validator.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/validators/interest-rate-payment-frequency.validator.ts ***!
  \********************************************************************************/
/*! exports provided: InterestRatePaymentFrequencyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestRatePaymentFrequencyValidator", function() { return InterestRatePaymentFrequencyValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterestRatePaymentFrequencyValidator = /** @class */ (function () {
    function InterestRatePaymentFrequencyValidator() {
    }
    InterestRatePaymentFrequencyValidator.interestRatePaymentFrequency = function (input) {
        if (input === undefined) {
            return null;
        }
        if (input.value < 0) {
            return { negativeValueError: true };
        }
        return null;
    };
    InterestRatePaymentFrequencyValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InterestRatePaymentFrequencyValidator);
    return InterestRatePaymentFrequencyValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/interest-rate-periodicity.validator.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/validators/interest-rate-periodicity.validator.ts ***!
  \**************************************************************************/
/*! exports provided: InterestRatePeriodicityValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestRatePeriodicityValidator", function() { return InterestRatePeriodicityValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterestRatePeriodicityValidator = /** @class */ (function () {
    function InterestRatePeriodicityValidator() {
    }
    InterestRatePeriodicityValidator.interestRatePeriodicity = function (group) {
        return null;
    };
    InterestRatePeriodicityValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InterestRatePeriodicityValidator);
    return InterestRatePeriodicityValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/interest-rate-value.validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/validators/interest-rate-value.validator.ts ***!
  \********************************************************************/
/*! exports provided: InterestRateValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestRateValueValidator", function() { return InterestRateValueValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterestRateValueValidator = /** @class */ (function () {
    function InterestRateValueValidator() {
    }
    InterestRateValueValidator.interestRateValue = function (group) {
        return null;
    };
    InterestRateValueValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InterestRateValueValidator);
    return InterestRateValueValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/lgd.validator.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/validators/lgd.validator.ts ***!
  \****************************************************/
/*! exports provided: LgdValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgdValidator", function() { return LgdValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LgdValidator = /** @class */ (function () {
    function LgdValidator() {
    }
    LgdValidator.lgd = function (group) {
        return null;
    };
    LgdValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LgdValidator);
    return LgdValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/on-balance-flag.validator.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/validators/on-balance-flag.validator.ts ***!
  \****************************************************************/
/*! exports provided: OnBalanceFlagValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBalanceFlagValidator", function() { return OnBalanceFlagValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnBalanceFlagValidator = /** @class */ (function () {
    function OnBalanceFlagValidator() {
    }
    OnBalanceFlagValidator.onBalanceFlag = function (group) {
        return null;
    };
    OnBalanceFlagValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OnBalanceFlagValidator);
    return OnBalanceFlagValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/product-line.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/validators/product-line.validator.ts ***!
  \*************************************************************/
/*! exports provided: ProductLineValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLineValidator", function() { return ProductLineValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductLineValidator = /** @class */ (function () {
    function ProductLineValidator() {
    }
    ProductLineValidator.productLine = function (group) {
        return null;
    };
    ProductLineValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProductLineValidator);
    return ProductLineValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/rating-methodology.valdiator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/validators/rating-methodology.valdiator.ts ***!
  \*******************************************************************/
/*! exports provided: RatingMethodologyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingMethodologyValidator", function() { return RatingMethodologyValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingMethodologyValidator = /** @class */ (function () {
    function RatingMethodologyValidator() {
    }
    RatingMethodologyValidator.ratingMethodology = function (group) {
        return null;
    };
    RatingMethodologyValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RatingMethodologyValidator);
    return RatingMethodologyValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/rating.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/validators/rating.validator.ts ***!
  \*******************************************************/
/*! exports provided: RatingValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingValidator", function() { return RatingValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingValidator = /** @class */ (function () {
    function RatingValidator() {
    }
    RatingValidator.rating = function (group) {
        return null;
    };
    RatingValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RatingValidator);
    return RatingValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/revenues-amount-eur.validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/validators/revenues-amount-eur.validator.ts ***!
  \********************************************************************/
/*! exports provided: RevenuesAmountEurValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenuesAmountEurValidator", function() { return RevenuesAmountEurValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RevenuesAmountEurValidator = /** @class */ (function () {
    function RevenuesAmountEurValidator() {
    }
    RevenuesAmountEurValidator.revenuesAmountEur = function (input) {
        if (input === undefined) {
            return null;
        }
        if (input.value < 0) {
            return { negativeValueError: true };
        }
        return null;
    };
    RevenuesAmountEurValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RevenuesAmountEurValidator);
    return RevenuesAmountEurValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/risk-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/validators/risk-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: RiskTypeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskTypeValidator", function() { return RiskTypeValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RiskTypeValidator = /** @class */ (function () {
    function RiskTypeValidator() {
    }
    RiskTypeValidator.riskType = function (group) {
        return null;
    };
    RiskTypeValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RiskTypeValidator);
    return RiskTypeValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/sector.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/validators/sector.validator.ts ***!
  \*******************************************************/
/*! exports provided: SectorValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorValidator", function() { return SectorValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectorValidator = /** @class */ (function () {
    function SectorValidator() {
    }
    SectorValidator.sector = function (group) {
        return null;
    };
    SectorValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SectorValidator);
    return SectorValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/seniority.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/validators/seniority.validator.ts ***!
  \**********************************************************/
/*! exports provided: SeniorityValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeniorityValidator", function() { return SeniorityValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeniorityValidator = /** @class */ (function () {
    function SeniorityValidator() {
    }
    SeniorityValidator.seniority = function (group) {
        return null;
    };
    SeniorityValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SeniorityValidator);
    return SeniorityValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/transaction-maturity-date.validator.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/validators/transaction-maturity-date.validator.ts ***!
  \**************************************************************************/
/*! exports provided: TransactionMaturityDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionMaturityDateValidator", function() { return TransactionMaturityDateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionMaturityDateValidator = /** @class */ (function () {
    function TransactionMaturityDateValidator() {
    }
    TransactionMaturityDateValidator.transactionMaturityDate = function (group) {
        return null;
    };
    TransactionMaturityDateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TransactionMaturityDateValidator);
    return TransactionMaturityDateValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/transaction-product-type.validator.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/validators/transaction-product-type.validator.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionProductTypeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionProductTypeValidator", function() { return TransactionProductTypeValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionProductTypeValidator = /** @class */ (function () {
    function TransactionProductTypeValidator() {
    }
    TransactionProductTypeValidator.transactionProductType = function (group) {
        return null;
    };
    TransactionProductTypeValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TransactionProductTypeValidator);
    return TransactionProductTypeValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/transaction-reference.validator.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/validators/transaction-reference.validator.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionReferenceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionReferenceValidator", function() { return TransactionReferenceValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionReferenceValidator = /** @class */ (function () {
    function TransactionReferenceValidator() {
    }
    TransactionReferenceValidator.transactionReference = function (input) {
        if (input === undefined) {
            return null;
        }
        if (input.value < 0) {
            return { negativeValueError: true };
        }
        return null;
    };
    TransactionReferenceValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TransactionReferenceValidator);
    return TransactionReferenceValidator;
}());



/***/ }),

/***/ "./src/app/shared/validators/unpaid-debts-startDate.Validator.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/validators/unpaid-debts-startDate.Validator.ts ***!
  \***********************************************************************/
/*! exports provided: UnpaidDebtsStartDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpaidDebtsStartDateValidator", function() { return UnpaidDebtsStartDateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnpaidDebtsStartDateValidator = /** @class */ (function () {
    function UnpaidDebtsStartDateValidator() {
    }
    UnpaidDebtsStartDateValidator.unpaidDebtsStartDate = function (group) {
        return null;
    };
    UnpaidDebtsStartDateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UnpaidDebtsStartDateValidator);
    return UnpaidDebtsStartDateValidator;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PrismWebApp\V2\risk-data-zip\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map