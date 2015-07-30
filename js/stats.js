// MECANISMOS PRINCIPALES DE COMBATE

// PELEA GENERAL

var dTurno;
var dProvocadoV;
var dProvocadoH;
var nivelExp = 1;
var expPoints = 1;

// RECUPERACIÓN

var recuperar = function(vida, dVida){
	if(vida == dVida){
		console.log("Fail");
	} else {
		for(vida; vida < dVida; vida++){
			console.log("Vida en:" + vida);
		}
	}
}

// HUD

var checkHUD = function(){
	document.getElementById("vida").innerHTML = luffyVida"/500";
	document.getElementById("ataque").innerHTML = dañoL;
	document.getElementById("nivel_exp").innerHTML = nivelExp;
	document.getElementById("exp").innerHTML = expPoints;
}

var expChecking = false;

// VILLANOS

var ataqueEstandar = function(dañoV, multi, objetivoV){
	dProvocadoV = Math.floor(Math.random * multi + dañoV);
	objetivoV -= dProvocadoV;
}

// LUFFY
var luffyVida = 500;
var dañoL = 5;
var ataqueL = function(dañoL, multi){
	return Math.floor(Math.random * multi + dañobL);
}