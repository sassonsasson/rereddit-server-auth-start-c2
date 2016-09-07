var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.'mongolab-convex-43069' || 'mongodb://localhost/rereddit');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))

app.use('/', routes);
app.use('/users', users); 

var port = process.env.PORT || '4000';


app.listen(port);
