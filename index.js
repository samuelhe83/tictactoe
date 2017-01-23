console.log('Initializing board');
var board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(board);

var findAvailableMoves = function(board) {
  var availableMoves = '';
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {


      if (typeof board[i][j] === 'number') {
        availableMoves += ' ' + board[i][j] + ',';
      }
    }
  }
  if (availableMoves.length === 0) {
    return 'No more available moves.'
  } else {
    return 'The available moves are' + availableMoves.slice(0, availableMoves.length - 1);

  }
};


console.log(findAvailableMoves(board));


