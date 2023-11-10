//Randomly return computer's choice
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//plays a single round of Rock Paper Scissors
/*
p: rock vs c:rock, paper, scissors
p: paper vs c:rock, paper, scissors
p: scissors vs c:rock, paper, scissors
the winner gets 1 point, the loser gets 0 point
*/
function playRound(playerSelection, computerSelection) {
    let message = '';
    let playerScore = 0;
    let computerScore = 0;

    if(playerSelection === computerSelection) {
        message =  "It's tie";
        playerScore = 0;
        computerScore = 0;
    } else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            message = "You lose, paper beats rock";
            playerScore = 0;
            computerScore = 1;
        } else if (computerSelection === "scissors") {
            message = "You win, rock beats scissors";
            playerScore = 1;
            computerScore = 0;
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            message = "You win, paper beats rock";
            playerScore = 1;
            computerScore = 0;
        } else if(computerSelection === "scissors") {
            message = "You lose, scissors beats paper";
            playerScore = 0;
            computerScore = 1;
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock") {
            message = "You lose, rock beats scissors";
            playerScore = 0;
            computerScore = 1;
        } else if(computerSelection === "paper") {
            message = "You win, scissors beats paper";
            playerScore = 1;
            computerScore = 0;
        }
    }

    let eachResult = [message, playerSelection, playerScore, computerSelection, computerScore];
    return eachResult;
}

const btns = document.querySelectorAll(".choice-btn");
const playerChoice = document.querySelector("#player-choice");
const playerScore = document.querySelector("#player-score");
const computerChoice = document.querySelector("#computer-choice");
const computerScore = document.querySelector("#computer-score");
const singleResult = document.querySelector("#single-result");
const finalResult = document.querySelector("#final-result");
const resetBtn = document.querySelector(".reset-btn");

btns.forEach(btn => btn.addEventListener("click", () => {
    let result = playRound(btn.textContent, getComputerChoice());

    //display each result accordingly
    singleResult.textContent = result[0];
    playerChoice.textContent = result[1];
    playerScore.textContent = parseInt(playerScore.textContent) + result[2];
    computerChoice.textContent = result[3];
    computerScore.textContent = parseInt(computerScore.textContent) + result[4];

    //display final result when one player reaches 5 points
    if(parseInt(playerScore.textContent) == 5 || parseInt(computerScore.textContent) == 5) {
        if(parseInt(playerScore.textContent) == 5) {
            finalResult.textContent = "You win!";
        } else if (parseInt(computerScore.textContent) == 5) {
            finalResult.textContent = "You lose!";
        }
    }

    resetBtn.addEventListener("click", () => {
        singleResult.textContent = "";
        playerChoice.textContent = "";
        playerScore.textContent = 0;
        computerChoice.textContent = "";
        computerScore.textContent = 0;
        finalResult.textContent = "";
    })
}))