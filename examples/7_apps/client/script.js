async function doFetchIt() {
    // get handles on all of the ui elements
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const out = document.getElementById("out");

    // prep the URL with parameters
    const url = `/add?a=${n1.value}&b=${n2.value}`;

    // request result from server 
    const response = await fetch(url);

    // extract result body 
    const result = await response.json();

    // put the result in the page
	out.textContent = result;
}

function pageLoaded() {
	document.getElementById("n1").addEventListener('input', doFetchIt);
	document.getElementById("n2").addEventListener('input', doFetchIt);
}

window.addEventListener("load", pageLoaded);

