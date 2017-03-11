module.export = {
  parser: 'babel-eslint',
  extends: ['airbnb'].map(require.resolve),
  plugins: [
    'import'
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'max-len': [
      'error',
      {
        ignoreTrailingComments: true,
        code: 100,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'import/prefer-default-export': ['off']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js'
        ]
      }
    }
  },
  env: {
    jest: true
  }
};

