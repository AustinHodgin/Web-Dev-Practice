var express = require('express');
var app = express();
var port = 3000;

app.get("/", function(req, res){
    res.send("Hello There! Welcome to my assigment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        duck: "Quack"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:amount", function(req, res){
    var word = req.params.word;
    var amount = parseInt(req.params.amount);
    var result = "";
    for(var i = 0; i < amount; i++){
        result += word + " ";
    }
    res.send(result);
});
app.get("*", function(req, res){
    res.send("Sorry, page not found.... What are you doing with your life?");
});

app.listen(port, () => {console.log(`starting server on ${port}`)});