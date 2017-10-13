function pageLoaded() {

	function success() {
		document.getElementById("dynamicText1").innerHTML = xhr.responseText;
	}

	function failure() {
		document.getElementById("dynamicText1").innerHTML = "<p>Something went wrong.</p>";
	}

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "message.txt", true);

  // functions to call for load and error events
	xhr.addEventListener("load", success);
	xhr.addEventListener("error", failure);

  // make it so
	xhr.send();

}

window.addEventListener("load", pageLoaded);
