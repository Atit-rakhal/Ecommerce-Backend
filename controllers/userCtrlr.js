const User = require("../models/userModels");
exports.createUser = async (req, res) => {
    try {
      console.log("User model:", User);
  
      const { email } = req.body;
      console.log("Incoming data:", req.body);
  
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
  
      const findUser = await User.findOne({ email });
      console.log("User found:", findUser);
  
      if (!findUser) {
        const newUser = await User.create(req.body);
        return res.status(201).json({ newUser });
      } else {
        return res.status(400).json({ message: "Email already exists" });
      }
    } catch (error) {
      console.error("Error in createUser:", error);
  
      if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message });
      }
  
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  