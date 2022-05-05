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

const p = document.getElementById("p");

// add click event listener to box one (top left box)

boxOne.addEventListener("click", (e) => {
  if (gameBoard[0] != "X" && gameBoard[0] != "O") {
    checkPlayerTurn(e);
    changePlayerMessage();
    gameBoard[0] = boxOne.innerText;
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
    playerTurn.pop();
    playerTurn.push("playerO");
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
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  } else if (
    gameBoard[3] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[5] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  } else if (
    gameBoard[6] === "X" &&
    gameBoard[7] === "X" &&
    gameBoard[8] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  }
  // vertical win logic
  else if (
    gameBoard[0] === "X" &&
    gameBoard[3] === "X" &&
    gameBoard[6] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  } else if (
    gameBoard[1] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[7] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";

  } else if (
    gameBoard[2] === "X" &&
    gameBoard[5] === "X" &&
    gameBoard[8] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  }
  // diagonal win logic
  else if (
    gameBoard[0] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[8] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  } else if (
    gameBoard[2] === "X" &&
    gameBoard[4] === "X" &&
    gameBoard[6] === "X"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player X Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
    modal.style.display = "block";
  } else {
  }
};

// declare player O winner

const declareWinnerO = () => {
  // horizontal win logic
  if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
    changeFontSize();
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[3] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[5] === "O"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[6] === "O" &&
    gameBoard[7] === "O" &&
    gameBoard[8] === "O"
  ) {
    changeFontSize();
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
    changeFontSize();
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[1] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[7] === "O"
  ) {
    changeFontSize();
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "O" &&
    gameBoard[5] === "O" &&
    gameBoard[8] === "O"
  ) {
    changeFontSize();
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
    changeFontSize();
    playerMessage.innerText = `Player O Won! Click 'Restart' to play again.`;
    noMoreClicks();
    declareWinner = true;
  } else if (
    gameBoard[2] === "O" &&
    gameBoard[4] === "O" &&
    gameBoard[6] === "O"
  ) {
    changeFontSize();
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

const checkForTie = () => {
  if (declareWinner === false && onlyString(gameBoard) === true) {
    playerMessage.innerText = "It's a tie! Click 'Restart' to play again.";
    noMoreClicks();
  }
};

// restart the game

restart.addEventListener("click", (e) => {
  gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  playerTurn = ["playerX"];
  playerMessage.classList.remove("rainbowText");
  playerMessage.style.fontSize = "1.5rem";
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


// change player message font size

const changeFontSize = () => {
    playerMessage.style.fontSize = "4vh";
    playerMessage.classList.add("rainbowText");
}


