class HomeController {
  static renderHomePage(req, res, next) {
    res.render("posts");
  }
}

module.exports = HomeController;
