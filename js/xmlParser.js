var xmlhttp;
var xmlDoc;
var i = 0;

if(window.XMLHttpRequest){ //Modern Browsers
    xmlhttp = new XMLHttpRequest();
}else{ // IE
    xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","data.xml", true);
xmlhttp.send();
xmlDoc = xmlhttp.responseHTML;

var aliados = xmlDoc.getElementsByTagName('aliados');
var villanos = xmlDoc.getElementsByTagName('villanos');
var arcos = xmlDoc.getElementsByTagName('arcos');

var writeWiki = function(){
    
}
