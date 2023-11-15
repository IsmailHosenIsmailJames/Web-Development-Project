var express = require("express");
var router = express.Router();

var path = require("path");
router.use("/static", express.static(path.join(__dirname, "public")));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

var x = "/home/ismail/Web-Development-Project/public/";

router.get("/file", (req, res) => {
  res.sendFile(path.join(x + "home/home.html"));
});

module.exports = router;
