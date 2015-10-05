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
    document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite;
    document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite;
  }

  Pelea.prototype.inicio = function() {
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
  };

  Pelea.prototype.atack = function(AI, number) {
    var dano, temp;
    if (AI === false) {
      temp = Math.random() + 1;
      dano = Math.floor(this.character.ataquesValores[number] * temp);
      this.character.MP -= this.character.ataquesCoste[number];
      this.enemy.HP -= dano;
    } else if (AI === true) {
      number = void 0;
      temp = Math.random() * 100;
      switch (temp) {
        case temp < 35:
          number = 1;
          break;
        case temp < 60:
          number = 2;
          break;
        case temp < 75:
          number = 3;
          break;
        case temp < 90:
          number = 4;
          break;
        case temp < 100:
          number = 5;
      }
      temp = Math.random() + 1;
      dano = Math.floor(this.enemy.ataquesValores[number] * temp);
      this.enemy.MP -= this.enemy.ataquesCoste[number];
      this.character.HP -= dano;
    } else {
      console.error("Atack managed to be null, this should never happen.");
    }
  };

  Pelea.prototype.stop = function() {
    document.getElementsByTagName("header")[0].style.display = "initial";
    document.getElementById("combatUI").classList.add('combatUI-inactive');
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
      delete this;
    }
  };

  return Pelea;

})();

Save = (function() {
  function Save() {}

  return Save;

})();
