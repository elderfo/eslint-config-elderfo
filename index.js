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
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'class-methods-use-this': ['off'],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
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
