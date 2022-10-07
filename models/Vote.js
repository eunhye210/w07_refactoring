const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String
  },
  options: [{
    name: {
      type: String
    },
    voteNum: {
      type: Number,
      default: 0
    }
  }],
  expiration: {
    type: Date,
  }
});

voteSchema.statics.createVote = async function (author, title, option, dateTime) {
  const options = option.map((item) => {
    return {
      name: item,
      voteNum: 0
    };
  });

  return await this.create({
    author,
    title,
    options,
    expiration: dateTime

  });
};

module.exports = mongoose.model("Vote", voteSchema);
