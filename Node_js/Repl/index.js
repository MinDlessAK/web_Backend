// REPL
// 1: js Expression
// 2: use  variables
// 3: Multiline code
// 4: use (_)to get last result
// 5: we can use editor mode 
//1 to 4 explain in note book


//5: we can use editor mode
// type this in terminal

//const name = (myname) => {console.log('my name is $:',(myname))}
//name=('this is akash i love pizza');

//const name ="akash";
//console.log(name);

//core modules

     const { CONNREFUSED } = require("dns");
const fs= require("fs");     
    /* fs.writeFileSync('read.txt',"welcome   to my channel ");
     fs.writeFileSync ('read.txt','mindless conquer,welcome  to my channel');
     */
    // To add somethings in your file
    // fs.appendFileSync('read.txt','how are you i am fine');
    
    // const buf_data=fs.readFileSync('read.txt');

//node.js includes an additional data type called buffer
// (not available in browser's javascript).
// buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

//org_data = buf_data.toString();
//console.log(org_data);


//To rename your file

fs.renameSync('read.txt','readwrite.txt');







   