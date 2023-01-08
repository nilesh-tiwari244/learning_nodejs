const express=require('express');
const path= require('path'); // path moudle is preinstalled in node
const app=express()
// we could also have directly invoked it: 
// const app =require('express')()

app.use(express.static('./public')) // convention is putting up all the files in a folder name public

app.get('/',(req,res)=>{// this callback function will be invoked everytime user is performing get request.
    res.sendFile(path.resolve(__dirname,'./index.html'))// in express we use send, here we can send string or html
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page'); // we can rely on express for setting up status codes
})
app.listen(5000,()=>{
    console.log('server is listeining on port 5000');
})
// to setup my own 404 message
app.all('*',(req,res)=>{ // * for having all verbs included
    res.status(404).send(`<h1>Resource not found</h1>`) // we can chain status with it aswell
}) // to cover every http verb get put ... we use app.all