const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// Connect to mongDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  //   dbName: "test",
  useUnifiedTopology: true,
});

// chech if connected to mdb
mongoose.connection.on("connected", () => {
  console.log("Mongoose is conected !!!  👍👍👍");
});

// Data parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.static("client/build"));

// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
