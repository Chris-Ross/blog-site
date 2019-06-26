const categorySchema = require("../category/category-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Category", categorySchema);
