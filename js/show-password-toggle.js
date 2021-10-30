let ShowPasswordToggles = document.querySelectorAll("input[type='password']");
let ShowPasswordTogglesLength = ShowPasswordToggles.length;
if (ShowPasswordTogglesLength) {
  for (let i = 0; i < ShowPasswordTogglesLength; ++i) {
    const passwordInput = ShowPasswordToggles[i];
    passwordInput.classList.add('input-password');
    const togglePasswordButtonLabels = {
      show: passwordInput.dataset.show || 'Show password as plain text. Warning: this will display your password on the screen.',
      hide: passwordInput.dataset.hide || 'Hide password.'
    };
    let togglePasswordButton = document.createElement('button');
    togglePasswordButton.type = 'button';
    togglePasswordButton.classList.add('toggle-password');
    togglePasswordButton.setAttribute('aria-label', togglePasswordButtonLabels.show);
    togglePasswordButton.setAttribute('aria-pressed', 'false');
    togglePasswordButton.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.classList.add('password-visible');
        togglePasswordButton.setAttribute('aria-label', togglePasswordButtonLabels.hide);
        togglePasswordButton.setAttribute('aria-pressed', 'true');
      } else {
        passwordInput.type = 'password';
        togglePasswordButton.classList.remove('password-visible');
        togglePasswordButton.setAttribute('aria-label', togglePasswordButtonLabels.show);
        togglePasswordButton.setAttribute('aria-pressed', 'false');
      }
    });
    passwordInput.after(togglePasswordButton);
  }
}
