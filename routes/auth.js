const express = require('express');
const router = express.Router();

const { signup, createUser } = require("./controllers/signupController");
const { loginPage, login } = require("./controllers/loginController");
const { validateLogin } = require("../middlewares/validateLogin");
const { validateSignup } = require('../middlewares/validateSignup');
const { logout } = require("./controllers/logoutController");

router.route("/signup")
  .get(signup)
  .post(validateSignup, createUser);

router.route("/login")
  .get(loginPage)
  .post(validateLogin, login);

router.route("/logout")
  .post(logout);

module.exports = router;
