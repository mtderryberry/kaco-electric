(function () {


    angular.module('kacoElectricApp')
        .config(homeRoute);

    homeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/home');

        $stateProvider
            .state('root.home', {
                url: '/home',
                template: require('./home.html'),
                resolve: {}
            })
    };

})();