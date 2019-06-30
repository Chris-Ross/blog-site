const postSchema = require("../blog-posts/post-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Post", postSchema);
