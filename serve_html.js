const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('serve.html');
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
})
