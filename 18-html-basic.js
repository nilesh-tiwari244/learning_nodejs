const http=require('http');

const server= http.createServer((req,res)=>{
    const url=req.url;
    if (url=='/'){
        res.writeHead(200,{'conten-type':'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    else if (url=='/content'){
        res.writeHead(200,{'conten-type':'text/html'});
        res.write('<h1>content</h1>');
        res.end();
    }
    else{
        res.writeHead(400,{'conten-type':'text/html'});
        res.write('<h1>Page not Found</h1>');
        res.end();
    }
})
server.listen(5000);