function pageLoaded() {
	window.fetchit.addEventListener('click', doFetchIt);
}

async function doFetchIt() {
	const response = await fetch('https://gist.githubusercontent.com/ear1grey/070571c34b914ee468e421aa28cbed26/raw/7aefbd8de4c746d5692890441f3e6ecf90168514/data.json');

  const data = await response.json();

  console.log(data);

  for (const i of data) {
    const li = document.createElement("li");
    li.textContent = i;
    document.getElementById("numberlist").appendChild(li);
  }
}

window.addEventListener("load", pageLoaded);
