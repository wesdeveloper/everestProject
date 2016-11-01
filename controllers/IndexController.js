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

    //Route portfolio/ComunicacaoInterna
    comunicacaoInterna: function (req, res) {
      res.render('port_ColmunicacaoInterna');
    },
  };
  return indexController;
};
