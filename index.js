//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * max);
    return choices[randomIndex]
}


//Acknowledge user choice
document.getElementById('rock').addEventListener('click', () => {
    humanChoice = "rock";
    playRound();
})
document.getElementById('paper').addEventListener('click', () => {
    humanChoice = "paper";
    playRound();
})
document.getElementById('scissors').addEventListener('click', () => {
    humanChoice = "scissors";
    playRound();
})

//Keep track of scores from players and computer
let humanScore = 0
let computerScore = 0
let humanchoice = ""
const divResult = document.getElementById('result');


//Play a round
function playRound() {
    let computerChoice = getComputerChoice(3);

    //Define which choice beats which in a "this beats that" format
    const outcomes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // Print computer + human choices
    const referee = document.createElement('p');

    //Determine winner of this round
    if (humanChoice === computerChoice) {
        referee.textContent = `It's a tie. You played ${humanChoice}. Computer played ${computerChoice}.`
        divResult.appendChild(referee);
    } else if (outcomes[humanChoice] === computerChoice) {
        ++humanScore //Increase player's score
        referee.textContent = `You win this round! You played ${humanChoice}. Computer played ${computerChoice}.`
        divResult.appendChild(referee);
    } else {
        ++computerScore //Increase computer's score
        referee.textContent = `Better luck next round. You lose! You played ${humanChoice}. Computer played ${computerChoice}.`
        divResult.appendChild(referee);
    } 
    
    //Print Scores
    const runningScore = document.createElement('p');
    runningScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    divResult.appendChild(runningScore);

    finishGame();
};

function finishGame() {
    const victoryMessage = document.createElement('h1');
    if (humanScore === 5) {
        victoryMessage.textContent = `VICTORY! ${humanScore} to ${computerScore}!`;
        divResult.appendChild(victoryMessage);
    } else if (computerScore === 5) {
        victoryMessage.textContent = `DEFEAT ${humanScore} to ${computerScore}.`;
        divResult.appendChild(victoryMessage);
    } else {
        //do nothing
    }
}

// //Play a whole game
// function playGame() {
//     //Play 5 rounds
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// };
// playGame();