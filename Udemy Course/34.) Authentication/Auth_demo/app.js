const express               = require("express");
const mongoose              = require("mongoose");
const passport              = require("passport");
const bodyParser            = require("body-parser");
const LocalStrategy         = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User                  = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app", {useNewUrlParser: true});

const port = 3000;

var app = express();

app.use(require("express-session")({
    secret:"This is the super secret secret",
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

//=======================================
// Routes
//=======================================
app.get("/", function(req, res){
    res.render("home");
});
app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//Auth
app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    req.body.username;
    req.body.password;
    User.register(new User({
        username: req.body.username
    }), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        } else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            })
        }
    });
});

//Login
app.get("/login", function(req, res){
    res.render("login");
});
app.post("/login", passport.authenticate("local",  {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
    
});

//logout!
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(port, () => console.log(`Auth app Started on port ${port}!`) );