angular.module('app.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('page', {
            url: '/index',
            templateUrl: 'index.html',
            controller: 'frontendController'
        })

        $urlRouterProvider.otherwise('/index')


    });

