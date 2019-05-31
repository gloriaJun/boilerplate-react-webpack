module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 2,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] },
    ],
    'import/no-unresolved': 0,
  },
  // globals: {
  //   jest: true,
  //   expect: true,
  //   beforeEach: true,
  //   afterEach: true,
  //   describe: true,
  //   it: true,
  //   test: true,
  // },
};
