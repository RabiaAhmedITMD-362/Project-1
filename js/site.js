const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();
  
  if(nameValue === '') {
    setErrorFor(name, 'Name cannot be blank');
  } else {
    setSuccessFor(name);
  }
  
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  
  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  
  if(confirmValue === '') {
    setErrorFor(confirm, 'Confirm password cannot be blank');
  } else if(passwordValue !== confirmValue) {
    setErrorFor(confirm, 'Passwords does not match');
  } else{
    setSuccessFor(confirm);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  // add error message inside small tag
  small.innerText = message;
  
  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  
  // remove error class
  formControl.className = 'form-control success';
}

function isEmail(email) {
  // regex pattern for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
