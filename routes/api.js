const express = require("express");

const router = express.Router();
const FbPost = require("../models/fbPost");

// Routes
router.get("/", (req, res) => {
  FbPost.find({})
    .then((data) => {
      // console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

module.exports = router;
