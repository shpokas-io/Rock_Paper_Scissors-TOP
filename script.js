//RockPapperScissors scripts Global scope

let humanScore = 0;
let computerScore = 0;

//Logic for getComputerChoice
//1) First, need to create random function that displays Rock,Paper,Scissor strings.

const getComputerChoice = function () {
  const words = [`Rock`, `Paper`, `Scissors`];
  const computerChoice = words[Math.trunc(Math.random() * words.length)];
  console.log(`The computer choice: ${computerChoice}`);
};

const computer = getComputerChoice();

// 2) Human logic for choosing getHumanChoice.

const getHumanChoice = function () {
  let player = prompt(`Choose: rock, paper, scissors`);
  console.log(`Players choice: ${player}`);
};
getHumanChoice();
