module.exports = function (app) {
    var indexController = {
        //Route index
        index: function (req, res) {
            res.render('index');
        },

        AntesDepois: function (req, res) {
            res.render('antesDepois');
        },

        empresa: function (req, res) {
            res.render('empresa');
        },

        orcamento: function (req, res) {
            res.render('orcamento');
        },

        ComunicacaoInterna: function (req, res) {
            res.render('port_ComunicacaoInterna');
        },

        ComunicacaoExterna: function (req, res) {
            res.render('port_ComunicacaoExterna');
        },

        Envelopamento: function (req, res) {
            res.render('port_Envelopamento');
        },

        Fachada: function (req, res) {
            res.render('port_Fachada');
        },

        Placas: function (req, res) {
            res.render('port_Placas');
        },

        LetraCaixa: function (req, res) {
            res.render('port_LetraCaixa');
        },
    };
    return indexController;
};
