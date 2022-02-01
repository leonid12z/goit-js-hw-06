const cry = {
  button: document.querySelector('button.change-color'),
  span: document.querySelector('span.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBody = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  cry.span.textContent = getRandomHexColor();
};

cry.button.addEventListener('click', changeColorBody);
