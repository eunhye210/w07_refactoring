const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    ref: "Vote",
    default: []
  }]
});

userSchema.statics.createUser = async function (username, email, password) {
  return await this.create({
    username,
    email,
    password
  });
};

userSchema.statics.addMyVote = async function (_id, newVote) {
  return await this.updateOne(
    { _id },
    { $push: { "myVoteList": newVote } }
  );
};

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", userSchema);
