var p1points = 0;
var p2points = 0;
var playingTo = 5;
var player1Button = document.getElementById("p1Button");
var player2Button = document.getElementById("p2Button");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var maxScore = document.getElementById("maxScore");
var gameOver = false;

numInput.addEventListener("change", function(){
    maxScore.textContent = this.value;
    playingTo = Number(this.value);
    resetGame();
});

player1Button.addEventListener("click", function(){
    if(!gameOver){
        p1points++;
        if(p1points === playingTo){
            gameOver = true;
            p1Score.classList.add("winner");
        }
        p1Score.textContent = p1points;
    }
});

player2Button.addEventListener("click", function(){
    if(!gameOver){
        p2points++;
        if(p2points === playingTo){
            gameOver = true;
            p2Score.classList.add("winner");
        }
        p2Score.textContent=p2points;
    }
});

resetButton.addEventListener("click", function(){
    resetGame();
});

function resetGame(){
    p1points = 0;
    p2points = 0;
    p1Score.textContent = p1points;
    p2Score.textContent= p2points;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
    gameOver = false;
}

