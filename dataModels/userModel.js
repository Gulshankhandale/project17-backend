const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },

    fullname:{
        type:String,
        required:true,
    },

    MobileNo:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true,
    }
})

const user = mongoose.model('user', userSchema);

module.exports = user;