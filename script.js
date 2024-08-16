//RockPapperScissors scripts Global scope

const choices = [`rock`, `paper`, "scissor"]; //Possible choices

//1) Computer choice:

const compChoice = function () {
  const computerChoice = choices[Math.trunc(Math.random() * choices.length)];
  return console.log(`Computer choice: ${computerChoice}`);
};
// 2) Human logic for choosing getHumanChoice.

const playerChoice = function () {
  let playerInput = prompt(`Choose: rock, paper, scissors`).toLowerCase();
  return console.log(`Player choice: ${playerInput}`);
};

// 3) Logic for single round
