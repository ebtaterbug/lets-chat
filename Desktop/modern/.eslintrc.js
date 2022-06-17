module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['serviceWorker.js', 'switcher.js'],
  rules: {
    'max-len': [0],
    'no-shadow': [0],
    'no-return-assign': [0],
    'no-param-reassign': [0],
    'no-prototype-builtins': [0],
    'no-nested-ternary': [0],
    'operator-linebreak': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'jsx-a11y/anchor-is-valid': [0],
  },
};
