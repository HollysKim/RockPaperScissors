function computerPlay() {
    let random_num = Math.floor(Math.random() * 3);
    let hands = ["Rock", "Paper", "Scissors"];
    return(hands[random_num]);
}

function oneGame(playerSelection, computerSelection) {
    let winner = ""
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        alert(`You tied! ${playerSelection} and ${computerSelection} tie.`);
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        winner = "player";
        alert("You win! Paper beats rock.");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        winner = "computer";
        alert("You lose! Paper beats rock.");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        winner = "computer";
        alert("You lose! Scissors beats paper.");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        winner = "player";
        alert("You win! Scissors beats paper.");
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        winner = "player";
        alert("You win! Rock beats scissors.");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        winner = "computer";
        alert("You lose! Rock beats scissors.");
    }
    return winner;
}

function game() {
    let user_score = 0;
    let comp_score = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i+1}! Enter Rock, Paper or Scissors`);
        while(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors") {
            alert("Invalid input. Try entering again.")
            playerSelection = prompt(`Round ${i+1}! Enter Rock, Paper or Scissors`);;
            }
        let computerSelection = computerPlay();
        let victor = oneGame(playerSelection, computerSelection);
        if (victor == "computer") {
            comp_score++;
        } 
        else if (victor == "player") {
            user_score++;
        }
    }
    if(user_score > comp_score) {
        alert(`\n You win! Final score is ${user_score} to ${comp_score}.`);
    }
    else if(comp_score > user_score) {
        alert(`\n You lose! Final score is ${user_score} to ${comp_score}.`);
    }
    else {
        alert(`\n You tie! Final score is ${user_score} to ${comp_score}.`);
    }
}