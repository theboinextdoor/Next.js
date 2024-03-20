import mongoose from "mongoose";


//TODO:- Making the Schema
const userSchema = new mongoose.Schema({
    username : {
        type: string ,
        required : [true, "Please Provoide the username"],
        unique : true,
    },
    email: {
        type: string ,
        required : [true , "Please Provide the email"],
        unique : true
    },
    password : {
        type : string,
        required : [true, "Please Provide the password"],
    },
    isVarified : {
        type: Boolean ,
        default : false
    },
    isADmin : {
        type: Boolean ,
        default : false
    },
    forgotrPassword : String ,
    forgotPasswordTokenExpiry : Date,
    varifyToken : String ,
    varifyTokenEXpiry : Date,

})



//TODO:- Making the Model of the Schema
const User = mongoose.model.users || mongoose.model("User" , userSchema)



export default User;