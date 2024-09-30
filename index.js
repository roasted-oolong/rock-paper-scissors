//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * max);
    return choices[randomIndex]
}


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

    //Define which choice beats which in a "this beats that" format
    const outcomes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // Print computer + human choices
    console.log("You played " + humanChoice);
    console.log("Computer played " + computerChoice + "!");
    // console.log("Outcome according to human choice:", outcomes[humanChoice]); //To troubleshoot functionlity

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
    
    //Print Scores
    console.log(`You: ${humanScore} | Computer: ${computerScore}`)
};

// //Play a whole game
// function playGame() {
//     //Play 5 rounds
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// };
// playGame();

const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', () => {
    playRound();
}));

const result = document.querySelector('div');
