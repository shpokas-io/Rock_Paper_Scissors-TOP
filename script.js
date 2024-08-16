//RockPapperScissors script

//Logic for getComputerChoice
//1) First, need to create random function that displays Rock,Paper,Scissor strings.

const getComputerChoice = function () {
  const words = [`Rock`, `Paper`, `Scissors`];
  const computerChoice = words[Math.trunc(Math.random() * words.length)];
  console.log(`The computer choice: ${computerChoice}`);
};

const computer = getComputerChoice();
