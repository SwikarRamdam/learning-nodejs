const fs = require('fs');
let text = fs.readFileSync("abc.txt","utf-8");
text = text.replace("file","FILE");
fs.writeFileSync("new.txt",text);
console.log(text);
console.log("Replaced");
const neW = fs.readFileSync("new.txt","utf-8");
console.log(neW);