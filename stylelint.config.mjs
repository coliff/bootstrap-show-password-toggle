import bootstrapConfig from "stylelint-config-twbs-bootstrap";

/** @type {import('stylelint').Config} */
const config = {
  ...bootstrapConfig,
  ignoreFiles: ["**/*.css"],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    ...bootstrapConfig.rules,
    "annotation-no-unknown": true,
    "at-rule-descriptor-no-unknown": true,
    "at-rule-descriptor-value-no-unknown": true,
    "at-rule-no-deprecated": true,
    "at-rule-prelude-no-invalid": true,
    "block-no-redundant-nested-style-rules": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-no-important": null,
    "declaration-property-value-keyword-no-deprecated": true,
    "declaration-property-value-no-unknown": true,
    "max-nesting-depth": 2,
    "media-feature-name-value-no-unknown": true,
    "media-query-no-invalid": true,
    "media-type-no-deprecated": true,
    "nesting-selector-no-missing-scoping-root": true,
    "no-descending-specificity": true,
    "no-invalid-position-at-import-rule": true,
    "no-invalid-position-declaration": true,
    "no-unknown-animations": true,
    "no-unknown-custom-media": true,
    "property-no-deprecated": true,
    "selector-max-id": null,
    "selector-no-qualifying-type": null,
    "syntax-string-no-invalid": true,
  },
};

export default config;
