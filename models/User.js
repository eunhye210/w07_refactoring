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
  const hashedPassword = await bcrypt.hash(password, 10);

  return await this.create({
    username,
    email,
    password: hashedPassword
  });
};

module.exports = mongoose.model("User", userSchema);
