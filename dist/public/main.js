webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_routes_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_app_routes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_home_home_routes_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_home_home_routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_home_home_routes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_home_home_controller_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_home_home_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_home_home_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_home_home_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_home_home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__app_home_home_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_navbar_navbar_controller_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_navbar_navbar_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__app_components_navbar_navbar_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_navbar_navbar_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_navbar_navbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__app_components_navbar_navbar_scss__);









/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
*  Module
*  kacoElectricApp
* Description - Main module for Kaco Electric 
*/

(function () {

		angular.module('kacoElectricApp', ['ui.router', 'ngMaterial', 'ngAnimate']).config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
				$urlRouterProvider.otherwise('/');
				$locationProvider.html5Mode(true);
		}]);
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    angular.module('kacoElectricApp').config(appRoute);

    appRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('root', {
            abstract: true,
            views: {
                '@': { //basic layout
                    template: '<div ui-view="navbar" class="navbar-view"></div>' + '<div ui-view="content" class="content-view"></div>'
                },
                'navbar@root': { //the common navbar  for the portal
                    template: __webpack_require__(16)
                },
                'content@root': { //the main content for the portal
                    template: '<div ui-view class="page-content"></div>'
                }
            }
        });
    }
})();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"NavbarCtrl\">\n    \n    <md-toolbar>\n        <div class=\"md-toolbar-tools\" id=\"kacoElectricNavbar\">\n            <!-- <img src = \"/assets/kayli-logo-white.png\" alt = \"Test Image\" /> -->\n            <!-- <md-button class=\"md-icon-button\" aria-label=\"menu\">\n                <md-icon md-svg-src=\"/assets/kj-logo.svg\" class=\"header-logo\">\n            </md-button> -->\n            <md-button ui-sref=\"root.home\">Home</md-button>\n            <md-button ui-sref=\"root.about\">About</md-button>\n            <md-button ui-sref=\"root.contact\">Contact</md-button>\n            <span flex></span>\n<!--             <md-button class=\"md-icon-button\" aria-label=\"menu\">\n                <md-icon md-svg-src=\"/assets/facebook-white.svg\" class=\"header-logo\">\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"menu\" href=\"https://www.instagram.com/kayli__jean/\" target=\"_blank\">\n                <md-icon md-svg-src=\"/assets/instagram-white.svg\" class=\"header-logo\">\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"menu\" href=\"https://500px.com/kayli_jean\" target=\"_blank\">\n                <md-icon md-svg-src=\"/assets/five-hundred-pix-white.svg\" class=\"header-logo\">\n            </md-button> -->\n        </div>\n    </md-toolbar>\n\n</div>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

    angular.module('kacoElectricApp').config(homeRoute);

    homeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/home');

        $stateProvider.state('root.home', {
            url: '/home',
            template: __webpack_require__(19),
            resolve: {}
        });
    };
})();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-padding ng-controller=\"HomeCtrl\">\n\t<h1>Kaco Electric</h1>\n</div>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

(function () {

  angular.module('kacoElectricApp').controller('HomeCtrl', HomeCtrl);

  //inject the services that need to be used by Home Controller
  HomeCtrl.$inject = ['$scope'];

  function HomeCtrl($scope) {
    let self = this;
  }
})();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

(function () {
  angular.module('kacoElectricApp').controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope'];

  function NavbarCtrl($scope) {
    let self = this;
  }
})();

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[13]);