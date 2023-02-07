const express = require('express');
const app = express();

const apipeople=require('./routes/apipeople'); // these routes will contain routes starting under respective names
const apipostman=require('./routes/apipostman');

// parse json (in case of json post request)
app.use(express.json());

// static assets
app.use(express.static('./methods-public-post-js'))

// parse form data and add data to req.body in case of html post request
app.use(express.urlencoded({extended:false}))
//express.urlencoded id a builtin middleware function in Express,
// it parses incoming requests with urlencoded payloads and is based on parser
// its property extended allow to choose between parsing url encoded data with 
// querystring library (if set false) or with qs library (when set to true)

// using router to make the app.js clear
app.use('/api/people',apipeople);
app.use('/api/postman',apipostman);


app.get('/',(req,res)=>{
    res.send('./index.html');
})

app.post('/login',(req,res)=>{
    let {name}=req.body;
    // here the above name will decide the variable name unlike that in html post scene where form input tag was deciding that
    if (!name){
        return res.status(401).json("No data is passed")
    }
    return res.status(200).send(`Welcome ${name}`);
})

app.listen(5000, () => {
    console.log("Server listeining at local host 5000");
})

// in index html file we can here easily route to /login
// as both are on same server otherwise we would have to name the entire server on which this login is there

// if frontend and backend are not on the same server then full path/domain need to be provided

// also while having html type post request, in the network section of request header the content type 
// is application/x-www-form-urlencoded which will be different in case of js post request flavour in that case it will be
 // application/json
