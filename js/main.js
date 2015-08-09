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
	Math.floor(Math.random() * multi);
}

var audioPlayer_play = function(id){
	var aud = document.getElementById(id);
	aud.play();
}

var audioPlayer_pause = function(id){
	var aud = document.getElementById(id);
	aud.pause();
}

// START AND CLEAR

var start = function(){
	console.log("Game Started");
	writer("intro","Te encuentras en un barril en medio del mar, a lo lejos ves dos barcos, uno con una ensena pirata y otro de la marina. <br/> ¿A cuál decides pedir ayuda?");
	hide("inicio");
	hide("nameChange");
	show("d1_a");
	show("d1_b");
	checkHUD();
	if(randomName == true){
		if(nameNumber == 2){
			writer("name", Zoro.longName);
			hide("i_intro_luffy");
			show("i_intro_zoro");
		}else if(nameNumber == 1){
			writer("name", Sanji.longName);
			hide("i_intro_luffy");
			show("i_intro_sanji");
		}else{
			writer("name", "Monkey D. Luffy");
		}
		console.log("Name:" + " " + names[nameNumber].name);
	}else{
		nameNumber = 0;
		console.log("Name:" + " " + Luffy.name);
		writer("name", "Monkey D. Luffy");
	};
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
var fightSetUp = function(enemyName){
	document.getElementById("combatUI").classList.remove('combatUI-inactive');
	writer("vs_title", names[nameNumber].name + " " + "vs" + " " + enemyName);
	writer("at1", names[nameNumber].ataques[0]);
	writer("at2", names[nameNumber].ataques[1]);
	writer("at3", names[nameNumber].ataques[2]);
	writer("at4", names[nameNumber].ataques[3]);
	writer("at5", names[nameNumber].ataques[4]);
	combatHUD();
}
// CHARACTERS

var randomName = false;
var nameChange = function(){
	randomName = true;
	hide("nameChange");
	nameNumber = Math.floor(Math.random() * 3);
}
var nameNumber = 0;
var Sanji = {
	name: "Sanji",
	longName: "Sanji Pierna Negra",
	HP: 400,
	maxHP: 400,
	MP: 250,
	maxMP: 250,
	grados: ["Pierna Negra", "Haki de Armadura", "Diable Jamble"],
	ataques: ["Patada Pierna Negra", "Disparo de Venado", "Patada Escalope", "Espectro del Pan Frito", "Pierna del Diablo"],
	ataquesValores: [2, 5, 7, 13, 20],
	ataquesCoste: [0, 2, 6, 11, 100],
}

var Luffy = {
	name: "Luffy",
	longName: "Monkey D. Luffy",
	HP: 500,
	maxHP: 500,
	MP: 180,
	maxMP: 180,
	grados: ["Hombre de Goma", "Grado 2", "Grado 3"],
	ataques: ["Estira el brazo, puñetazo", "Galleta galleta, metralleta", "Retuérce el tornillo, Molinillo", "Estira el cuello mazo, cabezazo", "Haki del Rey"],
	ataquesValores: [3, 9, 10, 15, 25],
	ataquesCoste: [0, 1, 7, 11, 115],
}

var Zoro = {
	name: "Zoro",
	longName: "Zoro Ronoa",
	HP: 600,
	maxHP: 600,
	MP: 150,
	maxMP: 150,
	grados: ["Casual", "Concentrado", "Mente en Blanco"],
	ataques: ["Sablazo", "Estilo de Tres Espadas", "Corte del Demonio", "Espiral del Dragón", "Tatsumaki"],
	ataquesValores: [4, 7, 10, 13, 20],
	ataquesCoste: [0, 3, 5, 14, 95],
}

var GodMode = { // Personaje de Prueba o Cheat
	name: "Dios",
	longName: "Papu, el Dios",
	HP: 1000000,
	maxHP: 1000000,
	MP: 9999,
	maxMP: 9999,
	grados: ["Dios", "SSJ1", "SSJ4"],
	ataques: ["Kamehameha", "Furia del Proletariado", "Kung Fury", "PapuAtaque", "Ataque Final"],
	ataquesValores: [10, 100, 1000, 10000, 999999],
	ataquesCoste: [1, 1, 1, 1, 1],
}

var names = [Luffy, Sanji, Zoro];

// RECUPERACIÓN

var recuperar = function(vida, dVida){
	if(vida == dVida){
		console.log("Fail");
	} else {
		for(vida; vida < dVida; vida++){
			console.log("Vida en:" + vida);
		}
	}
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

var expChecking = false;

// ATAQUES

var ataquePrimeraPelea = function(dano, multi){
	return Math.floor(Math.random() * multi + dano);
};

var ataqueVillano = function(dano, multi){
	return Math.floor(Math.random() * multi + dano);
}

var ataqueSdP = function(dano, multi, coste){
	names[nameNumber].MP -= coste;
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
			show("");
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
