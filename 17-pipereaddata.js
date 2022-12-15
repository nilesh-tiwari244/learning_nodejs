const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //const rea= fs.readFileSync('./content/big.text','utf8');
    //res.end(rea);
    const rea= fs.createReadStream('./content/big.text','utf8');
    rea.on('open',(val)=>{
        rea.pipe(res); // is used to write chunks of data 
        // res.end(val);
    })
    rea.on ('error',(err)=>{
        res.end(err);
    })
})
server.listen(3000);