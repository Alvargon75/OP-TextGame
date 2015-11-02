/*
██╗  ██╗███╗   ███╗██╗         ██████╗  █████╗ ██████╗ ███████╗██╗███╗   ██╗ ██████╗
╚██╗██╔╝████╗ ████║██║         ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║████╗  ██║██╔════╝
 ╚███╔╝ ██╔████╔██║██║         ██████╔╝███████║██████╔╝███████╗██║██╔██╗ ██║██║  ███╗
 ██╔██╗ ██║╚██╔╝██║██║         ██╔═══╝ ██╔══██║██╔══██╗╚════██║██║██║╚██╗██║██║   ██║
██╔╝ ██╗██║ ╚═╝ ██║███████╗    ██║     ██║  ██║██║  ██║███████║██║██║ ╚████║╚██████╔╝
╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝

*/

var xmlhttp;
var language = window.navigator.userLanguage || window.navigator.language;;
var config;


if(window.XMLHttpRequest){ //Modern Browsers
    xmlhttp = new XMLHttpRequest();
}else{ // IE
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

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
};

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
// Mostrar toda la información recopilada

console.info("Data: \n  Lang: " + language + "\n  Browser: " + navigator.sayswho + "\n  DevMode: ");
