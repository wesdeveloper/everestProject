module.exports = function (app) {
  var indexController = app.controllers.IndexController;
  app.get('/', indexController.index);
  app.get('/cases',                       indexController.cases);
  app.get('/portfolio',                       indexController.portfolio);
  app.get('/portfolio/comunicacao-interna',   indexController.ComunicacaoInterna);
  app.get('/portfolio/comunicacao-externa',   indexController.ComunicacaoExterna);
  app.get('/portfolio/envelopamento',         indexController.Envelopamento);
  app.get('/portfolio/fachada',               indexController.Fachada);
  app.get('/portfolio/letra-caixa',           indexController.LetraCaixa);
  app.get('/portfolio/placas',                indexController.Placas);
};
