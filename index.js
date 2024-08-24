//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * max);
    return choices[randomIndex]
}
//Print result
console.log(getComputerChoice(3));


//Acknowledge user choice
function getHumanChoice() {
    const userChoice = window.prompt("Rock, Paper, or Scissors?" , "")
    return userChoice.toLowerCase()
}
//Print results
console.log(getHumanChoice())


//Keep track of scores from players and computer
let humanScore = 0
let computerScore = 0


//Play a round
function playRound();