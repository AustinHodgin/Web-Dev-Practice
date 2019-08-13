const express           = require("express");
const bodyParser        = require("body-parser");
const mongoose          = require("mongoose");
const methodOverride    = require("method-override");
const Campground        = require("./models/campground");
const passport          = require("passport");
const LocalStrategy     = require("passport-local");
const User              = require("./models/user");
const Comment           = require("./models/comment");
const seedDB            = require("./seeds");
const app               = express();
const port              = 3000;

var commentRoutes       = require("./routes/comments");
var campgroundRoutes    = require("./routes/campgrounds");
var indexRoutes          = require("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useFindAndModify: false});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This is the super secret secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(port, () => console.log(`Yelp Camp Page Started on port ${port}!`) );