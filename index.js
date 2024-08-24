//Computer chooses rock, paper, or scissors
function getComputerChoice(max) {
    const rock = 0;
    const scissors = 1;
    const paper = 2;
    return Math.floor(Math.random() * max)
}
//Print result
console.log(getComputerChoice(3));