
const choiceForComputer = [
    "rock",
    "paper",
    "scissors"
]

let playerchoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();

console.log(playerchoice);

// Getting random computer choice

function getComputerChoice() {

   const comp1 = choiceForComputer[Math.floor(Math.random() * choice.length)];

   if(comp1 === playerchoice) {
    console.log("Tie!");
    // return "Tie!";
   } else if(comp1 === 'paper' && playerchoice === 'rock') {
    console.log("comp wins! paper covers rock!");
   } else if(comp1 === 'rock' && playerchoice === 'scissors') {
    console.log("comp wins! rock crushes scissors!");
   } else if(comp1 === 'scissors' && playerchoice === 'paper') {
    console.log("comp wins! scissors cuts paper!");
   } else if(playerchoice === 'paper' && comp1 === 'rock') {
    console.log("Player wins! paper covers rock!");
   } else if(playerchoice === 'rock' && comp1 === 'scissors') {
    console.log("Player wins! rock crushes scissors!");
   } else if(playerchoice === 'scissors' && comp1 === 'paper') {
    console.log("Player wins! " + comp2 + " cuts " + comp1 + "!");
   }

}

getComputerChoice();

