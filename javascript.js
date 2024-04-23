function numberToString(num) {
    if (num === 0) {
        choice = 'Rock';
    }
    else if (num === 1) {
        choice = 'Paper';
    }
    else if (num === 2) {
        choice = 'Scissors';
    }

    return choice;
}
function getComputerChoice() {        
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = numberToString(randomNumber)

    return computerChoice;
}
function getUserChoice() {
    console.log("Choose your option:");
    console.log("1 - Rock");
    console.log("2 - Paper");
    console.log("3 - Scissors");
    
    choice = parseInt(prompt("Enter Your Choice: "))

    if (choice !== 1 && choice !== 2 && choice !== 3) {
        getUserChoice()
    }

    choice = numberToString(choice - 1);
    
    return choice;
}
function checkWinner(user, computer) {
    if (user === computer) {
        console.log('DRAW');
        return 0;
    }
    else if ((user === 'Rock' && computer === 'Paper') || (user === 'Paper' && computer === 'Scissors') || (user === 'Scissors' && computer === 'Rock')) {
        console.log("Computer Wins!");
        return 1;
    }
    else {
        console.log('You Win!')
        return 2;
    }
}

let humanScore = 0;
let computerScore = 0;

while (true) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + computerChoice);
    winner = checkWinner(userChoice, computerChoice);

    if (winner === 1) computerScore++;
    if (winner === 2) humanScore++;
    console.clear();
    console.log('----------------------------------');
    console.log('Your Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
    console.log('----------------------------------');
}