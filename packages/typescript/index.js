module.exports = {
  extends: [
    '@byzanteam/javascript',
    './rules/basic',
    './rules/extension',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
}
