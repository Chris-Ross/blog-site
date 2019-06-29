const mongoose = require("mongoose");

const Author = require("../modules/author/author");

class AuthorController {
  static async renderAuthors(req, res, next) {
    const authors = await Author.find({});
    res.render("authors", { authors });
  }

  static async renderAuthor(req, res, next) {
    const id = req.params.id;
    const author = await Author.where({ _id: id })
      .findOne()
      .populate(["posts"])
      .exec();

    res.render("author", { author });
  }

  static addAuthor(req, res, next) {
    const author = req.body.author;

    const authorToAdd = new Author({
      author
    });

    authorToAdd.save((err, authors) => {
      if (err) return console.error(err);
      res.redirect("/authors");
    });
  }
}

module.exports = AuthorController;
