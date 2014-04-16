'use strict';

angular.module('wwwNamDiepApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      title: 'Home',
      link: '/'
    }, {
      title: 'Guests',
      link: '/guests'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
