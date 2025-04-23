function getComputerChoice() {
    const computerChoice = Math.random();

    if (computerChoice < 0.3333) {
        return "rock";
    }   else if (computerChoice < 0.6666) {
        return "paper";
    }   else {
        return "scissors";
    }
}

function getHumanChoice () {
    const humanChoice = prompt("Let's play. Type rock, paper, or scissors.");
    
    if (humanChoice === "rock") {
        return "rock"
    }   else if (humanChoice === "paper") {
        return "paper";
    }   else if (humanChoice === "scissors") {
        return "scissors";
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (
        (computerChoice === "rock" && humanChoice ==="paper") ||
        (computerChoice === "paper" && humanChoice ==="scissors") ||
        (computerChoice === "scissors" && humanChoice ==="rock")
    ) {
        humanScore++;
        return "You win";
    }   else if (computerChoice === humanChoice) {
        return "It's a tie"
    }   else {
        computerScore++;
        return "You lose"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection));