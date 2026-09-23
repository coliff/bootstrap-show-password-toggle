/*!
 * Bootstrap Show Password Toggle v1.4.2
 * Copyright 2020-2026 C.Oliff
 * Licensed under MIT (https://github.com/coliff/bootstrap-show-password-toggle/blob/main/LICENSE)
 */

const ShowPasswordToggle = document.querySelector("[type='password']");
const togglePasswordButton = document.getElementById("toggle-password");

if (ShowPasswordToggle && togglePasswordButton) {
  const togglePassword = function () {
    if (ShowPasswordToggle.type === "password") {
      ShowPasswordToggle.type = "text";
      togglePasswordButton.setAttribute("aria-label", "Hide password.");
    } else {
      ShowPasswordToggle.type = "password";
      togglePasswordButton.setAttribute(
        "aria-label",
        "Show password as plain text. Warning: this will display your password on the screen."
      );
    }
  };

  // Reveal the toggle the first time the field is focused (by mouse, touch or keyboard)
  // and only attach the click handler once, so repeated focus/clicks don't stack listeners.
  ShowPasswordToggle.addEventListener(
    "focus",
    function () {
      ShowPasswordToggle.classList.add("input-password");
      togglePasswordButton.classList.remove("d-none");
      togglePasswordButton.addEventListener("click", togglePassword);
    },
    { once: true }
  );
}
