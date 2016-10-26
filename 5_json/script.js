
function retrieve() {

	// declare the two variables that will be used
	var xhr = new XMLHttpRequest();

	xhr.onload = function () {
    var data = JSON.parse( xhr.responseText );
    var targetList = document.getElementById("lecturers");

    for (var i of data) {
      var li = document.createElement("li");
      li.textContent = i;
      targetList.appendChild(li);
    }

	};

  xhr.open("GET", "data.json");
	xhr.send();

}

// when the page has finished loading all the elements should
// be in place, so they can be discovered and have events attached
// to them
function pageLoaded() {
	var retrieveButton = document.getElementById("retrieve");
	if (retrieveButton) {
		retrieveButton.addEventListener("click", retrieve, true);
	}
}

window.addEventListener("load", pageLoaded);
