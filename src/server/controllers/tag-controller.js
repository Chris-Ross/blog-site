const mongoose = require("mongoose");

const Tag = require("../modules/tags/tag");

class TagController {
  static renderTags(req, res, next) {
    Tag.find({}, (err, tags) => {
      res.render("tags", { tags });
    });
  }

  static renderTag(req, res, next) {
    const id = req.params.id;
    var query = Tag.where({ _id: id });
    query
      .findOne()
      .populate(["posts"])
      .exec((err, tag) => {
        if (err) return console.error(err);
        if (tag) {
          res.render("tag", { tag });
        }
      });
  }
  static addTag(req, res, next) {
    const name = req.body.name;

    const tagToAdd = new Tag({
      name
    });

    tagToAdd.save((err, tags) => {
      if (err) return console.error(err);
      res.redirect("/tags");
    });
  }
}

module.exports = TagController;
