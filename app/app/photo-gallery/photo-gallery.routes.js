(function () {


    angular.module('kacoElectricApp')
        .config(photoRoute);

    photoRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function photoRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root.photo', {
                url: '/photoGallery',
                template: require('./photo-gallery.html'),
                resolve: {}
            })
    };

})();