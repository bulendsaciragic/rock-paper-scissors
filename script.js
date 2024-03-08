function getComputerChoice () {
    let choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}

let computerChoice = getComputerChoice ();

function playGame () {

let playerChoice = prompt('This is a Rock, Paper, Scissors game! Write down your choice.').toLowerCase();    

function singleRound (playerChoice, computerChoice) {

if (playerChoice === computerChoice) {
     alert(`Tie! Computer have choosen ${playerChoice} too.`)
} else if (playerChoice === 'rock' && computerChoice === 'paper') {
    alert('You Lose! Paper beats Rock')
} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    alert('You Win! Rock beats Scissors.')
} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    alert('You Lose! Scissors beats Paper')
} else if (playerChoice === 'paper' && computerChoice === 'rock') {
    alert('You Win! Paper beats Rock.')
} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    alert('You Lose! Rock beats Scissors')
} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    alert('You Win! Scissors beats Paper.')
} else {
    alert('Wrong input. Please try again.')
}    

}

singleRound (playerChoice, computerChoice) 

}

playGame ()

