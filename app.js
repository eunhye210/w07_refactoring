const express = require('express');
const path = require('path');
const session = require("express-session");
const passport = require("passport");
const createError = require("http-errors");

const indexRouter = require('./routes/index');
const authRouter = require("./routes/auth");
const votingRouter = require("./routes/votings");

const connectMongoDB = require("./config/connectMongoDB");
const passportConfig = require("./config/passportConfig");
connectMongoDB();
passportConfig();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use("/auth", authRouter);
app.use("/votings", votingRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
