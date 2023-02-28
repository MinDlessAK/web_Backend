const EventEmitter =require("events");

const event =new EventEmitter();

event.on('saymyname',()=>{
    console.log("hello i love to eat pizza")
})
event.on('saymyname',()=>{
    console.log("hello i love to eat pizza")
})
event.on('saymyname',()=>{
    console.log("hello i love to eat pizza")
})


event.emit('saymyname')



event.on('checkpage',(sc,msg)=>{
    console.log(`satus code is ${sc}and the pizza is good ${msg}`)
});


event.emit('checkpage', 200 ,'ok');


