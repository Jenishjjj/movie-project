const express = require('express');

const port = 8899;

const app = express();

const path = require('path');

const db = require('./config/mongoose')

const fs = require('fs');

const Movie = require('./model/movie')

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

app.use('/uplods',express.static(path.join(__dirname,'uplods')))

app.use('/',require('./routes/movie'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is runing");
})