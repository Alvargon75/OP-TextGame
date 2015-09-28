# La clase de personajes Común
class Character
    constructor: (@name, @ally = false) ->


# A partir de Aquí se van poniendo el resto
# Mugiwaras
class Mugiwara extends Character
    constructor: (@name) ->
