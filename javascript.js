const buttons = document.querySelectorAll(".input-button-wrapper");
const uiPlayerChoice = document.getElementById("player_choice_img");
const uiComputerChoice = document.getElementById("computer_choice_img");
const uiRoundResult = document.getElementById("round-result");

let humanChoice = "";
let computerChoice = "";
let roundResult = "";

function setComputerChoice() {
  var randomNumber = Math.floor(Math.random() * buttons.length);
  computerChoice = buttons[randomNumber].getAttribute("id");
}

function playRound() {
  setComputerChoice();
  humanChoice = this.getAttribute("id");
  uiPlayerChoice.src = "icons/" + humanChoice + ".png";
  uiComputerChoice.src = "icons/" + computerChoice + ".png";
  checkWinnerRound();
}

function checkWinnerRound() {
  if (humanChoice === computerChoice) {
    roundResult = "DRAW";
  }
  //   human lose
  else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    roundResult = "Computer Wins!";
  }
  //   human wins
  else {
    roundResult = "You Win!";
  }

  uiRoundResult.textContent = roundResult;
}

for (const button of buttons) {
  button.addEventListener("click", playRound, false);
}
