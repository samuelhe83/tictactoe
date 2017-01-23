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


var chooseMove = function(player, position, board) {
  var boardPositions = {
    1: board[0][0],
    2: board[0][1],
    3: board[0][2],
    4: board[1][0],
    5: board[1][1],
    6: board[1][2],
    7: board[2][0],
    8: board[2][1],
    9: board[2][2]
  };

  if (player === 'X' && boardPositions[position] === 0) {
    boardPositions[position] = 'X';
  } else if (player === 'O' && boardPositions[position] === 0) {
    boardPositions[position = 'O'];
  }
};


