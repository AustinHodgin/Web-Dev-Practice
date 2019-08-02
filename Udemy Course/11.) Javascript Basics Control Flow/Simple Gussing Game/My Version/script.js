//create secretNumber
var secretNumber = 7

//Ask user for guesses
var userGuess = Number(prompt("Please guess a number."));

//check user guess
if(userGuess === secretNumber){
    alert("You guessed the correct number!");
}else if(userGuess > secretNumber){
    alert("You guessed too high! Please guess again!");
}else{
    alert("You guessed too low! Please guess again!");
}


