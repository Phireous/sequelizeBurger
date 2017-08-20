var db = require("../models");
var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name:req.body.name,
    devoured: false
  }).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: req.body.devoured,
      where: {id: req.body.id}
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;