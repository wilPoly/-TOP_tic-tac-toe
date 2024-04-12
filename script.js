// Set array in a Gameboard object
// Store gameboard in an array
// 3 columns - 3 rows (2D array)
// display board
// player actions
// check if cell can be played (empty?)
// set cell content to token

function Gameboard() {
  const board = [];
  const columns = 3;
  const rows = 3;

  for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push("x");
      }
    }

  const printBoard = () => {
    let row, cell;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        console.log(`[${board[i][j]}] `);
      }
      console.log(`\n`);
    }
  }
  
  return { printBoard };
}

const board = Gameboard();
board.printBoard();

// Game controller object
// sets game state and players' turns
// create players objects
