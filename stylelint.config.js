export default {
  customSyntax: 'postcss-scss',
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
  rules: {
    'unit-disallowed-list': ['em'],
    'declaration-property-unit-disallowed-list': {
      '/^(?!font-size$).+/': ['rem']
    }
  }
};
