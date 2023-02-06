const fs=require('fs');

/*
const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./data.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
  
// console.log(data);

let newData = data.map((product) => {
    const { Date, Description, Ashok } = product;
    return { Date, Description, Ashok };
  })
  newData= newData.slice(0,5);
  console.log(typeof newData[0].Ashok)
  console.log(newData);
  /*

  */

  const dat=require('./data.js');
  let newProducts = dat.map((product) => {
    const { Date, Description, Ashok } = product;
    return {Date, Description, Ashok };
  })
  console.log(newProducts);


  /*
const readData=(path)=>{
    return new Promise((resolve,reject)=>{
        let pp=fs.readFile(path,(err,data)=>{
            if (err){
                console.log("error reading");
                reject (err);
            }
            else{
                resolve(data);
            }
        });
    })
};
const writeData=(path)=>{
    return new Promise((resolve,reject)=>{
        let pp=fs.writeFile(path,(err,data)=>{
            if (err){
                console.log("error reading");
                reject (err);
            }
            else{
                resolve(data);
            }
        });
    })
};
const pp=async ()=>{
    try{
        let da=await readData('./data.json');
        let newProducts = da.map((product) => {
            const { Date, Description, Ashok } = product;
            return {Date, Description, Ashok };
          })
          let zz=[];
          newProducts.forEach((res) => {
            zz.push(JSON.parse(res));
         })
         // newProducts=JSON.parse(newProducts);
         // console.log(newProducts)
         // await writeData('./new.json');
         console.log(zz)
    }
    catch(err){
        console.log("cannot read",err);
    }
};
pp();
*/