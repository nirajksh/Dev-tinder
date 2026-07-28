import express from "express"
import database from "./config/database"
const app = express()



// app.use("/test",(req,res)=>{
//     res.send("server is testing on test endpoint ")

// })


// app.use("/",(req,res)=>{
//     res.send("server is running on home endppoint ")
// })

// app.get("/get",(req,res,next)=>{
//     //res.send("testing get request")
// next()
    
// },
// (req,res)=>{
//     res.send("testing nested function call ")
// })
// // app.post("/post",(req,res)=>{
// //     res.send("testing post request")
// // })

// app.get("/get",(req,res)=>{
//     res.send("get API called")
// })

// app.post("/push",(req,res)=>{
//     res.send("push api called ")
// })

// app.patch("/patch",(req,res)=>{
//     res.send("patch api called")

// })

// app.delete("/delete",(req,res)=>{
//     res.send("delete api called")
// })

// app.use ("/",(req,res) =>{
//     res.send("Hello")
// })
// app.get("/user/getAllData",(req,res)=>{

// const token ="xyz"

// const isAdminAuthorized = token ==="xyz";

// if(isAdminAuthorized){
//     res.send("All data sent")
// }
// else{
//     res.status(400).send("something went wrong")
// }


// })

// app.get("/admin/deleteUser",(req,res)=>{

//     const token ="xnisfdosubdousovdosudlakmcljwo"

//     const isAdminAuthorized = token ==="xyz"

//     if(isAdminAuthorized){
//         res.send("user is deleted ")
//     }
//     else{
//         res.status(400).send("unauthorized request")
//     }

// })

// app.get("admin/getAllData",(req,res)=>{

// const token = "xyz"

// const isAdminAuthorized = token ==="xyz"

// if(isAdminAuthorized){
//     res.send("all Data sent ")
// }
// else {
//     res.status(400).send("unauthorized access")
// }



// })

// app.get("admin/deleteUser",(req,res)=>{

//     const token ="lvmweivnierui"
//     const isAdminAuthorized =token ==="lvmweivnierui"

//     if(isAdminAuthorized){
//         res.send("user is deleted")
//     }
//     else{
//         res.status(400).send("unauthorized requests")
//     }
// })

// app.use("/",(err,req,res,next)=>{

// if(err){
//     res.status(500).send("something went wrong")
// }
// })




app.listen(7777,()=>{
    console.log("server is successfully running on port 7777")
})