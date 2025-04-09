const express= require("express");
const app= express();
const dotenv= require("dotenv").config();
const port = process.env.PORT||3000;
app.use(express.json());

const dbConnect= require("./config/dbConnect");

dbConnect();

app.get("/",(req,res)=>{

    res.status(200).send("hello on that side ");

});

const authRoute= require("./routes/authRoute");
const { notfound, errorHandler } = require("./middlewares/errorhandler");
app.use("/api/users",authRoute);
app.use(notfound);
app.use(errorHandler);
app.listen(port,()=>{

    console.log(`server is up and running at : http://localhost:${port}/`);
});