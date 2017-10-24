function pageLoaded() {
	window.fetchit.addEventListener('click', doFetchIt);
}

const files = [
  "imaginary.file",
  "message.txt",
  "data.json"
]

let index = files.length;

async function doFetchIt() {

  // cycle between 1, 2 & 3 each time the function is called
  index = (index + 1) % files.length;

  // load a file
	const response = await fetch( files[ index ] );

	let data;
  if (response.ok) {
    let contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      // if we have a JSON object, use it
      data = await response.json();
    } else {
      // if it's not JSON, create an array with the response in
      data = [ await response.text() ];
    }
  } else {
    // if it's an error, say what the error was
    data = [`${response.status} when loading ${files[index]}`];
  }

  console.log(index, data, response);
  for (const i of data) {
    const li = document.createElement("li");
    li.textContent = i;
    window.lecturers.appendChild(li);
  }
}

window.addEventListener("load", pageLoaded);
