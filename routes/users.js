var express = require('express');
var router = express.Router();
var generator = require('node-uuid-generator');
var User = require('../model/userModel');
var Admin = require('../model/adminModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    //req.body.itemId = generator.generate();
    var user = new User({
        _id: generator.generate(),
        name: req.body.name,
        username: generator.generate(),
        password: req.body.username,
        created_at: new Date()
    });

    // // call the custom method. this will just add -dude to his name
    // // user will now be Chris-dude
    // chris.dudify(function(err, name) {
    //     if (err) throw err;

    //     console.log('Your new name is ' + name);
    // });

    // call the built-in save method to save to the database
    user.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully!');
        res.json(user);
    });

});

/**
 * admin user crud functionality
 */
router.post('/admin', function(req, res, next) {
    //req.body.itemId = generator.generate();
    var admin = new Admin({
        _id: generator.generate(),
        name: req.body.name,
        username: generator.generate(),
        password: req.body.username,
        created_at: new Date()
    });

    // // call the custom method. this will just add -dude to his name
    // // user will now be Chris-dude
    // chris.dudify(function(err, name) {
    //     if (err) throw err;

    //     console.log('Your new name is ' + name);
    // });

    // call the built-in save method to save to the database
    admin.save(function(err) {
        if (err) throw err;

        console.log('admin saved successfully!');
        res.json(admin);
    });

});

module.exports = router;