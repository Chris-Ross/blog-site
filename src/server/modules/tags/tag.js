const tagSchema = require("../tags/tag-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Tag", tagSchema);
