const CategoryController = require("../../../src/server/controllers/category-controller");
jest.mock("../../../src/server/controllers/category-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Categories router/controller", () => {
  test("Should successfully connect to '/categories' ", done => {
    //Arrange
    request(app)
      .get("/categories")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Should render a list of categories for each provided review when route is '/categories' ", done => {
    //Arrange
    request(app)
      .get("/categories")
      .then(response => {
        expect(response.text).toBe(
          '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n  <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n  <title>Blog</title>\r\n</head>\r\n\r\n<body>\r\n  <header>\r\n    <nav>\r\n      <ul>\r\n        <li><a href="/posts">Blog</a></li>\r\n        <li><a href="/categories">Categories</a></li>\r\n        <li><a href="/tags">Tags</a></li>\r\n        <li><a href="/authors">Authors</a></li>\r\n      </ul>\r\n    </nav>\r\n  </header>\r\n  <main>\r\n    <form action="/categories/add" method="POST">\r\n        <label><input type="text" name="category" placeholder="Category"></label>\r\n        <button> New Category </button>\r\n    </form>\r\n    <ul>\r\n        <li>\r\n            <a href="/categories/5">\r\n                <div>Test category</div>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</main>\r\n  <footer>\r\n    <small class="layout__footer__copy">&copy; 2019 Blog</small>\r\n    <a href="/">Back To Home</a>\r\n  </footer>\r\n</body>\r\n\r\n</html>'
        );
        done();
      });
  });

  test("should successfully connect to '/categories/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/categories/1")
      .then(response => {
        // Assert

        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a single category", done => {
    // Arrange
    request(app)
      // Act
      .get("/categories/1")
      .then(response => {
        // console.log(response);
        // Assert
        expect(response.text).toBe(
          '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n  <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n  <title>Blog</title>\r\n</head>\r\n\r\n<body>\r\n  <header>\r\n    <nav>\r\n      <ul>\r\n        <li><a href="/posts">Blog</a></li>\r\n        <li><a href="/categories">Categories</a></li>\r\n        <li><a href="/tags">Tags</a></li>\r\n        <li><a href="/authors">Authors</a></li>\r\n      </ul>\r\n    </nav>\r\n  </header>\r\n  <main>\r\n    <section>\r\n        <h1></h1>\r\n        <ul>\r\n        </ul>\r\n    </section>\r\n</main>\r\n  <footer>\r\n    <small class="layout__footer__copy">&copy; 2019 Blog</small>\r\n    <a href="/">Back To Home</a>\r\n  </footer>\r\n</body>\r\n\r\n</html>'
        );
        done();
      });
  });
});
