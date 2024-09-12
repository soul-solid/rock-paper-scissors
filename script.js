// logic for computer choice

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    }
} 

// logic for human choice

function getHumanChoice() {
   return prompt("What do you choose?", "Type your choice 👇👇").toLowerCase(); 
}

// logic

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Both of you chose ${humanChoice}! It's a tie!`);
            console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") || 
            (humanChoice === "paper" && computerChoice === "scissors") || 
            (humanChoice === "scissors" && computerChoice === "rock")
            ) {
            console.log(`You chose ${humanChoice}! ${computerChoice} beats ${humanChoice}, you lose (╥﹏╥)`);
            computerScore++;
            console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You chose ${humanChoice}! ${humanChoice} beats ${computerChoice}, you win (ˆᗜˆ)`);
            humanScore++;
            console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
        }
    }

    playRound(humanSelection, computerSelection);
}

for (let i = 0; i <= 5; i++) {
    getComputerChoice();
    getHumanChoice();
    playGame();
}

if (playerScore > computerScore) {
    console.log(`Congrats! You win by ${playerScore - computerScore} points! (ˆᗜˆ)`);
} else if (playerScore < computerScore) {
    console.log(`Congrats! You lose by ${computerScore - playerScore} points! (ˆᗜˆ)`);
}