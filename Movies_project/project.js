const express=require('express');
const app=express();
const diary=require('./diary.js')
const ratings=require('./ratings.js');
app.get('/',(req,res)=>{
    res.send(`<h1> Select from the following what you wanna see</h1>
                <br>
                <a href="./diary">Diary</a>
                <a href="./ratings">Ratings</a>`
                )
})
app.get('/year/:yr',(req,res)=>{
    let gg=[...ratings];
    const {yr}=req.params;
    let ff=gg.filter((element)=>{
            return element.Year===Number(yr)
    })
    res.send(ff);
})
app.get('/rating/query',(req,res)=>{
    const {rat,lim}=req.query;
    let lf=[...ratings];
    if (rat){
        lf=lf.filter((ele)=>{
            return ele.Rating>Number(rat)
        })
    }
    if (lim){
        lf=lf.slice(0,Number(lim));
    }
    if (lf.length<1){
        return res.send(`<h1>No such elements exists</h1>`)
    }
    res.send(lf);
})
app.get('/diary',(req,res)=>{
    let chanMov=diary.map((element)=>{
        const {Name,Year,Watched_Date}=element;
        return {Name,Year,Watched_Date};
    })
    res.json(chanMov);
})
app.get('/ratings',(req,res)=>{
    let chanMov=ratings.map((element)=>{
        const {Name,Year,Rating}=element;
        return {Name,Year,Rating};
    })
    res.json(chanMov);
})
app.listen(5000,(req,res)=>{
    console.log("listeing");
})