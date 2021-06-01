//Function for computer to choose either r, p, or s at random

function computerPlay() {
    let random = Math.random(); //Each choice has equal ranges (about) so the choice is random
    if (random <= (1/3)) {
        return "rock";
    }
    else if (random > (1/3) && random <= (2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

//Function top play one round with two parameters (playerChoice, compChoice)
//Returns string saying either win or loss
//Will use length of strings to make funct compatible with all cases (i.e. Rock, rock, ROCK, etc.)
function playRound(playerPick, computerPick) {
    let player = playerPick.toLowerCase(); 
    let computer = computerPick;
    console.log(computer);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    //Rock scenarios
    if (player == computer) 
    {
        return "It's a tie! What a Coincidence"
    }
    if (player == rock) {
        if (computer == paper)
        {
            return "You Lose! Paper beats Rock";
        }
        else if (computer == scissors)
        {
            return "You Win! Rock beats Scissors";
        }
    }
    //Paper Scenarios
    else if (player == paper)
    {
        if (computer == rock)
        {
            return "You Win! Paper beats Rock";
        }
        else if (computer == scissors)
        {
            return "You Lose! Scissors beats Paper";
        }
    }
    //Scissors scenarios
    else if (player == scissors)
    {
        if (computer == rock)
        {
            return "You Lose! Rock beats Scissors";
        }
        else if (computer == scissors)
        {
            return "You Win! Scissors beats Paper";
        }
    }
    else {
        console.log("Something went wrong");
    }
};

function game() {
    let playerWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i++) 
    {
        let valid = false;
        let playerChoice = prompt("Please enter rock, paper, or scissors: ");
        while(!valid)
        {
            playerChoice = playerChoice.toLowerCase();
            if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
            {
                valid = true;
            }
            else
            {
                playerChoice = prompt('Invalid Entry! Please re-enter a valid input (i.e rock, paper, or scissors')
            }
        }
        let roundResult = playRound(playerChoice, computerPlay());
        console.log(roundResult);
        if (roundResult.charAt(4) === "W")
        {
            playerWins++;
        }
        else if (roundResult.charAt(4) === "L")
        {
            compWins++;
        }
    }
    if (playerWins > compWins) 
    {
        console.log("You lose! Computers > Humans");
    }
    else if (compWins > playerWins)
    {
        console.log("You Win! Faith in Humanity Restored");
    }
    else 
    {
        console.log("It's a Tie! Computer === Human");
    }
};