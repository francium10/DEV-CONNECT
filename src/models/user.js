const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:{
        type:'string'
    },
    lastName:{
        type:'string'
    },
    email:{
        type:'string'
    },

    country:{
        type:'string'
    },
    organization:{
        type:'string'
    },
    password:{
        type:'string'
    }

})

// const User=mongoose.model("User", userSchema)
// module.exports=User

module.exports=mongoose.model("User", userSchema)