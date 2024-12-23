const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    age:{type:Number},
    password:{type:String},
    gender:{type:String},
    country:{type:String},
});

const User=mongoose.model('User',userSchema);
module.exports=User;