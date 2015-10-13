var express = require('express');
var app = express();

app.use(express.static('public'));

var server = require('http').Server(app);

server.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.sendfile('/index.html');
});