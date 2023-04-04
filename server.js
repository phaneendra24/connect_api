require("dotenv").config();
const express = require("express");
const app = express();
const tweet = require("./routes/tweet");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/tweets", tweet);
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB connected and listening at port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("you got an error", error);
  });
