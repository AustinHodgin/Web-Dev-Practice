var express = require("express");
var passport = require("passport");
var middleware
var router = express.Router();
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });  
    });
});

//Show Login
router.get("/login", function(req, res){
    res.render("login", {message: req.flash("error")} );
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
    }), function(req, res){
});


router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged out!")
    res.redirect("/campgrounds")
});

module.exports = router;