const express       = require("express");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const Campground    = require("./models/campground");
const Comment       = require("./models/comment");
const seedDB        = require("./seeds");
const app           = express();
const port          = 3000;


mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

seedDB();

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
            res.render("campgrounds/index", {campgrounds: campgrounds});
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
    res.render("campgrounds/new");
});

//Show - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
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

// ==============================================
// COMMENT ROUTES
// ==============================================
app.get("/campgrounds/:id/comments/new",function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {campground: campground});
        }
    })
    
});
app.post("/campgrounds/:id/comments",function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    })
    
});



app.listen(port, () => console.log(`Yelp Camp Page Started on port ${port}!`) );