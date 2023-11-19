var express = require("express");
var router = express.Router();
var path = require("path");
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/home/home.html"));
});

router.get("/home", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/home/home.html"));
});
router.get("/computer", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/cst/pages/cst.html"));
});
router.get("/cst", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/cst/pages/cst.html"));
});
router.get("/telecom", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/telecom/pages/telecom.html"));
});
router.get("/about", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/tpi/pages/about.html"));
});
router.get("/students", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/tpi/pages/students.html"));
});
router.get("/teachers", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/tpi/pages/teachersInfo.html"));
});
router.get("/mechanical", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/mechanical/pages/mechanical.html"));
});
router.get("/electronic", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/electronic/pages/electronics.html"));
});
router.get("/electrical", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/electrical/pages/electrical.html"));
});
router.get("/developer", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/developer/developer.html"));
});
router.get("/constraction", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/constraction/pages/constraction.html"));
});
router.get("/civil", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/civil/pages/civil.html"));
});

// const data = fs.readFileSync("post/postData.json");
// console.log(JSON.parse(data));

// console.log("kjhks");

module.exports = router;
