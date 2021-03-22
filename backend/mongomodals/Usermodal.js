const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String
    },
    city:{
        type:String
    },
    email:{
        type:String
    },
    appointments:{
        type:[{
            type:Object
        }]
    },
    })
const User = mongoose.model("Usersdata",userschema)

module.exports=User