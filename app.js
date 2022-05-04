let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerTurn = ["playerX"];
let declareWinner = false;

// cache the dom

const playerMessage = document.getElementById("player-message");

const boxOne = document.getElementById("box-one");
const boxTwo = document.getElementById("box-two");
const boxThree = document.getElementById("box-three");
const boxFour = document.getElementById("box-four");
const boxFive = document.getElementById("box-five");
const boxSix = document.getElementById("box-six");
const boxSeven = document.getElementById("box-seven");
const boxEight = document.getElementById("box-eight");
const boxNine = document.getElementById("box-nine");

const restart = document.getElementById("restart");

// add click event listener to box one (top left box)

boxOne.addEventListener("click", (e) => {
  if (gameBoard[0] != "X" && gameBoard[0] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[0] = boxOne.innerText;
    console.log(`this is gameboard 0 ${gameBoard[0]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxTwo.addEventListener("click", (e) => {
  if (gameBoard[1] != "X" && gameBoard[1] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[1] = boxTwo.innerText;
    console.log(`this is gameboard 1 ${gameBoard[1]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxThree.addEventListener("click", (e) => {
  if (gameBoard[2] != "X" && gameBoard[2] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[2] = boxThree.innerText;
    console.log(`this is gameboard 2 ${gameBoard[2]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxFour.addEventListener("click", (e) => {
  if (gameBoard[3] != "X" && gameBoard[3] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[3] = boxFour.innerText;
    console.log(`this is gameboard 3 ${gameBoard[3]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxFive.addEventListener("click", (e) => {
  if (gameBoard[4] != "X" && gameBoard[4] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[4] = boxFive.innerText;
    console.log(`this is gameboard 4 ${gameBoard[4]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxSix.addEventListener("click", (e) => {
  if (gameBoard[5] != "X" && gameBoard[5] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[5] = boxSix.innerText;
    console.log(`this is gameboard 5 ${gameBoard[5]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxSeven.addEventListener("click", (e) => {
  if (gameBoard[6] != "X" && gameBoard[6] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[6] = boxSeven.innerText;
    console.log(`this is gameboard 6 ${gameBoard[6]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxEight.addEventListener("click", (e) => {
  if (gameBoard[7] != "X" && gameBoard[7] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[7] = boxEight.innerText;
    console.log(`this is gameboard 7 ${gameBoard[7]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

boxNine.addEventListener("click", (e) => {
  if (gameBoard[8] != "X" && gameBoard[8] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[8] = boxNine.innerText;
    console.log(`this is gameboard 8 ${gameBoard[8]}`);
  } else {
  }
  declareWinnerX();
  declareWinnerO();
  checkForTie();
});

// check who's turn it is. Input the appropriate X or O

const checkPlayerTurn = (e) => {
  if (playerTurn[0] === "playerX") {
    e.target.innerText = "X";
    console.log(playerTurn[0]);
    playerTurn.pop();
    playerTurn.push("playerO");
    console.log(playerTurn[0]);
  } else {
    e.target.innerText = "O";
    playerTurn.pop();
    playerTurn.push("playerX");
  }
};

// change player message
const changePlayerMessage = () => {
  if (playerTurn[0] === "playerX") {
    playerMessage.innerText = `It's Player X's turn!`;
  } else {
    playerMessage.innerText = `It's Player O's turn!`;
  }
};

// logic to declare winner

//declare player X winner

const declareWinnerX = () => {
  // horizontal win logic
  if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[3] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[5] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[6] === "X" &&
    gameBoard[7] === "X" &&
    gameBoard[8] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  }
  // vertical win logic
  else if (
    gameBoard[0] === "X" &&
    gameBoard[3] === "X" &&
    gameBoard[6] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[1] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[7] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "X" &&
    gameBoard[5] === "X" &&
    gameBoard[8] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  }
  // diagonal win logic
  else if (
    gameBoard[0] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[8] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[6] === "X"
  ) {
    alert(`Player X won!`);
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else {
  }
};

// declare player O winner

const declareWinnerO = () => {
  // horizontal win logic
  if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[3] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[5] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[6] === "O" &&
    gameBoard[7] === "O" &&
    gameBoard[8] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  }
  // vertical win logic
  else if (
    gameBoard[0] === "O" &&
    gameBoard[3] === "O" &&
    gameBoard[6] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[1] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[7] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "O" &&
    gameBoard[5] === "O" &&
    gameBoard[8] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  }
  // diagonal win logic
  else if (
    gameBoard[0] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[8] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[6] === "O"
  ) {
    alert(`Player O won!`);
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else {
  }
};

// make the grid un-clickable once someone wins

const noMoreClicks = () => {
  boxOne.style.pointerEvents = "none";
  boxTwo.style.pointerEvents = "none";
  boxThree.style.pointerEvents = "none";
  boxFour.style.pointerEvents = "none";
  boxFive.style.pointerEvents = "none";
  boxSix.style.pointerEvents = "none";
  boxSeven.style.pointerEvents = "none";
  boxEight.style.pointerEvents = "none";
  boxNine.style.pointerEvents = "none";
};

// make grid clickable on restart

const allClicks = () => {
  boxOne.style.pointerEvents = "auto";
  boxTwo.style.pointerEvents = "auto";
  boxThree.style.pointerEvents = "auto";
  boxFour.style.pointerEvents = "auto";
  boxFive.style.pointerEvents = "auto";
  boxSix.style.pointerEvents = "auto";
  boxSeven.style.pointerEvents = "auto";
  boxEight.style.pointerEvents = "auto";
  boxNine.style.pointerEvents = "auto";
};

// check if there's a tie

function onlyString(array) {
  return array.every((element) => {
    return typeof element === "string";
  });
}

console.log(onlyString(gameBoard));

const checkForTie = () => {
  if (declareWinner === false && onlyString(gameBoard) === true) {
    alert("The game is over, it's a tie!");
    playerMessage.innerText = "It's a tie! Click 'Restart' to play again.";
    noMoreClicks();
  }
};

// restart the game

restart.addEventListener("click", (e) => {
  gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  playerTurn = ["playerX"];
  playerMessage.innerText = `It's Player X's turn!`;
  boxOne.innerText = "";
  boxTwo.innerText = "";
  boxThree.innerText = "";
  boxFour.innerText = "";
  boxFive.innerText = "";
  boxSix.innerText = "";
  boxSeven.innerText = "";
  boxEight.innerText = "";
  boxNine.innerText = "";
  allClicks();
  declareWinner = false;
});
