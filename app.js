var express = require('express');
var app = express();

app.get('/', function (req, rsp) {
    rsp.send('OK');
});

app.get('/cities', function (req, rsp) {
    rsp.send('OK');
});

module.exports = app;
