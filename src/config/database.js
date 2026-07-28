const mongoose = require("mongoose")


const MongoDB =async()=>{

    await mongoose.connect("mongodb://localhost:27017/")

}

MongoDB ().then(()=>{
    console.log("database connected successfully")
}).catch(err=>{
    console.error("somethings wents wrong")
})