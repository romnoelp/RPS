let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  return computerChoice;
};

let getHumanChoice = () => {
  let choice = prompt("Give me your answer, boi.");
  return choice.toLocaleLowerCase();
};

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Computer won");
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("Computer won");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Human won");
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("Human won");
  }
}

playRound(getHumanChoice(), getComputerChoice());
