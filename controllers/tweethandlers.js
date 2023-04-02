const { default: mongoose } = require("mongoose");
const tweets = require("../modals/tweetModal");

// getting all tweets

const AllTweets = async (req, res) => {
  try {
    const posts = await tweets.find({}).sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};

// creating new tweets

const createTweet = async (req, res) => {
  const { name, tweet, likes, dislikes } = req.body;
  console.log({ name, tweet, likes, dislikes });
  try {
    console.log("started");
    const createdPost = await tweets.create({ name, tweet, likes, dislikes });
    const posts = await tweets.find({}).sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "failed to get",
    });
  }
};

// delete tweet

const deleteTweet = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      console.log("started");
      const deletePost = await tweets.deleteOne({ _id: id });
      const posts = await tweets.find({}).sort({ createdAt: -1 });
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json({
        msg: "error happened",
      });
    }
  } else {
    return res.status(404).json({ msg: "tweet not found" });
  }
};
//  delete all the tweets
const deleteAll = async (req, res) => {
  try {
    const deletePost = await tweets.deleteMany();
    return res.status(200).json(deletePost);
  } catch (e) {
    res.json({
      msg: "error happened",
    });
  }
};

// updating tweet

const updateTweet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("not found");
  }
  try {
    const updatedTweet = await tweets.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    return res.status(200).json(updateTweet);
  } catch (e) {
    res.status(400).json({ msg: "update failed" });
  }
};

module.exports = {
  createTweet,
  AllTweets,
  deleteTweet,
  deleteAll,
  updateTweet,
};
