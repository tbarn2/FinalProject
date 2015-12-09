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
            .state('hip-hop', {
                url: '/hip-hop',
                templateUrl: 'partials/hip-hop.html',
                controller: 'DanceCtrl'
            })
            .state('break', {
                url: '/break',
                templateUrl: 'partials/break.html',
                controller: 'DanceCtrl'

            })
            .state('swing', {
                url: '/swing',
                templateUrl: 'partials/swing.html',
                controller: 'DanceCtrl'
            })
            .state('dance', {
                url: '/dance/{id}',
                templateUrl:'partials/dance.html',
                controller: 'MoveCtrl'
            })
    })
    .config(function($urlRouterProvider){
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/');
    })
    .controller('DanceCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/moves.json').then(function(response) {
        //     console.log("GETTING JSON")
        $scope.dances = response.data;
        //     console.log("GOTJSON")
         });
    }]).controller('MoveCtrl', ['$scope', '$http', '$stateParams', '$filter', function($scope, $http, $stateParams, $filter) {

    $http.get('data/moves.json').then(function(response) {
        $scope.dances = $filter('filter')(response.data, { //filter the array
            id: $stateParams.id //for items whose id property is targetId
        }, true)[0]; //save the 0th result
    });

}])
