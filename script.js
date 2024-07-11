function getComputerChoice()
{
    let randomRPSNum = Math.floor(Math.random() *3 +1);
    let computerChoice = "";
    if (randomRPSNum === 1)
    {
        computerChoice = "rock";
    }
    else if (randomRPSNum === 2)
    {
        computerChoice = "paper";
    }
    else if (randomRPSNum === 3)
    {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please select Rock, Paper, or Scissor: ");
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice)
{
    //Checks if choices are equal
    if(humanChoice.toUpperCase() === computerChoice.toUpperCase())
    {
        return "It's a tie!"
    }


    else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER")
    {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS")
    {
        humanScore++;
        return "You win! Rock beats Scissors";
    }


    else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK")
    {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS")
    {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }


    else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER")
    {
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK")
    {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
}

function finalWinner()
{
    if(humanScore > computerScore)
    {
        console.log(`Human wins with ${humanScore} points`);
    }
    else if(computerScore > humanScore)
    {
        console.log(`Computer wins with ${computerScore} points`);
    }
    else
    {
        console.log("It's a tie!");
    }
}


function playGame()
{
    for(let i = 0; i < 5; i++)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            const result = playRound(humanSelection, computerSelection);
            console.log(result);
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
        finalWinner();
}

playGame();