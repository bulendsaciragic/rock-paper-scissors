let round = 1
let playerScore = 0
let computerScore = 0

function playGame () {

    function getComputerChoice () {
    let choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
    }

    let computerChoice = getComputerChoice ();
    let playerChoice = prompt(`Round ${round} / 5 | Rock, Paper, Scissors game. Write down your choice.`).toLowerCase();    

        function singleRound (playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            computerScore = computerScore + 1;
            playerScore = playerScore +1; 
            alert(`Tie! Computer have choosen ${playerChoice} too. Result is ${playerScore} - ${computerScore}`);     
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            computerScore = computerScore + 1;
            alert(`You Lose! Paper beats Rock. Result is ${playerScore} - ${computerScore}`)
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            playerScore = playerScore +1;
            alert(`You Win! Rock beats Scissors. Result is ${playerScore} - ${computerScore}`)
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            computerScore = computerScore + 1;
            alert(`You Lose! Scissors beats Paper. Result is ${playerScore} - ${computerScore}`)
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            playerScore = playerScore +1;
            alert(`You Win! Paper beats Rock. Result is ${playerScore} - ${computerScore}`)
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            computerScore = computerScore + 1;
            alert(`You Lose! Rock beats Scissors. Result is ${playerScore} - ${computerScore}`)
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore = playerScore +1;
            alert(`You Win! Scissors beats Paper. Result is ${playerScore} - ${computerScore}`)
        } else {
            alert(`Wrong input. Please try again. Result is ${playerScore} - ${computerScore}`)
        }    
        
        round = round+1;

        }

        singleRound (playerChoice, computerChoice);
        return {computerScore, playerScore, round};
}

playGame ()
playGame ()
playGame ()
playGame ()
playGame () 

if (playerScore > computerScore) {
    alert(`Congrats! You won. Final score is ${playerScore} - ${computerScore}`) 
} else if (playerScore === computerScore) {
    alert(`Tie! Final score is ${playerScore} - ${computerScore}`)
} else {
    alert(`You lose! Final score is ${playerScore} - ${computerScore}`)
}