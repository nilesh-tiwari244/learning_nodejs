let { people } = require('../data.js'); // as we will make modifications in it

const addpeople=(req,res)=>{
  const {name}=req.body;
  if (!name){
    return res
      .status(400)
      .json({success:false,msg:'please provide name'});
  }
  res.status(201).send({success:true,data:[...people,name]})
  }

const updatepeople=(req,res)=>{
    const {name}=req.body;
    const {id}=req.params;
    const newpep=people.find((person)=>person.id===Number(id)) // for finding first person with given id
    if (!newpep){
      return res
      .status(404)
      .json({success:false,msg:`no such person with ${id}`})
    }
    const changedpeopl=people.map((person)=>{
      if (person.id===Number(id)){
        person.name=name
      }
      return person;
    })
    res.status(201).json({success:true,data:changedpeopl})
}
const deletepeople=(req,res)=>{
    const {id}=req.params;
    const newpep=people.find((person)=>person.id===Number(id)) // for finding first person with given id
    if (!newpep){
      return res
      .status(404)
      .json({success:false,msg:`no such person with ${id}`})
    }
    const newpepo=people.filter((person)=>person.id!==Number(id))
    res.status(201).json({success:true,data:newpepo})
}

module.exports={addpeople,updatepeople,deletepeople};