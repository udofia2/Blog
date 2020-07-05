const express = require("express");
const Post = require("./../model/post");

const homePage = express.Router();

//Render all pages for POSTMAN
homePage.route("/all").get((req, res) => {
  const posts = Post.find({})
    .then((post) => {
      res.send({ count: post.length, post });
    })
    .catch((err) => res.send(err));
});

//Render single post for POSTMAN
homePage.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.send(post))
    .catch((err) => res.send(err));
});

//Render all pages for BROWSER
homePage.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ date: "desc" });
    res.render("home", { posts, title: "Nice Blog" });
  } catch (err) {
    res.send(err);
  }
});

//Delete single Post
homePage.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id).then((err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

//Edit post
homePage.route("/edit/:id").patch(async (req, res) => {
  const update = await Post.findByIdAndUpdate(req.params.id, req.body)
  update.save((err, post) => {
    console.log(post)
  })
});

module.exports = homePage;
