module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-unused-variable': true,
  },
};
