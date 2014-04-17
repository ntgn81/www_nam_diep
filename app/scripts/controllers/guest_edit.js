'use strict';

angular.module('wwwNamDiepApp')
  .controller('GuestEditCtrl', function ($scope, $http) {

    $scope.save = function(guest) {
      //$http.post('/api/guests', guest, function())
      console.log('saving', guest);
    };
  });
