###
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
###
class Pelea
    constructor: (@enemy) ->
        @valores = {
            turnos: 0
        }

        # Genera el escenario
        document.getElementById("combatUI").classList.remove('combatUI-inactive');
        escribir("vs_title", personajeActual.name + " " + "vs" + " " + enemy.name);
        escribir("at1", personajeActual.ataques[0]);
        escribir("at2", personajeActual.ataques[1]);
        escribir("at3", personajeActual.ataques[2]);
        escribir("at4", personajeActual.ataques[3]);
        escribir("at5", personajeActual.ataques[4]);
        combatHUD();

        document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[0].sprite
        document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[0].sprite;

    generate: () ->


###
██████╗ ███████╗██████╗ ███████╗ ██████╗ ███╗   ██╗ █████╗      ██╗███████╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗████╗  ██║██╔══██╗     ██║██╔════╝██╔════╝
██████╔╝█████╗  ██████╔╝███████╗██║   ██║██╔██╗ ██║███████║     ██║█████╗  ███████╗
██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██║   ██║██║╚██╗██║██╔══██║██   ██║██╔══╝  ╚════██║
██║     ███████╗██║  ██║███████║╚██████╔╝██║ ╚████║██║  ██║╚█████╔╝███████╗███████║
╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚════╝ ╚══════╝╚══════╝
###
# La clase de personajes Común
class Character
    constructor: (@object, @ally = false) ->


# A partir de Aquí se van poniendo el resto
# Mugiwaras
class Mugiwara extends Character
    constructor: (@object, @ally = true) ->



# Posiblemente haga clases separadas para cada uno pero de momento no.

# Enemigos
class Marine extends Character
    constructor: (@object, @ally = false, @banda = 'Marina', @range = 'Capitán', random = true) ->
        if random == true
            switch range
                when 'Capitán'
                    temp = Math.random()
                    @object = {
                        HP: Math.floor(temp * 100)
                        maxHP: Math.floor(temp * 100)
                        MP: Math.floor(temp * 80)
                        maxMP: Math.floor(temp * 80)
                    }

        else
          # body...
