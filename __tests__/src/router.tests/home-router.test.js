const Route = require("../../../src/server/routes/home-router");
const express = require("express");
const request = require("supertest");

const app = require("../../../app");

describe("Home Router/Controller tests", () => {
  test("Should successfully redirect", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(302);
        done();
      });
  });

  test("Should successfully redirect from '/' to '/posts' ", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.req.path).toBe("/");
        expect(response.headers.location).toBe("/posts");
        done();
      });
  });
});
