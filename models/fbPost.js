const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

FbPostsSchema = new Schema({
  time: String,
  comment: String,
  like: String,
  link: String,
  pname: String,
  // stime: { type: Date, default: Date.now },
  title: String,
});

// Model & collection name /db name
const FbPost = mongoose.model("test", FbPostsSchema, "test");

module.exports = FbPost;
