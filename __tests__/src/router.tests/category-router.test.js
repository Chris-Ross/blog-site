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
        expect(response.text).toBe();
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
        console.log(response);
        // Assert
        expect(response.text).toBe();
        done();
      });
  });
});
