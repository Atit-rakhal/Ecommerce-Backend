const mongoose = require('mongoose'); 
const bcrypt = require ('bcrypt')

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

userSchema.pre("save",async function(next){
    const salt= await bcrypt.genSaltSync(10);
    this.password= await bcrypt.hash(this.password,salt)
});

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
//Export the model
const User  = mongoose.model('User', userSchema);
module.exports= User;