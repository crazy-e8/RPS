const MAXROUNDS = 5;

const buttons = document.querySelectorAll(".input-button-wrapper");
const uiPlayerChoice = document.getElementById("player_choice_img");
const uiComputerChoice = document.getElementById("computer_choice_img");
const uiRoundResult = document.getElementById("round-result");
const uiHumanScore = document.getElementById("human-score");
const uiComputerScore = document.getElementById("computer-score");

let humanChoice = "";
let computerChoice = "";
let roundResult = "";

let humanScore = 0;
let computerScore = 0;

function setComputerChoice() {
  var randomNumber = Math.floor(Math.random() * buttons.length);
  computerChoice = buttons[randomNumber].getAttribute("id");
}

function playRound() {
  setComputerChoice();
  humanChoice = this.getAttribute("id");
  uiPlayerChoice.src = "icons/" + humanChoice + ".png";
  uiComputerChoice.src = "icons/" + computerChoice + ".png";
  win = checkWinnerRound();

  switch (win) {
    case "human":
      humanScore++;
      break;

    case "computer":
      computerScore++;
      break;

    default:
      break;
  }

  uiHumanScore.textContent = humanScore;
  uiComputerScore.textContent = computerScore;

  if (computerScore == 5) {
  }
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

  switch (roundResult) {
    case "Computer Wins!":
      return "computer";
    case "You Win!":
      return "human";
    case "DRAW":
      return "draw";
    default:
      return "draw";
  }
}

for (const button of buttons) {
  button.addEventListener("click", playRound, false);
}
