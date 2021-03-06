var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");



router.get("/", function(req, res){
    //get all campgrounds from db
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: campgrounds, currentUser: req.user});
        }
    });
});

//Create - add new campground to the DB
router.post("/", isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description : desc, author: author}
   
    //add to db
    Campground.create(newCampground, function(err, campground){
        if(err){
            console.log(err)
        } else{
            //redirect to campgrounds
            res.redirect("/campgrounds")
            }
        }
    );
});

//New - shows form to add new campground
router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//Show - shows more info about one campground
router.get("/:id", function(req, res){
    //find  the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //render the page with info from ID
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;