var express = require('express');
var app = express();
var md5 = require('./node_modules/crypto-js');
var parsBodyPost = require('body-parser');
var rout = express.Router;
var cors = require('cors');
var corsOptions = {
    origin  : 'http://freeman.org.ua/',
    methods : ['POST'],
    optionsSuccessStatus : 200 
};

app.listen( process.env.PORT || 8080 );

app.use( function ( req, res, next ) {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Credentials', true );
    res.header( 'Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS' );
    res.header( 'Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json' );
    next();
});

app.use( parsBodyPost.json() ); 
app.use( parsBodyPost.urlencoded({ extended: true }) ); 

app.post( '/crypto/', cors( corsOptions ), ( req, res, next ) => {
    let product = req.body.product;
    let h = md5.HmacMD5( product, '33928d837fbb80bf876718623ad70925404f9f76').toString();
    res.send( h );
});

