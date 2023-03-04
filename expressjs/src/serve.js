const express = require ("express");
const path =require("path");
const app =express();
// absolute way to gave path
//console.log(__dirname);

//to join floder
//console.log(path.join(__dirname,'../public'))
const staticPath =path.join(__dirname,'../public');

//builtin middleware
app.use(express.static(staticPath));
//this is relative way to gave path
//app.use(express.static('D:/backend dev/expressjs/public'));

app.get("/", (req,res)=>{

    res.send("hello from the express")
});

app.get("/about", (req,res)=>{

    res.send("hello from the about page")
});

app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})


