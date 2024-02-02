let rock = "rock"
let paper = "paper"
let scissors = "scissors"

let computerScore = 0

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.option').forEach(function(button) {
        button.onclick = function() {
            gamePlay(button.dataset.value);
        }
    });
 });


const controls = document.querySelectorAll(".option");

    controls.forEach(function(button) {
        button.addEventListener('click', gamePlay(button.dataset.value))});
    

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) {
        return rock}
    else if (choice === 2) {
        return paper
    }
    else {return scissors}
}


function single_match(playerSelection, computerSelection) {
    let p1 = playerSelection;
    console.log(p1);
    let p2 = computerSelection;
    console.log(p2);
    playerScore = document.getElementById("human").innerHTML
    computerScore = document.getElementById("computer").innerHTML

    if (p1 === rock && p2 === scissors || p1 === paper && p2 === rock || p1 === scissors && p2 === paper){
        document.getElementById("human").innerHTML++;
        if (document.getElementById("human").innerHTML == 5){
            document.getElementById('instructions').innerHTML = `Congratulations you have won ${parseInt(playerScore) + 1} to ${computerScore}`
            // document.getElementById("human").innerHTML = 0
            // document.getElementById("computer").innerHTML = 0
            return}
        else {return document.getElementById('instructions').innerHTML =`You have won this round, current score ${parseInt(playerScore) + 1} to ${computerScore}`}    
    }
    else if (p1 === p2){
        return document.getElementById('instructions').innerHTML = `This round is a tie, current score ${playerScore} to ${computerScore}`
    }
    else if (p1 !== rock && p1 !== scissors && p1 !== paper) {
        return document.getElementById('instructions').innerHTML = 'You must correctly spell only rock, paper, or scissors to play. These are the only options.'
    }
    else {
        document.getElementById("computer").innerHTML++
        if(document.getElementById("computer").innerHTML == 5) {
            document.getElementById('instructions').innerHTML = `Sorry, the computer has bested you. Final score: ${playerScore} to ${parseInt(computerScore) + 1}.`
            // document.getElementById("human").innerHTML = 0
            // document.getElementById("computer").innerHTML = 0}
        }
        else{
        return document.getElementById('instructions').innerHTML = `You have lost this round, current score ${playerScore} to ${parseInt(computerScore) + 1}`
    }
}}

// function getSelection() {
//     let choices = document.querySelectorAll('.option');

//     for(let i = 0; i < choices.length; i++){
//         choices[i].addEventListener('click', function(){
//            let selection = choices[i].dataset.value;
//            return selection
//        })
// }}


function gamePlay(playerChoice) {
    
    playerScore = document.getElementById("human").innerHTML
    computerScore = document.getElementById("computer").innerHTML

    if (playerScore == 5){
     
        document.getElementById("human").innerHTML = 0
        document.getElementById("computer").innerHTML = 0
    }
    else if (computerScore == 5) {
       
        document.getElementById("human").innerHTML = 0
        document.getElementById("computer").innerHTML = 0}
    // }
    // else {
        single_match(playerChoice, getComputerChoice())
    // }
}

