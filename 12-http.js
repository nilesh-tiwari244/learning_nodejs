const http=require('http');

/*
const server=http.createServer((req,res)=>{ // request, response are objects

    //console.log(req); // this show incoming reques
    // response is what we are sending back
    res.write('Welcome to our homepage');
    res.end(); // this is default response if not found
})

server.listen(3000); // its arbitary
*/

// now after running above we will not exit
// as it is keep on listeing for request
// go to localhost:3000 to see your server
// refresh after every new run as we need to request the server


// url property of req will tell us what end point the client is requesting
//  for homepage common practice is using /

const server2=http.createServer((req,res)=>{ // request response are objects
    if (req.url=== '/'){
        console.log("inside home");
        res.end('Welcome to our homepage')
    }
    else {if (req.url==='/about'){
        console.log("inside about");
        res.end('here is about page')
    }
    else{
        // res.end("nice try");
        res.end(` 
            <h1> OOPS </h1>
            <p> cant find the page </p>
            <a href="/">back home</a>
        `); 
    }}
    // can use html inside too
    // as / represnt home page
})
server2.listen(3000); 
// its arbitary
// localhost:3000 will show welcome
// localhost:3000/about will show here is about
// localhost:3000/anything_else will show html page
