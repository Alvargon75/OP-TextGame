
/*
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
 */
var Character, Enemy, Mugiwara, Pelea,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Pelea = (function() {
  function Pelea(id) {
    var RStemp, char, i;
    this.id = id != null ? id : void 0;
    char = [];
    RStemp = void 0;
    i = 0;
    while (i < 30) {
      switch (Math.floor(Math.random() * 30)) {
        case 0:
          RStemp = 'A';
          break;
        case 1:
          RStemp = 'H';
          break;
        case 2:
          RStemp = 't';
          break;
        case 3:
          RStemp = 'Q';
          break;
        case 4:
          RStemp = 'j';
          break;
        case 5:
          RStemp = '7';
          break;
        case 6:
          RStemp = '8';
          break;
        case 7:
          RStemp = 'Y';
          break;
        case 8:
          RStemp = 'G';
          break;
        case 9:
          RStemp = 'l';
          break;
        case 10:
          RStemp = '9';
          break;
        case 11:
          RStemp = 'L';
          break;
        case 12:
          RStemp = 'M';
          break;
        case 13:
          RStemp = 'n';
          break;
        case 14:
          RStemp = 'X';
          break;
        case 15:
          RStemp = 'z';
          break;
        case 16:
          RStemp = 'X';
          break;
        case 17:
          RStemp = 'B';
          break;
        case 18:
          RStemp = 'W';
          break;
        case 19:
          RStemp = 'q';
          break;
        case 20:
          RStemp = 'S';
          break;
        case 21:
          RStemp = 'a';
          break;
        case 22:
          RStemp = 'K';
          break;
        case 23:
          RStemp = 'i';
          break;
        case 24:
          RStemp = '-';
          break;
        case 25:
          RStemp = 'M';
          break;
        case 26:
          RStemp = '_';
          break;
        case 27:
          RStemp = 'b';
          break;
        case 28:
          RStemp = 'v';
          break;
        case 29:
          RStemp = 'P';
          break;
        case 30:
          RStemp = '7';
      }
      char.push(RStemp);
      i++;
    }
    this.id = char.join("");
    this.generate();
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

Enemy = (function(superClass) {
  extend(Enemy, superClass);

  function Enemy(object, ally, banda) {
    this.object = object;
    this.ally = ally != null ? ally : false;
    this.banda = banda;
  }

  return Enemy;

})(Character);
