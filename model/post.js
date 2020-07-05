const mongoose = require("mongoose");


const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, unique: true },
  title_sub: { type: String },
  author: String,
  content: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
