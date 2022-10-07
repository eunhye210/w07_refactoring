const passport = require("passport");

exports.validateLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      return res.render("login", { errorMsg: info.message });
    }

    req.login(user, (err) => {
      if (err) {
        next(err);
      }
      next();
    });
  })(req, res, next);
};
