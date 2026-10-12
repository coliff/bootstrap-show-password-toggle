# Accessibility

We want Bootstrap Show Password Toggle to be usable by everyone, including people who use assistive technologies such as screen readers, voice control, screen magnifiers and keyboard-only navigation.

## Our approach

- The toggle is a native `<button type="button">`, so it is focusable and operable with the keyboard (<kbd>Tab</kbd>, <kbd>Enter</kbd> and <kbd>Space</kbd>).
- The button has an accessible name via `aria-label`, which is updated when toggled so screen reader users know whether the password will be shown or hidden.
- The show and hide icons are applied with CSS, so they don't add noise for screen reader users.
- The demo pages are checked with [pa11y](https://pa11y.org) (`npm run pa11y`) and [HTMLHint](https://htmlhint.com) (`npm run html-lint`).

We aim to conform to the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) at level AA.

## Reporting an accessibility issue

If you find an accessibility barrier, please [open an issue](https://github.com/coliff/bootstrap-show-password-toggle/issues/new) and include:

- what you were trying to do and what happened instead
- the browser, operating system and assistive technology (with versions) you were using
- a link to, or a minimal example of, the page where the issue occurs

Pull requests that improve accessibility are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
