const mongoose = require("mongoose");

module.exports = () => {
  try {
    const url = process.env.MONGOOSE_URL;
    mongoose.connect(url, { useNewUrlParser: true });
  } catch (err) {
    next(err);
  }
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", console.log.bind(console, "Connected to database.."));
