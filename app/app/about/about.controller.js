(function () {
  angular.module('kacoElectricApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope'];

  function AboutCtrl($scope) {
    let self = this;

    require("../../assets/images/wires.jpg");

  }

})();
