const User = require("../../models/User");
const Vote = require("../../models/Vote");

module.exports = {
  createVotePage: function (req, res, next) {
    res.render("createVote");
  },
  createVote: async function (req, res, next) {
    const { title, option, dateTime } = req.body;

    const newVote = await Vote.createVote(req.user._id, title, option, dateTime);
    await User.addMyVote(req.user._id, newVote._id);
    
    res.render("message", {
      title: "Success",
      message: "투표가 생성되었습니다!"
    });
  }
};
