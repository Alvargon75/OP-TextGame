/*
███╗   ███╗███████╗ ██████╗ █████╗ ███╗   ██╗██╗███████╗███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔════╝██╔════╝██╔══██╗████╗  ██║██║██╔════╝████╗ ████║██╔═══██╗██╔════╝
██╔████╔██║█████╗  ██║     ███████║██╔██╗ ██║██║███████╗██╔████╔██║██║   ██║███████╗
██║╚██╔╝██║██╔══╝  ██║     ██╔══██║██║╚██╗██║██║╚════██║██║╚██╔╝██║██║   ██║╚════██║
██║ ╚═╝ ██║███████╗╚██████╗██║  ██║██║ ╚████║██║███████║██║ ╚═╝ ██║╚██████╔╝███████║
╚═╝     ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝
*/
// PELEA GENERAL

var dTurno;
var dProvocadoV;
var dProvocadoH;
var nivelExp = 1;
var expPoints = 1;
var luffyVida = 500;
var danoL = 5;

// START AND CLEAR

var start = function(){
	console.log("Game Started");
	writer("intro","Te encuentras en un barril en medio del mar, a lo lejos ves dos barcos, uno con una ensena pirata y otro de la marina. <br/> ¿A cuál decides pedir ayuda?");
	hide("inicio");
	show("d1_a");
	show("d1_b");
	checkHUD();
	if(randomName == true){
		nameNumber = randomizer(4);
		console.log("Name:" + " " + names[nameNumber]);
	}else{
		nameNumber = 0;
		console.log("Name:" + " " + names[nameNumber]);
	};
	hide("nameChange");
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
// RANDOM NAME

var randomName = false;
var nameChange = function(){
	randomName = true;
}
var nameNumber;
var names = ["Luffy","Sanji", "Zorro", "Ace"];

// CUSTOM ATTACKS (POR HACER)

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
	document.getElementById("vida").innerHTML = luffyVida;
	document.getElementById("ataque").innerHTML = danoL;
	document.getElementById("nivel_exp").innerHTML = nivelExp;
	document.getElementById("exp").innerHTML = expPoints;
	console.log("HUD revisado");
};

var expChecking = false;

// ATAQUES

var ataqueEstandar = function(danoV, multi, objetivoH){
	dProvocadoV = Math.floor(Math.random() * multi + danoV);
	objetivoH -= dProvocadoV;
};

var ataqueL = function(danoL, multi){
	dProvocadoH = Math.floor(Math.random() * multi + danoL);
};

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

var luchaAlvida = function(){
	var atacar = true;
	var danoGolpeLuffy;
	var danoGolpeAlvida;
	var danoTotalL = 0;
	var danoTotalA = 0;
	while(atacar === true){
		if(danoTotalL >= 100){
			console.log("CHP: Alvida murió.");
			writer("a4","");
			atacar = false;
		}else if(luffyVida === 0){
			writer("a4","Perdiste contra Alvida.<br/> <span>FIN</span>");
			atacar = false;
		}else{
			var danoGolpeLuffy = ataqueL(5, 1);
			var danoGolpeAlvida = ataqueEstandar(2, 1, luffyVida);
			AlVida -= danoGolpeLuffy;
			luffyVida -= danoGolpeAlvida;
			checkHUD();
		};
	};
};

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
	Water /
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
