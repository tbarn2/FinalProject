'use strict';

angular.module('DanceApp' , ['ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/', //"root" directory
                templateUrl: 'partials/home.html',
            })
            .state('trending', {
                url: '/trending',
                controller: 'DanceCtrl'
            })
            .state('explore', {
                url: '/explore',
                controller: 'DanceCtrl'
            })
            .state('categories', {
                url: '/categories',
                controller: 'DanceCtrl'
            })
            .state('hip-hop', {
                url: '/categories/hip-hop',
                templateUrl: 'partials/hip-hop.html',
                controller: 'DanceCtrl'
            })
            .state('break', {
                url: '/categories/break',
                templateUrl: 'partials/break.html',
                controller: 'DanceCtrl'

            })
            .state('swing', {
                url: '/categories/swing',
                templateUrl: 'partials/swing.html',
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
        // $http.get('data/moves.json').then(function(response) {
        //     console.log("GETTING JSON")
        //     $scope.dances = response.data;
        //     console.log("GOTJSON")
        // });
    }])
