import express from "express"
  import userAuth from "./middlewares/auth.js"


const requestRouter = express.Router()





app.post ("/sendConnectionRequest ", userAuth , async (req,res)=>{
    const user = req.user ;


    res.send(user.firstName+ "connection request sent ")
} )


export default requestRouter;