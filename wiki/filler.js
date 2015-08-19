// One script to rule them all.

// Time Optimizers

var writing = function(id, text){
	document.getElementById(id).innerHTML = text;
}

/*
 _________  ____  ____  ________   ________  _____  _____  ____  _____   ______  _________  _____   ___   ____  _____  
|  _   _  ||_   ||   _||_   __  | |_   __  ||_   _||_   _||_   \|_   _|.' ___  ||  _   _  ||_   _|.'   `.|_   \|_   _| 
|_/ | | \_|  | |__| |    | |_ \_|   | |_ \_|  | |    | |    |   \ | | / .'   \_||_/ | | \_|  | | /  .-.  \ |   \ | |   
    | |      |  __  |    |  _| _    |  _|     | '    ' |    | |\ \| | | |           | |      | | | |   | | | |\ \| |   
   _| |_    _| |  | |_  _| |__/ |  _| |_       \ \__/ /    _| |_\   |_\ `.___.'\   _| |_    _| |_\  `-'  /_| |_\   |_  
  |_____|  |____||____||________| |_____|       `.__.'    |_____|\____|`.____ .'  |_____|  |_____|`.___.'|_____|\____|
*/

switch(document.getElementById("title").innerHTML){
	case "Monkey D. Luffy":
		writing("","");
		break;
	default:
		writing("title", "404");
		writing("summary", "The page you are looking for doesn't exist.")
}
