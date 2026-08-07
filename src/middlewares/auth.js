import jwt from "jsonwebtoken"
import User from "../models/user";
// const adminAuth = (req ,res ,next ) =>{
//     //console.log("admin auth is getting checked !!")

//     const token ="xyz"

//     const isAdminAuthorized = token ==="xyz"

//     if(!isAdminAuthorized){
//         res.status(400).isAdminAuthorized("unauthorized access ")

//     }
//     else{
//         next();
//     }

// }


// const userAuth =(req,res,next)=>{

//     const token = "fewouefwouebfo"
//     const userAuthorized = token ==="fewouefwouebfo"

//     if(!userAuthorized){
//         res.status(402).send("unauthorized access")
//     }

//     else{
//         next()
//     }


//}

//export default {adminAuth,userAuth};

const userAuth= (req, res, next )=>{

   try{
     const {token } = req.cookies;

     if(!token){
        throw new Error ("Token is not valid  !!!! ")
     }

    const decodedObj = await jwt.verify (token,"jwt secret key")

    const {_id} =  decodedObj

    const user = await User.findById(_id)

    if(!user){
        throw new Error("User not found ")
    }
    req.user =user
    next();
    
   }
   catch (err){
    res.status (400).send ("Error:"+err.message)

    
   }
}

export default userAuth;