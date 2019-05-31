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
};
