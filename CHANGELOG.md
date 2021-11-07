## Changes

### [1.3.3] - 2021-11-06
- Fixes problem with the toggle button by adding the attribute `type="button"` to the jQuery version of the script.

### [1.3.2] - 2021-11-06
- Added script working with jQuery or Cash.

### [1.3.1] - 2021-10-31
- Fixes the problem that autofill hides the toggle icon.
- Added the `aria-pressed` attribute.
- Updated the demos ([Bootstrap 4](https://coliff.github.io/bootstrap-show-password-toggle/tests/bootstrap4-sign-in/), [Bootstrap 5](https://coliff.github.io/bootstrap-show-password-toggle/tests/bootstrap5-sign-in/))

### [1.3.0] - 2021-10-30
- Works with multiple `input[type=password]`.
- The `aria-label` of the toggle button can be customized adding `data-show` and `data-hide` attributes to the password input.
- The toggle button is added by JavaScript, remove existing `<button>` tags.
- The toggle button works more stable.
- The toggle button is always visible.
