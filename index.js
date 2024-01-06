let player1Score = 0;
let player2Score = 0;

const player1Button = document.querySelector("#player1");
const player2Button = document.querySelector("#player2");

player1Button.addEventListener("click", function(){
    player1Score++;
    document.querySelector("#player-1-score").innerHTML = player1Score;
    checkWinner();
});

player2Button.addEventListener("click", function(){
    player2Score++;
    document.querySelector("#player-2-score").innerHTML = player2Score;
    checkWinner();
});

function checkWinner() {
    if (player1Score === 5) {
        document.querySelector("#player-1-score").innerHTML = "Winner";
        endGame();
    } else if (player2Score === 5) {
        document.querySelector("#player-2-score").innerHTML = "Winner";
        endGame();
    }
}

function endGame() {
    // You can add any logic here to handle the end of the game
    // For example, disable the buttons or show a reset button
    player1Button.removeEventListener("click", checkWinner);
    player2Button.removeEventListener("click", checkWinner);
}