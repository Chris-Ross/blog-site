module.exports = {
  renderPosts: (req, res, next) => {
    res.render("posts", {
      posts: {
        5: {
          id: 5,
          title: "Test Title",
          body: "Test content",
          authors: "Test Author",
          imageUrl: "test URL",
          categories: "meme",
          tags: "Test Tag"
        }
      }
    });
  },
  renderPost: (req, res, next) => {
    res.render("post", {
      review: {
        1: {
          id: 1,
          title: "Test Title",
          body: "Test content",
          imageUrl: "test URL"
        }
      }
    });
  },

  addPost: (req, res, next) => {}
};
