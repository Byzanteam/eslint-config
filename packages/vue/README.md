# @byzanteam/eslint-config-vue

Byzanteam sharable ESLint configuration for Vue.

## Usage

### JavaScript

```sh
$ npm install -D eslint @byzanteam/eslint-config-javascript @byzanteam/eslint-config-vue
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@byzanteam/javascript',
    '@byzanteam/vue',
  ],
}
```

### TypeScript

```sh
$ npm install -D eslint @byzanteam/eslint-config-typescript @byzanteam/eslint-config-vue
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@byzanteam/typescript',
    '@byzanteam/vue',
  ],
  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: '@typescript-eslint/parser',
  },
}

```
