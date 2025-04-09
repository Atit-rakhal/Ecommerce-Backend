const jwt = require('jsonwebtoken')

exports.generateToken= (id)=>{
    return jwt.sign({
        data:id
    },process.env.JWT_SECRET,{expiresIn:"3d"} 
)};