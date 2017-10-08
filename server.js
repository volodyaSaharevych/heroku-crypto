const express = require('express');
const app = express();
const md5 = require('./node_modules/crypto-js');
const parsBodyPost = require('body-parser');
// app.listen( process.env.PORT || 8080 );
app.use( parsBodyPost.json() ); 
app.use( parsBodyPost.urlencoded({ extended: true }) ); 

app.post( '/crypto/', ( req, res ) => {
    let product = req.body.product;
    let h = md5.HmacMD5( product, '33928d837fbb80bf876718623ad70925404f9f76').toString();
    res.send( h );
});

