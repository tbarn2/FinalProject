'use strict';

angular.module('DanceApp' , ['ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(function($stateProvider) {
        $stateProvider.
            state('hip-hop', {
                url: '/hip-hop',
                templateUrl: 'partials/categories.html',
                controller: 'DanceCtrl'
            })
            .state('break', {
                url: '/break',
                templateUrl: 'partials/categories.html',
                controller: 'DanceCtrl'

            })
            .state('swing', {
                url: '/swing',
                templateUrl: 'partials/categories.html',
                controller: 'DanceCtrl'
            })
            .state('dance', {
                url: '/{style}/{id}',
                templateUrl:'partials/dance.html',
                controller: 'DanceCtrl'
            })
    })
    .config(function($urlRouterProvider){
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/');
    })
    .controller('DanceCtrl', ['$scope', '$http', function($scope, $http) {

    }])