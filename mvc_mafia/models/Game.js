class Player {
    constructor(name, role = 'citizen') {
        this.name = name;
        this.role = role;
        this.alive = true;
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    addPlayer(name, role = 'citizen') {
        this.players.push(new Player(name, role));
    }

    getAlivePlayers() {
        return this.players.filter(p => p.alive);
    }
}

module.exports = { Game, Player };
