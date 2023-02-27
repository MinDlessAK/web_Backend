

const fs=require('fs');
/*
fs.mkdir('akash' ,(err) =>{
    console.log("folder created")
});
*/

//fs.writeFile("./akash/bio.txt","today is awesome day", (err )=>{
  //  console.log("files is created");
//console.log(err);
//});
//fs.appendFile('./akash/bio.txt',"hello i love pizza" ,(err)=>{
  //  console.log("file data appended")
//});

/*
fs.readFile('./akash/bio.txt','utf-8',(err,data)=>{
    console.log(data);
})*/
/*
fs.rename("./akash/bio.txt","./akash/mybio.txt",(err)=>{
    console.log("rename done")
})*/
/*

fs.unlink("./akash/mybio.txt",(err)=>{
    console.log("file deleted")
})
*/
fs.rmdir("./akash",(err)=>{
    console.log("file deleted");
});