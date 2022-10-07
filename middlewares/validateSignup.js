const User = require("../models/User");

exports.validateSignup = async function (req, res, next) {
  const { username, email, password, password2 } = req.body;
  const emailRegex = new RegExp(/^[\w-]+@([\w-]+\.)+[a-z]{2,4}$/);
  const passwordRegex = new RegExp(/^[A-Za-z0-9]*$/);
  const errors = [];

  try {
    if (username.length < 3) {
      errors.push({ message: "Username은 최소 3 글자 이상이어야 합니다." });
    }

    const user = await User.findOne({ email });
    if (user) {
      errors.push({ message: "이미 가입된 Email입니다." });
    }

    if (!emailRegex.test(email)) {
      errors.push({ message: "유효하지 않은 Email 형식입니다." });
    }

    // if (password.length < 8 || !passwordRegex.test(password)) {
    //   errors.push({ message: "Password는 8자 이상이어야 하며, 숫자 및 문자를 표함해야 합니다." });
    // }

    if (password !== password2) {
      errors.push({ message: "입력한 암호가 일치하지 않습니다." });
    }

    if (errors.length > 0) {
      return res.render("signup", {
        username,
        email,
        password,
        errorMsg: errors[0].message
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
