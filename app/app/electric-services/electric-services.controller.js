(function () {
   
    angular.module('kacoElectricApp')
        .controller('ServicesCtrl', ServicesCtrl);

      //inject the services that need to be used by Home Controller
        ServicesCtrl.$inject = ['$scope'];
        

    	function ServicesCtrl($scope) {
    		let self = this;
		}
})();
