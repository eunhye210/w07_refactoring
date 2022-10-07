const bcrypt = require("bcrypt");
const User = require("../../models/User");

module.exports = {
  signup: function (req, res, next) {
    res.render("signup");
  },
  createUser: async function (req, res, next) {
    try {
      const { username, email, password } = req.body;
      await User.createUser(username, email, password);

      res.redirect("/auth/login");
    } catch (err) {
      next(err);
    }
  }
};
