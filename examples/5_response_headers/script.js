function pageLoaded() {
	window.fetchit.addEventListener('click', doFetchIt);
}

const files = [
  "data.json",
  "message.txt"
]

let oneOrZero = 0;

async function doFetchIt() {
  oneOrZero = 1-oneOrZero;
	const response = await fetch( files[ oneOrZero ] );
  //const response = await fetch('message.txt');
	let data

  let contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = ["That's not JSON!", "Oh no!"]
  }

  for (const i of data) {
    const li = document.createElement("li");
    li.textContent = i;
    window.lecturers.appendChild(li);
  }
}

window.addEventListener("load", pageLoaded);
