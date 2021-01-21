import { report } from '../util.mjs';

async function fetchData(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');

  let data;
  if (response.ok) {
    if (contentType.includes('application/json')) {
      data = await response.json();
    }
    if (contentType.includes('text/plain')) {
      data = await response.text();
    }
  }
  if (data) {
    report(data);
  } else {
    report(`${response.status} when loading ${url}`, true);
  }
}

function pageLoaded() {
  const text = document.querySelector('#fetchtext');
  const data = document.querySelector('#fetchdata');
  const error = document.querySelector('#fetcherror');

  text.addEventListener('click', () => fetchData('message.txt'));
  data.addEventListener('click', () => fetchData('data.json'));
  error.addEventListener('click', () => fetchData('imaginary.file'));
}

window.addEventListener('load', pageLoaded);
