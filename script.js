const update = document.querySelector(".update");
const result = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".pScore");
const computerScoreDisplay = document.querySelector(".cScore");

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

function checkWinner() {
    if (humanScore === 5) {
        result.textContent = `Congrats! You win by ${humanScore - computerScore} points! (ˆᗜˆ)`;
        resetScore();
    } else if (computerScore === 5) {
        result.textContent = `Congrats! You lose by ${computerScore - humanScore} points! (ˆᗜˆ)`;
        resetScore();
    } else if (humanScore === 5 && computerScore === 5) {
        result.textContent = `Both of you are tied at ${humanScore}!`;
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = `Player: ${humanScore}`;
    computerScoreDisplay.innerText = `Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        update.textContent = `Both of you chose ${humanChoice}! It's a tie!`;
        playerScoreDisplay.innerText = `Player: ${humanScore}`;
        computerScoreDisplay.innerText = `Computer: ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
        ) {
        update.textContent = `You chose ${humanChoice}! ${computerChoice} beats ${humanChoice}, you lose (╥﹏╥)`;
        computerScore++;
        playerScoreDisplay.innerText = `Player: ${humanScore}`;
        computerScoreDisplay.innerText = `Computer: ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        update.textContent = `You chose ${humanChoice}! ${humanChoice} beats ${computerChoice}, you win (ˆᗜˆ)`;
        humanScore++;
        playerScoreDisplay.innerText = `Player: ${humanScore}`;
        computerScoreDisplay.innerText = `Computer: ${computerScore}`;
    }
    checkWinner();
}

let computerSelection = "";
let humanSelection = "";

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "btn1":
            computerSelection = getComputerChoice();
            humanSelection = "rock";
            playRound(humanSelection, computerSelection);
            break;
        case "btn2":
            computerSelection = getComputerChoice();
            humanSelection = "paper";
            playRound(humanSelection, computerSelection);
            break;
        case "btn3":
            computerSelection = getComputerChoice();
            humanSelection = "scissors";
            playRound(humanSelection, computerSelection);
            break;
    }
})