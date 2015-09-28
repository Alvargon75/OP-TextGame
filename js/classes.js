var Character, Mugiwara,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Character = (function() {
  function Character(name, ally) {
    this.name = name;
    this.ally = ally != null ? ally : false;
  }

  return Character;

})();

Mugiwara = (function(superClass) {
  extend(Mugiwara, superClass);

  function Mugiwara(name) {
    this.name = name;
  }

  return Mugiwara;

})(Character);
