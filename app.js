const http= require('http');

const ser=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('homepage');

        // the for loops will block the other request

        for (let i=0;i<1000;i++){
            for (let j=0;j<1000;j++){
                console.log("hello");
            }
        }

        /*
        // this wouldnt block any req. 
        
        setTimeout(()=>{
            console.log('hello')
        },20000);
        */
    }
    else if(req.url==='/about'){
        res.end('about page')
    }
    else{
        res.end('error');
    }
        
})

ser.listen(5000,()=>{
    console.log('server listeining');
})