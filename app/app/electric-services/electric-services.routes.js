(function () {


    angular.module('kacoElectricApp')
        .config(servicesRoute);

    servicesRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function servicesRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root.services', {
                url: '/services',
                template: require('./electric-services.html'),
                resolve: {}
            })
    };

})();