var fillBars = function(nAY, nEN){
	for(var i = 0; i < 201; i++){
		document.getElementById("UI-ay-hp" + i).classList.add("redPKMN");
		document.getElementById("UI-en-hp" + i).classList.add("redPKMN");
	}
	for(var i1 = 0; i1 < nAY; i1++){
		document.getElementById("UI-ay-hp" + i1).classList.remove("redPKMN");
	}
	for(var i2 =0; i2 < nEN; i2++){
		document.getElementById("UI-ay-hp" + i2).classList.remove("redPKMN");
	}
};

var escribir = function(id,text){
	document.getElementById(id).innerHTML = text;
};

var ocultar = function(id){
	document.getElementById(id).classList.add('hidden');
};

var mostrar = function(id){
	document.getElementById(id).classList.remove('hidden');
};

var randomizer = function(multi){
	return Math.floor(Math.random() * multi);
};

var checkArray = function(objeto, array){
	for(var i = 0; i < array.length; i++){
		if(array[i] === objeto){
			return true;
		}
	}

	return false;
};

var quoteRemover = function(string){
    return string.replace(/['"]+/g, '');
};

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
};


var checkHUD = function(){
	document.getElementById("vida").innerHTML = personajeActual.HP;
	escribir("maxVida", personajeActual.maxHP);
	escribir("MP", personajeActual.MP);
	escribir("maxMP", personajeActual.maxMP);
	document.getElementById("ataque").innerHTML = personajeActual.grados[gradoActual];
	document.getElementById("nivel_exp").innerHTML = nivelExp;
	document.getElementById("exp").innerHTML = expPoints;
};
