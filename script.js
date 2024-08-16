// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the player's choice
function getPlayerChoice() {
  let choice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
}

// Function to play a single round
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "You lose this round!";
  }
}

// Function to play 5 rounds
function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}:`);
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    console.log("-----------------------------");
  }

  // Determine overall winner
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

//Result finall
let playerScore = 0;
let computerScore = 0;

playGame();
