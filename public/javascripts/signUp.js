function toggleModeSignUp() {
  const checkBox = document.getElementById("checkbox");
  const passwordInput = document.getElementById("password");
  const password2Input = document.getElementById("password2");

  passwordInput.type = (checkBox.checked === true) ? "text" : "password";
  password2Input.type = (checkBox.checked === true) ? "text" : "password";
}
