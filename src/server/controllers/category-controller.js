const mongoose = require("mongoose");

const Category = require("../modules/category/category");

class CategoryController {
  static async renderCategories(req, res, next) {
    const categories = await Category.find({});
    res.render("categories", { categories });
  }

  static async renderCategory(req, res, next) {
    const id = req.params.id;
    const category = await Category.where({ _id: id })
      .findOne()
      .populate(["posts"])
      .exec();

    res.render("category", { category });
  }

  static addCategory(req, res, next) {
    const category = req.body.category;

    const categoryToAdd = new Category({
      category
    });

    categoryToAdd.save((err, categories) => {
      if (err) return console.error(err);
      res.redirect("/categories");
    });
  }
}

module.exports = CategoryController;
