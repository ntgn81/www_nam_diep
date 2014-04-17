'use strict';

angular.module('wwwNamDiepApp')
  .controller('AdminCtrl', function ($scope, $http, $modal) {
    $http.get('/api/guests').success(function(guests) {
      guests = [];
      for (var i = 0; i < 30; i++) {
        guests.push({
          _id: i,
          name: 'Guest number ' + i
        });
      }
      $scope.guests = guests;
    });

    $scope.select = function(guest) {
      $scope.selectedGuestOriginal = angular.copy(guest);
      $scope.selectedGuest = guest;
    };

    $scope.cancel = function() {
      angular.copy($scope.selectedGuestOriginal, $scope.selectedGuest);
    }

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
