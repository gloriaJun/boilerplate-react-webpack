module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    // "no-console": "off",
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] },
    ],
  },
  globals: {
    jest: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    test: true,
  },
};
