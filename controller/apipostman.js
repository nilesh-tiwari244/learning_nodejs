let { people } = require('../data.js'); // as we will make modifications in it

const updatepeople=(req,res)=>{
    const {name}=req.body;
    const {id}=req.params;
    const newpep=people.filter((person)=>{
      if (person.id===Number(id)){
          person.name=name;
      }
      return person;
    })
    res.status(201).json({success:true,data:newpep})
}
const deletepeople=(req,res)=>{
    const {id}=req.params;
    const newpep=people.filter((person)=>{
      if (person.id!==Number(id)){
          return person
      }
    })
    res.status(201).json({success:true,data:newpep})
}

module.exports={updatepeople,deletepeople};