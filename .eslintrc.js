module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // always requires parens around arrow function params
    'arrow-parens': ['error', 'always'],

    // always requires arrow function bodies {}
    'arrow-body-style': ['error', 'always'],

    // For string literal function names (see App.vue)
    'object-shorthand': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
