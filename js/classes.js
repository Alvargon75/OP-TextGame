
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
  function Pelea(enemy1) {
    this.enemy = enemy1;
    this.valores = {
      turnos: 0
    };
    document.getElementById("combatUI").classList.remove('combatUI-inactive');
    escribir("vs_title", personajeActual.name + " " + "vs" + " " + this.enemy.name);
    escribir("at1", personajeActual.ataques[0]);
    escribir("at2", personajeActual.ataques[1]);
    escribir("at3", personajeActual.ataques[2]);
    escribir("at4", personajeActual.ataques[3]);
    escribir("at5", personajeActual.ataques[4]);
    combatHUD();
    document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[0].sprite;
    document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[0].sprite;
    document.querySelectorAll('div#combatUI visualUI personajes div.UI-pokemonbox table td').classList.add('green');
  }

  Pelea.prototype.generate = function() {};

  return Pelea;

})();
