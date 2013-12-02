'use strict';

angular.module('ngchessApp')
  .controller('MainCtrl', function ($rootScope, $scope) {
    $scope.board = {
      // white
      a1: 'wR',
      b1: 'wN',
      c1: 'wB',
      d1: 'wQ',
      e1: 'wK',
      f1: 'wB',
      g1: 'wN',
      h1: 'wR',
      // white peons
      a2: 'wP',
      b2: 'wP',
      c2: 'wP',
      d2: 'wP',
      e2: 'wP',
      f2: 'wP',
      g2: 'wP',
      h2: 'WP',
      // black
      a8: 'bR',
      b8: 'bN',
      c8: 'bB',
      d8: 'bQ',
      e8: 'bK',
      f8: 'bB',
      g8: 'bN',
      h8: 'bR',
      // black peons
      a7: 'bP',
      b7: 'bP',
      c7: 'bP',
      d7: 'bP',
      e7: 'bP',
      f7: 'bP',
      g7: 'bP',
      h7: 'bP',
    };
    $scope.rows = '12345678'.split('').reverse();
    $scope.cols = 'abcdefgh'.split('');

    $scope.selected = false;
    $scope.last = '';
    $scope.selectedPiece = '';

    $rootScope.$on('user:click', function($ev, data) {
      $scope.$apply(function() {
        var current = data.col + data.row;
        if($scope.selected && $scope.selectedPiece) {
          $scope.board[current] = $scope.selectedPiece;
          delete $scope.board[$scope.last];
        }

        $scope.selected = !$scope.selected;
        $scope.last = data.col + data.row;
        $scope.selectedPiece = $scope.board[data.col + data.row];
      });
    });
  });
