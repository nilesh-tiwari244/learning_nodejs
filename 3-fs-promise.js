const fs= require('fs');

const readtext=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if (err){
                reject (err);
            }
            else{
                resolve(data);
            }
        })
    });
}

readtext('./content/first.txt')
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)});