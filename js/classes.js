
/*
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
 */
var Pelea;

Pelea = (function() {
  function Pelea(character, enemy1, timeSkip) {
    this.character = character != null ? character : personajeActual;
    this.enemy = enemy1;
    this.valores = {
      turnos: 0
    };
    escribir("vs_title", personajeActual.name + " " + "vs" + " " + this.enemy.name);
    escribir("at1", personajeActual.ataques[0]);
    escribir("at2", personajeActual.ataques[1]);
    escribir("at3", personajeActual.ataques[2]);
    escribir("at4", personajeActual.ataques[3]);
    escribir("at5", personajeActual.ataques[4]);
    document.querySelectorAll('div#combatUI > visualUI > personaje > div.UI-pokemonbox > h5').innerHTML = personajeActual.longName;
    document.querySelectorAll('div#combatUI > visualUI > personaje > div.UI-pokemonbox > h5').innerHTML = this.enemy.longName;
    combatHUD();
    document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[timeSkip].sprite;
    document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[timeSkip].sprite;
    document.querySelectorAll('div#combatUI visualUI personajes div.UI-pokemonbox table td').classList.add('green-PKMN');
  }

  Pelea.prototype.inicio = function() {
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
  };

  return Pelea;

})();
