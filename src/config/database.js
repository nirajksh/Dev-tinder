import mongoose from "mongoose"

const connectDB =async()=>{

    await mongoose.connect("mongodb+srv://8809nirajsingh:Niraj8809@cluster0.se6ycg7.mongodb.net/devTinder")

}


export default connectDB ;