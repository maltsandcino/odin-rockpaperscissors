let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) {
        return rock}
    else if (choice === 2) {
        return paper
    }
    else {return scissors}
}

function match(playerSelection, computerSelection) {
    let p1 = playerSelection;
    console.log(p1);
    let p2 = computerSelection;
    console.log(p2);

    if (p1 === rock && p2 === scissors || p1 === paper && p2 === rock || p1 === scissors && p2 === paper){
        playerScore++;
        return console.log(`You have won this round, current score ${playerScore} to ${computerScore}`)    
    }
    else if (p1 === p2){
        return console.log(`This round is a tie, current score ${playerScore} to ${computerScore}`)
    }
    else if (p1 !== rock && p1 !== scissors && p1 !== paper) {
        return console.log('You must correctly spell only rock, paper, or scissors to play. These are the only options.')
    }
    else {
        computerScore++
        return console.log(`You have lost this round, current score ${playerScore} to ${computerScore}`)
    }
}

function game() {
    var ps;
    var ps2;
    playerScore = 0;
    computerScore = 0;
    while(playerScore < 5 && computerScore < 5) {
        ps = prompt("Rock, paper, or scissors?");
        ps2 = ps.toLowerCase();
        let playerSelection = ps2;
        let computerSelection = getComputerChoice();
        match(playerSelection, computerSelection)
    }
    if (playerScore === 5){
        return `Congratulations you have won ${playerScore} to ${computerScore}`
    }
    else {
        return `Sorry, the computer has bested you. Final score: ${playerScore} to ${computerScore}.`
    }
}

