
//synchronous
/*
const fs =require("fs");

const data=fs.readFileSync('read.txt','utf-8')
console.log(data)
console.log("after the data")
*/
//Asynchronous
const fs =require("fs");

const data=fs.readFile('read.txt','utf-8', (err,data)=>{
    console.log(data);
})

console.log(" after the data ");
















