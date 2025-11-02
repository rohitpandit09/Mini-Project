// Single Player 

let cells = document.querySelectorAll(".cell");
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    if (board[i] === "" && !gameOver) {
      // player move
      board[i] = "X";
      cell.textContent = "X";

      if (checkWinner("X")) {
        alert("You win!");
        gameOver = true;
        return;
      }

      // computer move
      computerMove();
    }
  });
});

function computerMove() {
  let empty = [];

  // find empty boxes
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      empty.push(i);
    }
  }

  // if no empty spots left
  if (empty.length === 0) {
    alert("Draw!");
    gameOver = true;
    return;
  }

  // pick random spot
  let random = Math.floor(Math.random() * empty.length);
  let move = empty[random];

  board[move] = "O";
  cells[move].textContent = "O";

  if (checkWinner("O")) {
    alert("Computer wins!");
    gameOver = true;
  }
}

function checkWinner(player) {
  let wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let pattern of wins) {
    if (
      board[pattern[0]] === player &&
      board[pattern[1]] === player &&
      board[pattern[2]] === player
    ) {
      return true;
    }
  }
  return false;
}

// Restart Button 

let restart = document.querySelector("#resetBtn");

restart.addEventListener("click",()=>{

    alert("Game Restart");
    location.reload();
});




