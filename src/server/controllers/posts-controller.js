const Post = require("../modules/blog-posts/post");
const Author = require("");

//Need to add DB schemas

class BookController {
  static renderPosts(req, res, next) {
    Post.find({}, (err, posts) => {
      Author.find({}, (err, authors) => {
        res.render("posts", { authors, posts });
      });
    });
  }

  static renderPost(req, res, next) {
    const id = req.params.id;
    var query = Post.where({ _id: id });
    query.findOne((err, post) => {
      if (err) return handleError(err);
      if (post) {
        res.render("post", { post });
      }
    });
  }

  //Need to adjust controller below this point here

  static addPost(req, res, next) {
    const title = req.body.title;
    const authorId = req.body.authorId;
    const isbn = req.body.isbn;
    const content = req.body.content;
    const imageUrl = req.body.imageUrl;

    const bookToAdd = new Book({
      title,
      isbn,
      description,
      imageUrl
    });

    Author.findById(authorId, (err, author) => {
      author.books.push(bookToAdd);
      bookToAdd.authors.push(author);

      author.save((err, author) => {
        if (err) return console.error(err);
      });

      bookToAdd.save((error, bookToAdd) => {
        if (error) return console.error(error);
        res.redirect("/books");
      });
    });
  }
}

module.exports = PostController;
