
function getComputerChoice() {
    
    const compChoice = [
        'rock',
        'paper',
        'scissors'
    ]

    return compChoice[Math.floor(Math.random() * compChoice.length)];
};

function playRound(playerSelection, computerSelection) {

    // let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    // let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'You won! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lost! ' + computerSelection + ' beats ' + playerSelection;
    } 
}

for(let i = 0; i < 5; i++) {
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    let playerSelection = userChoice;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    // return result
    console.log(result);
}

console.log(playRound());
