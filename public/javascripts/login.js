function toggleModeSignIn() {
  const checkBox = document.getElementById("checkbox");
  const passwordInput = document.getElementById("password");

  passwordInput.type = (checkBox.checked === true) ? "text" : "password";
}
