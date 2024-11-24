// export default { extends: ["@commitlint/config-conventional"] };

const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "ui", "ux", "refactor", "test", "chore"],
    ],
  },
};

export default Configuration;
