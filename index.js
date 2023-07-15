// constant variable choices for RPs //
const choices = ["rock", "paper", "scissors"];
// random computer choice //
function getComputerChoice() {
  const RNG = Math.floor(Math.random() * choices.length);
  return choices[RNG];
}
// print computer choice //
console.log(getComputerChoice());
// winners and losers determination //
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection=== computerSelection){
    return "tie!";
  }
  else if(
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") 
  ){
    return "you win!";
  }
  else {
    return "you lose!";
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// score card counter //
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(`Player chose ${playerSelection}`)
    console.log(`Computer chose ${computerSelection}`)
  // print statements for each resolution //
    const roundResult = playRound(playerSelection,computerSelection);

    if (roundResult === "you win!") {
      console.log("You won this round!");
      playerScore++;
    } else if (roundResult === "you lose!") {
      computerScore++;
    }else {
      console.log("This round is a tie!");
    }
    console.log(`Scores after round ${i +1}: Player - ${playerScore}, Computer - ${computerScore}`);
}
// end game message//
 if (playerScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie.");
    }
}

game();

