const authController = {
  showRegisterView: (req, res) => {
    res.render("users/register");
  },
  showLoginView: (req, res) => {
    res.render("users/login");
  },
};

module.exports = authController;
