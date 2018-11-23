function pageLoaded() {
	fetch('message.txt')
		.then((response) => {
			return response.text()
		})
		.then((text) => {
			const dt = document.getElementById("dynamicText1");
			dt.textContent = text;
		});
}

window.addEventListener("load", pageLoaded);
