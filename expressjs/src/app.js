const express = require ("express");
const app =express();


app.get("/", (req,res)=>{

    res.send("hello from the express")
});

app.get("/about", (req,res)=>{

    res.send("hello from the about page")
});

app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})


