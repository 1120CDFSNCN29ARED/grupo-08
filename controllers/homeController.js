const homeController = {
  showHomeView: (req, res) => {
    res.render("home");
  },
  showFontsView: (req, res) => {
    res.render("fonts");
  },
};

module.exports = homeController;
