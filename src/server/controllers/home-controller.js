class HomeController {
  static renderHomePage(req, res, next) {
    res.redirect("/posts");
  }
}

module.exports = HomeController;
