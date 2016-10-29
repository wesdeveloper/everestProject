module.exports =  function (app) {
  var indexController = {
    //Route index
    index: function (req, res) {
      res.render('index');
    },

    //Route portfolio
    portfolio: function (req, res) {
      res.render('portfolio');
    },
  };
  return indexController;
};
