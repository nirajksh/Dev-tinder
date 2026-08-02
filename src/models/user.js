import mongoose from "mongoose";

import validator from "validator"

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
    validate(value) {
        if(!validator.isEmail (value) ){
            throw new Error ("Invalid Email Address :" + value)
        }
    }

},
password:{
    type:String,
    required :true,
    validate (value){
        if(!validator.isStrongPassword(value)){
            throw new Error ("Enter a strong password " + value)
        }
    }
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
    validate(value) {
        if(!validator .isURL(value)){
            throw new Error ("invalid photo url "+value)
        }
    }
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