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
  },
  participants: {
    type: Array
  }
});

module.exports = mongoose.model("Vote", voteSchema);
