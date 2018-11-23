async function pageLoaded() {
	const response = await fetch('message.txt');
	const text = await response.text();
	const dt = document.getElementById("dynamicText1");
	dt.textContent = text;
}

window.addEventListener("load", pageLoaded);
