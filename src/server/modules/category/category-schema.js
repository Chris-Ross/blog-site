const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  category: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});
