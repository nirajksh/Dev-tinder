import express from "express"

const app = express()



app.use("/test",(req,res)=>{
    res.send("server is testing on test endpoint ")

})


app.use("/",(req,res)=>{
    res.send("server is running on home endppoint ")
})

app.use("/",(req,res)=>{
    res.send("express is running home endpoint 2 ")
})

app.listen(7777,()=>{
    console.log("express is running on port 7777")
})