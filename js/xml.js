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
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

console.log("Lang: " + language);

if(language == "es-ES" || "es"){
	xmlhttp.open("GET", "data/locale/es-ES.xml", true);
	xmlhttp.send();
}else if(language == "en-US" || "en-GB" || "en-AU" || "en-NZ" || "en-CA" || "en-CB" || "en-IN" || "en-IE" || "en-JM" || "en-PH" || "en-ZA" || "en-TT" || "en"){
	xmlhttp.open("GET", "data/locale/en-US.xml", true);
	xmlhttp.send();
}else{
	xmlhttp.open("GET", "data/locale/en-US.xml", true);
	xmlhttp.send();
	console.warn("We lack for support for your language. If you want to translate see docs/tranlations.md")
}

var readXML = function(css){
	return xmlhttp.responseXML.querySelectorAll(css)[0].childNodes[0].nodeValue;
}
