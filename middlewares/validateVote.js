const passport = require("passport");

exports.validateVote = (req, res, next) => {
  const { title, option, dateTime } = req.body;
  const errors = [];

  if (!title) {
    errors.push({ message: "title은 필수 항목입니다." });
  }

  if (typeof option !== "object") {
    errors.push({ message: "최소한 2개 이상의 선택 항목이 필요합니다." });
  }

  const now = Date.now();
  if (dateTime === "" || new Date(dateTime) < now) {
    errors.push({ message: "만료일자 및 시간은 현재 이후여야 합니다." });
  }

  if (errors.length > 0) {
    return res.render("createVote", {
      errorMsg: errors[0].message
    });
  }
  
  next();
};
