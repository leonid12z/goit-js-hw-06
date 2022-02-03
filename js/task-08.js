const loginFormLabel = document.querySelector('form.login-form');


function loginForm(event) {
   event.preventDefault();


const {
   elements: { email, password } } = event.currentTarget
   
   if (email.value === '' || password.value === '') {
      return alert('Пожалуйста, заполните поля "Email" и "Password"');
   } else {
      const name = {
         nameEmail: email.value,
         namePassword: password.value,
      };

      console.log(name)

      event.currentTarget.reset();
   }
}   

loginFormLabel.addEventListener('submit', loginForm);