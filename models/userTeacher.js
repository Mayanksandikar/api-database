const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
} ,
 {
    timestamps:true
})

//create model

const User =mongoose.model('teacher', userSchema)
module.exports = User;