const bcrypt = require("bcrypt");

module.exports = async function (inputPassword, userPassword) {
  const result = await bcrypt.compare(inputPassword, userPassword);
  return result;
};
