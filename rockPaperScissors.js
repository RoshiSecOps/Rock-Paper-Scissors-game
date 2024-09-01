let humanScore = 0;
let computerScore = 0;
humanScore = Number(humanScore);
computerScore = Number(computerScore);

// Function to set the computer choice with a random value
function getComputerChoice() {
    let pcNumber = Math.floor(Math.random()*10);
    //console.log(pcNumber)
    let pcChoice = (pcNumber <=3) ? 'Rock' :
    (pcNumber <=6) ? 'Paper' : 'Scissors'
    return (pcChoice);
}

// Function to ask the player to choose
function getHumanChoice() {
    let humanChoice = parseInt(prompt(`Please provde a number from 1 to 3, 
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

// Function to play a single round
function playRound(human, computer) {

    if (human == 'Rock') {
        if (computer == 'Scissors') {
            console.log (`${human} beats ${computer}, well done!`)
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
            console.log (`${human} beats ${computer}, well done!`)
            humanScore += 1;
        }else if (computer == 'Paper') {
            console.log (`It's a tie ${human} ties ${computer}`)
        }else {
            console.log (`You lost with ${human} to ${computer}`);
            computerScore += 1;
        }
    }else if (human == 'Scissors') {
        if (computer == 'Paper') {
            console.log (`${human} beats ${computer}, well done!`)
            humanScore += 1;
        }else if (computer == 'Scissors') {
            console.log (`It's a tie ${human} ties ${computer}`)
        }else {
            console.log (`You lost with ${human} to ${computer}`);
            computerScore += 1;
        }
    }
    console.log(`Score is Player:${humanScore} and PC:${computerScore}`)
    return humanScore && computerScore;
}

// Function to play 5 rounds
function playGame() {
/*    let humanScore = 0;
    let computerScore = 0;*/
    //let roundNumber = Number();
    for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
        console.log(`Starting round ${roundNumber}`);
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
            if (roundNumber == 5) {
                console.log('Game Over!')
                break;
            }else{
                chooseQuit = prompt('Enter "n" to quit, else we continue to next round','')
                chooseQuit = (String(chooseQuit)).toLowerCase();
                if (chooseQuit === 'n'){
                    break;
                }else{
                    continue;
                }
            }
        }
    if (humanScore > computerScore){
        console.log(`You win ${humanScore}:${computerScore}`)
    }else if (humanScore == computerScore){
        console.log(`It's a tie ${humanScore}:${computerScore}`)
    }else{
        console.log(`You lose ${humanScore}:${computerScore}`)
    }
}

playGame();