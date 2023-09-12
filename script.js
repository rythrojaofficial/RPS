let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerSelection;
let howManyRounds;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0){
        computerChoice = "ROCK"
    }else if (randomNumber === 1) {
        computerChoice = "PAPER"
    }else if (randomNumber === 2){
        computerChoice = "SCISSORS"
    }
    return computerChoice;
}

function newGame(){
    playerScore = 0;
    computerScore = 0;
    round = 1;
    howManyRounds = document.getElementById("numberOfRounds").value;
    howManyRounds = Number(howManyRounds);
    
    


    console.log(`You will now play ${howManyRounds} rounds, select your weapon`)
    return howManyRounds;
}

function rps(){
    // get player input 
    playerSelection = document.getElementById("playerSelection").value;
    // uppercase to avoid case errors
    playerSelection = playerSelection.toUpperCase();

    // draw conditions
    if (getComputerChoice() === playerSelection){
        console.log(`You both chose ${playerSelection}, it's a Draw`);
    }else if (
        // round win conditions 
        (playerSelection === "ROCK" && computerChoice === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerChoice === "PAPER") ||
        (playerSelection === "PAPER" && computerChoice === "ROCK")
        
        ){
            playerScore += 1;
            round +=1;
            console.log(`You win! You chose ${playerSelection} while the computer chose ${computerChoice}`);
    }else if (
        // round lose conditions 
        (playerSelection === "ROCK" && computerChoice === "PAPER") ||
        (playerSelection === "SCISSORS" && computerChoice === "ROCK") ||
        (playerSelection === "PAPER" && computerChoice === "SCISSORS")
        ) {
            computerScore += 1;
            round +=1;
            console.log(`You Lose! You chose ${playerSelection} while the computer chose ${computerChoice}`);
    }

    if (
        // match win conditions
        (round == howManyRounds 
            && (playerScore + computerScore == howManyRounds) 
            && playerScore > computerScore) 
        || playerScore == 1+((howManyRounds-1)/2)
            ){
        console.log("Congratulations, you Win!");
        round = 1;

    }else if (
        // match lose conditions
        (round == howManyRounds 
            && (playerScore + computerScore == howManyRounds) 
            && computerScore > playerScore) 
        || computerScore == 1+((howManyRounds-1)/2) + 1
        )
        {
        console.log("Sorry, you've Lost!")
        round = 1;
    }else {
        // match continue 
        console.log ('Next Round!')
    }
    
}



function match(){
    // check if the game should continue
    if (round <= howManyRounds 
            && (playerScore + computerScore <= howManyRounds) 
            &&  playerScore < 1+(howManyRounds-1)/2
            && computerScore < 1+(howManyRounds-1)/2 
            ){
        // label the round 
    console.log(`round ${round}`);

    rps();
    
    
    // label the score 
    console.log(`Score: ${playerScore} : ${computerScore}`)
    // win conditions
}
}