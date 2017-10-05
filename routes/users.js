var express = require('express');
var router = express.Router();
var generator = require('node-uuid-generator');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    req.body.itemId = generator.generate();
    res.json(req.body);
});

module.exports = router;