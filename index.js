//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const choices = ["rock", "paper:", "scissors"]
    const randomIndex = Math.floor(Math.random() * max);
    return choices[randomIndex]
}
//Print result
console.log("Computer played " + getComputerChoice(3) + "!");


//Acknowledge user choice
function getHumanChoice() {
    const userChoice = window.prompt("Rock, Paper, or Scissors?" , "")
    return userChoice.toLowerCase()
}



//Keep track of scores from players and computer
let humanScore = 0
let computerScore = 0


//Play a round
function playRound() {
    //Declare variables
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(3);

    //Define which choice beats which
    const outcomes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    //Determine winner of this round
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (outcomes[humanChoice] === computerChoice) {
        ++humanScore //Increase player's score
        console.log("You win!")
    } else {
        ++computerScore //Increase computer's score
        console.log("You lose. Better luck next time!")
    }  
};
playRound();

//Print Scores
console.log(`You: ${humanScore} | Computer: ${computerScore}`)