const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],

    // ESLint
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    camelcase: 'error',

    // React
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 1,
    // 'react/jsx-pascal-case': [
    //   2,
    //   {
    //     allowAllCaps: true,
    //     ignore: [],
    //   },
    // ],
    // 'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    // 'react/jsx-indent-props': ['error', 2],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^(on|handle).+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
          // getter: ['/^(get|fetch|search).+$/'],
          // setter: ['/^set.+$/'],
        },
      },
    ],

    // import Rules
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: './config/webpack.base.conf.js',
    },
    // 'import/resolver': {
    //   node: {
    //     paths: [path.resolve(__dirname, 'src')],
    //   },
    // },
  },
};
