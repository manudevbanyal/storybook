
// importing modules
const express = require('express');
const mongoose =require('mongoose');

//making an instance of express
const app = express();

//setting port 
const port = process.env.PORT || 3000;

//seting routes
app.get('/',(req,res)=>{

    res.send('<h1> HELLLO MR. BANYAL...  </h1>')

})

app.listen(port,()=>{
    console.log(`server started on localhost://${port}`)
})







