'use strict';

angular.module('wwwNamDiepApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
