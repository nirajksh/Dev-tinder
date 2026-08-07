import express from "express"
  import User from "./models/user.js"
import bcrypt from "bcrypt"
  import jsonwebtoken from "jsonwebtoken"

  import validateSignUpData from "../utils/validation.js"


const authRouter = express.Router()



authRouter.post("/signup",async (req,res)=>{


     try{
    
    
   validateSignUpData(req)
  const {firstName,lastname, emailId,password } = req.body

  const passwordHash = await bcrypt.hash(password,10)

    const user = new User ({
        firstName,
        lastName,
        emailId,
        password:passwordHash
    })
    await user.save()

    res.send("user Added successfully")
}
catch (err){
    console.error(err)
  res.status(500).send(err.message);
}
})

export default authRouter;

