module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-typescript", "plugin:prettier/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
  },
};
