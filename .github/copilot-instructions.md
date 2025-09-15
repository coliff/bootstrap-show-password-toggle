# Copilot Instructions

- Code is formatted with Prettier.
- Code is linted with ESLint v8.57.1
- All docs and code is written in US English.

## GitHub Actions

- The GitHub Actions workflows should be placed in the .github/workflows directory.
- The workflows should be named `<workflow-name>.yml`.
- All GitHub Actions should be pinned versions to avoid breaking changes (SHA-1).
- If using actions/checkout, it should have `persist-credentials: false` set.
