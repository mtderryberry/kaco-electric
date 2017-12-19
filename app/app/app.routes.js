(function () {
    angular.module('kacoElectricApp')
        .config(appRoute);

    appRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider            
            .state('root', {
                abstract: true,
                views: {
                    '@': {                  //basic layout
                        template: '<div ui-view="navbar" class="navbar-view"></div>' +
                                    '<div ui-view="content" class="content-view"></div>'
                    },
                    'navbar@root': {        //the common navbar  for the portal
                        template: require('./components/navbar/navbar.html'),
                    },
                    'content@root': {       //the main content for the portal
                        template: '<div ui-view class="page-content"></div>'
                    } 
                }
            });
    }
})();
