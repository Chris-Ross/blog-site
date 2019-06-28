const express = require("express");
const router = express.Router();

const AuthorController = require("../controllers/author-controller");

// Get Authors
router.get("/", AuthorController.renderAuthors);

// Get Author
router.get("/:id", AuthorController.renderAuthor);

// Add an Author
router.post("/add", AuthorController.addAuthor);

module.exports = router;
