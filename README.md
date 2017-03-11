# eslint-config-elderfo
This is my eslint configuration that I used on my projects. This config extends the linting rules from [airbnb/javascript](https://github.com/airbnb/javascript).

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
