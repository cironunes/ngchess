'use strict';

angular.module('ngchessApp')
  .directive('cnSquare', function ($rootScope) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        element.bind('click', function() {
          $rootScope.$emit('user:click', {
            row: scope.row,
            col: scope.col
          });
        });
      }
    };
  });
