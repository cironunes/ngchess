'use strict';

angular.module('ngchessApp')
  .directive('cnChessboard', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/tpl/chessboard.html'
    };
  });
