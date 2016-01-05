// Config

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


// Locale

(function(){
	var ymlHttp;

	if(window.XMLHttpRequest){ // Not IE
		ymlHttp = new XMLHttpRequest();
	}else{ // IE 7
		ymlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	switch(config.language){
		case "es-ES":
        case "es":
            ymlHttp.open("GET", "data/locale/es-ES.yaml", true);
            ymlHttp.send();
            break;
        case "en":
        case "en-US":
        case "en-GB":
        case "en-AU":
        case "en-NZ":
        case "en-CA":
        case "en-CB":
        case "en-IN":
        case "en-IE":
        case "en-JM":
        case "en-PH":
        case "en-ZA":
        case "en-TT":
            ymlHttp.open("GET", "data/locale/en-US.yaml", true);
            break;
        default:
            ymlHttp.open("GET", "data/locale/en-US.yaml", true);
            console.warn("We lack for support for your language. If you want to translate see docs/tranlations.md")
    }
	}

	ymlHttp.onreadystatechange = function(){
		if(ymlHttp.readyState == 4 && ymlHttp.status == 200){
			_locale = yaml.load(ymlHttp.responseText);
			console.warn("Error is supposed to happen.");
		}
	};

	ymlHttp.send();
})();
