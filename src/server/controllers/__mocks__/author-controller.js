module.exports = {
  renderAuthors: (req, res, next) => {
    res.render("authors", {
      authors: {
        5: {
          id: 5,
          name: "Test name"
        }
      }
    });
  },
  renderAuthor: (req, res, next) => {
    res.render("author", {
      author: {
        1: {
          id: 1,
          name: "Test name"
        }
      }
    });
  },

  addAuthor: (req, res, next) => {}
};
