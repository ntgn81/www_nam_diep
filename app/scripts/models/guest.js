'use strict';

angular.module('wwwNamDiepApp')
  .service('Guest', function($resource) {
    return $resource('api/guests/:_id', {}, {
      update: {
        method: 'PUT'
      }
    });
  });