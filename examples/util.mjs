export function report(data, error = false, target = '#responses') {
  if (typeof data === 'string') data = [data];

  debugger;
  const list = document.querySelector(target);
  for (const i of data) {
    const li = document.createElement('li');
    li.textContent = i;
    li.classList.toggle('error', error);
    list.append(li);
  }
}
