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

console.log(getComputerChoice());