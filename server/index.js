var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app
    .use(function(req, res, next){
        res.write('This is provided by newpaltz.edu\r\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write('World');
        res.end();
    })
    .get('/goodbey', function (req, res) {
        res.write('New Paltz');
        res.end();
    })
    .listen(8080);