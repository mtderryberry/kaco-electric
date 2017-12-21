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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_about_about_routes_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_about_about_routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__app_about_about_routes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_about_about_controller_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_about_about_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__app_about_about_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_about_about_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_about_about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__app_about_about_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_contact_contact_routes_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_contact_contact_routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__app_contact_contact_routes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_contact_contact_controller_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_contact_contact_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__app_contact_contact_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_contact_contact_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_contact_contact_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__app_contact_contact_scss__);















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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

    angular.module('kacoElectricApp').config(aboutRoute);

    aboutRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function aboutRoute($stateProvider, $urlRouterProvider) {

        $stateProvider.state('root.about', {
            url: '/about',
            template: __webpack_require__(25),
            resolve: {}
        });
    };
})();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-padding ng-controller=\"AboutCtrl\" class=\"about-all\">\n\t<div class=\"about-content\">\n\t\t<div class=\"about-title\">\n\t\t\t<h2 class=\"md-display\">\n\t\t\t\tAbout Kaco Electric\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"about-body\">\n\t\t\t<h4 class=\"md-display\">\n\t\t\t\tTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test \n\t\t\t</h4>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

(function () {
  angular.module('kacoElectricApp').controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope'];

  function AboutCtrl($scope) {
    let self = this;
  }
})();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

    angular.module('kacoElectricApp').config(contactRoute);

    contactRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function contactRoute($stateProvider, $urlRouterProvider) {

        $stateProvider.state('root.contact', {
            url: '/contact',
            template: __webpack_require__(29),
            resolve: {}
        });
    };
})();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" ng-controller=\"ContactCtrl\" class=\"contact-page\">\n\t<div class=\"contact-content\">\n\t\t<div class=\"contact-title\">\n\t\t\t<h1 class=\"md-display-2\">Contact Us</h1>\n\t\t</div>\n\t\t<div class=\"contact-body\">\n\t\t\t<h3 class=\"md-display\">\n\t\t\t\tTo inquire about our work, email test@gmail.com or fill out the form below.\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"contact-form\">\n\t\t\t<form name=\"contactForm\">\n\t\t\t\t<div layout=\"row\">\n\t\t\t\t\t<div layout=\"column\" flex>\n\t\t\t\t\t\t<md-input-container flex>\n\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t<input required=\"\" name=\"clientName\" ng-model=\"contact.clientName\">\n\t\t\t\t\t\t\t<div ng-messages=\"contactForm.clientName.$error\">\n\t\t\t\t\t\t\t\t<div ng-message=\"required\">This is required.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</md-input-container>\n\n\t\t\t\t\t\t<md-input-container class=\"md-block\" flex>\n\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t<input required=\"\" type=\"email\" name=\"clientEmail\" ng-model=\"contact.clientEmail\" minlength=\"8\" maxlength=\"100\" ng-pattern=\"/^.+@.+\\..+$/\">\n\n\t\t\t\t\t\t\t<div ng-messages=\"contactForm.clientEmail.$error\" role=\"alert\">\n\t\t\t\t\t\t\t<div ng-message-exp=\"['required', 'minlength', 'maxlength', 'pattern']\">\n\t\t\t\t\t\t\t\tYour email must be between 8 and 100 characters long and look like an e-mail address.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</md-input-container>\n\n\t\t\t\t\t\t<md-input-container flex>\n\t\t\t\t\t\t\t<label>Subject</label>\n\t\t\t\t\t\t\t<input required=\"\" name=\"clientSubject\" ng-model=\"contact.clientSubject\">\n\t\t\t\t\t\t\t<div ng-messages=\"contactForm.clientSubject.$error\">\n\t\t\t\t\t\t\t\t<div ng-message=\"required\">This is required.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div layout=\"row\" flex>\n\t\t\t\t\t\t<md-input-container class=\"md-block contact-message-textarea\">\n\t\t\t\t\t\t\t<label>Message</label>\n\t\t\t\t\t\t\t<textarea ng-model=\"contact.message\" name=\"message\" md-maxlength=\"150\" rows=\"8\" md-select-on-focus required></textarea>\n\t\t\t\t\t\t\t<div ng-messages=\"contactForm.message.$error\">\n\t\t\t\t\t\t\t\t<div ng-message=\"required\">This is required.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div layout=\"row\">\n\t\t\t\t\t<md-button type=\"submit\" class=\"contact-submit md-primary md-raised\">Submit</md-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

(function () {
		angular.module('kacoElectricApp').controller('ContactCtrl', ContactCtrl);

		ContactCtrl.$inject = ['$scope'];

		function ContactCtrl($scope) {
				let self = this;

				$scope.contact = {};

				// require("../../assets/images/ocean.jpg");

				// $scope.sendEmail = function() {

				//     const ses = s3Svc.getSES();

				// 	// Create sendEmail params 
				// 	var params = {
				// 		Destination: { /* required */
				// 			CcAddresses: [
				// 				$scope.contact.clientEmail,
				// 				/* more items */
				// 			],
				// 			ToAddresses: [
				// 				'mderryberryt@gmail.com',
				// 				/* more items */
				// 			]
				// 		},
				// 		Message: { /* required */
				// 			Body: { /* required */
				// 				Text: {
				// 					Charset: "UTF-8",
				// 					Data: $scope.contact.message
				// 				}
				// 			},
				// 			Subject: {
				// 				Charset: 'UTF-8',
				// 				Data: $scope.contact.clientSubject
				// 			}
				// 		},
				// 		Source: 'kaylijeansite@gmail.com', /* required */
				// 		ReplyToAddresses: [
				// 			/* more items */
				// 		],
				// 	};       

				// 	// Create the promise and SES service object
				// 	var sendPromise = ses.sendEmail(params).promise();

				// 	// Handle promise's fulfilled/rejected states
				// 	sendPromise
				// 		.then(function(data) {
				// 			console.log(data.MessageId);
				// 		}).catch(function(err) {
				// 			console.error(err, err.stack);
				// 		});

				// }

		}
})();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[13]);