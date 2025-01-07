/* Handle error for page not found or requested url not found  */
const notfound = (req, res, next) => {
    const error = new Error(`The resource at ${req.originalUrl} was not found.`);
    res.status(404);  
    next(error); 
}

/* general error handeling  */

const errorHandler = (err, req, res, next) => {
   
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);  

    // Send a JSON response with error details
    res.json({
        message: statusCode === 404 
            ? "Sorry, the page you requested could not be found."  
            : "An unexpected error occurred. Please try again later.",  
        stack: process.env.NODE_ENV === 'development' ? err?.stack : undefined,  // Include stack trace only in development
    });
};



 module.exports={notfound,errorHandler};