import bootstrapConfig from "stylelint-config-twbs-bootstrap";

/** @type {import('stylelint').Config} */
const config = {
  ...bootstrapConfig,
  ignoreFiles: ["**/*.css"],
  rules: {
    ...bootstrapConfig.rules,
    "declaration-no-important": null,
    "selector-max-id": null,
    "selector-no-qualifying-type": null,
  },
};

export default config;
