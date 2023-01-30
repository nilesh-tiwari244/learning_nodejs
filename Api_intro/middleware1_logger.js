const logger=((req,res,next)=>{
    console.log("logger");
    const url=req.url;
    const method=req.method;
    const year= new Date().getFullYear();
    console.log(method,url,year);
    // this function will run for all the request where its mentioned
    // res.send('texting') // to terminate
    next();
});
module.exports=logger;