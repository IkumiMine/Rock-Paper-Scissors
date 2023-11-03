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
*/
function playRound(playerSelection, computerSelection) {
    let message = '';

    if(playerSelection === computerSelection) {
        message =  "It's tie";
    } else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            message = "You lose, paper beats rock";
        } else if (computerSelection === "scissors") {
            message = "You win, rock beats scissors"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            message = "You win, paper beats rock";
        } else if(computerSelection === "scissors") {
            message = "You lose, scissors beats paper";
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock") {
            message = "You lose, rock beats scissors";
        } else if(computerSelection === "paper") {
            message = "You win, scissors beats paper";
        }
    }

    return message;
}

//get input from the user by using prompt
//const playerSelection = prompt("pick your choice from rock, paper, scissors").toLocaleLowerCase();
//const computerSelection = getComputerChoice();
//console.log(`player: ${playerSelection}`);
//console.log(`computer: ${computerSelection}`);
//console.log(playRound(playerSelection, computerSelection));

//play a 5 round game that keeps score and reports a winner or loser at the end
//console.log() to display the results of each round and the winner at the end
function game(){
    let results = [];

    for(let i=0; i<5; i++) {
        const playerSelection = prompt("pick your choice from rock, paper, scissors").toLocaleLowerCase();
        const computerSelection = getComputerChoice();
        results.push(playRound(playerSelection, computerSelection));
    }

    console.log(results);
}

game();