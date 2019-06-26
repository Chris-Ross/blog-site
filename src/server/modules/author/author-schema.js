const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});
