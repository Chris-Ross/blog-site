const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  author: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});
