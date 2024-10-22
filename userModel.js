
const mongoose = require("mongoose")
// const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema({
username:{type:String,required:true} ,
    
email :{type:String,required:true},

password:{type:String,required:true},




});

module.exports = new mongoose.model("users",userSchema)


