
function retrieve() {

  	function success() {
  		document.getElementById("dynamicText1").innerHTML = xhr.responseText;
  	}

  	function failure() {
  		document.getElementById("dynamicText1").innerHTML = "<p>Something went wrong.</p>";
  	}

  	// initialise a request, specifying the HTTP method
  	// to be used and the URL to be connected to.
  	var xhr = new XMLHttpRequest();
  	xhr.open("GET", "message.txt");

    // functions to call for load and error events
  	xhr.addEventListener("load", success);
  	xhr.addEventListener("error", failure);

	  xhr.send();
}

// when the page has finished loading all the elements should
// be in place, so they can be discovered and have events attached
// to them
function pageLoaded() {
	var retrieveButton = document.getElementById("retrieve");
	if (retrieveButton) {
		retrieveButton.addEventListener("click", retrieve);
	}
}

window.addEventListener("load", pageLoaded);
