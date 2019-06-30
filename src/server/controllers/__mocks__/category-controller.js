module.exports = {
  renderCategories: (req, res, next) => {
    res.render("categories", {
      categories: {
        5: {
          id: 5,
          category: "Test category"
        }
      }
    });
  },
  renderCategory: (req, res, next) => {
    res.render("category", {
      category: {
        1: {
          id: 1,
          category: "Test category"
        }
      }
    });
  },

  addCategory: (req, res, next) => {}
};
