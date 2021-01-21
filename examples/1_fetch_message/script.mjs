async function pageLoaded() {
  // eslint-disable-next-line no-debugger
  debugger;

  const response = await fetch('message.txt');
  const text = await response.text();
  const dt = document.querySelector('#dynamicText1');
  dt.textContent = text;
}

window.addEventListener('load', pageLoaded);
