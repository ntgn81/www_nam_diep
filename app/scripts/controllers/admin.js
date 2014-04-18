'use strict';

angular.module('wwwNamDiepApp')
  .controller('AdminCtrl', function ($scope, $http, $modal, Guest) {
    // $http.get('/api/guests').success(function(guests) {
    //   guests = [];
    //   for (var i = 0; i < 30; i++) {
    //     guests.push({
    //       _id: i,
    //       name: 'Guest number ' + i
    //     });
    //   }
    //   $scope.guests = guests;
    // });
    $scope.select = function(guest) {
      $scope.original = angular.copy(guest);
      $scope.guest = guest;
    };

    $scope.reset = function() {
      angular.copy($scope.original, $scope.guest);
    };

    $scope.cancel = function() {
      $scope.guest = new Guest();
      $scope.original = new Guest();
    };

    $scope.save = function() {
      Guest.update({_id: $scope.guest._id}, $scope.guest);
    };

    $scope.create = function() {
      $scope.guest.$save().then(function(guest){
        $scope.guests.push(guest);
      });
    };

    $scope.validateName = function(name) {
      console.log(name);
      return false;
    };

    $scope.delete = function(guest) {
      guest.$delete({
        _id: guest._id
      });
      console.log($scope.guests.indexOf(guest));
      $scope.guests.splice($scope.guests.indexOf(guest), 1);
    };

    $scope.guests = Guest.query();
    $scope.cancel();
  });
