var numSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener("click", function(){
   reset();
});

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}
function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //check square color  to pickedcolor
            if(clickedColor === pickedColor){
                messageDispaly.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Try Again?"
            }else{
                //fade color to background color 
                this.style.backgroundColor = "#232323";
                messageDispaly.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //figure out how many squares
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        //change color for each square to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var ranNum = Math.floor(Math.random() * colors.length);
    return colors[ranNum];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random numbers to array
    //repeat num times
    for(var i = 0; i < num; i++){
        //getRandom color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a 'red' from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a 'green' from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 to 255
    var b = Math.floor(Math.random() * 256);
    //return ' rgb(r, g, b)'
    return "rgb(" + r + ", " + g + ", " +  b + ")";
    }

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    messageDispaly.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        } 
    }
    h1.style.backgroundColor = "steelblue";
}