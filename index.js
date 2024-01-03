let player1Score =  parseInt(document.querySelector("#player-1-score").innerHTML);
let player2Score =  parseInt(document.querySelector("#player-2-score").innerHTML);

const player1Button = document.querySelector("#player1");
player1Button.addEventListener("click", function(){
    player1Score++;
    document.querySelector("#player-1-score").innerHTML = player1Score;   
});

const player2Button = document.querySelector("#player2");
player2Button.addEventListener("click", function(){
    player2Score++;
    document.querySelector("#player-2-score").innerHTML = player2Score;   
});

