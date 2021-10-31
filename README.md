[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/slackero/bootstrap-show-password-toggle/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@slackero/bootstrap-show-password-toggle)](https://www.npmjs.com/package/@slackero/bootstrap-show-password-toggle)

# Show Password Toggle

A show password as text toggle for Bootstrap forms

- Native-looking UI
- Vanilla JavaScript with no dependencies
- Base64 encoded SVG icons (no external images or fonts required)
- Graceful fallback for browsers with JavaScript disabled
- Works with Bootstrap 4 and 5
- Only 1KB gzipped

![show password toggle](https://christianoliff.com/img/2020/show-password-toggle-anim.gif)

## Quick Start

- [Download the latest release](https://github.com/slackero/bootstrap-show-password-toggle/releases)
- Clone the repo `git clone https://github.com/slackero/bootstrap-show-password-toggle.git`
- Install with [npm](https://www.npmjs.com/package/@slackero/bootstrap-show-password-toggle) `npm i @slackero/bootstrap-show-password-toggle`

## Usage

1. Include the `show-password-toggle.css` in your CSS

2. Wrap the password input in an `input-group` div as follows:

```html
<div class="input-group">
  <input type="password"
         class="form-control rounded"
         required
         data-show="Show password as plain text."
         data-hide="Hide password."
  >
</div>
```

3. Load the `show-password-toggle.js` after the form

I highly recommend adding the attributes: `spellcheck="false"` and `autocapitalize="off"` to the password input so that when the password is displayed in plain text the input is not auto-corrected, capitalized or spellchecked (to avoid red squiggly line underneath).

You should also add `id="current-password"` and `autocomplete="current-password"` to help browsers autocomplete the form.

## Demo

- [Bootstrap 4 Demo](https://slackero.github.io/bootstrap-show-password-toggle/tests/bootstrap4-sign-in/)
- [Bootstrap 5 Demo](https://slackero.github.io/bootstrap-show-password-toggle/tests/bootstrap5-sign-in/)

## Browser Support

Works well with all the browsers [supported by Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/browsers-devices/#supported-browsers)

## FAQS

Q. **Can I change the show password icon?**

A. You could change the icon displayed by replacing the `.input-password[type="password"]` [Base64 encoded](https://yoksel.github.io/url-encoder/) background image. SVG is recommended.

## Changes

### [1.3.1] - 2021-10-31
- Fixes the problem that autofill hides the toggle icon.
- Added the `aria-pressed` attribute.
- Updated the demos ([Bootstrap 4](https://slackero.github.io/bootstrap-show-password-toggle/tests/bootstrap4-sign-in/), [Bootstrap 5](https://slackero.github.io/bootstrap-show-password-toggle/tests/bootstrap5-sign-in/))

### [1.3.0] - 2021-10-30
- Works with multiple `input[type=password]`.
- The `aria-label` of the toggle button can be customized adding `data-show` and `data-hide` attributes to the password input.
- The toggle button is added by JavaScript, remove existing `<button>` tags.
- The toggle button works more stable.
- The toggle button is always visible.

## Known Issues

- Browsers without [Element.after()](https://developer.mozilla.org/en-US/docs/Web/API/Element/after#browser_compatibility) are not supported.

## Credits and Thanks

- MDO and Bootstrap team for the [icons](https://icons.getbootstrap.com/icons/eye-slash/)
- Sam Dutton at Google for the idea and initial JavaScript from the '[Sign-in form Best Practises](https://web.dev/sign-in-form-best-practices/)' article
