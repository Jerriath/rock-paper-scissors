//Function for computer to choose either r, p, or s at random

function computerPlay() {
    let random = Math.random();
    if (random <= (1/3)) {
        return "Rock";
    }
    else if (random > (1/3) && random <= (2/3)) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};

//Function top play one round with two parameters (playerChoice, compChoice)
//Returns string saying either win or loss

