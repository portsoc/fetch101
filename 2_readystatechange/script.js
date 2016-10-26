function pageLoaded() {

	// declare the two variables that will be used
	var xhr, target;

	// find the element that should be updated
	target = document.getElementById("dynamicText1");

	// create a request object
	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// add the retrieved content to it using
			// the innerHTML property
			target.innerHTML = xhr.responseText;
		} else {
			target.innerHTML = "<p>Something went wrong.</p>";
		}
	}

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "message.txt", true);
	xhr.send();

}

window.addEventListener("load", pageLoaded);
