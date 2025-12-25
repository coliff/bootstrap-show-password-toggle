/*!
 * Bootstrap Show Password Toggle v1.4.1
 * Copyright 2020-2024 C.Oliff
 * Licensed under MIT (https://github.com/coliff/bootstrap-show-password-toggle/blob/main/LICENSE)
 */

var ShowPasswordToggle = document.querySelector("[type='password']");
ShowPasswordToggle.classList.add("input-password");
document.getElementById("toggle-password").classList.remove("d-none");
ShowPasswordToggle.onclick = function () {
  var passwordInput = document.querySelector(".input-password");
  var togglePasswordButton = document.getElementById("toggle-password");

  togglePasswordButton.addEventListener("click", togglePassword);
  function togglePassword() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButton.setAttribute("aria-label", "Hide password.");
    } else {
      passwordInput.type = "password";
      togglePasswordButton.setAttribute(
        "aria-label",
        "Show password as plain text. Warning: this will display your password on the screen."
      );
    }
  }
};
