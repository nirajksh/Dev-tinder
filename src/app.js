import express from "express"

import connectDB from "./config/database.js"

  import User from "./models/user.js"
  import cookieParser from "cookie-parser"
  import jsonwebtoken from "jsonwebtoken"
  import userAuth from "./middlewares/auth.js"

  import authRouter from "./routes/auth.js"
  import requestRouter from "./routes/requests.js"
  import profileRouter from "./routes/profile.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

// import the Router 

 app.use("/",authRouter)
 app.use("/",profileRouter)
 app.use("/",requestRouter)



 




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



app.post("/login",(req,res)=>{

    try{

        const {emailId,password}= req.body;
       
        const user = await User.findOne({emailId: emailId})
      
        if(!user){
            throw new Error ("Invalid Credentials")
        }

 const isPasswordValid = await user.validatePassword (password)
        //const isPasswordValid = await bcrypt.compare(password, user.password )

        if (isPasswordValid){
           //Create a JWT Token 

           const token = await user.getJWT();
            // const token = await jwt.sign({_id:user-_id},secretkey , {
            //     expiresIn: "1d",
            // })
// Add the to cookie and send the response back to the user 
            res.cookie("token",token,{expires: new Date (Date.now() + 8 *3600000) })
            res.send("login sucessfully")
        }
        else("Invalid credentials")

    }
    catch{ 
           res.status(400).send(err.message)
    }
})

app.get("/profile",userAuth, async(req,res)=>{

    try{

        const user = req.user;

        res.send(user)
    }
    catch (err){
        res.status(400).send("ERROR : " + err.message)
    }


//    try{

//      const cookie = req.cookies();
//     const {token}= cookies;  
//     if (!token){
//         throw new Error ("Invalid Token")
//     }
//     const decodedMessage = await jwt.verify(token, secretkey)
//     const {_id}= decodedMessage;

//    // console.log("logged is user "+ _id)
//     const user = await User.findById(_id);
//     if(!user){
//         throw new Error ("User does not exist")
//     }
//     res.send(user)

//    }
//    catch (err){
//     res.status(400).send("ERROR:"+err.message)
//    }
    //console.log(cookie
})

app.get("/user", async(req,res)=>{

    const userEmail = req.body.emailId;
    try{
    const users= await User.find({emailId:userEmail})

    if(users.length ===0){
        res.status(404).send("users not found ")
    }
    else{
          res.send (users)}

    }


    catch(err){
        res.status(400).send(`email not able to fetch${err.message}`)
    }

})

app.get("/feed", async(req,res)=>{

   
 try{
 const users=  await User.find({}) 
res.send(users)
}
catch(err){
    res.status(400).send("something went wrong")
}

})

// app.get("/",(req,res)=>{
//     res.send("get request working properly ")
// })

// app.delete("/user", async(req,res)=>{

//     const userId = req.body._id
//  try{
//     const user = await User.findByIdAndDelete(userId)

//     res.send("user deleted successfully")
//  }

//  catch (err){
//     ress.status(400).send("something went wrong ")
//  }

// })

app.patch("/user/:userId", async(req,res)=>{

  
    const updateId = req.params?.userId;
 console.log(updateId)
    const data = req.body;

      const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age","skills"];

    const isupdateAllowed = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k))

    if(!isupdateAllowed){
        throw new Error ("update not allowed");
    }
    
    if(data?.skills.length>10 ){
        
        throw new Error ("skills cannot be more than 10");
    }

    try{
     await User.findByIdAndUpdate({_id:updateId}, data)

        res.send ("user updated successfully")
    }
   catch (err){
    res.status(400).send("something went wrong "+err.message)
 }


})




connectDB ().then(()=>{
    console.log("database connected successfully")
    app.listen(7777,()=>{
    console.log("server is successfully running on port 7777")
})
}).catch(err=>{
    console.error("somethings wents wrong")
})


