const fs =require('fs');
const http =require('http');



const server=http.createServer();

server.on('request',(req,res)=>{
    
    // fs.readFile('read.txt',(err,data)=>{
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // })
    const rstream =fs.createReadStream("readd.txt");
     rstream.on("data",(chunkdata)=>{
        res.write(chunkdata)
     });
     //to end res if nothing data remain
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on('error',(err)=>{
        comsole.log(err);
        res.end("file not found");
    });
});







server.listen(80,'127.0.0.1');