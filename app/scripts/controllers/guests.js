'use strict';

angular.module('wwwNamDiepApp')
  .controller('GuestsCtrl', function ($scope, $http) {
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
