/*
███╗   ███╗███████╗ ██████╗ █████╗ ███╗   ██╗██╗███████╗███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔════╝██╔════╝██╔══██╗████╗  ██║██║██╔════╝████╗ ████║██╔═══██╗██╔════╝
██╔████╔██║█████╗  ██║     ███████║██╔██╗ ██║██║███████╗██╔████╔██║██║   ██║███████╗
██║╚██╔╝██║██╔══╝  ██║     ██╔══██║██║╚██╗██║██║╚════██║██║╚██╔╝██║██║   ██║╚════██║
██║ ╚═╝ ██║███████╗╚██████╗██║  ██║██║ ╚████║██║███████║██║ ╚═╝ ██║╚██████╔╝███████║
╚═╝     ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝
*/
// VARIABLES

var nivelExp = 1;
var expPoints = 1;
var luffyVida = 500;
var gradoActual = 0;

/*
	 ██████╗██╗  ██╗ █████╗ ██████╗  █████╗  ██████╗████████╗███████╗██████╗ ███████╗
	██╔════╝██║  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝
	██║     ███████║███████║██████╔╝███████║██║        ██║   █████╗  ██████╔╝███████╗
	██║     ██╔══██║██╔══██║██╔══██╗██╔══██║██║        ██║   ██╔══╝  ██╔══██╗╚════██║
	╚██████╗██║  ██║██║  ██║██║  ██║██║  ██║╚██████╗   ██║   ███████╗██║  ██║███████║
	 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝
*/

/*

El tema de los estados va por numeros:

 0 = Normal
 1 = En Llamas
 2 = Envenenado
 3 = Paralizado
 4 =
 100 = Eufórico
 101 = Último Aliento

*/

// Generic Villain
//var names = [Luffy, Sanji, Zoro, Nami, Ussop, Robin, Franky, Chopper, GodMode];﻿

var mugiwaras = [personajes.aliados.Luffy, personajes.aliados.Zorro, personajes.aliados.Sanji, personajes.aliados.Nami, personajes.aliados.Ussop, personajes.aliados.Chopper, personajes.aliados.Robin, personajes.aliados.Franky];
var personajeActual = mugiwaras[0];


// START AND CLEAR

var start = function(){
	console.log("Game Started");
	escribir("intro", xmlhttp.responseXML.querySelectorAll('inicio > intro')[0].childNodes[0].nodeValue);
	ocultar("inicio");
	mostrar("d1_a");
	mostrar("d1_b");
	checkHUD();
	nameNumber = 0;
	escribir("name", personajeActual.longName);
};

var clear = function(){
	document.getElementById("intro").innerHTML = " ";
	document.getElementById("a1").innerHTML = " ";
	document.getElementById("a2").innerHTML = " ";
	document.getElementById("a3").innerHTML = " ";
	document.getElementById("a4").innerHTML = " ";
	document.getElementById("b1").innerHTML = " ";
	document.getElementById("b2").innerHTML = " ";
	document.getElementById("b3").innerHTML = " ";
	document.getElementById("b4").innerHTML = " ";
	document.getElementById("c1").innerHTML = " ";
	document.getElementById("c2").innerHTML = " ";
	document.getElementById("c3").innerHTML = " ";
	document.getElementById("fin").innerHTML = " ";
}

var combate = {
	valores: {
		turnos: 0
	},
	antes: {
		setUp: function(enemy){
			document.getElementById("combatUI").classList.remove('combatUI-inactive');
			escribir("vs_title", personajeActual.name + " " + "vs" + " " + enemy.name);
			escribir("at1", personajeActual.ataques[0]);
			escribir("at2", personajeActual.ataques[1]);
			escribir("at3", personajeActual.ataques[2]);
			escribir("at4", personajeActual.ataques[3]);
			escribir("at5", personajeActual.ataques[4]);
			combatHUD();

			//Todo lo visual va abajo
			document.querySelectorAll('div#combatUI > visualUI > personaje > i#sprite > img')[0].src = personajeActual.data[0].sprite
			document.querySelectorAll('div#combatUI > visualUI > enemigo > i#sprite > img')[0].src = enemy.data[0].sprite;
		}
	},
	durante: {
		ataqueAliado: function(ataque){
			personajeActual.MP -= personajeActual.ataquesCoste[ataque];
			enemy.HP -= personajeActual.ataquesValores[ataque];
			expPoints += Math.floor(Math.random() * 100);
		},
		ataqueEnemigo: function(whichEnemy, ataque){
			figth.valores.turnos++;
		}
	},

	despues: {
		finBatalla: function(){
			figth.valores.turnos = 0;
		}
	}


}

// RECUPERACIÓN Y EXPERIENCIA

var recuperar = function(){
	while(personajeActual.maxHP >= personajeActual.HP){
		personajeActual.HP += 1;
	};
};


// ATAQUES

var ataquePrimeraPelea = function(dano, multi){
	return Math.floor(Math.random() * multi + dano);
};

var ataqueVillano = function(dano, multi){
	return Math.floor(Math.random() * multi + dano);
}

/*
	██╗  ██╗██╗███████╗████████╗ ██████╗ ██████╗ ██╗ █████╗
	██║  ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║██╔══██╗
	███████║██║███████╗   ██║   ██║   ██║██████╔╝██║███████║
	██╔══██║██║╚════██║   ██║   ██║   ██║██╔══██╗██║██╔══██║
	██║  ██║██║███████║   ██║   ╚██████╔╝██║  ██║██║██║  ██║
	╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
*/
/*
$$$$$$\           $$\           $$\
\_$$  _|          \__|          \__|
  $$ |  $$$$$$$\  $$\  $$$$$$$\ $$\  $$$$$$\
  $$ |  $$  __$$\ $$ |$$  _____|$$ |$$  __$$\
  $$ |  $$ |  $$ |$$ |$$ /      $$ |$$ /  $$ |
  $$ |  $$ |  $$ |$$ |$$ |      $$ |$$ |  $$ |
$$$$$$\ $$ |  $$ |$$ |\$$$$$$$\ $$ |\$$$$$$  |
\______|\__|  \__|\__| \_______|\__| \______/

	Inicio
*/
var marine = function(){
	document.getElementById("a1").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine > intro_marine")[0].childNodes[0].nodeValue;
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2m_a").classList.remove('hidden');
	document.getElementById("d2m_b").classList.remove('hidden');
}
var pirata = function(){
	document.getElementById("a1").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio pirata > intro_pirata")[0].childNodes[0].nodeValue;
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2p_a").classList.remove('hidden');
	document.getElementById("d2p_b").classList.remove('hidden');
}

//Pequeno Arco Marine

var villa = function(){
	document.getElementById("a2").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine > village")[0].childNodes[0].nodeValue;
	document.getElementById("d2m_a").classList.add('hidden');
	document.getElementById("d2m_b").classList.add('hidden');
}
var alistarse = function(){
	document.getElementById("d2m_a").classList.add('hidden');
	document.getElementById("d2m_b").classList.add('hidden');
	var valorLucha = prompt(xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-1")[0].childNodes[0].nodeValue);
	if(valorLucha <= 10){
		document.getElementById("a2").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-2")[0].childNodes[0].nodeValue;
	}
	else if(valorLucha > 10){
		document.getElementById("a2").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-3")[0].childNodes[0].nodeValue;
		document.getElementById("m1_op").classList.remove('hidden');
	}
	else {
		var retraso = confirm(xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-4")[0].childNodes[0].nodeValue);
		if(confirm == true){
			document.getElementById("a3").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-5")[0].childNodes[0].nodeValue;
		}
		else {
			document.getElementById("a3").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine enroll > text#enroll-6")[0].childNodes[0].nodeValue;
		}
	}
}
var fullbodyContinua = function(){
	document.getElementById("a3").innerHTML = xmlhttp.responseXML.querySelectorAll("inicio marine > fullbody")[0].childNodes[0].nodeValue;
	document.getElementById("m1_op").classList.add('hidden');
}

/*
 $$$$$$\  $$\            $$\       $$\
$$  __$$\ $$ |           \__|      $$ |
$$ /  $$ |$$ |$$\    $$\ $$\  $$$$$$$ | $$$$$$\
$$$$$$$$ |$$ |\$$\  $$  |$$ |$$  __$$ | \____$$\
$$  __$$ |$$ | \$$\$$  / $$ |$$ /  $$ | $$$$$$$ |
$$ |  $$ |$$ |  \$$$  /  $$ |$$ |  $$ |$$  __$$ |
$$ |  $$ |$$ |   \$  /   $$ |\$$$$$$$ |\$$$$$$$ |
\__|  \__|\__|    \_/    \__| \_______| \_______|
	Alvida
*/

var luchaAlv = function(){
	var atacar = true;
	var acertar = true;
	var danoRound = ataquePrimeraPelea(5, 1);
	var danoAlv = ataquePrimeraPelea(2, 1);
	var danoTotal = 0;

	//Pelea
	while(atacar){
		escribir("a4", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-1")[0].childNodes[0].nodeValue);
		danoTotal += danoRound;
		luffyVida -= danoAlv;
		if(danoTotal >= 100){ //Ganas
			escribir("b1", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-2")[0].childNodes[0].nodeValue);
			mostrar("p0");
			ocultar("d2p_a");
			ocultar("d2p_b");
			atacar = false;
			luffyVida = 500;
			checkHUD();
		}else if(luffyVida <= 0){ //Pierdes
			escribir("b1", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-3")[0].childNodes[0].nodeValue);
			atacar = false;
			checkHUD();
		}else{ //Continua
			checkHUD();
		}
	}
}

var rendirseAlv = function(){
	document.getElementById("d2p_a").classList.add('hidden');
	document.getElementById("d2p_b").classList.add('hidden');
	document.getElementById("a3").innerHTML = xmlhttp.responseXML.querySelectorAll("alvida > surrender")[0].childNodes[0].nodeValue;
}
/*
$$$$$$$\
$$  __$$\
$$ |  $$ |$$\   $$\  $$$$$$\   $$$$$$\  $$\   $$\
$$$$$$$\ |$$ |  $$ |$$  __$$\ $$  __$$\ $$ |  $$ |
$$  __$$\ $$ |  $$ |$$ /  $$ |$$ /  $$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |
$$$$$$$  |\$$$$$$  |\$$$$$$$ |\$$$$$$$ |\$$$$$$$ |
\_______/  \______/  \____$$ | \____$$ | \____$$ |
                    $$\   $$ |$$\   $$ |$$\   $$ |
                    \$$$$$$  |\$$$$$$  |\$$$$$$  |
                     \______/  \______/  \______/
	Buggy
*/
var buggy1 = function(){
	clear();
	escribir("into", xmlhttp.responseXML.querySelectorAll("buggy > intro")[0].childNodes[0].nodeValue);
	escribir("a1" , "zorro y luffy estan viajando en su bote muertos de ambre, luffy ve un pájaro y usa su poder Gomu Gomu no Mi para atraparlo, pero el pájaro resulta ser mas grande de lo que pensaba. El pajaro se lleva a luffy y Zoro persigue al pájaro en el bote, pero se encuentra con tres piratas llamados Tightrope, Walking y Funan. Estos entran al bote y tratan de robarlo, pero son derrotados facilmente por Zoro");
}

/*
$$$$$$$\                                $$\     $$\
$$  __$$\                               $$ |    \__|
$$ |  $$ | $$$$$$\   $$$$$$\  $$$$$$\ $$$$$$\   $$\  $$$$$$\
$$$$$$$\ | \____$$\ $$  __$$\ \____$$\\_$$  _|  $$ |$$  __$$\
$$  __$$\  $$$$$$$ |$$ |  \__|$$$$$$$ | $$ |    $$ |$$$$$$$$ |
$$ |  $$ |$$  __$$ |$$ |     $$  __$$ | $$ |$$\ $$ |$$   ____|
$$$$$$$  |\$$$$$$$ |$$ |     \$$$$$$$ | \$$$$  |$$ |\$$$$$$$\
\_______/  \_______|\__|      \_______|  \____/ \__| \_______|
	Baratie
*/

/*
$$$$$$\            $$\                                     $$$$$$$\                     $$\
$$  __$$\           $$ |                                    $$  __$$\                    $$ |
$$ /  $$ | $$$$$$\  $$ | $$$$$$\  $$$$$$$\   $$$$$$\        $$ |  $$ |$$$$$$\   $$$$$$\  $$ |  $$\
$$$$$$$$ |$$  __$$\ $$ |$$  __$$\ $$  __$$\ $$  __$$\       $$$$$$$  |\____$$\ $$  __$$\ $$ | $$  |
$$  __$$ |$$ |  \__|$$ |$$ /  $$ |$$ |  $$ |$$ /  $$ |      $$  ____/ $$$$$$$ |$$ |  \__|$$$$$$  /
$$ |  $$ |$$ |      $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ |     $$  __$$ |$$ |      $$  _$$<
$$ |  $$ |$$ |      $$ |\$$$$$$  |$$ |  $$ |\$$$$$$$ |      $$ |     \$$$$$$$ |$$ |      $$ | \$$\
\__|  \__|\__|      \__| \______/ \__|  \__| \____$$ |      \__|      \_______|\__|      \__|  \__|
										   $$\   $$ |
										   \$$$$$$  |
											\______/
	Arlong Park
*/

/*
$$\                                               $$\
$$ |                                              $$ |
$$ |      $$$$$$\   $$$$$$\  $$\   $$\  $$$$$$\ $$$$$$\    $$$$$$\  $$\  $$\  $$\ $$$$$$$\
$$ |     $$  __$$\ $$  __$$\ $$ |  $$ |$$  __$$\\_$$  _|  $$  __$$\ $$ | $$ | $$ |$$  __$$\
$$ |     $$ /  $$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ | $$ |    $$ /  $$ |$$ | $$ | $$ |$$ |  $$ |
$$ |     $$ |  $$ |$$ |  $$ |$$ |  $$ |$$   ____| $$ |$$\ $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |
$$$$$$$$\\$$$$$$  |\$$$$$$$ |\$$$$$$  |\$$$$$$$\  \$$$$  |\$$$$$$  |\$$$$$\$$$$  |$$ |  $$ |
\________|\______/  \____$$ | \______/  \_______|  \____/  \______/  \_____\____/ \__|  \__|
                   $$\   $$ |
                   \$$$$$$  |
                    \______/
	Logue
*/

/*
$$$$$$\                                     $$\       $$\       $$\
$$  __$$\                                    $$ |      $$ |      \__|
$$ /  \__| $$$$$$\  $$$$$$\  $$$$$$$\   $$$$$$$ |      $$ |      $$\ $$$$$$$\   $$$$$$\
$$ |$$$$\ $$  __$$\ \____$$\ $$  __$$\ $$  __$$ |      $$ |      $$ |$$  __$$\ $$  __$$\
$$ |\_$$ |$$ |  \__|$$$$$$$ |$$ |  $$ |$$ /  $$ |      $$ |      $$ |$$ |  $$ |$$$$$$$$ |
$$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$ |  $$ |      $$ |      $$ |$$ |  $$ |$$   ____|
\$$$$$$  |$$ |     \$$$$$$$ |$$ |  $$ |\$$$$$$$ |      $$$$$$$$\ $$ |$$ |  $$ |\$$$$$$$\
\______/ \__|      \_______|\__|  \__| \_______|      \________|\__|\__|  \__| \_______|
	Grand Line
*/

/*
$$$$$$\                     $$\                             $$\
$$  __$$\                    $$ |                            $$ |
$$ /  $$ | $$$$$$\  $$$$$$\  $$$$$$$\   $$$$$$\   $$$$$$$\ $$$$$$\    $$$$$$\
$$$$$$$$ |$$  __$$\ \____$$\ $$  __$$\  \____$$\ $$  _____|\_$$  _|   \____$$\
$$  __$$ |$$ |  \__|$$$$$$$ |$$ |  $$ | $$$$$$$ |\$$$$$$\    $$ |     $$$$$$$ |
$$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$  __$$ | \____$$\   $$ |$$\ $$  __$$ |
$$ |  $$ |$$ |     \$$$$$$$ |$$$$$$$  |\$$$$$$$ |$$$$$$$  |  \$$$$  |\$$$$$$$ |
\__|  \__|\__|      \_______|\_______/  \_______|\_______/    \____/  \_______|
	Arabasta
*/

/*
$$$$$$\  $$\
$$  __$$\ $$ |
$$ /  \__|$$ |  $$\ $$\   $$\  $$$$$$\   $$$$$$\   $$$$$$\
\$$$$$$\  $$ | $$  |$$ |  $$ |$$  __$$\ $$  __$$\  \____$$\
\____$$\ $$$$$$  / $$ |  $$ |$$ /  $$ |$$$$$$$$ | $$$$$$$ |
$$\   $$ |$$  _$$<  $$ |  $$ |$$ |  $$ |$$   ____|$$  __$$ |
\$$$$$$  |$$ | \$$\ \$$$$$$$ |$$$$$$$  |\$$$$$$$\ \$$$$$$$ |
\______/ \__|  \__| \____$$ |$$  ____/  \_______| \_______|
				   $$\   $$ |$$ |
				   \$$$$$$  |$$ |
					\______/ \__|
	Skypea
*/


/*
$$\      $$\            $$\                               $$$$$$$$\
$$ | $\  $$ |           $$ |                              \____$$  |
$$ |$$$\ $$ | $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\            $$  /
$$ $$ $$\$$ | \____$$\\_$$  _|  $$  __$$\ $$  __$$\          $$  /
$$$$  _$$$$ | $$$$$$$ | $$ |    $$$$$$$$ |$$ |  \__|        $$  /
$$$  / \$$$ |$$  __$$ | $$ |$$\ $$   ____|$$ |             $$  /
$$  /   \$$ |\$$$$$$$ | \$$$$  |\$$$$$$$\ $$ |            $$  /
\__/     \__| \_______|  \____/  \_______|\__|            \__/
	Water 7
*/


/*
███████╗ █████╗ ██╗   ██╗███████╗
██╔════╝██╔══██╗██║   ██║██╔════╝
███████╗███████║██║   ██║█████╗
╚════██║██╔══██║╚██╗ ██╔╝██╔══╝
███████║██║  ██║ ╚████╔╝ ███████╗
╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝
*/

var gameSave = {
	id: randomString(30),
	stage: {
		stages: [false ,'Morgan', 'Buggy', 'Krieg', 'Arlong Park', 'Grand Line', 'Whiskey Peak', 'Arabasta_ll', 'Arabasta_al', 'Jaya', 'Skypea', 'Water7', 'Ennies Lobby'],
		current: 0
	},
	estadisticas: {
		derrotas: 0,
		victorias: 0,
	}
};

var game = {
	save: function(){
		var storage = true;

		try{
			window.localStorage;
		}catch(err){
			console.error("localStorage not supported");
			storage = false;
		};

		if(storage === true){
			console.info(readXML('sys > localStorage > save > state[current="processing"]'));
			localStorage.setItem('gameSave', JSON.stringify(gameSave));
			console.info(readXML('sys > localStorage > save > state[current="done"]'));
		}
	},
	load: function(){
		var storage = true;

		try{
			window.localStorage;
		}catch(err){
			console.error("localStorage not supported");
			storage = false;
		};

		if(storage === true && localStorage.getItem('gameSave')){
			gameSave = JSON.parse(localStorage.getItem('gameSave'));
		}else if(storage === true && localStorage.getItem('gameSave') !== true){
			console.error(readXML('sys > localStorage > deleteSave > error[type="404"]'))
		}
	},
	delete: function(){
		var storage = true;

		try{
			window.localStorage;
		}catch(err){
			console.error("localStorage not supported");
			storage = false;
		};

		if(storage === true && localStorage.getItem('gameSave')){
			localStorage.removeItem('gameSave');
			console.info(readXML('sys > localStorage > deleteSave > state[current="done"]'));
		}else if(storage === true && localStorage.getItem('gameSave') !== true){
			console.error(readXML('sys > localStorage > deleteSave > error[type="404"]'));
		}
	},
	auxiliar: {

	}
};

/*
██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝
██║  ██║█████╗  ██████╔╝██║   ██║██║  ███╗
██║  ██║██╔══╝  ██╔══██╗██║   ██║██║   ██║
██████╔╝███████╗██████╔╝╚██████╔╝╚██████╔╝
╚═════╝ ╚══════╝╚═════╝  ╚═════╝  ╚═════╝
*/

var debug = {
	funcionTest: function(funcion){
		var argumentos;
		for(var i = 0; i < funcionValores.length; i++){

		}
		try{
			funcion;
		}catch(err){
			console.log("Se encontró un error: " + err.name + " ." + err.message);
		}finally{
			console.log("Debug Acabado");
		}
	}
}
