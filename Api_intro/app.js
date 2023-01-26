const express = require('express');
const app = express();
//const product=[{name:'nilesh',id:1,age:26},{name:'vikash',id:2,age:28}]; // this can be brought from some module as well
//const product =require(`C:\\Users\\niles\\Documents\\node js\\Freecodecamp\\learning_nodejs\\Api_intro\\data.js`);
const product = require(`.\\data.js`);
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href ="/api">Products</a><br><br><a href="/1">1</a> <h1>    </h1><a href="/2">2</a>')
  //  res.json(product);  // converts parameter (object,string,array) to json string type
})
app.get('/api/id/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let newProducts = [...product];
  newProducts = newProducts.filter((products) => {
    return products.id == Number(id);
  })
  if (newProducts.length<1){
    return res.status(200).send("cannot find such data");
  }
  res.json(newProducts);
})
app.get('/api/name/:st', (req, res) => {
  console.log(req.params);
  const { st } = req.params;
  let newProducts = [...product];
  newProducts = newProducts.filter((products) => {
    return products.name == st;
  })
  if (newProducts.length<1){
    return res.status(200).send("cannot find such data");
  }
  res.json(newProducts);
})
app.get('/api', (req, res) => {
  // res.json(product)// we can send complete / part of product also
  const newProducts = product.map((product) => {
    const { id, age, name } = product;
    return { id, age, name }
  })
  res.json(newProducts);
});
app.get('/api/v1/query', (req, res) => {
  console.log(req.query) // localhost:5000/api/v1/query?search&limit=2
  // the above hit will give a object in console with search and limit as variables 
  const { search, limit } = req.query;
  let sortedproducts = [...product]; // as we will change its value
  if (search) {
    sortedproducts = sortedproducts.filter((products) => { // can do this as we used let
      return products.name.startsWith(search)
    })
  }
  if (limit) {
    sortedproducts = sortedproducts.slice(0, Number(limit));
  }
  if (sortedproducts.length < 1) {
    return res.status(200).json({ success: true, data: [] }); // here return is required or else error
  }
  res.status(200).json(sortedproducts)
})

app.listen(5000, () => {
  console.log('server is listening')
})