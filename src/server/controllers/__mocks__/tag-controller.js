module.exports = {
  renderTags: (req, res, next) => {
    res.render("tags", {
      tags: {
        5: {
          id: 5,
          name: "Test name"
        }
      }
    });
  },
  renderTag: (req, res, next) => {
    res.render("tag", {
      tag: {
        1: {
          id: 1,
          name: "Test name"
        }
      }
    });
  },

  addTag: (req, res, next) => {}
};
