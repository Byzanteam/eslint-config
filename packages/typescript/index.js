module.exports = {
  extends: [
    '@byzanteam/javascript',
    './rules/basic',
    './rules/extension',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
}
