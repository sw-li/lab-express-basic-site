const express = require("express")

const app = express()

app.get("/about", (req,res)=>{
    res.sendFile(__dirname +"/views/about.html")
})


