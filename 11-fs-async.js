const {readFile,writeFile}=require('fs');
// it uses callback
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log("error:",err);
    }
    console.log(result);
})
// if no encoding will be provided then we will
// end up with buffer values

// callback hell
console.log("start");
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log("error:",err);
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
        }
        const second= result;
        writeFile(
            './content/result-async.txt',
            `new type of async: ${first}, ${second}`,
            (err,result)=>{
              if (err){
                console.log(err);
                return;
              }  
              console.log(result,"done with this task");
            });
    });
});

console.log("can start new task");


/* in case of non blocking 
as soon as we start a task we offload and ready for new task


*/