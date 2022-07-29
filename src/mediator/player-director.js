const playerDirector = (function () {
  const players = {};
  const operations = {};

  operations.addPlayer = function (player) {};
  operations.removePlayer = function (player) {};
  operations.changeTeam = function (player, newTeam) {};

  const reciveMessage = function (...args) {
    const message = args[0];
    operations[message].apply(this, args);
  };

  return {
    reciveMessage,
  };
})();

class Player {
  constructor(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    this.state = "alive";
  }
  die() {
    this.state = "die";
    playerDirector.reciveMessage("playerDead", this);
  }
  remove() {
    playerDirector.reciveMessage("removePlayer", this);
  }
}
