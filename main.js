let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);
  if (randNum === 1) {
    return "rock";
  } 
  else if (randNum === 2) {
    return "paper";
  } 
  else {
    return "scissor";
  }
}

function getHumanChoice() {
  let myChoice = prompt("Choose your bet!",)
  return myChoice.toLowerCase;
}