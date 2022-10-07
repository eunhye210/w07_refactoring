module.exports = {
  loginPage: function (req, res, next) {
    res.render("login");
  },
  login: function (req, res, next) {
    res.redirect("/");
  }
};
