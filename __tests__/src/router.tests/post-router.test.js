const PostController = require("../../../src/Server/controllers/posts-controller");
jest.mock("../../../src/Server/controllers/posts-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Posts router/controller", () => {
  test("Should successfully connect to '/posts' ", done => {
    //Arrange
    request(app)
      .get("/posts")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  
  test("Should render a list of posts for each provided post when route is '/posts' ", done => {
    //Arrange
    request(app)
      .get("/posts")
      .then(response => {
          
        expect(response.text).toBe();
        done();
      });
  });

  test("should successfully connect to '/posts/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/posts/1")
      .then(response => {
        // Assert
        expect(response.statusCode).toBe(200);
        done();
      });
  });

//   test("Should render a single post for each provided id when route is '/posts/1' ", done => {
//     //Arrange
//     request(app)
//       .get("/posts/1")
//       .then(response => {
//         expect(response.text).toBe();
//         done();
//       });
//   });
// });
