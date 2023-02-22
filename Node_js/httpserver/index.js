const http =require("http")


const server =http.createServer((req , res)=>{
   // console.log(req.url);
res.end('hiohiiadukvkuljbvjlaljdvljabbn.')
})
 

server.listen(8000,"127.0.0.1" ,()=>{
    console.log("hi lets go no 8000")
});

