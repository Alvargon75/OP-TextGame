var yamlRequest = function(url, callback){
	var ymlHttp;

	if(window.XMLHttpRequest){ // Not IE
		ymlHttp = new XMLHttpRequest();
	}else{ // IE 7
		ymlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	ymlHttp.open("GET", url, true);

	ymlHttp.onreadystatechange = function(){
		if(ymlHttp.readyState == 4 && ymlHttp.status == 200){
			var data = yaml.load(ymlHttp.responseText)
			console.log(ymlHttp.responseText);
			console.log(data)
			callback && callback(data);
		}
	};

	ymlHttp.send();
};

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
	}
};

ymlHttp.send();