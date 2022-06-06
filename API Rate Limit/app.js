const express = require("express");
const app = express();
const rateLimiter = require("express-rate-limit");
const posts = require("./posts")

const limit  = rateLimiter({
    max:10,
    windowMs:60000 
})


app.get("/posts", limit, (req,res) => {
    res.send({
        status : "Successful",
        posts : posts
    })
})

app.listen(3080, ()=>{
    console.log("listening on port 3080");
})