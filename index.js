let userScore = 0;
let computerScore = 0;
const user_Score = document.getElementById("user-score");
const computer_Score = document.getElementById("computer-score");
const score_board = document.getElementsByClassName("score-board");
let result = document.getElementById("result");
const stone = document.getElementById("stone");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");

stone.addEventListener('click', () => {
    playGame("st");
});
scissor.addEventListener('click', () => {
    playGame("sc");
});
paper.addEventListener('click', () => {
    playGame("pa");
});
const getComputerChoice = () => {
    let choice = ['st', 'pa', 'sc'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
};
function word(letter) {
    if (letter == 'pa') return "paper";
    if (letter == 'st') return "stone";
    if (letter == 'sc') return "scissor";
}
function win(user, computer) {
    userScore++;
    user_Score.innerHTML = userScore;
    computer_Score.innerHTML = computerScore;
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub();
    result.innerHTML = `${word(user)} ${userWord} beats ${word(computer)} ${computerWord}.You Win!..`;
    document.getElementById('user').classList.add("green");
    setTimeout(() => document.getElementById('user').classList.remove("green"), 500);
    document.getElementById('computer').classList.add("red");
    setTimeout(() => document.getElementById('computer').classList.remove("red"), 500);
}
function lose(user, computer) {
    computerScore++;
    user_Score.innerHTML = userScore;
    computer_Score.innerHTML = computerScore;
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub();
    result.innerHTML = `${word(user)} ${userWord} loses ${word(computer)} ${computerWord}.You lost it!..`;
    document.getElementById('user').classList.add("red");
    setTimeout(() => document.getElementById('user').classList.remove("red"), 500);
    document.getElementById('computer').classList.add("green");
    setTimeout(() => document.getElementById('computer').classList.remove("green"), 500);
}

function draw(user, computer) {
    const userWord = "user".fontsize(3).sub();
    const computerWord = "computer".fontsize(3).sub();
    result.innerHTML = `${word(user)} ${userWord} equal ${word(computer)} ${computerWord}.It's drw!..`;
    document.getElementById('user').classList.add("grey");
    document.getElementById('computer').classList.add("grey");
    setTimeout(() => document.getElementById('user').classList.remove("grey"), 500);
    setTimeout(() => document.getElementById('computer').classList.remove("grey"), 500);

}

function determineWinner(user, computer) {
    switch (user + computer) {
        case "stsc":
        case "past":
        case "scpa":
            win(user, computer);
            break;
        case "scst":
        case "stpa":
        case "pasc":
            lose(user, computer);
            break;
        case "stst":
        case "papa":
        case "scsc":
            draw(user, computer);
            break;
    }
}
const playGame = (input) => {
    let userChoice = input;
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
};
