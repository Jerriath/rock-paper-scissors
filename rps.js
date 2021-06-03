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
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    //Rock scenarios
    if (player == computer) 
    {
        document.querySelector("#roundResult").textContent = "Tie!";
        return "It's a tie! What a Coincidence"
    }
    if (player == rock) {
        if (computer == paper)
        {
            document.querySelector("#roundResult").textContent = "Comp win!";
            incCompScore();
            return "You Lose! Paper beats Rock";
        }
        else if (computer == scissors)
        {
            document.querySelector("#roundResult").textContent = "You win!"
            incPlayerScore();
            return "You Win! Rock beats Scissors";
        }
    }
    //Paper Scenarios
    else if (player == paper)
    {
        if (computer == rock)
        {
            document.querySelector("#roundResult").textContent = "You win!";
            incPlayerScore();
            return "You Win! Paper beats Rock";
        }
        else if (computer == scissors)
        {
            document.querySelector("#roundResult").textContent = "Comp win!";
            incCompScore();
            return "You Lose! Scissors beats Paper";
        }
    }
    //Scissors scenarios
    else if (player == scissors)
    {
        if (computer == rock)
        {
            document.querySelector("#roundResult").textContent = "Comp win!";
            incCompScore();
            return "You Lose! Rock beats Scissors";
        }
        else if (computer == scissors)
        {
            document.querySelector("#roundResult").textContent = "You win!";
            incPlayerScore();
            return "You Win! Scissors beats Paper";
        }
    }
    else {
        console.log("Something went wrong");
    }
};

//-----Section deals with rps buttons-----
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function(e) {
    console.log(e.srcElement.innerText);
    let outcome = playRound(e.srcElement.innerText, computerPlay());
    console.log(outcome);
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function(e) {
    console.log(e.srcElement.innerText);
    let outcome = playRound(e.srcElement.innerText, computerPlay());
    console.log(outcome);
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function(e) {
    console.log(e.srcElement.innerText);
    let outcome = playRound(e.srcElement.innerText, computerPlay());
    console.log(outcome);
});

//-----Section deals with begin button-----
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", function(e) {
    const startPage = document.querySelector("#startPage");
    startPage.style.display = "none";
})

//-----Section deals with reset button-----
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(e) {
    resetGame();
})

//-----Incrememnts player score-----
function incPlayerScore() {
    let playerPoints = document.querySelector("#playerPoints");
    let playerScore = parseInt(playerPoints.textContent);
    playerScore++;
    playerPoints.textContent = playerScore.toString();
    checkEnd();
}

//-----Increments computer score-----
function incCompScore() {
    let compPoints = document.querySelector("#compPoints");
    let compScore = parseInt(compPoints.textContent);
    compScore++;
    compPoints.textContent = compScore.toString();
    checkEnd();
}

//-----Checks to see if player or comp has reached win condition-----
function checkEnd() {
    let playerWon = false;
    let compWon = false;
    let playerWins = parseInt(document.querySelector("#playerPoints").textContent);
    let compWins = parseInt(document.querySelector("#compPoints").textContent);
    if (playerWins >= 5)
    {
        playerWon = true;
    }
    else if (compWins >= 5)
    {
        compWon = true;
    }
    if (playerWon || compWon) {
        displayEndMsg(playerWon);
    }
}

//-----Hides the player buttons and displays end msg depending on who won-----
function displayEndMsg(playerWon) {
    if (playerWon)
    {
        let endDiv = document.querySelector("#endDiv");
        document.querySelector("#endMsg").textContent = 
            "Congratulations!!! You're better than a computer.";;
        let buttons = document. querySelector("#playerBtns");
        endDiv.style.display = "block";
        buttons.style.display = "none";
    }
    else if (!playerWon) {
        {
            let endDiv = document.querySelector("#endDiv");
            document.querySelector("#endMsg").textContent = 
                "Looks like computers > Humans :)";;
            let buttons = document. querySelector("#playerBtns");
            endDiv.style.display = "block";
            buttons.style.display = "none";
        }
    }
}

function resetGame() {
    document.querySelector("#playerPoints").textContent = "0";
    document.querySelector("#compPoints").textContent = "0";
    document.querySelector("#endMsg").textContent = "";
    document.querySelector("#endDiv").style.display = "none";
    document.querySelector("#playerBtns").style.display = "block";
    document.querySelector("#startPage").style.display = "block";
}
//-----Old function used for in-console version of game-----
/*function game() {
    let playerWins = 0;
    let compWins = 0;
    for (let i = 0; i < 8; i++) 
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
};*/