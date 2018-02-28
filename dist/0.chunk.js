webpackJsonp([0,7],{

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loan_component__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_details_basic_details_component__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__income_debts_container_income_debts_container_component__ = __webpack_require__(1209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__income_details_income_details_component__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loan_option_container_loan_option_container_component__ = __webpack_require__(1210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loan_option_loan_option_component__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__borrower_details_borrower_details_component__ = __webpack_require__(1207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_loan_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__debt_details_debt_details_component__ = __webpack_require__(1208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_bootstrap_switch__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_bootstrap_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_bootstrap_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_currency_mask__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__amortization_schedule_amortization_schedule_component__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__amortization_schedule_container_amortization_schedule_container_component__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__prepaids_settings_prepaids_settings_component__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__closing_costs_settings_closing_costs_settings_component__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__credits_settings_credits_settings_component__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_settings_service__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_currency_mask_src_currency_mask_config__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_currency_mask_src_currency_mask_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_currency_mask_src_currency_mask_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanModule", function() { return LoanModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var CustomCurrencyMaskConfig = {
    align: 'right',
    allowNegative: true,
    allowZero: true,
    decimal: '.',
    precision: 2,
    prefix: '',
    suffix: '',
    thousands: ','
};
var routes = [
    { path: ':loanId', component: __WEBPACK_IMPORTED_MODULE_1__loan_component__["a" /* LoanComponent */] },
    { path: 'customer-view/:loanId', component: __WEBPACK_IMPORTED_MODULE_1__loan_component__["a" /* LoanComponent */] },
];
var LoanModule = (function () {
    function LoanModule() {
    }
    return LoanModule;
}());
LoanModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_17_ng2_currency_mask__["CurrencyMaskModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_16_angular2_bootstrap_switch__["BootstrapSwitchComponent"], __WEBPACK_IMPORTED_MODULE_1__loan_component__["a" /* LoanComponent */], __WEBPACK_IMPORTED_MODULE_5__basic_details_basic_details_component__["a" /* BasicDetailsComponent */], __WEBPACK_IMPORTED_MODULE_10__borrower_details_borrower_details_component__["a" /* BorrowerDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__income_debts_container_income_debts_container_component__["a" /* IncomeDebtsContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__income_details_income_details_component__["a" /* IncomeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_13__debt_details_debt_details_component__["a" /* DebtDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loan_option_container_loan_option_container_component__["a" /* LoanOptionContainerComponent */], __WEBPACK_IMPORTED_MODULE_9__loan_option_loan_option_component__["a" /* LoanOptionComponent */], __WEBPACK_IMPORTED_MODULE_19__amortization_schedule_container_amortization_schedule_container_component__["a" /* AmortizationScheduleContainerComponent */], __WEBPACK_IMPORTED_MODULE_18__amortization_schedule_amortization_schedule_component__["a" /* AmortizationScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__prepaids_settings_prepaids_settings_component__["a" /* PrepaidsSettingsComponent */], __WEBPACK_IMPORTED_MODULE_21__closing_costs_settings_closing_costs_settings_component__["a" /* ClosingCostsSettingsComponent */], __WEBPACK_IMPORTED_MODULE_22__credits_settings_credits_settings_component__["a" /* CreditsSettingsComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_24_ng2_currency_mask_src_currency_mask_config__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig },
            __WEBPACK_IMPORTED_MODULE_12__shared_loan_service__["a" /* LoanService */], __WEBPACK_IMPORTED_MODULE_14_app_routes_loan_shared_borrower_service__["c" /* BorrowerService */], __WEBPACK_IMPORTED_MODULE_15_app_routes_loan_shared_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_14_app_routes_loan_shared_borrower_service__["d" /* IncomeService */], __WEBPACK_IMPORTED_MODULE_14_app_routes_loan_shared_borrower_service__["e" /* DebtService */], __WEBPACK_IMPORTED_MODULE_14_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */], __WEBPACK_IMPORTED_MODULE_23__shared_settings_service__["a" /* SettingsService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__basic_details_basic_details_component__["a" /* BasicDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__borrower_details_borrower_details_component__["a" /* BorrowerDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__income_debts_container_income_debts_container_component__["a" /* IncomeDebtsContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__income_details_income_details_component__["a" /* IncomeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_13__debt_details_debt_details_component__["a" /* DebtDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loan_option_container_loan_option_container_component__["a" /* LoanOptionContainerComponent */], __WEBPACK_IMPORTED_MODULE_9__loan_option_loan_option_component__["a" /* LoanOptionComponent */], __WEBPACK_IMPORTED_MODULE_19__amortization_schedule_container_amortization_schedule_container_component__["a" /* AmortizationScheduleContainerComponent */], __WEBPACK_IMPORTED_MODULE_18__amortization_schedule_amortization_schedule_component__["a" /* AmortizationScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__prepaids_settings_prepaids_settings_component__["a" /* PrepaidsSettingsComponent */], __WEBPACK_IMPORTED_MODULE_22__credits_settings_credits_settings_component__["a" /* CreditsSettingsComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_19__amortization_schedule_container_amortization_schedule_container_component__["a" /* AmortizationScheduleContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__prepaids_settings_prepaids_settings_component__["a" /* PrepaidsSettingsComponent */], __WEBPACK_IMPORTED_MODULE_21__closing_costs_settings_closing_costs_settings_component__["a" /* ClosingCostsSettingsComponent */], __WEBPACK_IMPORTED_MODULE_22__credits_settings_credits_settings_component__["a" /* CreditsSettingsComponent */]]
    })
], LoanModule);

//# sourceMappingURL=loan.module.js.map

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__borrower_model__ = __webpack_require__(1213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__borrower_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__borrower_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__borrower_model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__borrower_model__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__borrower_model__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lookups_model__ = __webpack_require__(1215);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__lookups_model__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_option_model__ = __webpack_require__(1214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__loan_option_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__loan_option_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__loan_option_model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__loan_option_model__["d"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.getMoney = function (value) {
        value = value || 0;
        return (Math.round(parseFloat(value) * 100)) / 100;
    };
    HelperService.prototype.getMoneyRound3 = function (value) {
        value = value || 0;
        return (Math.round(parseFloat(value) * 1000)) / 1000;
    };
    HelperService.prototype.getSum = function (value1, value2) {
        value1 = value1 || '';
        value2 = value2 || '';
        value1 = value1.toString().replace(/,/g, '');
        value2 = value2.toString().replace(/,/g, '');
        return this.getMoney.bind(this)(this.getMoney.bind(this)(value1) + this.getMoney.bind(this)(value2));
    };
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsService = (function () {
    function SettingsService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.request$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SettingsService.prototype.handleError = function (error) {
        this.request$.emit('finished');
        return Promise.reject(error.message || error);
    };
    SettingsService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        // if (this.jwtService.getToken()) {
        //   headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        // }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */](headersConfig);
    };
    SettingsService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
    };
    SettingsService.prototype.getPrepaids = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/settings/prepaid/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data === undefined ? new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* PrePaids */]() : response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.savePrepaids = function (prepaids) {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.post('/settings/prepaid/save', prepaids)
            .map(function (response) {
            _this.request$.emit('finished');
            return response;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.getClosingCosts = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/settings/closing-costs/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data === undefined ? [] : response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.saveClosingCosts = function (closingCosts) {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.post('/settings/closing-costs/save', closingCosts)
            .map(function (response) {
            _this.request$.emit('finished');
            return response;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.getCredits = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/settings/credit/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data === undefined ? new __WEBPACK_IMPORTED_MODULE_2__models_index__["b" /* Credits */]() : response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.saveCredits = function (credits) {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.post('/settings/credit/save', credits)
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data;
        })
            .catch(this.handleError);
    };
    /**lookups */
    SettingsService.prototype.geAllTitleInsurancePremium = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/lookup/title-insurance-premium/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.geAllTitleInsurancePremiumRange = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/lookup/title-insurance-range/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.getBpmi = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/lookup/bpmi/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data;
        })
            .catch(this.handleError);
    };
    SettingsService.prototype.getBpmiAdjustments = function () {
        var _this = this;
        this.request$.emit('starting');
        return this.apiService.get('/lookup/bpmi/get')
            .map(function (response) {
            _this.request$.emit('finished');
            return response.data;
        })
            .catch(this.handleError);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["a" /* ApiService */]) === "function" && _b || Object])
], SettingsService);

var _a, _b;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmortizationScheduleContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmortizationScheduleContainerComponent = (function () {
    function AmortizationScheduleContainerComponent(helperService, bsModalRef) {
        this.helperService = helperService;
        this.bsModalRef = bsModalRef;
        this.borrowerCollapsed = true;
    }
    return AmortizationScheduleContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["d" /* LoanOption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["d" /* LoanOption */]) === "function" && _a || Object)
], AmortizationScheduleContainerComponent.prototype, "loanOptionDetails", void 0);
AmortizationScheduleContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-amortization-schedule-container',
        template: __webpack_require__(1237),
        styles: [__webpack_require__(1218)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalRef */]) === "function" && _c || Object])
], AmortizationScheduleContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=amortization-schedule-container.component.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicDetailsComponent = (function () {
    // loan = new Loan();
    function BasicDetailsComponent(fb, helperService) {
        var _this = this;
        this.fb = fb;
        this.helperService = helperService;
        this.borrowerCollapsed = true;
        // console.log('loan', this.loan, this.basicDetails);
        this.basicDetailForm = this.createGroup();
        this.basicDetailForm.valueChanges.subscribe(function (value) { return _this.updateBasicDetails(value); });
    }
    BasicDetailsComponent.prototype.createGroup = function () {
        // const group = this.fb.group({});
        // group.addControl(this.basicDetails.preApprovalCode, this.fb.control({}));
        // group.addControl(this.basicDetails.qualifyingCreditScore, this.fb.control({}));
        var group = this.fb.group({
            loanId: '',
            qualifyingCreditScore: '',
            preApprovalCode: '',
            stateId: '',
            borrowers: []
        });
        return group;
    };
    BasicDetailsComponent.prototype.updateBasicDetails = function (values) {
        Object.assign(this.basicDetails, values);
    };
    BasicDetailsComponent.prototype.getQualifyingCreditScore = function () {
        var _this = this;
        var activeBorrowers = this.basicDetails.borrowers.filter(function (x) { return x.isActive; });
        var activeAmounts = activeBorrowers.map(function (x) { return x.creditScore; });
        var sum = activeAmounts.reduce(function (a, b) { return _this.helperService.getSum(a, b); }, 0);
        var count = activeBorrowers.length;
        var avg = sum / count;
        this.basicDetails.qualifyingCreditScore = this.helperService.getMoney(avg);
        return this.basicDetails.qualifyingCreditScore;
    };
    BasicDetailsComponent.prototype.basicDetailsChange = function () {
        this.basicDetailForm.patchValue(this.basicDetails);
    };
    BasicDetailsComponent.prototype.ngOnInit = function () {
        // console.log('loan', this.loan, this.basicDetails);
        this.basicDetailForm.patchValue(this.basicDetails);
    };
    BasicDetailsComponent.prototype.ngOnChanges = function (changes) {
        // console.log('loan', this.basicDetails);
        var _a = this.basicDetails, loanId = _a.loanId, qualifyingCreditScore = _a.qualifyingCreditScore, preApprovalCode = _a.preApprovalCode, stateId = _a.stateId, borrowers = _a.borrowers;
        // console.log('details',details);
        this.basicDetailForm.patchValue({ loanId: loanId, qualifyingCreditScore: qualifyingCreditScore, preApprovalCode: preApprovalCode, stateId: stateId, borrowers: borrowers });
    };
    return BasicDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BasicDetailsComponent.prototype, "viewMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_index__["q" /* Loan */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_index__["q" /* Loan */]) === "function" && _a || Object)
], BasicDetailsComponent.prototype, "basicDetails", void 0);
BasicDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-details',
        template: __webpack_require__(1239),
        styles: [__webpack_require__(1220)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */]) === "function" && _c || Object])
], BasicDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=basic-details.component.js.map

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__ = __webpack_require__(1195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosingCostsSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClosingCostsSettingsComponent = (function () {
    function ClosingCostsSettingsComponent(bsModalRef, settingsService) {
        this.bsModalRef = bsModalRef;
        this.settingsService = settingsService;
        // @Input() loanOptionDetails: LoanOption;
        this.closingCosts = [];
        var c1 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
        c1.name = 'Discount Points';
        c1.mode = 1;
        c1.rowNo = 1;
        this.closingCosts.push(c1);
        var c2 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
        c2.name = 'Title Insurance';
        c2.mode = 2;
        c2.rowNo = 2;
        this.closingCosts.push(c2);
        //FOR THE FHA and VA 
        var c3 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
        c3.name = 'UFMIP (FHA)';
        c3.mode = 1;
        c3.rowNo = 3;
        c3.percentage = 1.75;
        this.closingCosts.push(c3);
        var c4 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
        c4.name = 'VA - (Purchase)';
        c4.mode = 1;
        c4.rowNo = 4;
        c4.percentage = 2.15;
        this.closingCosts.push(c4);
        var c5 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
        c5.name = 'VA - (Re-Finance)';
        c5.mode = 1;
        c5.rowNo = 5;
        c5.percentage = 0.500;
        this.closingCosts.push(c5);
        //END FHA and VA 
        for (var index = 6; index <= 15; index++) {
            var c = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
            c.rowNo = index;
            this.closingCosts.push(c);
        }
    }
    ClosingCostsSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getClosingCosts().subscribe(function (closingCosts) {
            _this.closingCosts = Object.assign(_this.closingCosts, closingCosts);
            if (_this.closingCosts.length === 0) {
                var c1 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c1.name = 'Discount Points';
                c1.mode = 1;
                c1.rowNo = 1;
                _this.closingCosts.push(c1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c2.name = 'Title Insurance';
                c2.mode = 2;
                c2.rowNo = 2;
                _this.closingCosts.push(c2);
                //FOR THE FHA and VA 
                var c3 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c3.name = 'UFMIP (FHA)';
                c3.mode = 1;
                c3.rowNo = 3;
                c3.percentage = 1.75;
                _this.closingCosts.push(c3);
                var c4 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c4.name = 'VA - (Purchase)';
                c4.mode = 1;
                c4.rowNo = 4;
                c4.percentage = 2.15;
                _this.closingCosts.push(c4);
                var c5 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c5.name = 'VA - (Re-Finance)';
                c5.mode = 1;
                c5.rowNo = 5;
                c5.percentage = 0.500;
                _this.closingCosts.push(c5);
                //END FHA and VA 
                for (var index = 6; index <= 15; index++) {
                    var c = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                    c.rowNo = index;
                    _this.closingCosts.push(c);
                }
            }
        });
    };
    ClosingCostsSettingsComponent.prototype.saveClosingCosts = function () {
        var _this = this;
        this.settingsService.saveClosingCosts(this.closingCosts).subscribe(function (resp) {
            console.log('saveClosingCosts success', _this.closingCosts, resp);
            _this.bsModalRef.hide();
        });
    };
    return ClosingCostsSettingsComponent;
}());
ClosingCostsSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-closing-costs-settings',
        template: __webpack_require__(1241),
        styles: [__webpack_require__(1222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], ClosingCostsSettingsComponent);

var _a, _b;
//# sourceMappingURL=closing-costs-settings.component.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__ = __webpack_require__(1195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditsSettingsComponent = (function () {
    function CreditsSettingsComponent(bsModalRef, settingsService) {
        this.bsModalRef = bsModalRef;
        this.settingsService = settingsService;
        this.credits = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["b" /* Credits */]();
    }
    CreditsSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getCredits().subscribe(function (credits) {
            _this.credits = Object.assign(_this.credits, credits);
        });
    };
    CreditsSettingsComponent.prototype.saveCredits = function () {
        var _this = this;
        this.settingsService.saveCredits(this.credits).subscribe(function (resp) {
            console.log('saveClosingCosts success', _this.credits, resp);
            _this.bsModalRef.hide();
        });
    };
    return CreditsSettingsComponent;
}());
CreditsSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-credits-settings',
        template: __webpack_require__(1242),
        styles: [__webpack_require__(1223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], CreditsSettingsComponent);

var _a, _b;
//# sourceMappingURL=credits-settings.component.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncomeDetailsComponent = (function () {
    // frequency: string[] = ['Weekly', 'Every 2 Weeks'];
    function IncomeDetailsComponent(incomeService) {
        this.incomeService = incomeService;
        this.incomes = new Array();
    }
    IncomeDetailsComponent.prototype.addIncome = function () {
        var income = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["m" /* Income */]();
        income.isActive = true;
        this.incomes.push(income);
        this.incomeChange(income);
    };
    IncomeDetailsComponent.prototype.incomeChange = function (_income) {
        this.incomeService.incomeChange(_income);
    };
    return IncomeDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], IncomeDetailsComponent.prototype, "incomes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], IncomeDetailsComponent.prototype, "borrowers", void 0);
IncomeDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-income-details',
        template: __webpack_require__(1245),
        styles: [__webpack_require__(1226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["d" /* IncomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["d" /* IncomeService */]) === "function" && _a || Object])
], IncomeDetailsComponent);

var _a;
//# sourceMappingURL=income-details.component.js.map

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__ = __webpack_require__(1195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepaidsSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrepaidsSettingsComponent = (function () {
    function PrepaidsSettingsComponent(bsModalRef, settingsService) {
        this.bsModalRef = bsModalRef;
        this.settingsService = settingsService;
        this.prePaids = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["a" /* PrePaids */]();
    }
    PrepaidsSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getPrepaids().subscribe(function (prePaids) {
            _this.prePaids = Object.assign(_this.prePaids, prePaids);
        });
    };
    PrepaidsSettingsComponent.prototype.savePrepaids = function () {
        var _this = this;
        this.settingsService.savePrepaids(this.prePaids).subscribe(function (resp) {
            console.log('saveClosingCosts success', _this.prePaids, resp);
            _this.bsModalRef.hide();
        });
    };
    return PrepaidsSettingsComponent;
}());
PrepaidsSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prepaids-settings',
        template: __webpack_require__(1249),
        styles: [__webpack_require__(1230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], PrepaidsSettingsComponent);

var _a, _b;
//# sourceMappingURL=prepaids-settings.component.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelFormulas; });
/* Based on
 * - EGM Mathematical Finance class by Enrique Garcia M. <egarcia@egm.co>
 * - A Guide to the PMT, FV, IPMT and PPMT Functions by Kevin (aka MWVisa1)
 */
/* Based on
 * - EGM Mathematical Finance class by Enrique Garcia M. <egarcia@egm.co>
 * - A Guide to the PMT, FV, IPMT and PPMT Functions by Kevin (aka MWVisa1)
 */ var ExcelFormulas = {
    PVIF: function (rate, nper) {
        return Math.pow(1 + rate, nper);
    },
    FVIFA: function (rate, nper) {
        return rate == 0 ? nper : (this.PVIF(rate, nper) - 1) / rate;
    },
    PMT: function (rate, nper, pv, fv, type) {
        // if (!fv) fv = 0;
        // if (!type) type = 0;
        if (fv === void 0) { fv = 0; }
        if (type === void 0) { type = 0; }
        if (rate == 0)
            return -(pv + fv) / nper;
        var pvif = Math.pow(1 + rate, nper);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);
        if (type == 1) {
            pmt /= (1 + rate);
        }
        ;
        return pmt;
    },
    IPMT: function (pv, pmt, rate, per) {
        var tmp = Math.pow(1 + rate, per);
        return 0 - (pv * tmp * rate + pmt * (tmp - 1));
    },
    PPMT: function (rate, per, nper, pv, fv, type) {
        if (per < 1 || (per >= nper + 1))
            return null;
        var pmt = this.PMT(rate, nper, pv, fv, type);
        var ipmt = this.IPMT(pv, pmt, rate, per - 1);
        return pmt - ipmt;
    },
    DaysBetween: function (date1, date2) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    },
    // Change Date and Flow to date and value fields you use
    XNPV: function (rate, values) {
        var xnpv = 0.0;
        var firstDate = new Date(values[0].Date);
        for (var key in values) {
            var tmp = values[key];
            var value = tmp.Flow;
            var date = new Date(tmp.Date);
            xnpv += value / Math.pow(1 + rate, this.DaysBetween(firstDate, date) / 365);
        }
        ;
        return xnpv;
    },
    XIRR: function (values, guess) {
        if (!guess) {
            guess = 0.1;
        }
        var x1 = 0.0;
        var x2 = guess;
        var f1 = this.XNPV(x1, values);
        var f2 = this.XNPV(x2, values);
        for (var i = 0; i < 100; i++) {
            if ((f1 * f2) < 0.0) {
                break;
            }
            if (Math.abs(f1) < Math.abs(f2)) {
                f1 = this.XNPV(x1 += 1.6 * (x1 - x2), values);
            }
            else {
                f2 = this.XNPV(x2 += 1.6 * (x2 - x1), values);
            }
        }
        ;
        if ((f1 * f2) > 0.0) {
            return null;
        }
        var f = this.XNPV(x1, values);
        var rtb = 0, dx = 0;
        if (f < 0.0) {
            rtb = x1;
            dx = x2 - x1;
        }
        else {
            rtb = x2;
            dx = x1 - x2;
        }
        ;
        for (var i = 0; i < 100; i++) {
            dx *= 0.5;
            var x_mid = rtb + dx;
            var f_mid = this.XNPV(x_mid, values);
            if (f_mid <= 0.0) {
                rtb = x_mid;
            }
            if ((Math.abs(f_mid) < 1.0e-6) || (Math.abs(dx) < 1.0e-6)) {
                return x_mid;
            }
        }
        ;
        return null;
    },
    IRR: function (cf, numOfFlows) {
        var LOW_RATE = 0.01;
        var HIGH_RATE = 0.5;
        var MAX_ITERATION = 1000;
        var PRECISION_REQ = 0.00000001;
        var i = 0, j = 0;
        var m = 0.0;
        var old = 0.00;
        var newVal = 0.00;
        var oldguessRate = LOW_RATE;
        var newguessRate = LOW_RATE;
        var guessRate = LOW_RATE;
        var lowGuessRate = LOW_RATE;
        var highGuessRate = HIGH_RATE;
        var npv = 0.0;
        var denom = 0.0;
        for (i = 0; i < MAX_ITERATION; i++) {
            npv = 0.00;
            for (j = 0; j < numOfFlows; j++) {
                denom = Math.pow((1 + guessRate), j);
                npv = npv + (cf[j] / denom);
            }
            /* Stop checking once the required precision is achieved */
            if ((npv > 0) && (npv < PRECISION_REQ)) {
                break;
            }
            if (old == 0) {
                old = npv;
            }
            else {
                old = newVal;
            }
            newVal = npv;
            if (i > 0) {
                if (old < newVal) {
                    if (old < 0 && newVal < 0) {
                        highGuessRate = newguessRate;
                    }
                    else {
                        lowGuessRate = newguessRate;
                    }
                }
                else {
                    if (old > 0 && newVal > 0) {
                        lowGuessRate = newguessRate;
                    }
                    else {
                        highGuessRate = newguessRate;
                    }
                }
            }
            oldguessRate = guessRate;
            guessRate = (lowGuessRate + highGuessRate) / 2;
            newguessRate = guessRate;
        }
        return guessRate;
    },
    RATE: function (periods, payment, present, future, type, guess) {
        guess = (guess === undefined) ? 0.01 : guess;
        future = (future === undefined) ? 0 : future;
        type = (type === undefined) ? 0 : type;
        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;
        // Set maximum number of iterations
        var iterMax = 128;
        // Implement Newton's method
        var y, y0, y1, x0, x1 = 0, f = 0, i = 0;
        var rate = guess;
        if (Math.abs(rate) < epsMax) {
            y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        }
        else {
            f = Math.exp(periods * Math.log(1 + rate));
            y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
        y0 = present + payment * periods + future;
        y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
        i = x0 = 0;
        x1 = rate;
        while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
            rate = (y1 * x0 - y0 * x1) / (y1 - y0);
            x0 = x1;
            x1 = rate;
            if (Math.abs(rate) < epsMax) {
                y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
            }
            else {
                f = Math.exp(periods * Math.log(1 + rate));
                y = present * f + payment * (1 / rate + type) * (f - 1) + future;
            }
            y0 = y1;
            y1 = y;
            ++i;
        }
        return rate;
    },
    AmortizationSchedule: function (loan_amount, interest_rate, payments_per_year, years, payment) {
        var schedule = [];
        var remaining = loan_amount;
        var number_of_payments = payments_per_year * years;
        for (var i = 1; i <= number_of_payments; i++) {
            var interest = remaining * (interest_rate / 100 / payments_per_year);
            var principle = (payment - interest);
            var row = {
                'Period': i,
                'Principle': principle > 0 ?
                    (principle < payment ? principle : payment) : 0,
                'Interest': interest > 0 ? interest : 0,
                'Remaining': remaining > 0 ? remaining : 0
            };
            // [i, principle > 0 ?
            //     (principle < payment ? principle : payment) : 0, interest > 0 ? interest : 0, remaining > 0 ? remaining : 0];
            schedule.push(row);
            remaining -= principle;
        }
        return schedule;
    }
};
//# sourceMappingURL=ExcelFormulasService.js.map

/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(4);
var currency_mask_config_1 = __webpack_require__(1203);
var input_handler_1 = __webpack_require__(1233);
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create(null);
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event, this.isSamsungChromeAndroid());
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.isSamsungChromeAndroid = function () {
        return navigator.userAgent.match(/SAMSUNG|SGH-|GT-[I|P|N]|SM-|SHV-E|SCH-|SPH-L/i) ? true : false;
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_ExcelFormulasService__ = __webpack_require__(1202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmortizationScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmortizationScheduleComponent = (function () {
    function AmortizationScheduleComponent(helperService) {
        this.helperService = helperService;
    }
    AmortizationScheduleComponent.prototype.ngOnChanges = function (changes) {
        if (this.loanOptionDetails !== undefined) {
            this.output = this.calculateSchedule(this.loanOptionDetails.firstMortgage.loanAmount, this.loanOptionDetails.firstMortgage.rate, this.loanOptionDetails.firstMortgage.term);
            console.log('loanOptionDetails ngOnChanges', this.loanOptionDetails, this.output);
        }
    };
    AmortizationScheduleComponent.prototype.calculateSchedule = function (loanAmount, interestRate, numberOfPayments) {
        var _this = this;
        var output = {};
        var paymentsPerYear = 12;
        output.loanAmount = this.helperService.getMoney(loanAmount);
        output.interestRate = interestRate;
        output.paymentsPerYear = paymentsPerYear;
        var years = (numberOfPayments / paymentsPerYear);
        output.years = years;
        output.numberOfPayments = numberOfPayments;
        var payment = output.payment = __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_ExcelFormulasService__["a" /* ExcelFormulas */].PMT(interestRate / 100 / paymentsPerYear, numberOfPayments, -loanAmount);
        var schedule = __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_ExcelFormulasService__["a" /* ExcelFormulas */].AmortizationSchedule(loanAmount, interestRate, paymentsPerYear, years, payment);
        // output.schedule = [];
        schedule.forEach(function (n) {
            n.Principle = _this.helperService.getMoney(n.Principle);
            n.Interest = _this.helperService.getMoney(n.Interest);
            n.Remaining = _this.helperService.getMoney(n.Remaining);
            var EndingBalance = n.Remaining - n.Principle;
            n.EndingBalance = _this.helperService.getMoney(EndingBalance);
        });
        output.payment = this.helperService.getMoney(output.payment);
        output.schedule = schedule;
        // .map(function (n) {
        //     n.Principle = this.helperService.getMoney(n.Principle);
        //     n.Interest = this.helperService.getMoney(n.Interest);
        //     n.Remaining = this.helperService.getMoney(n.Remaining);
        //     return n;
        // });
        // output.schedule = schedule.forEach(function (n) {
        //     output.schedule.push({
        //         'Period': n[0],
        //         'Principle': n[1].toFixed(2),
        //         'Interest': n[2].toFixed(2),
        //         'Remaining': n[3].toFixed(2)
        //     });
        // });
        return output;
    };
    return AmortizationScheduleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["d" /* LoanOption */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["d" /* LoanOption */]) === "function" && _a || Object)
], AmortizationScheduleComponent.prototype, "loanOptionDetails", void 0);
AmortizationScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-amortization-schedule',
        template: __webpack_require__(1238),
        styles: [__webpack_require__(1219)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], AmortizationScheduleComponent);

var _a, _b;
//# sourceMappingURL=amortization-schedule.component.js.map

/***/ }),

/***/ 1207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_details_income_details_component__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_loan_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowerDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BorrowerDetailsComponent = (function () {
    function BorrowerDetailsComponent(borrowerService, loanService, router, loanOption) {
        this.borrowerService = borrowerService;
        this.loanService = loanService;
        this.router = router;
        this.loanOption = loanOption;
        this.borrowers = [];
    }
    BorrowerDetailsComponent.prototype.ngOnInit = function () {
        if (this.borrowers.length === 0) {
            var borrower = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["o" /* Borrower */]();
            borrower.type = 'B';
            borrower.borrowerId = 'B';
            borrower.isActive = true;
            this.borrowers.push(borrower);
        }
    };
    BorrowerDetailsComponent.prototype.addCoBorrower = function () {
        var borrower = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["o" /* Borrower */]();
        var coBorrowers = this.borrowers.filter(function (x) { return x.type === 'C'; });
        borrower.borrowerId = "C" + (coBorrowers.length + 1);
        borrower.type = 'C';
        borrower.isActive = true;
        this.borrowers.push(borrower);
    };
    BorrowerDetailsComponent.prototype.shareLoan = function (email) {
        var model = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["p" /* ShareLoanModel */]();
        model.email = email;
        var pieces = window.location.href.split('/');
        model.loanLink = window.location.origin + "/#/loan-calculator/customer-view/" + pieces[pieces.length - 1];
        this.loanService.shareLoan(model).subscribe(function (x) {
            console.log('loan shared');
        });
    };
    BorrowerDetailsComponent.prototype.creditScoreChange = function (creditscore) {
        this.loanOption.loanOptionChange("credit score:" + creditscore);
    };
    BorrowerDetailsComponent.prototype.borrowerStatusChange = function (_borrower) {
        this.borrowerService.borrowerChange(_borrower);
        // if (this.incomeDetails) {
        //     this.incomeDetails.borrowerStatusChange();
        // }
    };
    return BorrowerDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BorrowerDetailsComponent.prototype, "borrowers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__income_details_income_details_component__["a" /* IncomeDetailsComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__income_details_income_details_component__["a" /* IncomeDetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__income_details_income_details_component__["a" /* IncomeDetailsComponent */]) === "function" && _a || Object)
], BorrowerDetailsComponent.prototype, "incomeDetails", void 0);
BorrowerDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-borrower-details',
        template: __webpack_require__(1240),
        styles: [__webpack_require__(1221)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_borrower_service__["c" /* BorrowerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_borrower_service__["c" /* BorrowerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_loan_service__["a" /* LoanService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */]) === "function" && _e || Object])
], BorrowerDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=borrower-details.component.js.map

/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebtDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DebtDetailsComponent = (function () {
    // frequency: string[] = ['Weekly', 'Every 2 Weeks'];
    function DebtDetailsComponent(debtService) {
        this.debtService = debtService;
        this.debts = new Array();
    }
    DebtDetailsComponent.prototype.addDebt = function () {
        var debt = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["l" /* Debt */]();
        debt.isActive = true;
        this.debts.push(debt);
        this.debtService.debtChange(debt);
    };
    DebtDetailsComponent.prototype.debtChange = function (_debt) {
        this.debtService.debtChange(_debt);
    };
    return DebtDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DebtDetailsComponent.prototype, "debts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DebtDetailsComponent.prototype, "borrowers", void 0);
DebtDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-debt-details',
        template: __webpack_require__(1243),
        styles: [__webpack_require__(1224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["e" /* DebtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["e" /* DebtService */]) === "function" && _a || Object])
], DebtDetailsComponent);

var _a;
//# sourceMappingURL=debt-details.component.js.map

/***/ }),

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeDebtsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncomeDebtsContainerComponent = (function () {
    function IncomeDebtsContainerComponent(borrowerService, helperService, incomeService, debtService, loanOption) {
        this.borrowerService = borrowerService;
        this.helperService = helperService;
        this.incomeService = incomeService;
        this.debtService = debtService;
        this.loanOption = loanOption;
        this.incomeDebtsCollapsed = true;
        this.incomes = new Array();
        this.debts = new Array();
        borrowerService.borrower$.subscribe(this.incomeStatusUpadteBasedOnBorrower.bind(this));
        incomeService.incomes$.subscribe(this.calculateTotalIncome.bind(this));
        debtService.debts$.subscribe(this.calculateTotalDebt.bind(this));
    }
    IncomeDebtsContainerComponent.prototype.incomeStatusUpadteBasedOnBorrower = function (_borrower) {
        // if (!_borrower.isActive) {
        this.incomes.filter(function (x) { return x.borrowerId === _borrower.borrowerId; }).forEach(function (x) { return x.isActive = _borrower.isActive; });
        this.debts.filter(function (x) { return x.borrowerId === _borrower.borrowerId; }).forEach(function (x) { return x.isActive = _borrower.isActive; });
        // }
        this.calculateTotalIncome();
        this.calculateTotalDebt();
    };
    IncomeDebtsContainerComponent.prototype.calculateTotalIncome = function () {
        var _this = this;
        var activeMembers = this.borrowers.filter(function (x) { return x.isActive; });
        var activeIncomes = this.incomes.filter(function (x) { return x.isActive && activeMembers.filter(function (y) { return y.borrowerId === x.borrowerId; }).length > 0; });
        var totalMonthlyIncome = 0;
        activeIncomes.forEach(function (income) {
            totalMonthlyIncome = totalMonthlyIncome + _this.incomeToMonthly(income.amount, income.frequency);
        });
        this.loan.totalIncome = this.helperService.getMoney(totalMonthlyIncome);
        this.loanOption.loanOptionChange("income:" + this.totalIncome);
    };
    IncomeDebtsContainerComponent.prototype.incomeToMonthly = function (amount, frequency) {
        amount = this.helperService.getMoney(amount);
        var monthlyAmount = 0;
        switch (frequency) {
            case 'Weekly':
                monthlyAmount = (amount * 52) / 12;
                break;
            case 'Every 2 Weeks':
                monthlyAmount = (amount * 26) / 12;
                break;
            case 'Twice a Month':
                monthlyAmount = amount * 2;
                break;
            case 'Monthly':
                monthlyAmount = amount;
                break;
            case 'Monthly Non-Taxable Income (grossed up @ 1.25%)':
                monthlyAmount = amount + (amount * (1.25 / 100));
                break;
            case 'Annual':
                monthlyAmount = amount / 12;
                break;
            default:
                break;
        }
        return this.helperService.getMoney(monthlyAmount);
    };
    IncomeDebtsContainerComponent.prototype.calculateTotalDebt = function () {
        var _this = this;
        var activeMembers = this.borrowers.filter(function (x) { return x.isActive; });
        var activeDebts = this.debts.filter(function (x) { return x.isActive && activeMembers.filter(function (y) { return y.borrowerId === x.borrowerId; }).length > 0; });
        var totalMonthlyDebt = 0;
        activeDebts.forEach(function (debt) {
            totalMonthlyDebt = totalMonthlyDebt + _this.incomeToMonthly(debt.amount, debt.frequency);
        });
        this.loan.totalDebts = this.helperService.getMoney(totalMonthlyDebt);
        console.log(this.totalDebts);
        this.loanOption.loanOptionChange("debt:" + this.totalDebts);
    };
    return IncomeDebtsContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IncomeDebtsContainerComponent.prototype, "viewMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], IncomeDebtsContainerComponent.prototype, "incomes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], IncomeDebtsContainerComponent.prototype, "debts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], IncomeDebtsContainerComponent.prototype, "borrowers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], IncomeDebtsContainerComponent.prototype, "totalIncome", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], IncomeDebtsContainerComponent.prototype, "totalDebts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["ILoan"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["ILoan"]) === "function" && _a || Object)
], IncomeDebtsContainerComponent.prototype, "loan", void 0);
IncomeDebtsContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-income-debts-container',
        template: __webpack_require__(1244),
        styles: [__webpack_require__(1225)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["c" /* BorrowerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["c" /* BorrowerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["d" /* IncomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["d" /* IncomeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["e" /* DebtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["e" /* DebtService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */]) === "function" && _f || Object])
], IncomeDebtsContainerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=income-debts-container.component.js.map

/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_routes_loan_shared_models__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_amortization_schedule_container_amortization_schedule_container_component__ = __webpack_require__(1196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanOptionContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoanOptionContainerComponent = (function () {
    function LoanOptionContainerComponent(modalService) {
        this.modalService = modalService;
        // CAROUSEL PROPS
        this.leftContext = 1;
        this.rightContext = 2;
    }
    LoanOptionContainerComponent.prototype.showAmortizationSchedule = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3_app_routes_loan_amortization_schedule_container_amortization_schedule_container_component__["a" /* AmortizationScheduleContainerComponent */], { 'class': 'modal-lg' });
        // const leftOption = this.loanOptions.filter(x => x.optionNo === this.leftContext);
        this.bsModalRef.content.LoanOptionLeft = this.loanOptions.filter(function (x) { return x.optionNo === _this.leftContext; })[0];
        this.bsModalRef.content.LoanOptionRight = this.loanOptions.filter(function (x) { return x.optionNo === _this.rightContext; })[0];
    };
    LoanOptionContainerComponent.prototype.nextLoanOption = function (side) {
        if (side === 'left') {
            if (this.leftContext <= this.loanOptions.length) {
                this.leftContext++;
            }
            else {
                this.leftContext = 1;
            }
        }
        else {
            if (this.rightContext <= this.loanOptions.length) {
                this.rightContext++;
            }
            else {
                this.rightContext = 1;
            }
        }
    };
    LoanOptionContainerComponent.prototype.prevLoanOption = function (side) {
        if (side === 'left') {
            if (this.leftContext > 1) {
                this.leftContext--;
            }
            else {
                this.leftContext = this.loanOptions.length + 1;
            }
        }
        else {
            if (this.rightContext > 1) {
                this.rightContext--;
            }
            else {
                this.rightContext = this.loanOptions.length + 1;
            }
        }
    };
    LoanOptionContainerComponent.prototype.addLoanOption = function (side) {
        var loanOption = new __WEBPACK_IMPORTED_MODULE_1_app_routes_loan_shared_models__["d" /* LoanOption */]();
        var loanOptionNo = this.loanOptions.length + 1;
        loanOption.optionNo = loanOptionNo;
        this.loanOptions.push(loanOption);
        if (side === 'left') {
            this.leftContext = loanOptionNo;
        }
        else {
        }
    };
    return LoanOptionContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoanOptionContainerComponent.prototype, "viewMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionContainerComponent.prototype, "incomes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionContainerComponent.prototype, "debts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionContainerComponent.prototype, "borrowers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionContainerComponent.prototype, "loanOptions", void 0);
LoanOptionContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loan-option-container',
        template: __webpack_require__(1246),
        styles: [__webpack_require__(1227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object])
], LoanOptionContainerComponent);

var _a;
//# sourceMappingURL=loan-option-container.component.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_ExcelFormulasService__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_prepaids_settings_prepaids_settings_component__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_routes_loan_closing_costs_settings_closing_costs_settings_component__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_routes_loan_shared_settings_service__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_routes_loan_credits_settings_credits_settings_component__ = __webpack_require__(1199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanOptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { Finance } from 'financejs';
var LoanOptionComponent = (function () {
    function LoanOptionComponent(helperService, loanOptionService, modalService, settingsService) {
        this.helperService = helperService;
        this.loanOptionService = loanOptionService;
        this.modalService = modalService;
        this.settingsService = settingsService;
        this.subscriptions = [];
        this.value = true;
        this.showPicker = false;
        this.showDate = true;
        this.showTime = true;
        this.loanTypeList = __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["e" /* LOAN_TYPE_LIST */];
        this.miTypeList = __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["f" /* MI_TYPE_LIST */];
        this.isSecondMortageOpen = false;
        this.isDownPaymentOpen = false;
        loanOptionService.loanOption$.subscribe(this.calculate.bind(this));
    }
    LoanOptionComponent.prototype.onTogglePicker = function () {
        if (this.showPicker === false) {
            this.showPicker = true;
        }
    };
    LoanOptionComponent.prototype.onValueChange = function (val) {
        this.loanOption.expiry = val;
    };
    LoanOptionComponent.prototype.loanOptionChange = function () {
        this.loanOption.loanMode = !this.loanOption.loanMode;
        this.calculateClosingCostInclude();
        this.calculateClosingCostVisiblity();
    };
    LoanOptionComponent.prototype.loanOptionTypeChangeCalculate = function () {
        var salesPrice = this.helperService.getMoney(this.loanOption.salesPrice);
        var firstMortgageLoanAmount = 0, secondMortgageLoanAmount = 0;
        var loanTypeId = +this.loanOption.loanType;
        var loanType = this.loanTypeList.filter(function (x) { return x.id === loanTypeId; })[0];
        firstMortgageLoanAmount = salesPrice * (loanType.firtstMortgagePercentage / 100);
        secondMortgageLoanAmount = salesPrice * (loanType.secondMortgagePercentage / 100);
        // if (this.loanOption.loanType < 4) {
        //     this.loanOption.firstMortgage.points = 0;
        //     // Range("B22") = 0;//TODO: MISSING HTML 
        //     // Range("b23") = 0;//TODO: MISSING HTML
        //     // Range("ac13") = False;//TODO: MISSING HTML 
        //     // Range("ac14") = False;//TODO: MISSING HTML 
        //     // Range("ac15") = False;//TODO: MISSING HTML 
        // }
        // else if (this.loanOption.loanType === 4) { // 100%
        //     firstMortgageLoanAmount = salesPrice * 1; //'Value is multiplied by 1
        //     secondMortgageLoanAmount = 0; //'Value is zero
        // }
        // // '95%
        // else if (this.loanOption.loanType === 5) {
        //     firstMortgageLoanAmount = salesPrice * 0.95; //'Value is multiplied by 95%
        //     secondMortgageLoanAmount = 0; //'Value is zero
        // }
        // // '90%
        // else if (this.loanOption.loanType === 6) {
        //     firstMortgageLoanAmount = salesPrice * 0.9; //'Value is multiplied by 90%
        //     secondMortgageLoanAmount = 0; //'Value is zero
        // }
        // // '80%
        // else if (this.loanOption.loanType === 7) {
        //     firstMortgageLoanAmount = salesPrice * 0.8; //'Value is multiplied by 80%
        //     secondMortgageLoanAmount = 0; //'Value is zero
        // }
        // // '80-10-10
        // else if (this.loanOption.loanType === 8) {
        //     firstMortgageLoanAmount = salesPrice * 0.8; //'Value is multiplied by 80%
        //     secondMortgageLoanAmount = salesPrice * 0.1; //'Value is multiplied by 10%
        // }
        // // '80-15-5
        // else if (this.loanOption.loanType === 9) {
        //     firstMortgageLoanAmount = salesPrice * 0.8; //'Value is multiplied by 80%
        //     secondMortgageLoanAmount = salesPrice * 0.15; //'Value is multiplied by 15%
        // }
        // // '80-20
        // else if (this.loanOption.loanType === 10) {
        //     firstMortgageLoanAmount = salesPrice * 0.8; //'Value is multiplied by 80%
        //     secondMortgageLoanAmount = salesPrice * 0.2; //'Value is multiplied by 20%
        // }
        this.loanOption.firstMortgage.loanAmount = this.helperService.getMoney(firstMortgageLoanAmount);
        this.loanOption.secondMortgage.loanAmount = this.helperService.getMoney(secondMortgageLoanAmount);
        this.loanOption.firstMortgage.loanBaseAmount = this.helperService.getMoney(firstMortgageLoanAmount);
        this.loanOption.secondMortgage.loanBaseAmount = this.helperService.getMoney(secondMortgageLoanAmount);
        // this.loanOption.closingCosts.forEach(x => x.include = false);
    };
    LoanOptionComponent.prototype.loanAmountChange = function () {
        this.loanOption.closingCosts.forEach(function (x) { return x.include = false; });
        this.loanOption.firstMortgage.loanBaseAmount = this.helperService.getMoney(this.loanOption.firstMortgage.loanAmount);
        this.calculate();
    };
    LoanOptionComponent.prototype.loanOptionTypeChange = function () {
        this.loanOptionTypeChangeCalculate();
        this.calculateClosingCostInclude();
        this.calculateClosingCostVisiblity();
        // this.calculate();
    };
    LoanOptionComponent.prototype.calculateMI = function (B18, AT21) {
        var borrowerCreditScores = this.borrowers.filter(function (x) { return x.isActive; }).map(function (x) { return x.creditScore; });
        var minCreditScore = Math.min.apply(Math, borrowerCreditScores);
        var ltv = this.helperService.getMoney(this.loanOption.ltv);
        var term = +this.loanOption.firstMortgage.term || 0;
        var bmpi = 0;
        if (this.bpmiList !== undefined && term > 0) {
            var bmpiValue = this.bpmiList.filter(function (x) { return x.creditScoreFrom <= minCreditScore &&
                (x.creditScoreTo === 0 ? minCreditScore : x.creditScoreTo) >= minCreditScore &&
                x.termFrom <= term &&
                (x.termTo === null || x.termTo >= term) &&
                x.ltvFrom <= ltv && ltv <= x.ltvTo; });
            if (bmpiValue !== undefined && bmpiValue.length > 0) {
                bmpi = bmpiValue[0].bpmi;
            }
            var bmpiLoanLimit = 650000;
            if (B18 > bmpiLoanLimit) {
                var bpmiAdj = this.bpmiAdjustmentList.filter(function (x) { return x.creditScoreFrom <= minCreditScore &&
                    (x.creditScoreTo === 0 ? minCreditScore : x.creditScoreTo) >= minCreditScore; });
                if (bpmiAdj !== undefined && bpmiAdj.length > 0) {
                    bmpi += bpmiAdj[0].bpmi;
                }
            }
        }
        var mi = ((B18 * bmpi) / 100) / 12;
        this.loanOption.mi = this.helperService.getMoney(mi);
    };
    LoanOptionComponent.prototype.calculateTitleInsurance = function (loanAmount) {
        var titleInsurance = 0;
        if (loanAmount > 0) {
            if (loanAmount > 100000) {
                var titleInsurancesRange = this.titleInsuranceRanges.filter(function (x) { return x.policyRangeFrom <= loanAmount && x.policyRangeTo >= loanAmount; });
                var subtract = 0;
                var multiplyBy = 0;
                var add = 0;
                if (titleInsurancesRange !== undefined && titleInsurancesRange.length > 0) {
                    subtract = titleInsurancesRange[0].subtract;
                    multiplyBy = titleInsurancesRange[0].multiplyBy;
                    add = titleInsurancesRange[0].add;
                    titleInsurance = ((loanAmount - subtract) * multiplyBy) + add;
                }
            }
            else {
                if (this.titleInsurances !== undefined && this.titleInsurances.length > 0) {
                    for (var i = 0; i < this.titleInsurances.length; i++) {
                        var element = this.titleInsurances[i];
                        if (loanAmount <= element.policiesUpToAndIncluding) {
                            titleInsurance = element.basicPremium;
                            break;
                        }
                    }
                }
            }
        }
        this.loanOption.closingCosts[1].value = this.helperService.getMoney(titleInsurance);
    };
    /**
         * B11=>sales price
         * E20=>term
         * B18=> loan amount
         * E19=>rate
         * B24=>=SUM(AL3:AN7)=>=(AL3+AL4+AL5+AL6+AL7)
         * AL3=>=B18 loan amount
         * AL4=>=IF(AC12=1,0,IF(AC13=TRUE,B21,0))
         * AL5=>=IF(AC12=1,0,IF(AC14=TRUE,B22,0))
         * AL6=>=IF(AC12=1,0,IF(AC15=TRUE,B23,0))
         * AL7=>=B10//TODO:CHECK IS IT DOWNPAYMENT OR NOT
         * AC12=>[Purcahse=1,Refenance=2]=>this.loanOption.loanMode[Purchase:false,Refenance:true]
         *
         * IF(E20 = 0, (B18 * (E19 / 1200)), PMT(+E19 / 1200, E20, -B24))
         * E21 this.loanOption.firstMortgage.points
         * B22 TODO:clossing costs[excell]
         * B23 TODO:prepaids [excell]
         */
    LoanOptionComponent.prototype.calculate = function () {
        console.log('calculate');
        var points = this.helperService.getMoneyRound3(this.loanOption.firstMortgage.points);
        this.loanOption.closingCosts[0].percentage = points;
        // this.calculateClosingCostInclude();
        var firstMortgageLoanAmount = this.helperService.getMoney(this.loanOption.firstMortgage.loanAmount);
        this.calculateTitleInsurance(firstMortgageLoanAmount);
        var salesPrice = this.helperService.getMoney(this.loanOption.salesPrice);
        if (firstMortgageLoanAmount > 0 && (salesPrice === 0 || firstMortgageLoanAmount >= salesPrice)) {
            salesPrice = firstMortgageLoanAmount;
            this.loanOption.salesPrice = salesPrice;
            this.loanOption.loanType = this.loanTypeList.filter(function (x) { return x.type === '100%'; })[0].id;
            // this.loanOptionTypeChangeCalculate();
            this.loanOption.secondMortgage.loanAmount = 0;
        }
        var E19 = this.helperService.getMoney(this.loanOption.firstMortgage.rate);
        var E20 = this.helperService.getMoney(this.loanOption.firstMortgage.term);
        var AC13 = true, AC14 = true, AC15 = true; //TODO need clarification
        if (this.loanOption.loanType < 4) {
            AC13 = false;
            AC14 = false;
            AC15 = false;
        }
        var B18 = firstMortgageLoanAmount;
        var B11 = salesPrice;
        var B21 = firstMortgageLoanAmount * (points / 100);
        var B22 = 0; //TODO need to do clossing cost
        var B23 = 0; //TODO need prepaids [excell]
        var AL4 = (this.loanOption.loanMode === false) ? 0 : (AC13 === true) ? B21 : 0;
        var AL5 = (this.loanOption.loanMode === false) ? 0 : (AC14 = true) ? B22 : 0;
        var AL6 = (this.loanOption.loanMode === false) ? 0 : (AC15 = true) ? B23 : 0;
        var AL7 = 0; //TODO:CROSS CHECK is downPayment
        var B24 = (this.helperService.getMoney(this.loanOption.firstMortgage.loanAmount) + AL4 + AL5 + AL6 + AL7);
        var D17 = (B18 === 0) ? 0 : (B24 / B11);
        // AT21 = IF(D17 < 0.8, 0, IF(AO14 = 2, AV17, IF(AO14 = 3, AV19, IF(D17 > 0.95, AV12, IF(D17 > 0.9, AV13, IF(D17 > 0.85, AV14, IF(D17 > 0.8, AV15)))))))
        var AO14 = this.loanOption.loanType;
        var AV12 = 1.04; //TODO need clarification
        var AV13 = 0.78; //TODO need clarification
        var AV14 = 0.52; //TODO need clarification
        var AV15 = 0.32; //TODO need clarification
        var AV17 = 0.5; //TODO need clarification
        var AV19 = 0; //TODO need clarification
        var AT21 = 0;
        if (D17 < 0.8) {
            AT21 = 0;
        }
        else {
            if (AO14 === 2) {
                AT21 = AV17;
            }
            else {
                if (AO14 === 3) {
                    AT21 = AV19;
                }
                else {
                    if (D17 > 0.95) {
                        AT21 = AV12;
                    }
                    else {
                        if (D17 > 0.9) {
                            AT21 = AV13;
                        }
                        else {
                            if (D17 > 0.85) {
                                AT21 = AV14;
                            }
                            else {
                                if (D17 > 0.8) {
                                    AT21 = AV15;
                                }
                            }
                        }
                    }
                }
            }
        }
        var L18 = this.calculatePandI(E20, B18, E19, B24); //firstMortgage.pAndI
        this.loanOption.firstMortgage.pAndI = L18;
        var L17 = 0; //TODO:need clarification        
        var L19 = this.helperService.getMoney(this.loanOption.tax);
        var L20 = this.helperService.getMoney(this.loanOption.ins);
        var L21 = this.helperService.getMoney(this.loanOption.hoa);
        var L22 = this.helperService.getMoney(this.loanOption.other);
        var L23 = this.helperService.getMoney(this.loanOption.mi);
        var L18_N23_SUM = L18 + L19 + L20 + L21 + L22 + L23;
        var L17_N23_SUM = L17 + L18_N23_SUM;
        var AC16 = false; //TODO:need clarification
        this.calculatePITI(AC16, L17_N23_SUM, L18_N23_SUM, L21, L18);
        var L24 = this.helperService.getMoney(this.loanOption.firstMortgage.piti);
        var B27 = 0; //TODO need clarification
        var B25 = this.helperService.getMoney(this.loanOption.secondMortgage.loanAmount);
        var B26 = this.helperService.getMoney(this.loanOption.secondMortgage.rate);
        var L25 = this.calculatePandI(B27, B25, B26, B25); //this.loanOption.secondMortgage.pAndI
        this.loanOption.secondMortgage.pAndI = L25;
        //  this.helperService.getMoney(this.loanOption.downPayment);
        this.calculateDownPayment(B11, B18, B25);
        var L26 = this.calculateFirstAndSecondPiti(L24, L25);
        this.loanOption.firstAndSecondPiti = L26;
        var R12 = this.getTotalIncome();
        var U12 = this.getTotalDebts();
        this.calculateFront(B18, L26, R12);
        this.calculateBack(B18, U12, L26, R12);
        this.calculateCLTV(B11, B18, B25);
        this.calculateLTV(B11, B18);
        this.calculateMI(B18, AT21);
        /**
         * =(((B24*E19/100)/12)/30)
         * Daily interest
         */
        var AY21 = (((B24 * E19 / 100) / 12) / 30);
        this.calculatePrepaids(L19, L20, AY21);
        this.calculateCredits();
        this.calculateClosingCosts();
        this.calculateCashToCloseSummary();
        this.calculateAPR(B24);
        // const L25==IF(B27 = 0, (B25 * (B26 / 1200)), PMT(+B26 / 1200, B27, -B25))
    };
    /**
     * IRR is equal to APR
     */
    LoanOptionComponent.prototype.calculateAPR = function (B24) {
        // const finance = new Finance();
        var loanAmount = this.helperService.getMoney(this.loanOption.firstMortgage.loanAmount);
        var cashToClose = this.helperService.getMoney(this.loanOption.cashToClose);
        var interestRate = this.helperService.getMoney(this.loanOption.firstMortgage.rate);
        var interestAmount = loanAmount * (interestRate / 100);
        var effectiveLoanPayout = loanAmount - cashToClose;
        var term = this.helperService.getMoney(this.loanOption.firstMortgage.term);
        if (loanAmount !== 0) {
            var pmt = this.helperService.getMoney(__WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_ExcelFormulasService__["a" /* ExcelFormulas */].PMT(interestRate / 1200, term, (loanAmount + cashToClose)));
            var rate = this.helperService.getMoney(__WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_ExcelFormulasService__["a" /* ExcelFormulas */].RATE(term, pmt, loanAmount) * 1200);
            this.loanOption.apr = rate;
        }
    };
    LoanOptionComponent.prototype.calculateCashToCloseSummary = function () {
        var cashToClose = ((this.loanOption.downPayment +
            this.loanOption.totalClosingCosts +
            this.loanOption.prePaids.totalPrePaids) - this.loanOption.credits.totalCredits);
        this.loanOption.cashToClose = this.helperService.getMoney(cashToClose);
    };
    LoanOptionComponent.prototype.calculateClosingCostVisiblity = function () {
        var _this = this;
        var currentLoanType = this.loanTypeList.filter(function (x) { return x.id === _this.loanOption.loanType; })[0];
        if (currentLoanType.type === "FHA") {
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].isVisible = true;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].isVisible = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].isVisible = false;
        }
        else if (currentLoanType.type === "VA") {
            if (this.loanOption.loanMode) {
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].isVisible = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].isVisible = true;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].isVisible = false;
            }
            else {
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].isVisible = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].isVisible = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].isVisible = true;
            }
        }
        else {
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].isVisible = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].isVisible = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].isVisible = false;
        }
    };
    LoanOptionComponent.prototype.calculateClosingCostInclude = function () {
        var _this = this;
        var currentLoanType = this.loanTypeList.filter(function (x) { return x.id === _this.loanOption.loanType; })[0];
        if (currentLoanType.type === "FHA") {
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].include = true;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].include = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].include = false;
        }
        else if (currentLoanType.type === "VA") {
            if (this.loanOption.loanMode) {
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].include = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].include = true;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].include = false;
            }
            else {
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].include = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].include = false;
                this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].include = true;
            }
        }
        else {
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 3; })[0].include = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 4; })[0].include = false;
            this.loanOption.closingCosts.filter(function (x) { return +x.rowNo === 5; })[0].include = false;
        }
        var totalClosingCostsInclude = 0;
        if (!this.loanOption.loanMode) {
            // this.loanOption.closingCosts.forEach(x => x.include = false);
            this.loanOption.closingCosts.filter(function (x) { return x.include && x.type === 1; }).map(function (x) { return x.value; }).forEach(function (closingCost) {
                totalClosingCostsInclude = totalClosingCostsInclude + _this.helperService.getMoney(closingCost);
            });
        }
        var loanAmount = this.helperService.getMoney(this.loanOption.firstMortgage.loanBaseAmount);
        loanAmount = loanAmount + this.helperService.getMoney(totalClosingCostsInclude);
        var salesPrice = this.helperService.getMoney(this.loanOption.salesPrice);
        if (salesPrice >= loanAmount) {
            this.loanOption.firstMortgage.loanAmount = this.helperService.getMoney(loanAmount);
        }
        else {
            this.loanOption.firstMortgage.loanAmount = salesPrice;
        }
        if (loanAmount < 0) {
            this.loanOption.firstMortgage.loanAmount = 0;
        }
        this.calculate();
    };
    LoanOptionComponent.prototype.calculateClosingCosts = function () {
        var _this = this;
        this.loanOption.closingCosts.forEach(function (closingCost) {
            if (+closingCost.mode === 1) {
                var amount = _this.helperService.getMoney(_this.loanOption.firstMortgage.loanAmount);
                closingCost.value = _this.helperService.getMoney((amount * closingCost.percentage) / 100);
            }
        });
        var totalClosingCosts = 0;
        this.loanOption.closingCosts.filter(function (x) { return +x.type === 1; }).map(function (x) { return x.value; }).forEach(function (closingCost) {
            totalClosingCosts = totalClosingCosts + _this.helperService.getMoney(closingCost);
        });
        this.loanOption.totalClosingCosts = this.helperService.getMoney(totalClosingCosts);
    };
    LoanOptionComponent.prototype.calculateCredits = function () {
        var credit1Amount = this.helperService.getMoney(this.loanOption.credits.credit1Amount);
        var credit2Amount = this.helperService.getMoney(this.loanOption.credits.credit2Amount);
        var credit3Amount = this.helperService.getMoney(this.loanOption.credits.credit3Amount);
        var credit4Amount = this.helperService.getMoney(this.loanOption.credits.credit4Amount);
        var totalCredits = (credit1Amount + credit2Amount + credit3Amount + credit4Amount);
        this.loanOption.credits.totalCredits = this.helperService.getMoney(totalCredits);
    };
    LoanOptionComponent.prototype.calculatePrepaids = function (L19, L20, AY21) {
        var C33 = this.helperService.getMoney(this.loanOption.prePaids.monthsOfTax);
        var C34 = this.helperService.getMoney(this.loanOption.prePaids.monthsOfInsurance);
        var C35 = this.helperService.getMoney(this.loanOption.prePaids.daysOfInterest);
        var monthsOfTaxAmount = (L19 * C33);
        var monthsOfInsuranceAmount = (L20 * C34);
        var daysOfInterestAmount = (C35 * AY21);
        this.loanOption.prePaids.monthsOfTaxAmount = this.helperService.getMoney(monthsOfTaxAmount);
        this.loanOption.prePaids.monthsOfInsuranceAmount = this.helperService.getMoney(monthsOfInsuranceAmount);
        this.loanOption.prePaids.daysOfInterestAmount = this.helperService.getMoney(daysOfInterestAmount);
        var totalPrePaids = (this.loanOption.prePaids.monthsOfTaxAmount
            + this.loanOption.prePaids.monthsOfInsuranceAmount
            + this.loanOption.prePaids.daysOfInterestAmount);
        this.loanOption.prePaids.totalPrePaids = this.helperService.getMoney(totalPrePaids);
    };
    LoanOptionComponent.prototype.incomeToMonthly = function (amount, frequency) {
        amount = this.helperService.getMoney(amount);
        var monthlyAmount = 0;
        switch (frequency) {
            case 'Weekly':
                monthlyAmount = (amount * 52) / 12;
                break;
            case 'Every 2 Weeks':
                monthlyAmount = (amount * 26) / 12;
                break;
            case 'Twice a Month':
                monthlyAmount = amount * 2;
                break;
            case 'Monthly':
                monthlyAmount = amount;
                break;
            case 'Monthly Non-Taxable Income (grossed up @ 1.25%)':
                monthlyAmount = amount + (amount * (1.25 / 100));
                break;
            case 'Annual':
                monthlyAmount = amount / 12;
                break;
            default:
                break;
        }
        return this.helperService.getMoney(monthlyAmount);
    };
    LoanOptionComponent.prototype.getTotalIncome = function () {
        var _this = this;
        var activeMembers = this.borrowers.filter(function (x) { return x.isActive; });
        var activeIncomes = this.incomes.filter(function (x) { return x.isActive && activeMembers.filter(function (y) { return y.borrowerId === x.borrowerId; }).length > 0; });
        var totalMonthlyIncome = 0;
        activeIncomes.forEach(function (income) {
            totalMonthlyIncome = totalMonthlyIncome + _this.incomeToMonthly(income.amount, income.frequency);
        });
        return this.helperService.getMoney(totalMonthlyIncome);
    };
    LoanOptionComponent.prototype.getTotalDebts = function () {
        var _this = this;
        var activeMembers = this.borrowers.filter(function (x) { return x.isActive; });
        var activeDebts = this.debts.filter(function (x) { return x.isActive && activeMembers.filter(function (y) { return y.borrowerId === x.borrowerId; }).length > 0; });
        var totalMonthlyDebt = 0;
        activeDebts.forEach(function (debt) {
            totalMonthlyDebt = totalMonthlyDebt + _this.incomeToMonthly(debt.amount, debt.frequency);
        });
        return this.helperService.getMoney(totalMonthlyDebt);
    };
    LoanOptionComponent.prototype.calculateFront = function (B18, L26, R12) {
        var front = 0;
        if (B18 !== 0 && R12 !== 0) {
            front = (L26 / R12) * 100;
        }
        this.loanOption.front = this.helperService.getMoney(front);
    };
    /**
     * =IF(B18=0,0,($U$12+$L$26)/$R$12)
     * @param B18
     * @param U12 total debts
     * @param L26
     * @param R12 total income
     */
    LoanOptionComponent.prototype.calculateBack = function (B18, U12, L26, R12) {
        var back = 0;
        if (B18 !== 0 && R12 !== 0) {
            back = ((L26 + U12) / R12) * 100;
        }
        this.loanOption.back = this.helperService.getMoney(back);
    };
    // /**
    //  * =IF(B18=0,0,(B24+B25)/B11)
    //  * @param B18 
    //  * @param B24 
    //  * @param B25 
    //  * @param B11 
    //  */
    // calculateCLTV(B18, B24, B25, B11) {
    //     let cltv = 0;
    //     if (B18 !== 0 && B11 !== 0) {
    //         cltv = ((B24 + B25) / B11) * 100;
    //     }
    //     this.loanOption.cltv = this.helperService.getMoney(cltv);
    // }
    LoanOptionComponent.prototype.calculateCLTV = function (salesprice, firstMortgageLoanAmount, secondMortgageLoanAmount) {
        var cltv = 0;
        if (salesprice !== 0) {
            cltv = ((firstMortgageLoanAmount + secondMortgageLoanAmount) / salesprice) * 100;
        }
        this.loanOption.cltv = this.helperService.getMoney(cltv);
    };
    /**
     * =IF(B18=0,0,B24/B11)
     * @param B18
     * @param B24
     * @param B11
    //  */
    // calculateLTV(B18, B24, B11) {
    //     let ltv = 0;
    //     if (B18 !== 0 && B11 !== 0) {
    //         ltv = (B24 / B11) * 100;
    //     }
    //     this.loanOption.ltv = this.helperService.getMoney(ltv);
    // }
    LoanOptionComponent.prototype.calculateLTV = function (salesprice, loanAmount) {
        var ltv = 0;
        if (salesprice !== 0) {
            ltv = (loanAmount / salesprice) * 100;
        }
        this.loanOption.ltv = this.helperService.getMoney(ltv);
    };
    LoanOptionComponent.prototype.calculateDownPayment = function (B11, B18, B25) {
        var downPayment = 0;
        if (B11 > 0) {
            downPayment = B11 - (B18 + B25);
        }
        // const downPayment = B11 - (B18 + B25);
        this.loanOption.downPayment = this.helperService.getMoney(downPayment);
    };
    LoanOptionComponent.prototype.calculatePITI = function (AC16, L17_N23_SUM, L18_N23_SUM, L21, L18) {
        var piti = (AC16 === true) ? (L17_N23_SUM - (L21 + L18)) : L18_N23_SUM;
        this.loanOption.firstMortgage.piti = this.helperService.getMoney(piti);
    };
    LoanOptionComponent.prototype.calculatePandI = function (E20, B18, E19, B24) {
        var pAndI = (E20 === 0) ? (B18 * (E19 / 1200)) : __WEBPACK_IMPORTED_MODULE_2_app_routes_loan_shared_ExcelFormulasService__["a" /* ExcelFormulas */].PMT(+E19 / 1200, E20, -B24);
        return this.helperService.getMoney(pAndI);
        // this.loanOption.firstMortgage.pAndI = this.helperService.getMoney(pAndI);
    };
    LoanOptionComponent.prototype.calculateFirstAndSecondPiti = function (L24, L25) {
        var firstAndSecondPiti = L24 + L25;
        return this.helperService.getMoney(firstAndSecondPiti);
    };
    LoanOptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calculate();
        if (this.loanOption.closingCosts.length === 0) {
            this.loadClosingcostsDefaults();
        }
        else {
            this.calculateClosingCostVisiblity();
        }
        this.settingsService.geAllTitleInsurancePremium().subscribe(function (titleInsurances) {
            var insurances = [];
            for (var index = 0; index < titleInsurances.length; index++) {
                var element = titleInsurances[index];
                insurances.push(new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["g" /* TitleInsurance */](element));
            }
            _this.titleInsurances = insurances.sort(function (n1, n2) {
                return n1.policiesUpToAndIncluding > n2.policiesUpToAndIncluding ? 1 : -1;
            });
            _this.calculate();
        });
        this.settingsService.geAllTitleInsurancePremiumRange().subscribe(function (titleInsuranceRanges) {
            var insuranceRanges = [];
            for (var index = 0; index < titleInsuranceRanges.length; index++) {
                var element = titleInsuranceRanges[index];
                insuranceRanges.push(new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["h" /* TitleInsuranceRange */](element));
            }
            _this.titleInsuranceRanges = insuranceRanges;
            _this.calculate();
        });
        this.settingsService.getBpmi().subscribe(function (bpmiElement) {
            var bpmis = [];
            for (var index = 0; index < bpmiElement.length; index++) {
                var element = bpmiElement[index];
                bpmis.push(new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["i" /* Bpmi */](element));
            }
            _this.bpmiList = bpmis;
            _this.calculate();
        });
        this.settingsService.getBpmiAdjustments().subscribe(function (bpmiElement) {
            var bpmiAdjustments = [];
            for (var index = 0; index < bpmiElement.length; index++) {
                var element = bpmiElement[index];
                bpmiAdjustments.push(new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["j" /* BpmiAdjustment */](element));
            }
            _this.bpmiAdjustmentList = bpmiAdjustments;
            _this.calculate();
        });
    };
    LoanOptionComponent.prototype.showPrepaidsSettings = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_6_app_routes_loan_prepaids_settings_prepaids_settings_component__["a" /* PrepaidsSettingsComponent */]);
        this.subscriptions.push(this.modalService.onHide.subscribe(function (reason) {
            console.log("onHide event has been fired" + (reason ? ', dismissed by ' + reason : ''));
            _this.loadPrepaidsDefaults();
            _this.unsubscribe();
        }));
    };
    LoanOptionComponent.prototype.loadPrepaidsDefaults = function () {
        var _this = this;
        this.settingsService.getPrepaids().subscribe(function (prepaids) {
            _this.loanOption.prePaids = Object.assign(_this.loanOption.prePaids, prepaids);
            _this.calculate();
        });
    };
    LoanOptionComponent.prototype.showClosingColstsSettings = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_7_app_routes_loan_closing_costs_settings_closing_costs_settings_component__["a" /* ClosingCostsSettingsComponent */]);
        this.subscriptions.push(this.modalService.onHide.subscribe(function (reason) {
            console.log("onHide event has been fired" + (reason ? ', dismissed by ' + reason : ''));
            _this.loadClosingcostsDefaults();
            _this.unsubscribe();
        }));
    };
    LoanOptionComponent.prototype.loadClosingcostsDefaults = function () {
        var _this = this;
        this.settingsService.getClosingCosts().subscribe(function (closingCosts) {
            _this.loanOption.closingCosts = Object.assign(_this.loanOption.closingCosts, closingCosts);
            if (_this.loanOption.closingCosts.length === 0) {
                var c1 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c1.name = 'Discount Points';
                c1.mode = 1;
                c1.rowNo = 1;
                _this.loanOption.closingCosts.push(c1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c2.name = 'Title Insurance';
                c2.mode = 2;
                c2.rowNo = 2;
                _this.loanOption.closingCosts.push(c2);
                //FOR THE FHA and VA 
                var c3 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c3.name = 'UFMIP (FHA)';
                c3.mode = 1;
                c3.rowNo = 3;
                c3.percentage = 1.75;
                _this.loanOption.closingCosts.push(c3);
                var c4 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c4.name = 'VA - (Purchase)';
                c4.mode = 1;
                c4.rowNo = 4;
                c4.percentage = 2.15;
                _this.loanOption.closingCosts.push(c4);
                var c5 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c5.name = 'VA - (Re-Finance)';
                c5.mode = 1;
                c5.rowNo = 5;
                c5.percentage = 0.500;
                _this.loanOption.closingCosts.push(c5);
                //END FHA and VA 
                for (var index = 6; index <= 15; index++) {
                    var c = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                    c.rowNo = index;
                    _this.loanOption.closingCosts.push(c);
                }
            }
            _this.calculateClosingCostVisiblity();
            _this.calculate();
        });
    };
    LoanOptionComponent.prototype.showCreditsSettings = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_9_app_routes_loan_credits_settings_credits_settings_component__["a" /* CreditsSettingsComponent */]);
        this.subscriptions.push(this.modalService.onHide.subscribe(function (reason) {
            console.log("onHide event has been fired" + (reason ? ', dismissed by ' + reason : ''));
            _this.loadCreditsDefaults();
            _this.unsubscribe();
        }));
    };
    LoanOptionComponent.prototype.loadCreditsDefaults = function () {
        var _this = this;
        this.settingsService.getCredits().subscribe(function (credits) {
            _this.loanOption.credits = Object.assign(_this.loanOption.credits, credits);
            _this.calculate();
        });
    };
    LoanOptionComponent.prototype.unsubscribe = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    };
    LoanOptionComponent.prototype.ngOnChanges = function (changes) {
        if (this.loanOption !== undefined) {
            this.calculate();
            console.log('loanOptionDetails ngOnChanges', this.loanOption, changes);
        }
    };
    return LoanOptionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoanOptionComponent.prototype, "viewMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionComponent.prototype, "incomes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionComponent.prototype, "debts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LoanOptionComponent.prototype, "borrowers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["ILoanOption"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["ILoanOption"]) === "function" && _a || Object)
], LoanOptionComponent.prototype, "loanOption", void 0);
LoanOptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loan-option',
        template: __webpack_require__(1247),
        styles: [__webpack_require__(1228)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_routes_loan_shared_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_routes_loan_shared_borrower_service__["f" /* LoanOptionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_routes_loan_shared_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_routes_loan_shared_settings_service__["a" /* SettingsService */]) === "function" && _e || Object])
], LoanOptionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=loan-option.component.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_index__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loan_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_details_basic_details_component__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_routes_loan_shared_settings_service__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_shared_borrower_service__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanComponent = (function () {
    function LoanComponent(loanService, route, settingsService, loanSaveService, messageService) {
        var _this = this;
        this.loanService = loanService;
        this.route = route;
        this.settingsService = settingsService;
        this.loanSaveService = loanSaveService;
        this.messageService = messageService;
        this.loan = null;
        this.viewMode = false;
        this.loan = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["q" /* Loan */]();
        // this.loanSaveService.loans$.subscribe(x => this.loanSave.bind(this));
        this.subscription = this.messageService.getMessage().subscribe(function (message) { _this.loanDetailsSave(); });
    }
    LoanComponent.prototype.loanChange = function (event) {
        this.loan = event;
    };
    LoanComponent.prototype.getloanDetails = function (loanId) {
        var _this = this;
        this.loanService.getById(loanId).subscribe(function (loan) {
            _this.loan = loan;
            _this.loan.loanId = loanId;
            if (_this.loan.totalDebts === undefined) {
                _this.loan.totalDebts = 0;
            }
            if (_this.loan.borrowers === undefined || _this.loan.borrowers.length === 0) {
                _this.loan.borrowers = [];
                var borrower = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["o" /* Borrower */]();
                borrower.type = 'B';
                borrower.borrowerId = 'B';
                borrower.isActive = true;
                _this.loan.borrowers.push(borrower);
            }
            if (_this.loan.incomes === undefined || _this.loan.incomes.length === 0) {
                _this.loan.incomes = [];
                var income = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["m" /* Income */]();
                income.isActive = true;
                _this.loan.incomes.push(income);
            }
            if (_this.loan.debts === undefined || _this.loan.debts.length === 0) {
                _this.loan.debts = [];
                var debt = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["l" /* Debt */]();
                debt.isActive = true;
                _this.loan.debts.push(debt);
            }
            if (_this.loan.loanOptions === undefined || _this.loan.loanOptions.length === 0) {
                _this.loan.loanOptions = [];
                var loanOption = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["d" /* LoanOption */]();
                loanOption.optionNo = 1;
                _this.loadclosingcostsDefaults(loanOption);
                _this.loadPrepaidsDefaults(loanOption);
                _this.loadCreditsDefaults(loanOption);
                _this.loan.loanOptions.push(loanOption);
            }
        });
    };
    LoanComponent.prototype.loadPrepaidsDefaults = function (loanOption) {
        this.settingsService.getPrepaids().subscribe(function (prepaids) {
            loanOption.prePaids = Object.assign(loanOption.prePaids, prepaids);
        });
    };
    LoanComponent.prototype.loadCreditsDefaults = function (loanOption) {
        this.settingsService.getCredits().subscribe(function (credits) {
            loanOption.credits = Object.assign(loanOption.credits, credits);
        });
    };
    LoanComponent.prototype.loanDetailsSave = function () {
        console.log('loan sve');
        this.loanService.save(this.loan).subscribe(function (x) {
            console.log('loan saved');
        });
    };
    LoanComponent.prototype.ngOnInit = function () {
        // const k = this.route.params.subscribe(params => {
        //     debugger;
        //     const l = +params['loanId']; // (+) converts string 'id' to a number
        var _this = this;
        //     // In a real app: dispatch action to load the details here.
        // });
        this.route.params.subscribe(function (params) {
            if (params.loanId) {
                _this.getloanDetails(+params.loanId);
                var path = _this.route.snapshot.url[0].path;
                if (path === 'customer-view') {
                    _this.viewMode = true;
                }
            }
        });
        // this.route.data.subscribe(
        //     (data: { loan: Loan }) => {
        //         if (data.loan) {
        //             this.loan = data.loan;
        //             this.basicDetails.basicDetailsChange();
        //         }
        //     }
        // );
        // this.loanService.getById(5).subscribe((loan) => {
        //     this.loan = Object.assign(this.loan, loan);
        //     if (this.loan.incomes.length === 0) {
        //         const income = new Income();
        //         income.isActive = true;
        //         this.loan.incomes.push(income);
        //     }
        //     if (this.loan.debts.length === 0) {
        //         const debt = new Debt();
        //         debt.isActive = true;
        //         this.loan.debts.push(debt);
        //     }
        //     if (this.loan.loanOptions.length === 0) {
        //         const loanOption = new LoanOption();
        //         loanOption.optionNo = 1;
        //         this.loan.loanOptions.push(loanOption);
        //     }
        //     this.basicDetails.basicDetailsChange();
        // });
    };
    LoanComponent.prototype.loadclosingcostsDefaults = function (loanOption) {
        this.settingsService.getClosingCosts().subscribe(function (closingCosts) {
            loanOption.closingCosts = Object.assign(loanOption.closingCosts, closingCosts);
            if (loanOption.closingCosts.length === 0) {
                var c1 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c1.name = 'Discount Points';
                c1.mode = 1;
                c1.rowNo = 1;
                loanOption.closingCosts.push(c1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c2.name = 'Title Insurance';
                c2.mode = 2;
                c2.rowNo = 2;
                loanOption.closingCosts.push(c2);
                //FOR THE FHA and VA 
                var c3 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c3.name = 'UFMIP (FHA)';
                c3.mode = 1;
                c3.rowNo = 3;
                c3.value = 1.75;
                loanOption.closingCosts.push(c3);
                var c4 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c4.name = 'VA - (Purchase)';
                c4.mode = 1;
                c4.rowNo = 4;
                c4.value = 2.15;
                loanOption.closingCosts.push(c4);
                var c5 = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                c5.name = 'VA - (Re-Finance)';
                c5.mode = 1;
                c5.rowNo = 5;
                c5.value = 0.500;
                loanOption.closingCosts.push(c5);
                //END FHA and VA 
                for (var index = 6; index <= 15; index++) {
                    var c = new __WEBPACK_IMPORTED_MODULE_1__shared_models_index__["c" /* ClosingCost */]();
                    c.rowNo = index;
                    loanOption.closingCosts.push(c);
                }
            }
        });
    };
    LoanComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return LoanComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__basic_details_basic_details_component__["a" /* BasicDetailsComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__basic_details_basic_details_component__["a" /* BasicDetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__basic_details_basic_details_component__["a" /* BasicDetailsComponent */]) === "function" && _a || Object)
], LoanComponent.prototype, "basicDetails", void 0);
LoanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(1248),
        styles: [__webpack_require__(1229)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_loan_service__["a" /* LoanService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_routes_loan_shared_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_routes_loan_shared_settings_service__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_shared_borrower_service__["a" /* LoanSaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_shared_borrower_service__["a" /* LoanSaveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_shared_borrower_service__["b" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_routes_loan_shared_borrower_service__["b" /* MessageService */]) === "function" && _f || Object])
], LoanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=loan.component.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Borrower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Income; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Debt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ShareLoanModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Loan; });
var Borrower = (function () {
    function Borrower() {
        this.email = '';
        this.name = '';
        this.phone = null;
        this.creditScore = 0;
    }
    return Borrower;
}());

var Income = (function () {
    function Income() {
        this.incomeSource = '';
        this.frequency = '';
        this.borrowerId = 'B';
        this.amount = null;
    }
    return Income;
}());

var Debt = (function () {
    function Debt() {
        this.description = '';
        this.frequency = '';
        this.borrowerId = 'B';
        this.amount = null;
    }
    return Debt;
}());

var getMoney = function (value) {
    value = value || 0;
    return (Math.round(parseFloat(value) * 100)) / 100;
};
var ShareLoanModel = (function () {
    function ShareLoanModel() {
        this.email = '';
        this.loanLink = '';
    }
    return ShareLoanModel;
}());

var Loan = (function () {
    function Loan() {
        // if (loan) {
        //     this.preApprovalCode = loan.preApprovalCode || '';
        //     this.borrowers = loan.borrowers || new Array<Borrower>();
        //     this.incomes = loan.incomes || new Array<Income>();
        //     this.debts = loan.debts || new Array<Debt>();
        //     this.loanOptions = loan.loanOptions || new Array<LoanOption>();
        //     this.totalIncome = getMoney(loan.totalIncome) || 0;
        //     this.totalDebts = getMoney(loan.totalDebts) || 0;
        //     this.qualifyingCreditScore = loan.qualifyingCreditScore || 0;
        //     this.stateId = loan.stateId || 0;
        // }
        // else {
        this.preApprovalCode = "";
        this.borrowers = new Array();
        this.incomes = new Array();
        this.debts = new Array();
        this.loanOptions = new Array();
        this.totalIncome = 0;
        this.totalDebts = 0;
        this.qualifyingCreditScore = 0;
        this.stateId = 0;
        // }
    }
    return Loan;
}());

//# sourceMappingURL=borrower.model.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Mortgage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Credits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrePaids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoanOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ClosingCost; });
var getMoney = function (value) {
    value = value || 0;
    return (Math.round(parseFloat(value) * 100)) / 100;
};
var Mortgage = (function () {
    function Mortgage() {
        this.rate = 0;
        this.points = 0;
        this.term = 0;
        this.loanAmount = 0;
        this.loanBaseAmount = 0;
        this.piti = 0;
        this.pAndI = 0;
    }
    return Mortgage;
}());

var Credits = (function () {
    function Credits() {
        this.credit1Name = '';
        this.credit1Amount = null;
        this.credit2Name = '';
        this.credit2Amount = null;
        this.credit3Name = '';
        this.credit3Amount = null;
        this.credit4Name = '';
        this.credit4Amount = null;
    }
    return Credits;
}());

var PrePaids = (function () {
    function PrePaids() {
        this.monthsOfTax = 0;
        this.monthsOfInsurance = 0;
        this.daysOfInterest = 0;
    }
    return PrePaids;
}());

var LoanOption = (function () {
    function LoanOption() {
        this.closingCosts = [];
        this.salesPrice = 0;
        this.hoa = 0;
        this.other = 0;
        this.dti = 0;
        this.firstMortgage = new Mortgage();
        this.secondMortgage = new Mortgage();
        this.prePaids = new PrePaids();
        this.credits = new Credits();
        this.loanMode = true;
        this.loanType = 1;
        this.miType = 1;
        this.ltv = 0;
        this.cltv = 0;
        var c1 = new ClosingCost();
        c1.name = 'Discount Points';
        c1.mode = 1;
        c1.rowNo = 1;
        this.closingCosts.push(c1);
        var c2 = new ClosingCost();
        c2.name = 'Title Insurance';
        c2.mode = 2;
        c2.rowNo = 2;
        this.closingCosts.push(c2);
        //FOR THE FHA and VA 
        var c3 = new ClosingCost();
        c3.name = 'UFMIP (FHA)';
        c3.mode = 1;
        c3.rowNo = 3;
        c3.percentage = 1.75;
        this.closingCosts.push(c3);
        var c4 = new ClosingCost();
        c4.name = 'VA - (Purchase)';
        c4.mode = 1;
        c4.rowNo = 4;
        c4.percentage = 2.15;
        this.closingCosts.push(c4);
        var c5 = new ClosingCost();
        c5.name = 'VA - (Re-Finance)';
        c5.mode = 1;
        c5.rowNo = 5;
        c5.percentage = 0.500;
        this.closingCosts.push(c5);
        //END FHA and VA 
        for (var index = 6; index <= 15; index++) {
            var c = new ClosingCost();
            c.rowNo = index;
            this.closingCosts.push(c);
        }
        this.totalClosingCosts = 0;
        this.cashToClose = 0;
        this.apr = 0;
        this.tax = getMoney(6715 / 12);
        this.ins = getMoney(850 / 12);
        this.taxVerified = false;
        this.insVerified = false;
        this.hoaVerified = false;
        this.miVerified = false;
        this.expiry = null;
        // this.expiry = new Date().toLocaleDateString();
        // this.term = 0;      
    }
    return LoanOption;
}());

var ClosingCost = (function () {
    /**
     *
     */
    function ClosingCost(param) {
        this.isVisible = true;
        if (param) {
            this.name = param.name || '';
            this.type = param.type || 1;
            this.value = param.value || null;
            this.percentage = param.percentage || null;
            this.mode = param.mode || 2;
            this.rowNo = param.rowNo;
            this.isApr = param.isApr;
        }
        else {
            this.name = '';
            this.type = 1;
            // this.value = 0;
            this.percentage = null;
            this.mode = 2;
            this.value = null;
            this.isApr = false;
        }
    }
    return ClosingCost;
}());

//# sourceMappingURL=loan-option.model.js.map

/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoanTypeList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAN_TYPE_LIST; });
/* unused harmony export MITypeList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MI_TYPE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TitleInsurance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TitleInsuranceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BpmiAdjustment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Bpmi; });
var getMoney = function (value) {
    value = value || 0;
    return (Math.round(parseFloat(value) * 100)) / 100;
};
var LoanTypeList = (function () {
    function LoanTypeList(id, name, type, firtstMortgagePercentage, secondMortgagePercentage) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.firtstMortgagePercentage = firtstMortgagePercentage;
        this.secondMortgagePercentage = secondMortgagePercentage;
    }
    return LoanTypeList;
}());

var LOAN_TYPE_LIST = [
    new LoanTypeList(1, 'Conv | 3% Down', 'CONV', 3, 0),
    new LoanTypeList(2, 'Conv | 5% Down', 'CONV', 5, 0),
    new LoanTypeList(3, 'Conv | 10% Down', 'CONV', 10, 0),
    new LoanTypeList(4, 'Conv | 20% Down', 'CONV', 20, 0),
    new LoanTypeList(5, 'Conv | 80 - 15 - 5', 'CONV', 80, 15),
    new LoanTypeList(6, 'Conv | 80 - 10 - 10', 'CONV', 80, 10),
    new LoanTypeList(7, 'Conv | Other', 'CONV', 0, 0),
    new LoanTypeList(8, 'FHA | 3.5% Down', 'FHA', 3.5, 0),
    new LoanTypeList(9, 'FHA | 10% Down', 'FHA', 10, 0),
    new LoanTypeList(10, 'FHA | Other', 'FHA', 0, 0),
    new LoanTypeList(11, 'VA | 0% Down', 'VA', 0, 0),
    new LoanTypeList(12, 'VA | Other', 'VA', 0, 0),
    new LoanTypeList(13, 'Special Program | 0% Down', 'Special Program', 0, 0),
    new LoanTypeList(14, 'Special Program | Other', 'Special Program', 0, 0),
    new LoanTypeList(15, '100%', '100%', 100, 0),
];
var MITypeList = (function () {
    function MITypeList(id, name) {
        this.id = id;
        this.name = name;
    }
    return MITypeList;
}());

var MI_TYPE_LIST = [
    new MITypeList(1, 'MONTHLY'),
    new MITypeList(2, 'TAMI'),
    new MITypeList(3, 'NONE')
];
var TitleInsurance = (function () {
    function TitleInsurance(param) {
        if (param) {
            this.basicPremium = getMoney(param.basicPremium);
            this.policiesUpToAndIncluding = getMoney(param.policiesUpToAndIncluding);
        }
    }
    return TitleInsurance;
}());

var TitleInsuranceRange = (function () {
    function TitleInsuranceRange(param) {
        if (param) {
            this.policyRangeFrom = getMoney(param.policyRangeFrom);
            this.policyRangeTo = getMoney(param.policyRangeTo);
            this.subtract = getMoney(param.subtract);
            this.multiplyBy = getMoney(param.multiplyBy);
            this.add = getMoney(param.add);
        }
    }
    return TitleInsuranceRange;
}());

var BpmiAdjustment = (function () {
    function BpmiAdjustment(param) {
        if (param) {
            this.adjustmentName = param.adjustmentName;
            this.creditScoreFrom = getMoney(param.creditScoreFrom);
            this.creditScoreTo = getMoney(param.creditScoreTo);
            this.bpmi = getMoney(param.bpmi);
        }
    }
    return BpmiAdjustment;
}());

var Bpmi = (function () {
    function Bpmi(param) {
        if (param) {
            this.ltvFrom = getMoney(param.ltvFrom);
            this.ltvTo = getMoney(param.ltvTo);
            this.creditScoreFrom = getMoney(param.creditScoreFrom);
            this.creditScoreTo = getMoney(param.creditScoreTo);
            this.bpmi = getMoney(param.bpmi);
            this.termFrom = param.termFrom === null ? null : +param.termFrom;
            this.termTo = param.termTo === null ? null : +param.termTo;
        }
    }
    return Bpmi;
}());

//# sourceMappingURL=lookups.model.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(1), __webpack_require__(17)) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular2-bootstrap-switch'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var BootstrapSwitchComponent = (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function BootstrapSwitchComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // public properties
        this.status = false;
        this.statusChange = new _angular_core.EventEmitter();
        this.onText = 'on';
        this.offText = 'off';
        this.onColor = 'bootstrap-switch-info';
        this.offColor = 'bootstrap-switch-default';
        this.size = 'normal';
        this.disabled = false;
        this._statusStr = 'false';
        // styles properties
        this._onColor = 'bootstrap-switch-info';
        this._offColor = 'bootstrap-switch-default';
        this._minWidth = 60;
        this._sizeClass = 'bootstrap-switch-normal';
        this._disabledClass = '';
        this._needCalculateWidth = false;
        this._calculateSize();
    }
    /**
     * @return {?}
     */
    BootstrapSwitchComponent.prototype.toggleStatus = function () {
        if (!this.disabled) {
            this.status = !this.status;
            this._statusStr = this.status.toString();
            this.statusChange.emit(this.status);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    BootstrapSwitchComponent.prototype._setDisabled = function (disabled) {
        if (disabled) {
            this._disabledClass = 'bootstrap-switch-disabled';
        }
        else {
            this._disabledClass = '';
        }
    };
    /**
     * @param {?} switchLabel
     * @param {?} value
     * @return {?}
     */
    BootstrapSwitchComponent.prototype._setColor = function (switchLabel, value) {
        var /** @type {?} */ color = '';
        var /** @type {?} */ defaultColor = 'bootstrap-switch-info';
        if (switchLabel === 'off') {
            defaultColor = 'bootstrap-switch-default';
        }
        switch (value) {
            case 'default':
                color = defaultColor;
                break;
            case 'blue':
                color = 'bootstrap-switch-primary';
                break;
            case 'sky-blue':
                color = 'bootstrap-switch-info';
                break;
            case 'red':
                color = 'bootstrap-switch-danger';
                break;
            case 'yellow':
                color = 'bootstrap-switch-warning';
                break;
            case 'green':
                color = 'bootstrap-switch-success';
                break;
            case 'gray':
                color = 'bootstrap-switch-default';
                break;
        }
        if (switchLabel === 'off') {
            this._offColor = color;
        }
        else {
            this._onColor = color;
        }
    };
    /**
     * @return {?}
     */
    BootstrapSwitchComponent.prototype._calculateWidth = function () {
        if (this._onSpan) {
            this.renderer.setElementStyle(this._onSpan.nativeElement, 'width', '');
            this.renderer.setElementStyle(this._midSpan.nativeElement, 'width', '');
            this.renderer.setElementStyle(this._offSpan.nativeElement, 'width', '');
            this.renderer.setElementStyle(this._main.nativeElement, "width", "");
            var /** @type {?} */ width = Math.max(this._onSpan.nativeElement.clientWidth, this._offSpan.nativeElement.clientWidth, this._minWidth);
            this.renderer.setElementStyle(this._onSpan.nativeElement, 'width', width.toString() + 'px');
            this.renderer.setElementStyle(this._midSpan.nativeElement, 'width', (width - 10).toString() + 'px');
            this.renderer.setElementStyle(this._offSpan.nativeElement, 'width', width.toString() + 'px');
            this.renderer.setElementStyle(this._container.nativeElement, 'width', (width * 3).toString() + 'px');
            this.renderer.setElementStyle(this._main.nativeElement, 'width', (width * 2).toString() + 'px');
        }
    };
    /**
     * @return {?}
     */
    BootstrapSwitchComponent.prototype._calculateSize = function () {
        switch (this.size) {
            case 'mini':
                this._sizeClass = 'bootstrap-switch-mini';
                this._minWidth = 25;
                break;
            case 'small':
                this._sizeClass = 'bootstrap-switch-small';
                this._minWidth = 30;
                break;
            case 'normal':
                this._sizeClass = 'bootstrap-switch-normal';
                this._minWidth = 60;
                break;
            case 'large':
                this._sizeClass = 'bootstrap-switch-large';
                this._minWidth = 80;
                break;
        }
        this._needCalculateWidth = true;
    };
    /**
     * @return {?}
     */
    BootstrapSwitchComponent.prototype.ngAfterViewChecked = function () {
        if (this._needCalculateWidth) {
            this._calculateWidth();
            this._needCalculateWidth = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BootstrapSwitchComponent.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ log = [];
        for (var /** @type {?} */ propName in changes) {
            if (changes.hasOwnProperty(propName)) {
                var /** @type {?} */ changedProp = changes[propName];
                var /** @type {?} */ from = changedProp.previousValue;
                var /** @type {?} */ value = changedProp.currentValue;
                switch (propName) {
                    case 'onText':
                        this._needCalculateWidth = true;
                        break;
                    case 'offText':
                        this._needCalculateWidth = true;
                        break;
                    case 'onColor':
                        this._setColor('on', value);
                        break;
                    case 'offColor':
                        this._setColor('off', value);
                        break;
                    case 'status':
                        this._statusStr = value.toString();
                        break;
                    case 'size':
                        this._calculateSize();
                        break;
                    case 'disabled':
                        this._setDisabled(value);
                        break;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    BootstrapSwitchComponent.prototype.ngAfterViewInit = function () {
        // this._calculateSize('normal');
        // this._calculateWidth();
    };
    return BootstrapSwitchComponent;
}());
BootstrapSwitchComponent.decorators = [
    { type: _angular_core.Component, args: [{
                encapsulation: _angular_core.ViewEncapsulation.None,
                selector: 'switch',
                template: "<div #main class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-off\" [ngClass]=\"_sizeClass + ' ' + _disabledClass\" (click)=\"toggleStatus()\">\n\t<div #container class=\"bootstrap-switch-container\"  [@statusChange]=\"_statusStr\" >\n        <span #on class=\"bootstrap-switch-handle-on\" [ngClass]=\"_onColor\" [ngStyle]=\"{'min-width': _minWidth +'px'}\">{{onText}}</span>\n        <span #mid class=\"bootstrap-switch-label\"></span>\n        <span #off class=\"bootstrap-switch-handle-off \" [ngClass]=\"_offColor\">{{offText}}</span>\n    </div>\n</div>\n",
                styles: ["/* ========================================================================\n  * bootstrap-switch - v3.3.2\n  * http://www.bootstrap-switch.org\n  * ========================================================================\n  * Copyright 2012-2013 Mattia Larentis\n  *\n  * ========================================================================\n  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  * you may not use this file except in compliance with the License.\n  * You may obtain a copy of the License at\n  *\n  *     http://www.apache.org/licenses/LICENSE-2.0\n  *\n  * Unless required by applicable law or agreed to in writing, software\n  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  * See the License for the specific language governing permissions and\n  * limitations under the License.\n  * ========================================================================\n  */\n\n .bootstrap-switch {\n   display: inline-block;\n   direction: ltr;\n   cursor: pointer;\n   border-radius: 4px;\n   border: 1px solid;\n   border-color: #cccccc;\n   position: relative;\n   text-align: left;\n   overflow: hidden;\n   line-height: 8px;\n   z-index: 0;\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n   vertical-align: middle;\n   -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n   transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n }\n .bootstrap-switch .bootstrap-switch-container {\n   display: inline-block;\n   top: 0;\n   border-radius: 4px;\n   -webkit-transform: translate3d(0, 0, 0);\n   transform: translate3d(0, 0, 0);\n   background: #fff;\n }\n .bootstrap-switch .bootstrap-switch-handle-on,\n .bootstrap-switch .bootstrap-switch-handle-off,\n .bootstrap-switch .bootstrap-switch-label {\n   -webkit-box-sizing: border-box;\n   -moz-box-sizing: border-box;\n   box-sizing: border-box;\n   cursor: pointer;\n   display: inline-block !important;\n   height: 100%;\n   padding: 6px 12px;\n   font-size: 14px;\n   line-height: 20px;\n }\n .bootstrap-switch .bootstrap-switch-handle-on,\n .bootstrap-switch .bootstrap-switch-handle-off {\n   text-align: center;\n   z-index: 1;\n   white-space: nowrap;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {\n   color: #fff;\n   background: #428bca;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {\n   color: #fff;\n   background: #5bc0de;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {\n   color: #fff;\n   background: #5cb85c;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {\n   background: #f0ad4e;\n   color: #fff;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {\n   color: #fff;\n   background: #d9534f;\n }\n .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,\n .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {\n   color: #000;\n   background: #eeeeee;\n }\n .bootstrap-switch .bootstrap-switch-label {\n   text-align: center;\n   margin-top: -1px;\n   margin-bottom: -1px;\n   z-index: 100;\n   color: #333333;\n   background: #ffffff;\n }\n .bootstrap-switch .bootstrap-switch-handle-on {\n   border-bottom-left-radius: 3px;\n   border-top-left-radius: 3px;\n }\n .bootstrap-switch .bootstrap-switch-handle-off {\n   border-bottom-right-radius: 3px;\n   border-top-right-radius: 3px;\n }\n .bootstrap-switch input[type='radio'],\n .bootstrap-switch input[type='checkbox'] {\n   position: absolute !important;\n   top: 0;\n   left: 0;\n   opacity: 0;\n   filter: alpha(opacity=0);\n   z-index: -1;\n }\n .bootstrap-switch input[type='radio'].form-control,\n .bootstrap-switch input[type='checkbox'].form-control {\n   height: auto;\n }\n .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n   padding: 1px 5px;\n   font-size: 12px;\n   line-height: 1.5;\n }\n .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n   padding: 5px 10px;\n   font-size: 12px;\n   line-height: 1.5;\n }\n .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n   padding: 6px 16px;\n   font-size: 18px;\n   line-height: 1.33;\n }\n .bootstrap-switch.bootstrap-switch-disabled,\n .bootstrap-switch.bootstrap-switch-readonly,\n .bootstrap-switch.bootstrap-switch-indeterminate {\n   cursor: default !important;\n }\n .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,\n .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,\n .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,\n .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,\n .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {\n   opacity: 0.5;\n   filter: alpha(opacity=50);\n   cursor: default !important;\n }\n .bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n   -webkit-transition: margin-left 0.5s;\n   transition: margin-left 0.5s;\n }\n .bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n   border-bottom-left-radius: 0;\n   border-top-left-radius: 0;\n   border-bottom-right-radius: 3px;\n   border-top-right-radius: 3px;\n }\n .bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n   border-bottom-right-radius: 0;\n   border-top-right-radius: 0;\n   border-bottom-left-radius: 3px;\n   border-top-left-radius: 3px;\n }\n .bootstrap-switch.bootstrap-switch-focused {\n   border-color: #66afe9;\n   outline: 0;\n   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n   box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n }\n .bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label,\n .bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label {\n   border-bottom-right-radius: 3px;\n   border-top-right-radius: 3px;\n }\n .bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label,\n .bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label {\n   border-bottom-left-radius: 3px;\n   border-top-left-radius: 3px;\n }"],
                animations: [
                    _angular_core.trigger('statusChange', [
                        _angular_core.state('false', _angular_core.style({ transform: 'translateX(-33.333%)' })),
                        _angular_core.state('true', _angular_core.style({ transform: 'translateX(0)' })),
                        _angular_core.transition('true <=> false', _angular_core.animate('200ms'))
                    ])
                ]
            },] },
];
/**
 * @nocollapse
 */
BootstrapSwitchComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer, },
]; };
BootstrapSwitchComponent.propDecorators = {
    '_onSpan': [{ type: _angular_core.ViewChild, args: ['on',] },],
    '_offSpan': [{ type: _angular_core.ViewChild, args: ['off',] },],
    '_midSpan': [{ type: _angular_core.ViewChild, args: ['mid',] },],
    '_container': [{ type: _angular_core.ViewChild, args: ['container',] },],
    '_main': [{ type: _angular_core.ViewChild, args: ['main',] },],
    'status': [{ type: _angular_core.Input },],
    'statusChange': [{ type: _angular_core.Output },],
    'onText': [{ type: _angular_core.Input },],
    'offText': [{ type: _angular_core.Input },],
    'onColor': [{ type: _angular_core.Input },],
    'offColor': [{ type: _angular_core.Input },],
    'size': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
};

var BootstrapSwitchModule = (function () {
    function BootstrapSwitchModule() {
    }
    /**
     * @return {?}
     */
    BootstrapSwitchModule.forRoot = function () {
        return {
            ngModule: BootstrapSwitchModule,
            providers: []
        };
    };
    return BootstrapSwitchModule;
}());
BootstrapSwitchModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    BootstrapSwitchComponent,
                ],
                exports: [
                    BootstrapSwitchComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
BootstrapSwitchModule.ctorParameters = function () { return []; };

exports.BootstrapSwitchModule = BootstrapSwitchModule;
exports.BootstrapSwitchComponent = BootstrapSwitchComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".apr-circle-active {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #5d9cec;\n  border: 2px solid #5d9cec;\n  color: white;\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  margin-top: 5px;\n  cursor: pointer; }\n\n.apr-circle {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #c00c15;\n  border: 2px solid #c00c15;\n  color: white;\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  margin-top: 5px;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".apr-circle-active {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #5d9cec;\n  border: 2px solid #5d9cec;\n  color: white;\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  margin-top: 5px;\n  cursor: pointer; }\n\n.apr-circle {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #c00c15;\n  border: 2px solid #c00c15;\n  color: white;\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  margin-top: 5px;\n  cursor: pointer; }\n\n.verified-circle {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #5d9cec;\n  border: 2px solid #5d9cec;\n  color: white;\n  text-align: center;\n  font: 12px Arial, sans-serif;\n  margin-top: 5px; }\n\n.estimated-circle {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  /* padding: 8px; */\n  background: #c00c15;\n  border: 2px solid #c00c15;\n  color: white;\n  text-align: center;\n  font: 12px Arial, sans-serif;\n  margin-top: 5px; }\n\n.bootstrap-switch-container {\n  font-size: 13px !important; }\n\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  font-size: 13px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.lc-carousel-btn {\n  background: rgba(0, 0, 0, 0.5); }\n\n.lc-carousel-btn.next {\n  margin-right: -25px; }\n\n.lc-carousel-btn.previous {\n  margin-left: -25px; }\n\n@media (min-width: 992px) {\n  .with-carousel {\n    width: 49%; }\n  .with-carousel.right {\n    float: right; } }\n\n.loan-option .collapser {\n  background: #eee;\n  border-bottom: #ccc 1px solid;\n  padding: 8px 0;\n  cursor: pointer;\n  line-height: 28px; }\n\n.loan-option .collapser:hover {\n  background: #ddd; }\n\n.loan-option .collapse {\n  padding: 15px 0; }\n\n.loan-option input[type=\"range\"] {\n  margin-top: 6px; }\n\n.loan-option .closing-costs input[type=\"text\"] {\n  margin-bottom: 3px; }\n\n.the-icon {\n  margin-right: 5px; }\n\n.row.loan-option-total {\n  padding: 15px 0;\n  border-top: dashed 1px #ccc; }\n\n.lc-carousel-btn span.affix {\n  position: fixed; }\n\n.sub-div.first-mortage {\n  position: relative;\n  top: 96px;\n  left: -10px;\n  z-index: 100;\n  background: #fff;\n  margin-top: -80px; }\n\n.sub-div-footer {\n  padding-top: 90px;\n  padding-bottom: 5px;\n  background: #DCE775;\n  border-radius: 5px; }\n\n.sub-div-footer .tag {\n  width: 32.5%;\n  display: inline-block;\n  padding-left: 10px;\n  font-size: 11.9px; }\n\n.second-mortage-header {\n  background: #DCE775;\n  height: 2px;\n  margin-top: 15px;\n  position: relative;\n  z-index: 100; }\n\n.second-mortage-header h5 {\n  margin-top: -6px;\n  font-weight: normal;\n  background: #FFF;\n  float: left;\n  margin-bottom: 5px; }\n\n.cal-input {\n  padding: 3px 4px !important; }\n\n.sec-collapse {\n  padding-top: 0px !important; }\n\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  font-size: 13px !important; }\n\n.loan-option-new {\n  padding-top: 25%; }\n\n.loan-option-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .loan-option-container .loan-option-section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer; }\n    .loan-option-container .loan-option-section:first-child {\n      margin-right: 3px; }\n    .loan-option-container .loan-option-section .loan-option-section-nav {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      max-width: 25px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #bfbfbf; }\n      .loan-option-container .loan-option-section .loan-option-section-nav a {\n        color: white; }\n    .loan-option-container .loan-option-section .loan-option-section-nav:hover {\n      background: #8c8c8c; }\n    .loan-option-container .loan-option-section .loan-option-section-content {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n\n/**\n  * bootstrap-switch - Turn checkboxes and radio buttons into toggle switches.\n  *\n  * @version v3.3.4\n  * @homepage https://bttstrp.github.io/bootstrap-switch\n  * @author Mattia Larentis <mattia@larentis.eu> (http://larentis.eu)\n  * @license Apache-2.0\n  */\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; }\n\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-block;\n  top: 0;\n  border-radius: 4px;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.bootstrap-switch .bootstrap-switch-handle-off, .bootstrap-switch .bootstrap-switch-handle-on, .bootstrap-switch .bootstrap-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 20px; }\n\n.bootstrap-switch .bootstrap-switch-handle-off, .bootstrap-switch .bootstrap-switch-handle-on {\n  text-align: center;\n  z-index: 1; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary {\n  color: #fff;\n  background: #337ab7; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info {\n  color: #fff;\n  background: #5bc0de; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success {\n  color: #fff;\n  background: #5cb85c; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning {\n  background: #f0ad4e;\n  color: #fff; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger {\n  color: #fff;\n  background: #d9534f; }\n\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default, .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default {\n  color: #000;\n  background: #eee; }\n\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  z-index: 100;\n  color: #333;\n  background: #fff; }\n\n.bootstrap-switch span::before {\n  content: \"\\200B\"; }\n\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.bootstrap-switch .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.bootstrap-switch input[type=radio], .bootstrap-switch input[type=checkbox] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  margin: 0;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  visibility: hidden; }\n\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  padding: 6px 16px;\n  font-size: 18px;\n  line-height: 1.3333333; }\n\n.bootstrap-switch.bootstrap-switch-disabled, .bootstrap-switch.bootstrap-switch-indeterminate, .bootstrap-switch.bootstrap-switch-readonly {\n  cursor: default !important; }\n\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label, .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label, .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off, .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on, .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label {\n  opacity: .5;\n  filter: alpha(opacity=50);\n  cursor: default !important; }\n\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  transition: margin-left .5s; }\n\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n  border-radius: 0 3px 3px 0; }\n\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n  border-radius: 3px 0 0 3px; }\n\n.bootstrap-switch.bootstrap-switch-focused {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label, .bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label, .bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n  .home-container .home-logo {\n    width: 240px; }\n  @media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n\ndatetime-popup > .dropdown .glyphicon {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\ndatetime-popup > .dropdown timepicker {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\ndatetime-popup > .dropdown .bg-faded {\n  border: 0;\n  background-color: #fff; }\n\ndatetime-popup > .dropdown datepicker .btn-secondary {\n  background-color: #fff;\n  border-color: #dddddd;\n  color: #000; }\n\ndatetime-popup > .dropdown datepicker button.active {\n  background-color: #ddd; }\n\ndatetime-popup > .dropdown .glyphicon.glyphicon-remove-circle:before {\n  content: \"\\F05C\"; }\n\ndatetime-popup > .dropdown .glyphicon.glyphicon-chevron-down:before {\n  content: \"\\F078\"; }\n\ndatetime-popup > .dropdown .glyphicon.glyphicon-chevron-up:before {\n  content: \"\\F077\"; }\n\ndatetime-popup > .dropdown .glyphicon.glyphicon-chevron-left:before {\n  content: \"\\F053\"; }\n\ndatetime-popup > .dropdown .glyphicon.glyphicon-chevron-right:before {\n  content: \"\\F054\"; }\n\ndatetime-popup > .dropdown .glyphicon.hidden {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1204));
__export(__webpack_require__(1232));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var currency_mask_directive_1 = __webpack_require__(1204);
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__(1235);
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
    }
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    //TODO: Check if is possible to get selectionEnd instead selectionStart in all devices.
    InputHandler.prototype.handleInput = function (event, isGalaxy) {
        var keyCode = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionStart = isGalaxy ? this.inputService.inputSelection.selectionEnd : this.inputService.inputSelection.selectionStart;
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength != rawValueSelectionStart || Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            this.inputService.removeNumber(8);
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == 0) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == this.inputService.rawValue.length) {
                this.setValue(0);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        switch (keyCode) {
            case undefined:
            case 9:
            case 13:
                return;
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers) {
                    var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                    if (selectionRangeLength == this.inputService.rawValue.length) {
                        this.setValue(0);
                    }
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        setTimeout(function () {
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.selection.createRange();
                if (range && range.parentElement() == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    startRange.moveToBookmark(range.getBookmark());
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__(1234);
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        var value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            this.rawValue = "-" + this.rawValue;
        }
    };
    InputService.prototype.changeToPositive = function () {
        this.rawValue = this.rawValue.replace("-", "");
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        selectionEnd = keyCode == 46 || keyCode == 63272 ? selectionEnd + 1 : selectionEnd;
        selectionStart = keyCode == 8 ? selectionStart - 1 : selectionStart;
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ 1237:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Mortgage Amortization</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n            <app-amortization-schedule [loanOptionDetails]=\"LoanOptionLeft\"> </app-amortization-schedule>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <app-amortization-schedule [loanOptionDetails]=\"LoanOptionRight\"> </app-amortization-schedule>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\r\n</div>"

/***/ }),

/***/ 1238:
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-bordered table-hover\" *ngIf=\"loanOptionDetails\">\r\n        <thead>\r\n            <tr>\r\n                <th colspan=\"6\" class=\"text-center\" style=\"background-color: #fafbfc;\">\r\n                    Loan Option {{loanOptionDetails.optionNo}}\r\n                    <a href=\"#\">\r\n                        <i class=\"fa fa-external-link pull-right\"></i>\r\n                    </a>\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Beginning Balance</th>\r\n                <th>Payment</th>\r\n                <th>Principal</th>\r\n                <th>Interest</th>\r\n                <th>Ending Balance</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"output\">\r\n            <tr *ngFor=\"let schedule of output.schedule;let i=index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{schedule.Remaining}}</td>\r\n                <td>{{output.payment}}</td>\r\n                <td>{{schedule.Principle}}</td>\r\n                <td>{{schedule.Interest}}</td>\r\n                <td>{{schedule.EndingBalance}}</td>\r\n            </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ 1239:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <form method=\"post\" [formGroup]=\"basicDetailForm\" action=\"#\" data-parsley-validate=\"\" novalidate=\"\" class=\"form-horizontal\">\r\n        <div class=\"panel-heading\" [class.panel-heading-collapsed]=\"!borrowerCollapsed\">\r\n            <legend class=\"no-margin-legend\">Borrower Details\r\n                <a (click)=\"borrowerCollapsed = !borrowerCollapsed\" data-tool=\"panel-collapse\" data-toggle=\"tooltip\" title=\"\" class=\"pull-right data-toggle-2\"\r\n                    data-original-title=\"Expand this section\" style=\"padding-right: 5px;\">\r\n                                <em class=\"fa\" [class.fa-minus]=\"borrowerCollapsed\" [class.fa-plus]=\"!borrowerCollapsed\"></em>\r\n                            </a>\r\n\r\n                <div class=\"form-group col-md-6 pull-right\" style=\"margin-top: -7px; margin-right: 0px;\">\r\n                    <label class=\"col-sm-5 control-label sec-collapse\" style=\"font-size: 14px;\">Qualifying Credit Score\r\n                                    *</label>\r\n                    <div class=\"col-sm-7\">\r\n                        <input type=\"text\" value=\"{{getQualifyingCreditScore()}}\" placeholder=\"Enter Credit Score here..\" class=\"form-control m-b\" >                \r\n                    </div>\r\n                </div>\r\n            </legend>\r\n        </div>\r\n        <div class=\"panel-wrapper  collapse\" [class.in]=\"borrowerCollapsed\" *ngIf=\"borrowerCollapsed\" aria-expanded=\"true\">\r\n            <div class=\"panel-body\">\r\n                <fieldset>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label class=\"col-sm-5 control-label\">ID *</label>\r\n                        <div class=\"col-sm-7\">\r\n                            <input type=\"text\" formControlName=\"loanId\" placeholder=\"ID of borrower..\" class=\"form-control m-b\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 no-padding\">\r\n                        <label class=\"col-sm-6 control-label\">Pre-Approval code *</label>\r\n                        <div class=\"col-sm-6\" style=\"padding-right: 5px\">\r\n                            <input type=\"text\" formControlName=\"preApprovalCode\" placeholder=\"Enter PreApproval code (if any)..\" class=\"form-control m-b\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label class=\"col-sm-5 control-label\">State *</label>\r\n                        <div class=\"col-sm-7\">\r\n                            <select class=\"form-control m-b\">\r\n                                            <option value=\"Conventional\">state 1</option>\r\n                                            <option value=\"FHA\">state 2</option>\r\n                                            <option value=\"VA\">state 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <app-borrower-details [borrowers]=\"basicDetails.borrowers\"></app-borrower-details>\r\n            </div>\r\n        </div>\r\n    </form>\r\n   <!-- {{basicDetails|json}} -->\r\n</div>"

/***/ }),

/***/ 1240:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered table-hover\" style=\"border-top: 1px solid #CCC\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"text-center\" width=\"5%\">#</th>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Credit Score</th>\r\n            <th class=\"text-center\" width=\"5%\">Select</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr class=\"info\" [class.info]=\"borrower.type=='B'\" *ngFor=\"let borrower of borrowers;let i=index;\">\r\n            <td class=\"text-center\">{{borrower.borrowerId}}</td>\r\n            <td><input type=\"text\" [(ngModel)]=\"borrower.name\" placeholder=\"Enter name here..\" class=\"form-control m-b\" required=\"\"></td>\r\n            <td>\r\n                <span class=\"input-group\">\r\n                    <input type=\"email\" [(ngModel)]=\"borrower.email\"  placeholder=\"Enter email here..\" class=\"form-control m-b\" required=\"\">\r\n                    <a class=\"input-group-addon\" data-toggle=\"tooltip\" (click)=\"shareLoan(borrower.email)\" data-placement=\"top\" title=\"Share by email\">\r\n                        <i class=\"fa fa-share\"></i>\r\n                    </a>\r\n                </span>\r\n            </td>\r\n            <td><input type=\"text\" [(ngModel)]=\"borrower.phone\" placeholder=\"Enter phone number here..\" class=\"form-control m-b\"\r\n                    required=\"\"></td>\r\n            <td><input type=\"text\" [(ngModel)]=\"borrower.creditScore\" (ngModelChange)=\"creditScoreChange(borrower.creditScore)\" placeholder=\"Enter credit score here..\"\r\n                    class=\"form-control m-b\" required=\"\"></td>\r\n            <td class=\"text-center\">\r\n                <div *ngIf=\"borrower.type=='B'\" class=\"checkbox c-checkbox needsclick\">\r\n                    <label class=\"needsclick\">\r\n                            <input type=\"checkbox\" value=\"\" class=\"needsclick\" checked disabled>\r\n                            <span class=\"fa fa-check\"></span>\r\n                    </label>\r\n                </div>\r\n                <div *ngIf=\"borrower.type=='C'\" class=\"checkbox c-checkbox c-checkbox-rounded\">\r\n                    <label class=\"needsclick\">\r\n                    <input id=\"roundedcheckbox10\" [(ngModel)]=\"borrower.isActive\" (change)=\"borrowerStatusChange(borrower)\"  type=\"checkbox\" checked=\"\">\r\n                    <span class=\"fa fa-check\"></span></label>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<div class=\"panel-footer text-center\">\r\n    <button type=\"button\" class=\"btn btn-labeled btn-green\" (click)=\"addCoBorrower()\">\r\n        <span class=\"btn-label\"><i class=\"fa fa-plus\"></i>\r\n        </span>Add Co-Borrower\r\n    </button>\r\n</div>"

/***/ }),

/***/ 1241:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Closing Costs Default</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-sm\">\r\n            <div class=\"col-md-4 no-padding\">\r\n                <span>BUYER</span>\r\n            </div>\r\n            <div class=\"col-md-4 no-padding text-center\">\r\n                <span>SELLER</span>\r\n            </div>\r\n            <div class=\"col-md-4 no-padding text-right\">\r\n                <span>N/A</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <span>Cost Name</span>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <span>Type</span>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <span>Value</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let closingCost of closingCosts;let i=index;\">\r\n        <div class=\"col-md-4\">\r\n            <input type=\"range\" [(ngModel)]=\"closingCost.type\" step=\"1\" min=\"1\" max=\"3\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <input type=\"text\" [(ngModel)]=\"closingCost.name\" class=\"form-control cal-input pull-left text-sm\" [disabled]=\"closingCost.rowNo==1||closingCost.rowNo==2||closingCost.rowNo==3||closingCost.rowNo==4||closingCost.rowNo==5\">\r\n        </div>\r\n        <!-- <div class=\"col-md-3 no-padding\" *ngIf=\"closingCost.mode==1\">\r\n            <input type=\"text\" [(ngModel)]=\"closingCost.name\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\" [disabled]=\"closingCost.rowNo==1||closingCost.rowNo==2\">\r\n            <input type=\"number\" [(ngModel)]=\"closingCost.percentage\" step=\"0.125\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n        </div> -->\r\n        <div class=\"col-md-2\">\r\n            <select class=\"form-control\" [(ngModel)]=\"closingCost.mode\" [disabled]=\"closingCost.rowNo==1||closingCost.rowNo==2||closingCost.rowNo==3||closingCost.rowNo==4||closingCost.rowNo==5\">\r\n                <option value=\"1\">Percentage</option>\r\n                <option value=\"2\">Flat</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-1 \">\r\n            <div (click)=\"closingCost.isApr=!closingCost.isApr\" *ngIf=\"closingCost.isApr\" class=\"apr-circle-active\">apr</div>\r\n            <div (click)=\"closingCost.isApr=!closingCost.isApr\" *ngIf=\"!closingCost.isApr\" class=\"apr-circle\">apr</div>\r\n        </div>\r\n        <!-- <div class=\"col-md-2\">\r\n            <input currencyMask type=\"text\" *ngIf=\"closingCost.mode==2\" [(ngModel)]=\"closingCost.value\" class=\"form-control cal-input pull-right\">\r\n            <input type=\"number\" *ngIf=\"closingCost.mode==1\" [(ngModel)]=\"closingCost.percentage\" step=\"0.125\" value=\"\" class=\"form-control cal-input\">\r\n        </div> -->\r\n\r\n        <div class=\"col-md-2\">\r\n            <div class=\"input-group\" *ngIf=\"closingCost.mode==2\">\r\n                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                <input currencyMask type=\"text\" *ngIf=\"closingCost.mode==2\" [(ngModel)]=\"closingCost.value\" class=\"form-control cal-input pull-right\">\r\n            </div>\r\n            <input type=\"number\" *ngIf=\"closingCost.mode==1\" [(ngModel)]=\"closingCost.percentage\" step=\"0.125\" value=\"\" class=\"form-control cal-input\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveClosingCosts();\">Save</button>\r\n</div>"

/***/ }),

/***/ 1242:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Credits Default</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <span>Credit Name</span>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <span>Value</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" [(ngModel)]=\"credits.credit1Name\" class=\"form-control m-b\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                <input type=\"text\" [(ngModel)]=\"credits.credit1Amount\" currencyMask class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" [(ngModel)]=\"credits.credit2Name\" class=\"form-control m-b\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                <input type=\"text\" [(ngModel)]=\"credits.credit2Amount\" currencyMask class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" [(ngModel)]=\"credits.credit3Name\" class=\"form-control m-b\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                <input type=\"text\" [(ngModel)]=\"credits.credit3Amount\" currencyMask class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <input type=\"text\" [(ngModel)]=\"credits.credit4Name\" class=\"form-control m-b\">\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                <input type=\"text\" [(ngModel)]=\"credits.credit4Amount\" currencyMask class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveCredits();\">Save</button>\r\n</div>"

/***/ }),

/***/ 1243:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\" style=\"margin-bottom: 11px;padding:0;\">\r\n    <table class=\"table table-striped table-bordered table-hover\" style=\"border-top: 1px solid #CCC\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"text-center\" width=\"5%\">#</th>\r\n                <th>Description</th>\r\n                <th width=\"20%\">Frequency</th>\r\n                <th width=\"18%\">Borrower</th>\r\n                <th>Amount</th>\r\n                <th class=\"text-center\" width=\"5%\">Include</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let debt of debts;let i=index;\">\r\n                <td class=\"text-center\">{{i+1}}</td>\r\n                <td>\r\n                    <input type=\"text\" [(ngModel)]=\"debt.description\" placeholder=\"Enter debt description..\" class=\"form-control m-b\" required=\"\">\r\n                </td>\r\n                <td>\r\n                    <select [(ngModel)]=\"debt.frequency\" (ngModelChange)=\"debtChange(debt)\" name=\"account\" class=\"form-control m-b add-new\">\r\n                        <option>Weekly</option>\r\n                        <option>Every 2 Weeks</option>\r\n                        <option>Twice a Month</option>\r\n                        <option>Monthly</option>\r\n                        <option>Monthly Non-Taxable Income (grossed up @ 1.25%)</option>\r\n                        <option>Annual</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <select name=\"account\" [(ngModel)]=\"debt.borrowerId\" (ngModelChange)=\"debtChange(debt)\" class=\"form-control m-b add-new\">\r\n                         <option *ngFor=\"let b of borrowers\" [ngValue]=\"b.borrowerId\">{{b.borrowerId}}</option>                                               \r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"debt.amount\" (ngModelChange)=\"debtChange(debt)\" placeholder=\"Enter amount here..\"\r\n                            class=\"form-control m-b\" required=\"\">\r\n                    </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"checkbox c-checkbox c-checkbox-rounded\">\r\n                        <label class=\"needsclick\">\r\n                            <input id=\"roundedcheckbox10\" [(ngModel)]=\"debt.isActive\" (ngModelChange)=\"debtChange(debt)\" type=\"checkbox\" checked=\"\">\r\n                            <span class=\"fa fa-check\"></span>\r\n                        </label>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class=\"panel-footer text-center\">\r\n    <button (click)=\"addDebt()\" type=\"button\" class=\"btn btn-labeled btn-green\">\r\n        <span class=\"btn-label\"><i class=\"fa fa-plus\"></i>\r\n        </span>Add Debt\r\n    </button>\r\n</div>"

/***/ }),

/***/ 1244:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default panel-left col-md-12 no-padding\">\r\n    <form method=\"post\" action=\"#\" data-parsley-validate=\"\" novalidate=\"\" class=\"form-horizontal\">\r\n        <div class=\"panel-heading panel-heading-collapsed\" style=\"padding:0; margin:0;\">\r\n            <div class=\"col-md-6\" style=\"border-right: 2px solid #ddd; padding-top: 10px;\">\r\n                <legend>Income Sources\r\n\r\n                    <div class=\"form-group col-md-7 pull-right\" style=\"margin-right: 0px; margin-bottom: 0;\">\r\n                        <label class=\"col-sm-7 control-label sec-collapse\" style=\"font-size: 14px; padding-right: 0\">Total\r\n                                            Monthly Income:\r\n                                        </label>\r\n                        <div class=\"col-sm-5\">\r\n                            {{totalIncome | currency :'USD':true}}\r\n                        </div>\r\n                    </div>\r\n\r\n                </legend>\r\n            </div>\r\n            <div class=\"col-md-6\" style=\"padding-top: 10px;\">\r\n                <legend class=\"legend-heading\">Debts\r\n                    <!-- <a data-tool=\"panel-collapse\" data-toggle=\"tooltip\" title=\"\" class=\"pull-right data-toggle-5\" data-original-title=\"Collapse this section\"\r\n                                style=\"padding-right: 5px;\">\r\n                                        <em class=\"fa fa-minus\"></em>\r\n                                    </a> -->\r\n                    <a (click)=\"incomeDebtsCollapsed = !incomeDebtsCollapsed\" data-tool=\"panel-collapse\" data-toggle=\"tooltip\" title=\"\" class=\"pull-right data-toggle-2\"\r\n                        data-original-title=\"Expand this section\" style=\"padding-right: 5px;\">\r\n                                <em class=\"fa\" [class.fa-minus]=\"incomeDebtsCollapsed\" [class.fa-plus]=\"!incomeDebtsCollapsed\"></em>\r\n                            </a>\r\n                    <div class=\"form-group col-md-7 pull-right\" style=\"margin-right: 0px; margin-bottom: 0;\">\r\n                        <label class=\"col-sm-7 control-label sec-collapse\" style=\"font-size: 14px; padding-right: 0\">Total\r\n                                            Monthly Debt:\r\n                                        </label>\r\n                        <div class=\"col-sm-5\">\r\n                            {{totalDebts | currency :'USD':true}}\r\n                        </div>\r\n                    </div>\r\n\r\n                </legend>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"incomeDebtsCollapsed\">\r\n            <div class=\"panel-wrapper collapse in panel-4 col-md-6\" aria-expanded=\"true\" style=\"border-right: 2px solid #ddd;\">\r\n                <app-income-details [incomes]=\"incomes\" [borrowers]=\"borrowers\" ></app-income-details>               \r\n            </div>\r\n            <div class=\"panel-wrapper collapse in panel-5 col-md-6\" aria-expanded=\"true\">\r\n                <app-debt-details [debts]=\"debts\" [borrowers]=\"borrowers\"></app-debt-details>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 1245:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\" style=\"margin-bottom: 11px;padding:0;\">\r\n    <table class=\"table table-striped table-bordered table-hover\" style=\"border-top: 1px solid #CCC\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"text-center\" width=\"5%\">#</th>\r\n                <th>Income Source</th>\r\n                <th width=\"20%\">Frequency</th>\r\n                <th width=\"18%\">Borrower</th>\r\n                <th>Amount</th>\r\n                <th class=\"text-center\" width=\"5%\">Include</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let income of incomes;let i=index;\">\r\n                <td class=\"text-center\">{{i+1}}</td>\r\n                <td><input type=\"text\" [(ngModel)]=\"income.incomeSource\" placeholder=\"Enter name here..\" class=\"form-control m-b\"\r\n                        required=\"\"></td>\r\n                <td>\r\n                    <select name=\"account\" [(ngModel)]=\"income.frequency\" (ngModelChange)=\"incomeChange(income)\" class=\"form-control m-b add-new\">\r\n                                                <option>Weekly</option>\r\n                                                <option>Every 2 Weeks</option>\r\n                                                <option>Twice a Month</option>\r\n                                                <option>Monthly</option>\r\n                                                <option>Monthly Non-Taxable Income (grossed up @ 1.25%)</option>\r\n                                                <option>Annual</option>\r\n                   </select>\r\n                    <!-- <select [(ngModel)]=\"income.frequency\" class=\"form-control m-b add-new\" >\r\n                        <option *ngFor=\"let c of frequency\" [ngValue]=\"c\">{{c}}</option> \r\n                    </select> -->\r\n                </td>\r\n                <td>\r\n                    <select name=\"account\" [(ngModel)]=\"income.borrowerId\" (ngModelChange)=\"incomeChange(income)\" class=\"form-control m-b add-new\">\r\n                         <option *ngFor=\"let b of borrowers\" [ngValue]=\"b.borrowerId\">{{b.borrowerId}}</option>                                               \r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"income.amount\" (ngModelChange)=\"incomeChange(income)\" placeholder=\"Enter amount here..\"\r\n                            class=\"form-control m-b\" required=\"\">\r\n                    </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"checkbox c-checkbox c-checkbox-rounded\">\r\n                        <label class=\"needsclick\">  \r\n                                <input id=\"roundedcheckbox10\" [(ngModel)]=\"income.isActive\"  (ngModelChange)=\"incomeChange(income)\" type=\"checkbox\" checked=\"\">\r\n                        <span class=\"fa fa-check\"></span></label>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <!-- <tr>\r\n                <td class=\"text-center\">2</td>\r\n                <td><input type=\"text\" placeholder=\"Enter name here..\" class=\"form-control m-b\" required=\"\"></td>\r\n                <td>\r\n                    <select name=\"account\" class=\"form-control m-b add-new\">\r\n                                                <option>Weekly</option>\r\n                                                <option>Every 2 Weeks</option>\r\n                                                <option>Twice a Month</option>\r\n                                                <option>Monthly</option>\r\n                                                <option>Monthly Non-Taxable Income (grossed up @ 1.25%)</option>\r\n                                                <option>Annual</option>\r\n                                            </select>\r\n                </td>\r\n                <td>\r\n                    <select name=\"account\" class=\"form-control m-b add-new\">\r\n                                                <option>B</option>\r\n                                                <option>C1</option>\r\n                                                <option>C2</option>\r\n                                            </select>\r\n                </td>\r\n                <td><input type=\"text\" placeholder=\"Enter amount here..\" class=\"form-control m-b\" required=\"\"></td>\r\n                <td class=\"text-center\">\r\n                    <div class=\"checkbox c-checkbox c-checkbox-rounded\">\r\n                        <label class=\"needsclick\">\r\n                                                    <input id=\"roundedcheckbox10\" type=\"checkbox\" checked=\"\">\r\n                                                    <span class=\"fa fa-check\"></span></label>\r\n                    </div>\r\n                </td>\r\n            </tr>-->\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class=\"panel-footer text-center\">\r\n    <button (click)=\"addIncome()\" type=\"button\" class=\"btn btn-labeled btn-green\">\r\n            <span class=\"btn-label\"><i class=\"fa fa-plus\"></i>\r\n            </span>Add Income\r\n    </button>\r\n</div>"

/***/ }),

/***/ 1246:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"panel panel-default\">\r\n    <form method=\"post\" action=\"#\" data-parsley-validate=\"\" novalidate=\"\" class=\"form-horizontal\">\r\n        <div class=\"panel-body\">\r\n            <legend>Loan Calculator</legend>\r\n            <div class=\"col-md-6 with-carousel left\">\r\n                 <div id=\"carousel-example-captions\" data-ride=\"carousel\" class=\"carousel slide\">\r\n                    <div role=\"listbox\" class=\"carousel-inner carousel-inner-1\"> \r\n                <carousel [interval]=\"myInterval\" [noWrap]=\"true\">\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                </carousel>\r\n                 </div>\r\n                </div> \r\n                 <div id=\"carousel-example-captions\" data-ride=\"carousel\" class=\"carousel slide\">\r\n                    <div role=\"listbox\" class=\"carousel-inner carousel-inner-1\">\r\n\r\n\r\n\r\n                    </div>\r\n                    <span>\r\n                                    <a href=\"#carousel-example-captions\" role=\"button\" data-slide=\"prev\"\r\n                                       class=\"left carousel-control previous lc-carousel-btn\" data-toggle=\"tooltip\" data-original-title=\"\"\r\n                                       data-placement=\"left\">\r\n                                        <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left gly-small\"></span>\r\n                    <span class=\"sr-only previous\">Previous</span>\r\n                    </a>\r\n                    </span>\r\n                    <span>\r\n                                    <a href=\"#carousel-example-captions\" role=\"button\" data-slide=\"next\"\r\n                                       class=\"right carousel-control next lc-carousel-btn\" data-toggle=\"tooltip\"\r\n                                       data-original-title=\"Loan option 2\" data-placement=\"right\">\r\n                                        <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right gly-small\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                    </span>\r\n                </div> \r\n            </div>\r\n            <div class=\"col-md-6 with-carousel right\">\r\n                <carousel [interval]=\"myInterval\" [noWrap]=\"true\">\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                    <slide>\r\n                        <app-loan-option></app-loan-option>\r\n                    </slide>\r\n                </carousel>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div> -->\r\n<div class=\"panel panel-default\">\r\n    <form method=\"post\" action=\"#\" data-parsley-validate=\"\" novalidate=\"\" class=\"form-horizontal\">\r\n        <div class=\"panel-body\">\r\n            <legend>Loan Calculator\r\n                <div class=\"form-group col-sm-3 pull-right\" style=\"bottom:9px\">\r\n                        <button type=\"button\" class=\"btn btn-labeled btn-green\" (click)=\"showAmortizationSchedule()\">\r\n                            <span class=\"btn-label\"><i class=\"fa fa-eye\"></i>\r\n                            </span>Show Amortization schedule\r\n                        </button>\r\n                </div>\r\n            </legend>\r\n            <div class=\"loan-option-container\">\r\n                <div class=\"loan-option-section\">\r\n                    <div class=\"loan-option-section-nav\" (click)=\"prevLoanOption('left')\">\r\n                        <a role=\"button\" data-slide=\"prev\" data-toggle=\"tooltip\" data-original-title=\"\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left gly-small\"></span>\r\n                            <span  class=\"sr-only previous\">Previous</span>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"loan-option-section-content\">\r\n                        <div *ngFor=\"let loanOption of loanOptions;let i=index;\">\r\n                            <div *ngIf=\"loanOption.optionNo==leftContext\">\r\n                                <app-loan-option [viewMode]=\"viewMode\" [loanOption]=\"loanOption\" [incomes]=\"incomes\" [debts]=\"debts\" [borrowers]=\"borrowers\"></app-loan-option>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"(loanOptions.length+1)==leftContext\">\r\n                            <div  class='loan-option-new text-center'>\r\n                                <a (click)=\"addLoanOption('left')\" title=\"\" class=\" data-toggle-2\" data-original-title=\"Create new loan option\" style=\"font-size: -webkit-xxx-large;\">\r\n                                    <em class=\"fa fa-plus\"></em>                                        \r\n                                </a>\r\n                                <div>Create new loan option</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"loan-option-section-nav\" (click)=\"nextLoanOption('left')\">\r\n                        <a role=\"button\" data-slide=\"next\" data-toggle=\"tooltip\" data-original-title=\"Loan option 2\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right gly-small\"></span>\r\n                            <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"loan-option-section\">\r\n                    <div class=\"loan-option-section-nav\" (click)=\"prevLoanOption('right')\">\r\n                        <a role=\"button\" data-slide=\"prev\" data-toggle=\"tooltip\" data-original-title=\"\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left gly-small\"></span>\r\n                            <span class=\"sr-only previous\">Previous</span>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"loan-option-section-content\">\r\n                        <div *ngFor=\"let loanOption of loanOptions;let i=index;\">\r\n                            <div *ngIf=\"loanOption.optionNo==rightContext\">\r\n                                <app-loan-option [viewMode]=\"viewMode\" [loanOption]=\"loanOption\" [incomes]=\"incomes\" [debts]=\"debts\" [borrowers]=\"borrowers\"></app-loan-option>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"(loanOptions.length+1)==rightContext\">\r\n                            <div  class='loan-option-new text-center'>\r\n                                <a (click)=\"addLoanOption('right')\" title=\"\" class=\" data-toggle-2\" data-original-title=\"Create new loan option\" style=\"font-size: -webkit-xxx-large;\">\r\n                                    <em class=\"fa fa-plus\"></em>                                        \r\n                                </a>\r\n                                <div>Create new loan option</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"loan-option-section-nav\" (click)=\"nextLoanOption('right')\">\r\n                        <a role=\"button\" data-slide=\"next\" data-toggle=\"tooltip\" data-original-title=\"Loan option 2\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right gly-small\"></span>\r\n                            <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"panel panel-default\">\r\n    <form method=\"post\" action=\"#\" data-parsley-validate=\"\" novalidate=\"\" class=\"form-horizontal\">\r\n        <div class=\"panel-body\">\r\n            <legend>Loan Calculator</legend>\r\n            <div class=\"col-md-6 with-carousel left\">\r\n                <div id=\"carousel-example-captions\" data-ride=\"carousel\" class=\"carousel slide\">\r\n                    <div role=\"listbox\" class=\"carousel-inner carousel-inner-1\">\r\n                        <div class=\"item active\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 1\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-1\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-1\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 sub-div first-mortage\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 1 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 2\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-2\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-2\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 sub-div first-mortage\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage2\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage2\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 2 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 3\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-3\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-3\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 first-mortage sub-div\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage3\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage3\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 3 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <span>\r\n                                    <a href=\"#carousel-example-captions\" role=\"button\" data-slide=\"prev\"\r\n                                       class=\"left carousel-control previous lc-carousel-btn\" data-toggle=\"tooltip\" data-original-title=\"\"\r\n                                       data-placement=\"left\">\r\n                                        <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left gly-small\"></span>\r\n                    <span class=\"sr-only previous\">Previous</span>\r\n                    </a>\r\n                    </span>\r\n                    <span>\r\n                                    <a href=\"#carousel-example-captions\" role=\"button\" data-slide=\"next\"\r\n                                       class=\"right carousel-control next lc-carousel-btn\" data-toggle=\"tooltip\"\r\n                                       data-original-title=\"Loan option 2\" data-placement=\"right\">\r\n                                        <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right gly-small\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 with-carousel right\">\r\n                <div id=\"carousel-example-captions2\" data-ride=\"carousel\" class=\"carousel slide\">\r\n                    <div role=\"listbox\" class=\"carousel-inner\">\r\n                        <div class=\"item active\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 1\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-4\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-4\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 first-mortage sub-div\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage4\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage4\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 1 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 2\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-5\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-5\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 first-mortage sub-div\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage5\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage5\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 2 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading pull-left col-md-12\">\r\n                                    <div class=\"col-md-12 loan-option-heading\">Loan Option 3\r\n                                        <hr>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-3 no-padding\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <label class=\"loan-type-6\">* Home Value</label>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                                            <input class=\"loan-type-toggle-6\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Purchase\" data-off=\"Re-Finance\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n                                    <div class=\"col-md-8 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">&nbsp;Loan Type</div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"Conventional\">Conventional</option>\r\n                                                                <option value=\"FHA\">FHA</option>\r\n                                                                <option value=\"VA\">VA</option>\r\n                                                                <option value=\"USDA\">USDA</option>\r\n                                                                <option value=\"Other\">Other</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-5\">\r\n                                                Down Payment\r\n                                                <input type=\"text\" class=\"form-control cal-input\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">\r\n                                                MI Type\r\n                                                <select class=\"form-control cal-input\">\r\n                                                                <option value=\"MONTHLY\">MONTHLY</option>\r\n                                                                <option value=\"TAMI\">TAMI</option>\r\n                                                                <option value=\"NONE\">NONE</option>\r\n                                                            </select>\r\n                                            </div>\r\n                                            <div class=\"col-xs-2\"></div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"col-sm-12 first-mortage sub-div\">\r\n                                                    <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 class=\"pull-right\">&nbsp;&nbsp;100% LTV&nbsp;&nbsp;\r\n                                                    </h5><br>\r\n                                                    <div class=\"col-md-12 no-padding\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                        &nbsp;&nbsp;Loan Amount\r\n                                                        <br><br>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                    <div class=\"col-sm-4 no-padding\">\r\n                                                        <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                            style=\"width: 95%\"></div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-10\">\r\n                                                <div class=\"sub-div-footer\">\r\n                                                    <div class=\"tag\">DTI</div>\r\n                                                    <div class=\"tag\">Front 20%</div>\r\n                                                    <div class=\"tag\">35% Back</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">P&I</div>\r\n                                            <div class=\"col-xs-6\"><input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                Tax\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\">INS</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">HOA</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <div class=\"col-md-12 no-padding\"><label style=\"margin-top: 2px\">MI</label></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <div class=\"col-md-12 no-padding\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">Other</div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-6 no-padding\">\r\n                                                <label>PITI</label>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12\">\r\n                                                <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage6\">\r\n                                                    <h5 style=\"margin-left: -10px; background: none;\"><i class=\"fa fa-plus the-icon\"></i></h5>\r\n                                                    <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                                                    <h5 style=\"margin-left: 73px;\">&nbsp;&nbsp;100% CLTV&nbsp;&nbsp;\r\n                                                    </h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row collapse\" id=\"SecondMortage6\" style=\"top: -10px;\">\r\n                                            <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                                                <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                                                    <div class=\"col-sm-8 no-padding\">\r\n                                                        <div class=\"col-md-12 no-padding\">\r\n                                                            <input type=\"text\" class=\"form-control cal-input pull-left\" style=\"width: 50%\">                                                            &nbsp;&nbsp;Loan Amount\r\n                                                            <br><br>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Rate</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Points</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\"></div>\r\n                                                        <div class=\"col-sm-4 no-padding\">\r\n                                                            <label>Term</label><br><input type=\"text\" class=\"form-control cal-input pull-left\"\r\n                                                                style=\"width: 95%\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-xs-6 no-padding text-right\">\r\n                                                                <label>2nd<br>P&I</label>\r\n                                                            </div>\r\n                                                            <div class=\"col-xs-6\">\r\n                                                                <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 4px\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-5 no-padding text-right\">\r\n                                                        <label>1st & 2nd<br>PITI</label>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-7\">\r\n                                                        <input type=\"text\" class=\"form-control cal-input\" style=\"margin-top: 6px\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"panel panel-success\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-8\">Loan Option 3 Cash to Close Summary</div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel-body loan-option\">\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".DownPayment\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Down Payment\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse DownPayment\">\r\n                                        <div class=\"col-md-4 text-center\">sales price</div>\r\n                                        <div class=\"col-md-4 text-center\">1ST</div>\r\n                                        <div class=\"col-md-4 text-center\">2ND</div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".ClosingCosts\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Closing Costs\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapse ClosingCosts\">\r\n                                        <div class=\"col-md-12 text-sm\">\r\n                                            <span style=\"margin-left: -10px\">BUYER</span>\r\n                                            <span style=\"margin-left: 16px\">SELLER</span>\r\n                                            <span style=\"margin-left: 20px\">POC</span>\r\n                                            <span style=\"margin-left: 33px\">N/A</span>\r\n                                            <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-gear\"></i></a>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Discount Points\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Origination Fee\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\">\r\n                                                <input type=\"number\" step=\"0.001\" value=\"\" class=\"form-control cal-input text-sm\" style=\"width: 50%;\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"Processing fee\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"closing-costs\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <input type=\"range\" step=\"1\" min=\"1\" max=\"4\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3 no-padding\">\r\n                                                <input type=\"text\" value=\"\" class=\"form-control cal-input pull-right text-sm\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Prepaids\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Prepaids\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Prepaids\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 no-padding\">\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                                </div>\r\n                                                <div class=\"col-xs-5\">Months Of Tax</div>\r\n                                                <div class=\"col-xs-3\">\r\n                                                    <input type=\"text\" value=\"1119\" class=\"form-control cal-input pull-right\" disabled>\r\n                                                </div>\r\n                                                <div class=\"col-md-1\">\r\n                                                    <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"20\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-5\">Days Of Interest</div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"458\" class=\"form-control cal-input pull-right\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row collapser\" data-toggle=\"collapse\" href=\".Credits\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <i class=\"fa fa-plus the-icon\"></i> Credits\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\">\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse Credits\">\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <a href=\"#\"><i class=\"fa fa-gear\"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-8\">\r\n                                                <input type=\"text\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                                            </div>\r\n                                            <div class=\"col-xs-3\">\r\n                                                <input type=\"text\" value=\"1704\" class=\"form-control cal-input pull-right text-bold\" disabled>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row loan-option-total\">\r\n                                        <div class=\"col-xs-12\">Approximate</div>\r\n                                        <div class=\"col-xs-2 text-right\">\r\n                                            APR\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                        <div class=\"col-xs-3 text-right\">\r\n                                            Cash to close\r\n                                        </div>\r\n                                        <div class=\"col-xs-3\">\r\n                                            <input type=\"text\" class=\"form-control cal-input pull-right\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"#carousel-example-captions2\" role=\"button\" data-slide=\"prev\" class=\"left carousel-control previous lc-carousel-btn\"\r\n                        data-toggle=\"tooltip\" data-original-title=\"\" data-placement=\"left\">\r\n                                    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left gly-small\"></span>\r\n                                    <span class=\"sr-only\">Previous</span>\r\n                                </a>\r\n                    <a href=\"#carousel-example-captions2\" role=\"button\" data-slide=\"next\" class=\"right carousel-control next lc-carousel-btn\"\r\n                        data-toggle=\"tooltip\" data-original-title=\"Loan option 2\" data-placement=\"right\">\r\n                                    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right gly-small\"></span>\r\n                                    <span class=\"sr-only\">Next</span>\r\n                                </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>  -->"

/***/ }),

/***/ 1247:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"item active\"> -->\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading pull-left col-md-12\">\r\n        <div class=\"col-md-12\">\r\n\r\n        </div>\r\n        <div class=\"col-md-12 loan-option-heading\">\r\n            <div class=\"col-md-4 loan-option-heading\">\r\n                Loan Option {{loanOption.optionNo}}\r\n            </div>\r\n            <div class=\"col-md-7\" style=\"color:red\">\r\n                <span *ngIf=\"!viewMode|| (viewMode&& loanOption.expiry!=null)\">\r\n                    Offer expires by: {{ loanOption.expiry | date: 'dd-MM-yyyy HH:mm' }}\r\n                </span>\r\n                <input class=\"form-control pull-right\" [(ngModel)]=\"loanOption.expiry\" style=\"display:none\" />\r\n                <datetime-popup [value]=\"loanOption.expiry\" (valueChange)=\"onValueChange($event)\" [(showPopup)]=\"showPicker\" [showDate]=\"showDate\"\r\n                    [showTime]=\"showTime\"></datetime-popup>\r\n            </div>\r\n            <div class=\"col-md-1 loan-option-heading\">\r\n                <a *ngIf=\"!viewMode\" (click)=\"onTogglePicker()\" style=\"color: white;padding-left: 10px;\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n            <hr style=\"padding-left: 5px;width: 100%;\">\r\n        </div>\r\n\r\n        <!-- <div class=\"col-md-4 loan-option-heading\">\r\n            Loan Option {{loanOption.optionNo}}\r\n            <hr>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-8 loan-option-heading\">\r\n            <div class=\"col-md-8\" style=\"color:red\">\r\n                Offer expires by: {{ loanOption.expiry | date: 'dd-MM-yyyy HH:mm' }}\r\n                <input class=\"form-control pull-right\" [(ngModel)]=\"loanOption.expiry\" style=\"display:none\" />\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <a *ngIf=\"!viewMode\" (click)=\"onTogglePicker()\" style=\"color: white;padding-left: 10px;\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n            <datetime-popup [value]=\"loanOption.expiry\" (valueChange)=\"onValueChange($event)\" [(showPopup)]=\"showPicker\" [showDate]=\"showDate\"\r\n                [showTime]=\"showTime\"></datetime-popup>\r\n            <hr>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-3 no-padding\">\r\n                <div class=\"input-group \">\r\n                    <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                    <input currencyMask [options]=\"{ prefix: '', thousands: ',',precision :'0' }\" type=\"text\" (ngModelChange)=\"loanOption.salesPrice=$event;loanOptionTypeChange()\"\r\n                        [(ngModel)]=\"loanOption.salesPrice\" [ngModelOptions]=\"{ standalone: true }\" class=\"form-control cal-input pull-right\">\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-3 no-padding\">\r\n                <input currencyMask [options]=\"{ prefix: '$ ', thousands: ',',precision :'0' }\" type=\"text\" (ngModelChange)=\"loanOption.salesPrice=$event;loanOptionTypeChange()\"\r\n                    [(ngModel)]=\"loanOption.salesPrice\" [ngModelOptions]=\"{ standalone: true }\" class=\"form-control cal-input pull-right\">\r\n            </div> -->\r\n            <div class=\"col-md-4\">\r\n                <label *ngIf=\"!loanOption.loanMode\" class=\"loan-type-1\">* Home Value</label>\r\n                <label *ngIf=\"loanOption.loanMode\" class=\"loan-type-1\">* Sale Price</label>\r\n            </div>\r\n            <div class=\"col-sm-5 no-padding text-right loan-type-input\">\r\n                <switch [status]=\"loanOption.loanMode\" (statusChange)=\"loanOptionChange()\" [onText]=\"'Purchase'\" [offText]=\"'Re-Finance'\"\r\n                    [onColor]=\"'blue'\" [offColor]=\"'gray'\" [size]=\"'large'\"></switch>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body loan-option\">\r\n        <div class=\"col-md-8 no-padding\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-5\">\r\n                    Loan Type\r\n                    <select (change)=\"loanOptionTypeChange()\" [(ngModel)]=\"loanOption.loanType\" class=\"form-control cal-input\">\r\n                        <option *ngFor=\"let lt of loanTypeList\" [ngValue]=\"lt.id\">{{lt.name}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-xs-5\">\r\n                    MI Type\r\n                    <select [(ngModel)]=\"loanOption.miType\" class=\"form-control cal-input\">\r\n                        <option *ngFor=\"let m of miTypeList\" [ngValue]=\"m.id\">{{m.name}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-xs-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-10\">\r\n                    <div class=\"col-sm-12 sub-div first-mortage\">\r\n                        <h5>&nbsp;&nbsp;1st Mortgage&nbsp;&nbsp;</h5>\r\n                        <h5 class=\"pull-right\" style=\"padding-left:5px;padding-right:5px;\">{{loanOption.ltv}}% LTV</h5>\r\n                        <br>\r\n                        <div class=\"col-md-12 no-padding\">\r\n                            <div class=\"input-group\" style=\"margin-top:0px;\">\r\n                                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                <input currencyMask [options]=\"{ prefix: '', thousands: ',',precision :'0' }\" (ngModelChange)=\"loanOption.firstMortgage.loanAmount=$event;loanAmountChange()\"\r\n                                    type=\"text\" [(ngModel)]=\"loanOption.firstMortgage.loanAmount\" class=\"form-control cal-input pull-left\"\r\n                                    style=\"width: 50%\"> &nbsp;&nbsp;Loan Amount\r\n                            </div>\r\n                            <br/>\r\n                        </div>\r\n                        <div class=\"col-sm-4 no-padding\">\r\n                            <label style=\"margin-top: 6px;margin-bottom: 0px;\">Rate</label>\r\n                            <div class=\"input-group\" style=\"width: 95%;margin-top:0px\">\r\n                                <input currencyMask [options]=\"{ prefix: '', thousands: '',precision :'3' }\" type=\"text\" (ngModelChange)=\"loanOption.firstMortgage.rate=$event;calculate()\"\r\n                                    [(ngModel)]=\"loanOption.firstMortgage.rate\" class=\"form-control cal-input pull-left\">\r\n                                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">%</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 no-padding\">\r\n                            <label style=\"margin-top: 6px;margin-bottom: 0px;\">Points</label>\r\n                            <input currencyMask [options]=\"{ prefix: '', thousands: '',precision :'3' }\" type=\"number\" (ngModelChange)=\"calculate()\"\r\n                                [(ngModel)]=\"loanOption.firstMortgage.points\" step=\"0.125\" class=\"form-control cal-input pull-left\"\r\n                                style=\"width: 95%\">\r\n                        </div>\r\n                        <div class=\"col-sm-4 no-padding\">\r\n                            <label style=\"margin-top: 6px;margin-bottom: 0px;\">Term</label>\r\n                            <input type=\"text\" (ngModelChange)=\"loanOption.firstMortgage.term=$event;calculate()\" [(ngModel)]=\"loanOption.firstMortgage.term\"\r\n                                class=\"form-control cal-input pull-left\" style=\"width: 95%\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-10\">\r\n                    <div class=\"sub-div-footer\">\r\n                        <div class=\"tag\">DTI</div>\r\n                        <div class=\"tag\">Front {{loanOption.front}}%</div>\r\n                        <div class=\"tag\">{{loanOption.back}}% Back</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 no-padding\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4 no-padding\">P&I</div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.firstMortgage.pAndI\" class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-3 no-padding\">\r\n                    Tax\r\n                </div>\r\n                <div class=\"col-xs-1 no-padding\">\r\n                    <div (click)=\"loanOption.taxVerified=!loanOption.taxVerified\" *ngIf=\"loanOption.taxVerified\" class=\"apr-circle-active\">v</div>\r\n                    <div (click)=\"loanOption.taxVerified=!loanOption.taxVerified\" *ngIf=\"!loanOption.taxVerified\" class=\"apr-circle\">e</div>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.tax=$event;calculate()\" [(ngModel)]=\"loanOption.tax\" class=\"form-control cal-input pull-right\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-3 no-padding\">\r\n                    <div class=\"col-md-12 no-padding\">INS</div>\r\n                </div>\r\n                <div class=\"col-xs-1 no-padding\">\r\n                    <div (click)=\"loanOption.insVerified=!loanOption.insVerified\" *ngIf=\"loanOption.insVerified\" class=\"apr-circle-active\">v</div>\r\n                    <div (click)=\"loanOption.insVerified=!loanOption.insVerified\" *ngIf=\"!loanOption.insVerified\" class=\"apr-circle\">e</div>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.ins=$event;calculate()\" [(ngModel)]=\"loanOption.ins\" class=\"form-control cal-input pull-right\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-3 no-padding\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <label style=\"margin-top: 2px\">HOA</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-1 no-padding\">\r\n                    <div (click)=\"loanOption.hoaVerified=!loanOption.hoaVerified\" *ngIf=\"loanOption.hoaVerified\" class=\"apr-circle-active\">v</div>\r\n                    <div (click)=\"loanOption.hoaVerified=!loanOption.hoaVerified\" *ngIf=\"!loanOption.hoaVerified\" class=\"apr-circle\">e</div>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.hoa=$event;calculate()\" [(ngModel)]=\"loanOption.hoa\" class=\"form-control cal-input pull-right\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-3 no-padding\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <label style=\"margin-top: 2px\">MI</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-1 no-padding\">\r\n                    <div (click)=\"loanOption.miVerified=!loanOption.miVerified\" *ngIf=\"loanOption.miVerified\" class=\"apr-circle-active\">v</div>\r\n                    <div (click)=\"loanOption.miVerified=!loanOption.miVerified\" *ngIf=\"!loanOption.miVerified\" class=\"apr-circle\">e</div>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.mi\" class=\"form-control cal-input pull-right\" disabled>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4 no-padding\">Other</div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.other=$event;calculate()\" [(ngModel)]=\"loanOption.other\" class=\"form-control cal-input pull-right\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4 no-padding\">\r\n                    <label>PITI</label>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.firstMortgage.piti\" class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 no-padding\">\r\n            <div class=\"row\" (click)=\"isSecondMortageOpen=!isSecondMortageOpen\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"second-mortage-header\" data-toggle=\"collapse\" href=\"#SecondMortage\">\r\n                        <h5 style=\"margin-left: -10px; background: none;\">\r\n                            <i class=\"fa the-icon\" [class.fa-minus]=\"isSecondMortageOpen\" [class.fa-plus]=\"!isSecondMortageOpen\"></i>\r\n                        </h5>\r\n                        <h5>&nbsp;&nbsp;2nd Mortgage&nbsp;&nbsp;</h5>\r\n                        <h5 style=\"margin-left: 73px;padding-left:5px;padding-right:5px;\"> {{loanOption.cltv}}% CLTV </h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row collapse in\" *ngIf=\"isSecondMortageOpen\" id=\"SecondMortage\" style=\"top: -10px;\">\r\n                <div class=\"col-xs-12\" style=\"margin-top: 10px;\">\r\n                    <div class=\"col-sm-12 sub-div\" style=\"padding-top: 45px !important; background: #DCE775; margin-top: -39px;\">\r\n                        <div class=\"col-sm-8 no-padding\">\r\n                            <div class=\"col-md-12 no-padding\">\r\n                                <div class=\"input-group\" style=\"margin-top:0px;\">\r\n                                    <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                    <input currencyMask [options]=\"{ prefix: '$ ', thousands: ',',precision :'0' }\" type=\"text\" [(ngModel)]=\"loanOption.secondMortgage.loanAmount\"\r\n                                        class=\"form-control cal-input pull-left\" style=\"width: 50%\"> &nbsp;&nbsp;Loan Amount\r\n                                </div>\r\n                                <br/>\r\n                            </div>\r\n                            <div class=\"col-sm-4 no-padding\">\r\n                                <label style=\"margin-top: 6px;margin-bottom: 0px;\">Rate</label>\r\n                                <div class=\"input-group\" style=\"width: 95%;margin-top:0px\">\r\n                                    <input type=\"text\" (ngModelChange)=\"loanOption.secondMortgage.rate=$event;calculate()\" [(ngModel)]=\"loanOption.secondMortgage.rate\"\r\n                                        class=\"form-control cal-input pull-left\">\r\n                                    <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">%</span>\r\n                                </div>\r\n\r\n                                <!-- <input type=\"text\" (ngModelChange)=\"loanOption.secondMortgage.rate=$event;calculate()\" [(ngModel)]=\"loanOption.secondMortgage.rate\"\r\n                                    class=\"form-control cal-input pull-left\" style=\"width: 95%\"> -->\r\n                            </div>\r\n                            <div class=\"col-sm-4 no-padding\">\r\n                                <label style=\"margin-top: 6px;margin-bottom: 0px;\">Points</label>\r\n                                <input type=\"number\" (ngModelChange)=\"loanOption.secondMortgage.points=$event;calculate()\" step=\"0.125\" [(ngModel)]=\"loanOption.secondMortgage.points\"\r\n                                    class=\"form-control cal-input pull-left\" style=\"width: 95%\">\r\n                            </div>\r\n                            <div class=\"col-sm-4 no-padding\">\r\n                                <label style=\"margin-top: 6px;margin-bottom: 0px;\">Term</label>\r\n                                <input type=\"text\" (ngModelChange)=\"loanOption.secondMortgage.term=$event;calculate()\" [(ngModel)]=\"loanOption.secondMortgage.term\"\r\n                                    class=\"form-control cal-input pull-left\" style=\"width: 95%\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 no-padding\" style=\"padding-top: 5px !important;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6 no-padding text-right\">\r\n                                    <label>2nd\r\n                                        <br>P&I</label>\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <div class=\"input-group\" style=\"margin-top:4px;\">\r\n                                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.secondMortgage.pAndI\" class=\"form-control cal-input\" style=\"margin-top: 0px\"\r\n                                            disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-4 col-xs-push-8\" style=\"margin-top: -50px; padding-right: 20px; background: #fff;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-5 no-padding text-right\">\r\n                            <label>1st & 2nd\r\n                                <br>PITI</label>\r\n                        </div>\r\n                        <div class=\"col-xs-7\">\r\n                            <div class=\"input-group\" style=\"margin-top:6px;\">\r\n                                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.firstAndSecondPiti\" class=\"form-control cal-input\" style=\"margin-top: 0px\"\r\n                                    disabled>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-8\">Loan Option {{loanOption.optionNo}} Cash to Close Summary</div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                    <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.cashToClose\" class=\"form-control cal-input pull-right\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <accordion [closeOthers]=\"true\">\r\n        <accordion-group #downPayment [isOpen]=\"isDownPaymentOpen\">\r\n            <div accordion-heading class=\"row collapser\">\r\n                <div class=\"col-md-8\">\r\n                    <i [ngClass]=\"{'fa-minus': downPayment?.isOpen, 'fa-plus': !downPayment?.isOpen}\" class=\"fa the-icon\"></i> Down Payment\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '$ ', thousands: ',',precision :'0' }\" type=\"text\" [(ngModel)]=\"loanOption.downPayment\"\r\n                            class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row DownPayment\">\r\n                <div class=\"col-md-4 text-center\">Sale price</div>\r\n                <div class=\"col-md-4 text-center\">1ST</div>\r\n                <div class=\"col-md-4 text-center\">2ND</div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '', thousands: ',',precision :'0' }\" type=\"text\" [(ngModel)]=\"loanOption.salesPrice\"\r\n                            class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '', thousands: ',',precision :'0' }\" type=\"text\" [(ngModel)]=\"loanOption.firstMortgage.loanAmount\"\r\n                            class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '', thousands: ',',precision :'0' }\" type=\"text\" [(ngModel)]=\"loanOption.secondMortgage.loanAmount\"\r\n                            class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </accordion-group>\r\n        <accordion-group #closingCosts [isOpen]=\"isDownPaymentOpen\">\r\n            <div class=\"row collapser\" accordion-heading data-toggle=\"collapse\">\r\n                <div class=\"col-md-8\">\r\n                    <i [ngClass]=\"{'fa-minus': closingCosts?.isOpen, 'fa-plus': !closingCosts?.isOpen}\" class=\"fa the-icon\"></i> Closing Costs\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.totalClosingCosts\" class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row collapse in ClosingCosts\">\r\n                <div class=\"col-md-12 text-sm\">\r\n                    <span style=\"margin-left: -10px\">BUYER</span>\r\n                    <span style=\"margin-left: 16px\">SELLER</span>\r\n                    <span style=\"margin-left: 33px\">N/A</span>\r\n                    <span style=\"margin-left: 20px\">Include</span>\r\n                    <a href=\"#\" *ngIf=\"!viewMode\" (click)=\"showClosingColstsSettings()\" class=\"pull-right\">\r\n                        <i class=\"fa fa-gear\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"closing-costs\" *ngFor=\"let closingCost of loanOption.closingCosts;let i=index;\">\r\n                    <div *ngIf=\"closingCost.isVisible\">\r\n\r\n                        <div class=\"col-md-4\">\r\n                            <input type=\"range\" (ngModelChange)=\"closingCost.type=$event;calculate()\" [(ngModel)]=\"closingCost.type\" step=\"1\" min=\"1\"\r\n                                max=\"3\">\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            <input type=\"checkbox\" (ngModelChange)=\"closingCost.include=$event;calculateClosingCostInclude()\" [disabled]=\"loanOption.loanMode||closingCost.mode==1\"\r\n                                [(ngModel)]=\"closingCost.include\">\r\n                        </div>\r\n                        <div class=\"col-md-3 no-padding\" *ngIf=\"closingCost.mode==1\">\r\n                            <input type=\"text\" [(ngModel)]=\"closingCost.name\" class=\"form-control cal-input pull-left text-sm\" style=\"width: 50%;\" [disabled]=\"closingCost.rowNo==1||closingCost.rowNo==2||closingCost.rowNo==3||closingCost.rowNo==4||closingCost.rowNo==5\">\r\n                            <input type=\"number\" (ngModelChange)=\"closingCost.percentage=$event;calculate()\" [(ngModel)]=\"closingCost.percentage\" step=\"0.125\"\r\n                                value=\"\" class=\"form-control cal-input\" style=\"width: 50%;\">\r\n                        </div>\r\n                        <div class=\"col-md-3 no-padding\" *ngIf=\"closingCost.mode==2\">\r\n                            <input type=\"text\" [(ngModel)]=\"closingCost.name\" class=\"form-control cal-input pull-right text-sm\" [disabled]=\"closingCost.rowNo==1||closingCost.rowNo==2||closingCost.rowNo==3||closingCost.rowNo==4||closingCost.rowNo==5\">\r\n                        </div>\r\n                        <div class=\"col-md-1 \">\r\n                            <div (click)=\"closingCost.isApr=!closingCost.isApr\" *ngIf=\"closingCost.isApr\" class=\"apr-circle-active\">apr</div>\r\n                            <div (click)=\"closingCost.isApr=!closingCost.isApr\" *ngIf=\"!closingCost.isApr\" class=\"apr-circle\">apr</div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                <input currencyMask type=\"text\" (ngModelChange)=\"closingCost.value=$event;calculate()\" *ngIf=\"closingCost.mode==1\" [(ngModel)]=\"closingCost.value\"\r\n                                    class=\"form-control cal-input pull-right\" disabled>\r\n                                <input currencyMask type=\"text\" (ngModelChange)=\"closingCost.value=$event;calculateClosingCostInclude()\" *ngIf=\"closingCost.mode==2\"\r\n                                    [(ngModel)]=\"closingCost.value\" class=\"form-control cal-input pull-right\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </accordion-group>\r\n        <accordion-group #prepaids [isOpen]=\"isDownPaymentOpen\">\r\n            <div class=\"row collapser\" accordion-heading data-toggle=\"collapse\">\r\n                <div class=\"col-md-8\">\r\n                    <i [ngClass]=\"{'fa-minus': prepaids?.isOpen, 'fa-plus': !prepaids?.isOpen}\" class=\"fa the-icon\"></i> Prepaids\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.prePaids.totalPrePaids\" class=\"form-control cal-input pull-right\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"collapse in Prepaids\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <div class=\"col-xs-3\">\r\n                            <input type=\"text\" (ngModelChange)=\"loanOption.prePaids.monthsOfTax=$event;calculate()\" [(ngModel)]=\"loanOption.prePaids.monthsOfTax\"\r\n                                class=\"form-control cal-input pull-right\">\r\n                        </div>\r\n                        <div class=\"col-xs-5\">Months Of Tax</div>\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                                <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.prePaids.monthsOfTaxAmount\" value=\"1119\" class=\"form-control cal-input pull-right\"\r\n                                    disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            <a *ngIf=\"!viewMode\" href=\"#\" (click)=\"showPrepaidsSettings()\">\r\n                                <i class=\"fa fa-gear\"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <input type=\"text\" (ngModelChange)=\"loanOption.prePaids.monthsOfInsurance=$event;calculate()\" [(ngModel)]=\"loanOption.prePaids.monthsOfInsurance\"\r\n                            class=\"form-control cal-input pull-right\">\r\n                    </div>\r\n                    <div class=\"col-xs-5\">Months Of Insurance</div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.prePaids.monthsOfInsuranceAmount\" value=\"20\" class=\"form-control cal-input pull-right\"\r\n                                disabled>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <input type=\"text\" (ngModelChange)=\"loanOption.prePaids.daysOfInterest=$event;calculate()\" [(ngModel)]=\"loanOption.prePaids.daysOfInterest\"\r\n                            class=\"form-control cal-input pull-right\">\r\n                    </div>\r\n                    <div class=\"col-xs-5\">Days Of Interest</div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.prePaids.daysOfInterestAmount\" value=\"458\" class=\"form-control cal-input pull-right\"\r\n                                disabled>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </accordion-group>\r\n        <accordion-group #credits [isOpen]=\"isDownPaymentOpen\">\r\n            <div class=\"row collapser\" accordion-heading data-toggle=\"collapse\" href=\".Credits\">\r\n                <div class=\"col-md-8\">\r\n                    <i [ngClass]=\"{'fa-minus': credits?.isOpen, 'fa-plus': !credits?.isOpen}\" class=\"fa the-icon\"></i> Credits\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                        <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.credits.totalCredits\" class=\"form-control cal-input pull-right\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"collapse in Credits\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8\">\r\n                        <input type=\"text\" [(ngModel)]=\"loanOption.credits.credit1Name\" value=\"Option Fee Money\" class=\"form-control cal-input pull-right text-bold\">\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.credits.credit1Amount=$event;calculate()\" [(ngModel)]=\"loanOption.credits.credit1Amount\"\r\n                                value=\"1704\" class=\"form-control cal-input pull-right text-bold\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <a *ngIf=\"!viewMode\" href=\"#\">\r\n                            <i class=\"fa fa-gear\" (click)=\"showCreditsSettings()\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8\">\r\n                        <input type=\"text\" [(ngModel)]=\"loanOption.credits.credit2Name\" class=\"form-control cal-input pull-right text-bold\">\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.credits.credit2Amount=$event;calculate()\" [(ngModel)]=\"loanOption.credits.credit2Amount\"\r\n                                class=\"form-control cal-input pull-right text-bold\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8\">\r\n                        <input type=\"text\" [(ngModel)]=\"loanOption.credits.credit3Name\" class=\"form-control cal-input pull-right text-bold\">\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.credits.credit3Amount=$event;calculate()\" [(ngModel)]=\"loanOption.credits.credit3Amount\"\r\n                                class=\"form-control cal-input pull-right text-bold\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8\">\r\n                        <input type=\"text\" [(ngModel)]=\"loanOption.credits.credit4Name\" class=\"form-control cal-input pull-right text-bold\">\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                            <input currencyMask type=\"text\" (ngModelChange)=\"loanOption.credits.credit4Amount=$event;calculate()\" [(ngModel)]=\"loanOption.credits.credit4Amount\"\r\n                                class=\"form-control cal-input pull-right text-bold\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </accordion-group>\r\n    </accordion>\r\n    <div class=\"panel-body loan-option\">\r\n        <div class=\"row loan-option-total\">\r\n            <div class=\"col-xs-12\">Approximate</div>\r\n            <div class=\"col-xs-2 text-right\">\r\n                APR\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <input type=\"text\" [(ngModel)]=\"loanOption.apr\" class=\"form-control cal-input pull-right\" disabled>\r\n            </div>\r\n            <div class=\"col-xs-3 text-right\">\r\n                Cash to close\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\" style=\"padding: 5px 5px;\">$</span>\r\n                    <input currencyMask type=\"text\" [(ngModel)]=\"loanOption.cashToClose\" class=\"form-control cal-input pull-right\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 1248:
/***/ (function(module, exports) {

module.exports = "<!--<input type=\"text\" [(ngModel)]=\"hero.name\" name=\"name\" placeholder=\"Enter your full name here..\" class=\"form-control m-b\" />\r\n                        {{hero.name}}-->\r\n<!-- <div class=\"home-container\"> -->\r\n<app-basic-details *ngIf='loan' [basicDetails]=\"loan\" [viewMode]=\"viewMode\"> </app-basic-details>\r\n<div class=\"row section-row-padding\">\r\n    <!-- jithin{{loan | json }}john -->\r\n    <!-- {{loan.loanOptions|json}} -->\r\n    <app-income-debts-container [viewMode]=\"viewMode\" [incomes]=\"loan.incomes\" [debts]=\"loan.debts\" [borrowers]=\"loan.borrowers\" [loan]=\"loan\" [totalIncome]=\"loan.totalIncome\"\r\n        [totalDebts]=\"loan.totalDebts\"></app-income-debts-container>\r\n</div>\r\n<app-loan-option-container [viewMode]=\"viewMode\" [loanOptions]=\"loan.loanOptions\" [incomes]=\"loan.incomes\" [debts]=\"loan.debts\" [borrowers]=\"loan.borrowers\"></app-loan-option-container>"

/***/ }),

/***/ 1249:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Prepaids Default</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-6 control-label\">Months Of Tax</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" [(ngModel)]=\"prePaids.monthsOfTax\" class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-6 control-label\">Months Of Insurance</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" [(ngModel)]=\"prePaids.monthsOfInsurance\" class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-6 control-label\">Days Of Interest</label>\r\n            <div class=\"col-sm-6\">\r\n                <input type=\"text\" [(ngModel)]=\"prePaids.daysOfInterest\" class=\"form-control m-b\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePrepaids();\">Save</button>\r\n</div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map