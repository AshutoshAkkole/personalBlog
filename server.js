const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("home",{});
})

app.get("/blog",function(req,res){
    res.render("blog.ejs",{});
})


app.listen(3000,function(){
    console.log("blog server started on port 3000");
});