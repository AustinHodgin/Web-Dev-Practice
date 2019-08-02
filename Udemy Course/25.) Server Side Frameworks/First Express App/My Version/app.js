var express = require("express");
var app = express();
var port = 3000;

// '/' => "Hello there!"
app.get("/", function(req, res){
    res.send("Hello there!");
});
// '/bye' => "Good Bye"
app.get("/bye", function(req, res){
    res.send("GoodBye!");
});
// '/dog' => "MEOW"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});
//tell express to listen for request (Start Server)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))