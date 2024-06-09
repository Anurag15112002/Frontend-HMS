import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3,"first name should contain at least three character!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3,"last name should contain at least three character!"]
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [11,"phone number must contain exact 11 digit"]
    },
    message:{
        type:String,
        required:true,
        minLength: [10,"message should contain at least 10 character"]
    }
});

export const Message=mongoose.model("Message",messageSchema);
