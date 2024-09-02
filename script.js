let computerScore = 0;
let humanScore = 0;

let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  return computerChoice;
};

const rockButton = document.querySelector(".rock")

const paperButton = document.querySelector(".paper");

const scissorButton = document.querySelector(".scissor");

function getHumanChoice(event) {
  
}
