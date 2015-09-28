###
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗
██║     ██║   ██║██║╚██╔╝██║██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██████╔╝██║  ██║   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
###
class Pelea
    constructor: (@id = undefined) ->
        char = []
        RStemp = undefined
        i = 0
        while i < 30
            switch Math.floor(Math.random() * 30)
                when 0
                    RStemp = 'A'
                when 1
                    RStemp = 'H'
                when 2
                    RStemp = 't'
                when 3
                    RStemp = 'Q'
                when 4
                    RStemp = 'j'
                when 5
                    RStemp = '7'
                when 6
                    RStemp = '8'
                when 7
                    RStemp = 'Y'
                when 8
                    RStemp = 'G'
                when 9
                    RStemp = 'l'
                when 10
                    RStemp = '9'
                when 11
                    RStemp = 'L'
                when 12
                    RStemp = 'M'
                when 13
                    RStemp = 'n'
                when 14
                    RStemp = 'X'
                when 15
                    RStemp = 'z'
                when 16
                    RStemp = 'X'
                when 17
                    RStemp = 'B'
                when 18
                    RStemp = 'W'
                when 19
                    RStemp = 'q'
                when 20
                    RStemp = 'S'
                when 21
                    RStemp = 'a'
                when 22
                    RStemp = 'K'
                when 23
                    RStemp = 'i'
                when 24
                    RStemp = '-'
                when 25
                    RStemp = 'M'
                when 26
                    RStemp = '_'
                when 27
                    RStemp = 'b'
                when 28
                    RStemp = 'v'
                when 29
                    RStemp = 'P'
                when 30
                    RStemp = '7'
            char.push RStemp
            i++
        @id = char.join("")
        this.generate()
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
class Enemy extends Character
    constructor: (@object, @ally = false, @banda) ->
