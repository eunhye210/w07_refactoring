const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/User");
const validPassord = require("../utils/validPassword");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(new LocalStrategy({
    usernameField: "email"
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: "No account" });
      }

      const isValid = await validPassord(password, user.password);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (err) {
      done(err);
    }
  }));
};
