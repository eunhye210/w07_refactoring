const Vote = require("../../models/Vote");
const User = require("../../models/User");

module.exports = {
  indexPage: async function (req, res, next) {
    try {
      const votes = await Vote.find({});

      if (req.session.passport) {
        const { user } = req.session.passport;
        const userInfo = await User.findById(user);
  
        res.render("index", {
          username: userInfo.username,
          votes
        });
      } else {
        res.render("index", { votes });
      }
    } catch (err) {
      next(err);
    }
  }
};
