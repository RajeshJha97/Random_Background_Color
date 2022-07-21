const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];

const container = document.querySelector('.container');
//container.style.background = 'yellow';
const btn = document.querySelector('#btn');
const span = document.querySelector('#color');

btn.addEventListener('click', function () {
  let bgColor = '#';
  for (let i = 0; i < 6; i++) {
    bgColor += color[Math.floor(Math.random() * color.length)];
  }
  container.style.background = bgColor;
  span.textContent = bgColor;
});
