const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.cypress.io/",
    viewportHeight: 721,
    viewportWidth: 1536,
    screenshotOnRunFailure: true, 
    video: false
  },
  retries: {
    // When running from Terminal (`cypress run`)
    runMode: 1,
    // When running from GUI (`cypress open`)
    openMode: 0
  }
});
