var express = require('express');
var app = express();

app.get('/', function (req, rsp) {
    rsp.send('OK');
});

app.listen(3000);
