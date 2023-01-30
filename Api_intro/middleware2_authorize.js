const authorize=((req,res,next)=>{
    console.log("Authorize");
    const {user}=req.query;
    if (user=="nilesh"){ // here we are creating an user this user can accessed by any of 
        // of the route if auth is successful
        console.log("entered");
        req.user={name:"nilesh",id:1};
        next();
    }
    else{
        console.log("denied");
        res.status(400).send("Unauthorized");
    }

});
module.exports=authorize;