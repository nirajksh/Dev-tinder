import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
firstName:{
    type: String,
    required: true,

},

lastName: {
    type: String,
},

emailId:{
    type:String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,

},
password:{
    type:String,
    required :true,
},

age:{
    type: String,
    min : 18,

},
gender:{
    type:String,
    validate(value){
        if(!["male","female","others"].includes(value)){
            throw new Error ("Gender Data is not valid")
        }
    },
},
photoUrl:{
    type:string,
},
about:{
    type:string,
    default: "This is default about of the user"
},
skills:{
    type:[string],
}

})

const User = mongoose.model("user", userSchema)

export default User