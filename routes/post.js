const Posts = require("./../model/post");
const comments = require("./../model/comment");
const express = require("express");

const postRouter = express.Router();

//Fectches Single Content
postRouter.route("/posted/:id").get((req, res) => {
  Posts.findById(req.params.id)
    .then((post) => {
      res.render("post", { post });
    })
    .catch((err) => res.send(err));
});

//Saves new post to database
postRouter.route("/savePost").post((req, res) => {
  const post = new Posts(req.body);
  post.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/");
    }
  });
});

//Form for making new Post
postRouter.route("/newPost").get((req, res) => {
  res.render("newPost");
});

module.exports = postRouter;
