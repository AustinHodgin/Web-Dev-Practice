const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

var campgrounds = [
    {name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_1280.jpg"},
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg"},
    {name:"Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg"},
    {name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_1280.jpg"},
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg"},
    {name:"Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg"},
    {name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_1280.jpg"},
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg"},
    {name:"Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg"},
    {name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_1280.jpg"},
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg"},
    {name:"Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg"},
    {name:"Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_1280.jpg"},
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg"},
    {name:"Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg"},

];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect to campgrounds
    res.redirect("campgrounds")
});
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(port, () => console.log(`Yelp Camp Page Started on port ${port}!`) );