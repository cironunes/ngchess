'use strict';

describe('Directive: chessboard', function () {

  // load the directive's module
  beforeEach(module('ngchessApp'));
  beforeEach(module('app/views/tpl/chessboard.html'));

  var element,
  	rootScope,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
  	rootScope = $rootScope;
    scope = rootScope.$new();

  	scope.rows = '12345678'.split('');
    scope.cols = 'abcdefgh'.split('').reverse();
    scope.board = {
      a1: 'wR',
      b1: 'wN',
      c1: 'wB',
      d1: 'wQ',
      e1: 'wK',
      f1: 'wB',
      g1: 'wN',
      h1: 'wR',

      a2: 'wP',
      b2: 'wP',
      c2: 'wP',
      d2: 'wP',
      e2: 'wP',
      f2: 'wP',
      g2: 'wP',
      h2: 'WP',


      a8: 'bR',
      b8: 'bN',
      c8: 'bB',
      d8: 'bQ',
      e8: 'bK',
      f8: 'bB',
      g8: 'bN',
      h8: 'bR',

      a7: 'bP',
      b7: 'bP',
      c7: 'bP',
      d7: 'bP',
      e7: 'bP',
      f7: 'bP',
      g7: 'bP',
      h7: 'bP',
    };

    element = angular.element('<cn-chessboard></cn-chessboard>');
    element = $compile(element)(scope);
    scope.$digest();

    spyOn(rootScope, '$emit');
  }));

  it('#init', function () {
  	var board = element[0].querySelectorAll('.chessboard').length;
  	var squares = element[0].querySelectorAll('.chessboard__square').length;
  	var pieces = element[0].querySelectorAll('.chessboard__piece').length;

    expect(board).toBe(1);
    expect(squares).toBe(64);
    expect(pieces).toBe(32);
  });

});
