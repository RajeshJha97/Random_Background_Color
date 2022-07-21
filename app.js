const color = ['red', 'green', 'yellow', 'pink', 'purple'];

const container = document.querySelector('.container');
//container.style.background = 'yellow';
const btn = document.querySelector('#btn');
const span = document.querySelector('#color');

btn.addEventListener('click', function () {
  let bgColor = Math.floor(Math.random() * color.length);
  container.style.background = color[bgColor];
  span.textContent = color[bgColor];
});
