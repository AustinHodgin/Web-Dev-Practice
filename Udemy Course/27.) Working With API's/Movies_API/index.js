var express = require("express");
var request = require("request");
var app = express();
var port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var search = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + search;
    request(url, function(error, responce, body){
        if(!error && responce.statusCode === 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }else{
            res.redirect("/");
        }
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))