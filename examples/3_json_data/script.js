function pageLoaded() {
	window.fetchit.addEventListener('click', doFetchIt);
}

async function doFetchIt() {
	const response = await fetch('data.json');
	const data = await response.json();

  for (const i of data) {
    const li = document.createElement("li");
    li.textContent = i;
    window.lecturers.appendChild(li);
  }
}

window.addEventListener("load", pageLoaded);
