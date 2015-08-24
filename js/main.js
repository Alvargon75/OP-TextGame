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

var xmlhttp;
var language = window.navigator.userLanguage || window.navigator.language;

if(window.XMLHttpRequest){ //Modern Browsers
    xmlhttp = new XMLHttpRequest();
}else{ // IE
    xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
}

if(language == "es-ES"){
	xmlhttp.open("GET", "locale/es-ES.xml", true);
	xmlhttp.send();
}else if(language == "en-US"){
	xmlhttp.open("GET", "locale/en-US.xml", true);
	xmlhttp.send();
}

var xmlDoc = xmlhttp.responseHTML;


console.log("Lang: " + language)


// START AND CLEAR

var start = function(){
	console.log("Game Started");
	writer("intro", xmlDoc.querySelectorAll('inicio > intro'));
	hide("inicio");
	hide("nameChange");
	hide("cc")
	show("d1_a");
	show("d1_b");
	checkHUD();
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
	};
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

var fight = {
	setUp: function(){
		document.getElementById("combatUI").classList.remove('combatUI-inactive');
		writer("vs_title", names[nameNumber].name + " " + "vs" + " " + enemyName);
		writer("at1", names[nameNumber].ataques[0]);
		writer("at2", names[nameNumber].ataques[1]);
		writer("at3", names[nameNumber].ataques[2]);
		writer("at4", names[nameNumber].ataques[3]);
		writer("at5", names[nameNumber].ataques[4]);
		combatHUD();
	},
	atackAlly: function(ataque){
		names[nameNumber].MP -= names[nameNumber].ataquesCoste[ataque];
		//names[nameNumber].
	}
}
// CHARACTERS

var randomName = false;
var nameChange = function(){
	randomName = true;
	hide("nameChange");
	nameNumber = Math.floor(Math.random() * 7);
}
var nameNumber = 0;
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
}

var Luffy = {
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
}

var Zoro = {
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
}

var GodMode = { // Personaje de Prueba o Cheat
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
}
var Nami = {
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
}

var Ussop = {
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
}

var Chopper = {
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
}

var Franky = {
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
}

// Generic Villain


var names = [Luffy, Sanji, Zoro, Nami, Ussop, Robin, Franky, Chopper, GodMode];

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
	__  .__   __.  __    ______  __    ______
	|  | |  \ |  | |  |  /      ||  |  /  __  \
	|  | |   \|  | |  | |  ,----'|  | |  |  |  |
	|  | |  . `  | |  | |  |     |  | |  |  |  |
	|  | |  |\   | |  | |  `----.|  | |  `--'  |
	|__| |__| \__| |__|  \______||__|  \______/
	Inicio
*/
var marine = function(){
	document.getElementById("a1").innerHTML = "Decides ir con el barco de los marines. Allí encuentras al Teniente Fullbody que te recibe amablemente. Te invita a ir con el hasta la Villa de las Conchas o unirte a la Marina. <br /> ¿Qué eliges?";
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2m_a").classList.remove('hidden');
	document.getElementById("d2m_b").classList.remove('hidden');
}
var pirata = function(){
	document.getElementById("a1").innerHTML = "No sabes por qué pero no quieres ir con los marines, prefieres ir con los piratas. Remas el barril hasta el barco pirata y escalas hasta arriba. <br /> Allí ves a la capitana que te quiere ejecutar. <br /> ¿Vas a morir o a luchar?";
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2p_a").classList.remove('hidden');
	document.getElementById("d2p_b").classList.remove('hidden');
}

//Pequeno Arco Marine

var villa = function(){
	document.getElementById("d2").innerHTML = "Vas a la Villa y vives feliz.<br/><span>FIN</span>";
	document.getElementById("d2m_a").classList.add('hidden');
	document.getElementById("d2m_b").classList.add('hidden');
}
var alistarse = function(){
	document.getElementById("d2m_a").classList.add('hidden');
	document.getElementById("d2m_b").classList.add('hidden');
	var valorLucha = prompt("¿Cómo de bueno eres luchando del 1 al 10?");
	if(valorLucha <= 10){
		document.getElementById("d2").innerHTML = "No eres lo bastante bueno, adiós.<span>FIN</span>";
	}
	else if(valorLucha > 10){
		document.getElementById("d2").innerHTML = "Me gustas chaval, serás mi primero de abordo- dijo Fullbody-.";
		document.getElementById("m1_op").classList.remove('hidden');
	}
	else {
		var retraso = confirm("¿Eres tonto?");
		if(confirm == true){
			document.getElementById("a3").innerHTML = "Ya lo decía yo.";
		}
		else {
			document.getElementById("a3").innerHTML = "No me mientas.";
		}
	}
}
var fullbodyContinua = function(){
	document.getElementById("a3").innerHTML = "Fullbody te mató.<br/> <span>FIN</span>";
	document.getElementById("m1_op").classList.add('hidden');
}

/*
	___       __      ____    ____  __   _______       ___
    /   \     |  |     \   \  /   / |  | |       \     /   \
	/  ^  \    |  |      \   \/   /  |  | |  .--.  |   /  ^  \
	/  /_\  \   |  |       \      /   |  | |  |  |  |  /  /_\  \
	/  _____  \  |  `----.   \    /    |  | |  '--'  | /  _____  \
	/__/     \__\ |_______|    \__/     |__| |_______/ /__/     \__\
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
		writer("a4", "Pegaste a Alvida");
		danoTotal += danoRound;
		luffyVida -= danoAlv;
		if(danoTotal >= 100){ //Ganas
			writer("b1", "Tiraste a Alvida al mar de un puñetazo.");
			show("p0");
			hide("d2p_a");
			hide("d2p_b");
			atacar = false;
			luffyVida = 500;
			checkHUD;
		}else if(luffyVida <= 0){ //Pierdes
			writer("b1", "Alvida te pudo y en un golpe de suerte te tiró al mar.");
			atacar = false;
			checkHUD;
		}else{ //Continua
			console.log("Luffy:" + " " + luffyVida);
			console.log("AlVida:" + " " + danoTotal);
			checkHUD;
		}
	}
}

var rendirseAlv = function(){
	document.getElementById("d2p_a").classList.add('hidden');
	document.getElementById("d2p_b").classList.add('hidden');
	document.getElementById("a3").innerHTML = "Aceptaste tu destino y Alvida te mató.<br/><span>FIN</span>";
}
/*
	.______    __    __    _______   ___________    ____
	|   _  \  |  |  |  |  /  _____| /  _____\   \  /   /
	|  |_)  | |  |  |  | |  |  __  |  |  __  \   \/   /
	|   _  <  |  |  |  | |  | |_ | |  | |_ |  \_    _/
	|  |_)  | |  `--'  | |  |__| | |  |__| |    |  |
	|______/   \______/   \______|  \______|    |__|
	Buggy
*/
var buggy1 = function(){
	clear();
	writer("into", "Afortunadamente derrotaste a Alvida y conseguiste llegar a una isla cercana. Allí te enteras de que un famoso pirata llamado" + " " + names[segundoSdP].longName);
}

/*
	.______        ___      .______          ___   .___________. __   _______
	|   _  \      /   \     |   _  \        /   \  |           ||  | |   ____|
	|  |_)  |    /  ^  \    |  |_)  |      /  ^  \ `---|  |----`|  | |  |__
	|   _  <    /  /_\  \   |      /      /  /_\  \    |  |     |  | |   __|
	|  |_)  |  /  _____  \  |  |\  \----./  _____  \   |  |     |  | |  |____
	|______/  /__/     \__\ | _| `._____/__/     \__\  |__|     |__| |_______|
	Baratie
*/

/*
	___      .______       __        ______   .__   __.   _______    .______      ___      .______       __  ___
    /   \     |   _  \     |  |      /  __  \  |  \ |  |  /  _____|   |   _  \    /   \     |   _  \     |  |/  /
	/  ^  \    |  |_)  |    |  |     |  |  |  | |   \|  | |  |  __     |  |_)  |  /  ^  \    |  |_)  |    |  '  /
	/  /_\  \   |      /     |  |     |  |  |  | |  . `  | |  | |_ |    |   ___/  /  /_\  \   |      /     |    <
	/  _____  \  |  |\  \----.|  `----.|  `--'  | |  |\   | |  |__| |    |  |     /  _____  \  |  |\  \----.|  .  \
	/__/     \__\ | _| `._____||_______| \______/  |__| \__|  \______|    | _|    /__/     \__\ | _| `._____||__|\__\
	Arlong Park
*/

/*
	__        ______     _______  __    __   _______
	|  |      /  __  \   /  _____||  |  |  | |   ____|
	|  |     |  |  |  | |  |  __  |  |  |  | |  |__
	|  |     |  |  |  | |  | |_ | |  |  |  | |   __|
	|  `----.|  `--'  | |  |__| | |  `--'  | |  |____
	|_______| \______/   \______|  \______/  |_______|
	Logue
*/

/*
	_______ .______          ___      .__   __.  _______      __       __  .__   __.  _______
	/  _____||   _  \        /   \     |  \ |  | |       \    |  |     |  | |  \ |  | |   ____|
	|  |  __  |  |_)  |      /  ^  \    |   \|  | |  .--.  |   |  |     |  | |   \|  | |  |__
	|  | |_ | |      /      /  /_\  \   |  . `  | |  |  |  |   |  |     |  | |  . `  | |   __|
	|  |__| | |  |\  \----./  _____  \  |  |\   | |  '--'  |   |  `----.|  | |  |\   | |  |____
	\______| | _| `._____/__/     \__\ |__| \__| |_______/    |_______||__| |__| \__| |_______|
	Grand Line
*/

/*
	___      .______          ___      .______        ___           _______.___________.    ___
    /   \     |   _  \        /   \     |   _  \      /   \         /       |           |   /   \
	/  ^  \    |  |_)  |      /  ^  \    |  |_)  |    /  ^  \       |   (----`---|  |----`  /  ^  \
	/  /_\  \   |      /      /  /_\  \   |   _  <    /  /_\  \       \   \       |  |      /  /_\  \
	/  _____  \  |  |\  \----./  _____  \  |  |_)  |  /  _____  \  .----)   |      |  |     /  _____  \
	/__/     \__\ | _| `._____/__/     \__\ |______/  /__/     \__\ |_______/       |__|    /__/     \__\
	Arabasta
*/

/*
	   _______. __  ___ ____    ____ .______    _______     ___
      /       ||  |/  / \   \  /   / |   _  \  |   ____|   /   \
     |   (----`|  '  /   \   \/   /  |  |_)  | |  |__     /  ^  \
     \   \    |    <     \_    _/   |   ___/  |   __|   /  /_\  \
     .----)   |   |  .  \      |  |     |  |      |  |____ /  _____  \
   |_______/    |__|\__\     |__|     | _|      |_______/__/     \__\
	Skypea
*/

/*
	.__   __.      ___   ____    ____  ___      .______        ______   .__   __.  _______
	|  \ |  |     /   \  \   \  /   / /   \     |   _  \      /  __  \  |  \ |  | |   ____|
	|   \|  |    /  ^  \  \   \/   / /  ^  \    |  |_)  |    |  |  |  | |   \|  | |  |__
	|  . `  |   /  /_\  \  \      / /  /_\  \   |      /     |  |  |  | |  . `  | |   __|
	|  |\   |  /  _____  \  \    / /  _____  \  |  |\  \----.|  `--'  | |  |\   | |  |____
	|__| \__| /__/     \__\  \__/ /__/     \__\ | _| `._____| \______/  |__| \__| |_______|
	Navarone
*/

/*
	____    __    ____  ___   .___________. _______ .______          ______
	\   \  /  \  /   / /   \  |           ||   ____||   _  \        |____  |
	 \   \/    \/   / /  ^  \ `---|  |----`|  |__   |  |_)  |           / /
	  \            / /  /_\  \    |  |     |   __|  |      /           / /
	   \    /\    / /  _____  \   |  |     |  |____ |  |\  \----.     / /
        \__/  \__/ /__/     \__\  |__|     |_______|| _| `._____|    /_/
	Water 7
*/


/*
	 █████╗ ██╗   ██╗██╗   ██╗██████╗  █████╗ ███████╗
	██╔══██╗╚██╗ ██╔╝██║   ██║██╔══██╗██╔══██╗██╔════╝
	███████║ ╚████╔╝ ██║   ██║██║  ██║███████║███████╗
	██╔══██║  ╚██╔╝  ██║   ██║██║  ██║██╔══██║╚════██║
	██║  ██║   ██║   ╚██████╔╝██████╔╝██║  ██║███████║
	╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
*/
/*
Cosas que copiar comunes:

	document.getElementById("").innerHTML = "";
	document.getElementById("").classList.add('');
	document.getElementById("").classList.remove('');
	document.getElementById("").classList.add('hidden');
	document.getElementById("").classList.remove('hidden');

*/
