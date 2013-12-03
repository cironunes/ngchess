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

    spyOn(rootScope, '$emit');
  }));

  it('#init', function () {
    expect(typeof scope.board).toBe('object');
    expect(scope.rows.join('')).toBe('87654321');
    expect(scope.cols.join('')).toBe('abcdefgh');
    expect(scope.selected).toBe(false);
  });

  it('#user:click', function() {
    var squares = chessboard[0].querySelectorAll('.chessboard__square');

    squares[48].click();

    expect(rootScope.$emit).toHaveBeenCalledWith('user:click', {row: '2', col: 'a'});

    squares[40].click();
    expect(rootScope.$emit).toHaveBeenCalledWith('user:click', {row: '3', col: 'a'});

    // expect(scope.board['a3']).toBe('wP')
  });
});
