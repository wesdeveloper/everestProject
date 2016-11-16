module.exports = function (app) {
  var indexController = app.controllers.IndexController;
  app.get('/',                      indexController.index);
  app.get('/cases',                 indexController.cases);
  //app.get('/portfolio',             indexController.portfolio);
  app.get('/comunicacao-interna',   indexController.ComunicacaoInterna);
  app.get('/comunicacao-externa',   indexController.ComunicacaoExterna);
  app.get('/envelopamento',         indexController.Envelopamento);
  app.get('/fachada',               indexController.Fachada);
  app.get('/letra-caixa',           indexController.LetraCaixa);
  app.get('/placas',                indexController.Placas);
};
