console.log('hello');
let a=5;
console.log(a);
// In fs module, method name is createReadStream
const {createReadStream}=require('fs');
const stream=createReadStream('./content/big.text'); // invoking the method
// here data is name of event
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{// incase wrong file name
    console.log(err);
})

// here the by default size of buffer will be of 64KB

// we can also customize it using:
// const stream=createReadStream('./contents/big.text',{highWaterMark: 9000})

// we can righaway set the encoding as well so see the actual text
/* 
const stream=createReadStream('./contents/big.text',{
    highWaterMark: 9000,
    encoding:'utf8'
})
*/
// so here we are reading data in chunks of 64 kB and then eventually the remainder
