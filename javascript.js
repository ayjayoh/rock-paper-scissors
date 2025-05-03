// Function to get the computer's random choice
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

// Function to get the human player's choice
function getHumanChoice () {
    const humanChoice = prompt("Let's play. Type rock, paper, or scissors.") .toLowerCase();
    
    if (humanChoice === "rock") {
        return "rock"
    }   else if (humanChoice === "paper") {
        return "paper";
    }   else if (humanChoice === "scissors") {
        return "scissors";
    }
}

// Initialize human scores
let computerScore = 0;
let humanScore = 0;

// Function to play a single round
function playRound(computerChoice, humanChoice) {
    if (
        (computerChoice === "rock" && humanChoice ==="paper") ||
        (computerChoice === "paper" && humanChoice ==="scissors") ||
        (computerChoice === "scissors" && humanChoice ==="rock")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice + "!"
    }   else if (computerChoice === humanChoice) {
        return "It's a tie, you both played " + humanChoice
    }   else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + "!"
    }
}

// Function to play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, humanSelection));
    }
    // Show final score after 5 rounds
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame(); // Start the game