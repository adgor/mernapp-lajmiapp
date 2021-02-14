const mongoose = require("mongoose");
const schedule = require("node-schedule");

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

// const job = schedule.scheduleJob("* * * * *", function () {
//   deleteAllPosts();
//   console.log("Deleted everything from the DB!");
// });

// Function call
// Deleting All Posts from DB
function deleteAllPosts() {
  FbPost.deleteMany()
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
}

module.exports = FbPost;
