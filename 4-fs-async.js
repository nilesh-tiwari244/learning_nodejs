/*

// await basically needs a promise and as reafile
// and writefile dont return promises so, read text was made
// to return promise
const {readFile,writeFile}=require('fs');
const readtext=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if (err){
                reject (err);
            }
            else{
                resolve(data);
            }
        })
    });
}
console.log('trying');
const reading = async ()=>{
    try{
        const fir=await readtext('./content/first.txt');
        const sec=await readtext('./content/second.txt');
        console.log(`${fir},${sec}`);
    }
    catch (err){
        console.log(err);
    }
}
reading ();
*/

// ALTERNATIVELY WE CAN USE UTILS TO PROMISIFY READFILE AND WRITEFILE
const {readFile,writeFile}= require('fs');
const util= require('util');
const readFilepro=util.promisify(readFile);
const writeFilepro=util.promisify(writeFile);
// we could also have made readFile and writeFile promisy directly
// by using 
// const {readFile,writeFile}=require('fs').promises;
// and then no need to use util.promisify
console.log('trying');
const reading = async ()=>{
    try{
        const fir=await readFilepro('./content/first.txt','utf8');
        const sec=await readFilepro('./content/second.txt','utf8');
        console.log(`${fir},${sec}`);
        await writeFilepro('./content/mind-grenade.txt',`content: ${fir}, ${sec}`,{flag:'a'})
    }
    catch (err){
        console.log(err);
    }
}
reading ();
