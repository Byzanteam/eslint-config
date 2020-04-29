module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    './rules/base',
    './rules/essential',
    './rules/miscellaneous',
    './rules/readability',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-vue',
  ],
}
