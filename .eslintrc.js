module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "vue/multi-word-component-names": 0,
  },
};
// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
// };
