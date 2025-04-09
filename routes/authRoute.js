const express = require('express');
const router= express.Router();
const {createUser,loginUser,getallUser, getaUser} =require("../controllers/userCtrlr");

router.post("/register",createUser);
router.get("/test", (req, res) => {
    res.send("✅ Test route working");
  });
router.post("/login", loginUser);
router.get("/all-user",getallUser );
router.get("/:id",getaUser );

module.exports=router;