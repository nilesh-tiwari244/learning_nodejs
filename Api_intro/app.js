const express=require('express');
const app=express();
const path=require('path');

const logger=require('./middleware1_logger.js');
const authorize =require('./middleware2_authorize.js');

app.use('/api',[logger,authorize]);


app.get('/',(req,res)=>{
 // res.send('HomePage'); //GET / 2023 as logger is there so this will be consoled
  res.sendFile(path.join(__dirname + '/home.html')); 
})
app.get('/about',(req,res)=>{
  res.send('About Page'); //GET /about 2023 as as logger is there so this will be consoled
})
app.get('/api/docu',(req,res)=>{
  res.send('api docu'); //GET /about 2023 as as logger is there so this will be consoled
})
app.listen(5000,()=>{
  console.log("server is listeing at port 5000");
})
