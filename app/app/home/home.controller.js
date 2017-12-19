(function () {
   
    angular.module('kacoElectricApp')
        .controller('HomeCtrl', HomeCtrl);

      //inject the services that need to be used by Home Controller
        HomeCtrl.$inject = ['$scope'];
        

    	function HomeCtrl($scope) {
    		let self = this;
		}
})();
