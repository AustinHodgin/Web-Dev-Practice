const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b7cd09f4bc351_340.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water, Beautiful granite!"
//     }
//     , function(err, campground){
//     if(err){
//         console.log(err)
//     } else{
//         console.log("New Created Campground");
//         console.log(campground);
//         }
//     }
// );

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("landing");
});

//Index
app.get("/campgrounds", function(req, res){
    //get all campgrounds from db
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: campgrounds});
        }
    });
});

//Create - add new campground to the DB
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description : desc}
   
    //add to db
    Campground.create(newCampground, function(err, campground){
        if(err){
            console.log(err)
        } else{
            console.log("New Created Campground");
            console.log(campground);
            }
        }
    );
    //redirect to campgrounds
    res.redirect("campgrounds")
});

//New - shows form to add new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//Show - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find  the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //render the page with info from ID
            res.render("show", {campground: foundCampground});
        }
    });
    
});

app.listen(port, () => console.log(`Yelp Camp Page Started on port ${port}!`) );