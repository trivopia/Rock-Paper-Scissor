function playGame(n) {
  let humanScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  for (let i = 1; i <= n; i++) {
    playRound();
  }

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
    let myChoice = prompt("Choose your bet",)
    return myChoice.toLowerCase();
  }

  function playRound() {
    let computerChose = getComputerChoice();
    let youChose = getHumanChoice();
  
    console.log("You chose " +  youChose + ". Computer chose " + computerChose)
  
    if (computerChose === youChose) {
      console.log("Draw!");
      drawScore ++;
    }
    else if (
      (youChose === "rock" && computerChose === "scissor") || 
      (youChose === "paper" && computerChose === "rock") ||
      (youChose === "scissor" && computerChose === "paper")
    ) {
      console.log("You Win!");
      humanScore ++;
    }
    else {
      console.log("You lose!");
      computerScore ++;
    }
  
    console.log(`Scoreboard [Wins: ${humanScore} Loses: ${computerScore} Draws: ${drawScore}]`);
  }
}