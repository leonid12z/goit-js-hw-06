const cryBtm = document.querySelector('.change-color');
const bodyBtm = document.querySelector('body');
const spanBtm = document.querySelectorAll('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function chanColor(event) {
  const bodyColor = getRandomHexColor();
  bodyBtm.style.backgroundColor = bodyColor;
  spanBtm.textContent = bodyColor
}

cryBtm.addEventListener('click', chanColor);