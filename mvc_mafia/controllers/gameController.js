const { Game } = require('../models/Game');

const game = new Game();

function showIndex(req, res) {
    res.render('index', { players: game.players });
}

function addPlayer(req, res) {
    const { name, role } = req.body;
    if (name) {
        game.addPlayer(name, role);
    }
    res.redirect('/');
}

module.exports = { showIndex, addPlayer, game };
