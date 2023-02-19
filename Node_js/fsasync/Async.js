
const fs =require('fs');



fs.writeFile("readd.txt","today is awesome day", (err )=>{
    console.log("files is created");
console.log(err);
});

//checking errors
/*
fs.appendFile("readd.txt","plz like share ans subscribe",(erk) =>{
    console.log("task completed");
console.log(erk)
});
*/
fs.readFile("readd.txt",'UTF-8',(err ,data)=>{
    console.log(data)
})





