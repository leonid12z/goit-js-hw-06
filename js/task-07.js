const inputFontSizeCont = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

spanText.style.fontSize = `${inputFontSizeCont.value}px`

const changeFontSize = event => {
   spanText.style.fontSize = `${inputFontSizeCont.value}px`
}

inputFontSizeCont.addEventListener('input', changeFontSize);