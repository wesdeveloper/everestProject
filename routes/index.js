module.exports = function (app) {
    var indexController = app.controllers.IndexController;
    app.get('/',                    indexController.index);
    app.get('/empresa',             indexController.empresa);
    app.get('/orcamento',           indexController.orcamento);
    app.get('/antes-depois',        indexController.AntesDepois);
    app.get('/comunicacao-interna', indexController.ComunicacaoInterna);
    app.get('/comunicacao-externa', indexController.ComunicacaoExterna);
    app.get('/envelopamento',       indexController.Envelopamento);
    app.get('/fachada',             indexController.Fachada);
    app.get('/letra-caixa',         indexController.LetraCaixa);
    app.get('/placas',              indexController.Placas);
};
