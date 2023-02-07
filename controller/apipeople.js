let { people } = require('../data.js'); // as we will make modifications in it

const allpeople=(req,res)=>{
    res.status(200).json({ success: true, data: people });
}
const addpeople=(req,res)=>{
    let {name}=req.body; // as middleware has been added
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name'})
    }
    res.status(201).send({success:true,person:name}) // 201 is for successful post request
}

module.exports={allpeople,addpeople};