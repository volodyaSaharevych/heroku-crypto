var express      = require('express');
var app          = express();
var md5          = require('crypto-js');
var parsBodyPost = require('body-parser');
var cors         = require('cors');

app.listen( process.env.PORT );

app.use( parsBodyPost.json() ); 
app.use( cors() );
app.use( parsBodyPost.urlencoded({ extended: true }) ); 
app.post( '', ( req, res, next ) => {
    let product = req.body.product;
    let secret_key = '33928d837fbb80bf876718623ad70925404f9f76';
    let h = md5.HmacMD5( product, secret_key ).toString();
    res.send( h );
});

