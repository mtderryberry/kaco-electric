/**
*  Module
*  kacoElectricApp
* Description - Main module for Kaco Electric 
*/

(function () {

  angular.module('kacoElectricApp', ['ui.router', 'ngMaterial', 'ngAnimate'])

  .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	}])

})();
