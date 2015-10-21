var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http');

var router = express.Router();

var post_options =  function(path){
    return {
        host: '192.168.0.5',
        port: '8585',
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
};

/* GET home page. */
router.get('/', function(req, res) {

    fs.readFile('./public/index.html', function(err, contents){
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(contents);
        res.end();
    });
});

/* POST users listing. */
router.post('/account/login', function(req, res) {
    console.log(req.body);
    var restReq = http.request(post_options('/maxel/account/login'),
        function(restRes){
            restRes.on('data', function(data){
                console.log(data);
                res.writeHead(200, {'ContenType': 'application/json'});
                res.write(data);
                res.end();
        });
    });

    restReq.write(JSON.stringify(req.body));
    restReq.end();
});

module.exports = router;
