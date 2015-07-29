/*
Cosas que copiar comunes:

	document.getElementById("").innerHTML = "";
	document.getElementById("").classList.add('');
	document.getElementById("").classList.remove('');
	document.getElementById("").classList.add('hidden');
	document.getElementById("").classList.remove('hidden');

*/
var start = function(){
	console.log("Game Started");
	document.getElementById("intro").innerHTML = "Te encuentras en un barril en medio del mar, a lo lejos ves dos barcos, uno con una enseña pirata y otro de la marina. <br/> ¿A cuál decides pedir ayuda?";
	document.getElementById("inicio").classList.add('hidden');
	document.getElementById("d1_a").classList.remove('hidden');
	document.getElementById("d1_b").classList.remove('hidden');
}
var marine = function(){
	document.getElementById("pirata_marine").innerHTML = "Decides ir con el barco de los marines. Allí encuentras al Teniente Fullbody que te recibe amablemente. Te invita a ir con el hasta la Villa de las Conchas o unirte a la Marina. <br /> ¿Qué eliges?";
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2m_a").classList.remove('hidden');
	document.getElementById("d2m_b").classList.remove('hidden');
}	
var pirata = function(){
	document.getElementById("pirata_marine").innerHTML = "No sabes por qué pero no quieres ir con los marines, prefieres ir con los piratas. Remas el barril hasta el barco pirata y escalas hasta arriba. <br /> Allí ves a la capitana que te quiere ejecutar. <br /> ¿Vas a morir o a luchar?";
	document.getElementById("d1_a").classList.add('hidden');
	document.getElementById("d1_b").classList.add('hidden');
	document.getElementById("d2p_a").classList.remove('hidden');
	document.getElementById("d2p_b").classList.remove('hidden');
}