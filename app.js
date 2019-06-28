var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var homeRouter = require("./src/server/routes/home-router");
var postsRouter = require("./src/server/routes/posts-router");
var categoryRouter = require("./src/server/routes/category-router");
var tagRouter = require("./src/server/routes/tag-router");
var authorRouter = require("./src/server/routes/author-router");

var app = express();

require("./src/server/modules/db");

// view engine setup
app.set("views", path.join(__dirname, "./src/server/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

//Routes
app.use("/", homeRouter);
app.use("/posts", postsRouter);
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);
app.use("/authors", authorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
