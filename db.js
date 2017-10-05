var mongoose = require('mongoose');
mongoose.connect('mongodb://172.16.0.87:27017/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected");
});