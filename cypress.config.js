
const { defineConfig } = require('cypress');
const { plugin: grepPlugin } = require("@cypress/grep/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      grepPlugin(config);
      if (config.env.baseUrl) {
        config.baseUrl = config.env.baseUrl;
      }
      return config;
    },
    pageLoadTimeout: 300000,
    retries: 1,
  },
});