const express = require ("express");
const app =express();


app.get("/", (req,res)=>{

    res.send("hello from the express")
});

app.get("/about", (req,res)=>{
// when all write to response than u have to use send always 
    res.send("hello from the about page")
});
app.get("/contact", (req,res)=>{

    res.send("hello from the contact page")
});
app.get("/temp", (req,res)=>{

    res.send("hello from the temp page")
});

app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})