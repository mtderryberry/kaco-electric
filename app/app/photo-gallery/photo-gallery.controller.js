(function () {
   
    angular.module('kacoElectricApp')
        .controller('PhotoCtrl', PhotoCtrl);

      //inject the services that need to be used by Home Controller
        PhotoCtrl.$inject = ['$scope'];
        

    	function PhotoCtrl($scope) {
    		let self = this;
		}
})();
