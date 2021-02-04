//Checking if cookies is enabled
document.getElementById("cookie").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;

if("cookiesEnabled is " + navigator.cookieEnabled == "cookiesEnabled is true"){
	document.getElementById("cookie").innerHTML = "Cookies is enabled"
}
else{
	document.getElementById("cookie").innerHTML = "Cookies is disabled"
}


//Checking which language is set
if(navigator.language == "sv-SE"){
	document.getElementById("language").innerHTML = "Language is set to swedish";
}
else{
	document.getElementById("language").innerHTML = "Language is not set to swedish";
}

//Checking if javascript is enabled

if(navigator.javaEnabled()){
	document.getElementById("javascript").innerHTML = "Du har java igång."
}
else{
	document.getElementById("javascript").innerHTML ="Du har ej java igång."
}
	





