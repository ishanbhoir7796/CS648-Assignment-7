function choiceInWords(n) {
    if (n === 1) return "rock";
    else if (n === 2) return "paper";
    else return "scissors";
}

let userChoice, computerChoice;
let isValid = false;

do {
    userChoice = window.prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        isValid = true;
    } else {
        window.alert("Invalid choice! Please type Rock, Paper, or Scissors.");
    }
} while (!isValid);

let randomNumber = Math.floor(Math.random() * 3) + 1;

computerChoice = choiceInWords(randomNumber);

window.alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice);

if (userChoice === computerChoice) {
    window.alert("It's a tie! You both chose " + userChoice + ".");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    window.alert("You win! " + userChoice + " beats " + computerChoice + ".");
} else {
    window.alert("Computer wins! " + computerChoice + " beats " + userChoice + ".");
}