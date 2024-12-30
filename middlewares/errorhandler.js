const notfound= (req,res,next)=>{
const error= new Error(`Not found ${originalUrl}`)
res.status(404);
next(error);

};

const errorHandler=(err,req,res,next)=>{
    const statusCode= res.statusCode == 200?500:res.statusCode;
    res.status(statusCode);
    res.json({
        message:error?.message,
        stack: err?.stack,
    });
};
 module.exports={notfound,errorHandler};