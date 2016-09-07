var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var mongolab = 'mongolab-dimensional-56205'
mongoose.connect(process.env.mongolab || 'mongodb://localhost/rereddit');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))

app.use('/', routes);
app.use('/users', users); 

var port = normalizePort(process.env.PORT || '4000');


app.listen(port);
