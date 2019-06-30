const TagController = require("../../../src/server/controllers/tag-controller");
jest.mock("../../../src/server/controllers/category-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Tags router/controller", () => {
  test("Should successfully connect to '/tags' ", done => {
    //Arrange
    request(app)
      .get("/tags")
      .then(response => {
        // console.log(response);
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Should render a list of tags for each provided post when route is '/tags' ", done => {
    //Arrange
    request(app)
      .get("/tags")
      .then(response => {
        expect(response.text).toBe('\n<html lang="en">\r' +
        '\n\r' +
        '\n<head>\r' +
        '\n  <meta charset="UTF-8">\r' +
        '\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r' +
        '\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r' +
        `\n  <link rel='stylesheet' type="text/css" href="/stylesheets/style.css" ` +
        'media="all" />\r' +
        '\n  <title>Blog</title>\r' +
        '\n</head>\r' +
        '\n\r' +
        '\n<body>\r' +
        '\n  <header>\r' +
        '\n    <nav>\r' +
        '\n      <ul>\r' +
        '\n        <li><a href="/posts">Blog</a></li>\r' +
        '\n        <li><a href="/categories">Categories</a></li>\r' +
        '\n        <li><a href="/tags">Tags</a></li>\r' +
        '\n        <li><a href="/authors">Authors</a></li>\r' +
        '\n      </ul>\r' +
        '\n    </nav>\r' +
        '\n  </header>\r' +
        '\n  <main>\r' +
        '\n    <form action="/tags/add" method="POST">\r' +
        '\n        <label><input type="text" name="tag" placeholder="Tags"></label>\r' +
        '\n            <button> New Tag </button>\r' +
        '\n    </form>\r' +
        '\n    <ul>\r' +
        '\n        <li>\r' +
        '\n            <a href="/tags/5d17c31561e9d52990719360"><div>test</div></a>\r' +
        '\n        </li>\r' +
        '\n        <li>\r' +
        '\n            <a ' +
        'href="/tags/5d17c31761e9d52990719361"><div>Hello</div></a>\r' +
        '\n        </li>\r' +
        '\n    </ul>\r' +
        '\n</main>\r' +
        '\n  <footer>\r' +
        '\n    <small class="layout__footer__copy">&copy; 2019 Blog</small>\r' +
        '\n    <a href="/">Back To Home</a>\r' +
        '\n  </footer>\r' +
        '\n</body>\r' +
        '\n\r' +
        '\n</html>');
        done();
      });
  });

  test("should successfully connect to '/tags/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/tags/1")
      .then(response => {
        // Assert

        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a single tag", done => {
    // Arrange
    request(app)
      // Act
      .get("/tags/1")
      .then(response => {
        // Assert
        expect(response.text).toBe('\n<html lang="en">\r' +
        '\n\r' +
        '\n<head>\r' +
        '\n  <meta charset="UTF-8">\r' +
        '\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r' +
        '\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r' +
        `\n  <link rel='stylesheet' type="text/css" href="/stylesheets/style.css" ` +
        'media="all" />\r' +
        '\n  <title>Blog</title>\r' +
        '\n</head>\r' +
        '\n\r' +
        '\n<body>\r' +
        '\n  <header>\r' +
        '\n    <nav>\r' +
        '\n      <ul>\r' +
        '\n        <li><a href="/posts">Blog</a></li>\r' +
        '\n        <li><a href="/categories">Categories</a></li>\r' +
        '\n        <li><a href="/tags">Tags</a></li>\r' +
        '\n        <li><a href="/authors">Authors</a></li>\r' +
        '\n      </ul>\r' +
        '\n    </nav>\r' +
        '\n  </header>\r' +
        '\n  <main>\r' +
        '\n    <form action="/tags/add" method="POST">\r' +
        '\n        <label><input type="text" name="tag" placeholder="Tags"></label>\r' +
        '\n            <button> New Tag </button>\r' +
        '\n    </form>\r' +
        '\n    <ul>\r' +
        '\n        <li>\r' +
        '\n            <a href="/tags/5d17c31561e9d52990719360"><div>test</div></a>\r' +
        '\n        </li>\r' +
        '\n        <li>\r' +
        '\n            <a ' +
        'href="/tags/5d17c31761e9d52990719361"><div>Hello</div></a>\r' +
        '\n        </li>\r' +
        '\n    </ul>\r' +
        '\n</main>\r' +
        '\n  <footer>\r' +
        '\n    <small class="layout__footer__copy">&copy; 2019 Blog</small>\r' +
        '\n    <a href="/">Back To Home</a>\r' +
        '\n  </footer>\r' +
        '\n</body>\r' +
        '\n\r' +
        '\n</html>');
        done();
      });
  });
});
