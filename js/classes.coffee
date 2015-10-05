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

        # Pone las imágenes de los personajes
        document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite
        document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite

        # Crea las barras de vida


    inicio: () ->
        document.getElementsByTagName("header")[0].style.display = "none"
        document.getElementById("combatUI").classList.remove('combatUI-inactive')
        return

    atack: (AI, number) ->
        if AI == false
            temp = Math.random() + 1
            dano = Math.floor(@character.ataquesValores[number] * temp)
            @character.MP -= @character.ataquesCoste[number]
            @enemy.HP -= dano
        else if AI == true
            # Generar el número
            number = undefined
            temp = Math.random() * 100
            switch temp
                when temp < 35
                  number = 1
                when temp < 60
                  number = 2
                when temp < 75
                  number = 3
                when temp < 90
                  number = 4
                when temp < 100
                  number = 5

            temp = Math.random() + 1
            dano = Math.floor(@enemy.ataquesValores[number] * temp)
            @enemy.MP -= @enemy.ataquesCoste[number]
            @character.HP -= dano
        else
            console.error("Atack managed to be null, this should never happen.")

        return

    stop: () ->
        document.getElementsByTagName("header")[0].style.display = "initial"
        document.getElementById("combatUI").classList.add('combatUI-inactive')
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

        return


class Save
    constructor: () ->
