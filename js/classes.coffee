class Pelea
    # Esto crea una instancia para una pelea. Es lo básico para cualquier pelea.
    #
    # @args
    #  character - Qué personaje se enfrenta a `enemy`
    #  enemy - La persona contra la que se enfrenta `character`
    constructor: (@character = personajeActual, @enemy, timeSkip = 0) ->
        # Define las propiedades de la Pelea
        @valores = {
            turnos: 0
        }

        # Genera el escenario
        escribir("vs_title", personajeActual.name + " " + "vs" + " " + @enemy.name);
        escribir("at1", @character.ataques[0])
        escribir("at2", @character.ataques[1])
        escribir("at3", @character.ataques[2])
        escribir("at4", @character.ataques[3])
        escribir("at5", @character.ataques[4])
        document.getElementById("UI-ay-name").innerHTML = @character.longName
        document.getElementById("UI-en-name").innerHTML = @enemy.longName
        combatHUD();

        # Pone las imágenes de los personajes
        document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite
        document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite;

        # Crea las barras de vida


    inicio: () ->
        document.getElementsByTagName("header").style.display = "none"
        document.getElementById("combatUI").classList.remove('combatUI-inactive')
        return

    selfDestruct: () ->
        # Podrías preguntarte, porque añadir un comando de autodestruccíon, yo digo, ¿por qué no?
        deletable = true
        try
          delete this
        catch error
          console.error("The fight cannot be deleted.")

        if deletable == true
            delete this


class Save
    constructor: () ->
