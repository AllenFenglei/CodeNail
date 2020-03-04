var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));


/*var dbUri = "mongodb://lym:lym@localhost/test";
mongoose.connect(dbUri);
var db = mongoose.connection; // Upon connection failure 
db.on('error', console.error.bind(console, 'Connection error:'));
// Upon opening the database successfully 
db.once('open', function () { console.log("Connection is open...");
});*/

db = require('./connection.js');
var schema = require('./schema.js')

var User = schema.User;
var Post = schema.Post
var Comment = schema.Comment;

var hash = bcrypt.hashSync("123", 10);
var user = new User({name:"hahaha", password:hash});

User.create(user, function(err, result) { 
    if (err) 
        console.log('create user error');
    else {
        console.log('Create user successfully!');
    }
}); 


