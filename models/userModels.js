const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:false,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:false,
        index:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
const User  = mongoose.model('User', userSchema);
module.exports= User;