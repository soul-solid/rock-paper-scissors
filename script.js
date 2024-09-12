let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("What do you choose?", "Type your choice 👇👇").toLowerCase(); 
}

function playGame() {

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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Round: ${i}`);
    playGame();
}

if (humanScore > computerScore) {
    console.log(`Congrats! You win by ${humanScore - computerScore} points! (ˆᗜˆ)`);
} else if (humanScore < computerScore) {
    console.log(`Congrats! You lose by ${computerScore - humanScore} points! (ˆᗜˆ)`);
} else if (humanScore === computerScore) {
    console.log(`Both of you are tied at ${humanScore}!`);
}