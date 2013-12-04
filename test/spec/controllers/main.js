'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngchessApp'));
  beforeEach(module('chess'));

  var MainCtrl,
    rootScope,
    scope,
    chessboard;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $compile) {
    rootScope = $rootScope
    scope = rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    chessboard = angular.element('<cn-chessboard></cn-chessboard>');
    chessboard = $compile(chessboard)(scope);
    scope.$digest();

    spyOn(rootScope, '$emit').andCallThrough();
  }));

  it('#init', function () {
    expect(typeof scope.board).toBe('object');
    expect(scope.rows.join('')).toBe('87654321');
    expect(scope.cols.join('')).toBe('abcdefgh');
    expect(scope.selected).toBe(false);
  });

  describe('click twice in squares', function() {
    describe('different squares', function() {
      it('should move the piece on the board', function() {
        var squares = chessboard[0].querySelectorAll('.chessboard__square');

        squares[48].click();
        expect(rootScope.$emit).toHaveBeenCalledWith('user:click', {row: '2', col: 'a'});

        squares[40].click();
        expect(rootScope.$emit).toHaveBeenCalledWith('user:click', {row: '3', col: 'a'});

        expect(scope.board['a3']).toBe('wP');
      });
    });

    describe('same square', function() {
      it('should not clean the piece', function() {
        var squares = chessboard[0].querySelectorAll('.chessboard__square');
        var expected = 0;
        squares[48].click();
        squares[48].click();
        expected = squares[48].querySelectorAll('img').length;
        expect(expected).toBeGreaterThan(0);
      });
    })

  })

});
