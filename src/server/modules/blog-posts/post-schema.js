const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  imageUrl: { type: String },
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  publishDate: { type: Date, default: new Date() },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }]
});
