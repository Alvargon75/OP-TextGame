
/*
  Esta es la clase principal de cualquier pelea.

  @package fight
  @author Álvaro G.
  @date 01/11/2015
 */
var Pelea;

Pelea = (function() {

  /*
   Esto crea una instancia para una pelea. Es lo básico para cualquier pelea.
  
   @args
    character - Qué personaje se enfrenta a `enemy`
    enemy - La persona contra la que se enfrenta `character`
    timeSkip - influye solo en los sprites
   */
  function Pelea(character, enemy, timeSkip) {
    this.character = character != null ? character : personajeActual;
    this.enemy = enemy;
    if (timeSkip == null) {
      timeSkip = 0;
    }
    this.valores = {
      turnos: 0,
      modificadores: {
        global: {
          climate: "normal"
        },
        AI: {
          ataque: 1,
          booleans: {
            lowHealth: false,
            euforico: false,
            nakamaMode: false
          }
        },
        player: {
          ataque: 1,
          booleans: {
            lowHealth: false,
            euforico: false,
            nakamaMode: false
          }
        }
      }
    };
    escribir("vs_title", this.character.name + " " + "vs" + " " + this.enemy.name);
    escribir("at1", this.character.ataques[0]);
    escribir("at2", this.character.ataques[1]);
    escribir("at3", this.character.ataques[2]);
    escribir("at4", this.character.ataques[3]);
    escribir("at5", this.character.ataques[4]);
    document.getElementById("UI-ay-name").innerHTML = this.character.longName;
    document.getElementById("UI-en-name").innerHTML = this.enemy.longName;
    document.getElementById("UI-ay-MPin").innerHTML = this.character.MP;
    document.getElementById("UI-ay-MPout").innerHTML = "/" + this.character.maxMP;
    document.getElementById("UI-en-MPin").innerHTML = this.enemy.MP;
    document.getElementById("UI-en-MPout").innerHTML = "/" + this.enemy.maxMP;
    document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite;
    document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite;
  }

  Pelea.prototype.attack = function(AI, number) {
    var dano, temp;
    if (AI === false) {
      temp = Math.random() + this.valores.modificadores.player.ataque;
      dano = Math.floor(this.character.ataquesValores[number] * temp);
      this.character.MP -= this.character.ataquesCoste[number];
      this.enemy.HP -= dano;
    } else if (AI === true) {
      number = null;
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
          break;
        case temp < 50 && this.valores.modificadores.AI.booleans.lowHealth:
          number = 5;
      }
      temp = Math.random() + this.valores.modificadores.AI.ataque;
      dano = Math.floor(this.enemy.ataquesValores[number] * temp);
      this.enemy.MP -= this.enemy.ataquesCoste[number];
      this.character.HP -= dano;
    } else {
      console.error("Atack managed to be null, this should never happen.");
    }
    this.valores.turnos++;
  };

  Pelea.prototype.inicio = function() {
    var buttons, handlers;
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
    handlers = [
      function() {
        this.attack(false, 0);
      }, function() {
        this.attack(false, 1);
      }, function() {
        this.attack(false, 2);
      }, function() {
        this.attack(false, 3);
      }, function() {
        this.attack(false, 4);
      }
    ];
    buttons = [document.getElementById("at1"), document.getElementById("at2"), document.getElementById("at3"), document.getElementById("at4"), document.getElementById("at5")];
    for(i = 0; i < 5; i++){
          buttons[i].addEventListener('click', handlers[i])
        };
  };

  Pelea.prototype.update = function() {
    document.getElementById("UI-ay-MPin").innerHTML = this.character.MP;
    document.getElementById("UI-ay-MPout").innerHTML = "/" + this.character.maxMP;
    document.getElementById("UI-en-MPin").innerHTML = this.enemy.MP;
    document.getElementById("UI-en-MPout").innerHTML = "/" + this.enemy.maxMP;

    /*
     * Se usa para als barras de vida y MP
    percentageAY = @character.maxHP / 100
    percentageEN = @enemy.maxHP / 100
    
    nBarrasVidaAY = Math.round(@character.HP / percentageAY)
    nBarrasVidaEN = Math.round(@enemy.HP / percentageEN)
    console.log(nBarrasVidaEN + " - " + nBarrasVidaAY)
    
    fillBars(nBarrasVidaAY, nBarrasVidaEN)
     */
  };

  Pelea.prototype.stop = function() {
    document.getElementsByTagName("header")[0].style.display = "initial";
    document.getElementById("combatUI").classList.add('combatUI-inactive');
    window.clearInterval(timerID);
    
        for(var i = 0; i < buttonsID.length; i++){
          buttons[i].removeEventListener('click', this.events.handlers[i])
        }
        ;
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

  Pelea.prototype.test = function() {
    return console.log(this);
  };

  return Pelea;

})();
