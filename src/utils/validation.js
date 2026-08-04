import validator from "validator"


const validateSignUpData = (req)=>{

    const {firstName, lastName, emailId, password} = req.body

    if(!firstName || !lastName){
        throw new Error ("first name lastname required ");
        
    }
    else if(firstName.length <4  || firstName.length >50){
        throw new Error ("firstname and lastname should be under  4 to 50 chanracter ")
    }

    else if (!validator.isEmail(emailId)){
        throw new Error ("invalid email  ")
    }
    else if (!validator.isStrongPassword(password)){
        throw new Error {"pls enter strong password "}
    }
}

export default validateSignUpData;