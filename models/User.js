const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  myVoteList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vote"
  }]
});

module.exports = mongoose.model("User", userSchema);
