module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import'],
  rules: {
    'no-underscore-dangle': 'off',
    'max-len': [
      'error',
      {
        ignoreTrailingComments: true,
        code: 100,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  env: {
    jest: true,
    es6: true,
    node: true,
    browser: true,
  },
};
