//synchronous non blocking and synchronus blocking
// these are the flavours related to file module

const {readFileSync,writeFileSync}= require('fs');
// same as 
// const fs=require('fs');
// fs.readFileSync
console.log("start");
// it requiere the location and the encoding used
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second);
// if the said file is not there then it creates and if its there then it overwrite
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'});
// to append we need to pass the flag with a
// to overwrite only the first two arguments were sufficient
console.log("done with task");