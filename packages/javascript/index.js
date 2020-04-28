module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    './rules/best-practices',
    './rules/ecmascript',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ],
  parserOptions: {
    sourceType: 'module',
  },
}
