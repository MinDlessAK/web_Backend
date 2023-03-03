const express = require ("express");
const app =express();


app.get("/", (req,res)=>{
    // to send html
    res.write("<h1>hello from the express</h1>");
    res.send();
});

app.get("/about", (req,res)=>{

    res.send("hello from the about page")
});
app.get("/contact", (req,res)=>{

    res.send("hello from the contact page")
});
app.get("/temp", (req,res)=>{

//     res.send([{
//         id:1,
//         name:"akash"
//     },
//     {
//         id:2,
//         name:"vinod"
//     }
// ])
res.json([{
    id:1,
    name:"akash"
},
{
    id:2,
    name:"vinod"
}
])

});

app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})