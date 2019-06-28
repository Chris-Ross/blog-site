var express = require("express");
var router = express.Router();

const HomeController = require("../controllers/home-controller");

/* GET home page. */
router.get("/", HomeController.renderHomePage);

module.exports = router;
