function pageLoaded() {

	var xhr = new XMLHttpRequest();

  // third parameter is the asynchronous flag.
  // if you don't explicityly specify false, it defaults to true.
  // true = asynchronous
  // false == synchronous
	xhr.open("GET", "message.txt", false);

	xhr.send();

	document.getElementById("dynamicText1").innerHTML = xhr.responseText;

}

window.addEventListener("load", pageLoaded) ;
