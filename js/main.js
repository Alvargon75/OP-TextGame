/*
	 ██████╗██╗  ██╗ █████╗ ██████╗  █████╗  ██████╗████████╗███████╗██████╗ ███████╗
	██╔════╝██║  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝
	██║     ███████║███████║██████╔╝███████║██║        ██║   █████╗  ██████╔╝███████╗
	██║     ██╔══██║██╔══██║██╔══██╗██╔══██║██║        ██║   ██╔══╝  ██╔══██╗╚════██║
	╚██████╗██║  ██║██║  ██║██║  ██║██║  ██║╚██████╗   ██║   ███████╗██║  ██║███████║
	 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝
*/

var randomName = false; // This will remain 'false'
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



var Sanji = {
	id: "sanji",
	name: "Sanji",
	longName: "Sanji Pierna Negra",
	HP: 400,
	maxHP: 400,
	MP: 270,
	maxMP: 270,
	estado: 0,
	grados: ["Pierna Negra", "Haki de Armadura", "Diable Jamble"],
	ataques: ["Patada Pierna Negra", "Disparo de Venado", "Patada Escalope", "Espectro del Pan Frito", "Pierna del Diablo"],
	ataquesValores: [4, 7, 9, 15, 22],
	ataquesCoste: [0, 2, 6, 11, 100],
};

var Luffy = {
	id: "luffy",
	name: "Luffy",
	longName: "Monkey D. Luffy",
	HP: 500,
	maxHP: 500,
	MP: 230,
	maxMP: 230,
	estado: 0,
	grados: ["Hombre de Goma", "Grado 2", "Grado 3"],
	ataques: ["Estira el brazo, puñetazo", "Galleta galleta, metralleta", "Retuérce el tornillo, Molinillo", "Estira el cuello mazo, cabezazo", "Haki del Rey"],
	ataquesValores: [5, 11, 13, 17, 27],
	ataquesCoste: [0, 1, 7, 11, 115],
};

var Zoro = {
	id: "zoro",
	name: "Zoro",
	longName: "Zoro Ronoa",
	HP: 600,
	maxHP: 600,
	MP: 190,
	maxMP: 190,
	estado: 0,
	grados: ["Casual", "Concentrado", "Mente en Blanco"],
	ataques: ["Sablazo", "Estilo de Tres Espadas", "Corte del Demonio", "Espiral del Dragón", "Tatsumaki"],
	ataquesValores: [6, 8, 12, 15, 22],
	ataquesCoste: [0, 3, 5, 14, 95],
};

var GodMode = { // Personaje de Prueba o Cheat
	id: "godmode",
	name: "Dios", // Anteriormente Álvaro G.
	longName: "Papu, el Dios",
	HP: 1000000,
	maxHP: 1000000,
	MP: 9999,
	maxMP: 9999,
	estado: 0,
	grados: ["Dios", "SSJ1", "SSJ4"],
	ataques: ["Kamehameha", "Furia del Proletariado", "Kung Fury", "PapuAtaque", "Ataque Final"],
	ataquesValores: [10, 100, 1000, 10000, 999999],
	ataquesCoste: [1, 1, 1, 1, 1],
};
var Nami = {
	id: "nami",
	name: "Nami",
	longName: "Nami la Ladrona",
	HP: 190,
	maxHP: 190,
	MP: 70,
	maxMP: 70,
	estado: 0,
	grados: ["undefined", "undefined", "undefined"],
	ataques: ["Patada", "Robo"/*Tiene una probabilidad de dar Vida o MP*/, "Ataque Climático", "Tormenta", "Nube de Enel"],
	ataquesValores: [1, 1, 5, 8, 11],
	ataquesCoste: [0, 1, 3, 3, 9],
};

var Ussop = {
	id: "usuf",
	name: "Ussop",
	longName: "Ussop el Tirador",
	HP: 275,
	maxHP: 275,
	MP: 120,
	maxMP: 120,
	estado: 0,
	grados: ["Cobardía", "Valentía", "Sogeking"],
	ataques: ["Tiro", "Canica Explosiva", "Canica de Fuego", "Canica de Kaya", "Taifa de Ussop"],
	ataquesValores: [1, 3, 8, 9, 13],
	ataquesCoste: [0, 2, 5, 9, 13],
};

var Chopper = {
	id: "chopper",
	name: "Chopper",
	longName: "Tony Tony Chopper",
	HP: 300,
	maxHP: 300,
	MP: 240,
	maxMP: 240,
	estado: 0,
	grados: ["Brain Point", "Heavy Point", "Monster Point"],
	ataques: ["Scope"],
	ataquesValores: [],
	ataquesCoste: [],
};

var Robin = {
	id: "robin",
	name: "Robin",
	longName: "Nico Robin",
	HP: 250,
	maxHP: 250,
	MP: 300,
	maxMP: 300,
	estado: 0,
	grados: ["Doña Domingo", "No Quiero Vivir", "Quiero vivir"],
	ataques: ["Brotad en 3", "Brotad en 5", "10 Flores", "Infinitas Flores", "Brotad en Millones"],
	ataquesValores: [3, 6, 8, 14, 20],
	ataquesCoste: [0, 3, 4, 7, 16],
};

var Franky = {
	id: "franky",
	name: "Franky",
	longName: "Cutty Flam",
	HP: 480,
	maxHP: 480,
	MP: 200,
	maxMP: 200,
	estado: 0,
	grados: ["Agotado", "Normal", "SUUUUUUUUUUUPER"],
	ataques: ["Weapons Left", "Strong Hammer", "Lanzallamas", "Coup de Vent", "SUUUUUUUUUUPER"],
	ataquesValores: [1, 3, 6 /*Añade en Llamas*/, 5 /*Sube HP*/, 18],
	ataquesCoste: [0, 2, 4, 5, 10],
};

// Generic Villain


var names = [Luffy, Sanji, Zoro, Nami, Ussop, Robin, Franky, Chopper, GodMode];﻿
var nameNumber = 0;
var currentCharacter = names[0];


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

// SAVING TIME

var writer = function(id,text){
	document.getElementById(id).innerHTML = text;
}

var hide = function(id){
	document.getElementById(id).classList.add('hidden');
}

var show = function(id){
	document.getElementById(id).classList.remove('hidden');
}

var randomizer = function(multi){
	return Math.floor(Math.random() * multi);
}

var checkArray = function(objeto, array){
	for(var i = 0; i < array.length; i++){
		if(array[i] === objeto){
			return true;
		}
	}

	return false;
}

var randomString = function(length){
	var char = [];
	var RStemp;
	for(var i = 0; i < length; i++){
		switch(Math.floor(Math.random() * 30)){
			case 0:
				RStemp = "A";
				break;
			case 1:
				RStemp = "H";
				break;
			case 2:
				RStemp = "t";
				break;
			case 3:
				RStemp = "Q";
				break;
			case 4:
				RStemp = "j";
				break;
			case 5:
				RStemp = "7";
				break;
			case 6:
				RStemp = "8";
				break;
			case 7:
				RStemp = "Y";
				break;
			case 8:
				RStemp = "G";
				break;
			case 9:
				RStemp = "l";
				break;
			case 10:
				RStemp = "9";
				break;
			case 11:
				RStemp = "L";
				break;
			case 12:
				RStemp = "M";
				break;
			case 13:
				RStemp = "n";
				break;
			case 14:
				RStemp = "X";
				break;
			case 15:
				RStemp = "z";
				break;
			case 16:
				RStemp = "X";
				break;
			case 17:
				RStemp = "B";
				break;
			case 18:
				RStemp = "W";
				break;
			case 19:
				RStemp = "q";
				break;
			case 20:
				RStemp = "S";
				break;
			case 21:
				RStemp = "a";
				break;
			case 22:
				RStemp = "K";
				break;
			case 23:
				RStemp = "i";
				break;
			case 24:
				RStemp = "-";
				break;
			case 25:
				RStemp = "M";
				break;
			case 26:
				RStemp = "_";
				break;
			case 27:
				RStemp = "b";
				break;
			case 28:
				RStemp = "v";
				break;
			case 29:
				RStemp = "P";
				break;
			case 30:
				RStemp = "7";
				break;
		}
		char.push(RStemp);
	}
	return char.join("");
}

/*
██╗  ██╗███╗   ███╗██╗         ██████╗  █████╗ ██████╗ ███████╗██╗███╗   ██╗ ██████╗
╚██╗██╔╝████╗ ████║██║         ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║████╗  ██║██╔════╝
 ╚███╔╝ ██╔████╔██║██║         ██████╔╝███████║██████╔╝███████╗██║██╔██╗ ██║██║  ███╗
 ██╔██╗ ██║╚██╔╝██║██║         ██╔═══╝ ██╔══██║██╔══██╗╚════██║██║██║╚██╗██║██║   ██║
██╔╝ ██╗██║ ╚═╝ ██║███████╗    ██║     ██║  ██║██║  ██║███████║██║██║ ╚████║╚██████╔╝
╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝

*/

var xmlhttp, jsonhttp, jsonCharacters;
var language = window.navigator.userLanguage || window.navigator.language;

if(window.XMLHttpRequest){ //Modern Browsers
    xmlhttp = new XMLHttpRequest();
	jsonhttp = new XMLHttpRequest();
	jsonCharacters = new XMLHttpRequest();
}else{ // IE
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	jsonhttp = new ActiveXObject("Microsoft.XMLHTTP");
	jsonCharacters = new ActiveXObject("Microsoft.XMLHTTP");
}

if(language == "es-ES"){
	xmlhttp.open("GET", "locale/es-ES.xml", true);
	xmlhttp.send();
}else{
	xmlhttp.open("GET", "locale/en-US.xml", true);
	xmlhttp.send();
}
jsonhttp.open("GET", "locale/reference.json", true);
jsonhttp.send();

jsonCharacters.open("GET", "js/characters.json", true);
jsonCharacters.send();


console.log("Lang: " + language);


// START AND CLEAR

var start = function(){
	console.log("Game Started");
	writer("intro", xmlhttp.responseXML.querySelectorAll('inicio > intro')[0].childNodes[0].nodeValue);
	hide("inicio");
	hide("nameChange");
	hide("cc")
	show("d1_a");
	show("d1_b");
	checkHUD(); /* No more random name
	if(randomName == true){
		switch(nameNumber){
			case 0: //Luffy
				break;
			case 1: // Sanji
				hide("i_intro_luffy");
				show("i_intro_sanji");
				document.getElementById("stats").classList.add('stats-sanji');
				break;
			case 2: // Zoro
				hide("i_intro_luffy");
				show("i_intro_zoro");
				document.getElementById("stats").classList.add('stats-zoro');
				break;
			case 3: //Nami
				hide("i_intro_luffy");
				show("i_intro_nami");
				document.getElementById("stats").classList.add('stats-nami');
				break;
			case 4: //Ussop
				hide("i_intro_luffy");
				show("i_intro_ussop");
				document.getElementById("stats").classList.add('stats-ussop');
				writer("name", Ussop.longName);
				break;
			case 5: //Robin
 				hide("i_intro_luffy");
 				show("i_intro_robin");
 				document.getElementById("stats").classList.add('stats-robin');
 				break;
			case 6: //Franky
 				hide("i_intro_luffy");
 				show("i_intro_franky");
 				document.getElementById("stats").classList.add('stats-franky');
 				break;
			case 7: //Chopper TEMPORALMENTE DESHABILITADO
 				hide("i_intro_luffy");
 				show("i_intro_chopper");
 				document.getElementById("stats").classList.add('stats-chopper');
 				break;
		}
		writer("name", names[nameNumber].longName)
		console.log("Name:" + " " + names[nameNumber].name);
	}else{
		nameNumber = 0;
		console.log("Name:" + " " + Luffy.name);
		writer("name", "Monkey D. Luffy");
	};*/
	nameNumber = 0;
	writer("name", names[nameNumber].longName);
};


// names = [Luffy, Sanji, Zoro, Nami, Ussop, Robin, Franky, Chopper];
var usados = [nameNumber];

var SdPGenerator = function(index){
	if(randomName === true){
		var personaje = Math.floor(Math.random() * 8);
		var temp = checkArray(personaje, usados);
		do{
			if(temp === true){
				personaje = Math.floor(Math.random() * 8);
				temp = checkArray(personaje, usados);
			}else{
				usados.push(personaje);
				return personaje;
			}
		}while(temp === true)
	}else{
		switch (index) {
			case 2:
				return 2;
				break;
			case 3:
				return 3;
				break;
			case 4:
				return 4;
				break;
			case 5:
				return 1;
				break;
			case 6:
				return 7;
				break;
			case 7:
				return 5;
				break;
			case 8:
				return 6;
				break;
		}
	}
}

var characterChosen = function(character){
	hide("nameChange");
	nameNumber = character;
	return true;
}

var segundoSdP = SdPGenerator(2);
var tercerSdP = SdPGenerator(3);
var cuartoSdP = SdPGenerator(4);
var quintoSdP = SdPGenerator(5);
var sextoSdP = SdPGenerator(6);
var septimoSdP = SdPGenerator(7);
var octavoSdp = SdPGenerator(8);

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
var turnCount = 0;
var fight = {
	setUp: function(enemy){
		document.getElementById("combatUI").classList.remove('combatUI-inactive');
		writer("vs_title", names[nameNumber].name + " " + "vs" + " " + enemy.name);
		writer("at1", names[nameNumber].ataques[0]);
		writer("at2", names[nameNumber].ataques[1]);
		writer("at3", names[nameNumber].ataques[2]);
		writer("at4", names[nameNumber].ataques[3]);
		writer("at5", names[nameNumber].ataques[4]);
		combatHUD();
	},
	atackAlly: function(ataque){
		names[nameNumber].MP -= names[nameNumber].ataquesCoste[ataque];
		enemy.HP -= names[nameNumber].ataquesValores[ataque];
		expPoints += Math.floor(Math.random() * 100);
	},
	atackEnemy: function(whichEnemy, ataque){
		turnCount++;
	},
	endBattle: function(){
		turnCount = 0;

	}
}

// RECUPERACIÓN Y EXPERIENCIA

var recuperar = function(){
	while(names[nameNumber].maxHP >= names[nameNumber].HP){
		names[nameNumber].HP += 1;
	};
};

// HUD

var checkHUD = function(){
	document.getElementById("vida").innerHTML = names[nameNumber].HP;
	writer("maxVida", names[nameNumber].maxHP);
	writer("MP", names[nameNumber].MP);
	writer("maxMP", names[nameNumber].maxMP);
	document.getElementById("ataque").innerHTML = names[nameNumber].grados[gradoActual];
	document.getElementById("nivel_exp").innerHTML = nivelExp;
	document.getElementById("exp").innerHTML = expPoints;
	console.log("HUD revisado");
};

var combatHUD = function(){
	writer("combatUI-vida", names[nameNumber].HP);
	writer("combatUI-maxVida", names[nameNumber].maxHP);
	writer("combatUI-MP", names[nameNumber].MP);
	writer("combatUI-maxMP", names[nameNumber].maxMP);
	writer("combatUI-nivelExp", nivelExp);
}

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
		writer("a4", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-1")[0].childNodes[0].nodeValue);
		danoTotal += danoRound;
		luffyVida -= danoAlv;
		if(danoTotal >= 100){ //Ganas
			writer("b1", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-2")[0].childNodes[0].nodeValue);
			show("p0");
			hide("d2p_a");
			hide("d2p_b");
			atacar = false;
			luffyVida = 500;
			checkHUD();
		}else if(luffyVida <= 0){ //Pierdes
			writer("b1", xmlhttp.responseXML.querySelectorAll("alvida fight > text#luchaAlv-3")[0].childNodes[0].nodeValue);
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
	writer("into", xmlhttp.responseXML.querySelectorAll("buggy > intro")[0].childNodes[0].nodeValue);
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
