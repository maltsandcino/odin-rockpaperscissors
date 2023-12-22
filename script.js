let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) {
        return rock}
    else if (choice === 2) {
        return paper
    }
    else {return scissors}
}