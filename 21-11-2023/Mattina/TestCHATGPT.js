// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to initialize the game board
function initializeBoard() {
  return [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ];
}

// Function to display the current state of the board
function displayBoard(board) {
  console.log('\nCurrent Board:');
  for (let row of board) {
    console.log(row.join(' | '));
  }
  console.log();
}

// Function to check if a player has won
function checkWin(board, player) {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
        (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
      return true;
    }
  }

  // Check diagonals
  if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
    return true;
  }

  return false;
}

// Function to check if the board is full (a tie)
function isBoardFull(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell !== 'X' && cell !== 'O') {
        return false;
      }
    }
  }
  return true;
}

// Function to let the CPU make a move
function makeCPUMove(board) {
  // Get a list of available positions
  const availablePositions = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== 'X' && board[i][j] !== 'O') {
        availablePositions.push({ row: i, col: j });
      }
    }
  }

  // Choose a random available position
  const randomIndex = getRandomInt(0, availablePositions.length - 1);
  const { row, col } = availablePositions[randomIndex];

  // Make the move
  board[row][col] = 'O';
}

// Function to play the game
function playGame() {
  let currentPlayer = 'X';
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    // Take player input or let the CPU make a move
    if (currentPlayer === 'X') {
      let move = prompt(`${currentPlayer}'s turn. Enter a position (1-9): `);

      // Check if the input is valid
      if (!/[1-9]/.test(move)) {
        console.log('Invalid input. Please enter a number between 1 and 9.');
        continue;
      }

      // Convert input to row and column indices
      let row = Math.floor((move - 1) / 3);
      let col = (move - 1) % 3;

      // Check if the chosen cell is empty
      if (board[row][col] === 'X' || board[row][col] === 'O') {
        console.log('Cell already taken. Choose another position.');
        continue;
      }

      // Make the move
      board[row][col] = currentPlayer;
    } else {
      makeCPUMove(board);
    }

    // Check for a win
    if (checkWin(board, currentPlayer)) {
      displayBoard(board);
      console.log(`${currentPlayer} wins!`);
      break;
    }

    // Check for a tie
    if (isBoardFull(board)) {
      displayBoard(board);
      console.log('It\'s a tie!');
      break;
    }

    // Switch to the other player
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

// Run the game
playGame();
