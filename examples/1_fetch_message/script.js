async function pageLoaded() {
	const response = await fetch('message.txt');
	const text = await response.text();
	window.dynamicText1.innerHTML = text;
}

window.addEventListener("load", pageLoaded);
