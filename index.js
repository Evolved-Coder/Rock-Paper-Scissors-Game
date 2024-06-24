const choiceBtn = document.querySelectorAll(".choiceBtn");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

let player;
let computer;
choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn()
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}))


function computerTurn(){
    let randNum = Math.ceil(Math.random() * 3);
    switch(randNum){
        case 1: computer = "ROCK";
    break;
        case 2: computer = "PAPER";
    break;
        case 3: computer = "SCISSORS";
    break;
    }
}

function checkWinner(){
    if(computer === player){
        return "DRAW";
    }
    else if(computer === "ROCK"){
        return player === "PAPER" ? "You Win 🏆" : "You Lose ☹️";
    }
    else if(computer === "PAPER"){
        return player === "SCISSORS" ? "You Win 🏆" : "You Lose ☹️"
    }
    else if(computer === "SCISSORS"){
        return player === "ROCK" ? "You Win 🏆" : "You Lose ☹️"
    }
}