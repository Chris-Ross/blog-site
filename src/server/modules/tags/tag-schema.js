const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  tag: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});
