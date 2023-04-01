const express = require("express");
const router = express.Router();

const {
  createTweet,
  AllTweets,
  deleteTweet,
  deleteAll,
  updateTweet,
} = require("../controllers/tweethandlers");

router.get("/", AllTweets);

router.post("/", createTweet);
router.delete("/:id", deleteTweet);
router.delete("/", deleteAll);
router.patch("/:id", updateTweet);

module.exports = router;
