const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tweet: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    dislikes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tweets", tweetSchema);
