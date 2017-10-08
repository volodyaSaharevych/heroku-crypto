var express = require('express')
var router = express.Router;
var md5 = require('./node_modules/crypto-js');

router.post( '/crypto', ( req, res ) => {
    res.send('POST request to the homepage');
});

module.exports = router;