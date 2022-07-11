console.log("Express is a web application framework based on nodejs")
const express = require('express');
const app = express();
const port = 80;

app.use('/static',express.static('static'))

app.get("/",(req, res)=>{
    res.status(200).send("This is home of the first express")
});

app.get("/about",(req, res)=>{
    res.send("This is about the first express")
})

// app.post("/about",(req, res)=>{
//     res.send("This is post request about the first express")
// })

app.post("/about",(req, res)=>{
    res.status(404).send("This is post request about the first express")
})

app.get("/contact",(req, res)=>{
    res.send("This is contact of the first express")
})

app.listen(port,()=>{
    console.log("Successfully started at port ${port}`")
})
