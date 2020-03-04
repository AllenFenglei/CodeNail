var mongoose = require('mongoose');

var dbUri = "mongodb://localhost/code_nail";
mongoose.connect(dbUri);
var db = mongoose.connection; // Upon connection failure 
db.on('error', console.error.bind(console, 'Connection error:'));
// Upon opening the database successfully 
db.once('open', function () { console.log("Connection is open...");
});


module.exports = db;