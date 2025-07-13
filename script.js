const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".btn");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const winnerEl = document.getElementById("winner");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    playerChoiceEl.textContent = capitalize(playerChoice);
    computerChoiceEl.textContent = capitalize(computerChoice);
    updateScore(result);
  });
});

function getComputerChoice() {
  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

function determineWinner(player, computer) {
  if (player === computer) {
    winnerEl.textContent = "It's a draw!";
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    winnerEl.textContent = "You win!";
    return "player";
  }

  winnerEl.textContent = "Computer wins!";
  return "computer";
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
