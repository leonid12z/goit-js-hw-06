const inputMy = document.querySelector('input#validation-input');
function validationInput() {
   if (inputMy.value.length === Number(inputMy.dataset.length)) {
      inputMy.classList.add('valid');
      inputMy.classList.remove('invalid');
   } else {
      inputMy.classList.add('invalid');
      inputMy.classList.remove('valid');
   }
}

inputMy.addEventListener('blur', validationInput);