const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 8080;

const path  = require("path");
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname , "/views"));

app.get("/" , (req , res)=>{
    res.render("home.ejs");
})

app.get("/celebrate" , (req , res)=>{
    res.render("celebrate.ejs")
})

app.get("/birthday" , (req , res)=>{
    res.render("birthday.ejs")
})
app.listen(port , (req ,  res)=>{
    console.log(`App is listening on the port ${port}.`)
})