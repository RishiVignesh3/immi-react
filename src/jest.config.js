module.exports = {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios/)" // This ensures that Jest transforms `axios` as well
    ],
  };