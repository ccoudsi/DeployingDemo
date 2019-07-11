// Heroku
// https://salty-fjord-37124.herokuapp.com/ | https://git.heroku.com/salty-fjord-37124.git
// ===================================================================
// SETUP
// ===================================================================
var express = require("express");
var app = express();

app.set("view engine", "ejs");

// ===================================================================
// ROUTES
// ===================================================================
app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

// ===================================================================
// SERVER
// ===================================================================
// app.listen(3000, function(){
//     console.log("Serving DepolyingDemo on port: 3000");
// });
app.listen(process.env.PORT, process.env.IP);
