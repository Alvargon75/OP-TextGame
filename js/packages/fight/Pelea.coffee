###
  Esta es la clase principal de cualquier pelea.

  @package fight
  @author Álvaro G.
  @date 01/11/2015
###
class Pelea
    ###
     Esto crea una instancia para una pelea. Es lo básico para cualquier pelea.

     @args
      character - Qué personaje se enfrenta a `enemy`
      enemy - La persona contra la que se enfrenta `character`
      timeSkip - influye solo en los sprites
    ###
    constructor: (@character = personajeActual, @enemy, timeSkip = 0) ->
        # Define las propiedades de la Pelea
        @valores = {
            turnos: 0
            modificadores: {
                global: {
                    climate: "normal"
                }
                AI: {
                    ataque: 1
                    booleans: {
                        lowHealth: false
                        euforico: false
                        nakamaMode: false
                    }
                }
                player: {
                    ataque: 1
                    booleans: {
                        lowHealth: false
                        euforico: false
                        nakamaMode: false
                    }
                }
            }
        }

        # Genera el escenario
        escribir("vs_title", @character.name + " " + "vs" + " " + @enemy.name);
        escribir("at1", @character.ataques[0])
        escribir("at2", @character.ataques[1])
        escribir("at3", @character.ataques[2])
        escribir("at4", @character.ataques[3])
        escribir("at5", @character.ataques[4])
        document.getElementById("UI-ay-name").innerHTML = @character.longName
        document.getElementById("UI-en-name").innerHTML = @enemy.longName
        document.getElementById("UI-ay-MPin").innerHTML = @character.MP
        document.getElementById("UI-ay-MPout").innerHTML = "/" + @character.maxMP
        document.getElementById("UI-en-MPin").innerHTML = @enemy.MP
        document.getElementById("UI-en-MPout").innerHTML = "/" + @enemy.maxMP

        # Pone las imágenes de los personajes
        document.getElementById("UI-ay-sprite").src = this.character.data[timeSkip].sprite
        document.getElementById("UI-en-sprite").src = this.enemy.data[timeSkip].sprite

    attack: (AI, number) ->
        if AI == false
            temp = Math.random() + @valores.modificadores.player.ataque
            dano = Math.floor(@character.ataquesValores[number] * temp)
            @character.MP -= @character.ataquesCoste[number]
            @enemy.HP -= dano
        else if AI == true
            # Generar el número
            number = null
            temp = Math.random() * 100
            switch temp # Esto es simple probabilidad.
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
                when temp < 50 && @valores.modificadores.AI.booleans.lowHealth
                  number = 5
            temp = Math.random() + @valores.modificadores.AI.ataque
            dano = Math.floor(@enemy.ataquesValores[number] * temp)
            @enemy.MP -= @enemy.ataquesCoste[number]
            @character.HP -= dano
        else
            console.error("Atack managed to be null, this should never happen.")

        @valores.turnos++
        return

    inicio: () ->
        document.getElementsByTagName("header")[0].style.display = "none"
        document.getElementById("combatUI").classList.remove('combatUI-inactive')
        _asignEvents()

        return

    _asignEvents = () -> # Yes, men, this is a private method.
        handlers = [
            () -> this.attack(false, 0); return,
            () -> this.attack(false, 1); return,
            () -> this.attack(false, 2); return,
            () -> this.attack(false, 3); return,
            () -> this.attack(false, 4); return,
        ]

        buttons = [
            document.getElementById("at1")
            document.getElementById("at2")
            document.getElementById("at3")
            document.getElementById("at4")
            document.getElementById("at5")
        ]

        `for(i = 0; i < 5; i++){
          buttons[i].addEventListener('click', handlers[i].apply(this))
        }`

    update: () ->
        document.getElementById("UI-ay-MPin").innerHTML = @character.MP
        document.getElementById("UI-ay-MPout").innerHTML = "/" + @character.maxMP
        document.getElementById("UI-en-MPin").innerHTML = @enemy.MP
        document.getElementById("UI-en-MPout").innerHTML = "/" + @enemy.maxMP
        ###
        # Se usa para als barras de vida y MP
        percentageAY = @character.maxHP / 100
        percentageEN = @enemy.maxHP / 100

        nBarrasVidaAY = Math.round(@character.HP / percentageAY)
        nBarrasVidaEN = Math.round(@enemy.HP / percentageEN)
        console.log(nBarrasVidaEN + " - " + nBarrasVidaAY)

        fillBars(nBarrasVidaAY, nBarrasVidaEN)
        ###
        return

    stop: () ->
        document.getElementsByTagName("header")[0].style.display = "initial"
        document.getElementById("combatUI").classList.add('combatUI-inactive')
        window.clearInterval(timerID)

        `
        for(var i = 0; i < buttonsID.length; i++){
          buttons[i].removeEventListener('click', this.events.handlers[i])
        }
        `

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

    test: () ->
      console.log(this)
