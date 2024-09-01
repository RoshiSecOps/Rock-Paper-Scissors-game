let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let pcNumber = Math.floor(Math.random()*10);
    console.log(pcNumber)
    let pcChoice = (pcNumber <=3) ? 'Rock' :
    (pcNumber <=6) ? 'Paper' : 'Scissors'
    console.log(pcChoice)
}

function getHumanChoice() {
    let humanChoice = pasreint(prompt(`Please provde a number from 1 to 3
        where 1 is Rock, 2 is Paper and 3 is Scissors`));
    let playerChoice = (humanChoice == 1) ? 'Rock' :
    (humanChoice == 2) ? 'Paper' :
    (humanChoice == 3) ? 'Scissors' : 'Invalid choice, please choose 1, 2 or 3'
}