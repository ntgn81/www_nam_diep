'use strict';

angular.module('wwwNamDiepApp')
  .controller('GuestsCtrl', function ($scope, $http, $modal) {
    $http.get('/api/guests').success(function(guests) {
      $scope.guests = guests;
    });

    $scope.create = function() {
      $modal.open({
        templateUrl: 'partials/guest_edit'
      });
    };

    $scope.edit = function(guest) {
      console.log('edit', guest);
    };

    $scope.delete = function(guest) {
      console.log($scope.guests.indexOf(guest));
      $scope.guests.splice($scope.guests.indexOf(guest), 1);
    };
  });
