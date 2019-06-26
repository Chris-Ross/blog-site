const authorSchema = require("../author/author-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Author", authorSchema);
