let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let roundCount = 0; 

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissor = document.querySelector('#btnScissor');

const humanResult = document.querySelector('#human-result');
const computerResult = document.querySelector('#computer-result');
const score = document.querySelector('#score');

function getComputerChoice() {
    let randomRPSNum = Math.floor(Math.random() * 3 + 1);
    if (randomRPSNum === 1) {
        computerChoice = "ROCK";
    } else if (randomRPSNum === 2) {
        computerChoice = "PAPER";
    } else if (randomRPSNum === 3) {
        computerChoice = "SCISSORS";
    }
    computerResult.textContent = "Computer Picks: " + computerChoice;
    return computerChoice;
}

function getHumanChoice(choice) {
    humanChoice = choice;
    humanResult.textContent = "Human Picks: " + humanChoice;
    return humanChoice;
}

function playRound() {
    if (!humanChoice || !computerChoice) {
        console.log("Both choices are required.");
        return;
    }

    if (humanChoice === computerChoice) {
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++;
    }

    score.textContent = `Score: Human: ${humanScore} - Computer: ${computerScore}`;
}

function finalWinner() {
    let finalWinnerText = "";
    if (humanScore > computerScore) {
        finalWinnerText = `Human wins with ${humanScore} points`;
    } else if (computerScore > humanScore) {
        finalWinnerText = `Computer wins with ${computerScore} points`;
    } else {
        finalWinnerText = "It's a tie!";
    }
    alert(finalWinnerText);
}

function playGame() {
    if (roundCount >= 5) {
        finalWinner();
        return;
    }

    getComputerChoice();
    playRound();
    roundCount++;
}

btnRock.addEventListener("click", () => {
    getHumanChoice("ROCK");
    playGame();
});

btnPaper.addEventListener("click", () => {
    getHumanChoice("PAPER");
    playGame();
});

btnScissor.addEventListener("click", () => {
    getHumanChoice("SCISSORS");
    playGame();
});
