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

var escribir = function(id,text){
	document.getElementById(id).innerHTML = text;
}

var ocultar = function(id){
	document.getElementById(id).classList.add('hidden');
}

var mostrar = function(id){
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

var quoteRemover = function(string){
    return string.replace(/['"]+/g, '');
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

var xmlhttp, jsonFile, personajes;
var language = window.navigator.userLanguage || window.navigator.language;


if(window.XMLHttpRequest){ //Modern Browsers
    xmlhttp = new XMLHttpRequest();
	jsonFile = new XMLHttpRequest();
}else{ // IE
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	jsonFile = new ActiveXObject("Microsoft.XMLHTTP");
}

if(language == "es-ES"){
	xmlhttp.open("GET", "data/locale/es-ES.xml", true);
	xmlhttp.send();
}else{
	xmlhttp.open("GET", "data/locale/en-US.xml", true);
	xmlhttp.send();
}
jsonFile.open("GET", "data/characters.json", true);
jsonFile.send();

var read = {
	JSON: {
		file: function(url, final){
		    var AJAX_req = new XMLHttpRequest();
		    AJAX_req.open( "GET", url, true );
		    AJAX_req.setRequestHeader("Content-type", "application/json");
		    AJAX_req.onreadystatechange = function()
		    {
		        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
		        {
		        	var response = JSON.parse(AJAX_req.responseText);
					final(response);
		        }
		    }
		    AJAX_req.send();
		},
		personajes: function(referencia){
		    var AJAX_req = new XMLHttpRequest();
		    AJAX_req.open( "GET", url, true );
		    AJAX_req.setRequestHeader("Content-type", "application/json");
		    AJAX_req.onreadystatechange = function()
		    {
		        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
		        {
		        	var response = JSON.parse(AJAX_req.responseText);
					return personajes.referencia;
		        }
		    }
		    AJAX_req.send();
		},
		reference: function(referencia){
			var AJAX_req = new XMLHttpRequest();
		    AJAX_req.open( "GET", 'data/locale/referencia.json', true );
		    AJAX_req.setRequestHeader("Content-type", "application/json");
		    AJAX_req.onreadystatechange = function()
		    {
		        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
		        {
		        	var response = JSON.parse(AJAX_req.responseText);
					return quoteRemover(referencia);

		        };
		    }
		    AJAX_req.send();
		}
	},
	XML: function(css){
		return xmlhttp.responseXML.querySelectorAll(css)[0].childNodes[0].nodeValue;
	}
}


console.log("Lang: " + language);

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

// Generic Villain
//var names = [Luffy, Sanji, Zoro, Nami, Ussop, Robin, Franky, Chopper, GodMode];﻿

var personajesActual; // TODO: poner el significado.

// START AND CLEAR

var start = function(){
	console.log("Game Started");
	escribir("intro", xmlhttp.responseXML.querySelectorAll('inicio > intro')[0].childNodes[0].nodeValue);
	ocultar("inicio");
	mostrar("d1_a");
	mostrar("d1_b");
	checkHUD(); /* No more random name
	if(randomName == true){
		switch(nameNumber){
			case 0: //Luffy
				break;
			case 1: // Sanji
				ocultar("i_intro_luffy");
				mostrar("i_intro_sanji");
				document.getElementById("stats").classList.add('stats-sanji');
				break;
			case 2: // Zoro
				ocultar("i_intro_luffy");
				mostrar("i_intro_zoro");
				document.getElementById("stats").classList.add('stats-zoro');
				break;
			case 3: //Nami
				ocultar("i_intro_luffy");
				mostrar("i_intro_nami");
				document.getElementById("stats").classList.add('stats-nami');
				break;
			case 4: //Ussop
				ocultar("i_intro_luffy");
				mostrar("i_intro_ussop");
				document.getElementById("stats").classList.add('stats-ussop');
				escribir("name", Ussop.longName);
				break;
			case 5: //Robin
 				ocultar("i_intro_luffy");
 				mostrar("i_intro_robin");
 				document.getElementById("stats").classList.add('stats-robin');
 				break;
			case 6: //Franky
 				ocultar("i_intro_luffy");
 				mostrar("i_intro_franky");
 				document.getElementById("stats").classList.add('stats-franky');
 				break;
			case 7: //Chopper TEMPORALMENTE DESHABILITADO
 				ocultar("i_intro_luffy");
 				mostrar("i_intro_chopper");
 				document.getElementById("stats").classList.add('stats-chopper');
 				break;
		}
		escribir("name", names[nameNumber].longName)
		console.log("Name:" + " " + names[nameNumber].name);
	}else{
		nameNumber = 0;
		console.log("Name:" + " " + Luffy.name);
		escribir("name", "Monkey D. Luffy");
	};*/
	nameNumber = 0;
	escribir("name", names[nameNumber].longName);
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

var fight = {
	valores: {
		turnos: 0
	},
	antes: {
		setUp: function(enemy){
			document.getElementById("combatUI").classList.remove('combatUI-inactive');
			escribir("vs_title", names[nameNumber].name + " " + "vs" + " " + enemy.name);
			escribir("at1", names[nameNumber].ataques[0]);
			escribir("at2", names[nameNumber].ataques[1]);
			escribir("at3", names[nameNumber].ataques[2]);
			escribir("at4", names[nameNumber].ataques[3]);
			escribir("at5", names[nameNumber].ataques[4]);
			combatHUD();
		}
	},
	durante: {
		atackAlly: function(ataque){
			names[nameNumber].MP -= names[nameNumber].ataquesCoste[ataque];
			enemy.HP -= names[nameNumber].ataquesValores[ataque];
			expPoints += Math.floor(Math.random() * 100);
		},
		atackEnemy: function(whichEnemy, ataque){
			figth.valores.turnos++;
		}
	},

	despues: {
		endBattle: function(){
			figth.valores.turnos = 0;
		}
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
	document.getElementById("vida").innerHTML = personajeAhora.HP;
	escribir("maxVida", personajeAhora.maxHP);
	escribir("MP", personajeAhora.MP);
	escribir("maxMP", personajeAhora.maxMP);
	document.getElementById("ataque").innerHTML = personajeAhora.grados[gradoActual];
	document.getElementById("nivel_exp").innerHTML = nivelExp;
	document.getElementById("exp").innerHTML = expPoints;
	console.log("HUD revisado");
};

var combatHUD = function(){
	escribir("combatUI-vida", names[nameNumber].HP);
	escribir("combatUI-maxVida", names[nameNumber].maxHP);
	escribir("combatUI-MP", names[nameNumber].MP);
	escribir("combatUI-maxMP", names[nameNumber].maxMP);
	escribir("combatUI-nivelExp", nivelExp);
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
