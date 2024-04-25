const buttons = document.querySelectorAll(".input-button-wrapper");
const uiPlayerChoice = document.getElementById("player_choice_img");
const uiComputerChoice = document.getElementById("computer_choice_img");

let humanChoice = "";
let computerChoice = "";

function setComputerChoice() {
  var randomNumber = Math.floor(Math.random() * buttons.length);
  computerChoice = buttons[randomNumber].getAttribute("id");
}

function playRound() {
  setComputerChoice();
  humanChoice = this.getAttribute("id");
  uiPlayerChoice.src = "icons/" + humanChoice + ".png";
  uiComputerChoice.src = "icons/" + computerChoice + ".png";
}

for (const button of buttons) {
  button.addEventListener("click", playRound, false);
}
