
/*
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
 */
var Character, Marine, Mugiwara, Pelea,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Pelea = (function() {
  function Pelea(enemy1) {
    this.enemy = enemy1;
    this.valores = {
      turnos: 0
    };
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
    escribir("vs_title", personajeActual.name + " " + "vs" + " " + enemy.name);
    escribir("at1", personajeActual.ataques[0]);
    escribir("at2", personajeActual.ataques[1]);
    escribir("at3", personajeActual.ataques[2]);
    escribir("at4", personajeActual.ataques[3]);
    escribir("at5", personajeActual.ataques[4]);
    combatHUD();
    document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[0].sprite;
    document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[0].sprite;
  }

  Pelea.prototype.generate = function() {};

  return Pelea;

})();


/*
██████╗ ███████╗██████╗ ███████╗ ██████╗ ███╗   ██╗ █████╗      ██╗███████╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗████╗  ██║██╔══██╗     ██║██╔════╝██╔════╝
██████╔╝█████╗  ██████╔╝███████╗██║   ██║██╔██╗ ██║███████║     ██║█████╗  ███████╗
██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██║   ██║██║╚██╗██║██╔══██║██   ██║██╔══╝  ╚════██║
██║     ███████╗██║  ██║███████║╚██████╔╝██║ ╚████║██║  ██║╚█████╔╝███████╗███████║
╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚════╝ ╚══════╝╚══════╝
 */

Character = (function() {
  function Character(object, ally) {
    this.object = object;
    this.ally = ally != null ? ally : false;
  }

  return Character;

})();

Mugiwara = (function(superClass) {
  extend(Mugiwara, superClass);

  function Mugiwara(object, ally) {
    this.object = object;
    this.ally = ally != null ? ally : true;
  }

  return Mugiwara;

})(Character);

Marine = (function(superClass) {
  extend(Marine, superClass);

  function Marine(object, ally, banda, range1, random) {
    var temp;
    this.object = object;
    this.ally = ally != null ? ally : false;
    this.banda = banda != null ? banda : 'Marina';
    this.range = range1 != null ? range1 : 'Capitán';
    if (random == null) {
      random = true;
    }
    if (random === true) {
      switch (range) {
        case 'Capitán':
          temp = Math.random();
          this.object = {
            HP: Math.floor(temp * 100),
            maxHP: Math.floor(temp * 100),
            MP: Math.floor(temp * 80),
            maxMP: Math.floor(temp * 80)
          };
      }
    } else {

    }
  }

  return Marine;

})(Character);
