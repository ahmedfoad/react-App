// import js from "@eslint/js";
// import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";

// export default [
//   js.configs.recommended,
//   {
//     files: ["**/*.{js,jsx}"],
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//     },
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//       },
//       globals: {
//         window: "readonly",
//         document: "readonly",
//         console: "readonly",
//       },
//     },
//     rules: {
//       ...react.configs.recommended.rules,
//       ...reactHooks.configs.recommended.rules,
//       "react/prop-types": "off", // disables PropTypes validation requirement
//       "react/react-in-jsx-scope": "off", // not needed with React 19 JSX transform
//       "no-undef": "error", // this is the rule that catches `imgddd`
//       "no-unused-vars": "off", // disables unused-variable checking entirely
//     },
//     settings: {
//       react: { version: "detect" },
//     },
//   },
// ];
