module.exports = function (app) {
  var indexController = app.controllers.IndexController;
  app.get('/', indexController.index);
  app.get('/portfolio', indexController.portfolio);
};
