// All the possible choices for the game
const choices = ["Rock", "Paper", "Scissors"];

// PLayer choice
let playerChoice = prompt("Enter Rock, Paper, or Scissors:");

// COmp choice
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Compare choices and determine whos the winner
function playRound(playerChoice, computerChoice) {
  // Convert choices to lowercase to make it case-insensitive
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // Check for a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // CHeck all the possible winning scenarios
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}.`; // all other scenarios
  }
}

// Display the result of the round
const result = playRound(playerChoice, computerChoice);
console.log(`Player choice: ${playerChoice}`);
console.log(`Computer choice: ${computerChoice}`);
console.log(result);

//5 round logic w for-loop
