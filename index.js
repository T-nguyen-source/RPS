const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const RNG = Math.floor(Math.random()* choices.length);
    return choices[RNG];
};

console.log(getComputerChoice());
