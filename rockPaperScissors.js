let humanScore = 0;
let computerScore = 0;
humanScore = Number(humanScore);
computerScore = Number(computerScore);

function getComputerChoice() {
    let pcNumber = Math.floor(Math.random()*10);
    //console.log(pcNumber)
    let pcChoice = (pcNumber <=3) ? 'Rock' :
    (pcNumber <=6) ? 'Paper' : 'Scissors'
    return (pcChoice);
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt(`Please provde a number from 1 to 3
        where 1 is Rock, 2 is Paper and 3 is Scissors`, ''));
    let playerChoice = (humanChoice == 1) ? 'Rock' :
    (humanChoice == 2) ? 'Paper' :
    (humanChoice == 3) ? 'Scissors' : 'Invalid choice, please choose 1, 2 or 3'
    if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors"){
        return (playerChoice);}
        else{
            return ("Invalid choice");
        }
}

function playRound(human, computer) {

    if (human == 'Rock') {
        if (computer == 'Scissors') {
            console.log (`You beat the computer it was using ${computer}`)
            humanScore += 1;
        }else if (computer == 'Rock') {
            console.log (`It's a tie ${human} ties ${computer}`)
        }else {
            console.log (`You lost with ${human} to ${computer}`);
            computerScore += 1;
        }
    }
    else if (human == 'Paper') {
        if (computer == 'Rock') {
            console.log (`You beat the computer it was using ${computer}`)
            humanScore += 1;
        }else if (computer == 'Paper') {
            console.log (`It's a tie ${human} ties ${computer}`)
        }else {
            console.log (`You lost with ${human} to ${computer}`);
            computerScore += 1;
        }
    }else if (human == 'Scissors') {
        if (computer == 'Paper') {
            console.log (`You beat the computer it was using ${computer}`)
            humanScore += 1;
        }else if (computer == 'Scissors') {
            console.log (`It's a tie ${human} ties ${computer}`)
        }else {
            console.log (`You lost with ${human} to ${computer}`);
            computerScore += 1;
        }
    }
    console.log(`Score is Player:${humanScore} and PC:${computerScore}`)
}
const human = getHumanChoice();
const computer = getComputerChoice();

playRound(human, computer);