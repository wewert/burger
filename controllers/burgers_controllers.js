var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// router.get("/", function(req, res) {
//   console.log("HOLY GUACAMOLE");
//
//   res.send("Hit");
// })

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.selectAll(function(req, res) {
    var hbsObject = {burgers: data};
    res.render('index', hbsObject);
  });
});

router.post('/burgers/add', function (req, res) {
  burger.insertOne('burger_name', req.body.burger_name, function() {
    res.redirect('/burgers');
  });
});

router.put('/burgers/devour/:id', function(req, res) {
  var condition = 'id = ' + req.param.id;
  burger.updateOne({devoured: req.body.devoured, function() {
    res.redirect('/burgers');
    }
  });
});

module.exports = router;
