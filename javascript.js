//Randomly return computer's choice
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//get player's choice
function getPlayerChoice() {
    const playerSelection = prompt("rock, paper, scissors go!").toLocaleLowerCase();
    return playerSelection;
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

    let eachResult = [message, playerScore, computerScore];
    return eachResult;
}


//play a 5 round game that keeps score and reports a winner or loser at the end
//console.log() to display the results of each round and the winner at the end
function game(){
    let results = [];
    let playerScores = 0;
    let computerScores = 0;
    let finalResult = '';

    for(let i=0; i<5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        results.push(playRound(playerSelection, computerSelection));
        //console.log(results);
    }

    //Decide final winner
    if(results) {

        //total of player's and computer's score
        for(let j=0; j<5; j++){
            playerScores = playerScores + results[j][1];
            computerScores = computerScores + results[j][2];
        }

        if(playerScores === computerScores) {
            finalResult = "No winners, it was a tie game";
        } else if (playerScores > computerScores) {
            finalResult = "Player won";
        } else {
            finalResult = "Computer won";
        }
    }

    console.log(finalResult);
    console.log(results);

}

game();