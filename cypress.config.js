
const { defineConfig } = require('cypress');
const grep = require("@cypress/grep/src/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      grep(config);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    pageLoadTimeout: 300000,
    retries: 1,
  },
});