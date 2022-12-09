const express = require("express")

const app = express()

app.use(express.static('public'))

app.get("/", (_,res)=>{
    res.sendFile(__dirname +"/views/home.html")
})

app.get("/about", (_,res)=>{
    res.sendFile(__dirname +"/views/about.html")
})

app.get("/works", (_,res)=>{
    res.sendFile(__dirname +"/views/works.html")
})

app.get("/galery", (_, res)=>{
    res.sendFile(__dirname + "/views/galery.html")
})

app.listen(3000)