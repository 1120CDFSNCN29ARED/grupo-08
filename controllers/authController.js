const authController = {
  showRegisterView: (req, res) => {
    res.render("register");
  },
  showLoginView: (req, res) => {
    res.render("login");
  },
};

module.exports = authController;
