
// importing modules
const express = require('express');
const mongoose =require('mongoose');
const passport= require('passport');

require('./config/passport')(passport);

//importing local routes

const auth = require('./auth/auth').router;

//making an instance of express
const app = express();

//setting port 
const port = process.env.PORT || 3000;

//using middlewares
app.use('/auth',auth);

//seting routes
app.get('/',(req,res)=>{
    res.send('<h1> HELLLO MR. BANYAL...  </h1>')
});

app.listen(port,()=>{
    console.log(`server started on localhost://${port}`)
})







