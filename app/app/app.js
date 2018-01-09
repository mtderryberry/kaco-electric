/**
*  Module
*  kacoElectricApp
* Description - Main module for Kaco Electric 
*/

(function () {

  angular.module('kacoElectricApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'thatisuday.ng-image-gallery'])

  .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	}])

})();
