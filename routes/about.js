const express = require("express");

const aboutRouter = express.Router();

aboutRouter.route("/about").get((req, res) => {
  console.log("about me");
  res.render("about");
});

module.exports = aboutRouter;
