//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * max);
    return choices[randomIndex]
}
//Print result
console.log(getComputerChoice(3));