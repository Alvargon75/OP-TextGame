###
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
###
class Pelea
    # Esto crea una instancia para una pelea. Es lo básico para cualquier pelea.
    #
    # @args
    #  character - Qué personaje se enfrenta a `enemy`
    #  enemy - La persona contra la que se enfrenta `character`
    constructor: (@character = personajeActual, @enemy) ->
        # Define las propiedades de la Pelea
        @valores = {
            turnos: 0
        }

        # Genera el escenario
        document.getElementById("combatUI").classList.remove('combatUI-inactive');
        escribir("vs_title", personajeActual.name + " " + "vs" + " " + @enemy.name);
        escribir("at1", personajeActual.ataques[0]);
        escribir("at2", personajeActual.ataques[1]);
        escribir("at3", personajeActual.ataques[2]);
        escribir("at4", personajeActual.ataques[3]);
        escribir("at5", personajeActual.ataques[4]);
        combatHUD();

        # Pone las imágenes de los personajes
        document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[0].sprite
        document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[0].sprite;

        # Crea las barras de vida
        document.querySelectorAll('div#combatUI visualUI personajes div.UI-pokemonbox table td').classList.add('green-PKMN');

    generate: () ->
