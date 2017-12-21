(function () {


    angular.module('kacoElectricApp')
        .config(aboutRoute);

    aboutRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function aboutRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root.about', {
                url: '/about',
                template: require('./about.html'),
                resolve: {}
            })
    };

})();