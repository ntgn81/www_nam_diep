'use strict';

angular.module('wwwNamDiepApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
      })
      .when('/guests', {
        templateUrl: 'partials/guests',
      })
      // .when('/guest_edit', {
      //   templateUrl: 'partials/guest_edit',
      //   controller: 'GuestEditCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });