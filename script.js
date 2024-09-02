let computerScore = 0;
let humanScore = 0;
let computerChoice = "";
let humanChoice = "";

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  return computerChoice;
};

let getHumanChoice = (choice) => {
  return choice;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanChoice = getHumanChoice(button.className);
    playRound(humanChoice, getComputerChoice());
    checkGameStatus();
  });
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("Comp own");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("Comp own");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("Human own");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("Human own");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("Human own");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log("Comp own");
  }

  console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

function checkGameStatus() {
  if (humanScore === 5) {
    alert("Congratulations, you won!");
    computerScore = 0;
    humanScore = 0;
  } else if (computerScore === 5) {
    alert("AI will take over the world now.");
    computerScore = 0;
    humanScore = 0;
  }
}
