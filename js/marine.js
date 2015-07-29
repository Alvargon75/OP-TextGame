/* MARINE */
﻿/*
Cosas que copiar comunes:

	document.getElementById("").innerHTML = "";
	document.getElementById("").classList.add('');
	document.getElementById("").classList.remove('');
	document.getElementById("").classList.add('hidden');
	document.getElementById("").classList.remove('hidden');

*/
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
			document.getElementById("d3").innerHTML = "Ya lo decía yo.";
		}
		else {
			document.getElementById("d3").innerHTML = "No me mientas.";
		}
	}
}
var fullbodyContinua = function(){
	document.getElementById("d3").innerHTML = "Fullbody te mató.<br/> <span>FIN</span>";
	document.getElementById("m1_op").classList.add('hidden');
}
