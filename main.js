const logMap = { wins: 0, loses: 0, draws: 0 };
const allBet = document.querySelectorAll(".button");
let userChoice = "none";

allBet.forEach((element) => {
  element.addEventListener("click", function () {
    userChoice = element.classList[0];
    document.querySelector(".userBet").textContent = `You chose ${userChoice}!`;
    document.querySelector(".computerBet").textContent = "Computer's Bet: none";
  });
});

document.querySelector(".gameStart").addEventListener("click", function () {
  let computerChose = getComputerChoice();
  let result = playRound(computerChose, userChoice);

  document.querySelector(
    ".computerBet"
  ).textContent = `Computer's Bet: ${computerChose}!`;

  document.querySelector(".result").textContent = `You ${result}!`;

  document.querySelector(`.logs.${result}`).textContent = `${
    result.charAt(0).toUpperCase() + result.slice(1)
  }: ${logMap[result + "s"]}`;
});

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);

  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(computerChose, userChoice) {
  if (computerChose === userChoice) {
    logMap["draws"]++;
    return "draw";
  } else if (
    (userChoice === "rock" && computerChose === "scissor") ||
    (userChoice === "paper" && computerChose === "rock") ||
    (userChoice === "scissor" && computerChose === "paper")
  ) {
    logMap["wins"]++;
    return "win";
  } else {
    logMap["loses"]++;
    return "lose";
  }
}
