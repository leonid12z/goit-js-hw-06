const follows = {
   input: document.querySelector('input#name-input'),
   span: document.querySelector('span#name-output'),
};

follows.input.addEventListener("input", onInputMeaning);

function onInputMeaning() {
   if (follows.input.value === '') {
      follows.span.textContent = 'Anonymous'
   }
   else { follows.span.textContent = follows.input.value }
}