const express=require('express');
const app=express();
const path=require('path');

const logger=require('./middleware1_logger.js');
const authorize =require('./middleware2_authorize.js');

app.use('/api',[logger,authorize]);
// middleware functions in app.use will be invoked for all within the path criteria
// to have full control over middleware functions use them locally in routes
// here also we can have multiple function using array and comma separation

app.get('/',(req,res)=>{
 // res.send('HomePage'); //GET / 2023 as logger is there so this will be consoled
  res.sendFile(path.join(__dirname + '/home.html')); 
})
app.get('/about',(req,res)=>{
  console.log(req.user);
  res.send('About Page'); //GET /about 2023 as as logger is there so this will be consoled
})
app.get('/api/docu',(req,res)=>{
  console.log(req.user);
  res.send('api docu'); //GET /about 2023 as as logger is there so this will be consoled
})
app.get('/api/query',(req,res)=>{
  console.log("here");
})

app.listen(5000,()=>{
  console.log("server is listeing at port 5000");
})
