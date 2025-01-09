const expressAsyncHandler = require('express-async-handler');
const User = require("../models/userModels");

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
