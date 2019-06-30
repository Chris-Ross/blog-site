const express = require("express");
const router = express.Router();

const TagController = require("../controllers/tag-controller");

// Get Tags
router.get("/", TagController.renderTags);

// Get Tag
router.get("/:id", TagController.renderTag);

// Add a Tag
router.post("/add", TagController.addTag);

module.exports = router;
