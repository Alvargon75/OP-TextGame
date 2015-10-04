var Pelea, Save;

Pelea = (function() {
  function Pelea(character, enemy, timeSkip) {
    this.character = character != null ? character : personajeActual;
    this.enemy = enemy;
    if (timeSkip == null) {
      timeSkip = 0;
    }
    this.valores = {
      turnos: 0
    };
    escribir("vs_title", personajeActual.name + " " + "vs" + " " + this.enemy.name);
    escribir("at1", this.character.ataques[0]);
    escribir("at2", this.character.ataques[1]);
    escribir("at3", this.character.ataques[2]);
    escribir("at4", this.character.ataques[3]);
    escribir("at5", this.character.ataques[4]);
    document.getElementById("UI-ay-name").innerHTML = this.character.longName;
    document.getElementById("UI-en-name").innerHTML = this.enemy.longName;
    combatHUD();
    document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite;
    document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite;
  }

  Pelea.prototype.inicio = function() {
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
  };

  Pelea.prototype.selfDestruct = function() {
    var deletable, error;
    deletable = true;
    try {
      delete this;
    } catch (_error) {
      error = _error;
      console.error("The fight cannot be deleted.");
    }
    if (deletable === true) {
      return delete this;
    }
  };

  return Pelea;

})();

Save = (function() {
  function Save() {}

  return Save;

})();
