const express = require("express");

const contactRouter = express.Router();

contactRouter.route("/contact").get((req, res) => {
  res.render("contact");
});

module.exports = contactRouter;
