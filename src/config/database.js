import mongoose from "mongoose"

const connectDB =async()=>{

    await mongoose.connect("mongodb+srv://8809nirajsingh:Niraj8809@cluster0.se6ycg7.mongodb.net/")

}

connectDB ().then(()=>{
    console.log("database connected successfully")
}).catch(err=>{
    console.error("somethings wents wrong")
})

export default connectDB ;