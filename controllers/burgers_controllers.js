var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function (req, res) {
  var createdBurger = false;
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, createdBurger
  ], function () {
    console.log("You created a burger yah");
    res.redirect("/");
  });
});

router.put("api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true,
  }, condition, function() {
    res.redirect("/");
  });
});
module.exports = router;
