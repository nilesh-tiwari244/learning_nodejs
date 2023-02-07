const express = require('express');
const app = express();
let { people } = require('../data.js'); // as we will make modifications in it

// static assets
app.use(express.static('./methods-public-post-html'))
// parse form data and add data to req.body
app.use(express.urlencoded({encoded:false}))
//express.urlencoded id a builtin middleware function in Express,
// it parses incoming requests with urlencoded payloads and is based on parser
// its property extended allow to choose between parsing url encoded data with 
// querystring library (if set false) or with qs library (when set to true)

app.get('/', (req, res) => {
    res.send("home page");
})
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})
app.post('/login',(req,res)=>{
    let {name1}=req.body;
    // in input html tage the name parameter will decide the name of the variable in json
    if (name1){
        return res.status(200).send(`Welcome ${name1}`);
    }
    res.status(401).send("No data is passed")
})
app.listen(5000, () => {
    console.log("Server listeining at local host 5000");
})

// in index html file we can here easily route to /login
// as both are on same server otherwise we would have to name the entire server on which this login is there

// if frontend and backend are not on the same server then full path/domain need to be provided

// also while having html type post request, in the network section an of request header the content type 
// is application/x-www-form-urlencoded which will be different in case of js post request flavour
