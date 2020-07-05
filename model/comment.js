const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  postid: { type: String },
  postid: {type: String},
  title_sub: { type: String },
  name: { type: String },
  comment: { type: String },
  date: { type: String },
});

module.exports = mongoose.model("comments", commentSchema);
