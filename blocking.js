// const fs = require("fs");
// let text = fs.readFile("abc.txt", "utf-5",(err, data)=>{
//     console.log(err, data);
// });
const fs = require('fs');
let text = fs.readFileSync("abc.txt","utf-8",(a,data) =>{
    console.log(a,data);
    console.log("Okay");
});
text = text.replace("file","FILE");
fs.writeFileSync("new.txt",text);
console.log(text);