const inputFontSizeCont = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputFontSizeCont.addEventListener('input', changeFontSize);

function changeFontSize() {
   spanText.style.fontSize = inputFontSizeCont.value + 'px';
}