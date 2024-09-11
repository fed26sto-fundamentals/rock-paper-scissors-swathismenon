//ROCK PAPER SCISSORS

const Choices = ["Rock", "Paper", "Scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let PlayerScore = 0;
let ComputerScore = 0;



function PlayGame(PlayerChoice){

    const ComputerChoice = Choices[Math.floor(Math.random()*3)];
    let result = "";

    if(PlayerChoice === ComputerChoice){
        result = "IT'S A TIE!🤝";
    }
    else{
        switch(PlayerChoice){
            case "Rock":
                result = (ComputerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (ComputerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result = (ComputerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    PlayerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
    ResultDisplay.textContent = result;

    ResultDisplay.classList.remove("GreenText","RedText");

    switch(result){
        case "YOU WIN!":
            ResultDisplay.classList.add("GreenText");
            PlayerScore++;
            PlayerScoreDisplay.textContent = PlayerScore;
            break;
        case "YOU LOSE!":
            ResultDisplay.classList.add("RedText");
            ComputerScore++;
            ComputerScoreDisplay.textContent = ComputerScore;
            break;
            
    }
   


}