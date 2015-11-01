var jsonRequest = function(url, callback){
	var jsonHttp;
	
	if(window.XMLHttpRequest){ // Not IE
		jsonHttp = new XMLHttpRequest();
	}else{ // IE 7
		jsonHttp = ActiveXObject("Microsoft.XMLHTTP");
	}
	
	jsonHttp.open("GET", url, true);
	
	jsonHttp.onreadystatechange = function(){
		if(jsonHttp.readyState == 4 && jsonHttp.status == 200){
			var data = JSON.parse(jsonHttp.responseText);
			callback && callback(data);
		}
	};
	
	jsonHttp.close();
};
