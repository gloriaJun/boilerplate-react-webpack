module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  setupFiles: ['<rootDir>/tests/unit/testSetup.js'],
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  moduleNameMapper: {
    '^@(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
};
