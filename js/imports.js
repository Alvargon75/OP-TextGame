# Config

var config;

(function(){
	var ymlHttp;

	if(window.XMLHttpRequest){ // Not IE
		ymlHttp = new XMLHttpRequest();
	}else{ // IE 7
		ymlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	ymlHttp.open("GET", "config.yaml", true);

	ymlHttp.onreadystatechange = function(){
		if(ymlHttp.readyState == 4 && ymlHttp.status == 200){
			config = yaml.load(ymlHttp.responseText);
			console.warn("Error is supposed to happen.");
		}
	};

	ymlHttp.send();
})();
