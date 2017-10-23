function pageLoaded() {
	window.fetchit.addEventListener('click', doFetchIt);
}

async function doFetchIt() {
	const response = await fetch('message.txt');
	const text = await response.text();
	document.getElementById("dynamicText1").innerHTML = text;
}

window.addEventListener("load", pageLoaded);
