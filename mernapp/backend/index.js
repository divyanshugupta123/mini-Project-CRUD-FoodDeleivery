const express = require('express')
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.get('/',(req,res)=>{
    res.send("Root Route");
})


app.listen(8080,()=>{
    console.log("server connected at port 8080")
})