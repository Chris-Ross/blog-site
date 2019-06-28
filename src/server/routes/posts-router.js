var express = require("express");
var router = express.Router();

const PostController = require("../controllers/posts-controller");

/* GET Posts. */
router.get("/", PostController.renderPosts);

// GET Post
router.get("/:id", PostController.renderPost);

//Add Post
router.post("/add", PostController.addPost);

module.exports = router;
