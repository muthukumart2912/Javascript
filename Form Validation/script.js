const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmpassword");
const error = document.querySelector(".error");
//const form = document.getElementById('form')

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const userNameValue = username.value.trim();
  const emailVal = email.value.trim();
  const passValue = password.value.trim();
  const confpassVal = confirmPass.value.trim();

  if (userNameValue === "") {
    setError(username , "Username cannot be empty");
  } else {
    setSuccess(username);
  }
}
function setError(input ,message) {
 const controlForm = input.parentElement;
    //controlForm.clasName = 'control-form fail'
    error.textContent = message;
}
function setSuccess(input) {
    const controlForm = input.parentElement;
    controlForm.clasName = 'control-form valid'
    
}
