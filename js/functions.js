/*
Cosas que copiar comunes:

	document.getElementById("").innerHTML = "";
	document.getElementById("").classList.add('');
	document.getElementById("").classList.remove('');

*/
var start = function(){
	console.log("Game Started");
	document.getElementById("intro").innerHTML = "Te encuentras en un barril en medio del mar, a lo lejos ves dos barcos, uno con una enseña pirata y otro de la marina. <br/> ¿A cuál decides pedir ayuda?";
	document.getElementById("inicio").classList.add('hidden');
	document.getElementById("d1_a").classList.remove('hidden');
	document.getElementById("d1_b").classList.remove('hidden');
}
var marine = function(){

}
var pirata = function(){

}