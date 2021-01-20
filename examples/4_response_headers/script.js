'use strict';

function pageLoaded() {
  const fetchText = document.querySelector('#fetchtext');
  const fetchData = document.querySelector('#fetchdata');
  const fetchError = document.querySelector('#fetcherror');

  fetchText.addEventListener('click', () => fetchFile('message.txt'));
  fetchData.addEventListener('click', () => fetchFile('data.json'));
  fetchError.addEventListener('click', () => fetchFile('imaginary.file'));
}

function report(arr) {
  const list = document.getElementById('responses');
  for (const i of arr) {
    const li = document.createElement('li');
    li.textContent = i;
    list.append(li);
  }
}

async function fetchFile(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');

  if (contentType.includes('application/json')) {
    return report(await response.json());
  }

  if (contentType.includes('text/plain')) {
    return report([await response.text()]);
  }

  return report([`${response.status} when loading ${url}`]);
}

window.addEventListener('load', pageLoaded);
