const http=require('http');
/*
const server=http.createServer((req,res)=>{ // request response are objects

    //console.log(req);
    res.write('Welcome 4 to our homepage');
    res.end("wrong info"); // this is default response if not found
})


server.listen(5000); // its arbitary

// now after running above we will not exit
// as it is keep on listeing for request
// go to localhost:5000 to see your server
// refresh after every new run

*/

// url property of req will tell us what end point the client is requesting
//  for homepage common practice is using /

const server2=http.createServer((req,res)=>{ // request response are objects
     if (req.url=== '/'){
        console.log("inside home");
        res.end('Woahe to our homepage')
    }
    if (req.url==='/about'){
        console.log("inside about");
        res.end('here is short')
    }
    else{
        res.end("nice try");
    }
 // res.end("trying huh");
    /*
    res.end(` 
    <h1> OOPS </h1>
    <p> cant find the page </p>
    <a href="/">back home</a>
    `); // can use html inside too
    // as / represnt home page
    */
})
server2.listen(5000); // its arbitary
// localhost:5000 will show welcome
// localhost:5000/about will show here is short

