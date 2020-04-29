module.exports = {
  rules: {
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { after: true, before: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': ['error', 'always'],
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
    'vue/max-len': 'off',
    'vue/no-boolean-default': 'off',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-unsupported-features': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
      },
    ],
    'vue/sort-keys': 'off',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true,
      },
    ],
    'vue/static-class-names-order': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-slot': 'error',
  },
}