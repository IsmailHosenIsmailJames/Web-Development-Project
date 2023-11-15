var express = require("express");
var router = express.Router();
var path = require("path");
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../public/home/home.html"));
});

router.post("/", (req, res) => {
  res.send("Got a POST request");
});

router.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

router.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

// const data = fs.readFileSync("post/postData.json");
// console.log(JSON.parse(data));

// console.log("kjhks");

module.exports = router;
