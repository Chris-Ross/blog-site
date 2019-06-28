const mongoose = require("mongoose");

const Post = require("../modules/blog-posts/post");
const Category = require("../models/category/category");
const Tag = require("../models/tag/tag");
const Author = require("../modules/author/author");

class PostsController {
  static async renderPosts(req, res, next) {
    const posts = await Post.find({});
    const authors = await Author.find({});
    const categories = await Category.find({});
    const tags = await Tag.find({});
    res.render("posts", { posts, authors, categories, tags });
  }

  static async renderPost(req, res, next) {
    const id = req.params.id;
    const post = await Post.where({ _id: id })
      .findOne()
      .populate(["categories", "tags", "authors"])
      .exec();
    res.render("post", { post });
  }

  static addPost(req, res, next) {
    const title = req.body.title;
    const body = req.body.content;
    const categoryId = req.body.category;
    const authorId = req.body.author;
    const tags = req.body.tag;

    const postToAdd = new Post({
      title,
      body
    });

    Tag.find({ _id: tags }, (err, tags) => {
      Author.findById(authorId, (err, author) => {
        postToAdd.authors.push(author);
        author.post.push(postToAdd);
        Category.findById(categoryId, (err, category) => {
          postToAdd.categories.push(category);
          category.posts.push(postToAdd);
          tags.forEach(tag => {
            postToAdd.tags.push(tag);
            tag.posts.push(postToAdd);
            tag.save((err, tag) => {
              if (err) return console.error(err);
            });
          });

          author.save((err, authors) => {
            if (err) return console.error(err);
          });

          category.save((err, category) => {
            if (err) return console.error(err);
          });

          reviewToAdd.save((error, reviewToAdd) => {
            if (error) return console.error(error);
            res.redirect("/posts");
          });
        });
      });
    });
  }
}

module.exports = PostController;
