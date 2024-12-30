const { default: mongoose } = require("mongoose")
const dotenv= require("dotenv").config();
const dbConnect = async()=>{
try {
    const conn= mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection is sucessful ");
}
catch(error){
    console.log("Databse error: Database is not connected ");


}
};

module.exports= dbConnect;