const expressAsyncHandler = require('express-async-handler');
const User = require("../models/userModels");
const { generateToken } = require('../config/jwtTokens');

exports.createUser = expressAsyncHandler(async (req, res) => {
    console.log("User model:", User);

    const { email } = req.body;
    console.log("Incoming data:", req.body);

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const findUser = await User.findOne({ email });
    //it will find null if the email doesnt match 
    console.log("User found:", findUser);

    if (!findUser) {
        const newUser = await User.create(req.body);
        return res.status(201).json({ newUser });
    } else {
        return res.status(400).json({ message: "Email already exists" });
    }
});

exports.loginUser= expressAsyncHandler(async (req,res) =>{
const{email,password}= req.body;
const findUser = await User.findOne({email})
if(findUser &&(await findUser.isPasswordMatched(password))){
    res.json({
      _id:findUser?._id,
      firstName:findUser?.firstname,
      lastname: findUser?.lastname,
     email:findUser?.email,
      mobile: findUser?.mobile,
      token:generateToken(findUser?._id),
})
}
else{
    throw new Error("Invalid Credentials")
}
});

exports.getallUser= expressAsyncHandler(async(req,res,next)=>{
try{
const getUsers = await User.find();
res.json(getUsers);
}
catch(error){
    throw new Error(error);
}
});


exports.getaUser = expressAsyncHandler(async (req, res) => {
    console.log("🔥 Inside getaUser controller");
    const id = req.params.id;
    console.log("ID from params:", id);
  
    try {
      const user = await User.findById(id);
      console.log("Fetched user:", user);
      res.json(user);
    } catch (error) {
      console.log("❌ Error in getaUser:", error);
      throw new Error(error);
    }
  });