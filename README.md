# eslint-config-elderfo

This is my eslint configuration that I used on my projects. This config extends the linting rules from [airbnb/javascript](https://github.com/airbnb/javascript).

[![Build Status](https://travis-ci.org/elderfo/eslint-config-elderfo.svg?branch=master)](https://travis-ci.org/elderfo/eslint-config-elderfo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

Extend `elderfo` in your `.eslintrc` file:

```json
{
  "extends":"elderfo"
}
```

## Rule Differences

| Rule | Setting | Description |
| --- | --- | --- |
| `no-underscore-dangle` | off | Simply a preference of mine |
| `max-len` | error | Has the following rules applied: </br> `ignoreTrailingComments: true`</br>`code: 100`</br>`ignoreStrings: true`</br>`ignoreComments: true`</br>`ignoreUrls: true` |
| `react/jsx-filename-extension` | error | Except for extensions: <br />`.js`<br /> `.jsx` |
