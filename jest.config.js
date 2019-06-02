module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testMatch: ['<rootDir>/tests/**/*.(spec|test).[jt]s?(x)'],
  // setupFiles: ['<rootDir>/tests/unit/testSetup.js'],
  // setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  // collectCoverageFrom: [
  //   'app/**/*.{js,jsx}',
  //   '!app/**/*.test.{js,jsx}',
  //   '!app/*/RbGenerated*/*.{js,jsx}',
  //   '!app/app.js',
  //   '!app/*/*/Loadable.{js,jsx}'
  // ],
  // coverageThreshold: {
  //   global: {
  //     statements: 98,
  //     branches: 91,
  //     functions: 98,
  //     lines: 98
  //   }
  // },
  // coverageReporters: ['json', 'lcov', 'text-summary'],
};
