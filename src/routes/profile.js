import express from "express"
  import User from "./models/user.js"
  import userAuth from "./middlewares/auth.js"

const profileRouter = express.Router();

profileRouter.get("/profile",userAuth, async(req,res)=>{

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


export default profileRouter