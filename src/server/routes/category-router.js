const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category-controller");
// Get Posts
router.get("/", CategoryController.renderCategories);

// Get Post
router.get("/:id", CategoryController.renderCategory);

// Add a Category
router.post("/add", CategoryController.addCategory);

module.exports = router;
