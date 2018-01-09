(function () {
  angular.module('kacoElectricApp')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope'];

  function NavbarCtrl($scope) {
    let self = this;

    require("../../../assets/images/kaco-logo.png")
    require("../../../assets/images/kaco-logo-black.png")
  }

})();
