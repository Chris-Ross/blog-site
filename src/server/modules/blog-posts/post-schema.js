const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  title: String,
  body: String,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }]
});
