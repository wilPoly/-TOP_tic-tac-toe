// DONE
// Set array in a Gameboard object
// Store gameboard in an array
// 3 columns - 3 rows (2D array)
// display board

// TODO
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
        board[i].push(Cell()); // TODO: function to add content of cell
      }
    }

  const printBoard = () => {
    for (let i = 0; i < board.length; i++) {
        console.log(`[${board[i]}]`);
      }
    // console.log(board);
  }

  const placeToken = (row, column, player) => {
    const availableCells = board.filter((row) => row[column] === "");

    if (!availableCells){
      console.log("Cell is already taken!");
      return;
    }

    board[row][column].addToken(player);
  }

  return {
    printBoard,
    placeToken
  };
}

function Cell() {
  let value = "";

  const addToken = (player) => {
    value = player;
  }

  const getValue = () => value;

  return {
    addToken,
    getValue
  }
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
    name: playerOneName,
    token: "X"
    },
    {
      name: playerTwoName,
      token: "O"
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`It's ${getActivePlayer().name}'s turn`);
  }

  const playRound = (row, column) => {
    console.log(`Placing ${getActivePlayer().name}'s token at position row:${row}, column: ${column}`);
    board.placeToken(row, column, getActivePlayer().token);
  }
  
}

// Game controller object
// sets game state and players' turns
// create players objects
