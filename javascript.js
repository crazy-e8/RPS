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
        console.log('DRAW')
    }
    else if ((user === 'Rock' && computer === 'Paper') || (user === 'Paper' && computer === 'Scissors') || (user === 'Scissors' && computer === 'Rock')) {
        console.log("Computer Wins!");
    }
    else {
        console.log('You Win!')
    }
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

console.log('You chose: ' + userChoice);
console.log('Computer chose: ' + computerChoice);
checkWinner(userChoice, computerChoice);