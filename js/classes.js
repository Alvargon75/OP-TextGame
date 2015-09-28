var Character, Mugiwara,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Character = (function() {
  function Character(name) {
    this.name = name;
  }

  Character.prototype.side = function(ally) {
    this.ally = ally;
    if (this.ally === true) {
      return console.log("Ally");
    } else {
      return console.log("Not Ally");
    }
  };

  return Character;

})();

Mugiwara = (function(superClass) {
  extend(Mugiwara, superClass);

  function Mugiwara(name) {
    this.name = name;
  }

  return Mugiwara;

})(Character);
