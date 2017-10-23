function pageLoaded() {
	fetch('message.txt')
	.then((response) => {
		return response.text()
	})
	.then((text) => {
		window.dynamicText1.innerHTML = text;
	});
}

window.addEventListener("load", pageLoaded);
