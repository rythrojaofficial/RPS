let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerSelection;
let scoreboardPlayer;
let scoreboardComputer;
const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {(playerSelection = "ROCK")
    match();
})
const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {(playerSelection = "PAPER")
    match();
    })
const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {(playerSelection = "SCISSORS")
    match();
    })
let howManyRounds;
let newGameMessage;
const scoreLog = document.querySelector('#scoreLog');
// const clear = document.getElementById('clearButton')
//     clear.addEventListener('click', function clearLog(){
//         scoreLog.replaceChildren();
//         playerScore = 0;
//         computerScore = 0;
//     }); //clears 


function getComputerChoice(){
    // get random number from 3 choices
    let randomNumber = Math.floor(Math.random()*3); // 0,1,2
    if (randomNumber === 0){
        computerChoice = "ROCK"
    }else if (randomNumber === 1) {
        computerChoice = "PAPER"
    }else if (randomNumber === 2){
        computerChoice = "SCISSORS"
    }
    return computerChoice;
}
// play a new game 
function newGame(){
    playerScore = 0;
    computerScore = 0;
    round = 1;
    howManyRounds = document.getElementById("numberOfRounds").value;
    howManyRounds = Number(howManyRounds);
    
    
    newGameMessage = document.createElement('div');
    newGameMessage.textContent = (`You will now play ${howManyRounds} rounds, select your weapon`);
    scoreLog.replaceChildren(newGameMessage);
    
    // console.log(`You will now play ${howManyRounds} rounds, select your weapon`)
    return howManyRounds;
}

// check for a winner 
function checkWinConditions(){
    if (
        // match win conditions
        (round == howManyRounds 
            && (playerScore + computerScore == howManyRounds) 
            && playerScore > computerScore) 
        || playerScore == 1+(howManyRounds-1)/2
            ){
        

        newGameMessage = document.createElement('div');
        newGameMessage.textContent = ("Congratulations, you Win!");
        scoreLog.appendChild(newGameMessage);

        // console.log("Congratulations, you've Won!");
        round = 1;

    }else if (
        // match lose conditions
        (round == howManyRounds 
            && playerScore + computerScore == howManyRounds 
            && computerScore > playerScore) 
        || computerScore == 1+(howManyRounds-1)/2
        ){
        
        newGameMessage = document.createElement('div');
        newGameMessage.textContent = ("Sorry, you've Lost!");
        scoreLog.appendChild(newGameMessage);

        // console.log("Sorry, you've Lost!")
        round = 1;
    }else {
        // match continue 

        newGameMessage = document.createElement('div');
        newGameMessage.textContent = ('Next Round!');
        scoreLog.appendChild(newGameMessage);
        // console.log ('Next Round!')
    }
}



// play round of rock paper scissors 
function rps(){
    // get player input 
    // playerSelection = document.getElementById("playerSelection").value;
    // // uppercase to avoid case errors
    // playerSelection = playerSelection.toUpperCase();

    // draw conditions
    getComputerChoice();
    if (getComputerChoice() === playerSelection){
        newGameMessage = document.createElement('div');
        newGameMessage.textContent = (`You both chose ${playerSelection}, it's a Draw`);
        scoreLog.appendChild(newGameMessage);
        // console.log(`You both chose ${playerSelection}, it's a Draw`);
    }else if (
        // round win conditions 
        (playerSelection === "ROCK" && computerChoice === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerChoice === "PAPER") ||
        (playerSelection === "PAPER" && computerChoice === "ROCK")
        
        ){
            playerScore += 1;
            round +=1;
            
            newGameMessage = document.createElement('div');
            newGameMessage.textContent = (`You win! You chose ${playerSelection} while the computer chose ${computerChoice}`);
            scoreLog.appendChild(newGameMessage);
            // console.log(`You win! You chose ${playerSelection} while the computer chose ${computerChoice}`);
    }else if (
        // round lose conditions 
        (playerSelection === "ROCK" && computerChoice === "PAPER") ||
        (playerSelection === "SCISSORS" && computerChoice === "ROCK") ||
        (playerSelection === "PAPER" && computerChoice === "SCISSORS")
        ) {
            computerScore += 1;
            round +=1;

            newGameMessage = document.createElement('div');
            newGameMessage.textContent = (`You lost! You chose ${playerSelection} while the computer chose ${computerChoice}`);
            scoreLog.appendChild(newGameMessage);
            // console.log(`You lose! You chose ${playerSelection} while the computer chose ${computerChoice}`);
    }
    // label the score to scoreboard
    playerViewScore = document.getElementById('playerViewScore');
    playerViewScore.textContent = `${playerScore}`
    
    computerViewScore = document.getElementById('computerViewScore');
    computerViewScore.textContent = `${computerScore}`
    checkWinConditions()
    
}



function match(){
    // check if the game should continue
    if (round <= howManyRounds 
            && (playerScore + computerScore <= howManyRounds) 
            &&  playerScore < 1+(howManyRounds-1)/2
            && computerScore < 1+(howManyRounds-1)/2 
            ){
        // label the round 
        newGameMessage = document.createElement('div');
        newGameMessage.textContent = (`round ${round}`);
        scoreLog.appendChild(newGameMessage);
    // console.log(`round ${round}`);
    rps();
    // console.log(`Score: ${playerScore} : ${computerScore}`)
    // win conditions
}
}
