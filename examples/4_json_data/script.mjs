import { report } from '../util.mjs';

async function fetchData() {
  const response = await fetch('data.json');
  if (response.ok) {
    const data = await response.json();
    report(data);
  } else {
    report('No data', true);
  }
}

function pageLoaded() {
  const fetchIt = document.querySelector('#fetchit');
  fetchIt.addEventListener('click', fetchData);
}

window.addEventListener('load', pageLoaded);
