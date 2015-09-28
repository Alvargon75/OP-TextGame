# La clase de personajes Común
class Character
    constructor: (@name) ->

    side: (@ally) ->
        if @ally == true
          console.log "Ally"
        else
          console.log "Not Ally"


# A partir de Aquí se van poniendo el resto
# Mugiwaras
class Mugiwara extends Character
    constructor: (@name) ->
