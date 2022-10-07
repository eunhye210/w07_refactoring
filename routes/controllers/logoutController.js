module.exports = {
  logout: function (req, res, next) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }

      req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
      });
    });
  }
};
