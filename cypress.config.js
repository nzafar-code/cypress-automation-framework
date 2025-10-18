
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    pageLoadTimeout: 300000,
    retries: 1,
  },
});