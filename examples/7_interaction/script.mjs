async function checkWord() {
  const word = document.querySelector('#word');
  const result = document.querySelector('#result');
  const message = document.querySelector('#message');

  if (word.value.length === 0) {
    result.textContent = 'Enter a word to check its validity.';
    return;
  }

  const url = `https://webpro.drmatt.dev/words/${word.value}`;
  const response = await fetch(url);
  const data = await response.json();
  result.textContent = '';
  message.textContent = '';
  switch (response.status) {
    case 200:
      result.textContent = word.value + ' is a valid word';
      message.textContent = 'Definition: ';
      break;
    case 400:
      result.textContent = word.value + ' is invalid';
      break;
    case 404:
      result.textContent = word.value + ' is invalid';
      break;
    default:
      result.textContent = 'the word checking service seems not to be available at this time';
      return;
  }
  message.textContent += data.message;
}

function pageLoaded() {
  const word = document.querySelector('#word');
  word.addEventListener('input', checkWord);
}

window.addEventListener('load', pageLoaded);
