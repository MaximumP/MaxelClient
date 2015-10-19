var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    sys = require('sys');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {

    fs.readFile('./public/index.html', function(err, contents){
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(contents);
        res.end();
    });
});

module.exports = router;
