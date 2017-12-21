(function () {


    angular.module('kacoElectricApp')
        .config(contactRoute);

    contactRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function contactRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root.contact', {
                url: '/contact',
                template: require('./contact.html'),
                resolve: {}
            })
    };

})();