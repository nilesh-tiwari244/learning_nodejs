const express=require('express');
const app=express();
const path=require('path');

//const homeHtml=require(`./home.html`);
// req => middleware => res
/*
app.get('/',(req,res)=>{
  const method=req.method;
  const url=req.url;
  const year= new Date().getFullYear();
  console.log(method,url,year);
  // now if we want to see this before every request we would have to copy and paste
  // it in each app.get function, to avoid this we use middleware

  res.send('HomePage');
})
*/
const logger= (req,res,next)=>{  // we can also create a module for this and then export the logger function
  const url=req.url;
  const method=req.method;
  const year= new Date().getFullYear();
  console.log(method,url,year);
  // this function will run for all the request where its mentioned
  // res.send('texting') // to terminate
  next();
}
app.get('/',logger,(req,res)=>{
 // res.send('HomePage'); //GET / 2023 as logger is there so this will be consoled
  res.sendFile(path.join(__dirname + '/home.html')); 
})
app.get('/about',logger,(req,res)=>{
  res.send('About Page'); //GET /about 2023 as as logger is there so this will be consoled
})
app.listen(5000,()=>{
  console.log("server is listeing at port 5000");
})

// Now in place of having logger mentioned in all the requests in which
// we want our logger to run we can use app.use(logger) and then remove the logger mentioned in each route
/*
  app.use(logger) // but this had to written before any route
  // order matters here as in express everything goes in order
  // so app.use will be called before every route written after it
  //  First middleware functions need to be mentioned

  // we can pass a path in app.use as well
  app.use('/api',logger) will be called before any route having
  /api/...... as their address

*/